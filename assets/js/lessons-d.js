/* Python lessons 22–31 — Ilg'or mavzular, amaliyot va yakuniy imtihon */
window.PYTHON_LESSONS.push(
  {
    id: 22,
    title: "Comprehension va lambda",
    desc: "Ro'yxat va lug'atlarni ixcham yaratish, kichik funksiyalar bilan saralash.",
    minutes: 13,
    blocks: [
      {
        type: "p",
        html: "Oldingi darslarda ro'yxatlarni tsikl bilan to'ldirishni o'rgandik. Python'da buning ixchamroq usuli bor: <strong>comprehension</strong> — bir qator ichida ro'yxat, lug'at yoki to'plam yaratish usuli.",
      },
      { type: "h", html: "Ro'yxat comprehension" },
      {
        type: "p",
        html: "Uning tuzilishi: <code>[ifoda for element in iterable if shart]</code>. <code>for</code> qismi har bir elementni oladi, <code>if</code> qismi esa ixtiyoriy filtr vazifasini bajaradi.",
      },
      {
        type: "code",
        title: "comprehension.py",
        code: `kvadratlar = [n ** 2 for n in range(1, 6)]
juftlar = [n for n in range(1, 11) if n % 2 == 0]

print(kvadratlar)
print(juftlar)`,
        output: `[1, 4, 9, 16, 25]
[2, 4, 6, 8, 10]`,
      },
      {
        type: "note",
        variant: "info",
        title: "Oson o'qish qoidasi",
        html: "Comprehension oddiy va qisqa bo'lsa foydali. Ichida bir nechta shart va murakkab mantiq paydo bo'lsa, oddiy <code>for</code> tsikli tushunarliroq bo'ladi. Maqsad — kodni iloji boricha qisqartirish emas, aniq yozish.",
      },
      { type: "h", html: "Lug'at comprehension" },
      {
        type: "code",
        title: "lugat.py",
        code: `ismlar = ["Ali", "Aziza", "Bek"]
uzunliklar = {ism: len(ism) for ism in ismlar}

print(uzunliklar)`,
        output: `{'Ali': 3, 'Aziza': 5, 'Bek': 3}`,
      },
      { type: "h", html: "Lambda funksiyalari" },
      {
        type: "p",
        html: "<code>lambda</code> — nomi bo'lmagan kichik funksiya. U ko'pincha boshqa funksiyaga argument sifatida beriladi. Masalan, <code>sorted()</code> ning <code>key</code> parametriga qaysi qiymat bo'yicha saralashni aytish uchun ishlatiladi.",
      },
      {
        type: "code",
        title: "saralash.py",
        code: `talabalar = [("Aziza", 92), ("Bek", 78), ("Dilnoza", 88)]

tartiblangan = sorted(
    talabalar,
    key=lambda talaba: talaba[1],
    reverse=True,
)

print(tartiblangan)`,
        output: `[('Aziza', 92), ('Dilnoza', 88), ('Bek', 78)]`,
      },
      {
        type: "note",
        variant: "tip",
        title: "lambda qachon ishlatiladi?",
        html: "Bir marta ishlatiladigan qisqa mantiq uchun <code>lambda</code> qulay. Bir nechta qator koddan iborat funksiya kerak bo'lsa, oddiy <code>def</code> yozing — u o'qish va testlash uchun qulayroq.",
      },
    ],
    quiz: [
      {
        q: "[x * 2 for x in range(3)] ifodasining natijasi nima?",
        options: ["[2, 4, 6]", "[0, 2, 4]", "[1, 2, 3]", "[0, 1, 2]"],
        answer: 1,
        explain:
          "range(3) 0, 1, 2 sonlarini beradi. Har biri 2 ga ko'paytirilib, [0, 2, 4] ro'yxati hosil bo'ladi.",
      },
      {
        q: "lambda ifodasining asosiy vazifasi nima?",
        options: [
          "Katta dasturni bir necha faylga bo'lish",
          "Nomsiz kichik funksiya yaratish",
          "Xatolarni avtomatik tuzatish",
          "Faylni o'qish",
        ],
        answer: 1,
        explain:
          "lambda bitta ifoda asosida ishlaydigan nomsiz funksiya yaratadi. Uni sorted(), map() kabi funksiyalarga argument qilib berish qulay.",
      },
    ],
  },

  {
    id: 23,
    title: "Generatorlar va iteratorlar",
    desc: "yield, next() va katta ma'lumotlarni xotirani tejab qayta ishlash.",
    minutes: 13,
    blocks: [
      {
        type: "p",
        html: "Ba'zan barcha qiymatlarni birdaniga ro'yxatga yig'ish shart emas. Masalan, millionlab sonni qayta ishlashda ro'yxat xotirani egallaydi. <strong>Generator</strong> qiymatlarni kerak bo'lganda birma-bir ishlab beradi.",
      },
      {
        type: "p",
        html: "Oddiy funksiya <code>return</code> bilan tugaydi. Generator esa <code>yield</code> kalit so'zini ishlatadi: u qiymat qaytaradi va funksiya holatini eslab qoladi. Keyingi chaqiruvda ish <code>yield</code>dan keyingi qatordan davom etadi.",
      },
      {
        type: "code",
        title: "generator.py",
        code: `def sanash(n):
    while n > 0:
        yield n
        n -= 1

for son in sanash(3):
    print(son)`,
        output: `3
2
1`,
      },
      { type: "h", html: "next() bilan qiymat olish" },
      {
        type: "p",
        html: "Generator obyekti bir marta ishlatiladi. <code>next()</code> har chaqirilganda navbatdagi qiymatni beradi. Qiymatlar tugasa, <code>StopIteration</code> istisno signali hosil bo'ladi — <code>for</code> tsikli buni o'zi ushlaydi.",
      },
      {
        type: "code",
        title: "juftlar.py",
        code: `def juftlar(limit):
    for son in range(limit):
        if son % 2 == 0:
            yield son

gen = juftlar(6)

print(next(gen))
print(next(gen))
print(sum(juftlar(101)))`,
        output: `0
2
2550`,
      },
      {
        type: "note",
        variant: "tip",
        title: "Generator expression",
        html: "Ro'yxat comprehension'dagi kvadrat qavsni oddiy qavsga almashtirsangiz, generator expression hosil bo'ladi: <code>(n * n for n in range(5))</code>. U ham qiymatlarni birdaniga xotiraga yig'maydi.",
      },
      {
        type: "table",
        head: ["Tushuncha", "Ma'nosi"],
        rows: [
          ["Iterable", "Ichida aylanish mumkin bo'lgan obyekt: ro'yxat, matn, range, dict"],
          ["Iterator", "<code>next()</code> bilan navbatdagi qiymatni beruvchi obyekt"],
          ["Generator", "yield yordamida iterator yaratuvchi funksiya"],
          ["Lazy", "Qiymat faqat kerak bo'lganda hisoblanadi"],
        ],
      },
    ],
    quiz: [
      {
        q: "Generator funksiyasida qiymat qaytarish uchun qaysi kalit so'z ishlatiladi?",
        options: ["return", "break", "yield", "print"],
        answer: 2,
        explain:
          "yield qiymatni qaytaradi, lekin funksiyani tugatmaydi. Keyingi chaqiruvda funksiya yield'dan keyingi qatordan davom etadi.",
      },
      {
        q: "Generatorlarning asosiy afzalligi nimada?",
        options: [
          "Ular har doim ro'yxatdan tezroq yoziladi",
          "Qiymatlarni kerak bo'lganda berib, xotirani tejaydi",
          "Ular faqat sonlar bilan ishlaydi",
          "Ular xatolarni avtomatik ushlaydi",
        ],
        answer: 1,
        explain:
          "Generator barcha qiymatlarni birdaniga xotirada saqlamaydi. Kerak bo'lganda bittadan hisoblab beradi, shuning uchun katta ma'lumotlar bilan ishlashda samarali.",
      },
    ],
  },

  {
    id: 24,
    title: "JSON va API bilan ishlash",
    desc: "Ma'lumotlarni almashish formati va tashqi xizmatlardan javob olish asoslari.",
    minutes: 14,
    blocks: [
      {
        type: "p",
        html: "Dasturlar ko'pincha boshqa dasturlar bilan ma'lumot almashadi. Eng keng tarqalgan formatlardan biri — <strong>JSON</strong> (JavaScript Object Notation). U matn ko'rinishida bo'lib, lug'at va ro'yxatlarga juda o'xshaydi.",
      },
      {
        type: "table",
        head: ["JSON", "Python"],
        rows: [
          ["<code>\"matn\"</code>", "<code>str</code>"],
          ["<code>12</code>, <code>3.14</code>", "<code>int</code>, <code>float</code>"],
          ["<code>true</code> / <code>false</code>", "<code>True</code> / <code>False</code>"],
          ["<code>null</code>", "<code>None</code>"],
          ["<code>{ }</code>", "<code>dict</code>"],
          ["<code>[ ]</code>", "<code>list</code>"],
        ],
      },
      { type: "h", html: "Python obyektini JSON matniga aylantirish" },
      {
        type: "code",
        title: "json_yozish.py",
        code: `import json

talaba = {
    "ism": "Aziza",
    "yosh": 16,
    "kurslar": ["Python"],
}

matn = json.dumps(talaba, ensure_ascii=False)
print(matn)
print(type(matn).__name__)`,
        output: `{"ism": "Aziza", "yosh": 16, "kurslar": ["Python"]}
str`,
      },
      { type: "h", html: "JSON matnini Python obyektiga o'qish" },
      {
        type: "code",
        title: "json_oqish.py",
        code: `import json

javob = '{"ok": true, "natija": [1, 2, 3]}'
data = json.loads(javob)

print(data["natija"][1])
print(data["ok"])`,
        output: `2
True`,
      },
      {
        type: "note",
        variant: "warning",
        title: "JSON va Python farqi",
        html: "JSON'da mantiqiy qiymatlar <code>true</code> va <code>false</code>, bo'sh qiymat esa <code>null</code> deb yoziladi. Python'da ular <code>True</code>, <code>False</code> va <code>None</code>. Shuning uchun matnni qo'lda emas, <code>json.loads()</code> bilan o'qish kerak.",
      },
      { type: "h", html: "API nima?" },
      {
        type: "p",
        html: "<strong>API</strong> — bir dasturning boshqa dasturga xizmat ko'rsatish qoidasi. Veb-API ko'pincha HTTP so'rov qabul qiladi va JSON javob qaytaradi. Masalan, ob-havo sayti API orqali harorat ma'lumotini berishi mumkin.",
      },
      {
        type: "code",
        title: "api_namuna.py",
        code: `from urllib.request import urlopen
import json

with urlopen("https://api.example.com/mahsulotlar") as javob:
    data = json.loads(javob.read())

print(data["natija"][0]["nom"])`,
        runnable: false,
        output: `Kitob`,
      },
      {
        type: "note",
        variant: "info",
        title: "Nega bu kod «Namuna»?",
        html: "API'ga so'rov yuborish uchun internet va ruxsat etilgan manzil kerak. Brauzerdagi mashq muhitida tashqi so'rovlar cheklangan, shuning uchun bu blok faqat namoyish uchun. O'z kompyuteringizda ishlatishda xato yuz bersa, HTTP status kodi va javob matnini tekshiring.",
      },
      {
        type: "ul",
        items: [
          "<code>200</code> — so'rov muvaffaqiyatli.",
          "<code>400</code> — so'rovda xato ma'lumot bor.",
          "<code>401</code> / <code>403</code> — ruxsat yo'q.",
          "<code>404</code> — manzil topilmadi.",
          "<code>500</code> — serverda ichki xato.",
        ],
      },
    ],
    quiz: [
      {
        q: "json.loads() qanday vazifani bajaradi?",
        options: [
          "Python obyektini faylga yozadi",
          "JSON matnini Python obyektiga aylantiradi",
          "Internetga so'rov yuboradi",
          "Ro'yxatni saralaydi",
        ],
        answer: 1,
        explain:
          "loads() JSON formatidagi matnni tahlil qilib, Python lug'ati yoki ro'yxatiga aylantiradi. dumps() esa teskari amalni bajaradi.",
      },
      {
        q: "API so'rovida 404 status kodi nimani bildiradi?",
        options: [
          "So'rov muvaffaqiyatli bajarildi",
          "Ruxsat berilmadi",
          "So'ralgan manzil yoki resurs topilmadi",
          "Server ishlamayapti",
        ],
        answer: 2,
        explain:
          "404 — Not Found. So'ralgan manzil, sahifa yoki resurs serverda mavjud emasligini bildiradi.",
      },
    ],
  },

  {
    id: 25,
    title: "Virtual muhit, pip va loyiha tuzilishi",
    desc: "Kutubxonalarni tartibli o'rnatish va loyihani boshqa kompyuterga ko'chirish.",
    minutes: 12,
    blocks: [
      {
        type: "p",
        html: "Turli loyihalarga turli versiyadagi kutubxonalar kerak bo'lishi mumkin. Agar hammasi bitta global Python muhitiga o'rnatilsa, ular bir-biriga xalal berishi mumkin. <strong>Virtual muhit</strong> (virtual environment) har bir loyiha uchun alohida toza muhit yaratadi.",
      },
      { type: "h", html: "Virtual muhit yaratish" },
      {
        type: "table",
        head: ["Amal", "Windows", "macOS / Linux"],
        rows: [
          ["Muhit yaratish", "<code>python -m venv .venv</code>", "<code>python3 -m venv .venv</code>"],
          ["Faollashtirish", "<code>.venv\\Scripts\\activate</code>", "<code>source .venv/bin/activate</code>"],
          ["Faollikni tekshirish", "<code>where python</code>", "<code>which python</code>"],
          ["Muhitdan chiqish", "<code>deactivate</code>", "<code>deactivate</code>"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Brauzer haqida eslatma",
        html: "Bu darsdagi buyruqlar o'z kompyuteringizdagi terminal uchun. Saytdagi mashq muhiti — tayyor brauzer muhiti, unda <code>venv</code> yaratib bo'lmaydi. Buyruqlarni lokal terminalda sinab ko'ring.",
      },
      { type: "h", html: "pip bilan kutubxona o'rnatish" },
      {
        type: "table",
        head: ["Buyruq", "Vazifasi"],
        rows: [
          ["<code>pip install requests</code>", "Bitta kutubxonani o'rnatadi"],
          ["<code>pip install requests==2.32.3</code>", "Aniq versiyani o'rnatadi"],
          ["<code>pip list</code>", "O'rnatilgan kutubxonalarni ko'rsatadi"],
          ["<code>pip uninstall requests</code>", "Kutubxonani olib tashlaydi"],
          ["<code>pip freeze &gt; requirements.txt</code>", "Versiyalarni faylga yozadi"],
          ["<code>pip install -r requirements.txt</code>", "Fayldagi barcha kutubxonalarni o'rnatadi"],
        ],
      },
      {
        type: "p",
        html: "<code>requirements.txt</code> loyihaning bog'liqliklar ro'yxati. Uni loyiha ildizida saqlang va boshqa kompyuterda avval virtual muhit yaratib, keyin shu fayl orqali o'rnating. Shunda jamoaning barcha a'zolari bir xil versiyalarda ishlaydi.",
      },
      {
        type: "code",
        title: "ixtiyoriy_kutubxona.py",
        code: `try:
    import requests
    print("requests o'rnatilgan")
except ImportError:
    print("Avval: pip install requests")`,
        output: `Avval: pip install requests`,
      },
      { type: "h", html: "Loyiha tuzilishi" },
      {
        type: "ul",
        items: [
          "<code>README.md</code> — loyiha nomi, ishga tushirish va talablar.",
          "<code>requirements.txt</code> — kerakli kutubxonalar ro'yxati.",
          "<code>.venv/</code> — virtual muhit; uni Git'ga qo'shmang.",
          "<code>src/</code> yoki loyiha papkasi — asosiy kod fayllari.",
          "<code>tests/</code> — avtomatik testlar.",
          "<code>.gitignore</code> — vaqtinchalik va maxfiy fayllarni istisno qilish.",
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Muhim odat",
        html: "Loyihani boshlashdan oldin virtual muhit yarating, keyin kutubxonalarni o'rnating. Har safar terminalni qayta ochganda muhitni qayta faollashtirish kerakligini unutmang.",
      },
    ],
    quiz: [
      {
        q: "Virtual muhitning asosiy maqsadi nima?",
        options: [
          "Internet tezligini oshirish",
          "Har bir loyiha kutubxonalarini bir-biridan ajratish",
          "Python kodini avtomatik tarjima qilish",
          "Faqat macOS'da ishlash",
        ],
        answer: 1,
        explain:
          "Virtual muhit har bir loyiha uchun alohida paketlar to'plamini yaratadi. Shunday qilib, turli loyihalarning kutubxona versiyalari bir-biriga ta'sir qilmaydi.",
      },
      {
        q: "requirements.txt fayli qanday ishlatiladi?",
        options: [
          "Python faylini ishga tushirish uchun",
          "Loyiha kutubxonalarini bir buyruq bilan o'rnatish uchun",
          "Kodni rangli ko'rsatish uchun",
          "Faqat test natijalarini saqlash uchun",
        ],
        answer: 1,
        explain:
          "pip install -r requirements.txt buyrug'i faylda yozilgan barcha kutubxonalarni kerakli versiyalarda o'rnatadi.",
      },
    ],
  },

  {
    id: 26,
    title: "OOP chuqurroq: property va dataclass",
    desc: "Xususiyatlarni himoyalash va ma'lumot sinflarini ixcham yaratish.",
    minutes: 15,
    blocks: [
      {
        type: "p",
        html: "Oldingi OOP darsida sinf, obyekt va merosni ko'rdik. Endi obyekt xususiyatlarini <strong>nazorat qilish</strong> va ma'lumotlarni saqlash uchun qulay sinflar yaratishni o'rganamiz.",
      },
      { type: "h", html: "@property — xususiyatni nazorat qilish" },
      {
        type: "p",
        html: "Obyektning balansi hech qachon manfiy bo'lmasligi kerak deylik. Oddiy atributga har kim istalgan qiymatni yozishi mumkin. <code>@property</code> o'qish va yozishni metod orqali boshqarish imkonini beradi, tashqaridan esa u oddiy xususiyatdek ko'rinadi.",
      },
      {
        type: "code",
        title: "hisob.py",
        code: `class Hisob:
    def __init__(self, balans=0):
        self._balans = balans

    @property
    def balans(self):
        return self._balans

    @balans.setter
    def balans(self, qiymat):
        if qiymat < 0:
            raise ValueError("Balans manfiy bo'lmaydi")
        self._balans = qiymat

hisob = Hisob()
hisob.balans = 120
print(hisob.balans)

try:
    hisob.balans = -5
except ValueError as xato:
    print(xato)`,
        output: `120
Balans manfiy bo'lmaydi`,
      },
      {
        type: "note",
        variant: "info",
        title: "Nega _balans?",
        html: "Pastki chiziq bilan boshlangan <code>_balans</code> — ichki xususiyat degan kelishuv belgisi. Tashqaridan unga to'g'ridan-to'g'ri emas, <code>balans</code> property'si orqali murojaat qilish tavsiya etiladi. Python uni majburan taqiqlamaydi, lekin bu jamoa an'anasi.",
      },
      { type: "h", html: "dataclass — ma'lumot sinfi" },
      {
        type: "p",
        html: "Ko'p sinflar faqat bir nechta ma'lumotni saqlash uchun kerak. <code>@dataclass</code> <code>__init__</code>, <code>__repr__</code> va taqqoslash metodlarini avtomatik yaratadi. Kod ancha qisqa va tushunarli bo'ladi.",
      },
      {
        type: "code",
        title: "talaba_dataclass.py",
        code: `from dataclasses import dataclass

@dataclass
class Talaba:
    ism: str
    ball: int = 0

talaba = Talaba("Aziza", 85)
print(talaba)
print(talaba.ism, talaba.ball)`,
        output: `Talaba(ism='Aziza', ball=85)
Aziza 85`,
      },
      {
        type: "table",
        head: ["Metod turi", "Belgisi", "Nima uchun?"],
        rows: [
          ["Oddiy metod", "<code>def metod(self)</code>", "Aniq obyekt ma'lumotlari bilan ishlaydi"],
          ["classmethod", "<code>@classmethod</code>, <code>cls</code>", "Sinfning o'zi bilan ishlaydi, muqobil konstruktor yaratadi"],
          ["staticmethod", "<code>@staticmethod</code>", "Obyektga ham, sinfga ham bog'liq bo'lmagan yordamchi funksiya"],
          ["property", "<code>@property</code>", "Metodni xususiyatdek ishlatadi va nazorat qiladi"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Qaysi usulni tanlash?",
        html: "Oddiy ma'lumot saqlash uchun <code>dataclass</code>, qiymatni tekshirish kerak bo'lsa <code>property</code>, turli formatdan obyekt yaratish kerak bo'lsa <code>classmethod</code> foydali. Ortiqcha murakkablik qo'shishdan oldin eng oddiy yechimni tanlang.",
      },
    ],
    quiz: [
      {
        q: "@property qanday imkoniyat beradi?",
        options: [
          "Metodni xususiyatdek ishlatib, qiymatni tekshirish",
          "Dasturni tezroq ishga tushirish",
          "Barcha xatolarni avtomatik o'chirish",
          "Faqat meros olish",
        ],
        answer: 0,
        explain:
          "@property metodni oddiy xususiyat kabi o'qish imkonini beradi. setter bilan qiymatni yozishdan oldin tekshirish, cheklash yoki o'zgartirish mumkin.",
      },
      {
        q: "@dataclass avtomatik nimalarni yaratadi?",
        options: [
          "Faqat fayl nomini",
          "__init__, __repr__ va taqqoslash metodlarini",
          "Yangi virtual muhitni",
          "Faqat while tsiklini",
        ],
        answer: 1,
        explain:
          "dataclass maydonlar asosida konstruktor va obyektning matnli ko'rinishini kabi standart metodlarni avtomatik yaratadi. Shu sababli kichik ma'lumot sinflari juda qisqa yoziladi.",
      },
    ],
  },

  {
    id: 27,
    title: "Testlash va debugging",
    desc: "assert, test holatlari va xatoni tizimli topish usullari.",
    minutes: 13,
    blocks: [
      {
        type: "p",
        html: "Kod ishlashi ko'rinishi bilan u har doim to'g'ri degani emas. <strong>Test</strong> — kodning kutilgan natija berishini tekshiruvchi avtomatik yoki qo'lda bajariladigan tekshiruv. <strong>Debugging</strong> esa xato sababini topish jarayoni.",
      },
      { type: "h", html: "Xatolarning uch turi" },
      {
        type: "table",
        head: ["Xato turi", "Misol", "Qachon bilinadi?"],
        rows: [
          ["Sintaksis xatosi", "Qavs yoki ikki nuqta yetishmasligi", "Kod ishga tushishidan oldin"],
          ["Ishlash xatosi", "Nolga bo'lish, mavjud bo'lmagan kalit", "Kod bajarilayotganda"],
          ["Mantiqiy xato", "O'rtacha noto'g'ri formulada hisoblanishi", "Natija noto'g'ri chiqqanda"],
        ],
      },
      { type: "h", html: "assert bilan tekshirish" },
      {
        type: "p",
        html: "<code>assert shart, xabar</code> shart bajarilmasa <code>AssertionError</code> beradi. U kichik tekshiruvlar va testlar uchun qulay. Foydalanuvchi ma'lumotini tekshirish uchun esa <code>try/except</code> va aniq <code>ValueError</code> afzal.",
      },
      {
        type: "code",
        title: "testlar.py",
        code: `def yigindi(a, b):
    return a + b

def ortacha(sonlar):
    assert sonlar, "Ro'yxat bo'sh bo'lmasligi kerak"
    return sum(sonlar) / len(sonlar)

assert yigindi(2, 3) == 5
assert ortacha([10, 20, 30]) == 20

print("Barcha testlar o'tdi")`,
        output: `Barcha testlar o'tdi`,
      },
      {
        type: "code",
        title: "xato_test.py",
        code: `def yoshni_tekshir(yosh):
    assert yosh >= 0, "Yosh manfiy bo'lmaydi"
    return yosh

try:
    yoshni_tekshir(-3)
except AssertionError as xato:
    print(xato)`,
        output: `Yosh manfiy bo'lmaydi`,
      },
      { type: "h", html: "Debugging tartibi" },
      {
        type: "ol",
        items: [
          "Xato matnini pastdan yuqoriga o'qing: eng oxirgi qatorda xato turi va sababi bo'ladi.",
          "Traceback'dagi fayl nomi va qator raqamini toping.",
          "Shubhali joyda o'zgaruvchilar qiymatini <code>print()</code> bilan chiqarib ko'ring.",
          "Muammoni eng kichik misolga ajratib, bittadan tekshiring.",
          "Tuzatgandan keyin testni qayta ishga tushiring.",
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Katta loyihalarda",
        html: "Haqiqiy loyihalarda <code>pytest</code> yoki <code>unittest</code> kabi test framework'lari ishlatiladi. Ular ko'p testni avtomatik ishga tushirib, qaysi holat buzilganini aniq ko'rsatadi. Brauzer muhitida <code>pytest</code> o'rnatilmagan bo'lishi mumkin, lekin <code>assert</code> bilan test mantiqini hoziroq mashq qilish mumkin.",
      },
    ],
    quiz: [
      {
        q: "assert shart bajarilmasa qanday xato beradi?",
        options: ["ValueError", "SyntaxError", "AssertionError", "TypeError"],
        answer: 2,
        explain:
          "assert tekshiruvi muvaffaqiyatsiz bo'lsa AssertionError hosil bo'ladi. Xabar berilgan bo'lsa, u xato matnida ko'rinadi.",
      },
      {
        q: "Mantiqiy xatoning o'ziga xos belgisi nima?",
        options: [
          "Kod umuman ishga tushmaydi",
          "Dastur ishlaydi, lekin natija noto'g'ri bo'ladi",
          "Har doim syntax xatosi chiqadi",
          "Faqat internet bo'lmaganda yuz beradi",
        ],
        answer: 1,
        explain:
          "Mantiqiy xatoda dastur to'xtamaydi, lekin hisob-kitob yoki shart noto'g'ri tuzilgani uchun kutilmagan natija chiqadi.",
      },
      {
        q: "Traceback matnida xatoning aniq joyini qaysi ma'lumot ko'rsatadi?",
        options: [
          "Fayl nomi va qator raqami",
          "Faqat dastur nomi",
          "Internet manzili",
          "Foydalanuvchining ismi",
        ],
        answer: 0,
        explain:
          "Traceback odatda fayl nomi, qator raqami va muammoli ifodani ko'rsatadi. Shu ma'lumot orqali xato joyini tez topish mumkin.",
      },
    ],
  },

  {
    id: 28,
    title: "Algoritmlar va Big O asoslari",
    desc: "Qidirish algoritmlari va kod tezligini baholash.",
    minutes: 15,
    blocks: [
      {
        type: "p",
        html: "<strong>Algoritm</strong> — masalani yechishning aniq qadamlar ketma-ketligi. Bir masalani bir necha usulda yechish mumkin. <strong>Big O</strong> belgisi ma'lumot hajmi oshgani sari algoritm qanchalik sekinlashishini baholaydi.",
      },
      { type: "h", html: "Chiziqli qidiruv — O(n)" },
      {
        type: "p",
        html: "Ro'yxat boshidan oxirigacha har bir elementni tekshirish — chiziqli qidiruv. Eng yomon holatda barcha <code>n</code> ta element ko'riladi, shuning uchun murakkablik <code>O(n)</code>.",
      },
      {
        type: "code",
        title: "chiziqli_qidir.py",
        code: `def chiziqli_qidir(sonlar, kerakli):
    for indeks, son in enumerate(sonlar):
        if son == kerakli:
            return indeks
    return -1

sonlar = [4, 8, 15, 16, 23, 42]
print(chiziqli_qidir(sonlar, 15))`,
        output: `2`,
      },
      { type: "h", html: "Ikkilik qidiruv — O(log n)" },
      {
        type: "p",
        html: "Ikkilik qidiruv faqat <strong>saralangan</strong> ro'yxatda ishlaydi. Har qadamda o'rtadagi element tekshiriladi va keraksiz yarmi tashlab yuboriladi. Har safar qidiruv doirasi ikkiga kamayadi, shuning uchun juda tez.",
      },
      {
        type: "code",
        title: "ikkilik_qidir.py",
        code: `def ikkilik_qidir(sonlar, kerakli):
    chap = 0
    ong = len(sonlar) - 1

    while chap <= ong:
        orta = (chap + ong) // 2
        if sonlar[orta] == kerakli:
            return orta
        if sonlar[orta] < kerakli:
            chap = orta + 1
        else:
            ong = orta - 1

    return -1

sonlar = [4, 8, 15, 16, 23, 42]
print(ikkilik_qidir(sonlar, 23))`,
        output: `4`,
      },
      {
        type: "table",
        head: ["Murakkablik", "Ma'nosi", "Misol"],
        rows: [
          ["O(1)", "Ma'lumot hajmiga bog'liq emas", "Ro'yxatdan indeks bo'yicha olish"],
          ["O(log n)", "Har qadamda hajm ikkiga kamayadi", "Ikkilik qidiruv"],
          ["O(n)", "Har bir element bir marta ko'riladi", "Chiziqli qidiruv"],
          ["O(n²)", "Ichma-ich ikkita tsikl", "Oddiy tanlash bo'yicha saralash"],
        ],
      },
      {
        type: "note",
        variant: "info",
        title: "Big O amaliyotda",
        html: "Kichik ro'yxatda farq sezilmasligi mumkin, lekin millionlab yozuvlarda u juda katta bo'ladi. Python'ning <code>sorted()</code> va <code>list.sort()</code> funksiyalari yaxshi optimallashtirilgan. Amalda avval tayyor vositalardan foydalaning, keyin haqiqiy o'lchov bilan optimallashtiring.",
      },
      {
        type: "note",
        variant: "tip",
        title: "Mashq",
        html: "Ikkilik qidiruv kodini o'zgartirib, ro'yxatda mavjud bo'lmagan sonni qidiring. Natija <code>-1</code> bo'lishi kerak. So'ng <code>len(sonlar) * 2</code> kabi kattaroq ro'yxat yaratib, qidiruvlar sonini solishtirib ko'ring.",
      },
    ],
    quiz: [
      {
        q: "Ikkilik qidiruv qanday ro'yxatda ishlaydi?",
        options: [
          "Har qanday tartibsiz ro'yxatda",
          "Faqat saralangan ro'yxatda",
          "Faqat matnlar ro'yxatida",
          "Faqat 10 ta elementdan iborat ro'yxatda",
        ],
        answer: 1,
        explain:
          "Ikkilik qidiruv o'rtadagi qiymatga qarab kerakli yarmini tanlaydi. Bu mantiq faqat elementlar tartiblangan bo'lsa to'g'ri ishlaydi.",
      },
      {
        q: "Millionlab elementli saralangan massivda ikkilik qidiruvning murakkabligi qanday?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 1,
        explain:
          "Har qadamda qidiruv doirasi yarmiga kamayadi. Shu sababli murakkablik O(log n) bo'ladi va millionlab elementda ham qadamlar soni nisbatan kichik qoladi.",
      },
      {
        q: "O(n²) murakkabligi odatda nimani bildiradi?",
        options: [
          "Bitta amal bajarilishini",
          "Ichma-ich ikkita tsikl kabi kvadratik o'sishni",
          "Har qadamda ikkiga bo'linishni",
          "Faqat xotira sarfini",
        ],
        answer: 1,
        explain:
          "n ta element uchun tashqi tsikl ichida yana n ta amal bajarilsa, jami taxminan n*n amal bo'ladi. Bu katta ma'lumotlarda tez sekinlashadi.",
      },
    ],
  },

  {
    id: 29,
    title: "Ma'lumotlar bazasi: sqlite3",
    desc: "Jadval yaratish, ma'lumot yozish va SQL so'rovlari bilan o'qish.",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "Ma'lumotlar ko'payganda ularni fayl yoki ro'yxatda saqlash noqulay bo'ladi. <strong>Ma'lumotlar bazasi</strong> ma'lumotni jadval ko'rinishida saqlaydi, tez qidiradi va bir nechta dastur uchun ishonchli manba bo'ladi.",
      },
      {
        type: "p",
        html: "Python'ning standart kutubxonasida <code>sqlite3</code> moduli bor. SQLite alohida server talab qilmaydi — butun baza bitta faylda yoki xotirada saqlanadi. Kichik loyihalar va prototiplar uchun juda qulay.",
      },
      { type: "h", html: "Jadval yaratish va ma'lumot qo'shish" },
      {
        type: "code",
        title: "baza.py",
        code: `import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()

cur.execute("""
    CREATE TABLE talabalar (
        id INTEGER PRIMARY KEY,
        ism TEXT NOT NULL,
        ball INTEGER NOT NULL
    )
""")

cur.executemany(
    "INSERT INTO talabalar (ism, ball) VALUES (?, ?)",
    [("Aziza", 85), ("Bek", 72), ("Dilnoza", 91)],
)
conn.commit()

cur.execute(
    "SELECT ism, ball FROM talabalar WHERE ball >= ? ORDER BY ball DESC",
    (80,),
)
for qator in cur.fetchall():
    print(qator)

conn.close()`,
        output: `('Dilnoza', 91)
('Aziza', 85)`,
      },
      {
        type: "note",
        variant: "warning",
        title: "Nega ? ishlatiladi?",
        html: "Qiymatlarni SQL matniga to'g'ridan-to'g'ri ulash xavfli: foydalanuvchi kiritgan matn SQL buyrug'ining bir qismiga aylanib qolishi mumkin. <code>?</code> joy egallovchi (placeholder) va alohida parametrlar bu xavfni kamaytiradi. Buni har doim qo'llang.",
      },
      { type: "h", html: "Asosiy SQL buyruqlari" },
      {
        type: "table",
        head: ["Buyruq", "Vazifasi"],
        rows: [
          ["<code>CREATE TABLE</code>", "Yangi jadval yaratadi"],
          ["<code>INSERT INTO</code>", "Jadvalga yangi qator qo'shadi"],
          ["<code>SELECT</code>", "Ma'lumotni o'qiydi"],
          ["<code>UPDATE</code>", "Mavjud qatorni o'zgartiradi"],
          ["<code>DELETE</code>", "Qatorni o'chiradi"],
          ["<code>COMMIT</code>", "O'zgarishlarni saqlaydi"],
        ],
      },
      {
        type: "code",
        title: "yangilash.py",
        code: `import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE vazifalar (id INTEGER PRIMARY KEY, nom TEXT, bajarildi INTEGER)")

cur.execute("INSERT INTO vazifalar (nom, bajarildi) VALUES (?, ?)", ("Darsni o'qish", 0))
cur.execute("INSERT INTO vazifalar (nom, bajarildi) VALUES (?, ?)", ("Mashq qilish", 0))

cur.execute("UPDATE vazifalar SET bajarildi = 1 WHERE nom = ?", ("Darsni o'qish",))
conn.commit()

cur.execute("SELECT nom, bajarildi FROM vazifalar")
for nom, bajarildi in cur.fetchall():
    print(nom, "—", "bajarildi" if bajarildi else "kutilmoqda")

conn.close()`,
        output: `Darsni o'qish — bajarildi
Mashq qilish — kutilmoqda`,
      },
      {
        type: "note",
        variant: "info",
        title: "xato bo'lsa",
        html: "Agar mashq muhitida <code>sqlite3</code> moduli haqida xato chiqsa, bu brauzer muhitining cheklovi bo'lishi mumkin. Kod o'z kompyuteringizdagi Python 3 muhitida ishlaydi. Har qanday holatda SQL mantiqini o'rganish uchun misol va kutilgan natija asos bo'ladi.",
      },
    ],
    quiz: [
      {
        q: "SQLite bazasida ma'lumotni xavfsiz filtrlash uchun nima ishlatiladi?",
        options: [
          "SQL matniga qiymatni to'g'ridan-to'g'ri qo'shish",
          "? placeholder va parametrlar",
          "Faqat print()",
          "Fayl nomini o'zgartirish",
        ],
        answer: 1,
        explain:
          "? joy egallovchi va alohida parametrlar qiymatni SQL kodidan ajratadi. Bu SQL injection xavfini kamaytiradi va iqtiboslar bilan bog'liq xatolarni oldini oladi.",
      },
      {
        q: "sqlite3'da o'zgarishlarni bazaga saqlash uchun qaysi metod kerak?",
        options: ["select()", "commit()", "close()", "print()"],
        answer: 1,
        explain:
          "INSERT, UPDATE yoki DELETE dan keyin conn.commit() chaqiriladi. Aks holda o'zgarishlar saqlanmasligi mumkin.",
      },
      {
        q: "SELECT so'rovining natijasini barcha qatorlari bilan olish uchun odatda qaysi metod ishlatiladi?",
        options: ["fetchall()", "commit()", "execute()", "connect()"],
        answer: 0,
        explain:
          "fetchall() bajarilgan SELECT natijasidagi barcha qatorlarni ro'yxat ko'rinishida qaytaradi. fetchone() bitta qatorni oladi.",
      },
    ],
  },

  {
    id: 30,
    title: "Yakuniy loyiha: vazifalar menejeri",
    desc: "Ro'yxat, lug'at, funksiyalar va tekshiruvlarni birlashtirib mini-ilova yasash.",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Endi kursda o'rgangan narsalarni birlashtirib, kichik <strong>vazifalar menejeri</strong> yasaymiz. U vazifa qo'shadi, vazifani bajarilgan deb belgilaydi va qolganlarini ko'rsatadi. Bu loyiha keyinchalik fayl, baza yoki veb-interfeys bilan kengaytirilishi mumkin.",
      },
      { type: "h", html: "Ma'lumot tuzilishini tanlash" },
      {
        type: "p",
        html: "Har bir vazifani lug'at ko'rinishida saqlaymiz: <code>{\"nom\": ..., \"bajarildi\": ...}</code>. Barcha vazifalar esa ro'yxatda turadi. Bu tuzilma oddiy, o'qish oson va keyinchalik fayl yoki bazaga ko'chirish uchun qulay.",
      },
      {
        type: "code",
        title: "vazifalar.py",
        code: `vazifalar = [
    {"nom": "Python darsini o'qish", "bajarildi": True},
    {"nom": "Amaliyot qilish", "bajarildi": False},
    {"nom": "Mini loyiha yozish", "bajarildi": False},
]


def vazifa_qosh(vazifalar, nom):
    if not nom.strip():
        raise ValueError("Vazifa nomi bo'sh bo'lmasligi kerak")
    vazifalar.append({"nom": nom.strip(), "bajarildi": False})


def bajarish(vazifalar, nom):
    for vazifa in vazifalar:
        if vazifa["nom"] == nom:
            vazifa["bajarildi"] = True
            return True
    return False


def qoldiqlar(vazifalar):
    return [vazifa["nom"] for vazifa in vazifalar if not vazifa["bajarildi"]]


vazifa_qosh(vazifalar, "Testlarni yechish")
bajarish(vazifalar, "Amaliyot qilish")

print("Bajarilmagan vazifalar:")
for nom in qoldiqlar(vazifalar):
    print("-", nom)

print("Jami:", len(vazifalar))`,
        output: `Bajarilmagan vazifalar:
- Mini loyiha yozish
- Testlarni yechish
Jami: 4`,
      },
      { type: "h", html: "Kod nimani o'rgatadi?" },
      {
        type: "ul",
        items: [
          "Ma'lumotlar modelini avval o'ylab, keyin kod yozishni.",
          "Har bir vazifani alohida funksiyaga ajratishni.",
          "Noto'g'ri kiritishni <code>ValueError</code> bilan tekshirishni.",
          "List comprehension bilan kerakli vazifalarni tanlashni.",
          "Natijani foydalanuvchiga tushunarli formatda chiqarishni.",
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Loyihani kengaytiring",
        html: "Keyingi qadamlar: vazifalarni JSON faylga saqlash, bajarilganlarini alohida ko'rsatish, muddat qo'shish, vazifani o'chirish funksiyasi yoki oddiy menyu yasash. Avval bitta kichik o'zgarishni qo'shing, test qiling, keyin davom eting.",
      },
      {
        type: "note",
        variant: "info",
        title: "Keyingi yo'nalish",
        html: "Bu loyihani veb-ilovaga aylantirish uchun HTML, CSS va JavaScript kerak bo'ladi. Agar ma'lumotlar ko'paysa, <code>sqlite3</code> yoki boshqa bazaga o'tish mumkin. Eng muhimi — kichik ishlaydigan loyihadan boshlash va uni bosqichma-bosqich yaxshilash.",
      },
    ],
    quiz: [
      {
        q: "Har bir vazifani qaysi tuzilmada saqlash bu loyihada qulay?",
        options: [
          "Faqat bitta matnda",
          "Nom va bajarildi maydonlari bo'lgan lug'atda",
          "Faqat sonlar ro'yxatida",
          "Alohida o'zgaruvchilar soni cheklanmaganda",
        ],
        answer: 1,
        explain:
          "Lug'at har bir vazifaning nomi va holatini bir joyda saqlaydi. Ro'yxat esa barcha vazifalarni birlashtiradi, shuning uchun qo'shish va filtrlash oson.",
      },
      {
        q: "Bo'sh vazifa nomini qabul qilmaslik uchun kodda nima qilingan?",
        options: [
          "print() chaqirilgan",
          "ValueError ko'tarilgan",
          "tsikl to'xtatilgan",
          "Yangi fayl ochilgan",
        ],
        answer: 1,
        explain:
          "vazifa_qosh() bo'sh matnni tekshiradi va xato signali sifatida ValueError ko'taradi. Bu noto'g'ri ma'lumotning ro'yxatga tushishini oldini oladi.",
      },
    ],
  },

  {
    id: 31,
    title: "Yakuniy imtihon",
    desc: "15 savolda butun Python kursini yakunlang va sertifikat oling.",
    minutes: 25,
    isExam: true,
    blocks: [
      {
        type: "p",
        html: "Kursning yakuniy bosqichiga yetib keldingiz! Endi asoslar, ma'lumot tuzilmalari, funksiyalar, OOP, JSON, generatorlar, testlash, algoritmlar va SQLite bo'yicha bilimingizni sinab ko'rasiz.",
      },
      {
        type: "ul",
        items: [
          "Imtihonda <strong>15 ta savol</strong> bor, har birida bitta to'g'ri javob.",
          "O'tish uchun kamida <strong>12 ta</strong> to'g'ri javob kerak (80%).",
          "Imtihonni istalgancha qayta topshirish mumkin — eng yaxshi natija saqlanadi.",
          "Natija past bo'lsa, kursni boshidan takrorlash tugmasi ko'rinadi.",
          "O'tganingizdan keyin sertifikatni PDF qilib saqlash mumkin.",
        ],
      },
      {
        type: "note",
        variant: "info",
        title: "Imtihon nimani qamrab oladi?",
        html: "O'zgaruvchilar va turlar, shartlar, tsikllar, ro'yxatlar, lug'atlar, funksiyalar, xatolar, fayllar, OOP, JSON va API, virtual muhit, property/dataclass, testlash, algoritmlar murakkabligi va sqlite3.",
      },
      {
        type: "note",
        variant: "tip",
        title: "Maslahat",
        html: "Savollarni diqqat bilan o'qing. Har bir noto'g'ri javobdan keyin izohni o'qing va kerak bo'lsa, tegishli darsga qaytib, amaliyotni takrorlang. Sertifikat faqat haqiqiy mustahkam bilim uchun.",
      },
    ],
    quiz: [],
  }
);
