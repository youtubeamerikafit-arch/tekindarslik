"use strict";
const { p, h, ul, note, code, table, quiz } = require("./helpers");

module.exports = [
  {
    id: 70,
    title: "JVM xotira modeli va allokatsiya",
    minutes: 17,
    desc: "Heap, stack, boxing va GC harakatini tushunib, Scala kodida ortiqcha allokatsiyani kamaytirishni o'rganamiz.",
    blocks: [
      p("JVM xotirasi asosan <b>heap</b> va <b>stack</b> ga bo'linadi. Har bir thread o'z stackiga ega: lokal ibtidoiy qiymatlar va havolalar shu yerda turadi. Obyektlar heap'da yashaydi va <b>garbage collector</b> tomonidan tozalanadi. Kichik obyektlar ko'p yaratilsa, GC tez-tez ishlaydi; bu kechikish (latency) va throughput ga bevosita ta'sir qiladi."),
      code("Boxing.scala", `val ibtidoiy: Array[Int] = Array(1, 2, 3)
val qutilgan: Array[Integer] =
  Array(Integer.valueOf(1), Integer.valueOf(2), Integer.valueOf(3))

println(ibtidoiy.sum)
println(qutilgan.map(_.intValue).sum)`, "6\n6"),
      p("Natija bir xil, lekin xotira va tezlik boshqacha. <code>Array[Int]</code> to'rtta baytlik elementlarni ketma-ket saqlaydi; <code>Array[Integer]</code> esa har bir element uchun heap obyekt va havola ishlatadi. Generik kolleksiyalar JVM'da boxing qiladi. Hot spotlarda <code>Array[Int]</code>, ixtisoslashtirilgan struktura yoki <code>while</code> tsikl bilan allokatsiyani kamaytirish mumkin."),
      code("Yigindi.scala", `val n = 1_000_000
val massiv = Array.tabulate(n)(i => i + 1)

var jami = 0L
var i = 0
while (i < n) {
  jami += massiv(i)
  i += 1
}
println(jami)`, "500000500000"),
      table(
        ["Hudud", "Nimani saqlaydi", "Kim tozalaydi", "Xavf"],
        [
          ["Stack", "Lokal qiymat va havolalar", "Avtomatik", "Stack overflow"],
          ["Heap", "Obyektlar", "GC", "GC pauzalari"],
          ["Metaspace", "Klass metama'lumoti", "ClassLoader", "Klass sizib chiqishi"],
        ]
      ),
      note("Optimizatsiyani o'lchovsiz boshlamang. Avval heap dump va GC loglarini tahlil qiling, keyin tor joyni tuzating. <code>-Xmx</code> ni ko'r-ko'rona oshirish GC pauzasini uzaytirishi mumkin; konteynerda <code>-XX:MaxRAMPercentage</code> ko'proq mos keladi.", "warning"),
    ],
    quiz: [
      quiz("Array[Int] va Array[Integer] orasidagi asosiy farq nima?", ["Integer massivi boxing qiladi", "Int massivi heap'da yashamaydi", "Integer massivi faqat 2 element saqlaydi", "Farq yo'q"], 0, "Integer havola tipi bo'lib, har bir qiymat obyekt sifatida qutiladi; Int esa ibtidoiy massivda saqlanadi."),
      quiz("Lokal ibtidoiy qiymatlar odatda qayerda saqlanadi?", ["Heap", "Stack", "Metaspace", "Disk"], 1, "Thread stackida lokal ibtidoiy qiymatlar va havolalar saqlanadi."),
      quiz("GC tez-tez ishlashi qanday oqibat beradi?", ["Latency va throughput yomonlashadi", "Kod kompilyatsiya bo'lmaydi", "Stack o'lchami oshadi", "Faqat disk to'ladi"], 0, "Ko'p allokatsiya GC ni tez-tez ishga tushiradi, bu pauza va umumiy unumdorlikka salbiy ta'sir qiladi."),
    ],
  },
  {
    id: 71,
    title: "Kolleksiya tanlovi va algoritmik xarajat",
    minutes: 16,
    desc: "List, Vector, Array, Map va Set amallarining murakkabligini solishtirib, real vazifaga mos kolleksiyani tanlashni o'rganamiz.",
    blocks: [
      p("Kolleksiya tanlovi kodning tezligini ko'pincha algoritmdan ko'ra ko'proq belgilaydi. <code>List</code> boshga qo'shishda O(1), lekin oxiriga qo'shish va indeks bo'yicha o'qish O(n). <code>Vector</code> deyarli barcha amallarda samarali, ammo kichik kolleksiyalarda biroz og'irroq. <code>Map</code> va <code>Set</code> qidiruvni o'rtacha O(1) qiladi."),
      code("Ozgarish.scala", `var royxat = List.empty[Int]
var vektor = Vector.empty[Int]

for (i <- 1 to 5000) {
  royxat = royxat :+ i
  vektor = vektor :+ i
}

println(royxat.length)
println(vektor.length)
println(vektor(4999))`, "5000\n5000\n5000"),
      p("Bu misolda natija bir xil, lekin <code>List :+</code> har safar butun ro'yxatni aylanib chiqadi. 5000 ta elementda bu sezilmaydi, millionda esa falokat. Amallar soni muhim bo'lsa <code>Vector</code> yoki <code>ListBuffer</code> ishlating. Faqat oxirgi natija kerak bo'lsa, <code>view</code> oraliq kolleksiyalarni yaratmaydi."),
      code("ViewFiltr.scala", `val natija =
  (1 to 1_000_000).view.filter(_ % 2 == 0).take(3).toList

println(natija)`, "List(2, 4, 6)"),
      table(
        ["Amal", "List", "Vector", "Array"],
        [
          ["Boshga qo'shish", "O(1)", "O(log n)", "O(n)"],
          ["Oxiriga qo'shish", "O(n)", "O(log n)", "O(n) (nusxa)"],
          ["Indeks bo'yicha o'qish", "O(n)", "O(log n)", "O(1)"],
          ["Xotira samaradorligi", "Yuqori", "O'rtacha", "Juda yuqori"],
        ]
      ),
      note("Kichik kolleksiyalarda murakkablik farqi ahamiyatsiz; kod ravonligi muhimroq. Millionlab elementlarda esa <code>view</code>, <code>iterator</code> va <code>Array</code> kabi vositalar hal qiluvchi bo'ladi. Har doim real hajm va real ma'lumot bilan o'lchang.", "tip"),
    ],
    quiz: [
      quiz("List oxiriga :+ bilan qo'shishning murakkabligi qanday?", ["O(1)", "O(log n)", "O(n)", "O(n log n)"], 2, "List boshga qo'shishga optimallashgan; oxiriga qo'shish butun ro'yxatni aylanadi."),
      quiz("Vector indeks bo'yicha o'qishda qanday murakkablik beradi?", ["O(1)", "O(log n)", "O(n)", "O(n^2)"], 1, "Vector daraxtsimon tuzilma bo'lib, indeksga O(log n) da yetadi."),
      quiz("view.filter.take qanday afzallik beradi?", ["Barcha elementlarni darhol hisoblaydi", "Oраliq kolleksiya yaratmasdan lazy ishlaydi", "Faqat parallel ishlaydi", "Xotirani ko'paytiradi"], 1, "View lazy hisoblaydi va kerakli elementlar olingach to'xtaydi, oraliq ro'yxatlar yaratilmaydi."),
    ],
  },
  {
    id: 72,
    title: "JMH bilan ishonchli benchmark",
    minutes: 17,
    desc: "JIT, warmup va dead code elimination tuzoqlarini hisobga olib, JMH yordamida ishonchli mikrobenchmark yozishni o'rganamiz.",
    blocks: [
      p("Mikrobenchmark yozish oson, lekin ishonchli natija olish qiyin. JVM kodni ish jarayonida kompilyatsiya qiladi (<b>JIT</b>), shuning uchun birinchi o'lchovlar sekin bo'ladi. <b>JMH</b> warmup, bir nechta iteratsiya, fork va natijani iste'mol qilish (Blackhole) kabi muammolarni hal qiladi. Natija esa faqat bir xil muhitdagi taqqoslash uchun ma'noga ega."),
      code("YigindiBenchmark.scala", `import org.openjdk.jmh.annotations.*

@State(Scope.Thread)
@BenchmarkMode(Array(Mode.AverageTime))
@Warmup(iterations = 3)
@Measurement(iterations = 5)
class YigindiBenchmark {
  @Param(Array("100000"))
  var n: Int = 0

  @Benchmark
  def massiv(): Long = {
    val a = Array.tabulate(n)(i => i.toLong)
    var s = 0L
    var i = 0
    while (i < n) { s += a(i); i += 1 }
    s
  }
}

@main def reja(): Unit = {
  println("rejim: avgt")
  println("warmup: 3, measurement: 5")
  println("parametr: n=100000")
}`, "rejim: avgt\nwarmup: 3, measurement: 5\nparametr: n=100000"),
      p("Benchmark ichida <code>println</code>, tarmoq yoki disk bo'lmasligi kerak: ular o'lchovni buzadi. Natija ishlatilmasa, JIT butun hisoblashni o'chirib tashlashi mumkin. Shuning uchun natijani <code>Blackhole.consume</code> ga bering yoki uni qaytarib, JMH o'zi iste'mol qilsin. Quyida oddiy qaytarish usuli ko'rsatilgan."),
      code("Natija.scala", `import org.openjdk.jmh.infra.Blackhole

def yigindi(n: Int): Long = {
  var s = 0L
  var i = 0
  while (i < n) { s += i; i += 1 }
  s
}

val bh = new Blackhole("Today's password is swordfish. I understand instantiating Blackhole is discouraged.")
bh.consume(yigindi(1000))
println("natija iste'mol qilindi")`, "natija iste'mol qilindi"),
      table(
        ["Tuzoq", "Natijasi", "Yechim"],
        [
          ["Warmup yo'q", "JIT qilmagan kod", "@Warmup qo'shish"],
          ["Natija ishlatilmadi", "Dead code elimination", "Qaytarish yoki Blackhole"],
          ["Bir fork", "Kam ishonch", "Bir nechta fork"],
          ["Bir vaqtda boshqa ish", "Shovqinli o'lchov", "Toza muhit"],
        ]
      ),
      note("JMH natijalarini absolut raqam sifatida qabul qilmang: ular apparat, JVM versiyasi va yuklamaga bog'liq. Asosiy foyda — variantlarni bir xil sharoitda taqqoslash. Har qanday optimizatsiyadan oldin va keyin bir xil benchmarkni ishlating.", "tip"),
    ],
    quiz: [
      quiz("JMH warmup iteratsiyalari nima uchun kerak?", ["JIT optimizatsiyalarini barqarorlashtirish uchun", "Kodni kompilyatsiyadan saqlash uchun", "Xotirani tozalash uchun", "Faqat CPU ni qizdirish uchun"], 0, "Warmup JIT kompilyatsiyasi va kesh isishini yakunlab, barqarorroq o'lchov beradi."),
      quiz("Benchmark natijasi ishlatilmasa nima bo'lishi mumkin?", ["JIT butun hisoblashni olib tashlaydi", "JVM qulab tushadi", "Natija avtomatik saqlanadi", "JMH xato beradi"], 0, "Dead code elimination ishlatilmagan hisoblashni o'chirib tashlashi mumkin, shuning uchun natijani iste'mol qilish shart."),
      quiz("JMH absolut natijasini qanday talqin qilish kerak?", ["Har qanday muhitda bir xil", "Faqat bir xil sharoitdagi taqqoslash uchun", "Faqat CPU chastotasini ko'rsatadi", "Kod sifatini to'liq isbotlaydi"], 1, "O'lchov apparat va JVM muhitiga bog'liq; asosiy qiymat bir xil sharoitdagi nisbiy taqqoslashdir."),
    ],
  },
  {
    id: 73,
    title: "Keshlash, memoizatsiya va profiling",
    minutes: 17,
    desc: "Memoizatsiya, LRU kesh va profil jadvallari yordamida takroriy hisoblarni kamaytirish va tor joyni topishni o'rganamiz.",
    blocks: [
      p("<b>Memoizatsiya</b> — sof funksiya natijasini argument bo'yicha saqlash. Bir xil kirish uchun funksiya qayta hisoblanmaydi. Bu faqat <b>sof</b> funksiyalar uchun xavfsiz: agar funksiya tashqi holatga bog'liq bo'lsa yoki yon ta'sir qilsa, eski natija noto'g'ri bo'ladi. Kesh cheklanmagan bo'lsa, xotira sizib chiqishi mumkin."),
      code("Memo.scala", `def memo[A, B](f: A => B): A => B = {
  val kesh = scala.collection.mutable.Map.empty[A, B]
  a => kesh.getOrElseUpdate(a, f(a))
}

var chaqiruvlar = 0
val sekin = memo { (n: Int) =>
  chaqiruvlar += 1
  n * n
}

println(sekin(4))
println(sekin(4))
println("chaqiruvlar: " + chaqiruvlar)`, "16\n16\nchaqiruvlar: 1"),
      p("Cheklangan kesh uchun eng eski elementni chiqarib yuborish (LRU) kerak. Quyidagi misolda oddiy so'rovlar ketma-ketligi bo'yicha hit va miss nisbati hisoblanadi. Haqiqiy loyihada Caffeine yoki Scala Cache kabi tayyor kutubxona statistikasi, TTL va hajm chegarasini beradi."),
      code("KeshNisbati.scala", `val sorovlar = List(1, 2, 1, 3, 1, 2)
val kesh = scala.collection.mutable.Set.empty[Int]
var hit = 0

sorovlar.foreach { k =>
  if (kesh(k)) hit += 1
  else kesh += k
}

println("hit: " + hit + ", miss: " + (sorovlar.size - hit))`, "hit: 3, miss: 3"),
      table(
        ["Strategiya", "Qachon", "Xavf"],
        [
          ["Memoizatsiya", "Sof funksiya", "Cheksiz o'sish"],
          ["LRU", "Cheklangan xotira", "Ko'p miss"],
          ["TTL", "Eskiruvchi ma'lumot", "Eskirgan javob"],
          ["Profil jadvali", "Tor joyni topish", "Noto'g'ri talqin"],
        ]
      ),
      note("Optimizatsiyadan oldin profiling qiling. async-profiler yoki JFR bilan CPU va allokatsiya profili oling; flame graph tor joyni ko'rsatadi. Keshni faqat o'lchangan takrorlanish bo'lsa qo'shing, aks holda murakkablik va xatolik ortadi.", "warning"),
    ],
    quiz: [
      quiz("Memoizatsiya qanday funksiyalar uchun xavfsiz?", ["Yon ta'sirli funksiyalar", "Faqat kirishga bog'liq sof funksiyalar", "Tasodifiy son qaytaradigan funksiyalar", "Fayl o'qiydigan funksiyalar"], 1, "Sof funksiya bir xil kirish uchun bir xil natija beradi, shuning uchun keshlash xavfsiz."),
      quiz("Cheklanmagan keshning asosiy xavfi nima?", ["Xotira sizib chiqishi", "Kod kompilyatsiya bo'lmasligi", "Threadlar ko'payishi", "Faqat sekinlashuv"], 0, "Har bir yangi kalit saqlanaversa, kesh xotirani cheksiz egallashi mumkin."),
      quiz("Profiling qachon kerak?", ["Har doim, kod yozishdan oldin", "Optimizatsiyadan oldin tor joyni aniqlash uchun", "Faqat deploydan keyin", "Hech qachon"], 1, "Profiling haqiqiy xarajatni ko'rsatadi va taxminlarga asoslangan optimizatsiyani oldini oladi."),
    ],
  },
  {
    id: 74,
    title: "Property-based testing: ScalaCheck",
    minutes: 16,
    desc: "Misolga asoslangan testlardan farqli, xossalarni generatorlar va shrinking bilan tekshirishni o'rganamiz.",
    blocks: [
      p("Oddiy test bitta aniq misolni tekshiradi. <b>Property-based testing</b> esa umumiy xossani ifodalaydi: masalan, \"ro'yxatni ikki marta teskari qilish asl ro'yxatni beradi\". ScalaCheck yuzlab tasodifiy kirish yaratadi va xato topsa, uni <b>shrink</b> qilib eng kichik qarshi misolga keltiradi. Bu chegaraviy holatlarni topishda juda kuchli."),
      code("TeskariXossa.scala", `import org.scalacheck.Prop.forAll

val teskari: org.scalacheck.Prop =
  forAll { (xs: List[Int]) => xs.reverse.reverse == xs }

teskari.check()`, "+ OK, passed 100 tests."),
      p("Generatorlar kirish fazosini belgilaydi. <code>Gen.choose</code> oraliq son, <code>Gen.oneOf</code> variant, <code>Gen.listOf</code> ro'yxat yaratadi. Test uchun generatorning o'zi ham muhim: juda tor generator xatoni topmaydi, juda keng generator esa noto'g'ri taxminlar bilan shovqin yaratadi."),
      code("Generator.scala", `import org.scalacheck.Gen

val juft = Gen.choose(1, 50).map(_ * 2)
val namuna = juft.sample

println(namuna.exists(_ % 2 == 0))
println(Gen.const(7).sample)`, "true\nSome(7)"),
      table(
        ["Yondashuv", "Kirish", "Xato topish", "Takrorlanuvchanlik"],
        [
          ["Misol testi", "Qo'lda", "Cheklangan", "Yuqori"],
          ["Property test", "Generator", "Keng", "Seed bilan"],
          ["Mutatsiya testi", "Kod o'zgarishi", "Test sifati", "Yuqori"],
        ]
      ),
      note("Property testda seed ni logga yozing: xato topilganda aynan o'sha holatni takrorlash uchun kerak. Murakkab domen generatorlarini alohida yozing va ularni ham test qiling. Shrinking har doim ham minimal sababni ko'rsatmaydi.", "tip"),
    ],
    quiz: [
      quiz("Property-based test nimani tekshiradi?", ["Bitta aniq natijani", "Umumiy xossani ko'p generatsiyalarda", "Faqat kompilyatsiyani", "Fayl mavjudligini"], 1, "Property test generator yaratgan ko'p kirishlarda umumiy qonuniyatni tekshiradi."),
      quiz("ScalaCheck xato topsa nima qiladi?", ["Xatoni yashiradi", "Kirishni shrink qilib kichraytiradi", "Testni avtomatik o'chiradi", "Faqat log yozadi"], 1, "Shrinking qarshi misolni soddalashtirib, muammoning mohiyatini ko'rsatadi."),
      quiz("Property test natijasini takrorlash uchun nima muhim?", ["Seed ni saqlash", "Faqat test nomi", "JVM versiyasi", "Fayl yo'li"], 0, "Seed generator ketma-ketligini aniqlaydi; uni saqlash xatoni aynan takrorlash imkonini beradi."),
    ],
  },
  {
    id: 75,
    title: "Effektli kodni testlash: cats-effect runtime",
    minutes: 17,
    desc: "MUnit va Cats Effect Suite bilan IO testlarini yozish, virtual vaqt va deterministik bajarishni o'rganamiz.",
    blocks: [
      p("Effektli kodni testlashda <code>IO</code> ni darhol bajarmaslik kerak. Test framework effektni boshqaradi, xatolarni ushlaydi va vaqtni boshqaradi. <b>munit-cats-effect</b> <code>CatsEffectSuite</code> orqali <code>IO</code> qaytaradigan testlarni qo'llab-quvvatlaydi. Test tanasi <code>IO[Unit]</code> bo'lib, runtime uni bajaradi va natijani tekshiradi."),
      code("HisobSuite.scala", `import cats.effect.*
import munit.CatsEffectSuite

class HisobSuite extends CatsEffectSuite {
  test("yig'indi") {
    IO(20 + 22).map(n => assertEquals(n, 42))
  }

  test("xato Either'da") {
    IO.raiseError[Int](new RuntimeException("xato"))
      .attempt
      .map(r => assert(r.isLeft))
  }
}`, "HisobSuite:\n  + yig'indi\n  + xato Either'da"),
      p("Vaqtga bog'liq kodni real kutish bilan test qilish sekin va beqaror. <b>TestControl</b> virtual vaqtni boshqaradi: <code>IO.sleep(1.hour)</code> bir zumda o'tadi. Bu testni tez va deterministik qiladi. Quyidagi dastur virtual vaqtda bajarilib, darhol \"tugadi\" chiqaradi."),
      code("VirtualVaqt.scala", `import cats.effect.*
import cats.effect.testkit.TestControl
import scala.concurrent.duration.*

object Demo extends IOApp.Simple {
  val dastur: IO[Unit] =
    IO.sleep(1.hour) *> IO.println("tugadi")

  def run: IO[Unit] = TestControl.executeEmbed(dastur)
}`, "tugadi"),
      table(
        ["Vosita", "Nima beradi", "Qachon"],
        [
          ["CatsEffectSuite", "IO testlarini bajarish", "Oddiy effekt testi"],
          ["TestControl", "Virtual vaqt", "Timeout va retry"],
          ["Real runtime", "Haqiqiy scheduling", "Integratsiya testi"],
        ]
      ),
      note("Testda <code>unsafeRunSync</code> ni qo'lda chaqirmang; suite buni boshqaradi. Har bir test mustaqil bo'lsin: global <code>Ref</code> yoki umumiy resursni testlar orasida qoldirmang. Vaqtga bog'liq testlarda real <code>Thread.sleep</code> ishlatmang.", "warning"),
    ],
    quiz: [
      quiz("CatsEffectSuite test tanasini qanday bajaradi?", ["uni IO sifatida boshqaradi", "Thread.sleep bilan", "Kompilyatsiya vaqtida", "Hech qachon"], 0, "Suite IO tavsifini olib, test runtime'ida bajaradi va natijani tekshiradi."),
      quiz("TestControl nimani boshqaradi?", ["Faqat xotirani", "Virtual vaqtni va schedulingni", "Fayl tizimini", "JSON kodlashni"], 1, "TestControl effektlarni deterministik scheduler va virtual vaqt bilan bajaradi."),
      quiz("Effektli testda real Thread.sleep nega yomon?", ["Sekin va beqaror bo'ladi", "IO ni buzadi", "Kompilyatsiya xatosi beradi", "Xotirani ko'paytiradi"], 0, "Real kutish test vaqtini uzaytiradi va CI muhitida beqarorlik keltiradi."),
    ],
  },
  {
    id: 76,
    title: "Integratsiya testlari va test konteynerlari",
    minutes: 16,
    desc: "Haqiqiy ma'lumotlar bazasi bilan integratsiya testini tashkil qilish, Testcontainers va izolyatsiyani o'rganamiz.",
    blocks: [
      p("Unit testlar domen mantiqini tez tekshiradi, lekin SQL, kodlash va tarmoq chegaralarini qamramaydi. <b>Integratsiya testi</b> haqiqiy yoki unga juda yaqin komponent bilan ishlaydi. <b>Testcontainers</b> Docker orqali vaqtincha PostgreSQL, Kafka yoki Redis ko'taradi. Test tugagach konteyner o'chiriladi va muhit toza qoladi."),
      code("PostgresTest.scala", `import org.testcontainers.containers.PostgreSQLContainer

val pg = new PostgreSQLContainer("postgres:16")
pg.start()

try {
  println(pg.getDockerImageName)
  println(pg.isRunning)
} finally {
  pg.stop()
}`, "postgres:16\ntrue"),
      p("Har bir test oldidan ma'lumotni tozalash yoki tranzaksiyani qaytarish kerak. Aks holda testlar bir-biriga ta'sir qiladi va tartibga bog'liq bo'lib qoladi. Quyidagi misolda jadvallar ro'yxati bo'yicha tozalash rejasi chop etiladi; haqiqiy kodda bu SQL bajariladi."),
      code("Tozalash.scala", `val jadvallar = List("events", "users")

jadvallar.foreach(t => println("TRUNCATE TABLE " + t))
println("test bazasi tozalandi")`, "TRUNCATE TABLE events\nTRUNCATE TABLE users\ntest bazasi tozalandi"),
      table(
        ["Daraja", "Tezlik", "Ishonchlilik", "Nima tekshiradi"],
        [
          ["Unit", "Juda tez", "Yuqori", "Sof mantiq"],
          ["Integratsiya", "O'rtacha", "Yuqori", "DB, HTTP, kodlash"],
          ["E2E", "Sekin", "O'rtacha", "Butun oqim"],
        ]
      ),
      note("Testcontainers uchun Docker mavjud bo'lishi kerak; CI'da image'larni keshlang. Har bir test to'plami o'z bazasini yaratsin. Konteynerni qo'lda to'xtatishni unutmang yoki framework resursini ishlating, aks holda jarayonlar qolib ketadi.", "tip"),
    ],
    quiz: [
      quiz("Testcontainers nimani ta'minlaydi?", ["Vaqtinchalik haqiqiy infratuzilma", "Faqat mock obyektlar", "Kompilyator optimizatsiyasi", "UI testlar"], 0, "Testcontainers Docker orqali vaqtincha DB yoki broker ko'tarib, integratsiya muhitini beradi."),
      quiz("Integratsiya testlarida izolyatsiya nima uchun muhim?", ["Testlar bir-biriga ta'sir qilmasligi uchun", "Konteyner tezroq ishlashi uchun", "Kod kamroq bo'lishi uchun", "Faqat hisobot uchun"], 0, "Har bir test toza holatdan boshlanishi natijalarni takrorlanuvchan qiladi."),
      quiz("Test konteynerini testdan keyin nima qilish kerak?", ["Qoldirish", "To'xtatish va tozalash", "Yangi image yuklash", "Faqat log yozish"], 1, "Resursni bo'shatish kerak; aks holda konteynerlar va portlar band qoladi."),
    ],
  },
  {
    id: 77,
    title: "Test piramidasi, fixture va determinizm",
    minutes: 15,
    desc: "Beqaror testlarning sabablarini, fixture naqshlarini va vaqt, tasodif hamda tarmoqni boshqarish usullarini o'rganamiz.",
    blocks: [
      p("Test piramidasi ko'p unit test, kamroq integratsiya va juda kam E2E testdan iborat. <b>Fixture</b> — test uchun tayyor muhit: ma'lumot, obyekt, vaqt yoki resurs. Yaxshi fixture aniq, mustaqil va tez tozalanadi. Yomon fixture esa testlar orasida umumiy holat qoldirib, <b>flaky</b> natijalar keltiradi."),
      code("SoatFixture.scala", `trait Soat { def hozir: Long }

def yoshYil(bol: Long, soat: Soat): Long =
  (soat.hozir - bol) / 1000

val soat = new Soat { def hozir: Long = 1_000_000L }
println(yoshYil(400_000L, soat))`, "600"),
      p("Vaqt, tasodifiy son va tarmoq — flaky testlarning uch asosiy manbasi. Ularni interfeys ortiga yashirib, testda deterministik implementatsiya bering. Quyidagi fixture funksiyasi resursni ochadi, test tanasini bajaradi va har qanday holatda yopadi. Bu <code>Resource</code> naqshining testdagi soddaroq ko'rinishi."),
      code("Fixture.scala", `final case class TestBaza(rows: List[String]) {
  def yop(): Unit = println("baza yopildi")
}

def fixture[A](tana: TestBaza => A): A = {
  val baza = TestBaza(List("a", "b"))
  try tana(baza)
  finally baza.yop()
}

fixture { b =>
  println("qatorlar: " + b.rows.size)
}`, "qatorlar: 2\nbaza yopildi"),
      table(
        ["Flaky sabab", "Belgisi", "Yechim"],
        [
          ["Vaqt", "Ba'zan o'tadi", "Clock interfeysi"],
          ["Tasodif", "Turli natija", "Seed yoki stub"],
          ["Tarmoq", "CI'da yiqiladi", "Mock yoki konteyner"],
          ["Tartibga bog'liqlik", "Yolg'iz o'tadi", "Izolyatsiya"],
        ]
      ),
      note("Flaky testni qayta ishga tushirish bilan yashirmang: u haqiqiy poyga yoki dizayn xatosini ko'rsatishi mumkin. Testni karantinga olib, sababini toping. CI'da testlarni parallel va turli tartibda ishga tushirish yashirin bog'liqliklarni ochadi.", "warning"),
    ],
    quiz: [
      quiz("Fixture nima?", ["Test uchun tayyor muhit va ma'lumot", "Kompilyator bayrog'i", "Faqat mock kutubxonasi", "Ishlab chiqarish serveri"], 0, "Fixture test oldidan kerakli obyekt, ma'lumot yoki resursni tayyorlaydi va keyin tozalaydi."),
      quiz("Vaqtga bog'liq flaky testni qanday tuzatish mumkin?", ["Ko'proq sleep qo'shish", "Clock ni interfeys ortiga yashirib, soxta vaqt berish", "Testni o'chirish", "CI ni sekinlashtirish"], 1, "Vaqt manbasini abstraktsiyalash testda deterministik qiymat berish imkonini yaratadi."),
      quiz("Flaky testni qayta ishga tushirish nega xavfli?", ["Vaqtni tejaydi", "Haqiqiy xatoni yashirishi mumkin", "Kodni o'zgartiradi", "Testni tezlashtiradi"], 1, "Qayta urinish tasodifiy o'tishni beradi, lekin poyga yoki izolyatsiya muammosini bartaraf etmaydi."),
    ],
  },
  {
    id: 78,
    title: "Spark arxitekturasi: driver, executor, DAG",
    minutes: 17,
    desc: "Spark driver, executor va DAG tuzilishini, lazy bajarish va partition tushunchasini o'rganamiz.",
    blocks: [
      p("Spark dasturi <b>driver</b> da boshlanadi: u DAG (yo'naltirilgan asiklik graf) quradi va vazifalarni <b>executor</b> larga taqsimlaydi. Ma'lumot <b>partition</b> larga bo'linadi; har bir partition alohida vazifa sifatida qayta ishlanadi. Transformatsiyalar lazy: ular faqat reja qo'shadi, <code>collect</code>, <code>count</code> yoki <code>write</code> kabi action bajarilganda ish boshlanadi."),
      code("SparkSessiya.scala", `import org.apache.spark.sql.SparkSession

val spark = SparkSession.builder()
  .appName("Demo")
  .master("local[2]")
  .getOrCreate()

println(spark.sparkContext.master)
println(spark.sparkContext.appName)
spark.stop()`, "local[2]\nDemo"),
      p("Partition soni parallellikni belgilaydi. Juda kam partition bo'lsa, executorlar bo'sh turadi; juda ko'p bo'lsa, scheduling va kichik fayllar muammosi paydo bo'ladi. Quyidagi misolda 100 element 4 partitionga bo'linadi va har bir partition mustaqil vazifa bo'ladi."),
      code("Bolish.scala", `import org.apache.spark.sql.SparkSession

val spark = SparkSession.builder()
  .master("local[4]")
  .appName("Bolish")
  .getOrCreate()

val df = spark.range(0, 100, 1, 4)
println(df.rdd.getNumPartitions)
spark.stop()`, "4"),
      table(
        ["Komponent", "Vazifasi", "Xotira"],
        [
          ["Driver", "Reja, scheduling, natija", "Kichik"],
          ["Executor", "Vazifalarni bajarish", "Katta"],
          ["Partition", "Ma'lumot bo'lagi", "Executor ichida"],
        ]
      ),
      note("Driver'da katta ma'lumotni <code>collect</code> qilmang: u butun natijani bitta JVM xotirasiga yig'adi. Natijani yozish yoki agregatni kichik holda olish kerak. <code>local[*]</code> faqat o'rganish uchun; ishlab chiqarishda cluster menejeri ishlatiladi.", "warning"),
    ],
    quiz: [
      quiz("Spark driver nima qiladi?", ["DAG quradi va vazifalarni taqsimlaydi", "Faqat ma'lumot saqlaydi", "Executor o'rnida ishlaydi", "Faqat SQL yozadi"], 0, "Driver DAG va schedulingni boshqaradi, natijalarni yig'adi."),
      quiz("Transformatsiya qachon haqiqatan bajariladi?", ["Darhol", "Action chaqirilganda", "Spark to'xtaganda", "Faqat collect ichida"], 1, "Spark lazy; action bajarilganda rejadagi transformatsiyalar ishga tushadi."),
      quiz("Partition soni nimaga ta'sir qiladi?", ["Parallellik va scheduling xarajatiga", "Faqat fayl nomiga", "JVM versiyasiga", "SQL sintaksisiga"], 0, "Partitionlar parallel vazifalar sonini belgilaydi va shuffle/scheduling xarajatiga ta'sir qiladi."),
    ],
  },
  {
    id: 79,
    title: "DataFrame: transformatsiya va action",
    minutes: 17,
    desc: "DataFrame yaratish, select/filter/groupBy transformatsiyalari va action'lar bilan natijani olishni o'rganamiz.",
    blocks: [
      p("DataFrame — nomlangan ustunlar va ma'lumot tipiga ega taqsimlangan jadval. <code>select</code>, <code>filter</code>, <code>withColumn</code>, <code>groupBy</code> kabi transformatsiyalar yangi reja yaratadi, lekin ishni boshlamaydi. <code>show</code>, <code>count</code>, <code>collect</code>, <code>write</code> action'lari esa rejani bajaradi. Bu ajratish Spark optimizatsiyasining asosi."),
      code("Guruhlash.scala", `import spark.implicits._

val df = Seq(("olma", 3), ("non", 2), ("olma", 5))
  .toDF("nom", "soni")

val natija = df.groupBy("nom").sum("soni").orderBy("nom").collect()
natija.foreach(r => println(r.getString(0) + "=" + r.getLong(1)))`, "non=2\nolma=8"),
      p("DataFrame sxemasi ustun nomi va tipini saqlaydi. Sxemani tekshirish kodni ishlatishdan oldin xatolarni topishga yordam beradi. Quyidagi misolda ustun nomlari va tiplari chop etiladi; ishlab chiqarishda bu ma'lumotni log yoki testda tekshirish mumkin."),
      code("Sxema.scala", `import spark.implicits._

val df = Seq((1, "Ali"), (2, "Vali")).toDF("id", "ism")
println(df.schema.fieldNames.mkString(", "))
println(df.schema.fields.map(f => f.name + ":" + f.dataType.typeName).mkString(", "))`, "id, ism\nid:integer, ism:string"),
      table(
        ["Transformatsiya", "Vazifasi", "Actionmi"],
        [
          ["select", "Ustun tanlash", "Yo'q"],
          ["filter", "Qatorlarni filtrlash", "Yo'q"],
          ["groupBy + sum", "Agregatsiya", "Yo'q"],
          ["collect", "Natijani driver'ga olish", "Ha"],
        ]
      ),
      note("<code>collect</code> natijani driver xotirasiga yig'adi; katta jadvalda xavfli. Katta natijani <code>write</code> bilan saqlang yoki <code>take(n)</code> bilan kichik qismini oling. Ustun nomlarini string bilan yozish o'rniga Dataset va case class ishlatish tip xavfsizligini beradi.", "tip"),
    ],
    quiz: [
      quiz("groupBy qachon bajariladi?", ["Darhol", "Action chaqirilganda", "Faqat show bilan", "Driver to'xtaganda"], 1, "groupBy transformatsiya bo'lib, rejaga qo'shiladi; action bajarilganda ishga tushadi."),
      quiz("collect metodi nimani qiladi?", ["Natijani driver xotirasiga yig'adi", "Faqat faylga yozadi", "Yangi partition yaratadi", "Sxemani o'zgartiradi"], 0, "collect barcha natijani driver'ga olib keladi, shuning uchun katta natijada xavfli."),
      quiz("DataFrame sxemasi nimani saqlaydi?", ["Ustun nomlari va tiplarini", "Faqat qatorlar sonini", "Faqat fayl yo'lini", "Executor manzillarini"], 0, "DataFrame sxemasi ustun nomlari, tiplari va nullable ma'lumotini saqlaydi."),
    ],
  },
];
