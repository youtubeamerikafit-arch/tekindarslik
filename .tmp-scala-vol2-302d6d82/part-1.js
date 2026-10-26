"use strict";
const { p, h, ul, note, code, table, quiz } = require("./helpers");

module.exports = [
  {
    id: 50,
    title: "IO — effektni tavsiflash san'ati",
    minutes: 16,
    desc: "Cats Effect IO yordamida yon ta'sirlarni tavsifga aylantirish, qayta ishlatish va dastur chegarasida bajarishni o'rganamiz.",
    blocks: [
      p("Birinchi jildda <code>Future</code> e'lon qilingan paytda darhol ishga tushishini ko'rgan edik. <b>Cats Effect</b>dagi <code>IO</code> boshqacha: u bajarilgan ish emas, balki <b>bajarilishi mumkin bo'lgan reja</b>. <code>IO.println(\"salom\")</code> hech narsa chop etmaydi; u faqat konsolga yozish niyatini saqlaydi. Shu sababli bir tavsifni xohlagancha qayta ishlatish, birlashtirish va test qilish mumkin."),
      code("EffektTavsifi.scala", `import cats.effect.*

object EffektTavsifi extends IOApp.Simple {
  val salom: IO[Unit] = IO.println("salom")

  val dastur: IO[Unit] = for {
    _ <- salom
    _ <- salom
  } yield ()

  def run: IO[Unit] = dastur
}`, "salom\nsalom"),
      p("<code>for</code> ichida effektlar <b>ketma-ket</b> bog'lanadi: ikkinchi qator birinchisi tugagach rejalashtiriladi. <code>run</code> — dasturning yagona kirish nuqtasi. Cats Effect runtime bu tavsifni bajaradi, threadlarni boshqaradi va xatolarni ushlaydi."),
      code("Hisoblash.scala", `import cats.effect.*

object Hisoblash extends IOApp.Simple {
  val dastur: IO[Unit] = for {
    a <- IO.pure(6 * 7)
    matn <- IO.delay("natija: " + a)
    _ <- IO.println(matn)
  } yield ()

  def run: IO[Unit] = dastur
}`, "natija: 42"),
      table(
        ["Xususiyat", "Future", "IO"],
        [
          ["Qachon boshlanadi", "E'lon qilinganda darhol", "Runtime bajarishni so'raganda"],
          ["Bekor qilish", "Cheklangan", "Fiber orqali to'liq qo'llab-quvvatlanadi"],
          ["Qayta ishlatish", "Yon ta'sir bir marta bo'ladi", "Tavsif har safar qayta bajariladi"],
          ["Xato modeli", "Callback ichida", "Effekt kanali orqali"],
        ]
      ),
      note("<code>IO.pure</code> allaqachon hisoblangan qiymat uchun, <code>IO.delay</code> esa kechiktirilgan yon ta'sir uchun ishlatiladi. <code>unsafeRunSync()</code> ni faqat dastur eng chekkasida chaqiring; effekt ichida chaqirish deadlock va bloklanishga olib kelishi mumkin.", "warning"),
    ],
    quiz: [
      quiz("Cats Effect'dagi IO qiymati bajarilishdan oldin nimani ifodalaydi?", ["Tayyor natijani", "Effekt tavsifini", "Thread obyektini", "Faqat xato kodini"], 1, "IO — bu tavsif: u qanday ish bajarilishini saqlaydi, lekin runtime bajarishni so'ramaguncha ishlamaydi."),
      quiz("Nega bitta val salom = IO.println(\"salom\") ni ikki marta ishlatish ikki qator chiqaradi?", ["IO keshlanmaydi va har bajarilishda qayta ishlaydi", "println ikki marta yozilgan", "IO avtomatik nusxalanadi", "Runtime birinchi effektni takrorlaydi"], 0, "IO tavsifi bajarilishlar orasida natijani saqlamaydi; har safar ishga tushirilganda yon ta'sir yana bajariladi."),
      quiz("unsafeRunSync() ni qayerda chaqirish eng xavfsiz?", ["Har bir yordamchi funksiya ichida", "IO.map ichida", "Parallel fiber ichida", "Dasturning eng chekkasida, IOApp.run orqali"], 3, "Effektlarni faqat eng tashqi chegarada bajarish kerak; ichkarida chaqirish bloklanish va tarkibiy buzilish keltiradi."),
    ],
  },
  {
    id: 51,
    title: "Fiberlar: structured concurrency va bekor qilish",
    minutes: 17,
    desc: "Yengil fiberlarni ishga tushirish, bekor qilish va parTraverse bilan boshqarilgan parallellikni amalda ko'ramiz.",
    blocks: [
      p("<b>Fiber</b> — Cats Effect'dagi yengil bajarilish birligi. Har bir fiber OS thread emas; runtime ularni kichik to'plam thread ustida navbat bilan bajaradi. <code>effekt.start</code> fiberni ishga tushiradi va darhol <code>Fiber</code> tutqichini qaytaradi. Shu tutqich orqali natijani kutish, bekor qilish yoki qo'shilish mumkin."),
      code("BekorQilish.scala", `import cats.effect.*
import scala.concurrent.duration.*

object BekorQilish extends IOApp.Simple {
  val uzoq: IO[Unit] = IO.sleep(5.seconds) *> IO.println("tugadi")

  val dastur: IO[Unit] = for {
    fiber <- uzoq.start
    _ <- IO.println("ishga tushdi")
    _ <- fiber.cancel
    _ <- IO.println("bekor qilindi")
  } yield ()

  def run: IO[Unit] = dastur
}`, "ishga tushdi\nbekor qilindi"),
      p("Bekor qilish ham effekt: <code>cancel</code> tugagach fiber to'xtaydi va uning <code>Resource</code> finalizerlari ishga tushadi. Bu <b>structured concurrency</b> tamoyilining asosi: ota effekt tugasa, u yaratgan bolalar ham boshqariladi. <code>parTraverse</code> barcha bolalarni kutadi; ulardan biri xato bersa, qolganlari bekor qilinadi."),
      code("ParallelYigindi.scala", `import cats.effect.*
import cats.syntax.all.*

object ParallelYigindi extends IOApp.Simple {
  val ishlar: List[IO[Int]] = List(IO.pure(10), IO.pure(20), IO.pure(30))

  val dastur: IO[Unit] =
    ishlar.parTraverse(identity).flatMap(xs => IO.println("jami: " + xs.sum))

  def run: IO[Unit] = dastur
}`, "jami: 60"),
      ul([
        "<code>start</code> — fon vazifasini boshlaydi va <code>Fiber</code> qaytaradi.",
        "<code>join</code> — fiber tugashini kutadi va <code>Outcome</code> beradi.",
        "<code>cancel</code> — fiberni xavfsiz to'xtatadi; finalizerlar bajariladi.",
        "<code>parTraverse</code> — kolleksiya elementlarini parallel qayta ishlaydi va tartibni saqlaydi.",
      ]),
      note("Fiber juda arzon, lekin cheksiz ko'p fiber yaratish ham resurs masalasi. Bir vaqtda ochiq ishlar sonini <code>parTraverseN</code> yoki semaphore bilan cheklang. Bloklaydigan I/O uchun alohida thread pool ajratish kerak.", "tip"),
    ],
    quiz: [
      quiz("start metodi qanday qiymat qaytaradi?", ["Fiber tutqichini", "Bajarilgan natijani", "Thread poolni", "Promise obyektini"], 0, "start effektni fonda boshlaydi va uni boshqarish uchun Fiber tutqichini qaytaradi."),
      quiz("parTraverse ichidagi bolalardan biri xato bersa, odatda nima sodir bo'ladi?", ["Boshqa bolalar ishlashda davom etadi", "Qolgan bolalar bekor qilinadi va xato yuqoriga uzatiladi", "Xato e'tiborsiz qoldiriladi", "Butun JVM to'xtaydi"], 1, "Structured concurrency xato bo'lganda qolgan bolalarni bekor qiladi va xatoni ota effektga uzatadi."),
      quiz("Nega IO ichida unsafeRunSync() chaqirish mumkin emas?", ["U har doim xato beradi", "U effektni ikki marta bajaradi", "U joriy threadni bloklab, deadlock keltirishi mumkin", "U faqat testlarda ishlaydi"], 2, "Ichki unsafeRunSync joriy runtime threadini bloklaydi; bu deadlock va resurs ochligiga olib kelishi mumkin."),
    ],
  },
  {
    id: 52,
    title: "Ref, Deferred va atomik holat",
    minutes: 16,
    desc: "Parallel o'qish-yozish uchun Ref, bir martalik signal uchun Deferred va ularning xavfsizlik kafolatlarini o'rganamiz.",
    blocks: [
      p("<code>var</code> ni parallel fiberlar orasida bo'lishish xavfli: ikki fiber bir vaqtda o'qib, keyin yozsa, biri ikkinchisining natijasini yo'qotadi. Cats Effect'dagi <code>Ref</code> atomik, funksional holat saqlaydi. <code>update</code>, <code>modify</code> va <code>updateAndGet</code> amallari compare-and-swap asosida bajariladi, shuning uchun hisob yo'qolmaydi."),
      code("AtomikHisob.scala", `import cats.effect.*
import cats.syntax.all.*

object AtomikHisob extends IOApp.Simple {
  val dastur: IO[Unit] = for {
    ref <- Ref[IO].of(0)
    _ <- (1 to 100).toList.parTraverse_(_ => ref.update(_ + 1))
    n <- ref.get
    _ <- IO.println("hisob: " + n)
  } yield ()

  def run: IO[Unit] = dastur
}`, "hisob: 100"),
      p("<code>Deferred</code> — bir martalik signal. Bir fiber <code>complete</code> bilan qiymat beradi, boshqalari <code>get</code> bilan kutadi. Bu ishlab chiqaruvchi va iste'molchi o'rtasidagi oddiy sinxronizatsiya uchun qulay. <code>Deferred</code> faqat bir marta to'ldiriladi; ikkinchi <code>complete</code> <code>false</code> qaytaradi."),
      code("Signal.scala", `import cats.effect.*
import scala.concurrent.duration.*

object Signal extends IOApp.Simple {
  val dastur: IO[Unit] = for {
    d <- Deferred[IO, String]
    ishchi <- (IO.sleep(100.millis) *> d.complete("tayyor")).start
    qiymat <- d.get
    _ <- IO.println(qiymat)
    _ <- ishchi.join
  } yield ()

  def run: IO[Unit] = dastur
}`, "tayyor"),
      table(
        ["Asbob", "Vazifasi", "Qachon ishlatiladi"],
        [
          ["Ref", "Atomik holat", "Hisoblagich, kesh, joriy konfiguratsiya"],
          ["Deferred", "Bir martalik signal", "Ishga tushish yoki tugashni bildirish"],
          ["Queue", "Xavfsiz navbat", "Producer va consumer oqimi"],
          ["Semaphore", "Ruxsatlar cheklovi", "Bir vaqtda ishlovchilar sonini cheklash"],
        ]
      ),
      note("<code>Ref</code> ichiga o'zgaruvchan obyekt solmang: atomiklik faqat havolani almashtirishda ishlaydi. Ichki kolleksiyani joyida o'zgartirish poyga holatini qaytaradi. Har doim yangi o'zgarmas qiymat qaytaring.", "warning"),
    ],
    quiz: [
      quiz("Ref parallel update'larda nimani kafolatlaydi?", ["Har bir yangilanish atomik bajarilishini", "Fiberlar tartibini", "Natijaning diskda saqlanishini", "Barcha fiberlarni bir threadda ishlashini"], 0, "Ref compare-and-swap asosida ishlaydi: parallel yangilanishlar bir-birini yo'qotmaydi."),
      quiz("Deferred ikkinchi marta complete qilinsa nima qaytadi?", ["true", "false", "Xato", "Yangi Deferred"], 1, "Deferred bir martalik signal; ikkinchi complete muvaffaqiyatsiz bo'lib false qaytaradi."),
      quiz("Ref ichida o'zgaruvchan Map saqlash nega xavfli?", ["Map juda katta", "Ref uni o'qiy olmaydi", "Atomiklik faqat havola almashganda ishlaydi, ichki mutatsiya poyga yaratadi", "cats-effect Map bilan ishlamaydi"], 2, "Ref faqat havolani atomik almashtiradi; ichidagi obyektni joyida o'zgartirish sinxronizatsiyani chetlab o'tadi."),
    ],
  },
  {
    id: 53,
    title: "Semaphore, Mutex va resurs cheklash",
    minutes: 15,
    desc: "Bir vaqtda bajariladigan ishlar sonini semaphore va mutex bilan cheklash, kritik seksiyani himoyalashni o'rganamiz.",
    blocks: [
      p("Parallel effektlar ko'payganda tashqi resurs ham cheklangan bo'ladi: ulanishlar puli, fayl deskriptorlari, API kvotasi. <b>Semaphore</b> bir vaqtda ruxsat oladigan ishlovchilar sonini belgilaydi. <code>permit.use</code> ruxsatni oladi va blok tugagach avtomatik qaytaradi. Bu <code>try/finally</code> dan xavfsizroq, chunki bekor qilishda ham ishlaydi."),
      code("Ruxsatlar.scala", `import cats.effect.*
import cats.effect.std.Semaphore
import scala.concurrent.duration.*

object Ruxsatlar extends IOApp.Simple {
  def band(nom: String, sem: Semaphore[IO]): IO[Unit] =
    sem.permit.use(_ => IO.sleep(50.millis) *> IO.println(nom + " tugadi"))

  val dastur: IO[Unit] = for {
    sem <- Semaphore[IO](2)
    _ <- band("A", sem)
    _ <- band("B", sem)
    _ <- band("C", sem)
  } yield ()

  def run: IO[Unit] = dastur
}`, "A tugadi\nB tugadi\nC tugadi"),
      p("<b>Mutex</b> — bitta ruxsatli semaphore. U kritik seksiyani himoyalaydi: bir vaqtda faqat bitta fiber ichkariga kiradi. Mutexni uzoq bloklaydigan I/O bilan ushlab turmang; aks holda boshqa fiberlar navbatda kutib qoladi. Qisqa holat yangilash yoki bir martalik resurs tayyorlash uchun ishlating."),
      code("KritikSeksiya.scala", `import cats.effect.*
import cats.effect.std.Mutex

object KritikSeksiya extends IOApp.Simple {
  val dastur: IO[Unit] = for {
    m <- Mutex[IO]
    _ <- m.lock.use(_ => IO.println("kritik seksiya 1"))
    _ <- m.lock.use(_ => IO.println("kritik seksiya 2"))
  } yield ()

  def run: IO[Unit] = dastur
}`, "kritik seksiya 1\nkritik seksiya 2"),
      table(
        ["Asbob", "Ruxsatlar", "Maqsad"],
        [
          ["Semaphore(n)", "n ta", "Bir vaqtda n ta ishni bajarish"],
          ["Mutex", "1 ta", "Kritik seksiyani himoyalash"],
          ["Queue", "navbat", "Ishlab chiqaruvchi va iste'molchini ajratish"],
          ["Ref", "yo'q", "Atomik holat, lekin bloklash emas"],
        ]
      ),
      note("Semaphore adolatli (fair) bo'lishi kafolatlanmagan; uzoq kutayotgan fiber och qolishi mumkin. Ruxsatni imkon qadar qisqa ushlang. Agar ruxsat olish uchun kutish cheksiz bo'lsa, <code>timeout</code> yoki navbat sig'imini qo'shing.", "tip"),
    ],
    quiz: [
      quiz("Semaphore(2) nimani anglatadi?", ["Bir vaqtda ko'pi bilan 2 ta ishlovchi ruxsat oladi", "Har bir ish 2 marta bajariladi", "2 ta thread yaratiladi", "Faqat 2 ta so'rov qabul qilinadi"], 0, "Semaphore(2) ikkita ruxsat beradi; uchinchi ishlovchi ruxsat bo'shaguncha kutadi."),
      quiz("Mutex qanday semaphore sifatida qaraladi?", ["Ruxsatsiz semaphore", "Ikki ruxsatli semaphore", "Bir ruxsatli semaphore", "Cheksiz ruxsatli semaphore"], 2, "Mutex bitta ruxsatli semaphore bo'lib, kritik seksiyaga bir vaqtda bitta fiber kirishini ta'minlaydi."),
      quiz("Nega mutexni uzoq I/O bilan ushlab turish tavsiya etilmaydi?", ["Mutex I/O ni qo'llab-quvvatlamaydi", "Boshqa fiberlar uzoq kutib, throughput tushadi", "I/O xatosi mutexni o'chiradi", "Mutex faqat CPU ishlari uchun"], 1, "Ruxsat uzoq ushlansa, qolganlar navbatda turadi va tizim samaradorligi keskin pasayadi."),
    ],
  },
  {
    id: 54,
    title: "Resource va xavfsiz resurs boshqaruvi",
    minutes: 15,
    desc: "Fayl, ulanish yoki thread pool kabi resurslarni ochish, ishlatish va har qanday holatda yopishni Resource bilan ta'minlaymiz.",
    blocks: [
      p("Resurs (fayl, DB ulanishi, thread pool) ochilgach, xato yoki bekor qilish bo'lsa ham yopilishi shart. <b>Resource</b> shu shartnomani tipda ifodalaydi: <code>Resource.make(ochish)(yopish)</code>. <code>use</code> bloki tugagach yoki bekor qilinganda yopish amali kafolat bilan bajariladi. Bu cats-effect'dagi bracket naqshining standart ko'rinishi."),
      code("Resurs.scala", `import cats.effect.*

object Resurs extends IOApp.Simple {
  def resurs(nom: String): Resource[IO, String] =
    Resource.make(IO.println("ochildi: " + nom).as(nom)) { x =>
      IO.println("yopildi: " + x)
    }

  val dastur: IO[Unit] =
    resurs("baza").use(x => IO.println("ishlatildi: " + x))

  def run: IO[Unit] = dastur
}`, "ochildi: baza\nishlatildi: baza\nyopildi: baza"),
      p("Bir nechta resursni <code>for</code> bilan birlashtirish mumkin. Ular <b>ochilish tartibida</b> olinadi, <b>teskari tartibda</b> yopiladi. Bu muhim: agar A resursi B ga bog'liq bo'lsa, B avval yopilishi kerak. <code>Resource.both</code> va <code>parTupled</code> parallel ochish uchun ishlatiladi, lekin finalizer tartibi baribir aniqlangan."),
      code("IkkitaResurs.scala", `import cats.effect.*

object IkkitaResurs extends IOApp.Simple {
  val baza = Resource.make(IO.println("baza ochildi").as("baza")) { _ =>
    IO.println("baza yopildi")
  }
  val fayl = Resource.make(IO.println("fayl ochildi").as("fayl")) { _ =>
    IO.println("fayl yopildi")
  }

  val ikkalasi: Resource[IO, (String, String)] = for {
    b <- baza
    f <- fayl
  } yield (b, f)

  val dastur: IO[Unit] = ikkalasi.use { case (b, f) =>
    IO.println(b + " + " + f)
  }

  def run: IO[Unit] = dastur
}`, "baza ochildi\nfayl ochildi\nbaza + fayl\nfayl yopildi\nbaza yopildi"),
      table(
        ["Yondashuv", "Xatoda yopiladi", "Bekor qilishda yopiladi", "Kompozitsiya"],
        [
          ["try/finally", "Ha", "Qisman", "Qo'lda"],
          ["Future + onComplete", "Ha", "Yo'q", "Qiyin"],
          ["Resource", "Ha", "Ha", "Monad orqali"],
        ]
      ),
      note("<code>Resource</code> yaratilganda hech narsa ochilmaydi; u ham tavsif. <code>use</code> ichida resursni tashqariga qaytarmang: yopilgandan keyin yaroqsiz bo'ladi. Kerak bo'lsa <code>allocated</code> bilan finalizer tutqichini ongli ravishda oling.", "warning"),
    ],
    quiz: [
      quiz("Resource.make(ochish)(yopish) da yopish qachon bajariladi?", ["Faqat use muvaffaqiyatli tugaganda", "Xato yoki bekor qilishda ham, use tugagach", "Faqat dastur qayta ishga tushganda", "Hech qachon avtomatik bajarilmaydi"], 1, "Resource finalizeri use qanday tugashidan qat'i nazar bajariladi, shu jumladan bekor qilishda ham."),
      quiz("Ikki resurs for orqali olinganda finalizerlar qanday tartibda ishlaydi?", ["Ochilish tartibida", "Teskari tartibda", "Parallel", "Tasodifiy"], 1, "Resurslar teskari tartibda yopiladi, shuning uchun bog'liq resurslar xavfsiz bo'shatiladi."),
      quiz("Resource yaratilganda resurs darhol ochiladimi?", ["Ha, make chaqirilganda", "Ha, use chaqirilganda", "Yo'q, faqat use bajarilganda", "Faqat IOApp ishga tushganda"], 2, "Resource ham tavsif; ochish amali use (yoki allocated) bajarilganda sodir bo'ladi."),
    ],
  },
  {
    id: 55,
    title: "fs2 Stream asoslari: pull va pipe",
    minutes: 16,
    desc: "fs2 oqimining pull modeli, tarkibiy qurilishi va sof transformatsiyalarini amaliy misollarda o'rganamiz.",
    blocks: [
      p("<b>fs2</b> oqimi — cheksiz yoki juda katta ma'lumotni bo'laklab qayta ishlash uchun tavsif. <code>Stream[F, A]</code> har doim elementni <b>so'rov bo'yicha</b> tortib oladi (pull). Shu sababli butun faylni xotiraga yuklash shart emas. Oqim kompozitsiyasi <code>++</code>, <code>map</code>, <code>filter</code>, <code>flatMap</code> kabi sof amallar bilan quriladi; effektlar esa <code>evalMap</code> orqali qo'shiladi."),
      code("SoddaOqim.scala", `import cats.effect.*
import fs2.*

object SoddaOqim extends IOApp.Simple {
  val dastur: IO[Unit] =
    Stream(1, 2, 3)
      .map(_ * 2)
      .compile
      .toList
      .flatMap(xs => IO.println(xs.mkString(", ")))

  def run: IO[Unit] = dastur
}`, "2, 4, 6"),
      p("Oqimlarni ulash <code>++</code> bilan, elementlarni almashtirish <code>flatMap</code> bilan amalga oshiriladi. <code>compile</code> oqimni bitta effektga aylantiradi: <code>toList</code>, <code>count</code>, <code>fold</code>, <code>drain</code>. Kompilyatsiya qilinmaguncha hech qanday element oqmaydi."),
      code("Birlashtirish.scala", `import cats.effect.*
import fs2.*

object Birlashtirish extends IOApp.Simple {
  val dastur: IO[Unit] =
    (Stream(1, 2) ++ Stream(10, 20))
      .filter(_ > 1)
      .compile
      .toList
      .flatMap(xs => IO.println(xs))

  def run: IO[Unit] = dastur
}`, "List(2, 10, 20)"),
      table(
        ["Tuzilma", "Xotira", "Qayta ishlash", "Effekt"],
        [
          ["List", "Hammasi", "Bir marta", "Yo'q"],
          ["Iterator", "Lazy", "Bir marta", "Yo'q"],
          ["fs2.Stream", "Lazy, bo'lakli", "Qayta ishlatiladi", "Bor"],
        ]
      ),
      note("Oqimni ikki marta compile qilish odatda ikki marta o'qishni anglatadi. Fayl yoki tarmoq manbai qayta ochilmasligi uchun natijani <code>compile.toList</code> bilan ongli ravishda saqlang yoki bitta compile ichida barcha ishlovni bajaring.", "tip"),
    ],
    quiz: [
      quiz("fs2 Stream elementlarni qanday yetkazadi?", ["Iste'molchi so'rovi bo'yicha pull modelida", "Barchasini oldindan push qilib", "Faqat parallel", "Faqat fayldan"], 0, "fs2 pull modeliga asoslanadi: quyi oqim elementni so'raganda yuqori oqim uni yetkazadi."),
      quiz("compile.toList qanday natija qaytaradi?", ["Stream[IO, List[A]]", "IO[List[A]]", "List[IO[A]]", "Faqat Unit"], 1, "compile oqimni bitta effektga yig'adi; toList natijasi IO[List[A]] ko'rinishida bo'ladi."),
      quiz("Stream(1, 2) ++ Stream(10, 20) natijasi qanday?", ["Faqat birinchi oqim", "Ikkala oqim elementlari ketma-ket", "Elementlar yig'indisi", "Parallel birlashma"], 1, "++ ikki oqimni ketma-ket ulaydi: avval chap, keyin o'ng oqim elementlari keladi."),
    ],
  },
  {
    id: 56,
    title: "Oqim transformatsiyalari: chunk, filter, evalMap",
    minutes: 15,
    desc: "Sof va effektli transformatsiyalarni ajratish, evalMap bilan effekt qo'shish va chunkN bilan bo'laklab ishlashni o'rganamiz.",
    blocks: [
      p("Oqimdagi amallar ikki turga bo'linadi: <b>sof</b> (<code>map</code>, <code>filter</code>, <code>collect</code>) va <b>effektli</b> (<code>evalMap</code>, <code>evalFilter</code>, <code>evalScan</code>). Sof amallarni iloji boricha ko'p ishlatish oqimni test qilishni osonlashtiradi. <code>evalMap</code> har bir element uchun effekt qaytaradi va natijalarni <b>tartib bilan</b> bajaradi."),
      code("EffektliFiltr.scala", `import cats.effect.*
import fs2.*

object EffektliFiltr extends IOApp.Simple {
  val dastur: IO[Unit] =
    Stream(1, 2, 3, 4)
      .filter(_ % 2 == 0)
      .evalMap(n => IO.println("ko'rildi: " + n).as(n * 10))
      .compile
      .toList
      .flatMap(xs => IO.println(xs.mkString(", ")))

  def run: IO[Unit] = dastur
}`, "ko'rildi: 2\nko'rildi: 4\n20, 40"),
      p("Katta oqimlarda har bir elementni alohida emas, <b>bo'lak</b> (chunk) bilan ishlash samarali. <code>chunkN(n)</code> elementlarni n tadan guruhlaydi. Chunk ichida oddiy kolleksiya amallarini qo'llash mumkin, keyin yana oqimga qaytariladi. Bu tarmoq yoki fayl I/O da tizim chaqiruvlari sonini kamaytiradi."),
      code("Bolaklash.scala", `import cats.effect.*
import fs2.*

object Bolaklash extends IOApp.Simple {
  val dastur: IO[Unit] =
    Stream.range(1, 7)
      .chunkN(3)
      .map(_.toList)
      .compile
      .toList
      .flatMap(xs => IO.println(xs))

  def run: IO[Unit] = dastur
}`, "List(List(1, 2, 3), List(4, 5, 6))"),
      note("<code>evalMap</code> elementlarni ketma-ket qayta ishlaydi; parallel kerak bo'lsa <code>parEvalMap</code> ishlatiladi. Tartib muhim bo'lsa <code>parEvalMap</code>, tartib muhim bo'lmasa <code>parEvalMapUnordered</code> tezroq bo'ladi.", "tip"),
    ],
    quiz: [
      quiz("evalMap oddiy map'dan nimasi bilan farq qiladi?", ["Elementlarni tashlab yuboradi", "Har bir element uchun effekt bajaradi", "Faqat raqamlar bilan ishlaydi", "Oqimni to'xtatadi"], 1, "evalMap funksiyasi F[B] qaytaradi va oqim ichida effektni bajaradi; map esa sof qiymat qaytaradi."),
      quiz("Stream.range(1, 7).chunkN(3) nechta bo'lak beradi?", ["1 ta", "2 ta", "3 ta", "6 ta"], 1, "1 dan 6 gacha elementlar 3 tadan ikki bo'lakka ajratiladi."),
      quiz("Qaysi amal tartibni saqlagan holda parallel ishlaydi?", ["parEvalMapUnordered", "evalMap", "parEvalMap", "compile.drain"], 2, "parEvalMap parallellikni cheklaydi va natijalar tartibini saqlaydi."),
    ],
  },
  {
    id: 57,
    title: "Backpressure va parallel oqim",
    minutes: 16,
    desc: "Oqim tezligini boshqarish, parEvalMap bilan parallellikni cheklash va backpressure'ning pull modelidagi o'rnini tushunamiz.",
    blocks: [
      p("<b>Backpressure</b> — ishlab chiqaruvchi iste'molchidan tezroq ishlamasligi uchun bosim. Pull modelida bu tabiiy: quyi oqim so'ramaguncha yuqori oqim keyingi elementni bermaydi. Ammo parallel effekt qo'shsangiz, bir vaqtda nechta ish bajarilishini ongli ravishda cheklash kerak. <code>parEvalMap(n)</code> aynan shu cheklovni beradi."),
      code("CheklanganParallel.scala", `import cats.effect.*
import fs2.*
import scala.concurrent.duration.*

object CheklanganParallel extends IOApp.Simple {
  val dastur: IO[Unit] =
    Stream(1, 2, 3, 4)
      .parEvalMap(2)(n => IO.sleep(20.millis).as(n * n))
      .compile
      .toList
      .flatMap(xs => IO.println(xs.mkString(", ")))

  def run: IO[Unit] = dastur
}`, "1, 4, 9, 16"),
      p("<code>parEvalMap(n)</code> natijalar tartibini saqlaydi, <code>parEvalMapUnordered(n)</code> esa tayyor bo'lgan natijani darhol beradi va odatda tezroq. Ikkalasi ham bir vaqtda ko'pi bilan n ta effekt ishlatadi. Bu cheklov DB ulanishlari yoki tashqi API uchun juda muhim."),
      code("TartibsizParallel.scala", `import cats.effect.*
import fs2.*
import scala.concurrent.duration.*

object TartibsizParallel extends IOApp.Simple {
  val dastur: IO[Unit] =
    Stream(1, 2, 3)
      .parEvalMapUnordered(3)(n => IO.sleep((4 - n).toLong * 20.millis).as(n))
      .compile
      .toList
      .flatMap(xs => IO.println(xs.sorted.mkString(", ")))

  def run: IO[Unit] = dastur
}`, "1, 2, 3"),
      table(
        ["Amal", "Tartib", "Parallel", "Qachon"],
        [
          ["evalMap", "Saqlanadi", "Yo'q", "Bog'liq effektlar"],
          ["parEvalMap(n)", "Saqlanadi", "n tagacha", "Tartibli parallel I/O"],
          ["parEvalMapUnordered(n)", "Saqlanmaydi", "n tagacha", "Mustaqil vazifalar"],
        ]
      ),
      note("Cheksiz <code>parEvalMap</code> ishlatmang: u resurslarni tugatadi. n ni tashqi tizim kvotasi, ulanish puli va xotira byudjetidan kelib chiqib tanlang. Oqim ichida bloklaydigan kodni <code>evalBlocking</code> yoki alohida pool orqali boshqaring.", "warning"),
    ],
    quiz: [
      quiz("Backpressure nima qiladi?", ["Ishlab chiqaruvchini iste'molchi tezligiga moslaydi", "Barcha elementlarni xotiraga yig'adi", "Faylni siqadi", "Threadlar sonini oshiradi"], 0, "Backpressure ortiqcha yuklanishning oldini oladi: ishlab chiqaruvchi iste'molchi tayyor bo'lguncha kutadi."),
      quiz("parEvalMap(4) bir vaqtda nechta effektga ruxsat beradi?", ["Cheksiz", "Ko'pi bilan 4 ta", "Aynan 4 ta, kam emas", "Har safar 1 ta"], 1, "n chegarasi bir vaqtda bajariladigan effektlarning yuqori chegarasidir."),
      quiz("parEvalMapUnordered qachon afzal?", ["Natijalar tartibi muhim bo'lsa", "Har bir effekt bir xil bo'lsa", "Tartib muhim bo'lmasa va tezlik kerak bo'lsa", "Faqat bitta element bo'lsa"], 2, "Unordered tayyor natijani darhol beradi, shuning uchun tartib muhim bo'lmaganda tezroq ishlaydi."),
    ],
  },
  {
    id: 58,
    title: "Fayl va CSV oqimini qayta ishlash",
    minutes: 17,
    desc: "Katta faylni xotiraga yuklamasdan o'qish, kodlash, qatorlarga ajratish va CSV satrlarini tahlil qilishni o'rganamiz.",
    blocks: [
      p("Katta faylni <code>Source.fromFile(...).getLines().toList</code> bilan o'qish xotirani tugatishi mumkin. fs2'ning <code>Files[IO].readAll</code> oqimi faylni bo'laklab o'qiydi, <code>text.utf8.decode</code> baytlarni matnga, <code>text.lines</code> esa qatorlarga ajratadi. Har bir bosqich lazy, shuning uchun millionlab qatorli fayl ham barqaror ishlaydi."),
      code("QatorSoni.scala", `import cats.effect.*
import fs2.*
import fs2.io.file.{Files, Path}

object QatorSoni extends IOApp.Simple {
  val dastur: IO[Unit] =
    Files[IO]
      .readAll(Path("savdo.csv"))
      .through(text.utf8.decode)
      .through(text.lines)
      .filter(_.nonEmpty)
      .compile
      .count
      .flatMap(n => IO.println("qatorlar: " + n))

  def run: IO[Unit] = dastur
}`, "qatorlar: 3"),
      p("CSV ni o'qishda sarlavha qatorini ajratish, bo'sh qatorlarni tashlash va ustunlar sonini tekshirish muhim. Quyidagi misolda har bir satr ikki ustunga bo'linadi. Haqiqiy loyihada bu joyda kutubxona (masalan, fs2-data-csv) ishlatiladi, chunki qo'lda yozilgan parser qo'shtirnoq va vergul kabi holatlarni hisobga olmaydi."),
      code("CsvTahlil.scala", `import cats.effect.*
import fs2.*

object CsvTahlil extends IOApp.Simple {
  val dastur: IO[Unit] =
    Stream("olma,1200", "non,800", "choy,4500")
      .map(_.split(","))
      .collect { case Array(nom, narx) => nom + " -> " + narx }
      .compile
      .toList
      .flatMap(xs => IO.println(xs.mkString("\\n")))

  def run: IO[Unit] = dastur
}`, "olma -> 1200\nnon -> 800\nchoy -> 4500"),
      table(
        ["Bosqich", "Amal", "Natija"],
        [
          ["O'qish", "Files[IO].readAll", "Stream[IO, Byte]"],
          ["Dekodlash", "text.utf8.decode", "Stream[IO, String]"],
          ["Qatorlar", "text.lines", "Har bir qator alohida element"],
          ["Tahlil", "split + collect", "Strukturalangan yozuv"],
        ]
      ),
      note("Fayl kodlashini aniq bering: UTF-8 bo'lmagan fayl noto'g'ri o'qiladi. Katta faylni bir necha marta compile qilmang; bir oqimda barcha agregatlarni hisoblang. Xato qatorni butun oqimni to'xtatmasdan yon kanalga (masalan, Queue) yuborish mumkin.", "tip"),
    ],
    quiz: [
      quiz("Files[IO].readAll nimani qaytaradi?", ["Stream[IO, Byte]", "List[String]", "IO[String]", "Stream[IO, Int]"], 0, "readAll faylni baytlar oqimi sifatida beradi; keyin dekodlash bosqichi qo'llanadi."),
      quiz("Nega katta faylni toList bilan o'qish xavfli?", ["Fayl o'chib ketadi", "Butun mazmun xotiraga yuklanadi", "Kodlash buziladi", "fs2 uni qo'llab-quvvatlamaydi"], 1, "toList barcha elementlarni bir joyga yig'adi; katta faylda xotira tugashi mumkin."),
      quiz("CSV parserida qo'lda split ishlatishning asosiy cheklovi nima?", ["Juda sekin", "Qo'shtirnoq ichidagi vergulni hisobga olmaydi", "Faqat UTF-16 ni o'qiydi", "Faylni yopa olmaydi"], 1, "Oddiy split CSV ning qo'shtirnoq, escape va ko'p qatorli maydon kabi qoidalarini bilmaydi."),
    ],
  },
  {
    id: 59,
    title: "Oqim xatolari, retry va graceful shutdown",
    minutes: 16,
    desc: "Oqim ichidagi xatolarni ushlash, element darajasida Either bilan ishlash va dasturni toza to'xtatishni o'rganamiz.",
    blocks: [
      p("Oqimdagi bitta xato butun ishlovni to'xtatishi mumkin. <code>handleErrorWith</code> xato yuz berganda boshqa oqimga o'tadi, <code>attempt</code> esa har bir element natijasini <code>Either</code> ga aylantiradi. Qaysi strategiya to'g'ri ekani xato tabiatiga bog'liq: bitta buzuq qator butun faylni to'xtatmasligi kerak, lekin DB ulanishi uzilsa butun jarayonni qayta boshlash kerak bo'lishi mumkin."),
      code("OqimXatosi.scala", `import cats.effect.*
import fs2.*

object OqimXatosi extends IOApp.Simple {
  val dastur: IO[Unit] =
    Stream(1, 2, 0, 4)
      .evalMap(n => IO(10 / n))
      .handleErrorWith(_ => Stream(-1))
      .compile
      .toList
      .flatMap(xs => IO.println(xs.mkString(", ")))

  def run: IO[Unit] = dastur
}`, "1, 5, -1"),
      p("Element darajasidagi xatoni <code>attempt</code> bilan ushlash oqimni davom ettiradi. Quyidagi misolda nolga bo'lish faqat shu element uchun xato natijasi beradi, qolganlar正常 qayta ishlanadi. Bu yondashuv ma'lumot sifati hisobotlarida juda foydali: buzuq yozuvlar alohida ro'yxatga olinadi."),
      code("ElementXatosi.scala", `import cats.effect.*
import fs2.*

object ElementXatosi extends IOApp.Simple {
  val dastur: IO[Unit] =
    Stream(2, 0, 5)
      .evalMap { n =>
        IO(10 / n).attempt.map(_.fold(_ => "xato(" + n + ")", _.toString))
      }
      .compile
      .toList
      .flatMap(xs => IO.println(xs.mkString(", ")))

  def run: IO[Unit] = dastur
}`, "5, xato(0), 2"),
      table(
        ["Strategiya", "Qamrov", "Natija"],
        [
          ["handleErrorWith", "Butun oqim", "Xatodan keyin boshqa oqim"],
          ["attempt", "Har bir element", "Either bilan davom etish"],
          ["retry", "Effekt", "Vaqtinchalik xatoni qayta urinish"],
          ["onFinalize", "Oqim tugashi", "Resursni bo'shatish"],
        ]
      ),
      note("Graceful shutdown uchun <code>IOApp</code> signalni ushlaydi va fiberlarni bekor qiladi. Navbat va oqimlarni yopish, buferlarni bo'shatish uchun <code>onFinalize</code> dan foydalaning. <code>System.exit</code> ni to'g'ridan-to'g'ri chaqirmang: finalizerlar bajarilmay qoladi.", "warning"),
    ],
    quiz: [
      quiz("handleErrorWith oqimda xato yuz berganda nima qiladi?", ["Xatoni jimgina tashlaydi", "Boshqa oqim bilan almashtiradi", "Oqimni ikki marta ishga tushiradi", "Faqat log yozadi"], 1, "handleErrorWith xato holatida berilgan muqobil oqimga o'tadi."),
      quiz("attempt har bir element uchun nimani qaytaradi?", ["Either natijasini", "Faqat true/false", "Yangi oqim", "Thread poolni"], 0, "attempt xatoni qiymatga aylantiradi va Either[Throwable, A] qaytaradi."),
      quiz("Nega System.exit ni to'g'ridan-to'g'ri ishlatish tavsiya etilmaydi?", ["U juda sekin", "Finalizerlar va buferlar yopilmay qolishi mumkin", "U faqat Windows'da ishlaydi", "U oqimni tezlashtiradi"], 1, "System.exit jarayonni darhol tugatadi; Resource finalizerlari va graceful shutdown bosqichlari bajarilmay qoladi."),
    ],
  },
];
