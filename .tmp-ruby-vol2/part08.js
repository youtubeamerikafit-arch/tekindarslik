const r = String.raw;

module.exports = [
  {
    id: 85,
    title: "Rack protokoli va middleware asoslari",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Rack — Ruby web serverlari va freymvorklari orasidagi minimal interfeys. Har qanday Rack ilovasi <code>call(env)</code> metodiga ega obyekt bo'lib, <code>[status, headers, body]</code> uchligini qaytaradi. Sinatra, Rails va Puma shu protokol ustida ishlaydi. Uni tushunish middleware, request va response bilan ishlashni ancha osonlashtiradi."
      },
      {
        type: "code",
        title: "rack_app.rb",
        code: r`app = lambda do |env|
  [
    200,
    { "content-type" => "text/plain" },
    ["Salom, Rack!"]
  ]
end

status, headers, body = app.call(
  "REQUEST_METHOD" => "GET",
  "PATH_INFO" => "/"
)

puts status
puts headers["content-type"]
puts body.to_a.join`,
        output: `200
text/plain
Salom, Rack!`
      },
      {
        type: "p",
        html: "<code>env</code> — CGI uslubidagi hash: <code>REQUEST_METHOD</code>, <code>PATH_INFO</code>, <code>QUERY_STRING</code>, header'lar va <code>rack.input</code>. Status integer, header nomlari Rack 3 da kichik harfda, body esa <code>each</code> ga javob beradigan obyekt bo'lishi kerak. Body har bir bo'lakni string sifatida beradi; server uni ketma-ket yuboradi. Oddiy massiv ham <code>each</code> ni qo'llab-quvvatlaydi."
      },
      {
        type: "code",
        title: "rack_request.rb",
        code: r`require "rack"

app = lambda do |env|
  request = Rack::Request.new(env)
  ism = request.params["ism"] || "mehmon"

  [200, { "content-type" => "text/plain" }, ["Salom, #{ism}"]]
end

javob = Rack::MockRequest.new(app).get("/salom?ism=Aziza")
puts javob.status
puts javob.body`,
        output: `200
Salom, Aziza`
      },
      {
        type: "p",
        html: "<code>Rack::Request</code> query parametrlari, form ma'lumotlari, header va body'ni bir joyda beradi. <code>Rack::MockRequest</code> esa serverni ishga tushirmasdan so'rov yuborib test qilish imkonini yaratadi. Middleware — <code>call(env)</code> ni o'rab, oldin yoki keyin ish bajaradigan obyekt. Ular <code>use</code> bilan zanjirga qo'shiladi va tashqi qatlamdan ichkariga qarab bajariladi."
      },
      {
        type: "code",
        title: "middleware.rb",
        code: r`class SarlavhaQoshish
  def initialize(app)
    @app = app
  end

  def call(env)
    status, headers, body = @app.call(env)
    headers["x-app"] = "noldan"
    [status, headers, body]
  end
end

asosiy = ->(_env) { [200, {}, ["OK"]] }
app = SarlavhaQoshish.new(asosiy)

status, headers, body = app.call({})
puts status
puts headers["x-app"]
puts body.join`,
        output: `200
noldan
OK`
      },
      {
        type: "table",
        head: ["Qism", "Talab"],
        rows: [
          ["Status", "Integer (200, 404...)"],
          ["Headers", "String kalit va qiymatlar"],
          ["Body", "<code>each</code> ga javob beradigan obyekt"],
          ["env", "Rack spetsifikatsiyasidagi hash"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Body va close",
        html: "Agar body fayl yoki stream bo'lsa, u <code>close</code> metodini qo'llab-quvvatlashi va server tomonidan yopilishi kerak. Katta javobni butunlay stringga yig'mang — <code>Enumerator</code> yoki fayl obyekti bilan oqimda bering. Rack 3 header nomlarini kichik harfda kutadi; eski middleware bilan moslikni tekshiring."
      }
    ],
    quiz: [
      {
        q: "Rack ilovasi call(env) dan nimani qaytaradi?",
        options: [
          "Faqat status kodni",
          "status, headers va body uchligini",
          "HTML matnni",
          "JSON obyektni"
        ],
        answer: 1,
        explain: "Rack interfeysi [status, headers, body] massivini talab qiladi."
      },
      {
        q: "config.ru faylining vazifasi nima?",
        options: [
          "Rack ilovasini ishga tushirish konfiguratsiyasi",
          "Ma'lumotlar bazasi sozlamasi",
          "Ruby gem ro'yxati",
          "Test natijalarini saqlash"
        ],
        answer: 0,
        explain: "config.ru rackup/Puma uchun ilova va middleware zanjirini belgilaydi."
      },
      {
        q: "Middleware zanjiri qanday tartibda ishlaydi?",
        options: [
          "Ichkaridan tashqariga",
          "Ro'yxatdagi birinchi middleware tashqi qatlam bo'ladi",
          "Faqat bittasi ishlaydi",
          "Tartib muhim emas"
        ],
        answer: 1,
        explain: "Birinchi use qilingan middleware eng tashqi qatlam bo'lib, so'rovni keyingisiga uzatadi."
      }
    ]
  },
  {
    id: 86,
    title: "Rack bilan mini router va builder",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Rack ustida kichik router yozish freymvork ichida nima bo'layotganini ko'rsatadi. Router <code>REQUEST_METHOD</code> va <code>PATH_INFO</code> bo'yicha handler tanlaydi, topilmasa 404 qaytaradi. <code>Rack::Builder</code> esa middleware va ilovalarni <code>config.ru</code> uslubida yig'ish uchun qulay DSL beradi."
      },
      {
        type: "code",
        title: "mini_router.rb",
        code: r`require "rack"

class Router
  def initialize(&blok)
    @routes = {}
    instance_eval(&blok)
  end

  def get(yol, &handler)
    @routes[["GET", yol]] = handler
  end

  def call(env)
    handler = @routes[[env["REQUEST_METHOD"], env["PATH_INFO"]]]

    return [404, { "content-type" => "text/plain" }, ["topilmadi"]] unless handler

    handler.call(env)
  end
end

router = Router.new do
  get "/holat" do |_env|
    [200, { "content-type" => "application/json" }, ['{"holat":"ok"}']]
  end
end

javob = Rack::MockRequest.new(router).get("/holat")
puts javob.status
puts javob.body`,
        output: `200
{"holat":"ok"}`
      },
      {
        type: "p",
        html: "Bu router aniq yo'lni method bilan bog'laydi. Haqiqiy freymvorkda path parametrlari (<code>/kitoblar/:id</code>), wildcard, HTTP method override va 405 javobi ham bo'ladi. Muhimi: route topilmasa 404, method mos kelmasa 405 qaytarish. Routing mantig'ini controller'dan ajratish testlashni osonlashtiradi."
      },
      {
        type: "code",
        title: "rack_builder.rb",
        code: r`require "rack"

class Logger
  def initialize(app)
    @app = app
  end

  def call(env)
    puts "so'rov: #{env["PATH_INFO"]}"
    @app.call(env)
  end
end

app = Rack::Builder.new do
  use Logger
  run ->(_env) { [200, { "content-type" => "text/plain" }, ["builder"]] }
end

javob = Rack::MockRequest.new(app).get("/")
puts javob.body`,
        output: `so'rov: /
builder`
      },
      {
        type: "p",
        html: "<code>Rack::Builder</code> <code>use</code> va <code>run</code> ni bitta blokda birlashtiradi. Bu <code>config.ru</code> ning asosi: <code>use</code> middleware qo'shadi, <code>run</code> esa eng ichki ilovani belgilaydi. Bir xil middleware'ni Sinatra, Rails yoki sof Rack ilovasida qayta ishlatish mumkin. Builder <code>to_app</code> bilan yakuniy ilovani qaytaradi."
      },
      {
        type: "table",
        head: ["Vosita", "Vazifasi"],
        rows: [
          ["<code>Rack::Builder</code>", "Middleware va ilovani yig'adi"],
          ["<code>Rack::URLMap</code>", "Yo'l prefiksi bo'yicha ilovalarni ajratadi"],
          ["<code>Rack::Static</code>", "Statik fayllarni beradi"],
          ["<code>Rack::CommonLogger</code>", "So'rovlarni log qiladi"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "404 va 405",
        html: "Noto'g'ri yo'l uchun 404, mavjud yo'l lekin noto'g'ri method uchun 405 qaytarish API semantikasi uchun muhim. 405 javobida <code>Allow</code> header'ida ruxsat etilgan methodlarni ko'rsating. Xato sahifasida stack trace yoki maxfiy ma'lumot chiqmasin."
      }
    ],
    quiz: [
      {
        q: "Rack::Builder da use nimani qo'shadi?",
        options: [
          "Middleware",
          "Yangi route",
          "Ma'lumotlar bazasi",
          "Test case"
        ],
        answer: 0,
        explain: "use middleware zanjiriga qatlam qo'shadi; run eng ichki ilovani belgilaydi."
      },
      {
        q: "Router route topmasa qaysi status mos?",
        options: [
          "200",
          "301",
          "404",
          "500"
        ],
        answer: 2,
        explain: "So'ralgan resurs yo'q bo'lsa 404 Not Found qaytariladi."
      },
      {
        q: "Rack::URLMap nima qiladi?",
        options: [
          "Yo'l prefiksiga qarab turli Rack ilovalariga yo'naltiradi",
          "Barcha so'rovlarni bloklaydi",
          "JSON ni parse qiladi",
          "Session yaratadi"
        ],
        answer: 0,
        explain: "URLMap /api va / kabi prefikslarni alohida ilovalarga bog'laydi."
      }
    ]
  },
  {
    id: 87,
    title: "Sinatra chuqur: helper, filter va error",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Sinatra kichik web ilovalar uchun minimal freymvork. Modular uslubda <code>Sinatra::Base</code> dan meros olinadi va ilova klass sifatida yoziladi — bu testlash va boshqa ilova bilan birlashtirish uchun qulay. <code>helpers</code> umumiy metodlarni, <code>before</code>/<code>after</code> filter'lar har bir so'rov oldi va keyingi ishlarni, <code>error</code> esa xato javoblarini boshqaradi."
      },
      {
        type: "code",
        title: "sinatra_modular.rb",
        code: r`require "sinatra/base"
require "json"
require "rack/mock"

class App < Sinatra::Base
  set :app_name, "Noldan API"

  before do
    content_type :json
  end

  helpers do
    def json(data)
      JSON.generate(data)
    end
  end

  get "/holat" do
    json(holat: "ok", nom: settings.app_name)
  end

  not_found do
    json(xato: "topilmadi")
  end
end

mock = Rack::MockRequest.new(App)
puts mock.get("/holat").status
puts mock.get("/holat").body
puts mock.get("/yoq").status
puts mock.get("/yoq").body`,
        output: `200
{"holat":"ok","nom":"Noldan API"}
404
{"xato":"topilmadi"}`
      },
      {
        type: "p",
        html: "<code>before</code> filter har bir route oldidan ishlaydi; unda content type, autentifikatsiya yoki logging sozlanadi. <code>settings</code> klass darajasidagi konfiguratsiyani beradi. <code>helpers</code> ichidagi metodlar route va view'larda mavjud. <code>not_found</code> bloki 404 uchun javobni belgilaydi va standart HTML sahifani almashtiradi."
      },
      {
        type: "code",
        title: "sinatra_error.rb",
        code: r`require "sinatra/base"
require "json"
require "rack/mock"

class App < Sinatra::Base
  set :show_exceptions, false

  error 500 do
    content_type :json
    '{"xato":"server xatosi"}'
  end

  get "/portlash" do
    raise "kutilmagan xato"
  end
end

javob = Rack::MockRequest.new(App).get("/portlash")
puts javob.status
puts javob.body`,
        output: `500
{"xato":"server xatosi"}`
      },
      {
        type: "p",
        html: "<code>error 500</code> bloki kutilmagan istisnoni ushlaydi. Development'da <code>show_exceptions</code> yoqilgan bo'lsa, Sinatra batafsil sahifa ko'rsatadi; production'da uni o'chirib, foydalanuvchiga umumiy xabar bering. Haqiqiy xatoni <code>env[\"sinatra.error\"]</code> orqali logga yozing, lekin javobda stack trace ko'rsatmang."
      },
      {
        type: "table",
        head: ["Element", "Vazifasi"],
        rows: [
          ["<code>before</code>", "Har so'rov oldidan"],
          ["<code>after</code>", "Javobdan keyin"],
          ["<code>helpers</code>", "Umumiy metodlar"],
          ["<code>error</code>", "Xato handleri"],
          ["<code>not_found</code>", "404 handleri"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Modular yoki klassik?",
        html: "Yangi ilovada modular uslubni tanlang: <code>class App &lt; Sinatra::Base</code>. U testda <code>Rack::MockRequest.new(App)</code> bilan osongina ishlaydi va bir nechta ilovani bitta jarayonda birlashtirish mumkin. Klassik uslub (<code>require \"sinatra\"</code>) faqat kichik skript va prototip uchun qulay."
      }
    ],
    quiz: [
      {
        q: "Sinatra helpers bloki nimani belgilaydi?",
        options: [
          "Route va view'larda mavjud yordamchi metodlarni",
          "Ma'lumotlar bazasi jadvalini",
          "Server portini",
          "Test fixture'larini"
        ],
        answer: 0,
        explain: "helpers ichida yozilgan metodlar ilova kontekstida route va shablonlarda ishlatiladi."
      },
      {
        q: "before filter qachon ishlaydi?",
        options: [
          "Har bir so'rov route bajarilishidan oldin",
          "Faqat 404 da",
          "Faqat server yopilganda",
          "Har bir javobdan keyin"
        ],
        answer: 0,
        explain: "before filter route handleridan oldin bajariladi va umumiy tayyorgarlik uchun ishlatiladi."
      },
      {
        q: "Modular Sinatra ilovasini test qilish uchun nima qulay?",
        options: [
          "Rack::MockRequest.new(App)",
          "Faqat brauzer",
          "rails console",
          "gem install sinatra"
        ],
        answer: 0,
        explain: "Modular ilova Rack ilovasi bo'lgani uchun MockRequest bilan to'g'ridan-to'g'ri test qilinadi."
      }
    ]
  },
  {
    id: 88,
    title: "Loyiha 1: Kitobxona CRUD API",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Endi Sinatra va Sequel bilan kichik, lekin to'liq CRUD API yozamiz: kitoblarni yaratish, ro'yxatini olish, yangilash va o'chirish. Bu loyihada schema, validatsiya, status kodlar va JSON format birgalikda ishlaydi. Har bir qatlam aniq: baza, HTTP route va javob formatlash. Keyingi darsda autentifikatsiya va testlarni qo'shamiz."
      },
      {
        type: "code",
        title: "kitobxona_schema.rb",
        code: r`require "sinatra/base"
require "sequel"
require "json"
require "rack/mock"

DB = Sequel.sqlite

DB.create_table(:kitoblar) do
  primary_key :id
  String :nom, null: false
  String :muallif
  Integer :narx
end

class App < Sinatra::Base
  before { content_type :json }

  helpers do
    def json(data)
      JSON.generate(data)
    end
  end

  post "/kitoblar" do
    data = JSON.parse(request.body.read)
    halt 422, json(xato: "nom kerak") if data["nom"].to_s.empty?

    id = DB[:kitoblar].insert(
      nom: data["nom"],
      muallif: data["muallif"],
      narx: data["narx"].to_i
    )

    status 201
    json(id: id, nom: data["nom"])
  end

  get "/kitoblar" do
    json(DB[:kitoblar].order(:id).all)
  end
end

mock = Rack::MockRequest.new(App)
javob = mock.post(
  "/kitoblar",
  "CONTENT_TYPE" => "application/json",
  input: '{"nom":"Ruby","muallif":"Aziza","narx":120000}'
)
puts javob.status
puts javob.body
puts mock.get("/kitoblar").body`,
        output: `201
{"id":1,"nom":"Ruby"}
[{"id":1,"nom":"Ruby","muallif":"Aziza","narx":120000}]`
      },
      {
        type: "p",
        html: "POST 201 Created qaytaradi va yaratilgan resursning ID'sini beradi. GET ro'yxatni qaytaradi. Sequel natijalari Hash bo'lgani uchun <code>JSON.generate</code> ularni to'g'ridan-to'g'ri serializatsiya qiladi. Diqqat: Hash kalitlari tartibi bazadan kelgan ustunlar tartibiga bog'liq; API shartnomasida maydonlar nomini aniq hujjatlashtiring."
      },
      {
        type: "code",
        title: "kitobxona_update.rb",
        code: r`require "sinatra/base"
require "sequel"
require "json"
require "rack/mock"

DB = Sequel.sqlite
DB.create_table(:kitoblar) do
  primary_key :id
  String :nom
  Integer :narx
end
DB[:kitoblar].insert(nom: "Ruby", narx: 120000)

class App < Sinatra::Base
  before { content_type :json }

  helpers do
    def json(data)
      JSON.generate(data)
    end

    def kitob(id)
      DB[:kitoblar].where(id: id).first
    end
  end

  patch "/kitoblar/:id" do
    yozuv = kitob(params[:id].to_i)
    halt 404, json(xato: "topilmadi") unless yozuv

    data = JSON.parse(request.body.read)
    DB[:kitoblar].where(id: yozuv[:id]).update(narx: data["narx"].to_i)
    json(id: yozuv[:id], narx: data["narx"].to_i)
  end

  delete "/kitoblar/:id" do
    soni = DB[:kitoblar].where(id: params[:id].to_i).delete
    halt 404, json(xato: "topilmadi") if soni.zero?

    status 204
    body ""
  end
end

mock = Rack::MockRequest.new(App)
puts mock.patch("/kitoblar/1", input: '{"narx":99000}').body
puts mock.delete("/kitoblar/1").status
puts DB[:kitoblar].count`,
        output: `{"id":1,"narx":99000}
204
0`
      },
      {
        type: "p",
        html: "PATCH faqat berilgan maydonni yangilaydi; to'liq almashtirish uchun PUT ishlatiladi. DELETE muvaffaqiyatli bo'lsa 204 No Content qaytaradi — javob tanasi bo'sh. Mavjud bo'lmagan ID uchun 404. Bu semantika REST API'ning asosi: status kod mijozga nima bo'lganini tushuntiradi, matnni parse qilish shart emas."
      },
      {
        type: "table",
        head: ["Amal", "Status", "Javob"],
        rows: [
          ["POST", "201", "Yaratilgan resurs"],
          ["GET", "200", "Ro'yxat yoki obyekt"],
          ["PATCH", "200", "Yangilangan obyekt"],
          ["DELETE", "204", "Bo'sh"],
          ["Validatsiya", "422", "Xato tafsiloti"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "API shartnomasi",
        html: "Maydonlar nomi, turi va majburiyligini oldindan belgilang. <code>JSON.parse</code> xato bersa 400 qaytaring, biznes-qoida buzilsa 422. Katta ro'yxatni cheksiz qaytarmang — <code>limit</code> va <code>offset</code> yoki cursor pagination qo'shing. Har bir endpoint uchun test yozing."
      }
    ],
    quiz: [
      {
        q: "POST bilan resurs yaratilganda qaysi status qaytariladi?",
        options: [
          "200",
          "201",
          "204",
          "404"
        ],
        answer: 1,
        explain: "201 Created yangi resurs yaratilganini bildiradi."
      },
      {
        q: "Validatsiya xatosi uchun qaysi status mos?",
        options: [
          "422 Unprocessable Entity",
          "500 Internal Server Error",
          "301 Moved Permanently",
          "204 No Content"
        ],
        answer: 0,
        explain: "So'rov sintaktik to'g'ri, lekin biznes-qoidaga mos emasligi 422 bilan bildiriladi."
      },
      {
        q: "Sequel dataset insert metodi nima qaytaradi?",
        options: [
          "Yangi yozuv ID'sini",
          "Butun jadvalni",
          "true/false",
          "SQL matnini"
        ],
        answer: 0,
        explain: "insert odatda yaratilgan yozuvning primary key qiymatini qaytaradi."
      }
    ]
  },
  {
    id: 89,
    title: "Loyiha 2: autentifikatsiya va API testlari",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "API'ni himoyalash uchun autentifikatsiya va avtorizatsiya kerak. Bu darsda token asosidagi oddiy himoya, 401 va 403 farqi, xavfsiz header'lar va Rack::Test bilan test yozishni ko'rsatamiz. Token ni kodda saqlamang — uni muhit o'zgaruvchisi yoki maxfiy ombordan oling. Production'da HTTPS majburiy."
      },
      {
        type: "code",
        title: "token_auth.rb",
        code: r`require "sinatra/base"
require "json"
require "rack/mock"

class App < Sinatra::Base
  TOKEN = ENV.fetch("APP_TOKEN", "test-token")

  before "/admin/*" do
    auth = request.env["HTTP_AUTHORIZATION"]
    halt 401, JSON.generate(xato: "token kerak") unless auth == "Bearer #{TOKEN}"
  end

  get "/admin/holat" do
    content_type :json
    JSON.generate(holat: "ok")
  end
end

mock = Rack::MockRequest.new(App)
puts mock.get("/admin/holat").status
javob = mock.get(
  "/admin/holat",
  "HTTP_AUTHORIZATION" => "Bearer test-token"
)
puts javob.status
puts javob.body`,
        output: `401
200
{"holat":"ok"}`
      },
      {
        type: "p",
        html: "<code>before \"/admin/*\"</code> faqat admin yo'llariga tegishli filter yaratadi. <code>halt</code> esa darhol javob qaytaradi va keyingi kodni to'xtatadi. 401 Unauthorized — autentifikatsiya yo'q yoki noto'g'ri; 403 Forbidden — foydalanuvchi tanilgan, lekin ruxsati yo'q. Bu ikki kodni aralashtirmaslik API mijozi uchun muhim."
      },
      {
        type: "code",
        title: "rack_test.rb",
        code: r`require "sinatra/base"
require "rack/test"

class App < Sinatra::Base
  get "/holat" do
    content_type :json
    '{"holat":"ok"}'
  end
end

session = Rack::Test::Session.new(Rack::MockSession.new(App))
session.get "/holat"

puts session.last_response.status
puts session.last_response.body
puts session.last_response.content_type`,
        output: `200
{"holat":"ok"}
application/json`
      },
      {
        type: "p",
        html: "<code>Rack::Test</code> cookie, header va session'ni saqlab, bir nechta so'rovni bitta sessiyada bajaradi. Bu autentifikatsiya oqimini testlash uchun qulay. Testda har bir endpoint uchun muvaffaqiyatli va xato holatlarini yozing: token yo'q, token noto'g'ri, ruxsat yetishmaydi, noto'g'ri JSON va mavjud bo'lmagan ID."
      },
      {
        type: "code",
        title: "secure_headers.rb",
        code: r`require "sinatra/base"
require "rack/mock"

class App < Sinatra::Base
  before do
    headers(
      "X-Content-Type-Options" => "nosniff",
      "X-Frame-Options" => "DENY"
    )
  end

  get "/" do
    headers["X-Frame-Options"]
  end
end

javob = Rack::MockRequest.new(App).get("/")
puts javob["x-frame-options"]
puts javob.body`,
        output: `DENY
DENY`
      },
      {
        type: "table",
        head: ["Holat", "Kod", "Ma'nosi"],
        rows: [
          ["Token yo'q", "401", "Autentifikatsiya kerak"],
          ["Token noto'g'ri", "401", "Tanilmadi"],
          ["Ruxsat yo'q", "403", "Tanildi, lekin taqiqlangan"],
          ["Resurs yo'q", "404", "Topilmadi"],
          ["Server xatosi", "500", "Kutilmagan nosozlik"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Deploy checklist",
        html: "HTTPS, maxfiy token, xavfsiz cookie, CSP va rate limit — production API uchun minimal talablar. Puma yoki falcon kabi serverni reverse proxy ortida ishlating, log va monitoringni yoqing. <code>APP_TOKEN</code> kabi qiymatlarni git'ga qo'shmang; <code>ENV.fetch</code> bilan majburiy qiling."
      }
    ],
    quiz: [
      {
        q: "401 va 403 orasidagi farq nima?",
        options: [
          "401 autentifikatsiya yo'qligi, 403 ruxsat yo'qligi",
          "401 server xatosi, 403 topilmadi",
          "Ikkalasi bir xil",
          "403 faqat GET uchun"
        ],
        answer: 0,
        explain: "401 foydalanuvchi tanilmaganini, 403 tanilgan lekin ruxsati yo'qligini bildiradi."
      },
      {
        q: "Bearer token qaysi header'da yuboriladi?",
        options: [
          "Authorization",
          "Content-Type",
          "X-Token",
          "Cookie"
        ],
        answer: 0,
        explain: "Authorization: Bearer <token> standart usul hisoblanadi."
      },
      {
        q: "Rack::Test qanday afzallik beradi?",
        options: [
          "So'rovlar orasida cookie va sessionni saqlaydi",
          "Real serverni ishga tushiradi",
          "Faqat HTTPS bilan ishlaydi",
          "Ma'lumotlar bazasini yaratadi"
        ],
        answer: 0,
        explain: "Rack::Test sessiyasi cookie va header holatini saqlab, oqimlarni test qilish imkonini beradi."
      }
    ]
  }
];
