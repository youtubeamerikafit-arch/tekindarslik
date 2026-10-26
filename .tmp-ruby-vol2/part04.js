const r = String.raw;

module.exports = [
  {
    id: 65,
    title: "Fiber: kooperativ concurrency",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Fiber — bitta thread ichida ishlaydigan yengil bajarilish oqimi. Thread kabi parallel emas: Fiber faqat <code>resume</code> chaqirilganda ishlaydi va <code>Fiber.yield</code> da boshqaruvni qaytaradi. Bu kooperativ model generator, cheksiz ketma-ketlik va IO scheduler uchun ideal. Fiber almashinuvi thread almashinuvidan ancha arzon."
      },
      {
        type: "code",
        title: "fiber_asos.rb",
        code: r`f = Fiber.new do |boshlangich|
  ikkinchi = Fiber.yield(boshlangich * 2)
  ikkinchi + 1
end

puts f.resume(5)
puts f.resume(10)
puts f.alive?`,
        output: `10
11
false`
      },
      {
        type: "p",
        html: "<code>Fiber.new</code> blokni darhol bajarmaydi; u birinchi <code>resume</code> da boshlanadi. <code>Fiber.yield</code> qiymatni chaqiruvchiga qaytaradi va Fiber'ni to'xtatadi. Keyingi <code>resume</code> argumenti <code>yield</code> ning natijasi bo'ladi. Blok tugagach Fiber o'ladi va <code>alive?</code> <code>false</code> qaytaradi; o'lgan Fiber'ni qayta resume qilish <code>FiberError</code> beradi."
      },
      {
        type: "code",
        title: "fiber_generator.rb",
        code: r`def sonlar
  Fiber.new do
    1.upto(3) { |son| Fiber.yield(son) }
    :tugadi
  end
end

f = sonlar

loop do
  qiymat = f.resume
  break if qiymat == :tugadi

  puts qiymat
end`,
        output: `1
2
3`
      },
      {
        type: "p",
        html: "Fiber generator sifatida ishlatilganda har bir <code>yield</code> keyingi qiymatni beradi va holat saqlanadi. Bu <code>Enumerator</code> ning ichki mexanizmlaridan biri. Fiber ichida <code>Fiber.yield</code> dan tashqari <code>Fiber#transfer</code> ham bor, lekin u murakkabroq va kamdan-kam kerak. Amaliy kodda <code>Enumerator</code> yoki <code>Enumerator::Lazy</code> ko'pincha qulayroq."
      },
      {
        type: "code",
        title: "fiber_xato.rb",
        code: r`f = Fiber.new do
  Fiber.yield :birinchi
  :ikkinchi
end

puts f.resume
puts f.resume

begin
  f.resume
rescue FiberError => e
  puts e.class
end`,
        output: `birinchi
ikkinchi
FiberError`
      },
      {
        type: "table",
        head: ["Tushuncha", "Thread", "Fiber"],
        rows: [
          ["Boshqaruv", "OS / scheduler", "Kod o'zi yield qiladi"],
          ["Xotira", "Alohida stack", "Yengil stack"],
          ["Parallelizm", "Ha (GVL cheklovi bilan)", "Yo'q, bitta thread"],
          ["Almashinuv narxi", "Nisbatan qimmat", "Arzon"]
        ]
      },
      {
        type: "note",
        variant: "info",
        title: "Fiber scheduler",
        html: "Ruby 3 dagi <code>Fiber.set_scheduler</code> IO kutishlarini Fiber bilan boshqarish imkonini beradi. <code>async</code> gem shu mexanizmdan foydalanadi. Scheduler yoqilganda <code>sleep</code> va socket o'qish boshqa Fiber'larga boshqaruv beradi, lekin CPU-bound kod baribir thread talab qiladi."
      }
    ],
    quiz: [
      {
        q: "Fiber#resume birinchi marta chaqirilganda nima bo'ladi?",
        options: [
          "Fiber bloki bajarilishni boshlaydi",
          "Fiber darhol o'ladi",
          "Yangi thread ochiladi",
          "Blok ikki marta bajariladi"
        ],
        answer: 0,
        explain: "Fiber.new faqat obyekt yaratadi; blok birinchi resume chaqiruvida ishga tushadi."
      },
      {
        q: "Fiber.yield nima qiladi?",
        options: [
          "Fiberni butunlay o'chiradi",
          "Qiymat qaytarib, boshqaruvni chaqiruvchiga beradi",
          "Yangi Fiber yaratadi",
          "Threadni bloklaydi"
        ],
        answer: 1,
        explain: "Fiber.yield joriy Fiberni to'xtatadi va qiymatni resume chaqiruvchisiga qaytaradi."
      },
      {
        q: "O'lgan Fiber'ni qayta resume qilish qanday natija beradi?",
        options: [
          "Fiber qaytadan boshlanadi",
          "nil qaytaradi",
          "FiberError ko'tariladi",
          "Thread o'chadi"
        ],
        answer: 2,
        explain: "Tugagan Fiber'ni qayta resume qilish mumkin emas; Ruby FiberError ko'taradi."
      }
    ]
  },
  {
    id: 66,
    title: "Enumerator::Lazy va cheksiz oqimlar",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Oddiy <code>map</code> va <code>select</code> butun kolleksiyani qayta ishlaydi. <code>lazy</code> esa har bir elementni faqat kerak bo'lganda hisoblaydi. Bu cheksiz ketma-ketliklar, katta fayllar va qimmat transformatsiyalarda xotira hamda vaqtni tejaydi. Natija <code>Enumerator::Lazy</code> obyekti bo'lib, uni <code>first</code>, <code>take</code> yoki <code>force</code> bilan moddiylashtirish mumkin."
      },
      {
        type: "code",
        title: "fib_lazy.rb",
        code: r`fib = Enumerator.new do |yielder|
  a, b = 0, 1
  loop do
    yielder << a
    a, b = b, a + b
  end
end

puts fib.lazy.select(&:even?).first(5).inspect
puts fib.lazy.map { |son| son * 2 }.take(4).force.inspect`,
        output: `[0, 2, 8, 34, 144]
[0, 2, 4, 6]`
      },
      {
        type: "p",
        html: "<code>Enumerator.new</code> blokiga <code>yielder</code> beriladi; <code>&lt;&lt;</code> qiymat chiqaradi. Blokda <code>loop</code> bo'lsa ham, <code>lazy</code> va <code>first</code> faqat kerakli miqdorda element oladi va to'xtaydi. <code>first(5)</code> beshta juft Fibonachchi sonini topadi; <code>take(4).force</code> esa to'rtta natijani massivga aylantiradi. <code>force</code> bo'lmasa natija yana lazy bo'lib qoladi."
      },
      {
        type: "code",
        title: "cheksiz_range.rb",
        code: r`sonlar = (1..).lazy

natija = sonlar
  .map { |son| son * son }
  .select(&:odd?)
  .first(4)

puts natija.inspect`,
        output: `[1, 9, 25, 49]`
      },
      {
        type: "p",
        html: "Ruby 2.6 dan boshlab <code>(1..)</code> cheksiz range yozish mumkin. <code>lazy</code> bo'lmasa <code>map</code> cheksiz aylanadi. <code>select(&:odd?)</code> bilan faqat toq kvadratlar olinadi, <code>first(4)</code> esa to'rtinchisida to'xtaydi. Lazy zanjirda har bir element butun pipeline'dan o'tadi — bu \"vertical\" bajarilish deyiladi va xotira sarfini keskin kamaytiradi."
      },
      {
        type: "code",
        title: "enumerator_next.rb",
        code: r`e = [10, 20].each

puts e.next
puts e.next

begin
  e.next
rescue StopIteration
  puts "tugadi"
end`,
        output: `10
20
tugadi`
      },
      {
        type: "table",
        head: ["Metod", "Natija"],
        rows: [
          ["<code>lazy</code>", "Lazy enumerator"],
          ["<code>first(n)</code>", "Birinchi n ta element"],
          ["<code>take(n)</code>", "Lazy yoki massiv (kontekstga qarab)"],
          ["<code>force</code>", "Barcha elementlarni massivga yig'adi"],
          ["<code>eager</code>", "Yana oddiy enumerator"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Lazy har doim tez degani emas",
        html: "Kichik massivlarda lazy qo'shimcha obyekt va blok chaqiruvlari hisobiga sekinroq bo'lishi mumkin. Lazy faqat katta yoki cheksiz oqimda, shuningdek qimmat hisob-kitobni kechiktirish kerak bo'lganda foyda beradi. Yon ta'sirli bloklar lazy zanjirda kutilmagan tartibda ishlashini ham unutmang."
      }
    ],
    quiz: [
      {
        q: "Enumerator::Lazy ning asosiy xususiyati nima?",
        options: [
          "Elementlarni faqat kerak bo'lganda hisoblaydi",
          "Barcha elementlarni darhol massivga yig'adi",
          "Faqat sonlar bilan ishlaydi",
          "Thread ochadi"
        ],
        answer: 0,
        explain: "Lazy zanjir elementlarni talab bo'yicha, birma-bir qayta ishlaydi."
      },
      {
        q: "Lazy natijani massivga aylantirish uchun qaysi metod ishlatiladi?",
        options: [
          "run",
          "force",
          "execute",
          "collect_now"
        ],
        answer: 1,
        explain: "force lazy zanjirni bajarib, natijalarni massiv sifatida qaytaradi."
      },
      {
        q: "(1..).lazy bo'lmasa (1..).map cheksiz aylanishi sababi nima?",
        options: [
          "Range cheksiz, map hamma elementni talab qiladi",
          "map har doim xato beradi",
          "Ruby range'ni qo'llab-quvvatlamaydi",
          "map faqat 10 tagacha ishlaydi"
        ],
        answer: 0,
        explain: "Oddiy map butun cheksiz range'ni qayta ishlashga urinadi; lazy esa talab bilan cheklanadi."
      }
    ]
  },
  {
    id: 67,
    title: "Ractor: xavfsiz parallelizm",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Ractor — Ruby 3 dagi parallel bajarilish modeli. Har bir Ractor o'z xotirasiga ega va boshqa Ractor xotirasini to'g'ridan-to'g'ri o'zgartira olmaydi. Ma'lumot almashish faqat xabar yuborish orqali bo'ladi, uzatiladigan obyektlar esa <strong>shareable</strong> yoki nusxa bo'lishi kerak. Shu tufayli data race yo'q, lekin model hali experimental va API o'zgarishi mumkin."
      },
      {
        type: "code",
        title: "ractor_asos.rb",
        code: r`r = Ractor.new(5) do |son|
  son * 2
end

puts r.take`,
        output: `10`
      },
      {
        type: "p",
        html: "<code>Ractor.new</code> bloki alohida Ractor'da bajariladi. <code>take</code> natijani oladi va Ractor tugashini kutadi. Ractor ichidan tashqi lokal o'zgaruvchilarni ko'rish mumkin emas; argument sifatida faqat shareable obyekt uzatiladi. Integer, Symbol, <code>nil</code>, <code>true</code> va chuqur muzlatilgan obyektlar shareable hisoblanadi."
      },
      {
        type: "code",
        title: "shareable_argument.rb",
        code: r`matn = "salom".freeze

r = Ractor.new(matn) do |xabar|
  "#{xabar}!"
end

puts r.take
puts Ractor.shareable?(matn)`,
        output: `salom!
true`
      },
      {
        type: "p",
        html: "Muzlatilmagan string yoki ichida o'zgaruvchan obyekt bo'lgan hash Ractor'ga argument bo'la olmaydi. Bunday holatda <code>Ractor.make_shareable</code> bilan chuqur muzlatish yoki <code>send</code> orqali nusxa uzatish kerak. Ractor'lar haqiqiy parallel ishlaydi, chunki GVL ular orasida bo'linmaydi — CPU-bound hisob-kitoblar uchun mos."
      },
      {
        type: "code",
        title: "izolyatsiya.rb",
        code: r`konfig = { rejim: "tez" }.freeze

begin
  Ractor.new(konfig) { |qiymat| qiymat[:rejim] }
rescue Ractor::IsolationError
  puts "izolyatsiya xatosi"
end`,
        output: `izolyatsiya xatosi`
      },
      {
        type: "table",
        head: ["Amal", "Vazifasi"],
        rows: [
          ["<code>Ractor.new</code>", "Yangi parallel oqim"],
          ["<code>take</code>", "Natijani olish"],
          ["<code>send</code>", "Xabar yuborish"],
          ["<code>Ractor.receive</code>", "Xabarni qabul qilish"],
          ["<code>make_shareable</code>", "Chuqur muzlatib shareable qilish"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Experimental va ehtiyotkorlik",
        html: "Ractor hali experimental: Ruby versiyalari orasida API o'zgarishi va cheklovlar bor. Kutubxonalar Ractor-safe bo'lmasligi mumkin. Uni avval alohida hisob-kitob modulida sinab ko'ring, global mutable holatdan voz keching va xatolarni diqqat bilan kuzating. Oddiy IO parallelizmi uchun thread ko'pincha yetarli."
      }
    ],
    quiz: [
      {
        q: "Ractor'lar orasida ma'lumot qanday almashinadi?",
        options: [
          "Umumiy global o'zgaruvchi orqali",
          "Xabar yuborish va olish orqali",
          "Fayl tizimi orqali",
          "Faqat instans o'zgaruvchilar orqali"
        ],
        answer: 1,
        explain: "Ractor xotirasi izolyatsiyalangan; ma'lumot send/receive yoki take/yield bilan uzatiladi."
      },
      {
        q: "Ractor.new ga argument bo'lishi uchun obyekt qanday bo'lishi kerak?",
        options: [
          "Shareable yoki nusxalanadigan",
          "Faqat Hash",
          "Faqat global o'zgaruvchi",
          "Muzlatilmagan string"
        ],
        answer: 0,
        explain: "Ractor chegarasidan o'tadigan obyekt shareable bo'lishi yoki nusxa sifatida uzatilishi kerak."
      },
      {
        q: "Ractor CPU-bound ishlarda threaddan qanday afzallikka ega?",
        options: [
          "GVL ni chetlab o'tib, haqiqiy parallel ishlaydi",
          "Ko'proq xotira ishlatadi",
          "Har doim sekinroq",
          "Faqat IO bilan ishlaydi"
        ],
        answer: 0,
        explain: "Ractor'lar alohida GVL ga ega bo'lib, bir necha yadroda parallel hisoblash imkonini beradi."
      }
    ]
  },
  {
    id: 68,
    title: "Ractor pipeline va shareable konfiguratsiya",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Ractor'lar orasida pipeline qurish mumkin: bir Ractor xabar qabul qiladi, qayta ishlaydi va natijani keyingisiga uzatadi. Bu model ma'lumotni bosqichma-bosqich qayta ishlashda, masalan, log tahlili yoki rasm konvertatsiyasida qulay. Har bir bosqich alohida Ractor bo'lsa, CPU yadrolari samarali ishlatiladi."
      },
      {
        type: "code",
        title: "kvadrat_pipeline.rb",
        code: r`kvadrat = Ractor.new do
  loop do
    son = Ractor.receive
    Ractor.yield(son * son)
  end
end

[2, 3, 4].each { |son| kvadrat.send(son) }
puts 3.times.map { kvadrat.take }.inspect`,
        output: `[4, 9, 16]`
      },
      {
        type: "p",
        html: "<code>Ractor.receive</code> kiruvchi portdan xabar oladi, <code>Ractor.yield</code> esa chiquvchi portga qiymat beradi. <code>send</code> va <code>take</code> tartibi bu yerda qat'iy: har bir yuborilgandan keyin bitta natija olinadi. Agar bir nechta ishchi bo'lsa, natijalar tartibi kafolatlanmaydi; shuning uchun har bir xabarga ID qo'shib, keyin saralash kerak."
      },
      {
        type: "code",
        title: "shareable_konfig.rb",
        code: r`konfig = Ractor.make_shareable({ rejim: "tez", limit: 5 })

r = Ractor.new(konfig) do |sozlama|
  "#{sozlama[:rejim]}:#{sozlama[:limit]}"
end

puts r.take
puts Ractor.shareable?(konfig)`,
        output: `tez:5
true`
      },
      {
        type: "p",
        html: "<code>Ractor.make_shareable</code> obyektni chuqur muzlatadi va ichki string'larni ham shareable qiladi. Bu konfiguratsiyani bir marta tayyorlab, ko'plab Ractor'larga uzatishning eng toza usuli. Keyinchalik konfiguratsiyani o'zgartirish kerak bo'lsa, yangi nusxa yasab, yangi Ractor'larga bering — mavjudlarini majburan o'zgartirmang."
      },
      {
        type: "table",
        head: ["Metod", "Yo'nalish"],
        rows: [
          ["<code>send</code>", "Boshqa Ractor kiruvchi portiga"],
          ["<code>receive</code>", "O'z kiruvchi portidan"],
          ["<code>yield</code>", "O'z chiquvchi portiga"],
          ["<code>take</code>", "Boshqa Ractor chiquvchi portidan"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Pipeline dizayni",
        html: "Har bir bosqichga aniq vazifa bering va xabar formatini oldindan kelishing. Xatolarni yutib yubormang: Ractor ichida istisno ko'tarilsa, u <code>take</code> paytida qayta ko'tariladi. Pipeline oxirida barcha Ractor'lar tugaganiga ishonch hosil qiling, aks holda jarayon osilib qolishi mumkin."
      }
    ],
    quiz: [
      {
        q: "Ractor ichida xabar qabul qilish uchun qaysi metod ishlatiladi?",
        options: [
          "Ractor.take",
          "Ractor.receive",
          "Ractor.yield",
          "Ractor.pop"
        ],
        answer: 1,
        explain: "Ractor.receive joriy Ractor'ning kiruvchi portidan xabar oladi."
      },
      {
        q: "Ractor.make_shareable nima qiladi?",
        options: [
          "Obyektni chuqur muzlatib shareable qiladi",
          "Obyektni nusxalab threadga beradi",
          "Yangi Ractor ochadi",
          "Xabarni navbatga qo'yadi"
        ],
        answer: 0,
        explain: "make_shareable obyekt va uning ichki qismlarini muzlatib, Ractorlar orasida xavfsiz uzatiladigan holatga keltiradi."
      },
      {
        q: "Bir nechta Ractor ishchi bo'lsa natijalar tartibi haqida nima aytish mumkin?",
        options: [
          "Har doim yuborilgan tartibda keladi",
          "Tartib kafolatlanmaydi",
          "Faqat teskari tartibda keladi",
          "Natijalar yo'qoladi"
        ],
        answer: 1,
        explain: "Ishchilar parallel bajarilgani uchun natija tartibi kafolatlanmaydi; ID bilan saralash kerak."
      }
    ]
  },
  {
    id: 69,
    title: "Parallel IO va thread pool",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Ko'p tarmoq so'rovlari yoki fayl o'qishlarini ketma-ket bajarish vaqtni behuda sarflaydi. Thread pool cheklangan miqdordagi thread bilan ishlar navbatini bajaradi: bir vaqtda juda ko'p ulanish ochilmaydi, resurslar barqaror qoladi. IO kutishida GVL boshqa thread'larga yo'l beradi, shuning uchun bu naqsh ayniqsa samarali."
      },
      {
        type: "code",
        title: "thread_pool.rb",
        code: r`navbat = Queue.new
(1..6).each { |son| navbat << son }
navbat.close

natijalar = Queue.new

ishchilar = 3.times.map do
  Thread.new do
    while (son = navbat.pop)
      sleep 0.01
      natijalar << son * son
    end
  end
end

ishchilar.each(&:join)
puts 6.times.map { natijalar.pop }.sort.inspect`,
        output: `[1, 4, 9, 16, 25, 36]`
      },
      {
        type: "p",
        html: "Bu yerda uchta ishchi bitta navbatdan vazifa oladi. Natijalar tugash tartibi boshqacha bo'lishi mumkin, shuning uchun oxirida <code>sort</code> qilinadi. <code>Queue#close</code> ishchilarga boshqa vazifa yo'qligini bildiradi. Amalda har bir ishchi uchun alohida DB ulanish yoki HTTP connection ishlatiladi — umumiy connection obyektini threadlar orasida bo'lishish xavfli."
      },
      {
        type: "code",
        title: "thread_value.rb",
        code: r`natijalar = [1, 2, 3].map do |son|
  Thread.new(son) { |qiymat| qiymat * 2 }
end.map(&:value)

puts natijalar.inspect`,
        output: `[2, 4, 6]`
      },
      {
        type: "p",
        html: "<code>Thread#value</code> har bir thread natijasini oladi va xatoni qayta ko'taradi. Bu qisqa parallel <code>map</code> uchun qulay, lekin threadlar soni ish soniga teng bo'ladi. Yuzlab so'rovda thread pool cheklovi kerak: aks holda file descriptor, xotira va tashqi API limitlari tugaydi. Concurrency sonini konfiguratsiya qilinadigan qiling."
      },
      {
        type: "table",
        head: ["Yondashuv", "Mos vazifa"],
        rows: [
          ["Thread pool", "Ko'p mustaqil IO so'rovlari"],
          ["Fiber scheduler", "Yengil IO concurrency"],
          ["Ractor", "CPU-bound parallel hisob"],
          ["Process", "Izolyatsiya va mustaqil xizmatlar"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Xatolarni yig'ish",
        html: "Thread ichidagi xato <code>join</code> yoki <code>value</code> chaqirilmaguncha bilinmasligi mumkin. Natijalar bilan birga xatolarni ham yig'ing, har bir ishni <code>begin/rescue</code> bilan o'rab, boshqa ishlar davom etishini ta'minlang. Timeout va retry siyosatini tashqi so'rovlar uchun oldindan belgilang."
      }
    ],
    quiz: [
      {
        q: "Thread pool ning asosiy maqsadi nima?",
        options: [
          "Bir vaqtda ishlaydigan threadlar sonini cheklash",
          "Har bir ish uchun yangi process ochish",
          "GVL ni butunlay o'chirish",
          "Faqat CPU hisobini tezlashtirish"
        ],
        answer: 0,
        explain: "Pool cheklangan thread bilan navbatni bajaradi va resurslar tugashini oldini oladi."
      },
      {
        q: "Ruby'da IO kutishida GVL qanday xatti-harakat qiladi?",
        options: [
          "Boshqa threadlarga boshqaruv beriladi",
          "Barcha threadlar to'xtaydi",
          "Yangi process ochiladi",
          "IO bloklanadi"
        ],
        answer: 0,
        explain: "IO kutishida GVL bo'shatiladi, shuning uchun boshqa threadlar ishlashi mumkin."
      },
      {
        q: "Thread#value xato ko'tarilgan thread uchun nima qiladi?",
        options: [
          "Xatoni yashiradi",
          "Xatoni qayta ko'taradi",
          "nil qaytaradi",
          "Threadni qayta ishga tushiradi"
        ],
        answer: 1,
        explain: "value thread ichidagi istisnoni chaqiruvchiga qayta ko'taradi."
      }
    ]
  }
];
