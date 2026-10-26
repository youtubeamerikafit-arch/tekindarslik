"use strict";
const { p, h, ul, note, code, table, quiz } = require("./helpers");

module.exports = [
  {
    id: 60,
    title: "Opaque types: yangi tipni noldan",
    minutes: 16,
    desc: "Opaque type bilan runtime xarajatisiz yangi tip yaratish, uning chegaralarini boshqarish va domen identifikatorlarini himoyalashni o'rganamiz.",
    blocks: [
      p("<b>Opaque type</b> — tashqi dunyoga yangi tip bo'lib ko'rinadigan, ichkarida esa mavjud tip sifatida saqlanadigan konstruksiya. U <b>noldan xarajat</b> beradi: runtime'da qo'shimcha wrapper obyekt yo'q, lekin kompilyator <code>FoydalanuvchiId</code> va <code>Long</code> ni aralashtirishga yo'l qo'ymaydi. Bu ayniqsa identifikator, pul, o'lchov birliklari uchun foydali."),
      code("Idlar.scala", `object Idlar {
  opaque type FoydalanuvchiId = Long

  object FoydalanuvchiId {
    def apply(qiymat: Long): FoydalanuvchiId = qiymat
  }

  def qiymat(id: FoydalanuvchiId): Long = id
}

val id = Idlar.FoydalanuvchiId(42L)
println(Idlar.qiymat(id))
println(id)`, "42\n42"),
      p("Opaque tipning ichki vakili faqat uni e'lon qilgan scope ichida ko'rinadi. Tashqarida <code>FoydalanuvchiId</code> ni <code>Long</code> ga qo'shish yoki unga ixtiyoriy son berish mumkin emas. Konstruktor va amallarni ongli ravishda ochib, <b>invariantlarni</b> saqlaysiz. Quyidagi pul tipida manfiy qiymatni ham tekshirish mumkin."),
      code("Pul.scala", `object Pul {
  opaque type Som = BigDecimal

  def apply(qiymat: BigDecimal): Either[String, Som] =
    if qiymat < 0 then Left("manfiy bo'lmaydi") else Right(qiymat)

  def format(n: Som): String = n.setScale(0).toString + " so'm"
}

val n = Pul(BigDecimal(125000))
println(n.map(Pul.format))
println(Pul(BigDecimal(-5)))`, "Right(125000 so'm)\nLeft(manfiy bo'lmaydi)"),
      table(
        ["Yondashuv", "Runtime xarajati", "Tip xavfsizligi", "Qulaylik"],
        [
          ["type alias", "Yo'q", "Yo'q", "Juda yuqori"],
          ["opaque type", "Yo'q", "Kuchli", "O'rtacha"],
          ["case class wrapper", "Obyekt", "Kuchli", "Yuqori"],
        ]
      ),
      note("Opaque type ichida asosiy tipning barcha metodlarini avtomatik meros qilmaysiz. Kerakli amallarni extension yoki oddiy funksiya sifatida oching. Bu cheklov tasodifiy amallarni oldini oladi, lekin API ni ongli loyihalashni talab qiladi.", "tip"),
    ],
    quiz: [
      quiz("Opaque type tashqi scope'da qanday ko'rinadi?", ["Mustaqil yangi tip sifatida", "Har doim asosiy tip sifatida", "Interfeys sifatida", "Faqat Any sifatida"], 0, "Tashqarida opaque type mustaqil tip; ichki vakili faqat e'lon qilingan scope'da ko'rinadi."),
      quiz("Opaque type runtime'da qanday saqlanadi?", ["Qo'shimcha wrapper obyekt bilan", "Asosiy tip sifatida, qo'shimcha xarajatsiz", "Har doim String sifatida", "Serializatsiya qilinmagan holda"], 1, "Opaque type asosiy tip ustida kompilyatsiya chegarasi yaratadi, runtime vakili o'zgarmaydi."),
      quiz("Nega opaque pul tipida konstruktorni Either qaytaradigan qilib yozish foydali?", ["Kod sekinlashadi", "Manfiy qiymatlarni oldindan rad etib, invariant saqlanadi", "BigDecimal ishlamaydi", "Tip nomi o'zgaradi"], 1, "Aqlli konstruktor yaroqsiz qiymatlarni yaratishning oldini oladi va tip darajasidagi kafolatni kuchaytiradi."),
    ],
  },
  {
    id: 61,
    title: "Literal types va compile-time cheklovlar",
    minutes: 15,
    desc: "Singleton literal tiplar, union tiplar va compiletime.ops yordamida qiymatlarni kompilyatsiya vaqtida cheklashni o'rganamiz.",
    blocks: [
      p("Scala 3 da har bir aniq literal o'z <b>singleton tipiga</b> ega: <code>\"faol\"</code> qiymatining tipi <code>\"faol\"</code>. Union operatori <code>|</code> bilan bir nechta ruxsat etilgan qiymatni bitta tipga birlashtirish mumkin. Bu holat mashinalari va API parametrlarini hujjatlashtirishning eng arzon usuli: noto'g'ri qiymat kompilyatsiyada ushlanadi."),
      code("Holatlar.scala", `type Holat = "yangi" | "faol" | "yopilgan"

def tavsif(h: Holat): String = h match {
  case "yangi" => "qabul qilindi"
  case "faol" => "davom etmoqda"
  case "yopilgan" => "arxivlandi"
}

println(tavsif("faol"))
println(tavsif("yopilgan"))`, "davom etmoqda\narxivlandi"),
      p("<code>scala.compiletime.ops</code> tip darajasidagi arifmetikani beradi. <code>1 + 2</code> tip sifatida <code>3</code> ga qisqaradi. Bu konfiguratsiya o'lchamlari, port raqamlari yoki protokol doimiylarini kompilyatsiya vaqtida tekshirish uchun ishlatiladi. Runtime'da hech qanday hisoblash qolmaydi."),
      code("TipArifmetikasi.scala", `import scala.compiletime.ops.int.*

type Uch = 1 + 2
val n: Uch = 3
val port: 8080 = 8080

println(n)
println(port)`, "3\n8080"),
      table(
        ["Konstruksiya", "Nimani beradi", "Misol"],
        [
          ["Literal type", "Aniq qiymat tipi", "val port: 8080 = 8080"],
          ["Union type", "Ruxsat etilgan variantlar", "\"a\" | \"b\""],
          ["Ops type", "Kompilyatsiyadagi hisob", "type N = 2 * 4"],
        ]
      ),
      note("Literal va union tiplar faqat kompilyatsiya chegarasini beradi; tashqi JSON yoki foydalanuvchi kiritmasi baribir runtime validatsiyasidan o'tishi kerak. Tip chegarasi va parser validatsiyasini birgalikda ishlating.", "warning"),
    ],
    quiz: [
      quiz("val port: 8080 = 8080 e'loni nimani kafolatlaydi?", ["Port faqat 8080 bo'lishini", "Port istalgan son bo'lishini", "Port String bo'lishini", "Port runtime'da tekshirilmasligini"], 0, "Literal tip 8080 faqat shu qiymatni qabul qiladi; boshqa son kompilyatsiyada xato beradi."),
      quiz("Union tipdagi match ifodasida barcha variantlar qoplansa nima bo'ladi?", ["Kompilyator ogohlantiradi", "Match to'liq (exhaustive) deb tekshiriladi", "Runtime xatosi chiqadi", "Tip Any ga aylanadi"], 1, "Sealed yoki union tip bo'yicha match to'liqligi kompilyator tomonidan tekshiriladi."),
      quiz("compiletime.ops.int.* nimani ta'minlaydi?", ["Runtime arifmetikasini tezlashtiradi", "Tip darajasidagi butun son amallarini", "Faqat String amallarini", "Thread sinxronizatsiyasini"], 1, "ops.int tip darajasida qo'shish, ayirish, ko'paytirish kabi amallarni beradi."),
    ],
  },
  {
    id: 62,
    title: "Match types: tip darajasida hisoblash",
    minutes: 17,
    desc: "Match type yordamida kirish tipiga qarab natija tipini hisoblash va rekursiv tip darajasidagi funksiyalarni yozishni o'rganamiz.",
    blocks: [
      p("<b>Match type</b> — tip ustida ishlaydigan match ifodasi. U kirish tipini naqshlarga solishtiradi va mos natija tipini tanlaydi. Bu turli konteynerlardan element tipini ajratib olish, tuple oxirini topish yoki API natijasini kirishga qarab aniqlash uchun ishlatiladi. Hisoblash to'liq kompilyatsiya vaqtida bo'ladi."),
      code("Element.scala", `type Element[X] = X match {
  case String => Char
  case Array[t] => t
  case List[t] => t
}

val harf: Element[String] = 'S'
val son: Element[Array[Int]] = 42

println(harf)
println(son)`, "S\n42"),
      p("Match typelar rekursiv bo'lishi mumkin. Quyidagi <code>Oxirgi</code> tuple tipining oxirgi elementini topadi. Rekursiya tuplening <code>*:</code> tuzilishi bo'ylab yuradi va <code>EmptyTuple</code> da to'xtaydi. Naqshlar tartibi muhim: aniqroq holat avval turishi kerak."),
      code("OxirgiElement.scala", `type Oxirgi[X] = X match {
  case h *: EmptyTuple => h
  case h *: t => Oxirgi[t]
}

val oxirgi: Oxirgi[(Int, String, Boolean)] = true
println(oxirgi)`, "true"),
      table(
        ["Yondashuv", "Hisoblash vaqti", "Moslashuvchanlik", "Xato xabari"],
        [
          ["Match type", "Kompilyatsiya", "Tip darajasida", "Ba'zan murakkab"],
          ["Type class", "Kompilyatsiya", "Kengaytiriladigan", "Aniqroq"],
          ["Runtime match", "Bajarilish", "Cheklangan", "Kech"],
        ]
      ),
      note("Match type cheksiz rekursiyaga kirishi mumkin; har bir rekursiv qadamda kirish tipi kichrayishiga ishonch hosil qiling. Murakkab hisoblar uchun type class yoki makro yaxshiroq xato xabari beradi.", "warning"),
    ],
    quiz: [
      quiz("Match type qachon hisoblanadi?", ["Runtime'da har bir chaqiruvda", "Kompilyatsiya vaqtida", "Faqat testlarda", "JVM ishga tushganda"], 1, "Match type kompilyator tomonidan tip tekshiruvi paytida qisqartiriladi."),
      quiz("Element[String] misolida natija tipi nima?", ["String", "Char", "Int", "List[Char]"], 1, "String holati Char qaytaradi; shuning uchun 'S' literali mos keladi."),
      quiz("Rekursiv match typedа to'xtash sharti nima uchun kerak?", ["Kod chiroyli bo'lishi uchun", "Cheksiz rekursiyani oldini olish uchun", "Runtime tezligi uchun", "Faqat tuple uchun"], 1, "Har bir qadam kirish tipini kichraytirishi va aniq bazaviy holat bo'lishi kerak, aks holda kompilyator cheksiz aylanadi."),
    ],
  },
  {
    id: 63,
    title: "Phantom types bilan holat mashinasi",
    minutes: 16,
    desc: "Faqat tip parametrida ko'rinadigan phantom tip bilan buyurtma holatlarini xavfsiz boshqarishni o'rganamiz.",
    blocks: [
      p("<b>Phantom type</b> — obyekt ichida saqlanmaydigan, faqat tip parametri sifatida ishlatiladigan tip. U bilan holat mashinasini modellashtirish mumkin: <code>Buyurtma[Yangi]</code> dan faqat <code>Buyurtma[Tasdiqlangan]</code> yasash mumkin, teskarisi esa kompilyatsiyada taqiqlanadi. Runtime'da qo'shimcha maydon yo'q, faqat kompilyator tekshiruvi."),
      code("Buyurtma.scala", `sealed trait Holat
sealed trait Yangi extends Holat
sealed trait Tasdiqlangan extends Holat

final case class Buyurtma[S <: Holat](id: Int)

def tasdiqla(b: Buyurtma[Yangi]): Buyurtma[Tasdiqlangan] =
  Buyurtma[Tasdiqlangan](b.id)

val yangi = Buyurtma[Yangi](7)
val tayyor = tasdiqla(yangi)
println(tayyor.id)`, "7"),
      p("Holat o'tishlarini funksiyalar bilan cheklang. <code>yubor</code> faqat tasdiqlangan buyurtmani qabul qiladi; tasdiqlanmagan buyurtmani yuborishga urinish kompilyatsiya xatosi beradi. Bu naqsh to'lov, chipta, hujjat tasdiqlash kabi ketma-ket jarayonlarda juda foydali."),
      code("Yuborish.scala", `sealed trait Holat
sealed trait Tasdiqlangan extends Holat

final case class Buyurtma[S <: Holat](id: Int)

def yubor(b: Buyurtma[Tasdiqlangan]): String =
  "yuborildi: " + b.id

println(yubor(Buyurtma[Tasdiqlangan](9)))`, "yuborildi: 9"),
      table(
        ["Yondashuv", "Noto'g'ri o'tish", "Runtime tekshiruv", "Qo'shimcha xotira"],
        [
          ["String holat", "Mumkin", "Har joyda kerak", "Yo'q"],
          ["Enum maydon", "Mumkin", "Match kerak", "Kichik"],
          ["Phantom type", "Kompilyatsiyada taqiqlanadi", "Kerak emas", "Yo'q"],
        ]
      ),
      note("Phantom type JVM type erasure sababli runtime'da yo'qoladi. Agar holat haqiqatan runtime ma'lumoti bo'lsa (masalan, bazadan o'qilganda), uni oddiy maydon sifatida saqlang va chegarada tekshiring. Phantom yondashuv faqat kompilyatsiya oqimini kafolatlaydi.", "tip"),
    ],
    quiz: [
      quiz("Phantom type obyekt ichida saqlanadimi?", ["Ha, har doim", "Yo'q, faqat tip parametrida ishlatiladi", "Faqat String sifatida", "Faqat testlarda"], 1, "Phantom tip runtime maydoni emas; u faqat kompilyatsiya chegarasini ifodalaydi."),
      quiz("Buyurtma[Yangi] ni yuborish funksiyasiga berish nima bo'ladi?", ["Ishlaydi", "Runtime xatosi beradi", "Kompilyatsiya xatosi beradi", "Avtomatik tasdiqlanadi"], 2, "yubor faqat Buyurtma[Tasdiqlangan] qabul qiladi; Yangi holat tipga mos kelmaydi."),
      quiz("Phantom type bilan holat o'tishining asosiy foydasi nima?", ["Ko'proq xotira", "Noto'g'ri o'tishlarni kompilyatsiyada ushlash", "Runtime tekshiruvini ko'paytirish", "JSON ni tezlashtirish"], 1, "Holatlar tip darajasida ajratilgani uchun ruxsat etilmagan o'tishlar kompilyatsiyada rad etiladi."),
    ],
  },
  {
    id: 64,
    title: "Type-level invariantlar va aqlli konstruktorlar",
    minutes: 16,
    desc: "Bo'sh bo'lmagan ro'yxat, musbat son kabi invariantlarni tip va aqlli konstruktorlar bilan himoyalashni o'rganamiz.",
    blocks: [
      p("Har bir domen qiymati hamma qiymatlarni qabul qilmaydi: buyurtmada kamida bitta qator, narx musbat, identifikator bo'sh emas. Bu <b>invariantlarni</b> oddiy tip emas, aqlli konstruktor va xususiy konstruktor orqali himoyalash mumkin. Natijada noto'g'ri holat yaratishning o'zi qiyinlashadi."),
      code("NoBosh.scala", `final case class NoBosh[A] private (bosh: A, qolgan: List[A])

object NoBosh {
  def fromList[A](xs: List[A]): Option[NoBosh[A]] = xs match {
    case h :: t => Some(NoBosh(h, t))
    case Nil => None
  }
}

println(NoBosh.fromList(List(1, 2, 3)).map(_.bosh))
println(NoBosh.fromList(List.empty[Int]).map(_.bosh))`, "Some(1)\nNone"),
      p("<code>private</code> konstruktor tashqi kodning to'g'ridan-to'g'ri <code>NoBosh</code> yaratishini to'sadi. Yagona yo'l — <code>fromList</code>, u bo'sh ro'yxatni <code>None</code> ga aylantiradi. Xuddi shu naqsh bilan musbat son, email yoki valyuta kodini modellashtirish mumkin. Chegarada bir marta tekshirib, keyin tipga ishoning."),
      code("Musbat.scala", `final case class Musbat private (value: Int)

object Musbat {
  def from(n: Int): Either[String, Musbat] =
    if n > 0 then Right(new Musbat(n)) else Left("musbat emas")
}

println(Musbat.from(5).map(_.value))
println(Musbat.from(-2))`, "Right(5)\nLeft(musbat emas)"),
      table(
        ["Invariant", "Tekshiruv joyi", "Natija tipi"],
        [
          ["Bo'sh emas", "fromList", "Option[NoBosh[A]]"],
          ["Musbat son", "Musbat.from", "Either[String, Musbat]"],
          ["Email formati", "Email.parse", "Either[Xato, Email]"],
          ["Valyuta kodi", "Valyuta.from", "Option[Valyuta]"],
        ]
      ),
      note("Aqlli konstruktordan chetlab o'tish uchun <code>copy</code> ham xavfli bo'lishi mumkin: <code>case class</code> ning avtomatik <code>copy</code> i invariantni buzadi. Bunday holatda klassni oddiy sinf qilib, faqat xavfsiz o'zgartirish metodlarini bering.", "warning"),
    ],
    quiz: [
      quiz("NoBosh konstruktori private bo'lsa, tashqi kod qanday yaratadi?", ["To'g'ridan-to'g'ri new bilan", "Faqat fromList orqali", "copy orqali", "Hech qanday yo'l bilan emas"], 1, "Yagona ochiq yo'l aqlli konstruktor fromList bo'lib, u invariantni tekshiradi."),
      quiz("Musbat.from(-2) qanday natija beradi?", ["Right(-2)", "Left(musbat emas)", "None", "Xato tashlaydi"], 1, "Konstruktor manfiy qiymatni rad etadi va chap tomonda tushunarli xato qaytaradi."),
      quiz("Case class copy metodi invariant uchun qanday xavf tug'diradi?", ["U tez ishlaydi", "U tekshiruvsiz yangi qiymat yasashi mumkin", "U tipni o'zgartiradi", "U faqat testlarda ishlaydi"], 1, "Avtomatik copy konstruktorni chetlab o'tib, masalan manfiy qiymatli nusxa yaratishi mumkin."),
    ],
  },
  {
    id: 65,
    title: "inline va compiletime: kodni kompilyatsiyada hisoblash",
    minutes: 16,
    desc: "inline metodlar, inline if va constValue yordamida kompilyatsiya vaqtida qisqaradigan kod yozishni o'rganamiz.",
    blocks: [
      p("<b>inline</b> metod chaqirilganda uning tanasi chaqiruv joyiga joylashtiriladi. Bu oddiy makro emas: kod Scala kompilyatori tomonidan tip tekshiruvi bilan kengaytiriladi. <code>inline if</code> sharti kompilyatsiya vaqtida ma'lum bo'lsa, faqat bitta shox qoladi. Natijada ortiqcha shart va funksiya chaqiruvi yo'qoladi."),
      code("InlineHolat.scala", `inline def holat(inline n: Int): String =
  inline if n > 0 then "musbat" else "musbat emas"

println(holat(5))
println(holat(0))`, "musbat\nmusbat emas"),
      p("Inline parametrlar faqat literal yoki kompilyatsiya vaqtida ma'lum ifoda bilan ishlaydi. Bu cheklov tasodifiy runtime qiymatlar bilan kutilmagan kengayishning oldini oladi. Quyidagi rang kodi misolida ikkala chaqiruv ham kompilyatsiyada bitta satrga aylanadi."),
      code("RangKodi.scala", `inline def rangKodi(inline rang: String): String =
  inline if rang == "qizil" then "#e11d48" else "#64748b"

println(rangKodi("qizil"))
println(rangKodi("yashil"))`, "#e11d48\n#64748b"),
      table(
        ["Konstruksiya", "Bajarilish vaqti", "Moslashuvchanlik", "Kod hajmi"],
        [
          ["Oddiy def", "Runtime", "Yuqori", "Kichik"],
          ["inline def", "Kompilyatsiya + runtime", "O'rtacha", "Kattaroq"],
          ["Makro", "Kompilyatsiya", "Juda yuqori", "Ehtiyotkorlik kerak"],
        ]
      ),
      note("Inline har doim tezlik degani emas: katta tana ko'p joyda takrorlanib, binary hajmini oshiradi. Kichik, tez-tez chaqiriladigan va tipga bog'liq funksiyalar uchun ishlating. Katta mantiqni oddiy metodda qoldiring.", "tip"),
    ],
    quiz: [
      quiz("inline def chaqirilganda nima sodir bo'ladi?", ["Tana chaqiruv joyiga kengaytiriladi", "Funksiya runtime'da qidiriladi", "Yangi thread ochiladi", "Kod JSON ga aylanadi"], 0, "inline metod tanasi kompilyatsiya vaqtida chaqiruv joyiga joylashtiriladi."),
      quiz("inline if sharti kompilyatsiyada ma'lum bo'lsa nima bo'ladi?", ["Ikkala shox ham qoladi", "Faqat mos shox qoladi", "Xato beradi", "Runtime sharti qo'shiladi"], 1, "Shart konstanta bo'lsa, kompilyator faqat bajariladigan shoxni qoldiradi."),
      quiz("Inline metodning asosiy salbiy tomoni nima?", ["Tip tekshiruvi yo'qoladi", "Katta tana binary hajmini oshirishi mumkin", "Faqat String bilan ishlaydi", "Runtime sekinlashadi"], 1, "Har bir chaqiruvda kod takrorlanadi; katta inline tanasi natijaviy hajmni oshiradi."),
    ],
  },
  {
    id: 66,
    title: "Quotes va makrolar asoslari",
    minutes: 18,
    desc: "Scala 3 quotes API bilan kompilyatsiya vaqtida kod generatsiya qilish, Expr va Quotes tushunchalarini o'rganamiz.",
    blocks: [
      p("<b>Makro</b> — kompilyatsiya vaqtida ishlaydigan funksiya. Scala 3 da makro <code>inline def</code> va <code>${ ... }</code> splice orqali e'lon qilinadi. Makro implementatsiyasi <code>Quotes</code> kontekstida <code>Expr[A]</code> bilan ishlaydi: u kod daraxtini qabul qiladi va yangi kod daraxti qaytaradi. Bu kuchli vosita, lekin oddiy inline yetadigan joyda ishlatilmasligi kerak."),
      code("Makro.scala", `import scala.quoted.*

object Makro {
  inline def ikkiBarobar(inline n: Int): Int = \${ impl('n) }

  def impl(n: Expr[Int])(using Quotes): Expr[Int] = {
    println("[makro] kengaytirilmoqda")
    '{ 2 * $n }
  }
}`, "[makro] kengaytirilmoqda"),
      p("Makro implementatsiyasi alohida kompilyatsiya birligida tayyor bo'lishi kerak, keyin boshqa faylda ishlatiladi. <code>'n</code> — kod daraxtini olish (quote), <code>$n</code> esa uni yangi daraxt ichiga qo'yish (splice). Quyidagi fayl allaqachon kompilyatsiya qilingan <code>Makro</code> obyektidan foydalanadi."),
      code("Main.scala", `import Makro.ikkiBarobar

@main def ishgaTushir(): Unit =
  println(ikkiBarobar(21))`, "42"),
      table(
        ["Vosita", "Qachon ishlaydi", "Nima uchun"],
        [
          ["inline", "Kompilyatsiya", "Kichik kodni joyida kengaytirish"],
          ["quotes/makro", "Kompilyatsiya", "Kod daraxtini tahlil qilish va yaratish"],
          ["derives", "Kompilyatsiya", "Type class instance avtomatik yasash"],
        ]
      ),
      note("Makro xatolari foydalanuvchiga tushunarsiz ko'rinishi mumkin. <code>report.errorAndAbort</code> bilan aniq xabar bering va imkon qadar <code>Expr</code> tipini saqlang. Makro API ni barqaror ushlang: kompilyator versiyasi o'zgarsa, ichki daraxt tuzilishi ham o'zgarishi mumkin.", "warning"),
    ],
    quiz: [
      quiz("Scala 3 da makro qachon bajariladi?", ["Dastur ishga tushganda", "Kompilyatsiya vaqtida", "Faqat testlarda", "JVM yuklanishida"], 1, "Makro kompilyatsiya jarayonida kod daraxtini o'zgartirib, natijaviy kodni yaratadi."),
      quiz("'n yozuvi makro ichida nimani beradi?", ["Oddiy Int qiymatini", "n ifodasining kod daraxtini", "Threadni", "Yangi faylni"], 1, "Quote 'n ifodani Expr sifatida ushlaydi; u kompilyatsiya vaqtidagi kod daraxtidir."),
      quiz("$n splice makro ichida nima qiladi?", ["Kod daraxtini yangi ifodaga joylashtiradi", "Runtime qiymatni chop etadi", "Yangi makro yaratadi", "Faylni yopadi"], 0, "Splice olingan Expr ni yangi kod daraxti ichiga qo'shadi."),
    ],
  },
  {
    id: 67,
    title: "Mirror va given derivatsiya",
    minutes: 17,
    desc: "Scala 3 Mirror yordamida case class va enum uchun type class instance'larini avtomatik yasashni o'rganamiz.",
    blocks: [
      p("<b>Mirror</b> — kompilyator case class va enum uchun taqdim etadigan strukturaviy ma'lumot. <code>Mirror.ProductOf[A]</code> maydonlar yig'indisini, <code>Mirror.SumOf[A]</code> variantlar birligini ifodalaydi. <code>derives</code> kalit so'zi companion'dagi <code>derived</code> metodi orqali type class instance'ini avtomatik chaqiradi. Shu bilan har bir case class uchun qo'lda encoder yozish shart emas."),
      code("ShowDerivation.scala", `import scala.deriving.Mirror

trait Show[A] { def show(a: A): String }

object Show {
  def apply[A](using s: Show[A]): Show[A] = s

  given Show[Int] = n => "Int(" + n + ")"
  given Show[String] = s => "Matn(" + s + ")"

  inline given derived[A](using m: Mirror.ProductOf[A]): Show[A] =
    new Show[A] {
      def show(a: A): String = {
        val p = a.asInstanceOf[Product]
        val qismlar = p.productIterator.map {
          case n: Int => Show[Int].show(n)
          case s: String => Show[String].show(s)
          case boshqa => boshqa.toString
        }
        p.productPrefix + qismlar.mkString("(", ", ", ")")
      }
    }
}

case class Foydalanuvchi(ism: String, yosh: Int) derives Show

@main def ishgaTushir(): Unit =
  println(Show[Foydalanuvchi].show(Foydalanuvchi("Aziza", 20)))`, "Foydalanuvchi(Matn(Aziza), Int(20))"),
      p("Mirror obyekti orqali maydonlarni qo'lda ham yig'ish mumkin. <code>fromProduct</code> tuple yoki boshqa <code>Product</code> dan case class yasaydi. Bu generik konstruktorlar, test factory'lari va derivatsiya kutubxonalarining asosidir. Quyidagi misolda <code>Tuple2</code> dan <code>Nuqta</code> yasaladi."),
      code("MirrorNuqta.scala", `import scala.deriving.Mirror

case class Nuqta(x: Int, y: Int)

val mirror = summon[Mirror.ProductOf[Nuqta]]
val nuqta = mirror.fromProduct(Tuple2(3, 4))
println(nuqta)`, "Nuqta(3,4)"),
      table(
        ["Mirror turi", "Nimani ifodalaydi", "Misol"],
        [
          ["ProductOf[A]", "Maydonlar yig'indisi", "Case class"],
          ["SumOf[A]", "Variantlar birligi", "Enum yoki sealed trait"],
          ["Singleton", "Bitta obyekt", "Case object"],
        ]
      ),
      note("Derivatsiya rekursiv maydonlarda cheksiz aylanishi mumkin. Ichki tiplar uchun ham given mavjudligini ta'minlang; yo'q bo'lsa kompilyator aniq xato beradi. Katta modellarda derivatsiya kompilyatsiya vaqtini sezilarli oshirishi mumkin.", "tip"),
    ],
    quiz: [
      quiz("Mirror.ProductOf[A] nimani ifodalaydi?", ["Enum variantlarini", "Case class maydonlari yig'indisini", "Thread holatini", "Faqat String maydonlarini"], 1, "ProductOf case class kabi mahsulot tipining maydonlari haqida ma'lumot beradi."),
      quiz("derives Show yozuvi nimani ishga tushiradi?", ["Show.derived givenini", "Show.main metodini", "Yangi threadni", "JSON parserini"], 0, "derives companion'dagi derived nomli given yoki metodni chaqirib, instance yaratadi."),
      quiz("Mirror.fromProduct nimani qaytaradi?", ["Tuple", "Yangi case class qiymatini", "String", "Option[Product]"], 1, "fromProduct berilgan Product maydonlaridan A tipidagi qiymat yasaydi."),
    ],
  },
  {
    id: 68,
    title: "JSON codec'ni derives bilan yozish",
    minutes: 18,
    desc: "Type class va Mirror asosida oddiy JSON encoder yozish, derives bilan case class'ga ulash va decoder xavfsizligini ko'rib chiqamiz.",
    blocks: [
      p("JSON bilan ishlashda har bir model uchun qo'lda encoder yozish zerikarli va xatoga moyil. Type class va <code>derives</code> yordamida umumiy qoida yoziladi, har bir case class esa bir qator bilan qo'shiladi. Quyidagi soddalashtirilgan encoder faqat butun son va matn maydonlarini qo'llab-quvvatlaydi, lekin naqshni aniq ko'rsatadi."),
      code("JsonEncoder.scala", `import scala.deriving.Mirror

trait Json[A] { def encode(a: A): String }

object Json {
  def apply[A](using j: Json[A]): Json[A] = j

  given Json[Int] = n => n.toString
  given Json[String] = s => "\\"" + s + "\\""
  given [A](using j: Json[A]): Json[List[A]] =
    xs => xs.map(j.encode).mkString("[", ",", "]")

  inline given derived[A](using m: Mirror.ProductOf[A]): Json[A] =
    new Json[A] {
      def encode(a: A): String = {
        val p = a.asInstanceOf[Product]
        val juftlar = p.productElementNames.zip(p.productIterator).map {
          case (kalit, n: Int) => Json[String].encode(kalit) + ":" + Json[Int].encode(n)
          case (kalit, s: String) => Json[String].encode(kalit) + ":" + Json[String].encode(s)
          case (kalit, boshqa) => Json[String].encode(kalit) + ":" + boshqa.toString
        }
        juftlar.mkString("{", ",", "}")
      }
    }
}

case class Mahsulot(nom: String, narx: Int) derives Json

@main def ishgaTushir(): Unit =
  println(Json[Mahsulot].encode(Mahsulot("olma", 1200)))`, "{\"nom\":\"olma\",\"narx\":1200}"),
      p("Encoder yozish oson, decoder esa qiyinroq: noto'g'ri JSON, yetishmayotgan maydon va noto'g'ri tipni xavfsiz qayta ishlash kerak. Quyidagi kichik parser matnni butun songa aylantirishda <code>toIntOption</code> va <code>Either</code> dan foydalanadi. Haqiqiy loyihada <code>upickle</code> yoki <code>circe</code> kabi kutubxona bu ishni to'liq bajaradi."),
      code("Decoder.scala", `def butunSon(s: String): Either[String, Int] =
  s.toIntOption.toRight("butun son emas")

println(butunSon("42"))
println(butunSon("4x"))`, "Right(42)\nLeft(butun son emas)"),
      table(
        ["Qism", "Vazifasi", "Xato boshqaruvi"],
        [
          ["Encoder", "Modeldan JSON", "Odatda xato bermaydi"],
          ["Decoder", "JSONdan model", "Either yoki Try"],
          ["derives", "Instance yaratish", "Kompilyatsiya xatosi"],
        ]
      ),
      note("Schema evolyutsiyasida yangi maydonni ixtiyoriy qiling yoki standart qiymat bering. Eski mijozlar yubormagan maydon butun so'rovni yiqitmasligi kerak. Encoder va decoderning maydon nomlari bir xil bo'lishini test bilan tekshiring.", "tip"),
    ],
    quiz: [
      quiz("Json.derived qanday ma'lumotdan foydalanadi?", ["Faqat runtime reflection'dan", "Mirror.ProductOf maydonlaridan", "Fayl tizimidan", "Thread nomidan"], 1, "Derivatsiya Mirror orqali maydon nomlari va qiymatlarini oladi."),
      quiz("toIntOption.toRight(\"butun son emas\") nimani qaytaradi?", ["Int yoki null", "Either[String, Int]", "Option[Int]", "Try[Int]"], 1, "toRight Option ni Either ga aylantiradi: Some uchun Right, None uchun Left."),
      quiz("JSON decoderda yetishmayotgan ixtiyoriy maydon qanday boshqariladi?", ["Butun so'rovni rad etish kerak", "Standart qiymat yoki Option bilan", "Maydonni o'chirish kerak", "Runtime xatosi bilan"], 1, "Ixtiyoriy maydon uchun standart qiymat yoki Option ishlatish orqaga moslikni saqlaydi."),
    ],
  },
  {
    id: 69,
    title: "Makro xatolar, debug va xavfsiz chegaralar",
    minutes: 16,
    desc: "Makroda aniq kompilyatsiya xabari berish, kengaytmani tekshirish va makrodan qachon voz kechishni o'rganamiz.",
    blocks: [
      p("Makro foydalanuvchisi xato qilsa, u tushunarli xabar ko'rishi kerak. <code>report.errorAndAbort</code> kompilyatsiyani to'xtatadi va aniq sababni ko'rsatadi. Quyidagi makro faqat musbat literal qabul qiladi; boshqa qiymat uchun kompilyator \"musbat son kerak\" deb xabar beradi. Bu runtime validatsiyadan ko'ra erta va arzon."),
      code("Tekshiruv.scala", `import scala.quoted.*

object Tekshiruv {
  inline def musbat(inline n: Int): Int = \${ impl('n) }

  def impl(n: Expr[Int])(using Quotes): Expr[Int] =
    n.value match {
      case Some(v) if v > 0 => n
      case _ => quotes.reflect.report.errorAndAbort("musbat son kerak")
    }
}`, "musbat son kerak"),
      p("Makro kengaytmasini ko'rish uchun kompilyatorga <code>-Xprint:typer</code> yoki <code>-Xprint:inlining</code> bering. Kichik misolda kengaytirilgan kodni o'qib, kutilmagan takrorlanish yoki ortiqcha ish borligini aniqlash mumkin. Quyidagi oddiy inline alternativ makro kerak bo'lmagan holatni ko'rsatadi."),
      code("InlineAlternativa.scala", `inline def musbatYokiBir(inline n: Int): Int =
  inline if n > 0 then n else 1

println(musbatYokiBir(4))
println(musbatYokiBir(-3))`, "4\n1"),
      table(
        ["Muammo", "Vosita", "Maslahat"],
        [
          ["Kengaytma ko'rinmasligi", "-Xprint:typer", "Kichik misolda tekshiring"],
          ["Tushunarsiz xato", "report.errorAndAbort", "Aniq matn va pozitsiya bering"],
          ["Kod shishishi", "inline o'rniga def", "Faqat kerak joyda makro"],
          ["Versiya moammosi", "API chegarasi", "Makroni minimal saqlang"],
        ]
      ),
      note("Makro — eng oxirgi chora. Avval oddiy funksiya, keyin inline, keyin type class derivatsiyasi, shundan keyingina makroni ko'rib chiqing. Har bir makro kompilyator versiyasiga bog'liq texnik qarz bo'lishi mumkin.", "warning"),
    ],
    quiz: [
      quiz("report.errorAndAbort makro ichida nima qiladi?", ["Kompilyatsiyani xato bilan to'xtatadi", "Runtime xatosi tashlaydi", "Faqat log yozadi", "Yangi fayl yaratadi"], 0, "errorAndAbort kompilyatsiya jarayonini to'xtatib, foydalanuvchiga berilgan xabarni ko'rsatadi."),
      quiz("Makro kengaytmasini ko'rish uchun qaysi bayroq foydali?", ["-Xmx4g", "-Xprint:typer", "-verbose:gc", "-source:future"], 1, "-Xprint:typer kengaytirilgan va tip tekshirilgan daraxtni chop etadi."),
      quiz("Qaysi holatda makro o'rniga oddiy inline yetadi?", ["Kod daraxtini tahlil qilish kerak bo'lsa", "Faqat literal shartni qisqartirish kerak bo'lsa", "Yangi sintaksis yaratish kerak bo'lsa", "Kompilyatorni o'zgartirish kerak bo'lsa"], 1, "Oddiy inline shart va kichik kengaytmalar uchun yetarli; makro faqat daraxt bilan ishlash kerak bo'lganda kerak."),
    ],
  },
];
