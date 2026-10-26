const r = String.raw;

module.exports = [
  {
    id: 70,
    title: "IO chuqur: buffer, encoding va binary",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Ruby'da fayl va tarmoq oqimlari <code>IO</code> orqali boshqariladi. Matn rejimida encoding muhim, binary rejimda esa baytlar ustida ishlanadi. <code>File.binread</code>/<code>binwrite</code> hech qanday encoding konvertatsiyasisiz o'qiydi va yozadi. Bu rasm, PDF, protokol paketlari va siqilgan fayllar uchun to'g'ri yondashuv."
      },
      {
        type: "code",
        title: "binary.rb",
        code: r`File.binwrite("bayt.bin", [0, 1, 255].pack("C*"))

baytlar = File.binread("bayt.bin").bytes
puts baytlar.inspect
puts File.size("bayt.bin")
File.delete("bayt.bin")`,
        output: `[0, 1, 255]
3`
      },
      {
        type: "p",
        html: "<code>Array#pack(\"C*\")</code> sonlarni 8-bitli unsigned baytlarga aylantiradi. <code>bytes</code> esa teskari yo'nalishda har bir baytni ko'rsatadi. Matn sifatida o'qilganda 255 bayt noto'g'ri encoding xatosiga olib kelishi mumkin, shuning uchun binary ma'lumot uchun faqat binary rejim ishlatiladi. Fayl hajmi <code>File.size</code> bilan tekshiriladi."
      },
      {
        type: "code",
        title: "encoding.rb",
        code: r`matn = "salom"

puts matn.encoding
puts matn.bytesize

utf16 = matn.encode("UTF-16LE")
puts utf16.encoding
puts utf16.bytesize
puts utf16.encode("UTF-8")`,
        output: `UTF-8
5
UTF-16LE
10
salom`
      },
      {
        type: "p",
        html: "<code>String#encoding</code> joriy kodlashni, <code>bytesize</code> esa haqiqiy baytlar sonini ko'rsatadi. UTF-8 da lotin harflari bir bayt, UTF-16LE da ikkitadan joy oladi. <code>encode</code> konvertatsiya qiladi, lekin noto'g'ri baytlar uchun xato berishi mumkin; bunday holatda <code>invalid: :replace, undef: :replace</code> ishlatiladi. Fayl ochishda <code>File.open(\"f\", \"r:UTF-8\")</code> kabi tashqi encoding ko'rsatiladi."
      },
      {
        type: "code",
        title: "qatorlar.rb",
        code: r`File.write("qatorlar.txt", "bir\nikki\nuch\n")

File.foreach("qatorlar.txt").with_index(1) do |qator, raqam|
  puts "#{raqam}: #{qator.chomp}"
end

File.delete("qatorlar.txt")`,
        output: `1: bir
2: ikki
3: uch`
      },
      {
        type: "table",
        head: ["Metod", "Xotira", "Qachon"],
        rows: [
          ["<code>File.read</code>", "Butun fayl", "Kichik fayl"],
          ["<code>File.foreach</code>", "Bir qator", "Katta fayl"],
          ["<code>File.binread</code>", "Butun fayl", "Binary ma'lumot"],
          ["<code>IO.copy_stream</code>", "Bufer", "Fayldan faylga nusxa"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Buffer va flush",
        html: "Yozish buferlangan bo'lishi mumkin; jarayon kutilmaganda to'xtasa, ma'lumot faylga tushmasligi mumkin. Muhim yozuvdan keyin <code>io.flush</code> yoki <code>io.fsync</code> ishlatiladi. <code>File.open(..., \"a\")</code> mavjud fayl oxiriga qo'shadi, <code>\"w\"</code> esa faylni butunlay qayta yozadi."
      }
    ],
    quiz: [
      {
        q: "File.binread nimani qaytaradi?",
        options: [
          "Matnni UTF-8 ga konvertatsiya qiladi",
          "Faylning xom baytlarini string sifatida",
          "Faqat fayl hajmini",
          "Qatorlar massivini"
        ],
        answer: 1,
        explain: "binread encoding konvertatsiyasisiz xom baytlarni o'qiydi."
      },
      {
        q: "\"salom\" UTF-8 da nechta bayt egallaydi?",
        options: [
          "3",
          "4",
          "5",
          "10"
        ],
        answer: 2,
        explain: "Lotin harflari UTF-8 da bir baytdan, shuning uchun 5 harf 5 bayt."
      },
      {
        q: "Katta faylni qatorma-qator o'qish uchun qaysi yondashuv xotirani tejaydi?",
        options: [
          "File.read",
          "File.readlines",
          "File.foreach",
          "File.binread"
        ],
        answer: 2,
        explain: "File.foreach bir vaqtda faqat bitta qatorni yuklaydi."
      }
    ]
  },
  {
    id: 71,
    title: "TCP socket: server va client",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "TCP ishonchli, tartiblangan bayt oqimi beradi. Server <code>TCPServer</code> bilan portni tinglaydi, client <code>TCPSocket</code> bilan ulanadi. <code>accept</code> yangi ulanishni qabul qiladi va alohida socket qaytaradi. Har bir ulanishni alohida thread yoki event loop'da boshqarish kerak, aks holda bitta sekin client butun serverni bloklashi mumkin."
      },
      {
        type: "code",
        title: "tcp_echo.rb",
        code: r`require "socket"

server = TCPServer.new("127.0.0.1", 0)
port = server.addr[1]

client = Thread.new do
  socket = TCPSocket.new("127.0.0.1", port)
  socket.puts "salom server"
  socket.close
end

conn = server.accept
puts conn.gets
conn.close

client.join
server.close`,
        output: `salom server`
      },
      {
        type: "p",
        html: "<code>TCPServer.new(host, 0)</code> bo'sh port tanlaydi; <code>addr[1]</code> haqiqiy portni beradi. Bu testlarda port to'qnashuvini oldini oladi. <code>conn.gets</code> qator oxirigacha o'qiydi va newline'ni ham qaytaradi; <code>puts</code> esa ortiqcha bo'sh qator qo'shmaydi, chunki string allaqachon newline bilan tugaydi."
      },
      {
        type: "code",
        title: "tcp_protocol.rb",
        code: r`require "socket"

server = TCPServer.new("127.0.0.1", 0)
port = server.addr[1]

server_thread = Thread.new do
  conn = server.accept
  buyruq = conn.gets&.strip
  conn.puts(buyruq == "PING" ? "PONG" : "XATO")
  conn.close
end

client = TCPSocket.new("127.0.0.1", port)
client.puts "PING"
puts client.gets
client.close

server_thread.join
server.close`,
        output: `PONG`
      },
      {
        type: "p",
        html: "Bu misol oddiy matn protokolini ko'rsatadi: buyruq qator bilan tugaydi, javob ham qator. Haqiqiy protokolda uzunlik prefiksi yoki JSON framing ishlatiladi, chunki TCP oqim chegaralarini saqlamaydi — bitta <code>recv</code> bir nechta xabarni yoki xabarning bir qismini qaytarishi mumkin. <code>readpartial</code> va bufer bilan ishlash shu muammoni hal qiladi."
      },
      {
        type: "code",
        title: "tcp_javob.rb",
        code: r`require "socket"

server = TCPServer.new("127.0.0.1", 0)
port = server.addr[1]

thread = Thread.new do
  conn = server.accept
  conn.write "OK 42\n"
  conn.close
end

socket = TCPSocket.new("127.0.0.1", port)
puts socket.gets
socket.close

thread.join
server.close`,
        output: `OK 42`
      },
      {
        type: "table",
        head: ["Metod", "Vazifasi"],
        rows: [
          ["<code>TCPServer.new</code>", "Portni tinglaydi"],
          ["<code>accept</code>", "Yangi ulanishni qabul qiladi"],
          ["<code>TCPSocket.new</code>", "Serverga ulanadi"],
          ["<code>gets</code>", "Qator oxirigacha o'qiydi"],
          ["<code>close</code>", "Socketni yopadi"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Resurslarni yoping",
        html: "Socketlar fayl deskriptorlarini egallaydi. Har bir ulanishni <code>ensure</code> bilan yoping, aks holda server \"too many open files\" xatosiga uchraydi. <code>accept</code> cheksiz bloklanishi mumkin, shuning uchun <code>Socket.tcp</code> va <code>read_timeout</code> kabi timeoutlarni belgilang. TLS uchun <code>OpenSSL::SSL::SSLSocket</code> ishlatiladi."
      }
    ],
    quiz: [
      {
        q: "TCPServer#accept nima qaytaradi?",
        options: [
          "Yangi TCPSocket ulanishini",
          "Serverning PID ni",
          "Faqat port raqamini",
          "Thread obyektini"
        ],
        answer: 0,
        explain: "accept mijozi bilan bog'langan yangi socket obyektini qaytaradi."
      },
      {
        q: "TCP socketda gets natijasida newline bo'ladimi?",
        options: [
          "Yo'q, Ruby uni olib tashlaydi",
          "Ha, qator oxiri ham qaytadi",
          "Faqat binary rejimda",
          "Faqat serverda"
        ],
        answer: 1,
        explain: "gets qatorni newline bilan birga qaytaradi; kerak bo'lsa strip yoki chomp ishlatiladi."
      },
      {
        q: "TCP oqimida xabar chegaralari nima uchun saqlanmaydi?",
        options: [
          "TCP bayt oqimi, recv bo'laklari ixtiyoriy",
          "Ruby gets ni taqiqlaydi",
          "Port raqami yetarli emas",
          "Socket faqat bitta bayt yuboradi"
        ],
        answer: 0,
        explain: "TCP uzunlik yoki xabar chegarasini bilmaydi; protokol darajasida framing kerak."
      }
    ]
  },
  {
    id: 72,
    title: "UDP, UNIX socket va manzillar",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "TCP dan farqli, UDP datagram xizmati: ulanish yo'q, yetkazib berish kafolati yo'q, lekin tez va yengil. DNS, metrika yuborish, o'yin trafigi va multicast uchun mos. UNIX socket esa bitta mashinadagi jarayonlar orasida fayl tizimi yo'li orqali ishlaydi va TCP dan tezroq, ruxsatlar bilan himoyalanadi."
      },
      {
        type: "code",
        title: "udp.rb",
        code: r`require "socket"

server = UDPSocket.new
server.bind("127.0.0.1", 0)
port = server.addr[1]

client = UDPSocket.new
client.send("ping", 0, "127.0.0.1", port)

xabar, manba = server.recvfrom(1024)
puts xabar
puts manba[0]

client.close
server.close`,
        output: `ping
127.0.0.1`
      },
      {
        type: "p",
        html: "<code>send</code> to'rtinchi argument sifatida portni oladi, <code>recvfrom</code> esa xabar va manba manzilini qaytaradi. UDP da <code>connect</code> shart emas, lekin <code>connect</code> qilinsa, faqat shu manzildan kelgan datagramlar qabul qilinadi. Paket yo'qolishi yoki ikki marta kelishi mumkin — ilova darajasida ID va retry kerak."
      },
      {
        type: "code",
        title: "unix_socket.rb",
        code: r`require "socket"

path = "/tmp/noldan.sock"
File.unlink(path) if File.exist?(path)

server = UNIXServer.new(path)

client = Thread.new do
  socket = UNIXSocket.new(path)
  socket.puts "unix salom"
  socket.close
end

conn = server.accept
puts conn.gets
conn.close

client.join
server.close
File.unlink(path)`,
        output: `unix salom`
      },
      {
        type: "p",
        html: "UNIX socket fayl tizimida socket fayl sifatida ko'rinadi, shuning uchun eski faylni avval o'chirish kerak. U faqat shu mashinada ishlaydi va fayl ruxsatlari bilan himoyalanadi. Docker, systemd va Nginx ko'pincha ilova bilan <code>/run/app.sock</code> orqali gaplashadi. Windows'da UNIX socket o'rniga named pipe ishlatiladi."
      },
      {
        type: "code",
        title: "addrinfo.rb",
        code: r`require "socket"

addr = Addrinfo.tcp("127.0.0.1", 4567)
puts addr.ip_address
puts addr.ip_port
puts addr.inspect_sockaddr`,
        output: `127.0.0.1
4567
127.0.0.1:4567`
      },
      {
        type: "table",
        head: ["Tur", "Kafolat", "Qo'llanish"],
        rows: [
          ["TCP", "Tartib va yetkazish", "HTTP, ma'lumotlar bazasi"],
          ["UDP", "Yo'q, tez", "DNS, metrika, real-time"],
          ["UNIX stream", "Tartib, lokal", "Nginx-Puma, IPC"],
          ["UNIX datagram", "Yo'q, lokal", "Lokal signalizatsiya"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Manzil va port",
        html: "<code>Addrinfo</code> host, port va protocolni bir joyda saqlaydi; u IPv4/IPv6 farqini yashiradi. Port 0 \"bo'sh port tanla\" degani. UNIX socket yo'lini tozalash va ruxsatlarini <code>chmod</code> bilan cheklash xavfsizlik uchun muhim."
      }
    ],
    quiz: [
      {
        q: "UDP da recvfrom nima qaytaradi?",
        options: [
          "Faqat xabar matnini",
          "Xabar va manba manzilini",
          "Faqat port raqamini",
          "Yangi socketni"
        ],
        answer: 1,
        explain: "recvfrom datagram matni bilan birga jo'natuvchining manzil ma'lumotini qaytaradi."
      },
      {
        q: "UNIXServer qanday manzilda tinglaydi?",
        options: [
          "IP manzil va portda",
          "Fayl tizimidagi socket yo'lida",
          "Faqat localhost:80 da",
          "DNS nomida"
        ],
        answer: 1,
        explain: "UNIX socket fayl tizimi yo'li orqali ishlaydi va faqat lokal jarayonlar uchun."
      },
      {
        q: "UDP ning asosiy kamchiligi nima?",
        options: [
          "Yetkazish va tartib kafolatlanmaydi",
          "Faqat IPv6 da ishlaydi",
          "Har doim sekinroq",
          "Port talab qilmaydi"
        ],
        answer: 0,
        explain: "UDP datagramlari yo'qolishi, takrorlanishi yoki tartibsiz kelishi mumkin."
      }
    ]
  },
  {
    id: 73,
    title: "Net::HTTP chuqur: SSL, timeout va POST",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "<code>Net::HTTP</code> Ruby standart kutubxonasidagi HTTP client. U qo'shimcha gem talab qilmaydi va kichik skriptlar uchun yetarli. Muhim sozlamalar: <code>use_ssl</code>, <code>open_timeout</code>, <code>read_timeout</code> va <code>write_timeout</code>. Ularni belgilamaslik tarmoq osilib qolishida butun jarayonni bloklashi mumkin."
      },
      {
        type: "code",
        title: "http_get.rb",
        code: r`require "net/http"
require "uri"

uri = URI("https://example.com")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
http.open_timeout = 3
http.read_timeout = 3

javob = http.get(uri.path)
puts javob.code
puts javob["content-type"].start_with?("text/html")
puts javob.body.include?("Example Domain")`,
        output: `200
true
true`
      },
      {
        type: "p",
        html: "HTTPS uchun <code>use_ssl = true</code> majburiy; aks holda oddiy HTTP yuboriladi va server ulanishni rad etadi. <code>javob.code</code> statusni string sifatida beradi, <code>javob[\"header\"]</code> esa sarlavhani oladi. <code>Net::HTTP</code> redirect'larni avtomatik kuzatmaydi: 301/302 kelganda <code>Location</code> sarlavhasini o'qib, yangi so'rov yuborish kerak."
      },
      {
        type: "code",
        title: "http_post.rb",
        code: r`require "net/http"
require "json"

req = Net::HTTP::Post.new("/talabalar")
req["Content-Type"] = "application/json"
req["Authorization"] = "Bearer test"
req.body = JSON.generate(ism: "Aziza")

puts req.method
puts req["content-type"]
puts req.body`,
        output: `POST
application/json
{"ism":"Aziza"}`
      },
      {
        type: "p",
        html: "So'rov obyekti tayyor bo'lgach, uni <code>http.request(req)</code> bilan yuborish mumkin. <code>Net::HTTP.start</code> bloki bir nechta so'rov uchun ulanishni qayta ishlatadi va oxirida yopadi. Har bir so'rovda yangi TCP/TLS ulanish ochish sekin; ayniqsa API bilan ko'p ishlaganda connection reuse muhim."
      },
      {
        type: "code",
        title: "retry_wrapper.rb",
        code: r`require "timeout"

def qayta_urin(urinishlar: 3)
  urinishlar.times do |indeks|
    begin
      return yield
    rescue Timeout::Error, Errno::ECONNRESET
      raise if indeks == urinishlar - 1
      sleep 0.1
    end
  end
end

urinish = 0
natija = qayta_urin(urinishlar: 3) do
  urinish += 1
  raise Timeout::Error if urinish < 3
  "uchinchi urinishda OK"
end

puts natija`,
        output: `uchinchi urinishda OK`
      },
      {
        type: "table",
        head: ["Sozlama", "Vazifasi"],
        rows: [
          ["<code>use_ssl</code>", "HTTPS/TLS yoqadi"],
          ["<code>open_timeout</code>", "Ulanish ochilishini cheklaydi"],
          ["<code>read_timeout</code>", "Javob o'qishni cheklaydi"],
          ["<code>write_timeout</code>", "So'rov yozishni cheklaydi"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Retry faqat xavfsiz so'rovlarda",
        html: "GET, PUT va DELETE idempotent, ularni qayta urinish odatda xavfsiz. POST ni ko'r-ko'rona qayta yuborish ikki marta buyurtma yaratishi mumkin — idempotency key yoki server tomonidagi tekshiruv kerak. 429 va 503 javoblarida <code>Retry-After</code> sarlavhasini hurmat qiling."
      }
    ],
    quiz: [
      {
        q: "HTTPS so'rov yuborish uchun Net::HTTP da nima yoqiladi?",
        options: [
          "use_ssl = true",
          "ssl_verify = false",
          "https = on",
          "secure_mode = 1"
        ],
        answer: 0,
        explain: "Net::HTTP obyektida use_ssl ni true qilish TLS ulanishini yoqadi."
      },
      {
        q: "Net::HTTP javob statusini qaysi metod beradi?",
        options: [
          "status_code",
          "code",
          "http_status",
          "result"
        ],
        answer: 1,
        explain: "Net::HTTPResponse#code statusni string ko'rinishida qaytaradi, masalan \"200\"."
      },
      {
        q: "POST so'rovini avtomatik qayta yuborish nima uchun xavfli?",
        options: [
          "Har doim 500 qaytaradi",
          "Ikki marta resurs yaratishi mumkin",
          "TLS ni o'chiradi",
          "Header'larni yo'qotadi"
        ],
        answer: 1,
        explain: "POST idempotent emas; takroriy yuborish bir xil amalni ikki marta bajarishi mumkin."
      }
    ]
  },
  {
    id: 74,
    title: "Faraday, HTTPX va pagination",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Katta loyihada <code>Net::HTTP</code> ustiga qulaylik qatlami kerak bo'ladi: middleware, JSON parsing, retry, timeout va connection pooling. <strong>Faraday</strong> shu ishlarni bitta konfiguratsiyaga yig'adi. <strong>HTTPX</strong> esa HTTP/2 va parallel so'rovlarni qo'llab-quvvatlaydigan zamonaviy client. Ikkalasi ham API bilan ishlashni soddalashtiradi."
      },
      {
        type: "code",
        title: "faraday_client.rb",
        code: r`require "faraday"

conn = Faraday.new(url: "https://api.github.com") do |f|
  f.request :retry, max: 2, interval: 0.2
  f.response :json
  f.headers["User-Agent"] = "noldan-course"
  f.adapter Faraday.default_adapter
end

javob = conn.get("/repos/ruby/ruby")
puts javob.status
puts javob.body["language"]`,
        output: `200
Ruby`
      },
      {
        type: "p",
        html: "Faraday middleware zanjiri so'rov va javobni o'raydi. <code>request :retry</code> tarmoq xatolarida qayta urinadi, <code>response :json</code> esa JSON javobni Hash'ga aylantiradi. Middleware tartibi muhim: retry JSON parserdan oldin yoki keyin turishiga qarab xatti-harakat o'zgaradi. Adapter haqiqiy transportni (Net::HTTP, HTTPX) tanlaydi."
      },
      {
        type: "code",
        title: "httpx_client.rb",
        code: r`require "httpx"

javob = HTTPX
  .with(timeout: { total_timeout: 3 })
  .get("https://httpbin.org/json")

puts javob.status
puts javob.json.key?("slideshow")`,
        output: `200
true`
      },
      {
        type: "p",
        html: "HTTPX <code>.with</code> orqali timeout, proxy va header sozlamalarini beradi. U HTTP/2 va parallel so'rovlarni qo'llab-quvvatlaydi, shuning uchun bir nechta endpoint'ni bir vaqtda chaqirish oson. Javob <code>json</code> metodi bilan parse qilinadi. Qaysi client tanlansa ham, timeout va xato siyosati aniq bo'lishi shart."
      },
      {
        type: "code",
        title: "pagination.rb",
        code: r`class FakeClient
  def initialize
    @sahifalar = {
      1 => { "items" => ["a", "b"], "next" => 2 },
      2 => { "items" => ["c"], "next" => nil }
    }
  end

  def get(_yol, page:)
    @sahifalar.fetch(page)
  end
end

def barcha_elementlar(client, yol)
  natijalar = []
  sahifa = 1

  loop do
    javob = client.get(yol, page: sahifa)
    natijalar.concat(javob["items"])
    break unless javob["next"]

    sahifa = javob["next"]
  end

  natijalar
end

puts barcha_elementlar(FakeClient.new, "/items").inspect`,
        output: `["a", "b", "c"]`
      },
      {
        type: "table",
        head: ["Xususiyat", "Faraday", "HTTPX"],
        rows: [
          ["Middleware", "Kuchli", "Pluginlar"],
          ["HTTP/2", "Adapter orqali", "O'rnatilgan"],
          ["Parallel so'rov", "Tashqi gem", "O'rnatilgan"],
          ["O'rganish osonligi", "Yuqori", "O'rta"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Pagination va limitlar",
        html: "API pagination'ini tugatish sharti aniq bo'lishi kerak: <code>next</code> null, bo'sh massiv yoki sahifa raqami chegarasi. Cheksiz loop'dan himoya uchun maksimal sahifa sonini qo'ying. 429 javobida kutish, <code>Retry-After</code> va exponential backoff — barqaror clientning belgilari."
      }
    ],
    quiz: [
      {
        q: "Faraday'da JSON javobni avtomatik Hash qilish uchun qaysi middleware ishlatiladi?",
        options: [
          "response :json",
          "request :json",
          "adapter :json",
          "parser :hash"
        ],
        answer: 0,
        explain: "f.response :json javobni parse qilib Ruby Hash qaytaradi."
      },
      {
        q: "Pagination loop'ini to'xtatish uchun eng ishonchli shart qaysi?",
        options: [
          "Har doim 10 sahifa",
          "next qiymati yo'qligi yoki bo'sh natija",
          "Javob statusi 200 bo'lishi",
          "Birinchi element bo'shligi"
        ],
        answer: 1,
        explain: "API qaytargan next yo'qligi yoki bo'sh items ro'yxat tugaganini bildiradi."
      },
      {
        q: "HTTP 429 javobi nimani anglatadi?",
        options: [
          "Server xatosi",
          "So'rovlar soni chegarasidan oshgani",
          "Autentifikatsiya xatosi",
          "Resurs topilmagani"
        ],
        answer: 1,
        explain: "429 Too Many Requests rate limit oshganini bildiradi; Retry-After bilan kutish kerak."
      }
    ]
  }
];
