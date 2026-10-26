const r = String.raw;

module.exports = [
  {
    id: 80,
    title: "SQLite: SQL, prepared statement va transaction",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "SQLite — bitta faylda ishlaydigan, o'rnatish talab qilmaydigan relyatsion baza. Prototiplar, kichik ilovalar va testlar uchun juda qulay. Ruby'da <code>sqlite3</code> gem <code>SQLite3::Database</code> obyektini beradi. SQL'ni to'g'ridan-to'g'ri yozish baza ishlashini tushunish uchun yaxshi boshlanish, keyin ORM'ga o'tish osonlashadi."
      },
      {
        type: "code",
        title: "sqlite_asos.rb",
        code: r`require "sqlite3"

db = SQLite3::Database.new(":memory:")
db.execute_batch(<<~SQL)
  CREATE TABLE kitoblar (id INTEGER PRIMARY KEY, nom TEXT, narx INTEGER);
  INSERT INTO kitoblar (nom, narx) VALUES ('Ruby', 120000);
  INSERT INTO kitoblar (nom, narx) VALUES ('SQL', 90000);
SQL

qatorlar = db.execute("SELECT nom, narx FROM kitoblar ORDER BY narx DESC")
puts qatorlar.inspect
puts db.get_first_value("SELECT COUNT(*) FROM kitoblar")

db.close`,
        output: `[["Ruby", 120000], ["SQL", 90000]]
2`
      },
      {
        type: "p",
        html: "<code>db.execute</code> SELECT uchun qatorlar massivini, INSERT/UPDATE uchun bo'sh massiv qaytaradi. <code>get_first_value</code> bitta skalyar qiymatni oladi. <code>:memory:</code> bazasi jarayon tugagach yo'qoladi — testlar uchun ideal. Haqiqiy fayl uchun <code>SQLite3::Database.new(\"app.db\")</code> yetarli, lekin bir vaqtda yozuvchilar soni cheklanganini yodda tuting."
      },
      {
        type: "code",
        title: "prepared.rb",
        code: r`require "sqlite3"

db = SQLite3::Database.new(":memory:")
db.execute("CREATE TABLE kitoblar (id INTEGER PRIMARY KEY, nom TEXT UNIQUE, narx INTEGER)")

db.transaction do
  db.execute("INSERT INTO kitoblar (nom, narx) VALUES (?, ?)", ["Ruby", 120000])
  db.execute("INSERT INTO kitoblar (nom, narx) VALUES (?, ?)", ["SQL", 90000])
end

db.execute("UPDATE kitoblar SET narx = narx + 10000 WHERE nom = ?", ["SQL"])
puts db.get_first_value("SELECT narx FROM kitoblar WHERE nom = ?", ["SQL"])

begin
  db.execute("INSERT INTO kitoblar (nom, narx) VALUES (?, ?)", ["Ruby", 1])
rescue SQLite3::ConstraintException
  puts "takroriy nom"
end

db.close`,
        output: `100000
takroriy nom`
      },
      {
        type: "p",
        html: "<code>?</code> placeholder'lari qiymatlarni xavfsiz bog'laydi va SQL injection'ni oldini oladi. Qiymatlarni string interpolyatsiya bilan SQL ga qo'shish hech qachon to'g'ri emas. <code>db.transaction</code> bir nechta amalni atomar qiladi: blok ichida istisno ko'tarilsa, barcha o'zgarishlar bekor qilinadi. <code>UNIQUE</code> cheklovi esa takroriy nomni bazaning o'zi rad etishini ta'minlaydi."
      },
      {
        type: "code",
        title: "rollback.rb",
        code: r`require "sqlite3"

db = SQLite3::Database.new(":memory:")
db.execute("CREATE TABLE kitoblar (id INTEGER PRIMARY KEY, nom TEXT)")

begin
  db.transaction do
    db.execute("INSERT INTO kitoblar (nom) VALUES (?)", ["Ruby"])
    raise "bekor qilamiz"
  end
rescue RuntimeError
  puts "rollback"
end

puts db.get_first_value("SELECT COUNT(*) FROM kitoblar")
db.close`,
        output: `rollback
0`
      },
      {
        type: "table",
        head: ["Metod", "Vazifasi"],
        rows: [
          ["<code>execute</code>", "SQL bajaradi"],
          ["<code>get_first_value</code>", "Bitta qiymat qaytaradi"],
          ["<code>execute_batch</code>", "Ko'p SQL buyrug'ini bajaradi"],
          ["<code>transaction</code>", "Atomar blok"],
          ["<code>prepare</code>", "Qayta ishlatiladigan statement"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "SQLite sozlamalari",
        html: "Ko'p o'qish va yozish uchun <code>PRAGMA journal_mode = WAL</code> yoqiladi. <code>busy_timeout</code> qulf kutish vaqtini belgilaydi. Katta jadvalda <code>WHERE</code> ustunlariga index qo'ying, lekin har bir ustunga emas — index yozuvni sekinlashtiradi va joy egallaydi."
      }
    ],
    quiz: [
      {
        q: "SQLite3::Database#execute SELECT uchun nimani qaytaradi?",
        options: [
          "Bitta satr",
          "Qatorlar massivini",
          "Faqat son",
          "SQL matnini"
        ],
        answer: 1,
        explain: "execute SELECT natijasini massivlar massivi sifatida qaytaradi."
      },
      {
        q: "SQL so'rovida ? placeholder nima uchun ishlatiladi?",
        options: [
          "Qiymatlarni xavfsiz bog'lash uchun",
          "Jadval nomini o'zgartirish uchun",
          "SQL ni tezlashtirish uchun",
          "Faqat sonlarni qabul qilish uchun"
        ],
        answer: 0,
        explain: "Placeholder qiymatlarni ajratib, SQL injection va quoting xatolarini oldini oladi."
      },
      {
        q: "transaction blokida istisno ko'tarilsa nima bo'ladi?",
        options: [
          "Barcha o'zgarishlar saqlanadi",
          "Tranzaksiya rollback qilinadi",
          "Faqat oxirgi amal saqlanadi",
          "Baza yopiladi"
        ],
        answer: 1,
        explain: "Istisno tranzaksiyani bekor qiladi va blok boshidagi holatga qaytaradi."
      }
    ]
  },
  {
    id: 81,
    title: "Sequel: dataset va migratsiyalar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Sequel — yengil va kuchli ORM. U ActiveRecord'dan mustaqil, SQL'ga yaqin API beradi va dataset'lar orqali so'rovlarni zanjirga ulash imkonini yaratadi. Model qatlami ixtiyoriy: kichik ilovada <code>DB[:kitoblar]</code> bilan ishlash kifoya. Migratsiyalar esa versiyalangan schema o'zgarishlarini beradi."
      },
      {
        type: "code",
        title: "sequel_dataset.rb",
        code: r`require "sequel"

DB = Sequel.sqlite

DB.create_table(:kitoblar) do
  primary_key :id
  String :nom, null: false
  Integer :narx
end

kitoblar = DB[:kitoblar]
kitoblar.insert(nom: "Ruby", narx: 120000)
kitoblar.insert(nom: "SQL", narx: 90000)

puts kitoblar.order(:narx).select_map(:nom).inspect
puts kitoblar.where { narx > 100000 }.count`,
        output: `["SQL", "Ruby"]
1`
      },
      {
        type: "p",
        html: "<code>DB[:kitoblar]</code> — dataset: hali bajarilmagan so'rov. <code>where</code>, <code>order</code> va <code>select_map</code> uni yanada aniqlashtiradi. Dataset immutable: har bir metod yangi dataset qaytaradi, shuning uchun uni xavfsiz qayta ishlatish mumkin. <code>select_map(:nom)</code> bitta ustun qiymatlarini massiv qilib beradi, ortiqcha obyekt yaratmaydi."
      },
      {
        type: "code",
        title: "sequel_join.rb",
        code: r`require "sequel"

DB = Sequel.sqlite

DB.create_table(:mualliflar) do
  primary_key :id
  String :ism
end

DB.create_table(:kitoblar) do
  primary_key :id
  String :nom
  foreign_key :muallif_id, :mualliflar
end

aziza = DB[:mualliflar].insert(ism: "Aziza")
bek = DB[:mualliflar].insert(ism: "Bek")
DB[:kitoblar].insert(nom: "Ruby", muallif_id: aziza)
DB[:kitoblar].insert(nom: "SQL", muallif_id: bek)

natija = DB[:kitoblar]
  .join(:mualliflar, id: :muallif_id)
  .select(:nom, :ism)
  .order(:nom)
  .map { |qator| [qator[:nom], qator[:ism]] }

puts natija.inspect`,
        output: `[["Ruby", "Aziza"], ["SQL", "Bek"]]`
      },
      {
        type: "p",
        html: "Sequel join'da ustun nomlarini hash bilan bog'laydi: <code>id: :muallif_id</code> — <code>mualliflar.id = kitoblar.muallif_id</code>. Natija oddiy Hash qatorlari bo'lgani uchun ularni massivga aylantirib chiqarish oson. Katta natijada <code>each</code> bilan oqimda ishlash va <code>select</code> da faqat kerakli ustunlarni olish xotirani tejaydi."
      },
      {
        type: "code",
        title: "sequel_migration.rb",
        code: r`require "sequel"

DB = Sequel.sqlite

Sequel.migration do
  change do
    create_table(:mualliflar) do
      primary_key :id
      String :ism, null: false
    end

    create_table(:kitoblar) do
      primary_key :id
      String :nom, null: false
      Integer :narx
      foreign_key :muallif_id, :mualliflar, on_delete: :cascade
      index :nom
    end
  end
end

puts DB.table_exists?(:kitoblar)
puts DB[:kitoblar].columns.sort.inspect`,
        output: `true
[:id, :muallif_id, :narx, :nom]`
      },
      {
        type: "table",
        head: ["Tushuncha", "Sequel", "ActiveRecord"],
        rows: [
          ["So'rov", "Dataset zanjiri", "Model scope"],
          ["Schema", "Sequel.migration", "ActiveRecord::Migration"],
          ["Yengillik", "Yuqori", "Ko'proq integratsiya"],
          ["Rails bilan", "Mustaqil", "O'rnatilgan"]
        ]
      },
      {
        type: "note",
        variant: "tip",
        title: "Connection pool",
        html: "Ko'p threadli ilovada har bir thread uchun alohida ulanish kerak. Sequel <code>max_connections</code> bilan pool beradi; ulanishni uzoq ushlab turmang. SQLite'da yozuvchilar soni cheklangan, shuning uchun katta yuklamada PostgreSQL yoki MySQL ga o'tish vaqti keladi."
      }
    ],
    quiz: [
      {
        q: "Sequel da DB[:kitoblar] nimani qaytaradi?",
        options: [
          "Bajarilgan so'rov natijasini",
          "Dataset obyektini",
          "Jadval schema'sini",
          "Faqat jadval nomini"
        ],
        answer: 1,
        explain: "DB[:kitoblar] lazy dataset qaytaradi; so'rov all, each yoki select_map da bajariladi."
      },
      {
        q: "Sequel migration da change bloki qanday afzallik beradi?",
        options: [
          "Up va down ni avtomatik aniqlaydi",
          "Faqat up ni bajaradi",
          "SQL yozishni taqiqlaydi",
          "Jadvalni o'chiradi"
        ],
        answer: 0,
        explain: "change reversibel operatsiyalar uchun up va down yo'nalishini avtomatik yaratadi."
      },
      {
        q: "Dataset metodlari (where, order) qanday xususiyatga ega?",
        options: [
          "Yangi dataset qaytaradi, aslini o'zgartirmaydi",
          "Bazani darhol o'zgartiradi",
          "Faqat bitta marta ishlaydi",
          "Threadni bloklaydi"
        ],
        answer: 0,
        explain: "Dataset immutable; har bir chaqiruv yangi zanjir qaytaradi."
      }
    ]
  },
  {
    id: 82,
    title: "ActiveRecord'ni Rails'siz ishlatish",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "ActiveRecord'ni faqat Rails ichida emas, oddiy Ruby skriptida ham ishlatish mumkin. Buning uchun <code>active_record</code> gem, <code>establish_connection</code> va schema kerak. Bu imkoniyat migratsiya skriptlari, ma'lumot importi va kichik xizmatlar uchun foydali. Model validatsiyalari, scope'lar va association'lar Rails'siz ham to'liq ishlaydi."
      },
      {
        type: "code",
        title: "ar_asos.rb",
        code: r`require "active_record"

ActiveRecord::Base.establish_connection(
  adapter: "sqlite3",
  database: ":memory:"
)

ActiveRecord::Schema.define do
  create_table :kitoblar do |t|
    t.string :nom
    t.integer :narx
    t.timestamps
  end
end

class Kitob < ActiveRecord::Base
end

Kitob.create!(nom: "Ruby", narx: 120000)
Kitob.create!(nom: "SQL", narx: 90000)

puts Kitob.count
puts Kitob.order(:narx).pluck(:nom).inspect
puts Kitob.find_by(nom: "Ruby").narx`,
        output: `2
["SQL", "Ruby"]
120000`
      },
      {
        type: "p",
        html: "<code>establish_connection</code> bazaga ulanishni sozlaydi; <code>:memory:</code> SQLite test uchun qulay. <code>ActiveRecord::Schema.define</code> jadval yaratadi, model esa jadval nomini klass nomidan avtomatik hosil qiladi (<code>Kitob</code> → <code>kitoblar</code>). <code>pluck</code> faqat kerakli ustunni oladi va obyekt yaratmaydi, shuning uchun katta jadvalda tez."
      },
      {
        type: "code",
        title: "ar_validatsiya.rb",
        code: r`require "active_record"

ActiveRecord::Base.establish_connection(adapter: "sqlite3", database: ":memory:")
ActiveRecord::Schema.define do
  create_table :kitoblar do |t|
    t.string :nom
    t.integer :narx
  end
end

class Kitob < ActiveRecord::Base
  validates :nom, presence: true
  scope :qimmat, -> { where("narx > ?", 100000) }
end

Kitob.create!(nom: "Ruby", narx: 120000)

begin
  Kitob.create!(nom: "", narx: 1)
rescue ActiveRecord::RecordInvalid => e
  puts e.class
end

puts Kitob.qimmat.pluck(:nom).inspect

kitob = Kitob.find_by(nom: "Ruby")
kitob.update!(narx: 115000)
puts kitob.narx

kitob.destroy
puts Kitob.count`,
        output: `ActiveRecord::RecordInvalid
["Ruby"]
115000
0`
      },
      {
        type: "p",
        html: "<code>validates</code> model darajasida tekshiradi, <code>create!</code> esa xato bo'lsa <code>RecordInvalid</code> ko'taradi. <code>scope</code> qayta ishlatiladigan so'rov bo'lagi. <code>update!</code> va <code>destroy</code> darhol SQL bajaradi, lekin bir nechta amalni atomar qilish uchun <code>transaction</code> kerak. Rails'siz ishlaganda migratsiyalarni qo'lda yoki <code>ActiveRecord::Migration</code> bilan boshqarish mumkin."
      },
      {
        type: "table",
        head: ["Metod", "Vazifasi"],
        rows: [
          ["<code>create!</code>", "Yaratadi yoki xato ko'taradi"],
          ["<code>find_by</code>", "Birinchi mos yozuv"],
          ["<code>pluck</code>", "Ustun qiymatlari massivi"],
          ["<code>update!</code>", "Yozuvni yangilaydi"],
          ["<code>destroy</code>", "Yozuvni o'chiradi"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Connection va thread",
        html: "ActiveRecord connection'lari thread-safe pool orqali beriladi, lekin thread tugaganda ulanishni qaytarish kerak. Rails buni avtomatik qiladi; mustaqil skriptda <code>ActiveRecord::Base.connection_pool.with_connection</code> ishlatiladi. Uzoq yashovchi thread'da ulanishni cheksiz ushlab turmang."
      }
    ],
    quiz: [
      {
        q: "ActiveRecord'ni Rails'siz ishlatish uchun birinchi qadam nima?",
        options: [
          "establish_connection bilan bazaga ulanish",
          "rails new buyrug'i",
          "ERB shablon yaratish",
          "Puma serverni ishga tushirish"
        ],
        answer: 0,
        explain: "Avval active_record yuklanadi va establish_connection orqali baza ulanishi sozlanadi."
      },
      {
        q: "pluck(:nom) qanday natija beradi?",
        options: [
          "Model obyektlari massivi",
          "Nom ustuni qiymatlari massivi",
          "Bitta string",
          "SQL so'rovi matni"
        ],
        answer: 1,
        explain: "pluck faqat ko'rsatilgan ustun qiymatlarini massiv qilib qaytaradi."
      },
      {
        q: "create! validatsiya xatosida nima qiladi?",
        options: [
          "false qaytaradi",
          "RecordInvalid ko'taradi",
          "Yozuvni majburan saqlaydi",
          "nil qaytaradi"
        ],
        answer: 1,
        explain: "Bang metod validatsiya muvaffaqiyatsiz bo'lsa ActiveRecord::RecordInvalid ko'taradi."
      }
    ]
  },
  {
    id: 83,
    title: "Tranzaksiya, locking va N+1",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Tranzaksiya bir nechta baza amalini yagona atomar birlik qiladi: yoki hammasi saqlanadi, yoki hech biri. ActiveRecord'da <code>transaction</code> bloki istisno ko'tarilsa rollback qiladi. Ko'p foydalanuvchi bir yozuvni bir vaqtda o'zgartirsa, <strong>locking</strong> kerak bo'ladi. <strong>N+1</strong> esa association'larni har bir yozuv uchun alohida yuklashdan kelib chiqadigan unumdorlik muammosi."
      },
      {
        type: "code",
        title: "rollback.rb",
        code: r`require "active_record"

ActiveRecord::Base.establish_connection(adapter: "sqlite3", database: ":memory:")
ActiveRecord::Schema.define do
  create_table :hisoblar do |t|
    t.integer :balans, default: 0
  end
end

class Hisob < ActiveRecord::Base
end

Hisob.create!(balans: 100)

begin
  ActiveRecord::Base.transaction do
    hisob = Hisob.first
    hisob.update!(balans: hisob.balans - 30)
    raise "xato"
  end
rescue RuntimeError
  puts "rollback"
end

puts Hisob.first.balans`,
        output: `rollback
100`
      },
      {
        type: "p",
        html: "<code>transaction</code> blokidagi istisno butun blokni bekor qiladi, lekin buni faqat baza darajasida qiladi — fayl yozish yoki tashqi API kabi yon ta'sirlar qaytmaydi. Shuning uchun tranzaksiyani iloji boricha qisqa va faqat baza amallari bilan cheklang. <code>update!</code> xato ko'taradi, <code>update</code> esa <code>false</code> qaytaradi — tranzaksiyada bang variant ishonchliroq."
      },
      {
        type: "code",
        title: "with_lock.rb",
        code: r`require "active_record"

ActiveRecord::Base.establish_connection(adapter: "sqlite3", database: ":memory:")
ActiveRecord::Schema.define do
  create_table :hisoblar do |t|
    t.integer :balans, default: 0
  end
end

class Hisob < ActiveRecord::Base
end

hisob = Hisob.create!(balans: 100)

hisob.with_lock do
  hisob.update!(balans: hisob.balans + 50)
end

puts hisob.reload.balans`,
        output: `150`
      },
      {
        type: "p",
        html: "<code>with_lock</code> tranzaksiya ochadi va yozuvni <code>SELECT ... FOR UPDATE</code> bilan qulflaydi. SQLite'da bu butun bazani qulflashga yaqin, PostgreSQL'da esa qator darajasida ishlaydi. Qulfni uzoq ushlash deadlock va timeout'ga olib keladi: foydalanuvchi kiritishini kutish, tarmoq so'rovi yoki sekin hisob-kitobni qulf ichida qilmang."
      },
      {
        type: "code",
        title: "includes.rb",
        code: r`require "active_record"

ActiveRecord::Base.establish_connection(adapter: "sqlite3", database: ":memory:")
ActiveRecord::Schema.define do
  create_table :mualliflar do |t|
    t.string :ism
  end

  create_table :kitoblar do |t|
    t.string :nom
    t.integer :muallif_id
  end
end

class Muallif < ActiveRecord::Base
  has_many :kitoblar
end

class Kitob < ActiveRecord::Base
  belongs_to :muallif
end

aziza = Muallif.create!(ism: "Aziza")
bek = Muallif.create!(ism: "Bek")
Kitob.create!(nom: "Ruby", muallif: aziza)
Kitob.create!(nom: "SQL", muallif: bek)

Muallif.includes(:kitoblar).order(:ism).each do |muallif|
  puts "#{muallif.ism}: #{muallif.kitoblar.map(&:nom).join(", ")}"
end`,
        output: `Aziza: Ruby
Bek: SQL`
      },
      {
        type: "table",
        head: ["Muammo", "Yechim"],
        rows: [
          ["N+1 so'rov", "<code>includes</code> yoki <code>preload</code>"],
          ["Bir vaqtda o'zgartirish", "<code>with_lock</code> / <code>lock!</code>"],
          ["Ko'p yozuv", "<code>update_all</code>, <code>find_each</code>"],
          ["Takroriy count", "counter cache"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Lock tartibi",
        html: "Ikki tranzaksiya ikki qatorni turli tartibda qulflasa, deadlock yuzaga keladi. Qatorlarni har doim bir xil tartibda (masalan, ID bo'yicha) qulflang. Deadlock'ni ilova darajasida qayta urinish bilan boshqaring, lekin cheksiz retry yozmang."
      }
    ],
    quiz: [
      {
        q: "ActiveRecord transaction blokida istisno ko'tarilsa nima bo'ladi?",
        options: [
          "Barcha o'zgarishlar rollback qilinadi",
          "Faqat birinchi o'zgarish saqlanadi",
          "Tranzaksiya avtomatik commit bo'ladi",
          "Baza o'chiriladi"
        ],
        answer: 0,
        explain: "Istisno tranzaksiyani bekor qiladi va barcha baza o'zgarishlari qaytariladi."
      },
      {
        q: "with_lock nima qiladi?",
        options: [
          "Yozuvni tranzaksiya ichida qulflaydi",
          "Butun jadvalni o'chiradi",
          "Faqat o'qish uchun ruxsat beradi",
          "Yangi connection ochadi"
        ],
        answer: 0,
        explain: "with_lock tranzaksiya ochib, yozuvni pessimistic lock bilan qulflaydi."
      },
      {
        q: "N+1 muammosini kamaytirish uchun qaysi metod ishlatiladi?",
        options: [
          "includes",
          "destroy_all",
          "update_all",
          "find_each"
        ],
        answer: 0,
        explain: "includes association'larni oldindan yuklab, har bir yozuv uchun alohida so'rovni oldini oladi."
      }
    ]
  },
  {
    id: 84,
    title: "Migratsiyalar va schema dizayni",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Migratsiya — schema o'zgarishini versiyalangan fayl sifatida saqlash. U jamoaga bir xil bazani qurish, deploy paytida o'zgarishlarni qo'llash va orqaga qaytarish imkonini beradi. ActiveRecord migratsiyalarida <code>change</code> metodi ko'p operatsiyalar uchun avtomatik <code>down</code> yaratadi. Murakkab o'zgarishlarda <code>up</code>/<code>down</code> yoki <code>reversible</code> yoziladi."
      },
      {
        type: "code",
        title: "migration_up.rb",
        code: r`require "active_record"

ActiveRecord::Base.establish_connection(adapter: "sqlite3", database: ":memory:")
ActiveRecord::Migration.verbose = false

class CreateKitoblar < ActiveRecord::Migration[7.0]
  def change
    create_table :kitoblar do |t|
      t.string :nom, null: false
      t.integer :narx
      t.timestamps
    end

    add_index :kitoblar, :nom, unique: true
  end
end

CreateKitoblar.new.migrate(:up)

ulanish = ActiveRecord::Base.connection
puts ulanish.table_exists?(:kitoblar)
puts ulanish.indexes(:kitoblar).map(&:columns).inspect`,
        output: `true
[["nom"]]`
      },
      {
        type: "p",
        html: "<code>t.string :nom, null: false</code> bazada NOT NULL cheklovini yaratadi. <code>add_index ... unique: true</code> takroriy nomni bazaning o'zi rad etishini ta'minlaydi — bu ilova validatsiyasidan ko'ra kuchliroq kafolat. <code>t.timestamps</code> <code>created_at</code> va <code>updated_at</code> ustunlarini qo'shadi. Migratsiya versiyasi <code>[7.0]</code> ActiveRecord API mosligini bildiradi."
      },
      {
        type: "code",
        title: "migration_down.rb",
        code: r`require "active_record"

ActiveRecord::Base.establish_connection(adapter: "sqlite3", database: ":memory:")
ActiveRecord::Migration.verbose = false

class CreateKitoblar < ActiveRecord::Migration[7.0]
  def change
    create_table :kitoblar do |t|
      t.string :nom
      t.integer :narx
    end
  end
end

migratsiya = CreateKitoblar.new
migratsiya.migrate(:up)
puts ActiveRecord::Base.connection.table_exists?(:kitoblar)

migratsiya.migrate(:down)
puts ActiveRecord::Base.connection.table_exists?(:kitoblar)`,
        output: `true
false`
      },
      {
        type: "p",
        html: "<code>change</code> dagi <code>create_table</code> reversibel: <code>down</code> jadvalni o'chiradi. Lekin <code>execute(\"UPDATE ...\")</code> kabi SQL yoki ma'lumot o'zgarishi avtomatik qaytarilmaydi — bunday joyda <code>reversible</code> yoki aniq <code>up</code>/<code>down</code> kerak. Migratsiyani production'da qo'llashdan oldin staging'da sinab, backup va rollback rejasini tayyorlang."
      },
      {
        type: "code",
        title: "add_column.rb",
        code: r`require "active_record"

ActiveRecord::Base.establish_connection(adapter: "sqlite3", database: ":memory:")
ActiveRecord::Migration.verbose = false

class CreateKitoblar < ActiveRecord::Migration[7.0]
  def change
    create_table :kitoblar do |t|
      t.string :nom
    end
  end
end

class AddJanr < ActiveRecord::Migration[7.0]
  def change
    add_column :kitoblar, :janr, :string, default: "umumiy", null: false
    add_index :kitoblar, :janr
  end
end

CreateKitoblar.new.migrate(:up)
AddJanr.new.migrate(:up)

ulanish = ActiveRecord::Base.connection
puts ulanish.column_exists?(:kitoblar, :janr)
puts ulanish.indexes(:kitoblar).map(&:columns).inspect`,
        output: `true
[["janr"]]`
      },
      {
        type: "table",
        head: ["Amal", "Reversibel?"],
        rows: [
          ["<code>create_table</code>", "Ha"],
          ["<code>add_column</code>", "Ha"],
          ["<code>add_index</code>", "Ha"],
          ["<code>execute</code>", "Yo'q, qo'lda"],
          ["<code>change_column</code>", "Ko'pincha yo'q"]
        ]
      },
      {
        type: "note",
        variant: "warning",
        title: "Zero-downtime migratsiya",
        html: "Katta jadvalga index qo'shish yozuvni bloklashi mumkin; PostgreSQL'da <code>algorithm: :concurrently</code> ishlatiladi. Ustunni darhol <code>null: false</code> qilib qo'shish eski kodni sindirishi mumkin — avval nullable qo'shing, ma'lumotni to'ldiring, keyin cheklovni qo'llang. <code>strong_migrations</code> gem xavfli amallarni oldindan ogohlantiradi."
      }
    ],
    quiz: [
      {
        q: "ActiveRecord migration change metodi qanday afzallik beradi?",
        options: [
          "Ko'p amallar uchun down ni avtomatik yaratadi",
          "Faqat up ni bajaradi",
          "Migratsiyani butunlay o'chiradi",
          "Bazani avtomatik tozalaydi"
        ],
        answer: 0,
        explain: "change reversibel operatsiyalar uchun up va down yo'nalishini o'zi aniqlaydi."
      },
      {
        q: "add_index :kitoblar, :nom, unique: true nimani kafolatlaydi?",
        options: [
          "Nom takrorlanmasligini bazada ta'minlaydi",
          "Nomni ixtiyoriy qiladi",
          "Jadvalni o'chiradi",
          "Faqat tez o'qishni"
        ],
        answer: 0,
        explain: "Unique index bir xil nomli ikkinchi yozuvni bazada rad etadi."
      },
      {
        q: "Qaysi migratsiya amali avtomatik rollback qilinmaydi?",
        options: [
          "create_table",
          "add_column",
          "execute bilan yozilgan SQL",
          "add_index"
        ],
        answer: 2,
        explain: "Xom SQL uchun down yo'nalishi avtomatik ma'lum emas; reversible yoki up/down kerak."
      }
    ]
  }
];
