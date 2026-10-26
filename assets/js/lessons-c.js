/* Python lessons 16–22 — Funksiyalar, OOP, loyiha va imtihon */
window.PYTHON_LESSONS.push(
  {
    id: 16,
    title: "Funksiyalar",
    desc: "Kodni qayta ishlatish uchun funksiya yaratish va chaqirish.",
    minutes: 12,
    blocks: [
      {
        type: "p",
        html: "Funksiya — ma'lum bir vazifani bajaruvchi kod bloki. Uni bir marta yozib, keyin istalgancha chaqirish mumkin. Bu kodni takrorlamaslik va dasturni tartibli saqlash imkonini beradi.",
      },
      {
        type: "p",
        html: "Funksiya <code>def</code> kalit so'zi bilan e'lon qilinadi. Uning nomi, qavs ichida parametrlari va ikki nuqta qo'yiladi. Ichidagi kod esa chekinish bilan yoziladi.",
      },
      {
        type: "code",
        title: "salomlash.py",
        code: `def salomlash(ism):
    print(f"Salom, {ism}!")

salomlash("Aziza")
salomlash("Bek")`,
        output: `Salom, Aziza!
Salom, Bek!`,
      },
      { type: "h", html: "Parametrlar va return" },
      {
        type: "p",
        html: "Funksiya tashqaridan qiymat qabul qilishi (parametr) va natija qaytarishi (<code>return</code>) mumkin. <code>return</code> natijani funksiya chaqirilgan joyga qaytaradi.",
      },
      {
        type: "code",
        title: "yigindi.py",
        code: `def yigindi(a, b):
    return a + b

natija = yigindi(12, 8)

print(natija)
print(yigindi(2.5, 1.5))
print(yigindi(10, 20) * 2)`,
        output: `20
4.0
60`,
      },
      {
        type: "note",
        variant: "info",
        title: "print va return farqi",
        html: "<code>print()</code> faqat ekranga chiqaradi. <code>return</code> esa qiymatni qaytaradi — uni o'zgaruvchiga saqlash, hisoblashda ishlatish mumkin. Deyarli har doim funksiyada <code>print</code> o'rniga <code>return</code> afzal.",
      },
      { type: "h", html: "Standart qiymatlar" },
      {
        type: "p",
        html: "Parametrga oldindan qiymat berish mumkin. Agar chaqiruvda u ko'rsatilmasa, standart qiymat ishlatiladi.",
      },
      {
        type: "code",
        title: "standart.py",
        code: `def salomlash(ism, til="Python"):
    print(f"Salom, {ism}! {til} o'rganamiz.")

salomlash("Ali")
salomlash("Zara", "JavaScript")`,
        output: `Salom, Ali! Python o'rganamiz.
Salom, Zara! JavaScript o'rganamiz.`,
      },
      { type: "h", html: "Bir nechta qiymat qaytarish" },
      {
        type: "p",
        html: "Funksiya kortej ko'rinishida bir nechta qiymat qaytarishi mumkin. Ularni alohida o'zgaruvchilarga ajratib olish qulay.",
      },
      {
        type: "code",
        title: "min_max.py",
        code: `def min_max(sonlar):
    return min(sonlar), max(sonlar)

eng_kichik, eng_katta = min_max([4, 9, 1, 7])

print(eng_kichik)
print(eng_katta)`,
        output: `1
9`,
      },
      {
        type: "note",
        variant: "tip",
        title: "Nomlash qoidasi",
        html: "Funksiya nomi bajaradigan ishini bildirsin: <code>hisobla</code>, <code>tekshir</code>, <code>yukla</code>. O'zgaruvchilarda bo'lgani kabi funksiya nomlarida ham kichik harflar va pastki chiziq ishlatiladi.",
      },
    ],
    quiz: [
      {
        q: "Funksiyadan natija qaytarish uchun qaysi kalit so'z ishlatiladi?",
        options: ["print", "return", "yield", "result"],
        answer: 1,
        explain:
          "return qiymatni funksiyaning natijasi sifatida qaytaradi. print esa faqat ekranga chiqaradi, natijani qaytarmaydi.",
      },
      {
        q: "Funksiya qaysi kalit so'z bilan e'lon qilinadi?",
        options: ["function", "def", "fun", "class"],
        answer: 1,
        explain:
          "Python'da funksiya def kalit so'zi bilan e'lon qilinadi: def salomlash(ism):. function boshqa tillarda ishlatiladi.",
      },
    ],
  },

  {
    id: 17,
    title: "Xatolar bilan ishlash",
    desc: "try, except, finally va raise yordamida dasturni barqaror qilish.",
    minutes: 11,
    blocks: [
      {
        type: "p",
        html: "Dastur ishlayotganda xatolar yuz berishi tabiiy. Muhimi — xato butun dasturni to'xtatib qo'ymasligi. <code>try / except</code> konstruksiyasi xatoni ushlab, unga munosabat bildirish imkonini beradi.",
      },
      {
        type: "code",
        title: "bolish.py",
        code: `try:
    son = int(input("Son: "))
    print(10 / son)
except ValueError:
    print("Iltimos, faqat son kiriting")
except ZeroDivisionError:
    print("Nolga bo'lish mumkin emas")`,
        stdin: "0",
        output: `Son: 0
Nolga bo'lish mumkin emas`,
      },
      {
        type: "p",
        html: "<code>try</code> blokidagi kod bajariladi. Agar xato yuz bersa, qaysi turdagi xato ekaniga qarab mos <code>except</code> bloki ishga tushadi. Xato bo'lmasa, except bloklari o'tkazib yuboriladi.",
      },
      { type: "h", html: "else va finally" },
      {
        type: "ul",
        items: [
          "<strong>else</strong> — xato bo'lmaganda bajariladi.",
          "<strong>finally</strong> — xato bo'lsa ham, bo'lmasa ham har qanday holatda bajariladi. Resurslarni yopish uchun ishlatiladi.",
        ],
      },
      {
        type: "code",
        title: "finally.py",
        code: `def bolish(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("Nolga bo'lish mumkin emas")
        return None
    finally:
        print("Amal tugadi")

print(bolish(10, 2))
print(bolish(10, 0))`,
        output: `Amal tugadi
5.0
Nolga bo'lish mumkin emas
Amal tugadi
None`,
      },
      {
        type: "note",
        variant: "info",
        title: "Nega first natija 5.0?",
        html: "10 / 2 operatori har doim <code>float</code> qaytaradi, shuning uchun 5 emas, 5.0 chiqadi. Butun bo'lish kerak bo'lsa <code>//</code> ishlatiladi.",
      },
      { type: "h", html: "Xatoni o'zingiz ko'tarish" },
      {
        type: "p",
        html: "<code>raise</code> yordamida noto'g'ri qiymat kiritilganda xatoni o'zingiz ko'tarishingiz mumkin. Bu funksiyadan foydalanuvchiga muammo haqida aniq signal beradi.",
      },
      {
        type: "code",
        title: "raise.py",
        code: `def tekshir(yosh):
    if yosh < 0:
        raise ValueError("Yosh manfiy bo'lishi mumkin emas")
    return yosh

try:
    tekshir(-5)
except ValueError as xato:
    print("Xato:", xato)`,
        output: `Xato: Yosh manfiy bo'lishi mumkin emas`,
      },
      { type: "h", html: "Ko'p uchraydigan xatolar" },
      {
        type: "table",
        head: ["Xato", "Qachon yuz beradi"],
        rows: [
          ["<code>SyntaxError</code>", "Kod qoidalari buzilganda, masalan qavs yopilmasa"],
          ["<code>NameError</code>", "Mavjud bo'lmagan o'zgaruvchiga murojaat qilinganda"],
          ["<code>TypeError</code>", "Mos kelmaydigan turlar bilan amal bajarilganda"],
          ["<code>ValueError</code>", "Tur to'g'ri, lekin qiymat noto'g'ri bo'lganda (<code>int(\"salom\")</code>)"],
          ["<code>IndexError</code>", "Ro'yxatda mavjud bo'lmagan indeksga murojaat qilinganda"],
          ["<code>KeyError</code>", "Lug'atda mavjud bo'lmagan kalit so'ralganda"],
          ["<code>ZeroDivisionError</code>", "Nolga bo'lishga urinilganda"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Barcha xatoni yashirmang",
        html: "Bo'sh <code>except:</code> yozish xatolarni yashirib, sababini topishni qiyinlashtiradi. Har doim aniq xato turini ko'rsating: <code>except ValueError:</code>.",
      },
    ],
    quiz: [
      {
        q: "int(\"salom\") qaysi xatoga olib keladi?",
        options: ["TypeError", "ValueError", "NameError", "KeyError"],
        answer: 1,
        explain:
          "Tur to'g'ri (matn), lekin qiymatni songa aylantirib bo'lmaydi. Bunday holatda ValueError yuz beradi.",
      },
      {
        q: "finally bloki qachon bajariladi?",
        options: [
          "Faqat xato bo'lganda",
          "Faqat xato bo'lmaganda",
          "Xato bo'lsa ham, bo'lmasa ham",
          "Faqat return bo'lganda",
        ],
        answer: 2,
        explain:
          "finally har qanday holatda bajariladi. U ko'pincha fayl yoki ulanish kabi resurslarni yopish uchun ishlatiladi.",
      },
    ],
  },

  {
    id: 18,
    title: "Fayllar bilan ishlash",
    desc: "Faylga yozish va fayldan o'qish: open va with.",
    minutes: 10,
    blocks: [
      {
        type: "p",
        html: "Dastur natijasini saqlash kerak bo'lganda fayllardan foydalaniladi. Python'da fayl <code>open()</code> funksiyasi bilan ochiladi. Eng keng tarqalgan usul — <code>with</code> konstruksiyasi: u faylni ish tugagach avtomatik yopadi.",
      },
      {
        type: "code",
        title: "yozish.py",
        code: `with open("salom.txt", "w", encoding="utf-8") as fayl:
    fayl.write("Salom, dunyo!\\n")
    fayl.write("Python fayllari.")

with open("salom.txt", "r", encoding="utf-8") as fayl:
    matn = fayl.read()

print(matn)`,
        output: `Salom, dunyo!
Python fayllari.`,
      },
      {
        type: "table",
        head: ["Rejim", "Ma'nosi"],
        rows: [
          ["<code>\"r\"</code>", "O'qish (standart). Fayl mavjud bo'lishi shart."],
          ["<code>\"w\"</code>", "Yozish. Faylni tozalab, yangidan yozadi."],
          ["<code>\"a\"</code>", "Qo'shish. Fayl oxiriga yozadi."],
          ["<code>\"x\"</code>", "Yangi fayl yaratish. Fayl mavjud bo'lsa xato beradi."],
        ],
      },
      { type: "h", html: "Faylni qatorma-qator o'qish" },
      {
        type: "p",
        html: "Katta fayllarni to'liq o'qish o'rniga qatorma-qator aylanish samaraliroq. Har bir qator oxirida yangi qator belgisi (<code>\\n</code>) bo'ladi, shuning uchun <code>strip()</code> ishlatiladi.",
      },
      {
        type: "code",
        title: "qatorlar.py",
        code: `with open("ismlar.txt", "w", encoding="utf-8") as fayl:
    fayl.write("Ali\\nZara\\nBek\\n")

with open("ismlar.txt", "r", encoding="utf-8") as fayl:
    for qator in fayl:
        print(qator.strip())`,
        output: `Ali
Zara
Bek`,
      },
      { type: "h", html: "Fayl oxiriga qo'shish" },
      {
        type: "code",
        title: "qoshish.py",
        code: `with open("hisob.txt", "w", encoding="utf-8") as fayl:
    fayl.write("Bir\\n")

with open("hisob.txt", "a", encoding="utf-8") as fayl:
    fayl.write("Ikki\\n")

with open("hisob.txt", "r", encoding="utf-8") as fayl:
    print(fayl.read().strip())`,
        output: `Bir
Ikki`,
      },
      {
        type: "note",
        variant: "warning",
        title: "\"w\" faylni o'chiradi",
        html: "<code>\"w\"</code> rejimida fayl ochilsa, uning eski mazmuni butunlay o'chiriladi. Mavjud ma'lumotni saqlab qolish uchun <code>\"a\"</code> (append) rejimidan foydalaning.",
      },
      {
        type: "note",
        variant: "info",
        title: "Brauzerdagi sinov muhiti",
        html: "Bu saytdagi kod brauzer ichida ishlaydi, fayllar vaqtinchalik virtual xotirada saqlanadi va sahifa yangilanganda yo'qoladi. Haqiqiy kompyuterda fayllar diskda qoladi. Kodning o'zi bir xil ishlaydi.",
      },
    ],
    quiz: [
      {
        q: "Faylni faqat o'qish uchun qaysi rejim ishlatiladi?",
        options: ["\"w\"", "\"a\"", "\"r\"", "\"x\""],
        answer: 2,
        explain:
          "r — read, ya'ni o'qish rejimi. Fayl mavjud bo'lmasa FileNotFoundError yuz beradi.",
      },
      {
        q: "with open(...) konstruksiyasining asosiy afzalligi nima?",
        options: [
          "Faylni avtomatik yopadi",
          "Faylni shifrlaydi",
          "Faylni internetga yuklaydi",
          "Kodni tezlashtiradi",
        ],
        answer: 0,
        explain:
          "with bloki tugagach fayl avtomatik yopiladi, xato yuz berganda ham. Bu resurs oqib ketishining oldini oladi.",
      },
    ],
  },

  {
    id: 19,
    title: "Modullar va kutubxonalar",
    desc: "import yordamida tayyor kodlardan foydalanish.",
    minutes: 9,
    blocks: [
      {
        type: "p",
        html: "Modul — tayyor funksiyalar va qiymatlar to'plami. Python bilan birga keladigan standart kutubxona juda boy: matematika, tasodifiy sonlar, sana va vaqt, JSON va boshqalar. Modul <code>import</code> orqali ulanadi.",
      },
      {
        type: "code",
        title: "math.py",
        code: `import math

print(math.sqrt(81))
print(math.pi)
print(round(math.pi, 2))
print(math.floor(3.9))
print(math.ceil(3.1))`,
        output: `9.0
3.141592653589793
3.14
3
4`,
      },
      {
        type: "ul",
        items: [
          "<code>math.sqrt(x)</code> — kvadrat ildiz.",
          "<code>math.floor(x)</code> — pastga yaxlitlaydi.",
          "<code>math.ceil(x)</code> — yuqoriga yaxlitlaydi.",
          "<code>round(x, n)</code> — n xona aniqlik bilan yaxlitlaydi.",
        ],
      },
      { type: "h", html: "from ... import" },
      {
        type: "p",
        html: "Moduldagi faqat kerakli funksiyani olish ham mumkin. Shunda har safar modul nomini yozish shart emas.",
      },
      {
        type: "code",
        title: "import.py",
        code: `from math import sqrt, pow

print(sqrt(16))
print(pow(2, 10))
print(pow(9, 0.5))`,
        output: `4.0
1024.0
3.0`,
      },
      { type: "h", html: "Tasodifiy sonlar" },
      {
        type: "code",
        title: "random.py",
        code: `import random

ranglar = ["qizil", "yashil", "ko'k"]

print(random.choice(ranglar))
print(random.randint(1, 6))`,
        output: `yashil
4`,
      },
      {
        type: "note",
        variant: "info",
        title: "Natija har safar boshqacha",
        html: "Tasodifiy sonlar misolida chiqadigan qiymat har ishga tushirishda farq qiladi. Bu normal holat — <code>random</code> modulining vazifasi aynan shu.",
      },
      { type: "h", html: "Sana bilan ishlash" },
      {
        type: "code",
        title: "sana.py",
        code: `from datetime import date

tugilgan = date(2010, 5, 14)

print(tugilgan.year)
print(tugilgan.month)
print(tugilgan.strftime("%d.%m.%Y"))`,
        output: `2010
5
14.05.2010`,
      },
      {
        type: "note",
        variant: "tip",
        title: "Tashqi kutubxonalar va pip",
        html: "Standart kutubxonadan tashqari minglab tayyor paketlar bor: <code>requests</code>, <code>pandas</code>, <code>django</code>. Ular kompyuterga <code>pip install paket_nomi</code> buyrug'i bilan o'rnatiladi. Brauzerdagi sinov muhitida faqat standart kutubxona mavjud.",
      },
    ],
    quiz: [
      {
        q: "Modulni ulash uchun qaysi kalit so'z ishlatiladi?",
        options: ["include", "require", "import", "using"],
        answer: 2,
        explain:
          "Python'da modullar import bilan ulanadi: import math yoki from math import sqrt.",
      },
      {
        q: "math.sqrt(49) natijasi nima?",
        options: ["7", "7.0", "24.5", "49"],
        answer: 1,
        explain:
          "sqrt() kvadrat ildizni qaytaradi va natija har doim float bo'ladi: 7.0. Butun son kerak bo'lsa int() bilan aylantirish mumkin.",
      },
    ],
  },

  {
    id: 20,
    title: "OOP asoslari: class va obyektlar",
    desc: "Sinf, obyekt, self, metodlar va meros olish.",
    minutes: 13,
    blocks: [
      {
        type: "p",
        html: "Obyektga yo'naltirilgan dasturlash (OOP) — ma'lumot va unga tegishli amallarni bir joyda saqlash usuli. <code>class</code> — obyektlar uchun shablon, <code>obyekt</code> esa shu shablon asosida yaratilgan aniq nusxa.",
      },
      {
        type: "p",
        html: "Tasavvur qiling, «Talaba» degan shablon bor: har bir talabaning ismi va yoshi bo'ladi. Shablon bir marta yoziladi, keyin undan istalgancha talaba obyekti yaratiladi.",
      },
      {
        type: "code",
        title: "talaba.py",
        code: `class Talaba:
    def __init__(self, ism, yosh):
        self.ism = ism
        self.yosh = yosh

    def tanishtir(self):
        print(f"Men {self.ism}, {self.yosh} yoshdaman.")

talaba = Talaba("Aziza", 16)
talaba.tanishtir()`,
        output: `Men Aziza, 16 yoshdaman.`,
      },
      {
        type: "ul",
        items: [
          "<code>__init__</code> — obyekt yaratilganda avtomatik chaqiriladigan konstruktor.",
          "<code>self</code> — obyektning o'ziga ishora qiladi. Har bir metodning birinchi parametri.",
          "<code>self.ism</code> — obyektga tegishli xususiyat (atribut).",
          "<code>tanishtir()</code> — obyektning metodi.",
        ],
      },
      {
        type: "note",
        variant: "info",
        title: "self nima uchun kerak?",
        html: "Bitta sinfdan ko'p obyekt yaratiladi. <code>self</code> qaysi obyekt ustida ish olib borilayotganini bildiradi: <code>Aziza</code> obyektida <code>self.ism</code> — «Aziza», <code>Bek</code> obyektida — «Bek».",
      },
      { type: "h", html: "Obyektni matnga aylantirish" },
      {
        type: "code",
        title: "kitob.py",
        code: `class Kitob:
    def __init__(self, nom, muallif):
        self.nom = nom
        self.muallif = muallif

    def __str__(self):
        return f"{self.nom} — {self.muallif}"

kitob = Kitob("Python asoslari", "Noldan")

print(kitob)`,
        output: `Python asoslari — Noldan`,
      },
      { type: "h", html: "Meros olish" },
      {
        type: "p",
        html: "Yangi sinf mavjud sinfning xususiyat va metodlarini meros olishi mumkin. Bu umumiy kodni qayta yozmaslik imkonini beradi. Meros oluvchi sinf ota-sinf metodini qayta yozib, o'zgartirishi ham mumkin.",
      },
      {
        type: "code",
        title: "meros.py",
        code: `class Hayvon:
    def __init__(self, nom):
        self.nom = nom

    def ovoz(self):
        print(self.nom, "ovoz chiqaradi")

class Mushuk(Hayvon):
    def ovoz(self):
        print(self.nom, "miyovlaydi")

hayvon = Hayvon("It")
mushuk = Mushuk("Mimi")

hayvon.ovoz()
mushuk.ovoz()`,
        output: `It ovoz chiqaradi
Mimi miyovlaydi`,
      },
      {
        type: "note",
        variant: "tip",
        title: "Nomlash",
        html: "Sinf nomlari odatda katta harf bilan boshlanadi: <code>Talaba</code>, <code>Kitob</code>, <code>BankHisobi</code>. O'zgaruvchilar esa kichik harf bilan yoziladi.",
      },
    ],
    quiz: [
      {
        q: "class kalit so'zi yordamida nima yaratiladi?",
        options: [
          "Faqat o'zgaruvchi",
          "Obyektlar uchun shablon",
          "Yangi fayl",
          "Tsikl",
        ],
        answer: 1,
        explain:
          "class — obyektlar uchun shablon (sinf). Uning asosida keraklicha obyekt yaratish mumkin.",
      },
      {
        q: "self parametri nimaga ishora qiladi?",
        options: [
          "Sinfning o'ziga",
          "Joriy obyektga",
          "Birinchi argumentga",
          "Global o'zgaruvchiga",
        ],
        answer: 1,
        explain:
          "self metod chaqirilgan joriy obyektga ishora qiladi. Shu orqali metod obyektning xususiyatlariga murojaat qiladi.",
      },
    ],
  },

  {
    id: 21,
    title: "Mini loyiha: konsol kalkulyatori",
    desc: "O'rganganlarni birlashtirib, ishlaydigan kalkulyator yasash.",
    minutes: 15,
    blocks: [
      {
        type: "p",
        html: "Endi o'rgangan hamma narsani bitta loyihada birlashtiramiz: <strong>konsol kalkulyatori</strong>. Unda funksiyalar, tsikl, shartlar va xatolarni ushlash ishlatiladi.",
      },
      {
        type: "p",
        html: "Avval hisoblashni bajaruvchi alohida funksiya yozamiz. Har bir amal uchun shart tekshiriladi, nolga bo'lish esa alohida nazorat qilinadi.",
      },
      {
        type: "code",
        title: "kalkulyator.py",
        code: `def hisobla(a, b, amal):
    if amal == "+":
        return a + b
    elif amal == "-":
        return a - b
    elif amal == "*":
        return a * b
    elif amal == "/":
        if b == 0:
            return "Nolga bo'lish mumkin emas"
        return a / b
    else:
        return "Noma'lum amal"


print("Kalkulyator (chiqish uchun q)")

while True:
    amal = input("Amal (+, -, *, /): ")

    if amal == "q":
        break

    try:
        a = float(input("Birinchi son: "))
        b = float(input("Ikkinchi son: "))
    except ValueError:
        print("Son kiriting!")
        continue

    print("Natija:", hisobla(a, b, amal))`,
        stdin: "+\n12\n4\nq",
        output: `Kalkulyator (chiqish uchun q)
Amal (+, -, *, /): +
Birinchi son: 12
Ikkinchi son: 4
Natija: 16.0
Amal (+, -, *, /): q`,
      },
      { type: "h", html: "Kod qanday ishlaydi?" },
      {
        type: "ol",
        items: [
          "<code>hisobla()</code> funksiyasi ikkita son va amalni qabul qiladi, natijani <code>return</code> bilan qaytaradi.",
          "<code>while True</code> tsikli foydalanuvchi «q» yozgunicha davom etadi.",
          "<code>break</code> «q» kiritilganda tsikldan chiqadi.",
          "<code>try / except ValueError</code> son o'rniga matn kiritilganda dasturni to'xtatmaydi.",
          "<code>continue</code> xatodan keyin keyingi aylanishga o'tadi.",
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Loyihani kengaytiring",
        html: "O'zingiz qo'shib ko'ring: <code>%</code> va <code>**</code> amallarini qo'shish, hisoblar tarixini ro'yxatda saqlash yoki nolga bo'lishda qayta urinish taklif qilish. Kichik o'zgarishlar orqali o'rganish mustahkamlanadi.",
      },
      {
        type: "note",
        variant: "info",
        title: "Sinab ko'rish",
        html: "Kodni ishga tushirib, «Kirish» maydoniga <code>+</code>, <code>12</code>, <code>4</code> va <code>q</code> qiymatlarini har biri alohida qatorda yozing. Natija <code>16.0</code> chiqadi.",
      },
    ],
    quiz: [
      {
        q: "Nima uchun float(input(...)) try / except ichida yozilgan?",
        options: [
          "Kod chiroyli ko'rinishi uchun",
          "Son o'rniga noto'g'ri matn kiritilsa, dastur to'xtamasligi uchun",
          "Kod tezroq ishlashi uchun",
          "Natijani ekranga chiqarish uchun",
        ],
        answer: 1,
        explain:
          "float() noto'g'ri matnni songa aylantira olmaydi va ValueError beradi. try/except xatoni ushlab, dasturning davom etishini ta'minlaydi.",
      },
      {
        q: "«q» kiritilganda tsiklni qaysi operator tugatadi?",
        options: ["continue", "return", "break", "pass"],
        answer: 2,
        explain:
          "break joriy tsiklni butunlay to'xtatadi. continue esa faqat joriy aylanishni o'tkazib yuboradi.",
      },
    ],
  }
);
