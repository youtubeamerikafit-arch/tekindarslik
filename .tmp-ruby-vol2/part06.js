const r = String.raw;

module.exports = [
  {
    id: 75,
    title: "JSON: streaming va xavfsiz serializatsiya",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "JSON — API va konfiguratsiya uchun eng keng tarqalgan format. Ruby'da <code>require \"json\"</code> yetarli: <code>JSON.generate</code> obyektni matnga, <code>JSON.parse</code> matnni Hash yoki massivga aylantiradi. Katta javoblarda butun faylni xotiraga yuklamaslik, kalitlarni simvollashtirish va noto'g'ri ma'lumotdan himoyalanish muhim."
      },
      {
        type: "code",
        title: "json_asos.rb",
        code: r`require "json"

xom = '{"ism":"Aziza","ball":91,"fanlar":["Ruby","SQL"]}'
data = JSON.parse(xom, symbolize_names: true)

puts data[:ism]
puts data[:fanlar].last
puts data.dig(:fanlar, 0)
puts JSON.pretty_generate(data)`,
        output: `Aziza
SQL
Ruby
{
  "ism": "Aziza",
  "ball": 91,
  "fanlar": [
    "Ruby",
    "SQL"
  ]
}`
      },
      {
        type: "p",
        html: "<code>symbolize_names: true</code> kalitlarni Symbol qiladi, bu Ruby kodida <code>data[:ism]</code> yozish imkonini beradi. <code>pretty_generate</code> chiqishni o'qishli qiladi, lekin hajmi kattaroq. <code>JSON.parse</code> sukut bo'yicha <code>create_additions: false</code> bilan ishlaydi — bu xavfsiz. <code>JSON.load</code> esa ba'zi versiyalarda obyekt yaratishga ruxsat beradi, shuning uchun ishonchsiz ma'lumotda ishlatilmaydi."
      },
      {
        type: "code",
        title: "ndjson.rb",
        code: r`require "json"

satrlar = [
  { id: 1, ism: "Aziza" },
  { id: 2, ism: "Bek" }
]

fayl = "talabalar.ndjson"
File.write(fayl, satrlar.map { |satr| JSON.generate(satr) }.join("\n") + "\n")

File.foreach(fayl) do |qator|
  data = JSON.parse(qator)
  puts "#{data["id"]}: #{data["ism"]}"
end

File.delete(fayl)`,
        output: `1: Aziza
2: Bek`
      },
      {
        type: "p",
        html: "NDJSON (newline-delimited JSON) har bir qatorni alohida JSON hujjati sifatida saqlaydi. Bu format katta log va eksport fayllarini oqim bilan o'qish uchun ideal: <code>File.foreach</code> bir vaqtda faqat bitta qatorni yuklaydi. Oddiy JSON massivini esa butunlay parse qilish kerak, shuning uchun millionlab yozuvda xotira yetmay qolishi mumkin."
      },
      {
        type: "code",
        title: "json_qiymatlar.rb",
        code: r`require "json"

data = { "ism" => "Aziza", "bal" => nil }
puts JSON.generate(data)
puts JSON.parse("null").inspect
puts JSON.parse("[]").inspect
puts JSON.parse('{"son": 1.5}')["son"].class`,
        output: `{"ism":"Aziza","bal":null}
nil
[]
Float`
      },
      {
        type: "table",
        head: ["Metod", "Vazifasi"],
        rows: [
          ["<code>JSON.generate</code>", "Ruby obyektini JSON matniga aylantiradi"],
          ["<code>JSON.parse</code>", "JSON matnini Ruby obyektiga aylantiradi"],
          ["<code>JSON.pretty_generate</code>", "O'qishli formatda chiqaradi"],
          ["<code>to_json</code>", "Obyektning JSON ko'rinishi"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Chuqurlik va xavfsizlik",
        html: "Juda chuqur yoki katta JSON hujumi xotirani tugatishi mumkin; <code>max_nesting</code> va hajm chegarasini qo'ying. API'dan kelgan kalitlarni to'g'ridan-to'g'ri <code>send</code> yoki SQL ga uzatmang. JSON'da sana, Symbol va obyekt identifikatori yo'q — ularni alohida konvertatsiya qiling."
      }
    ],
    quiz: [
      {
        q: "JSON.parse da symbolize_names: true nima qiladi?",
        options: [
          "Qiymatlarni Symbol qiladi",
          "Kalitlarni Symbol qiladi",
          "Barcha sonlarni Float qiladi",
          "JSON ni chiroyli formatlaydi"
        ],
        answer: 1,
        explain: "symbolize_names kalitlarni Symbolga aylantiradi, qiymatlarga tegmaydi."
      },
      {
        q: "NDJSON faylini xotirani tejab o'qish uchun qaysi usul mos?",
        options: [
          "File.read va JSON.parse",
          "File.foreach va har qatorni JSON.parse",
          "JSON.load",
          "File.binread"
        ],
        answer: 1,
        explain: "NDJSON har qator mustaqil JSON; foreach bir vaqtda bitta qatorni o'qiydi."
      },
      {
        q: "Ishonchsiz JSON da JSON.load ni ishlatmaslik sababi nima?",
        options: [
          "U har doim sekin",
          "Obyekt yaratish orqali xavf tug'dirishi mumkin",
          "U faqat massivlarni o'qiydi",
          "U UTF-8 ni qo'llab-quvvatlamaydi"
        ],
        answer: 1,
        explain: "JSON.load ayrim holatlarda obyekt yaratishga ruxsat beradi; parse xavfsizroq."
      }
    ]
  },
  {
    id: 76,
    title: "CSV: katta jadvallar va transformatsiya",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "CSV — jadval ma'lumotlarini oddiy matnda saqlash formati. Ruby standart kutubxonasidagi <code>csv</code> parser quote, escaped quote va turli ajratgichlarni to'g'ri boshqaradi. Muhim savol: fayl kichikmi yoki katta? Kichik faylni <code>CSV.read</code> bilan yuklash mumkin, katta faylni esa <code>CSV.foreach</code> bilan oqimda qayta ishlash kerak."
      },
      {
        type: "code",
        title: "csv_sum.rb",
        code: r`require "csv"

csv = "ism,ball\nAziza,85\nBek,72\n"
qatorlar = CSV.parse(csv, headers: true, converters: :numeric)

puts qatorlar.sum { |qator| qator["ball"] }
puts qatorlar.headers.inspect
puts qatorlar.first["ism"]`,
        output: `157
["ism", "ball"]
Aziza`
      },
      {
        type: "p",
        html: "<code>headers: true</code> birinchi qatorni sarlavha qiladi va ustunlarni nom bo'yicha olish imkonini beradi. <code>converters: :numeric</code> sonlarni Integer yoki Float ga aylantiradi; aks holda <code>\"85\" + 1</code> xato beradi. <code>CSV::Row</code> ham massiv, ham hash kabi ishlaydi: <code>qator[\"ball\"]</code> yoki <code>qator[1]</code> bilan murojaat qilish mumkin."
      },
      {
        type: "code",
        title: "csv_yozish.rb",
        code: r`require "csv"

qatorlar = [
  ["ism", "ball"],
  ["Dilnoza", 91],
  ["Jasur", 64]
]

chiqish = CSV.generate(col_sep: ";") do |csv|
  qatorlar.each { |qator| csv << qator }
end

puts chiqish

CSV.parse(chiqish, col_sep: ";", headers: true).each do |qator|
  puts "#{qator["ism"]}=#{qator["ball"]}"
end`,
        output: `ism;ball
Dilnoza;91
Jasur;64
Dilnoza=91
Jasur=64`
      },
      {
        type: "p",
        html: "Yozishda <code>CSV.generate</code> blokiga <code>csv</code> obyekti beriladi va <code>&lt;&lt;</code> bilan qator qo'shiladi. Ajratgich <code>col_sep</code> bilan o'zgartiriladi — Yevropa Excel ko'pincha nuqta-vergul ishlatadi. Vergul, qo'shtirnoq yoki newline bo'lgan qiymatlar avtomatik quote qilinadi, shuning uchun qo'lda string birlashtirmang."
      },
      {
        type: "code",
        title: "csv_foreach.rb",
        code: r`require "csv"

File.write("data.csv", "ism,ball\nAziza,85\nBek,72\n")

yigindi = 0
CSV.foreach("data.csv", headers: true, converters: :numeric) do |qator|
  yigindi += qator["ball"]
end

puts yigindi
File.delete("data.csv")`,
        output: `157`
      },
      {
        type: "table",
        head: ["Metod", "Xotira", "Qachon"],
        rows: [
          ["<code>CSV.read</code>", "Butun jadval", "Kichik fayl"],
          ["<code>CSV.foreach</code>", "Bir qator", "Katta fayl"],
          ["<code>CSV.parse</code>", "Butun matn", "String bilan ishlash"],
          ["<code>CSV.generate</code>", "Natija matni", "Eksport"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "CSV injection va encoding",
        html: "Foydalanuvchi kiritgan qiymat <code>=</code>, <code>+</code>, <code>-</code> yoki <code>@</code> bilan boshlansa, Excel uni formula deb bajarishi mumkin. Eksportda bunday qiymatlarni apostrof bilan neytrallashtiring. BOM va Windows-1251 kabi encoding'larni <code>encoding:</code> opsiyasi bilan aniq bering."
      }
    ],
    quiz: [
      {
        q: "CSV.parse da converters: :numeric nima qiladi?",
        options: [
          "Sarlavhalarni songa aylantiradi",
          "Son ko'rinishidagi qiymatlarni Integer/Float qiladi",
          "Barcha ustunlarni o'chiradi",
          "Ajratgichni o'zgartiradi"
        ],
        answer: 1,
        explain: "converters raqamli matnlarni haqiqiy sonlarga aylantiradi."
      },
      {
        q: "Katta CSV faylini xotirani tejab o'qish uchun qaysi metod ishlatiladi?",
        options: [
          "CSV.read",
          "CSV.foreach",
          "CSV.generate",
          "File.binread"
        ],
        answer: 1,
        explain: "CSV.foreach faylni qatorma-qator o'qiydi va butun jadvalni xotiraga yuklamaydi."
      },
      {
        q: "CSV.generate da col_sep nima uchun kerak?",
        options: [
          "Ustunlar ajratgichini o'zgartirish uchun",
          "Qatorlar sonini cheklash uchun",
          "Encoding ni tanlash uchun",
          "Sarlavhani o'chirish uchun"
        ],
        answer: 0,
        explain: "col_sep vergul o'rniga nuqta-vergul kabi boshqa ajratgichni belgilaydi."
      }
    ]
  },
  {
    id: 77,
    title: "XML, REXML va Nokogiri",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "XML hali ham korporativ tizimlar, SOAP, RSS va konfiguratsiyalarda uchraydi. Ruby standart kutubxonasida <code>REXML</code> bor: u sof Ruby'da yozilgan va qo'shimcha o'rnatish talab qilmaydi. Tezroq va qulayroq alternativ — <code>Nokogiri</code>, u C kutubxonasiga tayanadi va CSS selektorlarini ham qo'llab-quvvatlaydi."
      },
      {
        type: "code",
        title: "rexml.rb",
        code: r`require "rexml/document"

xml = <<~XML
  <kitoblar>
    <kitob janr="roman"><nom>Ruby</nom><narx>120000</narx></kitob>
    <kitob janr="ilmiy"><nom>SQL</nom><narx>90000</narx></kitob>
  </kitoblar>
XML

doc = REXML::Document.new(xml)
doc.elements.each("kitoblar/kitob") do |kitob|
  puts "#{kitob.elements["nom"].text}: #{kitob.attributes["janr"]}"
end

puts doc.elements["kitoblar/kitob/narx"].text`,
        output: `Ruby: roman
SQL: ilmiy
120000`
      },
      {
        type: "p",
        html: "<code>REXML::Document.new</code> matnni parse qiladi, <code>elements.each</code> esa yo'l bo'yicha elementlarni aylanadi. <code>attributes[\"janr\"]</code> atributni, <code>text</code> esa matn tugunini oladi. REXML kichik va o'rtacha hujjatlar uchun yetarli, lekin juda katta XML da sekin bo'lishi mumkin; bunday holatda SAX parser yoki Nokogiri ishlatiladi."
      },
      {
        type: "code",
        title: "xpath.rb",
        code: r`require "rexml/document"

xml = "<kitoblar><kitob><nom>Ruby</nom></kitob><kitob><nom>SQL</nom></kitob></kitoblar>"
doc = REXML::Document.new(xml)

nomlar = REXML::XPath.match(doc, "//nom").map(&:text)
puts nomlar.inspect
puts REXML::XPath.first(doc, "//kitob[2]/nom").text`,
        output: `["Ruby", "SQL"]
SQL`
      },
      {
        type: "p",
        html: "XPath — XML ichida element va atributlarni tanlash tili. <code>//nom</code> istalgan darajadagi barcha <code>nom</code> elementlarini topadi, <code>//kitob[2]/nom</code> esa ikkinchi kitobning nomini oladi. Namespace bo'lsa, XPath da prefiksni ko'rsatish kerak. Nokogiri'da <code>at_xpath</code>, <code>css</code> va <code>at_css</code> kabi qulay metodlar bor."
      },
      {
        type: "code",
        title: "nokogiri.rb",
        code: r`require "nokogiri"

xml = '<kitoblar><kitob janr="roman"><nom>Ruby</nom></kitob></kitoblar>'
doc = Nokogiri::XML(xml)

puts doc.at_xpath("//kitob")["janr"]
puts doc.css("nom").text
puts doc.xpath("//kitob").length`,
        output: `roman
Ruby
1`
      },
      {
        type: "table",
        head: ["Vosita", "Afzalligi", "Kamchiligi"],
        rows: [
          ["REXML", "Stdlib, o'rnatishsiz", "Katta hujjatda sekin"],
          ["Nokogiri", "Tez, CSS/XPath", "Native gem"],
          ["SAX parser", "Juda kam xotira", "Murakkab API"],
          ["JSON", "Yengil va tez", "XML semantikasi yo'q"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "XXE hujumi",
        html: "XML external entity (XXE) orqali hujumchi mahalliy fayllarni o'qishi yoki tarmoqqa so'rov yuborishi mumkin. Ishonchsiz XML'da DTD va external entity'ni o'chiring. Nokogiri sukut bo'yicha tarmoqni bloklaydi, lekin <code>NONET</code> va <code>noent</code> sozlamalarini aniq tekshiring; REXML'da entity expansion limitini cheklang."
      }
    ],
    quiz: [
      {
        q: "REXML::Document.new nimani qabul qiladi?",
        options: [
          "Faqat fayl yo'lini",
          "XML matnini",
          "Faqat JSON ni",
          "Faqat URL ni"
        ],
        answer: 1,
        explain: "REXML::Document.new XML matnini parse qiladi; fayl uchun File.read yoki Document.open ishlatiladi."
      },
      {
        q: "XPath ifodasi //kitob[2]/nom nimani tanlaydi?",
        options: [
          "Birinchi kitob nomini",
          "Ikkinchi kitobning nomini",
          "Barcha nomlarni",
          "Kitob atributini"
        ],
        answer: 1,
        explain: "//kitob[2] ikkinchi kitob elementini, /nom esa uning nom bolasini tanlaydi."
      },
      {
        q: "XXE hujumi nimaga asoslanadi?",
        options: [
          "XML external entity orqali tashqi resurs o'qish",
          "CSV formulalariga",
          "JSON nesting chegarasiga",
          "YAML aliaslariga"
        ],
        answer: 0,
        explain: "XXE external entity yordamida fayl yoki tarmoq resurslarini tortib olishga urinadi."
      }
    ]
  },
  {
    id: 78,
    title: "YAML, konfiguratsiya va xavfsiz yuklash",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "YAML odam o'qiy oladigan konfiguratsiya formati: Docker Compose, GitHub Actions, Rails credentials va ko'plab kutubxonalar shundan foydalanadi. Ruby'da YAML <code>psych</code> kutubxonasi orqali ishlaydi. <code>YAML.safe_load</code> faqat ruxsat etilgan klasslarni yuklaydi, <code>YAML.load</code> esa eski xatti-harakatga tayanishi mumkin — ishonchsiz manbada har doim safe_load ishlating."
      },
      {
        type: "code",
        title: "yaml_asos.rb",
        code: r`require "yaml"

yaml = <<~YAML
  host: localhost
  port: 3000
  faol: true
  fanlar:
    - Ruby
    - SQL
YAML

data = YAML.safe_load(yaml)
puts data["host"]
puts data["port"]
puts data["fanlar"].inspect
puts data["faol"]`,
        output: `localhost
3000
["Ruby", "SQL"]
true`
      },
      {
        type: "p",
        html: "<code>safe_load</code> sukut bo'yicha faqat oddiy tiplarni qaytaradi: Hash, Array, String, Integer, Float, true/false va nil. Sana yoki Symbol kabi klasslar uchun <code>permitted_classes</code> beriladi. Aliaslar esa <code>aliases: true</code> bilan yoqiladi; ularsiz YAML anchor ishlatgan fayl xato beradi. Bu cheklovlar tasodifiy obyekt yaratilishini to'xtatadi."
      },
      {
        type: "code",
        title: "yaml_sana.rb",
        code: r`require "yaml"
require "date"

yaml = "boshlangan: 2026-10-23\n"

begin
  YAML.safe_load(yaml)
rescue Psych::DisallowedClass
  puts "ruxsat yo'q"
end

data = YAML.safe_load(yaml, permitted_classes: [Date])
puts data["boshlangan"].class
puts data["boshlangan"].year`,
        output: `ruxsat yo'q
Date
2026`
      },
      {
        type: "p",
        html: "YAML aliaslari bir xil tuzilmani qayta ishlatishga yordam beradi, lekin \"billion laughs\" kabi resurs hujumlariga ham sabab bo'lishi mumkin. Shuning uchun <code>aliases: true</code> ni faqat o'zingiz nazorat qiladigan fayllarda yoqing. Konfiguratsiyani yuklashda fayl hajmi va chuqurligini ham cheklang."
      },
      {
        type: "code",
        title: "config_merge.rb",
        code: r`require "yaml"

standart = YAML.safe_load("host: localhost\nport: 3000\n")
muhit = YAML.safe_load("port: 4000\n")

sozlama = standart.merge(muhit)
puts sozlama["host"]
puts sozlama["port"]
puts sozlama.frozen?`,
        output: `localhost
4000
false`
      },
      {
        type: "table",
        head: ["Metod", "Xavfsizlik", "Qo'llanish"],
        rows: [
          ["<code>safe_load</code>", "Yuqori", "Tashqi konfiguratsiya"],
          ["<code>load</code>", "Pastroq", "Ishonchli, eski fayl"],
          ["<code>safe_load_file</code>", "Yuqori", "Fayldan o'qish"],
          ["<code>dump</code>", "Yozish", "Konfiguratsiya eksporti"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Maxfiy ma'lumotlar",
        html: "Parol va tokenlarni YAML faylga ochiq yozmang. <code>ENV.fetch</code>, Rails credentials yoki maxfiy ombor ishlatib, konfiguratsiyani muhit o'zgaruvchilari bilan to'ldiring. YAML faylini git'ga qo'shishdan oldin <code>.gitignore</code> va <code>git-secrets</code> kabi tekshiruvlarni sozlang."
      }
    ],
    quiz: [
      {
        q: "YAML.safe_load sukut bo'yicha qaysi klasslarni yuklaydi?",
        options: [
          "Barcha Ruby klasslarini",
          "Faqat oddiy tiplarni",
          "Faqat Date va Time",
          "Faqat foydalanuvchi klasslarini"
        ],
        answer: 1,
        explain: "safe_load Hash, Array, String, son, boolean va nil kabi oddiy tiplar bilan cheklanadi."
      },
      {
        q: "YAML da sana tipini safe_load bilan o'qish uchun nima kerak?",
        options: [
          "aliases: true",
          "permitted_classes: [Date]",
          "symbolize_names: true",
          "unsafe: true"
        ],
        answer: 1,
        explain: "Date kabi klasslar permitted_classes ro'yxatiga qo'shilishi kerak."
      },
      {
        q: "YAML aliaslarini yoqish nima uchun ehtiyotkorlik talab qiladi?",
        options: [
          "Resurs hujumiga sabab bo'lishi mumkin",
          "Ular har doim sintaksis xatosi beradi",
          "Ular faqat sonlarni qo'llaydi",
          "Ular encoding ni o'zgartiradi"
        ],
        answer: 0,
        explain: "Cheksiz alias kengayishi xotira va CPU ni tugatishi mumkin."
      }
    ]
  },
  {
    id: 79,
    title: "API client loyihasi: cache va pagination",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Yaxshi API client tashqi dunyoni ilovadan ajratadi: HTTP detallari, autentifikatsiya, xatolar va cache bir joyda turadi. Uni testlash uchun transportni in'ektsiya qilish kerak — real tarmoqsiz javoblarni almashtirish mumkin. Bu darsda kichik, lekin kengaytiriladigan client yozamiz: GET cache, xato xaritalash va sahifalash."
      },
      {
        type: "code",
        title: "api_client.rb",
        code: r`require "json"

Javob = Struct.new(:code, :body)

class ApiClient
  def initialize(transport:, cache: {})
    @transport = transport
    @cache = cache
  end

  def get(yol)
    return @cache[yol] if @cache.key?(yol)

    javob = @transport.call(yol)
    raise "HTTP #{javob.code}" unless javob.code == "200"

    @cache[yol] = JSON.parse(javob.body)
  end
end

transport = ->(_yol) { Javob.new("200", '{"ism":"Aziza"}') }
client = ApiClient.new(transport: transport)

puts client.get("/profil")["ism"]
puts client.get("/profil")["ism"]`,
        output: `Aziza
Aziza`
      },
      {
        type: "p",
        html: "Transport — <code>call</code> ga javob beradigan obyekt yoki lambda. Uni almashtirish orqali testda tarmoqsiz ishlash, real kodda esa <code>Net::HTTP</code> yoki Faraday ishlatish mumkin. Cache faqat GET uchun xavfsiz; POST/PUT/DELETE natijasini keshlash biznes-mantiqni buzadi. Cache kaliti URL, query va auth foydalanuvchisini o'z ichiga olishi kerak."
      },
      {
        type: "code",
        title: "pagination_client.rb",
        code: r`class SahifaliClient
  def initialize(sahifalar)
    @sahifalar = sahifalar
  end

  def har_bir_element(_yol)
    sahifa = 1

    loop do
      data = @sahifalar.fetch(sahifa)
      data["items"].each { |element| yield element }
      break unless data["next"]

      sahifa = data["next"]
    end
  end
end

client = SahifaliClient.new(
  1 => { "items" => ["a", "b"], "next" => 2 },
  2 => { "items" => ["c"], "next" => nil }
)

client.har_bir_element("/items") { |element| puts element }`,
        output: `a
b
c`
      },
      {
        type: "p",
        html: "Sahifalashni blok bilan yozish xotirani tejaydi: barcha elementlarni massivga yig'masdan, kelganda qayta ishlash mumkin. To'xtash sharti aniq bo'lishi shart — <code>next</code> yo'qligi, bo'sh massiv yoki maksimal sahifa. Cheksiz loop'dan himoya uchun hisoblagich qo'shing va noto'g'ri javobda xato ko'taring."
      },
      {
        type: "table",
        head: ["Qatlam", "Mas'uliyat"],
        rows: [
          ["Transport", "TCP/TLS, timeout, retry"],
          ["Client", "URL, auth, JSON, xatolar"],
          ["Service", "Biznes-qoidalar, birlashtirish"],
          ["Presenter", "Foydalanuvchiga ko'rinish"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Kuzatuvchanlik",
        html: "Har bir so'rovga request ID, davomiylik va statusni log qiling. Maxfiy token va shaxsiy ma'lumotni logga yozmang. 4xx mijoz xatosi, 5xx server xatosi va timeout'ni alohida handling qiling: foydalanuvchiga qayta urinish mumkinmi yoki yo'qmi aniq bo'lsin."
      }
    ],
    quiz: [
      {
        q: "API client ga transportni in'ektsiya qilishning foydasi nima?",
        options: [
          "Real tarmoqsiz test qilish imkonini beradi",
          "HTTP ni butunlay o'chirib qo'yadi",
          "Har doim tezroq ishlaydi",
          "JSON ni keraksiz qiladi"
        ],
        answer: 0,
        explain: "Transportni almashtirib, testda soxta javoblar bilan client mantiqini tekshirish mumkin."
      },
      {
        q: "GET javobini keshlash qachon xavfli bo'ladi?",
        options: [
          "Foydalanuvchiga xos yoki tez o'zgaradigan ma'lumotda",
          "Hech qachon, cache har doim xavfsiz",
          "Faqat JSON bo'lmaganda",
          "Faqat HTTPS da"
        ],
        answer: 0,
        explain: "Auth foydalanuvchisi yoki tez eskiradigan ma'lumot keshi noto'g'ri javob berishi mumkin; kalit va TTL muhim."
      },
      {
        q: "Pagination loop'ini cheksiz bo'lib qolishdan nima himoya qiladi?",
        options: [
          "Faqat birinchi sahifani olish",
          "Maksimal sahifa chegarasi va to'xtash sharti",
          "Har safar yangi client yaratish",
          "Cache ni o'chirish"
        ],
        answer: 1,
        explain: "Aniq to'xtash sharti va maksimal sahifa soni loop'ni cheklaydi."
      }
    ]
  }
];
