/* Python lessons 1–8 — Asoslar */
window.PYTHON_LESSONS.push(
  {
    id: 1,
    title: "Python nima va nega uni o'rganish kerak?",
    desc: "Python tilining imkoniyatlari va birinchi dasturingiz.",
    minutes: 7,
    blocks: [
      {
        type: "p",
        html: "Python — dunyodagi eng ommabop dasturlash tillaridan biri. U 1991-yilda <strong>Guido van Rossum</strong> tomonidan yaratilgan. Python kodi ingliz tiliga o'xshaydi, shuning uchun uni o'qish va yozish boshqa tillarga qaraganda ancha oson.",
      },
      {
        type: "p",
        html: "Bu kursda siz hech qanday dasturlash tajribasisiz boshlaysiz. Har bir dars oldingisiga tayanadi, shuning uchun ketma-ket yuring va misollarni albatta o'zingiz yozib ko'ring.",
      },
      { type: "h", html: "Nega aynan Python?" },
      {
        type: "ul",
        items: [
          "<strong>Veb-ilovalar:</strong> Django va FastAPI yordamida kuchli saytlar va API'lar quriladi.",
          "<strong>Sun'iy intellekt:</strong> TensorFlow, PyTorch kabi kutubxonalar asosan Python uchun yaratilgan.",
          "<strong>Ma'lumotlar tahlili:</strong> Pandas va NumPy bilan katta hajmdagi ma'lumotlarni tahlil qilish mumkin.",
          "<strong>Avtomatlashtirish:</strong> takroriy ishlarni bajaruvchi kichik skriptlar tez yoziladi.",
          "<strong>Tez prototip:</strong> g'oyani bir necha o'n daqiqada ishlaydigan dasturga aylantirish mumkin.",
        ],
      },
      { type: "h", html: "Birinchi dastur" },
      {
        type: "p",
        html: "Kod yozishni eng mashhur misoldan boshlaymiz. Ekranga matn chiqarish uchun <code>print()</code> funksiyasidan foydalanamiz.",
      },
      {
        type: "code",
        title: "main.py",
        code: `print("Salom, dunyo!")
print("Men Python o'rganyapman.")`,
        output: `Salom, dunyo!
Men Python o'rganyapman.`,
      },
      {
        type: "note",
        variant: "tip",
        title: "Maslahat",
        html: "Har bir kod misoli ostida «Kod lug'ati» bor — u yerda <code>print()</code>, qavslar, <code>=</code> va boshqa belgilar nima qilishini oddiy tilda tushuntiramiz. Kodni o'zgartirib, «Sinash» tugmasi bilan natijani ko'ring — eng yaxshi o'rganish usuli shu.",
      },
      { type: "h", html: "Kod qanday bajariladi?" },
      {
        type: "p",
        html: "Python — interpretatsiya qilinadigan til. Interpretator kodni yuqoridan pastga, qatorma-qator o'qiydi va darhol bajaradi. Python kodi odatda <code>.py</code> kengaytmali faylda saqlanadi.",
      },
      {
        type: "note",
        variant: "info",
        title: "Qiziq fakt",
        html: "Python nomi ilon nomidan emas, britaniyalik «Monty Python» komediya guruhi sharafiga qo'yilgan. Shunga qaramay, tilning logotipida ikkita ilon tasvirlangan.",
      },
    ],
    quiz: [
      {
        q: "Python qaysi yilda yaratilgan?",
        options: ["1989-yilda", "1991-yilda", "2001-yilda", "2010-yilda"],
        answer: 1,
        explain:
          "Guido van Rossum Python ustida 1989-yilda ish boshlagan, birinchi versiya esa 1991-yilda chiqarilgan.",
      },
      {
        q: "Ekranga matn chiqarish uchun qaysi funksiya ishlatiladi?",
        options: ["echo()", "print()", "write()", "text()"],
        answer: 1,
        explain:
          "print() funksiyasi berilgan qiymatlarni ekranga chiqaradi. Bu Python'dagi eng ko'p ishlatiladigan funksiyalardan biri.",
      },
    ],
  },

  {
    id: 2,
    title: "Python'ni o'rnatish va birinchi dastur",
    desc: "Kompyuterga Python o'rnatish va faylni ishga tushirish.",
    minutes: 9,
    blocks: [
      {
        type: "p",
        html: "Bu darsda Pythonni kompyuteringizga o'rnatishni o'rganasiz. Agar hoziroq o'rnatishni xohlamasangiz, <a href=\"maydon.html\">Amaliyot maydoni</a>da davom etishingiz mumkin — Python u yerda brauzerda ishlaydi.",
      },
      { type: "h", html: "Windows'ga o'rnatish" },
      {
        type: "ol",
        items: [
          "Brauzerdan <a href=\"https://www.python.org/downloads/\" target=\"_blank\" rel=\"noopener\">python.org/downloads</a> sahifasini oching.",
          "Python 3 ning eng yangi versiyasini yuklab oling.",
          "O'rnatuvchini ishga tushiring va <strong>«Add python.exe to PATH»</strong> degan katakchani belgilang.",
          "«Install Now» tugmasini bosing va o'rnatish tugashini kuting.",
          "Terminalni ochib, <code>python --version</code> buyrug'ini kiriting.",
        ],
      },
      { type: "h", html: "macOS'ga o'rnatish" },
      {
        type: "ul",
        items: [
          "Tavsiya etilgan usul — python.org saytidan rasmiy o'rnatuvchini yuklab olish.",
          "Homebrew ishlatsangiz, terminalda <code>brew install python</code> buyrug'ini kiritish kifoya.",
          "Versiyani tekshirish: <code>python3 --version</code>.",
        ],
      },
      { type: "h", html: "Kod muharriri" },
      {
        type: "p",
        html: "Kichik dasturlar uchun standart matn muharriri ham yetadi, lekin <strong>VS Code</strong> tavsiya etiladi. U ichida Python kodini rangli ko'rsatadi va xatolarni oldindan belgilaydi. VS Code'ga rasmiy <strong>Python</strong> kengaytmasini o'rnating.",
      },
      { type: "h", html: "Birinchi faylni ishga tushirish" },
      {
        type: "p",
        html: "Yangi <code>main.py</code> fayl yarating, quyidagi kodni yozing va saqlang:",
      },
      {
        type: "code",
        title: "main.py",
        code: `# Birinchi dastur
print("Assalomu alaykum!")
print("Men Python o'rganyapman.")`,
        output: `Assalomu alaykum!
Men Python o'rganyapman.`,
      },
      {
        type: "p",
        html: "Faylni terminal orqali ishga tushiring: Windows'da <code>python main.py</code>, macOS'da <code>python3 main.py</code>. Natijani terminalda ko'rasiz.",
      },
      {
        type: "note",
        variant: "warning",
        title: "Ehtiyot bo'ling",
        html: "Agar terminalda «python topilmadi» degan xato chiqsa, Python PATH'ga qo'shilmagan bo'lishi mumkin. Windows'da <code>py main.py</code> buyrug'ini sinab ko'ring yoki Pythonni qayta o'rnatib, PATH katakchasini belgilang.",
      },
    ],
    quiz: [
      {
        q: "Windows'da Python versiyasini tekshirish uchun qaysi buyruq ishlatiladi?",
        options: ["python --version", "python --check", "version python", "py.install"],
        answer: 0,
        explain:
          "python --version (yoki py --version) o'rnatilgan Python versiyasini ko'rsatadi.",
      },
      {
        q: "Python kodi qanday kengaytmali faylda saqlanadi?",
        options: [".python", ".pt", ".py", ".pyt"],
        answer: 2,
        explain:
          "Python dastur fayllari .py kengaytmasida saqlanadi, masalan main.py.",
      },
    ],
  },

  {
    id: 3,
    title: "Sintaksis, chekinish va izohlar",
    desc: "Python kodining tuzilishi va to'g'ri yozish qoidalari.",
    minutes: 8,
    blocks: [
      {
        type: "p",
        html: "Sintaksis — bu tilning yozilish qoidalari. Python'da <strong>chekinish</strong> (indentation) shunchaki chiroyli ko'rinish uchun emas, kodning mantiqiy tuzilishini belgilash uchun ishlatiladi.",
      },
      { type: "h", html: "Chekinish nima uchun kerak?" },
      {
        type: "p",
        html: "Kod bloklari 4 ta probel bilan chekinadi. Bir blokga tegishli barcha qatorlar bir xil chekinishda bo'lishi shart. Qator oxiridagi ikki nuqta <code>:</code> yangi blok boshlanishini bildiradi.",
      },
      {
        type: "code",
        title: "chekinish.py",
        code: `ism = "Aziza"

if ism == "Aziza":
    print("Bugun sizning darsingiz!")
    print("Kodni birga yozamiz.")`,
        output: `Bugun sizning darsingiz!
Kodni birga yozamiz.`,
      },
      {
        type: "note",
        variant: "warning",
        title: "Muhim qoida",
        html: "Probel o'rniga tab ishlatsangiz ham bo'ladi, lekin bitta fayl ichida bir xil usuldan foydalaning. Aralash chekinish <code>IndentationError</code> xatosiga olib kelishi mumkin.",
      },
      { type: "h", html: "Katta va kichik harflar" },
      {
        type: "p",
        html: "Python katta-kichik harflarga sezgir. <code>ism</code>, <code>Ism</code> va <code>ISM</code> — bu uchta butunlay boshqa nom. Shuning uchun nomlarni doim bir xil yozishga odatlaning.",
      },
      { type: "h", html: "Izohlar" },
      {
        type: "p",
        html: "Izoh — kod uchun qoldirilgan eslatma. U bajarilmaydi va dastur natijasiga ta'sir qilmaydi. Bir qatorli izoh <code>#</code> belgisidan boshlanadi.",
      },
      {
        type: "code",
        title: "izohlar.py",
        code: `# Bu dastur foydalanuvchi haqida ma'lumot chiqaradi
print("Ism: Aziza")
print("Kurs: Python")

print("Tayyor!")  # Qatordan keyin ham izoh yozish mumkin`,
        output: `Ism: Aziza
Kurs: Python
Tayyor!`,
      },
      {
        type: "note",
        variant: "tip",
        html: "Izohlar yordamida kodni o'zingiz uchun tushuntirib boring. Bir haftadan keyin kodingizni qayta ochganingizda, izohlar vaqtni tejaydi.",
      },
    ],
    quiz: [
      {
        q: "Python'da kod bloklari qanday ajratiladi?",
        options: [
          "Jingalak qavslar { } bilan",
          "Chekinish (probel) bilan",
          "Nuqta-vergul bilan",
          "Qator oxiridagi tire bilan",
        ],
        answer: 1,
        explain:
          "Python bloklarni jingalak qavslar emas, chekinish orqali ajratadi. Odatda har bir blok 4 probel bilan chekinadi.",
      },
      {
        q: "Bir qatorli izoh qaysi belgi bilan boshlanadi?",
        options: ["//", "<!--", "#", "--"],
        answer: 2,
        explain:
          "# belgisidan keyingi matn izoh hisoblanadi va interpretator uni bajarmaydi.",
      },
    ],
  },

  {
    id: 4,
    title: "O'zgaruvchilar",
    desc: "Ma'lumotlarni saqlash, nomlash qoidalari va qiymatni o'zgartirish.",
    minutes: 8,
    blocks: [
      {
        type: "p",
        html: "O'zgaruvchi — ma'lumot saqlanadigan nomlangan joy. Unga qiymat berish uchun <code>=</code> belgisi ishlatiladi. Diqqat: bu tenglikni tekshirish emas, qiymat berish operatori.",
      },
      {
        type: "code",
        title: "ozgaruvchilar.py",
        code: `ism = "Diyor"
yosh = 14
daraja = "Boshlang'ich"

print(ism)
print(yosh)
print(daraja)`,
        output: `Diyor
14
Boshlang'ich`,
      },
      { type: "h", html: "Qiymatni o'zgartirish" },
      {
        type: "p",
        html: "O'zgaruvchi qiymati keyinchalik o'zgarishi mumkin. Eski qiymat yangisiga almashtiriladi.",
      },
      {
        type: "code",
        title: "yosh.py",
        code: `yosh = 14
print("Hozir:", yosh)

yosh = yosh + 1
print("Keyingi yil:", yosh)`,
        output: `Hozir: 14
Keyingi yil: 15`,
      },
      { type: "h", html: "Nomlash qoidalari" },
      {
        type: "ul",
        items: [
          "Nom harf yoki pastki chiziq <code>_</code> bilan boshlanishi kerak: <code>ism</code>, <code>_hisob</code>.",
          "Nom raqam bilan boshlanmaydi: <code>2ism</code> noto'g'ri.",
          "Nomda bo'sh joy bo'lmaydi: <code>mening ismim</code> noto'g'ri, <code>mening_ismim</code> to'g'ri.",
          "Kalit so'zlardan foydalanib bo'lmaydi: <code>if</code>, <code>for</code>, <code>class</code>.",
          "Tavsiya etiladigan uslub: kichik harflar va pastki chiziq — <code>kurs_nomi</code>.",
        ],
      },
      {
        type: "code",
        title: "nomlar.py",
        code: `mening_ismim = "Aziza"
_talaba = True
ball_2026 = 95

print(mening_ismim, ball_2026)`,
        output: `Aziza 95`,
      },
      { type: "h", html: "Bir nechta o'zgaruvchi" },
      {
        type: "p",
        html: "Bir qatorning o'zida bir nechta o'zgaruvchiga qiymat berish mumkin:",
      },
      {
        type: "code",
        title: "kop.py",
        code: `a, b = 3, 7
x = y = 0

print(a, b)
print(x, y)`,
        output: `3 7
0 0`,
      },
      {
        type: "note",
        variant: "warning",
        title: "Ehtiyot bo'ling",
        html: "O'zgaruvchi nomida imlo xatosi qilsangiz, Python uni yangi o'zgaruvchi deb qabul qiladi yoki <code>NameError</code> beradi. Nomlarni diqqat bilan tekshiring.",
      },
    ],
    quiz: [
      {
        q: "Quyidagi nomlardan qaysi biri noto'g'ri?",
        options: ["ism_2", "_ism", "2ism", "ism2"],
        answer: 2,
        explain:
          "O'zgaruvchi nomi raqam bilan boshlanmaydi. 2ism noto'g'ri, qolganlari to'g'ri nom hisoblanadi.",
      },
      {
        q: "ism = \"Ali\" yozuvidagi = belgisi nimani bildiradi?",
        options: [
          "Tenglikni tekshirish",
          "ism ga qiymat berish",
          "Matnni ekranga chiqarish",
          "Xatoni ushlash",
        ],
        answer: 1,
        explain:
          "= belgisi o'zgaruvchiga qiymat beradi. Tenglikni tekshirish uchun == operatori ishlatiladi.",
      },
    ],
  },

  {
    id: 5,
    title: "Ma'lumot turlari",
    desc: "Sonlar, matnlar, mantiqiy qiymatlar va tur almashtirish.",
    minutes: 9,
    blocks: [
      {
        type: "p",
        html: "Python har bir qiymatning turini avtomatik aniqlaydi. Asosiy turlarni bilish xatolardan qochishga va ma'lumot bilan to'g'ri ishlashga yordam beradi.",
      },
      {
        type: "table",
        head: ["Turi", "Nomi", "Misol"],
        rows: [
          ["<code>int</code>", "Butun son", "<code>15</code>, <code>-3</code>"],
          ["<code>float</code>", "O'nlik son", "<code>3.14</code>, <code>-0.5</code>"],
          ["<code>str</code>", "Matn (satr)", "<code>\"Salom\"</code>"],
          ["<code>bool</code>", "Mantiqiy qiymat", "<code>True</code>, <code>False</code>"],
          ["<code>NoneType</code>", "Bo'sh qiymat", "<code>None</code>"],
        ],
      },
      {
        type: "code",
        title: "turlar.py",
        code: `yosh = 15
narx = 12.5
ism = "Malika"
talaba = True
hech_narsa = None

print(type(yosh))
print(type(narx))
print(type(ism))
print(type(talaba))
print(type(hech_narsa))`,
        output: `<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
<class 'NoneType'>`,
      },
      { type: "h", html: "Turlarni o'zgartirish" },
      {
        type: "p",
        html: "Ba'zan bir turdagi qiymatni boshqa turga aylantirish kerak bo'ladi. Buning uchun <code>int()</code>, <code>float()</code>, <code>str()</code> kabi funksiyalar ishlatiladi.",
      },
      {
        type: "code",
        title: "aylantirish.py",
        code: `matn = "25"
son = int(matn)
print(son + 5)

print(str(100))
print(float("3.14"))
print(int(9.99))`,
        output: `30
100
3.14
9`,
      },
      {
        type: "note",
        variant: "warning",
        title: "Muhim",
        html: "<code>int(\"25.5\")</code> xato beradi, chunki matn butun son ko'rinishida emas. Avval <code>float(\"25.5\")</code> qilib, keyin <code>int()</code> ishlatish mumkin.",
      },
      { type: "h", html: "Mantiqiy qiymatlar" },
      {
        type: "p",
        html: "<code>True</code> va <code>False</code> qiymatlarining birinchi harfi katta yoziladi. Ular shartlarni tekshirishda ishlatiladi. Amalda <code>True</code> = 1, <code>False</code> = 0 kabi ham harakat qiladi.",
      },
      {
        type: "code",
        title: "bool.py",
        code: `print(bool(1))
print(bool(0))
print(bool("Salom"))
print(bool(""))

print(True + True)`,
        output: `True
False
True
False
2`,
      },
    ],
    quiz: [
      {
        q: "type(3.14) qanday natija beradi?",
        options: [
          "<class 'int'>",
          "<class 'float'>",
          "<class 'str'>",
          "<class 'bool'>",
        ],
        answer: 1,
        explain:
          "3.14 — o'nlik kasr, shuning uchun uning turi float. type() funksiyasi qiymat turini ko'rsatadi.",
      },
      {
        q: "Qaysi ifoda 30 natijasini beradi?",
        options: [
          "int(\"25\") + 5",
          "\"25\" + 5",
          "int(\"25.5\") + 5",
          "\"25\" + \"5\"",
        ],
        answer: 0,
        explain:
          "int(\"25\") matnni butun songa aylantiradi va 25 + 5 = 30 bo'ladi. \"25\" + 5 esa TypeError beradi.",
      },
    ],
  },

  {
    id: 6,
    title: "Raqamlar va matematik amallar",
    desc: "Arifmetik operatorlar, amallar tartibi va foydali funksiyalar.",
    minutes: 8,
    blocks: [
      {
        type: "p",
        html: "Python oddiy kalkulyator vazifasini ham bajaradi. Sonlar bilan ishlash uchun bir nechta asosiy operator mavjud.",
      },
      {
        type: "table",
        head: ["Operator", "Ma'nosi", "Misol", "Natija"],
        rows: [
          ["<code>+</code>", "Qo'shish", "<code>7 + 3</code>", "<code>10</code>"],
          ["<code>-</code>", "Ayirish", "<code>7 - 3</code>", "<code>4</code>"],
          ["<code>*</code>", "Ko'paytirish", "<code>7 * 3</code>", "<code>21</code>"],
          ["<code>/</code>", "Bo'lish", "<code>7 / 2</code>", "<code>3.5</code>"],
          ["<code>//</code>", "Butun bo'lish", "<code>7 // 2</code>", "<code>3</code>"],
          ["<code>%</code>", "Qoldiq", "<code>7 % 2</code>", "<code>1</code>"],
          ["<code>**</code>", "Daraja", "<code>2 ** 3</code>", "<code>8</code>"],
        ],
      },
      {
        type: "code",
        title: "amallar.py",
        code: `a = 17
b = 5

print("Yig'indi:", a + b)
print("Ayirma:", a - b)
print("Ko'paytma:", a * b)
print("Bo'linma:", a / b)
print("Butun bo'linma:", a // b)
print("Qoldiq:", a % b)
print("Daraja:", 2 ** 3)`,
        output: `Yig'indi: 22
Ayirma: 12
Ko'paytma: 85
Bo'linma: 3.4
Butun bo'linma: 3
Qoldiq: 2
Daraja: 8`,
      },
      {
        type: "note",
        variant: "info",
        title: "Esda tuting",
        html: "Oddiy bo'lish <code>/</code> natijasi har doim <code>float</code> bo'ladi. 10 / 2 natijasi 5 emas, 5.0 bo'ladi. Butun son kerak bo'lsa <code>//</code> yoki <code>int()</code> dan foydalaning.",
      },
      { type: "h", html: "Amallar tartibi" },
      {
        type: "p",
        html: "Matematikadagi kabi Python ham avval qavs ichini, keyin darajani, so'ng ko'paytirish va bo'lishni, oxirida qo'shish va ayirishni bajaradi.",
      },
      {
        type: "code",
        title: "tartib.py",
        code: `print(2 + 3 * 4)
print((2 + 3) * 4)
print(2 ** 3 ** 2)`,
        output: `14
20
512`,
      },
      { type: "h", html: "Foydali matematik funksiyalar" },
      {
        type: "code",
        title: "funksiyalar.py",
        code: `print(round(3.14159, 2))
print(abs(-7))
print(max(4, 9, 2))
print(min(4, 9, 2))
print(pow(2, 5))`,
        output: `3.14
7
9
2
32`,
      },
      {
        type: "note",
        variant: "tip",
        html: "<code>round()</code> sonni yaxlitlaydi, <code>abs()</code> modulni qaytaradi, <code>max()</code> va <code>min()</code> esa eng katta va eng kichik qiymatni topadi.",
      },
    ],
    quiz: [
      {
        q: "17 % 5 ifodasining natijasi nechaga teng?",
        options: ["3", "2", "3.4", "0"],
        answer: 1,
        explain:
          "% operatori bo'lishdan qolgan qoldiqni qaytaradi. 17 = 3 × 5 + 2, demak qoldiq 2.",
      },
      {
        q: "10 / 2 ifodasining natijasi qanday turda bo'ladi?",
        options: [
          "5 — int",
          "5.0 — float",
          "2 — int",
          "Xato beradi",
        ],
        answer: 1,
        explain:
          "Oddiy bo'lish / operatori har doim float qaytaradi, shuning uchun natija 5.0 bo'ladi.",
      },
    ],
  },

  {
    id: 7,
    title: "Matnlar bilan ishlash",
    desc: "Stringlar, f-string, indeks, kesim va foydali metodlar.",
    minutes: 11,
    blocks: [
      {
        type: "p",
        html: "Matn yoki <strong>string</strong> — qo'shtirnoq ichiga olingan belgilar ketma-ketligi. Bir qatorli matn uchun <code>\"...</code> yoki <code>'...</code>, ko'p qatorli matn uchun uch qo'shtirnoq ishlatiladi.",
      },
      {
        type: "code",
        title: "matnlar.py",
        code: `ism = "Noldan"
shior = 'Kod yozishni bugun boshlang'

matn = """Bu
ko'p qatorli
matn."""

print(ism)
print(shior)
print(matn)`,
        output: `Noldan
Kod yozishni bugun boshlang
Bu
ko'p qatorli
matn.`,
      },
      { type: "h", html: "Birlashtirish va f-string" },
      {
        type: "p",
        html: "Matnlarni <code>+</code> bilan birlashtirish mumkin, <code>*</code> esa matnni bir necha marta takrorlaydi. Eng qulay usul — <strong>f-string</strong>: matn oldiga <code>f</code> qo'yiladi va o'zgaruvchilar jingalak qavs ichida yoziladi.",
      },
      {
        type: "code",
        title: "fstring.py",
        code: `ism = "Aziza"
yosh = 16

salom = "Salom, " + ism + "!"
xabar = f"{ism} {yosh} yoshda."
chiziq = "-" * 20

print(salom)
print(xabar)
print(chiziq)`,
        output: `Salom, Aziza!
Aziza 16 yoshda.
--------------------`,
      },
      { type: "h", html: "Indeks va kesim" },
      {
        type: "p",
        html: "Har bir belgi o'z indeksiga ega. Indeks <strong>0</strong> dan boshlanadi. <code>-1</code> oxirgi belgini bildiradi. <code>[boshlanish:oxir]</code> kesim oladi, bunda oxirgi indeks natijaga kirmaydi.",
      },
      {
        type: "code",
        title: "indeks.py",
        code: `til = "Python"

print(til[0])
print(til[-1])
print(til[0:3])
print(len(til))`,
        output: `P
n
Pyt
6`,
      },
      { type: "h", html: "Foydali metodlar" },
      {
        type: "table",
        head: ["Metod", "Vazifasi", "Misol"],
        rows: [
          ["<code>.upper()</code>", "Barcha harflarni katta qiladi", "<code>\"python\".upper()</code> → <code>PYTHON</code>"],
          ["<code>.lower()</code>", "Barcha harflarni kichik qiladi", "<code>\"PYTHON\".lower()</code> → <code>python</code>"],
          ["<code>.strip()</code>", "Chetlardagi bo'sh joylarni olib tashlaydi", "<code>\"  salom  \".strip()</code>"],
          ["<code>.replace()</code>", "Matn bo'lagini almashtiradi", "<code>\"kod\".replace(\"k\", \"K\")</code>"],
          ["<code>.split()</code>", "Matnni bo'laklarga ajratib ro'yxat qaytaradi", "<code>\"a b c\".split()</code>"],
        ],
      },
      {
        type: "code",
        title: "metodlar.py",
        code: `gap = "  Men Python o'rganaman  "

print(gap.strip())
print(gap.strip().upper())
print(gap.strip().replace("Python", "kod"))
print(gap.strip().split())
print("dastur" in "dasturlash")`,
        output: `Men Python o'rganaman
MEN PYTHON O'RGANAMAN
Men kod o'rganaman
['Men', 'Python', "o'rganaman"]
True`,
      },
      { type: "h", html: "Matnlar o'zgarmas" },
      {
        type: "p",
        html: "Stringlar <strong>o'zgarmas</strong> (immutable). <code>upper()</code> kabi metodlar asl matnni o'zgartirmaydi, balki yangi matn qaytaradi. Natijani saqlash uchun uni yangi o'zgaruvchiga yozish kerak.",
      },
      {
        type: "code",
        title: "immutable.py",
        code: `matn = "python"
katta = matn.upper()

print(matn)
print(katta)`,
        output: `python
PYTHON`,
      },
    ],
    quiz: [
      {
        q: "\"Python\"[0:3] ifodasining natijasi nima?",
        options: ["Pyt", "Pyth", "ython", "y"],
        answer: 0,
        explain:
          "Kesimda boshlanish indeksi kiradi, oxirgi indeks kirmaydi: 0, 1, 2 indekslardagi belgilar — «Pyt».",
      },
      {
        q: "f-string qanday yoziladi?",
        options: [
          "\"Salom {ism}\"",
          "f\"Salom {ism}\"",
          "format(\"Salom {ism}\")",
          "\"Salom \" + {ism}",
        ],
        answer: 1,
        explain:
          "f-string matn oldiga f harfi qo'yib yoziladi: f\"Salom {ism}\". U o'zgaruvchi qiymatini matnga joylashtiradi.",
      },
    ],
  },

  {
    id: 8,
    title: "Foydalanuvchidan ma'lumot olish",
    desc: "input(), print() va matnni songa aylantirish.",
    minutes: 9,
    blocks: [
      {
        type: "p",
        html: "<code>input()</code> funksiyasi foydalanuvchidan ma'lumot o'qiydi. Muhim jihat: u har doim <strong>matn (str)</strong> qaytaradi, hatto foydalanuvchi son kiritsa ham.",
      },
      {
        type: "code",
        title: "salomlashish.py",
        code: `ism = input("Ismingiz: ")
print(f"Salom, {ism}!")

yosh = int(input("Yoshingiz: "))
print(f"Siz {yosh} yoshdasiz.")`,
        stdin: "Aziza\n16",
        output: `Ismingiz: Aziza
Salom, Aziza!
Yoshingiz: 16
Siz 16 yoshdasiz.`,
      },
      { type: "h", html: "Sonlar bilan ishlash" },
      {
        type: "p",
        html: "Kiritilgan son ustida amallar bajarish uchun avval <code>int()</code> yoki <code>float()</code> bilan aylantirish kerak.",
      },
      {
        type: "code",
        title: "kalkulyator.py",
        code: `a = int(input("Birinchi son: "))
b = int(input("Ikkinchi son: "))

print("Yig'indi:", a + b)
print("Ko'paytma:", a * b)`,
        stdin: "12\n8",
        output: `Birinchi son: 12
Ikkinchi son: 8
Yig'indi: 20
Ko'paytma: 96`,
      },
      {
        type: "note",
        variant: "warning",
        title: "Eng ko'p uchraydigan xato",
        html: "Agar <code>int()</code> ishlatmasangiz, matnlar birlashtiriladi: <code>\"12\" + \"8\"</code> → <code>\"128\"</code>. Natija 20 emas, 128 bo'lib qoladi!",
      },
      { type: "h", html: "print() imkoniyatlari" },
      {
        type: "p",
        html: "<code>print()</code> bir nechta qiymatni chiqarishi, ular orasidagi ajratuvchini (<code>sep</code>) va qator oxirini (<code>end</code>) o'zgartirishi mumkin.",
      },
      {
        type: "code",
        title: "print.py",
        code: `print("Python", "dasturlash", "tili")
print("Python", "dasturlash", sep="-")
print("Yuklanmoqda...", end=" ")
print("Tayyor!")`,
        output: `Python dasturlash tili
Python-dasturlash
Yuklanmoqda... Tayyor!`,
      },
      {
        type: "note",
        variant: "tip",
        title: "Sinovda qanday ishlaydi?",
        html: "Kodda <code>input()</code> bo'lsa, kod oynasidagi «Kirish» maydoniga qiymatlarni har bir qatorda yozing. Masalan, birinchi misol uchun: <code>Aziza</code> va keyingi qatorda <code>16</code>.",
      },
    ],
    quiz: [
      {
        q: "input() funksiyasi qanday turdagi qiymat qaytaradi?",
        options: ["int", "float", "str", "bool"],
        answer: 2,
        explain:
          "input() foydalanuvchi kiritgan qiymatni doim matn, ya'ni str sifatida qaytaradi. Son kerak bo'lsa aylantirish shart.",
      },
      {
        q: "\"12\" + \"8\" ifodasining natijasi nima bo'ladi?",
        options: ["20", "128", "Xato beradi", "\"20\""],
        answer: 1,
        explain:
          "Ikkala qiymat ham matn bo'lgani uchun + operatori ularni birlashtiradi: \"128\". Raqamlar yig'indisi uchun int() kerak.",
      },
    ],
  }
);
