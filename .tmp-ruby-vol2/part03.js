const r = String.raw;

module.exports = [
  {
    id: 60,
    title: "Thread asoslari va hayotiy tsikl",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Thread — bitta jarayon ichida parallel bajariladigan oqim. Ruby'da thread'lar yengil, lekin ular bir xil xotirani bo'lishadi. MRI'dagi Global VM Lock (GVL) bir vaqtda faqat bitta thread'ning Ruby kodini bajarishiga ruxsat beradi; shunga qaramay IO kutish, <code>sleep</code> va tashqi kutubxona chaqiruvlarida thread'lar almashinadi. Shuning uchun thread'lar IO-bound ishlarda ayniqsa foydali."
      },
      {
        type: "code",
        title: "thread_asos.rb",
        code: r`t1 = Thread.new { 2 + 3 }
t2 = Thread.new do
  sleep 0.05
  7 * 6
end

puts t1.value
puts t2.value
puts t1.status`,
        output: `5
42
false`
      },
      {
        type: "p",
        html: "<code>Thread#value</code> thread tugashini kutadi va uning oxirgi ifoda natijasini qaytaradi. <code>Thread#join</code> ham kutadi, ammo natijani qaytarmaydi. Tugagan thread statusi <code>false</code> bo'ladi; tirik thread <code>\"run\"</code>, <code>\"sleep\"</code> yoki <code>\"aborted\"</code> kabi qiymat beradi. Thread ichida ko'tarilgan xato <code>join</code> yoki <code>value</code> paytida qayta ko'tariladi."
      },
      {
        type: "code",
        title: "natijalarni_yigish.rb",
        code: r`natijalar = []
mutex = Mutex.new

threads = 3.times.map do |indeks|
  Thread.new(indeks) do |raqam|
    qiymat = raqam * 10
    mutex.synchronize { natijalar << qiymat }
  end
end

threads.each(&:join)
puts natijalar.sort.inspect
puts Thread.main == Thread.current`,
        output: `[0, 10, 20]
true`
      },
      {
        type: "p",
        html: "Thread'lar umumiy massivga yozganda <code>Mutex</code> kerak, chunki <code>&lt;&lt;</code> atomar kafolatlanmagan. Bu misolda tartib muhim emas, shuning uchun oxirida <code>sort</code> qilinadi. <code>Thread.main</code> — asosiy oqim; <code>Thread.current</code> esa bajarilayotgan thread'ni qaytaradi. Har bir thread o'zining lokal xotirasiga ega."
      },
      {
        type: "code",
        title: "thread_local.rb",
        code: r`t = Thread.new do
  Thread.current[:rol] = "ishchi"
  puts Thread.current[:rol]
end

t.join
puts Thread.current[:rol].inspect`,
        output: `ishchi
nil`
      },
      {
        type: "table",
        head: ["Metod", "Vazifasi"],
        rows: [
          ["<code>Thread.new</code>", "Yangi oqim yaratadi"],
          ["<code>join</code>", "Tugashini kutadi"],
          ["<code>value</code>", "Kutadi va natijani qaytaradi"],
          ["<code>status</code>", "Hayotiy holatini ko'rsatadi"],
          ["<code>Thread.current[:kalit]</code>", "Thread-lokal qiymat"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "GVL panatseya emas",
        html: "GVL Ruby kodidagi data race'larni to'liq yo'q qilmaydi: thread almashinuvi har qanday bayt-kod chegarasida bo'lishi mumkin. Umumiy holatni o'zgartirishda <code>Mutex</code>, <code>Queue</code> yoki immutable ma'lumot ishlating. Thread ichidagi xatoni jimgina yutib yubormaslik uchun <code>report_on_exception</code> ni yoqing va <code>join</code> qiling."
      }
    ],
    quiz: [
      {
        q: "Thread#value qanday ishlaydi?",
        options: [
          "Threadni darhol o'ldiradi",
          "Tugashini kutib, oxirgi natijasini qaytaradi",
          "Faqat statusni qaytaradi",
          "Yangi thread ochadi"
        ],
        answer: 1,
        explain: "value thread tugashini kutadi va uning oxirgi ifoda qiymatini qaytaradi."
      },
      {
        q: "MRI'dagi GVL nimani anglatadi?",
        options: [
          "Bir vaqtda faqat bitta thread Ruby kodini bajaradi",
          "Barcha threadlar bir vaqtda mustaqil ishlaydi",
          "Threadlar umuman ishlamaydi",
          "Faqat IO threadlari ishlaydi"
        ],
        answer: 0,
        explain: "Global VM Lock Ruby bayt-kodini bir vaqtda bitta thread bilan cheklaydi, ammo IO kutishda almashinuv bo'ladi."
      },
      {
        q: "Thread.current[:rol] qanday ma'lumot saqlaydi?",
        options: [
          "Barcha threadlar uchun umumiy qiymat",
          "Faqat joriy threadga tegishli qiymat",
          "Global o'zgaruvchi",
          "Klass konstantasi"
        ],
        answer: 1,
        explain: "Thread#[] thread-lokal xotiraga yozadi; boshqa thread bu qiymatni ko'rmaydi."
      }
    ]
  },
  {
    id: 61,
    title: "Mutex va ConditionVariable",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Bir nechta thread umumiy hisoblagichni oshirsa, <code>+=</code> operatsiyasi o'qish va yozishdan iborat bo'lgani uchun natija yo'qolishi mumkin. <strong>Mutex</strong> kritik qismni bir vaqtda faqat bitta thread bajarishini kafolatlaydi. <strong>ConditionVariable</strong> esa thread'ni shart bajarilguncha kutish va boshqa thread tomonidan signal bilan uyg'otish imkonini beradi."
      },
      {
        type: "code",
        title: "mutex_counter.rb",
        code: r`hisoblagich = 0
mutex = Mutex.new

threads = 10.times.map do
  Thread.new do
    1000.times do
      mutex.synchronize { hisoblagich += 1 }
    end
  end
end

threads.each(&:join)
puts hisoblagich`,
        output: `10000`
      },
      {
        type: "p",
        html: "<code>mutex.synchronize</code> blokni qulflaydi va blok tugagach avtomatik ochadi — istisno ko'tarilganda ham. Qulfni qo'lda <code>lock</code>/<code>unlock</code> qilish xatoga moyil, chunki <code>unlock</code> tushib qolishi mumkin. Bir nechta mutex ishlatilsa, ularni har doim bir xil tartibda olish kerak; aks holda deadlock yuzaga keladi."
      },
      {
        type: "code",
        title: "condition_variable.rb",
        code: r`mutex = Mutex.new
shart = ConditionVariable.new
tayyor = false

iste = Thread.new do
  mutex.synchronize do
    shart.wait(mutex) until tayyor
    puts "iste'molchi ishga tushdi"
  end
end

sleep 0.05

mutex.synchronize do
  tayyor = true
  shart.signal
end

iste.join
puts "tugadi"`,
        output: `iste'molchi ishga tushdi
tugadi`
      },
      {
        type: "p",
        html: "<code>ConditionVariable#wait(mutex)</code> mutex'ni vaqtincha bo'shatadi va thread'ni uxlatadi. Boshqa thread <code>signal</code> yoki <code>broadcast</code> chaqirganda uyg'onadi. Uyg'onish shart bajarilganini anglatmaydi — shuning uchun <code>until</code> yoki <code>while</code> bilan qayta tekshirish shart. Bu naqsh \"shart o'zgardi\" degan xabarni yo'qotmaslik uchun qulf ichida tekshiriladi."
      },
      {
        type: "code",
        title: "owned.rb",
        code: r`mutex = Mutex.new
puts mutex.owned?

mutex.synchronize do
  puts mutex.owned?
end

puts mutex.owned?`,
        output: `false
true
false`
      },
      {
        type: "table",
        head: ["Vosita", "Qachon ishlatiladi"],
        rows: [
          ["<code>Mutex</code>", "Umumiy holatni atomar o'zgartirish"],
          ["<code>ConditionVariable</code>", "Shart bajarilishini kutish"],
          ["<code>Monitor</code>", "Qayta kirish mumkin bo'lgan qulf"],
          ["<code>Queue</code>", "Threadlar orasida xabar uzatish"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Qulfni qisqa ushlang",
        html: "Mutex ichida tarmoq so'rovi yoki og'ir hisob-kitob qilmang: boshqa threadlar behuda kutadi. Kritik qismni iloji boricha kichik saqlang. <code>Monitor</code> bir thread ichida qayta <code>synchronize</code> qilish kerak bo'lganda <code>Mutex</code> o'rniga ishlatiladi."
      }
    ],
    quiz: [
      {
        q: "Mutex#synchronize blokdagi istisno ko'tarilganda qulf nima bo'ladi?",
        options: [
          "Qulf abadiy yopiq qoladi",
          "Avtomatik ochiladi",
          "Thread o'chiriladi",
          "Mutex yangilanadi"
        ],
        answer: 1,
        explain: "synchronize istisno bo'lsa ham ensure orqali qulfni ochadi."
      },
      {
        q: "ConditionVariable#wait ni nima uchun until bilan o'rab tekshirish kerak?",
        options: [
          "Uyg'onish shart bajarilganini kafolatlamaydi",
          "wait faqat bir marta ishlaydi",
          "Mutex wait paytida yo'qoladi",
          "Ruby sintaksisi shuni talab qiladi"
        ],
        answer: 0,
        explain: "Spurious wakeup yoki boshqa threadning aralashuvi sabab shartni qayta tekshirish kerak."
      },
      {
        q: "Ikki mutexni turli tartibda olib qulflash qanday muammoga olib keladi?",
        options: [
          "Deadlock",
          "FrozenError",
          "Memory leak",
          "SyntaxError"
        ],
        answer: 0,
        explain: "Har bir thread ikkinchisining qulfini kutib qolsa, deadlock yuzaga keladi."
      }
    ]
  },
  {
    id: 62,
    title: "Queue va producer-consumer",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "<code>Thread::Queue</code> — threadlar orasida xavfsiz FIFO navbat. Producer ma'lumot qo'yadi, consumer oladi; navbat o'zi mutex va condition variable'ni ichida boshqaradi. <code>SizedQueue</code> esa cheklangan sig'imga ega: to'lib qolsa producer kutadi. Bu <strong>backpressure</strong> — sekin consumer tez producer'ni jilovlaydi va xotira portlashini oldini oladi."
      },
      {
        type: "code",
        title: "queue_asos.rb",
        code: r`navbat = Queue.new

ishlab_chiqaruvchi = Thread.new do
  3.times { |indeks| navbat << indeks }
  navbat.close
end

iste = Thread.new do
  navbat.each { |qiymat| puts "oldi: #{qiymat}" }
end

[ishlab_chiqaruvchi, iste].each(&:join)`,
        output: `oldi: 0
oldi: 1
oldi: 2`
      },
      {
        type: "p",
        html: "<code>Queue#pop</code> navbat bo'sh bo'lsa thread'ni uxlatadi. <code>close</code> chaqirilgach, mavjud elementlar olinadi, keyin <code>pop</code> yoki <code>each</code> <code>nil</code> qaytaradi. <code>Queue#each</code> navbat yopilguncha aylanadi. Bu xatti-harakat consumer'ga \"ish tugadi\" signalini berishning eng sodda usuli."
      },
      {
        type: "code",
        title: "sized_queue.rb",
        code: r`navbat = SizedQueue.new(2)

ishchi = Thread.new do
  5.times { puts "ishlandi: #{navbat.pop}" }
end

5.times { |indeks| navbat << indeks }
ishchi.join

puts navbat.closed?`,
        output: `ishlandi: 0
ishlandi: 1
ishlandi: 2
ishlandi: 3
ishlandi: 4
false`
      },
      {
        type: "p",
        html: "<code>SizedQueue.new(2)</code> sig'imi ikkitadan oshmaydi. Producer uchinchi elementni qo'shmoqchi bo'lsa, consumer bittasini olmaguncha kutadi. Bu ayniqsa fayl yuklash, log yozish va tashqi API'ga so'rov yuborishda muhim: navbat cheksiz o'smaydi. Consumer sonini esa CPU va IO imkoniyatiga qarab tanlang."
      },
      {
        type: "code",
        title: "yopilgan_queue.rb",
        code: r`navbat = Queue.new
navbat << 1
navbat.close

puts navbat.pop
puts navbat.pop.inspect
puts navbat.closed?`,
        output: `1
nil
true`
      },
      {
        type: "note",
        variant: "warning",
        title: "Sentinel va close",
        html: "Bir nechta consumer bo'lsa, har biriga alohida <code>nil</code> sentinel yuborish yoki <code>close</code> dan foydalanish mumkin. <code>close</code> barcha consumer'larga navbat tugaganini bildiradi; sentinel esa aniq ishchi soni ma'lum bo'lganda mos. Navbatga <code>nil</code> qo'shish bilan yopishni aralashtirmang — <code>pop</code> ikkalasini ham <code>nil</code> qaytaradi."
      }
    ],
    quiz: [
      {
        q: "Queue#close chaqirilgandan keyin bo'sh navbatdan pop nima qaytaradi?",
        options: [
          "Xato ko'taradi",
          "nil",
          "false",
          "Navbatni qayta ochadi"
        ],
        answer: 1,
        explain: "Yopilgan va bo'sh navbatdan pop nil qaytaradi; mavjud elementlar avval olinadi."
      },
      {
        q: "SizedQueue ning asosiy foydasi nima?",
        options: [
          "Producer va consumer o'rtasida backpressure yaratadi",
          "Har bir elementni siqadi",
          "Threadlarni avtomatik o'chiradi",
          "Faqat sonlarni qabul qiladi"
        ],
        answer: 0,
        explain: "Navbat to'lganda producer kutadi, shu bilan xotira va yuklama cheklanadi."
      },
      {
        q: "Bo'sh Queue#pop qanday ishlaydi?",
        options: [
          "Darhol nil qaytaradi",
          "Element kelguncha threadni uxlatadi",
          "Xato ko'taradi",
          "Navbatni yopadi"
        ],
        answer: 1,
        explain: "pop bo'sh navbatda bloklanadi va element qo'shilganda yoki navbat yopilganda qaytadi."
      }
    ]
  },
  {
    id: 63,
    title: "Process: fork, spawn va Open3",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Thread bitta jarayon xotirasini bo'lishadi, process esa alohida xotira maydoniga ega. Process izolyatsiya beradi: biri yiqilsa, ikkinchisi ishlashda davom etadi. Ruby'da <code>fork</code> POSIX tizimlarida mavjud, <code>spawn</code> esa barcha platformalarda tashqi dasturni ishga tushirish uchun ishlatiladi. <code>Open3</code> esa stdin, stdout va stderr bilan qulay ishlash imkonini beradi."
      },
      {
        type: "code",
        title: "fork.rb",
        code: r`$stdout.sync = true

bola = fork do
  puts "bola ishladi"
end

Process.wait(bola)
puts "ota yakunladi"
puts $?.success?`,
        output: `bola ishladi
ota yakunladi
true`
      },
      {
        type: "p",
        html: "<code>fork</code> blok bilan chaqirilsa, blok bola jarayonda bajariladi va tugagach bola chiqadi. Ota jarayonda <code>fork</code> bola PID'sini qaytaradi, bolada esa <code>nil</code>. <code>Process.wait</code> bola tugashini kutadi va <code>$?</code> ga status yozadi. Bloksiz <code>fork</code> ikkala jarayonda ham davom etadi — bu holatda kodni aniq ajratish kerak."
      },
      {
        type: "code",
        title: "open3.rb",
        code: r`require "open3"

stdout, stderr, status = Open3.capture3("ruby", "-e", "puts 6 * 7")

puts stdout
puts stderr.empty?
puts status.exitstatus`,
        output: `42
true
0`
      },
      {
        type: "p",
        html: "<code>Open3.capture3</code> buyruqning stdout, stderr va statusini bir vaqtda qaytaradi. Argumentlarni alohida berish shell orqali interpretatsiyani chetlab o'tadi va inyeksiya xavfini kamaytiradi. Katta chiqishni oqim bilan qayta ishlash kerak bo'lsa, <code>Open3.popen3</code> yoki <code>Open3.pipeline</code> ishlatiladi."
      },
      {
        type: "code",
        title: "spawn.rb",
        code: r`pid = Process.spawn("ruby", "-e", "puts 'spawn ishladi'")
Process.wait(pid)

puts "exit: #{$?.exitstatus}"`,
        output: `spawn ishladi
exit: 0`
      },
      {
        type: "note",
        variant: "warning",
        title: "Platforma va zombie",
        html: "<code>fork</code> Windows'da mavjud emas — u yerda <code>spawn</code> yoki thread ishlating. Har bir tugagan bolani <code>wait</code> yoki <code>detach</code> qilmasangiz, zombie jarayon qolishi mumkin. Uzoq yashovchi serverda <code>SIGCHLD</code> bilan ishlash yoki <code>Process.detach</code> dan foydalaning."
      }
    ],
    quiz: [
      {
        q: "fork blokli chaqiruvda bola jarayonda qanday qiymat qaytadi?",
        options: [
          "Ota PID",
          "nil",
          "true",
          "Bola PID"
        ],
        answer: 1,
        explain: "Blokli forkda blok bola jarayonda bajariladi; ota jarayonda esa bola PID qaytariladi."
      },
      {
        q: "Process.wait(pid) nima qiladi?",
        options: [
          "Bolani darhol o'ldiradi",
          "Bola tugashini kutadi va statusni yozadi",
          "Yangi thread ochadi",
          "Faqat PID ni qaytaradi"
        ],
        answer: 1,
        explain: "wait bola jarayoni tugashini kutadi, keyin $? orqali statusni olish mumkin."
      },
      {
        q: "Open3.capture3 qanday natija qaytaradi?",
        options: [
          "Faqat stdout",
          "stdout, stderr va status",
          "Faqat exit code",
          "PID va thread",
        ],
        answer: 1,
        explain: "capture3 uchlik qaytaradi: stdout matni, stderr matni va Process::Status."
      }
    ]
  },
  {
    id: 64,
    title: "Signal, timeout va graceful shutdown",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Uzoq ishlaydigan jarayonni to'xtatish uchun signal yuboriladi. <code>INT</code> (Ctrl+C) va <code>TERM</code> eng ko'p ishlatiladigan signallar. <code>trap</code> ularni ushlab, resurslarni yopish va ishni xavfsiz yakunlash imkonini beradi. <code>Timeout.timeout</code> esa biron blok belgilangan vaqtdan oshsa <code>Timeout::Error</code> ko'taradi."
      },
      {
        type: "code",
        title: "timeout.rb",
        code: r`require "timeout"

begin
  Timeout.timeout(0.1) do
    sleep 1
  end
rescue Timeout::Error
  puts "vaqt tugadi"
end

puts "davom"`,
        output: `vaqt tugadi
davom`
      },
      {
        type: "p",
        html: "<code>Timeout.timeout</code> istalgan blokni vaqt bilan cheklaydi, lekin u thread'ni asinxron uzadi. Bu <code>ensure</code> bloklarini kutilmagan holatda ishga tushirishi va umumiy holatni buzishi mumkin. Tarmoq so'rovlarida <code>Net::HTTP</code> ning <code>open_timeout</code> va <code>read_timeout</code> kabi o'z timeoutlarini afzal ko'ring."
      },
      {
        type: "code",
        title: "ensure_cleanup.rb",
        code: r`t = Thread.new do
  begin
    puts "ish boshlandi"
    sleep 5
  ensure
    puts "resurs yopildi"
  end
end

sleep 0.05
t.kill
t.join

puts "tugadi"`,
        output: `ish boshlandi
resurs yopildi
tugadi`
      },
      {
        type: "p",
        html: "<code>Thread#kill</code> ham <code>ensure</code> bloklarini bajaradi. Shu sababli fayl, socket yoki tranzaksiyani yopishni <code>ensure</code> ga joylashtirish muhim. Signal ushlagichida esa faqat oddiy amallar bajaring: murakkab kod yoki boshqa thread bilan sinxronizatsiya signal kontekstida xavfli bo'lishi mumkin."
      },
      {
        type: "code",
        title: "signal_flag.rb",
        code: r`$stdout.sync = true
toxta = false

trap("TERM") do
  toxta = true
end

puts "ishlayapti"
Process.kill("TERM", Process.pid)

until toxta
  sleep 0.01
end

puts "TERM ushlandi"`,
        output: `ishlayapti
TERM ushlandi`
      },
      {
        type: "table",
        head: ["Signal", "Ma'nosi", "Odatdagi javob"],
        rows: [
          ["<code>INT</code>", "Ctrl+C", "Darhol to'xtatish"],
          ["<code>TERM</code>", "Yumshoq to'xtatish", "Resurslarni yopish"],
          ["<code>HUP</code>", "Konfiguratsiyani qayta yuklash", "Reload"],
          ["<code>KILL</code>", "Majburiy o'ldirish", "Ushlab bo'lmaydi"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Graceful shutdown tartibi",
        html: "Signal kelganda yangi ishlarni qabul qilishni to'xtating, joriy so'rovlarga tugash imkonini bering, navbatni yoping va resurslarni <code>ensure</code> bilan ozod qiling. <code>KILL</code> hech qanday cleanup bermaydi, shuning uchun uni faqat oxirgi chora sifatida ishlating."
      }
    ],
    quiz: [
      {
        q: "Timeout.timeout vaqt oshsa qanday xato ko'taradi?",
        options: [
          "Timeout::Error",
          "FrozenError",
          "Interrupt",
          "SystemExit"
        ],
        answer: 0,
        explain: "Timeout moduli belgilangan vaqt oshganda Timeout::Error ko'taradi."
      },
      {
        q: "Signal ushlagichida nima qilish tavsiya etiladi?",
        options: [
          "Og'ir hisob-kitob",
          "Faqat oddiy flag o'rnatish kabi yengil amal",
          "Yangi thread ochish",
          "Fayl o'chirish",
        ],
        answer: 1,
        explain: "Signal kontekstida murakkab amallar xavfli; odatda flag o'rnatib, asosiy oqimda ishlov beriladi."
      },
      {
        q: "Thread#kill bajarilganda ensure bloki ishlaydimi?",
        options: [
          "Yo'q, butunlay o'tkazib yuboriladi",
          "Ha, resurslarni yopish uchun ishlaydi",
          "Faqat Windows'da",
          "Faqat Timeout bilan"
        ],
        answer: 1,
        explain: "Thread#kill ensure bloklarini bajaradi, shuning uchun cleanup shu yerga yoziladi."
      }
    ]
  }
];
