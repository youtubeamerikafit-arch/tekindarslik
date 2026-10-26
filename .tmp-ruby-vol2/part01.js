const r = String.raw;

module.exports = [
  {
    id: 50,
    title: "Singleton klass va eigenclass",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "Ruby'da har bir obyektning o'ziga xos metodlar to'plami bo'lishi mumkin. Bu metodlar obyektning <strong>singleton klassida</strong> (eigenclass) saqlanadi. Klass metodlari ham aslida shu klass obyektining singleton metodlaridir. Bu modelni tushunish metaprogrammingning poydevori: <code>def self.metod</code>, <code>class &lt;&lt; self</code> va <code>extend</code> — barchasi bitta mexanizmga tayanadi."
      },
      {
        type: "code",
        title: "eigen.rb",
        code: r`class Hisob
  class << self
    attr_accessor :yaratilgan

    def yarat
      self.yaratilgan = yaratilgan.to_i + 1
      new
    end
  end
end

Hisob.yarat
puts Hisob.yaratilgan
puts Hisob.singleton_methods(false).sort.inspect`,
        output: `1
[:yarat, :yaratilgan]`
      },
      {
        type: "p",
        html: "<code>class &lt;&lt; self</code> bloki joriy obyektning singleton klassini ochadi. Klass ichida <code>self</code> — klassning o'zi, shuning uchun blok ichidagi metodlar klass metodiga aylanadi. <code>attr_accessor</code> ham singleton klassda ishlaydi va <code>Hisob.yaratilgan</code> kabi accessor yaratadi. Bu yozuv <code>def self.yarat</code> bilan aynan bir xil natija beradi, lekin bir nechta metodni guruhlash uchun qulay."
      },
      {
        type: "code",
        title: "obyekt_singleton.rb",
        code: r`matn = "ruby"

def matn.baqir
  upcase + "!"
end

puts matn.baqir
puts matn.singleton_methods.inspect
puts "java".respond_to?(:baqir)
puts matn.singleton_class.instance_methods(false).inspect`,
        output: `RUBY!
[:baqir]
false
[:baqir]`
      },
      {
        type: "note",
        variant: "warning",
        title: "Singleton metodlar obyekt bilan bog'lanadi",
        html: "Bitta obyektga qo'shilgan metod boshqa obyektda mavjud emas. Bunday obyektni <code>Marshal</code> bilan saqlash yoki <code>dup</code> qilish kutilmagan natija berishi mumkin. Umumiy xatti-harakat kerak bo'lsa, singleton metod o'rniga modul yozib, <code>include</code> yoki <code>extend</code> qiling."
      },
      {
        type: "p",
        html: "Metod qidiruvi obyektning singleton klassidan boshlanadi, keyin uning haqiqiy klassi va o'sha klassning modullari tekshiriladi. <code>extend</code> modulni aynan shu singleton klassga qo'shadi, shuning uchun metod faqat bitta obyektda paydo bo'ladi. <code>obj.singleton_class.include?(Modul)</code> esa qo'shilganini tasdiqlaydi."
      },
      {
        type: "code",
        title: "extend.rb",
        code: r`module Salomlash
  def salom
    "Salom, #{ism}"
  end
end

class Foydalanuvchi
  attr_reader :ism

  def initialize(ism)
    @ism = ism
  end
end

u = Foydalanuvchi.new("Aziza")
u.extend(Salomlash)
puts u.salom
puts Foydalanuvchi.new("Bek").respond_to?(:salom)
puts u.singleton_class.include?(Salomlash)`,
        output: `Salom, Aziza
false
true`
      },
      {
        type: "table",
        head: ["Yozuv", "Natija"],
        rows: [
          ["<code>def self.x</code>", "Klassning singleton metodini yaratadi"],
          ["<code>class &lt;&lt; self</code>", "Bir nechta klass metodini bitta blokda ochadi"],
          ["<code>obj.extend(M)</code>", "<code>M</code> metodlarini obyekt singletoniga qo'shadi"],
          ["<code>obj.singleton_class</code>", "Obyektning shaxsiy metodlar jadvalini qaytaradi"]
        ]
      }
    ],
    quiz: [
      {
        q: "Eigenclass (singleton klass) qanday vazifani bajaradi?",
        options: [
          "Faqat klass metodlarini meros qilib oladi",
          "Obyektga xos metodlarni saqlaydi",
          "Barcha obyektlar uchun umumiy xotira ajratadi",
          "Faqat private metodlarni yashiradi"
        ],
        answer: 1,
        explain: "Har bir obyektning singleton klassida faqat shu obyektga tegishli metodlar saqlanadi."
      },
      {
        q: "class << self bloki ichida yozilgan def yarat qanday metod bo'ladi?",
        options: [
          "Private instans metodi",
          "Modul metodi",
          "Klass metodi",
          "Lokal metod"
        ],
        answer: 2,
        explain: "Klass tanasida self klassning o'zi bo'ladi, shuning uchun blok ichidagi metod klass metodi bo'ladi."
      },
      {
        q: "obj.extend(Modul) chaqirilgandan keyin modul metodlari qayerda joylashadi?",
        options: [
          "obj ning singleton klassida",
          "Modulning o'zida",
          "Object klassida",
          "Faqat klass darajasida"
        ],
        answer: 0,
        explain: "extend modulni obyektning singleton klassiga qo'shadi; include esa klassning ancestors zanjiriga qo'shadi."
      }
    ]
  },
  {
    id: 51,
    title: "define_method bilan dinamik API",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "<code>define_method</code> — klass yoki modul ichida metodni runtime'da yaratish usuli. U nom va blok (yoki <code>Proc</code>) qabul qiladi. <code>def</code> dan farqli ravishda metod nomini o'zgaruvchidan olish mumkin, blok esa tashqi lokal o'zgaruvchilarni eslab qoladi. Bu imkoniyat qayta-qayta takrorlanadigan metodlarni qisqa DSL bilan yozishda juda qo'l keladi."
      },
      {
        type: "code",
        title: "dinamik_hisob.rb",
        code: r`class Hisoblagich
  %i[qosh ayir kopaytir].each do |amal|
    define_method(amal) do |a, b|
      case amal
      when :qosh then a + b
      when :ayir then a - b
      else a * b
      end
    end
  end
end

h = Hisoblagich.new
puts h.qosh(7, 5)
puts h.ayir(7, 5)
puts h.kopaytir(7, 5)
puts Hisoblagich.instance_method(:qosh).arity`,
        output: `12
2
35
2`
      },
      {
        type: "p",
        html: "Blok ichidagi <code>amal</code> har bir aylanish uchun alohida closure bo'ladi, shuning uchun uchta metod ham to'g'ri nom bilan ishlaydi. <code>instance_method(:qosh).arity</code> metodning ikkita majburiy argument olishini tasdiqlaydi. Dinamik metodlar ham <code>Method</code> obyekti, <code>parameters</code>, <code>source_location</code> kabi introspection vositalari orqali ko'rinadi."
      },
      {
        type: "code",
        title: "qoida.rb",
        code: r`class Sozlama
  def self.qoida(nom, &blok)
    define_method(nom, &blok)
  end
end

chegara = 80
Sozlama.qoida(:otdimi?) { |ball| ball >= chegara }
Sozlama.qoida(:daraja) { |ball| ball >= 90 ? "A" : "B" }

s = Sozlama.new
puts s.otdimi?(85)
puts s.daraja(92)
puts Sozlama.instance_method(:otdimi?).parameters.inspect`,
        output: `true
A
[[:req, :ball]]`
      },
      {
        type: "p",
        html: "<code>define_method</code> ga blok uzatilsa, u metodning tanasi bo'ladi va tashqi <code>chegara</code> o'zgaruvchisini ko'radi. Bu xatti-harakat <code>def</code> bilan yozilgan metodda yo'q. <code>define_singleton_method</code> esa xuddi shu ishni bitta obyekt uchun bajaradi; u bilan sinfni o'zgartirmasdan test dublini yoki vaqtinchalik metodni yasash mumkin."
      },
      {
        type: "code",
        title: "define_singleton.rb",
        code: r`class Hisob
end

h = Hisob.new
h.define_singleton_method(:salom) { |ism| "Salom, #{ism}" }
puts h.salom("Bek")
puts h.singleton_methods.inspect
puts h.respond_to?(:salom)`,
        output: `Salom, Bek
[:salom]
true`
      },
      {
        type: "note",
        variant: "tip",
        title: "define_method yoki method_missing?",
        html: "Metodlar to'plami oldindan ma'lum bo'lsa, <code>define_method</code> afzal: <code>respond_to?</code> avtomatik ishlaydi, xatolar tushunarli bo'ladi va chaqiruv tezroq. <code>method_missing</code> esa nomlar cheksiz yoki butunlay dinamik bo'lganda kerak. Ikkalasini bir darsda aralashtirmang — kodni o'qish qiyinlashadi."
      }
    ],
    quiz: [
      {
        q: "define_method birinchi argument sifatida nimani qabul qiladi?",
        options: [
          "Metod nomini (String yoki Symbol)",
          "Faqat argumentlar sonini",
          "Klasning nomini",
          "Blokning natijasini"
        ],
        answer: 0,
        explain: "define_method metod nomini String yoki Symbol ko'rinishida oladi, keyin blok yoki Proc keladi."
      },
      {
        q: "define_method ga berilgan blok tashqi lokal o'zgaruvchini ko'radimi?",
        options: [
          "Yo'q, faqat instans o'zgaruvchilarni",
          "Ha, chunki blok closure hisoblanadi",
          "Faqat klass o'zgaruvchilarni",
          "Faqat global o'zgaruvchilarni"
        ],
        answer: 1,
        explain: "Blok yaratilgan muhitni eslab qoladi, shuning uchun define_method bilan yasalgan metod closure bo'ladi."
      },
      {
        q: "define_singleton_method nimani o'zgartiradi?",
        options: [
          "Butun klassning metodlar jadvalini",
          "Modulning ancestors zanjirini",
          "Faqat bitta obyektning singleton klassini",
          "Object klassining private metodlarini"
        ],
        answer: 2,
        explain: "define_singleton_method metodni faqat chaqirilgan obyektning singleton klassiga qo'shadi."
      }
    ]
  },
  {
    id: 52,
    title: "method_missing bilan ghost metodlar",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Ruby metod topilmasa, <code>method_missing</code> ga murojaat qiladi. Uni qayta belgilash orqali mavjud bo'lmagan metodlarga mazmunli javob qaytarish mumkin: sozlamalar hash'i, proksi obyekt yoki dekorator. Bu kuchli vosita, lekin xatolarni yashirish xavfi bor. Shuning uchun <code>super</code> chaqiruvi va <code>respond_to_missing?</code> majburiy odat bo'lishi kerak."
      },
      {
        type: "code",
        title: "sozlama_proxy.rb",
        code: r`class Sozlama
  def initialize(qiymatlar)
    @qiymatlar = qiymatlar
  end

  def method_missing(nom, *args)
    if @qiymatlar.key?(nom)
      @qiymatlar[nom]
    else
      super
    end
  end

  def respond_to_missing?(nom, include_private = false)
    @qiymatlar.key?(nom) || super
  end
end

s = Sozlama.new(host: "localhost", port: 3000)
puts s.host
puts s.port
puts s.respond_to?(:host)
begin
  s.yoq
rescue NoMethodError
  puts "noma'lum sozlama"
end`,
        output: `localhost
3000
true
noma'lum sozlama`
      },
      {
        type: "p",
        html: "Noma'lum nom uchun <code>super</code> chaqirilmasa, <code>NoMethodError</code> yo'qoladi va nosozlikni topish qiyinlashadi. <code>respond_to_missing?</code> esa <code>respond_to?</code> ni hamda <code>method</code> metodini dinamik metodlardan xabardor qiladi. Bu ikki metod birgalikda ishlatilganda proksi obyekt kutubxonalar bilan yaxshi moslashadi."
      },
      {
        type: "code",
        title: "delegator.rb",
        code: r`class Taqdimot
  def initialize(obyekt)
    @obyekt = obyekt
  end

  def method_missing(nom, *args, &blok)
    if @obyekt.respond_to?(nom)
      @obyekt.public_send(nom, *args, &blok)
    else
      super
    end
  end

  def respond_to_missing?(nom, include_private = false)
    @obyekt.respond_to?(nom, include_private) || super
  end
end

taqdimot = Taqdimot.new("ruby")
puts taqdimot.upcase
puts taqdimot.length
puts taqdimot.respond_to?(:reverse)`,
        output: `RUBY
4
true`
      },
      {
        type: "table",
        head: ["Vaziyat", "Tavsiya"],
        rows: [
          ["Metodlar oldindan ma'lum", "<code>define_method</code>"],
          ["Nomlar cheksiz dinamik", "<code>method_missing</code> + <code>respond_to_missing?</code>"],
          ["Obyektni o'rash", "<code>SimpleDelegator</code> yoki aniq delegatsiya"],
          ["Xatoni yashirmaslik", "Noma'lum holatda <code>super</code> chaqirish"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Proksi va xavfsizlik",
        html: "Proksida <code>send</code> o'rniga <code>public_send</code> ishlatilsa, private metodlar tashqaridan chaqirilmaydi. Foydalanuvchi kiritgan metod nomini to'g'ridan-to'g'ri <code>method_missing</code> orqali bajarish esa kutilmagan metodlarni ochib berishi mumkin. Har doim ruxsat etilgan nomlar ro'yxatini tekshiring."
      }
    ],
    quiz: [
      {
        q: "method_missing ichida noma'lum metod uchun super chaqirilmasa nima yuz beradi?",
        options: [
          "NoMethodError o'rniga nil qaytadi",
          "NoMethodError baribir ko'tariladi",
          "Dastur avtomatik qayta ishga tushadi",
          "Metod avtomatik define qilinadi"
        ],
        answer: 1,
        explain: "super chaqirilmasa, Ruby'ning standart NoMethodError xabari yo'qoladi va xato jimgina yutilishi mumkin."
      },
      {
        q: "respond_to_missing? nima uchun kerak?",
        options: [
          "Metodning argumentlar sonini tekshirish uchun",
          "respond_to? dinamik metodlarni ko'rishi uchun",
          "method_missing ni avtomatik chaqirish uchun",
          "Private metodlarni ochish uchun"
        ],
        answer: 1,
        explain: "respond_to_missing? respond_to? va method kabi tekshiruvlarga dinamik metodlar mavjudligini bildiradi."
      },
      {
        q: "Proksi obyekt ichida delegatsiyada qaysi chaqiruv xavfsizroq?",
        options: [
          "send",
          "__send__",
          "public_send",
          "instance_eval"
        ],
        answer: 2,
        explain: "public_send faqat public metodlarni chaqiradi, shuning uchun private metodlar tasodifan ochilmaydi."
      }
    ]
  },
  {
    id: 53,
    title: "Hook'lar: included, inherited va method_added",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Hook — Ruby'ning ma'lum hodisada avtomatik chaqiradigan metodi. <code>included</code>, <code>extended</code>, <code>prepended</code>, <code>inherited</code> va <code>method_added</code> shular jumlasidandir. Kutubxonalar shu nuqtalarda ro'yxatga olish, klass metodlarini qo'shish yoki validatsiya o'rnatish kabi ishlarni bajaradi. Hook'ni to'g'ri yozish uchun avval <code>super</code> chaqirish va cheksiz rekursiyadan himoyalanish muhim."
      },
      {
        type: "code",
        title: "plagin_hook.rb",
        code: r`module Plagin
  def self.included(base)
    (@royxat ||= []) << base
    base.extend(ClassMethods)
  end

  module ClassMethods
    def plagin?
      true
    end
  end
end

class A
  include Plagin
end

class B
  include Plagin
end

puts A.plagin?
puts Plagin.instance_variable_get(:@royxat).map(&:name).inspect`,
        output: `true
["A", "B"]`
      },
      {
        type: "p",
        html: "Modulning <code>self.included(base)</code> metodi <code>include</code> bajarilganda chaqiriladi. Bu yerda <code>base.extend(ClassMethods)</code> orqali klass metodlari qo'shiladi — Rails'dagi <code>ActiveSupport::Concern</code> aynan shu naqshni avtomatlashtiradi. Ro'yxat modulning instans o'zgaruvchisida saqlanadi, chunki modul ham obyekt."
      },
      {
        type: "code",
        title: "meros_hook.rb",
        code: r`class Baza
  def self.inherited(bola)
    super
    (@bolalar ||= []) << bola.name
  end

  def self.bolalar
    @bolalar || []
  end
end

class Kitob < Baza
end

class Jurnal < Baza
end

puts Baza.bolalar.inspect
puts Jurnal.superclass`,
        output: `["Kitob", "Jurnal"]
Baza`
      },
      {
        type: "code",
        title: "method_added.rb",
        code: r`class Kuzatuvchi
  def self.method_added(nom)
    return if @band

    @band = true
    define_method("#{nom}_xavfsiz") { send(nom) }
    @band = false
  end

  def salom
    "salom"
  end
end

puts Kuzatuvchi.new.salom_xavfsiz`,
        output: `salom`
      },
      {
        type: "p",
        html: "<code>method_added</code> yangi instans metodi qo'shilganda chaqiriladi. Uning ichida yana <code>define_method</code> ishlatilsa, hook qayta chaqirilib, cheksiz rekursiya boshlanishi mumkin. <code>@band</code> bayrog'i shu holatni to'xtatadi. Hook ichida og'ir ish qilish esa klass yuklanishini sekinlashtiradi."
      },
      {
        type: "note",
        variant: "tip",
        title: "Hook'larni qayerda ishlatish kerak",
        html: "Plagin ro'yxati, klass metodlarini avtomatik qo'shish, test konteksti va schema validatsiyasi uchun hook mos. Biznes-mantiqni hook ichiga joylashtirmang: u kutilmaganda bir necha marta ishlashi va debug qilishni qiyinlashtirishi mumkin."
      }
    ],
    quiz: [
      {
        q: "Modul include qilinganda qaysi hook chaqiriladi?",
        options: [
          "extended",
          "prepended",
          "included",
          "inherited"
        ],
        answer: 2,
        explain: "include bajarilganda modulning self.included(base) metodi chaqiriladi."
      },
      {
        q: "inherited hook qachon ishga tushadi?",
        options: [
          "Klassga metod qo'shilganda",
          "Yangi podklass yaratilganda",
          "Modul extend qilinganda",
          "Obyekt freeze qilinganda"
        ],
        answer: 1,
        explain: "inherited superklassda chaqiriladi va yangi yaratilgan podklassni argument sifatida oladi."
      },
      {
        q: "method_added hook ichida define_method ishlatilsa nima xavf bor?",
        options: [
          "Metod umuman qo'shilmaydi",
          "Hook cheksiz rekursiyaga tushishi mumkin",
          "Ruby versiyasi o'zgaradi",
          "Faqat private metod yaratiladi"
        ],
        answer: 1,
        explain: "Yangi metod qo'shilishi method_added ni yana chaqiradi; bayroq yoki shart bilan rekursiyani to'xtatish kerak."
      }
    ]
  },
  {
    id: 54,
    title: "const_get, ObjectSpace va TracePoint",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Runtime'da konstantani nomi bo'yicha topish, o'zgartirish yoki obyektlar olamini kuzatish mumkin. <code>const_get</code> va <code>const_set</code> plagin tizimlari va konfiguratsiya uchun, <code>ObjectSpace</code> xotira tahlili uchun, <code>TracePoint</code> esa kod bajarilishini kuzatish uchun ishlatiladi. Bu vositalar kuchli, ammo production kodda ehtiyotkorlik talab qiladi."
      },
      {
        type: "code",
        title: "konstanta.rb",
        code: r`module Sozlama
  PORT = 3000
  HOST = "localhost"
end

puts Sozlama.const_get(:PORT)
puts Sozlama.const_defined?(:HOST)
Sozlama.const_set(:MODE, "test")
puts Sozlama::MODE
Sozlama.send(:remove_const, :MODE)
puts Sozlama.const_defined?(:MODE)
puts Sozlama.constants.sort.inspect`,
        output: `3000
true
test
false
[:HOST, :PORT]`
      },
      {
        type: "p",
        html: "<code>const_get</code> nomni String yoki Symbol sifatida oladi; ichma-ich yo'l uchun <code>const_get(\"A::B\")</code> ham mumkin. <code>const_defined?</code> meros olingan konstantalarni ham hisobga oladi, agar ikkinchi argument <code>false</code> berilmasa. <code>remove_const</code> private metod bo'lgani uchun <code>send</code> orqali chaqiriladi — bu yerda <code>send</code> o'rinli, chunki nom kod ichida belgilangan."
      },
      {
        type: "code",
        title: "tracepoint.rb",
        code: r`class Hisob
  def qosh(a, b)
    a + b
  end

  def ayir(a, b)
    a - b
  end
end

tp = TracePoint.new(:call) do |nuqta|
  next unless nuqta.defined_class == Hisob

  puts "chaqirildi: #{nuqta.method_id}"
end

tp.enable do
  h = Hisob.new
  h.qosh(2, 3)
  h.ayir(9, 4)
end`,
        output: `chaqirildi: qosh
chaqirildi: ayir`
      },
      {
        type: "p",
        html: "<code>TracePoint</code> <code>:line</code>, <code>:call</code>, <code>:return</code>, <code>:raise</code> kabi hodisalarni kuzatadi. Uning ichida og'ir hisob-kitob qilinsa, dastur sezilarli sekinlashadi. Shuning uchun trace faqat debug yoki profiler sessiyasida yoqiladi va <code>tp.disable</code> bilan o'chiriladi. <code>defined_class</code> tekshiruvi shovqinni kamaytiradi."
      },
      {
        type: "code",
        title: "objectspace.rb",
        code: r`class DemoAlfa
end

class DemoBeta
end

sinflar = ObjectSpace.each_object(Class)
  .select { |klass| klass.name&.start_with?("Demo") }
  .map(&:name)
  .sort

puts sinflar.inspect`,
        output: `["DemoAlfa", "DemoBeta"]`
      },
      {
        type: "note",
        variant: "warning",
        title: "ObjectSpace va production",
        html: "<code>ObjectSpace.each_object</code> butun jarayondagi obyektlarni aylanadi va katta ilovada sekin ishlaydi. Xotira sizib chiqishini tekshirish uchun <code>ObjectSpace.memsize_of</code>, <code>GC.stat</code> yoki maxsus profiler afzal. Doimiy monitoringda bu chaqiruvlarni o'chirib qo'ying."
      }
    ],
    quiz: [
      {
        q: "Sozlama konstanta PORT ni nomi bo'yicha olish uchun qaysi chaqiruv ishlatiladi?",
        options: [
          "Sozlama::const_get(:PORT)",
          "Sozlama.const_get(:PORT)",
          "Sozlama.get_const(:PORT)",
          "const(:PORT, Sozlama)"
        ],
        answer: 1,
        explain: "Module#const_get metodi modul obyektida chaqiriladi va konstanta nomini qabul qiladi."
      },
      {
        q: "TracePoint.new(:call) qaysi hodisani kuzatadi?",
        options: [
          "Metod chaqirilishini",
          "Faqat xato ko'tarilishini",
          "Yangi qator bajarilishini",
          "Fayl yopilishini"
        ],
        answer: 0,
        explain: ":call hodisasi metod chaqirilganda ishga tushadi; :line esa har bir bajarilgan qator uchun."
      },
      {
        q: "ObjectSpace.each_object(Class) nimani qaytaradi?",
        options: [
          "Faqat yuklangan fayllar ro'yxatini",
          "Jarayondagi Class obyektlarini",
          "Barcha metod nomlarini",
          "Faqat garbage collector statistikasini"
        ],
        answer: 1,
        explain: "each_object(Class) jarayonda mavjud bo'lgan klass obyektlarini birma-bir beradi."
      }
    ]
  }
];
