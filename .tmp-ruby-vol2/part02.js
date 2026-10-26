const r = String.raw;

module.exports = [
  {
    id: 55,
    title: "Refinements: xavfsiz monkey patch",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Monkey patch — mavjud klassni global o'zgartirish. U qulay, lekin kutubxonalar bir-birining metodini bosib ketishi mumkin. <strong>Refinement</strong> shu muammoni hal qiladi: metod faqat <code>using</code> chaqirilgan fayl yoki leksik doirada ko'rinadi, dasturning qolgan qismi esa o'zgarmaydi. Bu ayniqsa katta loyihada va testlarda qimmatli."
      },
      {
        type: "code",
        title: "refinement.rb",
        code: r`module MatnYordam
  refine String do
    def sarlavha
      split.map(&:capitalize).join(" ")
    end

    def qisqa(limit = 10)
      length > limit ? "#{self[0, limit]}..." : self
    end
  end
end

using MatnYordam

puts "ruby tili".sarlavha
puts "juda uzun matn".qisqa(8)
puts "ruby".respond_to?(:sarlavha)`,
        output: `Ruby Tili
juda uzu...
true`
      },
      {
        type: "p",
        html: "<code>refine String do ... end</code> bloki String uchun yangi metodlar e'lon qiladi, ammo ular global emas. <code>using MatnYordam</code> esa ularni joriy faylning keyingi qismida faollashtiradi. Boshqa fayl yoki klass refinement haqida bilmaydi va <code>String</code> o'zgargan deb hisoblamaydi. Bu izolyatsiya testlarda va kutubxona ichida juda foydali."
      },
      {
        type: "code",
        title: "refinement_son.rb",
        code: r`module Sonlar
  refine Integer do
    def kvadrat
      self * self
    end

    def ishorali?
      positive? ? "musbat" : "musbat emas"
    end
  end
end

using Sonlar

puts 7.kvadrat
puts 7.ishorali?
puts (-3).ishorali?
puts 7.respond_to?(:kvadrat)`,
        output: `49
musbat
musbat emas
true`
      },
      {
        type: "p",
        html: "Refinement <code>using</code> dan keyingi leksik doirada amal qiladi. Metod ichida <code>using</code> chaqirib bo'lmaydi — u faqat fayl, modul yoki klass tanasida ishlaydi. Refinement'ni <code>Module#refine</code> bilan e'lon qilib, keyin <code>using</code> orqali yoqish tartibi qat'iy: avval modul, keyin faollashtirish. Test faylida ham xuddi shu tartib takrorlanadi."
      },
      {
        type: "table",
        head: ["Yondashuv", "Ko'rinish doirasi", "Xavfi"],
        rows: [
          ["Global monkey patch", "Butun jarayon", "Nom to'qnashuvi"],
          ["Refinement + using", "Fayl/leksik doira", "Kam, izolyatsiyalangan"],
          ["Subklass yoki wrapper", "Aniq obyekt", "Ko'proq kod"],
          ["Module prepend", "Klass zanjiri", "Global ta'sir"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Refinement qachon mos",
        html: "Uchinchi tomon klassiga kichik yordamchi metod qo'shish, eski API'ni moslashtirish yoki testda vaqtni muzlatish uchun refinement yaxshi. Agar metod butun ilovada kerak bo'lsa, global patch o'rniga aniq yordamchi modul yoki dekorator yozish ko'pincha oqilroq."
      }
    ],
    quiz: [
      {
        q: "Refinement'ni faollashtirish uchun qaysi kalit so'z ishlatiladi?",
        options: [
          "include",
          "using",
          "extend",
          "prepend"
        ],
        answer: 1,
        explain: "using modulni joriy leksik doirada faollashtiradi; include va extend refinement'ni yoqmaydi."
      },
      {
        q: "Refinement bilan qo'shilgan metod qayerda ko'rinadi?",
        options: [
          "Butun jarayonda",
          "Faqat using chaqirilgan leksik doirada",
          "Faqat Object klasida",
          "Faqat Gemfile ichida"
        ],
        answer: 1,
        explain: "Refinement leksik doirada amal qiladi; boshqa fayllar global String o'zgarganini ko'rmaydi."
      },
      {
        q: "Global monkey patch bilan refinement orasidagi asosiy farq nima?",
        options: [
          "Refinement faqat sonlar bilan ishlaydi",
          "Monkey patch faqat testda ishlaydi",
          "Refinement ta'sir doirasini cheklaydi",
          "Refinement metodni private qiladi"
        ],
        answer: 2,
        explain: "Refinement o'zgarishni leksik doirada cheklaydi, monkey patch esa butun jarayonga ta'sir qiladi."
      }
    ]
  },
  {
    id: 56,
    title: "Modul kompozitsiyasi va concern'lar",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Ruby'da meros bitta ota-klass bilan cheklangan, modullar esa bir nechta xatti-harakatni birlashtiradi. <strong>Concern</strong> — bu instans metodlari, klass metodlari va hook'larni bitta qayta ishlatiladigan paketga yig'ish naqshi. Ular orqali modelni yog'siz saqlash, mas'uliyatlarni ajratish va testlash osonlashadi."
      },
      {
        type: "code",
        title: "audit_concern.rb",
        code: r`module Audit
  def self.included(base)
    base.extend(ClassMethods)
  end

  module ClassMethods
    def audit?
      true
    end
  end

  def audit_yozuv
    "#{self.class.name} tekshirildi"
  end
end

class Buyurtma
  include Audit
end

puts Buyurtma.audit?
puts Buyurtma.new.audit_yozuv`,
        output: `true
Buyurtma tekshirildi`
      },
      {
        type: "p",
        html: "<code>self.included</code> hook'i klass metodlarini <code>extend</code> qiladi, <code>ClassMethods</code> moduli esa ularni saqlaydi. Shu tuzilma Rails'dagi <code>ActiveSupport::Concern</code> ning asosi. Concern ichida <code>included do ... end</code> bloki ham ishlaydi: u klass tanasida bajariladigan kodni (validatsiya, callback, scope) bir joyga jamlaydi."
      },
      {
        type: "code",
        title: "kompozitsiya.rb",
        code: r`module Hisoblanadigan
  def jami
    elementlar.sum { |element| element.narx }
  end
end

module ChopEtiladigan
  def chop_et
    "Jami: #{jami} so'm"
  end
end

Element = Struct.new(:narx)

class Savat
  include Hisoblanadigan
  include ChopEtiladigan

  def elementlar
    [Element.new(1200), Element.new(4500), Element.new(800)]
  end
end

puts Savat.new.jami
puts Savat.new.chop_et`,
        output: `6500
Jami: 6500 so'm`
      },
      {
        type: "p",
        html: "Modul metodlari <code>include</code> tartibida ancestors zanjiriga qo'shiladi: oxirgi include qilingan modul oldinroq qidiriladi. <code>ChopEt</code> moduli <code>jami</code> ni chaqira oladi, chunki ikkala modul ham bir klassning instansida ishlaydi. Bu kompozitsiya merosdan mosroq: <code>Savat</code> \"hisoblanadigan\" yoki \"chop etiladigan\" obyekt emas, balki shu qobiliyatlarga ega."
      },
      {
        type: "table",
        head: ["Concern qismi", "Vazifasi"],
        rows: [
          ["<code>included do</code>", "Klass tanasida kod bajaradi"],
          ["<code>class_methods do</code>", "Klass metodlarini e'lon qiladi"],
          ["Instans metodlari", "Umumiy xatti-harakat"],
          ["<code>prepended do</code>", "Metodni klassdan oldin qo'shadi"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Nom to'qnashuvi",
        html: "Bir nechta concern bir xil metod nomini bersa, include tartibi g'olibni belgilaydi va xato jimgina yuz berishi mumkin. Concern nomlarini domen bilan bog'lang, metodlarni kichik saqlang va <code>ancestors</code> orqali tartibni tekshiring. Concern ichida boshqa concern'ga bog'liqlik bo'lsa, uni aniq hujjatlashtiring."
      }
    ],
    quiz: [
      {
        q: "Concern ichida klass metodlarini qaysi modul saqlaydi?",
        options: [
          "InstanceMethods",
          "ClassMethods",
          "SingletonMethods",
          "HelperMethods"
        ],
        answer: 1,
        explain: "self.included hook ichida base.extend(ClassMethods) qilinadi va klass metodlari shu modulda turadi."
      },
      {
        q: "Bir nechta modul include qilinsa metod qidiruvi qanday tartibda bo'ladi?",
        options: [
          "Birinchi include qilingan modul ustun",
          "Oxirgi include qilingan modul oldinroq tekshiriladi",
          "Faqat klass metodi ko'riladi",
          "Tartib muhim emas"
        ],
        answer: 1,
        explain: "Har bir include modulni ancestors zanjirining klassdan oldingi qismiga qo'shadi; oxirgi include yuqoriroq turadi."
      },
      {
        q: "Kompozitsiya merosdan qaysi jihati bilan afzal?",
        options: [
          "Bir nechta xatti-harakatni erkin birlashtiradi",
          "Har doim tezroq ishlaydi",
          "Private metodlarni yo'q qiladi",
          "Konstruktorni avtomatik yaratadi"
        ],
        answer: 0,
        explain: "Modullar yordamida bir nechta mustaqil qobiliyatni birlashtirish mumkin, meros esa bitta ota-klass bilan cheklanadi."
      }
    ]
  },
  {
    id: 57,
    title: "DSL yozish: instance_eval va instance_exec",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Ichki DSL (domain-specific language) — oddiy Ruby kodini domen tiliga o'xshatib yozish. Konfiguratsiya fayllari, migratsiyalar, route'lar va testlar shu uslubda yoziladi. Asosiy vositalar: <code>instance_eval</code> blok ichidagi <code>self</code> ni o'zgartiradi, <code>instance_exec</code> esa qo'shimcha argument ham beradi. Ikkalasi ham kuchli, shuning uchun API ni tor va tushunarli saqlash kerak."
      },
      {
        type: "code",
        title: "konfig_dsl.rb",
        code: r`class Konfig
  attr_reader :qiymatlar

  def initialize(&blok)
    @qiymatlar = {}
    instance_eval(&blok)
  end

  def set(nom, qiymat)
    @qiymatlar[nom] = qiymat
  end
end

k = Konfig.new do
  set :host, "localhost"
  set :port, 3000
  set :muhit, "test"
end

k.qiymatlar.each { |nom, qiymat| puts "#{nom}=#{qiymat}" }`,
        output: `host=localhost
port=3000
muhit=test`
      },
      {
        type: "p",
        html: "<code>instance_eval</code> blokni obyekt kontekstida bajaradi: blok ichida <code>self</code> — <code>Konfig</code> obyekti, shuning uchun <code>set</code> ni qabul qiluvchisiz chaqirish mumkin. Blok tashqi lokal o'zgaruvchilarni baribir ko'radi, lekin instans o'zgaruvchilari va private metodlar ham ochiladi. Bu moslashuvchanlik DSL uchun qulay, ammo noto'g'ri ishlatilsa inkapsulyatsiyani buzadi."
      },
      {
        type: "code",
        title: "reja_dsl.rb",
        code: r`class Reja
  def initialize(&blok)
    @qadamlar = []
    instance_exec(3, &blok)
  end

  def qadam(nom)
    @qadamlar << nom
  end

  def royxat
    @qadamlar
  end
end

reja = Reja.new do |takror|
  takror.times do |indeks|
    qadam "qadam-#{indeks + 1}"
  end
end

puts reja.royxat.join(", ")
puts reja.royxat.length`,
        output: `qadam-1, qadam-2, qadam-3
3`
      },
      {
        type: "p",
        html: "<code>instance_exec</code> <code>instance_eval</code> bilan bir xil, faqat blokka argument uzatadi. Bu DSL ichida tashqi ma'lumotni parametr sifatida berish imkonini yaratadi. Muqobil uslub — <code>yield self</code>: blok obyektni argument sifatida oladi va <code>self</code> o'zgarmaydi. Qaysi biri tanlansa, kutubxona foydalanuvchisi uchun izchil bo'lishi muhim."
      },
      {
        type: "table",
        head: ["Usul", "Blokdagi self", "Argument"],
        rows: [
          ["<code>instance_eval(&blok)</code>", "Obyekt", "Yo'q"],
          ["<code>instance_exec(arg, &blok)</code>", "Obyekt", "Bor"],
          ["<code>yield self</code>", "O'zgarmaydi", "Obyekt"],
          ["<code>class_eval</code>", "Klass", "Yo'q"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "DSL va xavfsizlik",
        html: "Foydalanuvchi kiritgan matnni <code>instance_eval</code> yoki <code>eval</code> ga uzatish hech qachon xavfsiz emas. DSL faqat dasturchi yozadigan konfiguratsiya uchun bo'lsin. Metod nomlarini allowlist bilan tekshiring, blokni esa <code>instance_exec</code> orqali aniq argumentlar bilan bering."
      }
    ],
    quiz: [
      {
        q: "instance_eval blok ichida self nimaga teng bo'ladi?",
        options: [
          "Klassga",
          "instance_eval chaqirilgan obyektga",
          "main obyektiga",
          "nil ga"
        ],
        answer: 1,
        explain: "instance_eval blokni qabul qiluvchi obyekt kontekstida bajaradi, shuning uchun self o'sha obyekt bo'ladi."
      },
      {
        q: "instance_exec ning instance_eval dan farqi nima?",
        options: [
          "Blokka argument uzata oladi",
          "Faqat klasslarda ishlaydi",
          "Blokni umuman bajarmaydi",
          "Metodni private qiladi"
        ],
        answer: 0,
        explain: "instance_exec qo'shimcha argumentlarni blokka uzatadi; instance_eval faqat blokni qabul qiladi."
      },
      {
        q: "DSL uchun foydalanuvchi matnini eval qilish nima uchun xavfli?",
        options: [
          "U har doim sintaksis xatosini beradi",
          "Ixtiyoriy Ruby kodi bajarilishi mumkin",
          "Faqat sekin ishlaydi",
          "Bloklarni o'chirib qo'yadi"
        ],
        answer: 1,
        explain: "eval foydalanuvchi kiritgan kodni to'liq bajaradi, bu esa kod inyeksiyasiga olib keladi."
      }
    ]
  },
  {
    id: 58,
    title: "Frozen obyektlar va immutability",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "O'zgarmas (immutable) obyektlar kutilmagan mutatsiyani oldini oladi, thread va Ractor sharoitida xavfsizroq. Ruby'da <code>freeze</code> obyektni muzlatadi, <code># frozen_string_literal: true</code> esa fayldagi barcha string literal'larni avtomatik muzlatadi. Muzlatilgan obyektni o'zgartirishga urinish <code>FrozenError</code> beradi — bu xatoni erta ushlash imkoniyati."
      },
      {
        type: "code",
        title: "frozen_string.rb",
        code: r`# frozen_string_literal: true

ism = "Aziza"

begin
  ism << "!"
rescue FrozenError => e
  puts e.class
end

yangi = +"Aziza"
yangi << "!"
puts yangi
puts ism.frozen?
puts yangi.frozen?`,
        output: `FrozenError
Aziza!
true
false`
      },
      {
        type: "p",
        html: "Unar <code>+</code> operatori muzlatilgan stringdan o'zgartiriladigan nusxa oladi. <code>dup</code> ham shunday ishlaydi, <code>clone</code> esa freeze holatini saqlaydi. String literal'ni muzlatish xotira sarfini kamaytiradi va hash kalitlari kabi joylarda xavfsizlik beradi, lekin mavjud kod <code>&lt;&lt;</code> yoki <code>sub!</code> bilan stringni o'zgartirsa, testlarda kutilmagan xato chiqadi."
      },
      {
        type: "code",
        title: "chuqur_freeze.rb",
        code: r`class Konfig
  attr_reader :qiymatlar

  def initialize(qiymatlar)
    @qiymatlar = qiymatlar
      .transform_values { |qiymat| qiymat.is_a?(String) ? qiymat.freeze : qiymat }
      .freeze
  end
end

k = Konfig.new(host: "localhost", port: 3000)
puts k.qiymatlar[:host].frozen?
puts k.qiymatlar.frozen?

begin
  k.qiymatlar[:port] = 4000
rescue FrozenError => e
  puts e.class
end`,
        output: `true
true
FrozenError`
      },
      {
        type: "p",
        html: "Sayoz <code>freeze</code> faqat tashqi obyektni muzlatadi: ichidagi massiv yoki hash o'zgartirilishi mumkin. Chuqur muzlatish uchun har bir darajani alohida freeze qilish yoki <code>Ractor.make_shareable</code> dan foydalanish kerak. Ractor uchun obyekt butunlay muzlatilgan va barcha ichki obyektlari shareable bo'lishi shart."
      },
      {
        type: "code",
        title: "shareable.rb",
        code: r`matn = "salom".freeze
massiv = [1, 2, [3, 4]].freeze

puts Ractor.shareable?(matn)
puts Ractor.shareable?(massiv)
puts Ractor.shareable?([1, 2].freeze)`,
        output: `true
false
false`
      },
      {
        type: "note",
        variant: "tip",
        title: "Amaliy qoida",
        html: "Yangi fayllarda <code># frozen_string_literal: true</code> qo'ying, konfiguratsiya va konstantalarni freeze qiling, lekin har bir obyektni majburan muzlatishga shoshilmang. Avvalo o'zgarishi mumkin bo'lgan chegaralarni aniqlang: sozlama, cache kaliti va umumiy holat — muzlatish uchun eng yaxshi nomzodlar."
      }
    ],
    quiz: [
      {
        q: "# frozen_string_literal: true nima qiladi?",
        options: [
          "Fayldagi string literal'larni muzlatadi",
          "Barcha o'zgaruvchilarni const qiladi",
          "Faylni faqat o'qish rejimida ochadi",
          "String metodlarini o'chirib qo'yadi"
        ],
        answer: 0,
        explain: "Bu sehrli izoh fayldagi string literal'larni avtomatik freeze qiladi."
      },
      {
        q: "Muzlatilgan stringni << bilan o'zgartirish qanday xato beradi?",
        options: [
          "TypeError",
          "NameError",
          "FrozenError",
          "ArgumentError"
        ],
        answer: 2,
        explain: "Muzlatilgan obyektni mutatsiya qilish FrozenError ko'taradi."
      },
      {
        q: "Ractor.shareable? qaysi obyekt uchun true qaytaradi?",
        options: [
          "Har qanday oddiy string uchun",
          "Ichki massivi muzlatilmagan massiv uchun",
          "To'liq muzlatilgan va shareable obyekt uchun",
          "Faqat Symbol uchun"
        ],
        answer: 2,
        explain: "Shareable obyekt chuqur muzlatilgan bo'lishi va barcha ichki obyektlari ham shareable bo'lishi kerak."
      }
    ]
  },
  {
    id: 59,
    title: "Metaprogramming xavfsizligi va takrorlash",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Metaprogramming imkoniyatlari katta, ammo xavfsizlik va o'qilish chegaralari bor. <code>send</code> private metodlarni chaqiradi, <code>eval</code> ixtiyoriy kod bajaradi, <code>method_missing</code> xatolarni yashirishi mumkin. Bu darsda biz dinamik chaqiruvlarni xavfsiz qilish, ruxsat etilgan nomlar ro'yxatini yuritish va metaprogrammingni qachon ishlatmaslik kerakligini ko'rib chiqamiz."
      },
      {
        type: "code",
        title: "public_send.rb",
        code: r`class Hisob
  def oshkor
    maxfiy
  end

  private

  def maxfiy
    42
  end
end

h = Hisob.new
puts h.public_send(:oshkor)

begin
  h.public_send(:maxfiy)
rescue NoMethodError
  puts "public_send rad etdi"
end

puts h.send(:maxfiy)`,
        output: `42
public_send rad etdi
42`
      },
      {
        type: "p",
        html: "<code>public_send</code> faqat public interfeysni chaqiradi, shuning uchun tashqi ma'lumotdan kelgan metod nomi uchun xavfsizroq. <code>send</code> esa private metodlarni ham ochadi va uni faqat kod ichida nom ma'lum bo'lganda ishlatish kerak. Metod nomini tekshirish uchun <code>respond_to?(nom, true)</code> yetarli emas: ruxsat etilgan ro'yxat aniqroq himoya beradi."
      },
      {
        type: "code",
        title: "allowlist.rb",
        code: r`AMALLAR = {
  "qosh" => ->(a, b) { a + b },
  "ayir" => ->(a, b) { a - b }
}.freeze

nom = "qosh"
amal = AMALLAR[nom]
abort "noma'lum amal" unless amal

puts amal.call(10, 4)
puts AMALLAR.fetch("kopaytir", ->(a, b) { a * b }).call(2, 3)`,
        output: `14
6`
      },
      {
        type: "p",
        html: "Ruxsat etilgan amallar jadvali — dinamik dispatch uchun eng tushunarli yechim. Nom topilmasa <code>abort</code> yoki aniq xato ko'tariladi, foydalanuvchi kiritgan nom esa hech qachon to'g'ridan-to'g'ri <code>send</code> ga uzatilmaydi. Xuddi shu naqshni controller action, CSV ustuni yoki plugin tanlashda qo'llash mumkin."
      },
      {
        type: "table",
        head: ["Xavfli usul", "Xavfsiz muqobil"],
        rows: [
          ["<code>eval(matn)</code>", "Parser yoki allowlist"],
          ["<code>send(foydalanuvchi_nomi)</code>", "<code>public_send</code> + allowlist"],
          ["<code>method_missing</code> da super'siz", "<code>super</code> + <code>respond_to_missing?</code>"],
          ["String bilan <code>class_eval</code>", "Blok bilan <code>class_eval</code>"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Metaprogrammingni qachon ishlatmaslik kerak",
        html: "Agar oddiy metod, <code>case</code> yoki konfiguratsiya hash'i yetarli bo'lsa, metaprogramming ortiqcha. Dinamik kod debug qilishni, statik tahlilni va hujjatlashtirishni qiyinlashtiradi. Har bir hiyla uchun savol bering: bu kelajakdagi dasturchiga foyda keltiradimi yoki faqat bugungi qisqalik uchunmi?"
      },
      {
        type: "code",
        title: "xulosa.rb",
        code: r`def dinamik_chaqir(obyekt, nom, *args)
  raise ArgumentError, "nom bo'sh" if nom.to_s.empty?
  raise NoMethodError, "ruxsat yo'q" unless obyekt.respond_to?(nom)

  obyekt.public_send(nom, *args)
end

puts dinamik_chaqir("ruby", :upcase)
puts dinamik_chaqir([3, 1, 2], :sort).inspect`,
        output: `RUBY
[1, 2, 3]`
      }
    ],
    quiz: [
      {
        q: "public_send va send orasidagi farq nima?",
        options: [
          "public_send private metodlarni chaqirmaydi",
          "send faqat sonlar bilan ishlaydi",
          "public_send har doim sekinroq",
          "Ikkalasi butunlay bir xil"
        ],
        answer: 0,
        explain: "public_send faqat public metodlarga murojaat qiladi; send private metodlarni ham chaqira oladi."
      },
      {
        q: "Foydalanuvchi kiritgan metod nomini bajarishning eng xavfsiz yo'li qaysi?",
        options: [
          "eval(nom)",
          "send(nom)",
          "Allowlist jadvalidan tekshirib public_send",
          "instance_eval(nom)"
        ],
        answer: 2,
        explain: "Ruxsat etilgan nomlar jadvali kutilmagan metodlar bajarilishini oldini oladi."
      },
      {
        q: "Metaprogramming qachon ortiqcha hisoblanadi?",
        options: [
          "Oddiy metod yoki case yetarli bo'lganda",
          "Har doim, chunki u sekin",
          "Faqat testlarda",
          "Faqat Rails'da"
        ],
        answer: 0,
        explain: "Agar oddiy, aniq kod muammoni hal qilsa, dinamik hiyla faqat murakkablik qo'shadi."
      }
    ]
  }
];
