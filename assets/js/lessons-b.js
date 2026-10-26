/* Python lessons 9–15 — Mantiq va ma'lumotlar tuzilmalari */
window.PYTHON_LESSONS.push(
  {
    id: 9,
    title: "Operatorlar: hisoblash va taqqoslash",
    desc: "Arifmetik, taqqoslash va mantiqiy operatorlar.",
    minutes: 9,
    blocks: [
      {
        type: "p",
        html: "Operatorlar — qiymatlar ustida amal bajaruvchi belgilar. Biz <code>+</code> va <code>-</code> kabi arifmetik operatorlarni allaqachon ko'rdik. Endi ularni to'liq ro'yxati bilan tanishamiz.",
      },
      { type: "h", html: "Arifmetik operatorlar" },
      {
        type: "table",
        head: ["Operator", "Nomi", "Misol", "Natija"],
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
        title: "arifmetika.py",
        code: `a = 17
b = 5

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)
print(a ** 2)`,
        output: `22
12
85
3.4
3
2
289`,
      },
      {
        type: "note",
        variant: "info",
        title: "Uchta muhim farq",
        html: "<code>/</code> har doim o'nlik son qaytaradi (7 / 2 → 3.5). <code>//</code> butun qismini oladi (7 // 2 → 3). <code>%</code> esa qoldiqni beradi (7 % 2 → 1).",
      },
      { type: "h", html: "Taqqoslash operatorlari" },
      {
        type: "p",
        html: "Taqqoslash natijasi doim <strong>bool</strong> — <code>True</code> yoki <code>False</code> bo'ladi. Ular asosan shartlarda ishlatiladi.",
      },
      {
        type: "code",
        title: "taqqoslash.py",
        code: `yosh = 16

print(yosh > 18)
print(yosh < 18)
print(yosh == 16)
print(yosh != 16)
print(10 <= 10)
print("a" == "A")`,
        output: `False
True
True
False
True
False`,
      },
      {
        type: "note",
        variant: "warning",
        title: "= va == bir xil emas",
        html: "<code>=</code> qiymat beradi: <code>yosh = 16</code>. <code>==</code> esa taqqoslaydi: <code>yosh == 16</code>. Adashtirsangiz, kod xato beradi yoki noto'g'ri ishlaydi.",
      },
      { type: "h", html: "Mantiqiy operatorlar" },
      {
        type: "p",
        html: "<code>and</code> — ikkala shart ham rost bo'lsa <code>True</code>. <code>or</code> — kamida bittasi rost bo'lsa <code>True</code>. <code>not</code> — natijani teskarisiga aylantiradi.",
      },
      {
        type: "code",
        title: "mantiq.py",
        code: `yosh = 20
talaba = True

print(yosh >= 18 and talaba)
print(yosh < 18 or talaba)
print(not talaba)
print(not (5 > 3))`,
        output: `True
True
False
False`,
      },
      {
        type: "note",
        variant: "tip",
        title: "Qavslardan foydalaning",
        html: "Murakkab shartlarda qavslar o'qishni osonlashtiradi va xatolarni kamaytiradi: <code>(yosh >= 18) and (talaba or ishlaydi)</code>.",
      },
    ],
    quiz: [
      {
        q: "17 % 5 ifodasining natijasi nima?",
        options: ["2", "3", "3.4", "0"],
        answer: 0,
        explain:
          "17 ni 5 ga bo'lganda 3 ta butun qism va 2 ta qoldiq bo'ladi. % operatori aynan qoldiqni qaytaradi.",
      },
      {
        q: "not (5 > 3) ifodasining natijasi nima?",
        options: ["True", "False", "5", "Xato"],
        answer: 1,
        explain:
          "5 > 3 sharti True. not operatori natijani teskarisiga aylantiradi, shuning uchun javob False.",
      },
    ],
  },

  {
    id: 10,
    title: "Shartlar: if, elif, else",
    desc: "Dastur qaror qabul qilishi uchun shartlardan foydalanish.",
    minutes: 10,
    blocks: [
      {
        type: "p",
        html: "Hozirgacha kodimiz doim bir xil tartibda bajarilardi. <code>if</code> yordamida dastur muayyan shartga qarab turli yo'l tutishi mumkin.",
      },
      {
        type: "code",
        title: "baho.py",
        code: `baho = int(input("Ball: "))

if baho >= 90:
    print("A'lo")
elif baho >= 70:
    print("Yaxshi")
elif baho >= 50:
    print("Qoniqarli")
else:
    print("Qayta urinib ko'ring")`,
        stdin: "85",
        output: `Ball: 85
Yaxshi`,
      },
      {
        type: "p",
        html: "Python shartlarni <strong>yuqoridan pastga</strong> tekshiradi. Birinchi rost shart bajariladi, qolganlari o'tkazib yuboriladi. 85 ball uchun birinchi shart (<code>>= 90</code>) yolg'on, ikkinchisi (<code>>= 70</code>) rost bo'lgani uchun «Yaxshi» chiqdi.",
      },
      { type: "h", html: "Chekinish — Python'ning qoidasi" },
      {
        type: "p",
        html: "Shartdan keyin ikki nuqta <code>:</code> qo'yiladi, blok ichidagi kod esa <strong>4 probel</strong> chekinish bilan yoziladi. Bu Python'da majburiy qoida.",
      },
      {
        type: "code",
        title: "yosh.py",
        code: `yosh = 16

if yosh >= 18:
    print("Kirish mumkin")
else:
    print("Kirish taqiqlangan")
    print("Yosh yetarli emas")`,
        output: `Kirish taqiqlangan
Yosh yetarli emas`,
      },
      {
        type: "note",
        variant: "warning",
        title: "IndentationError",
        html: "Agar blok ichidagi kodni chekinishsiz yozsangiz, Python <code>IndentationError</code> xatosini beradi. Chekinishda probel va Tab'ni aralashtirib yubormang — faqat bitta usulni tanlang.",
      },
      { type: "h", html: "Ichma-ich shartlar" },
      {
        type: "p",
        html: "Shart ichida yana shart yozish mumkin. Har bir yangi blok qo'shimcha chekinish talab qiladi.",
      },
      {
        type: "code",
        title: "chiziq.py",
        code: `yosh = 22
talaba = False

if yosh >= 18:
    if talaba:
        print("Talaba tarifi")
    else:
        print("Kattalar tarifi")
else:
    print("Bolalar tarifi")`,
        output: `Kattalar tarifi`,
      },
      { type: "h", html: "Qisqa shakl" },
      {
        type: "p",
        html: "Oddiy ikki holat uchun bir qatorli shart ishlatish mumkin. Bu <strong>ternary</strong> operator deb ataladi.",
      },
      {
        type: "code",
        title: "qisqa.py",
        code: `yosh = 20
holat = "katta" if yosh >= 18 else "kichik"

print(holat)`,
        output: `katta`,
      },
      {
        type: "note",
        variant: "tip",
        title: "O'qishga qulaylik",
        html: "Shart murakkablashsa, uni alohida o'zgaruvchiga saqlang: <code>katta = yosh >= 18</code>, keyin <code>if katta:</code> deb yozing. Kod tushunarliroq bo'ladi.",
      },
    ],
    quiz: [
      {
        q: "elif kalit so'zining vazifasi nima?",
        options: [
          "Yangi o'zgaruvchi yaratadi",
          "Oldingi shart bajarilmasa, yangi shartni tekshiradi",
          "Tsiklni to'xtatadi",
          "Faqat xatolarni ushlaydi",
        ],
        answer: 1,
        explain:
          "elif «else if» ma'nosini beradi: oldingi if yoki elif sharti yolg'on bo'lsa, keyingi shartni tekshiradi.",
      },
      {
        q: "Python'da if blokidagi kod nimasi bilan ajratiladi?",
        options: ["Jingalak qavslar { }", "Chekinish (4 probel)", "Nuqta-vergul", "BEGIN / END"],
        answer: 1,
        explain:
          "Python bloklarni chekinish orqali aniqlaydi. Odatda 4 probel ishlatiladi va bu qoidaga rioya qilish majburiy.",
      },
    ],
  },

  {
    id: 11,
    title: "while tsikli",
    desc: "Shart bajarilgunicha takrorlanadigan amallar, break va continue.",
    minutes: 10,
    blocks: [
      {
        type: "p",
        html: "<code>while</code> tsikli shart <code>True</code> bo'lguncha kodni qayta-qayta bajaradi. Shart yolg'on bo'lishi bilan tsikl tugaydi.",
      },
      {
        type: "code",
        title: "sanash.py",
        code: `son = 1

while son <= 5:
    print(son)
    son += 1

print("Tugadi!")`,
        output: `1
2
3
4
5
Tugadi!`,
      },
      {
        type: "p",
        html: "Har bir aylanishda <code>son</code> qiymati 1 ga oshadi. 5 dan keyin shart <code>False</code> bo'ladi va dastur tsikldan chiqadi. <code>son += 1</code> yozuvi <code>son = son + 1</code> bilan bir xil.",
      },
      { type: "h", html: "break va continue" },
      {
        type: "ul",
        items: [
          "<strong>break</strong> — tsiklni butunlay to'xtatib, undan chiqadi.",
          "<strong>continue</strong> — joriy aylanishning qolgan qismini o'tkazib yuborib, keyingi aylanishga o'tadi.",
        ],
      },
      {
        type: "code",
        title: "break_continue.py",
        code: `son = 0

while True:
    son += 1

    if son == 3:
        continue

    if son == 6:
        break

    print(son)

print("Tsikl tugadi")`,
        output: `1
2
4
5
Tsikl tugadi`,
      },
      {
        type: "p",
        html: "3 sonida <code>continue</code> ishlaydi va <code>print</code> o'tkazib yuboriladi. 6 sonida esa <code>break</code> tsiklni butunlay tugatadi.",
      },
      { type: "h", html: "Amaliy misol: yig'indi" },
      {
        type: "p",
        html: "Foydalanuvchi «stop» yozgunicha sonlarni qabul qilib, ularning yig'indisini hisoblaymiz.",
      },
      {
        type: "code",
        title: "yigindi.py",
        code: `yigindi = 0

while True:
    qiymat = input("Son (stop = tugash): ")

    if qiymat == "stop":
        break

    yigindi += int(qiymat)

print("Yig'indi:", yigindi)`,
        stdin: "5\n10\n2\nstop",
        output: `Son (stop = tugash): 5
Son (stop = tugash): 10
Son (stop = tugash): 2
Son (stop = tugash): stop
Yig'indi: 17`,
      },
      {
        type: "note",
        variant: "warning",
        title: "Cheksiz tsikl",
        html: "Agar tsikl sharti hech qachon <code>False</code> bo'lmasa, dastur muzlaydi. Tsikl ichida shartni o'zgartiradigan kod (masalan, <code>son += 1</code>) yoki <code>break</code> bo'lishi shart.",
      },
      {
        type: "note",
        variant: "tip",
        title: "Sinov muhiti",
        html: "Kod <code>input()</code> so'rasa, «Kirish» maydonidagi qiymatlar tugagach, simulyator boshqa kiritishni kutmaydi. Shuning uchun har bir misolda <code>stop</code> kabi chiqish shartini qo'shish foydali.",
      },
    ],
    quiz: [
      {
        q: "while tsikli qachon tugaydi?",
        options: [
          "Har doim 10 marta aylangandan keyin",
          "Sharti False bo'lganda",
          "print() chaqirilganda",
          "Faqat break bo'lganda",
        ],
        answer: 1,
        explain:
          "while shart rost bo'lguncha ishlaydi. Shart False bo'lishi bilan tsikl tugaydi. break esa uni muddatidan oldin to'xtatadi.",
      },
      {
        q: "continue operatori nima qiladi?",
        options: [
          "Tsiklni butunlay to'xtatadi",
          "Joriy aylanishni o'tkazib, keyingisiga o'tadi",
          "Dasturni qayta ishga tushiradi",
          "Shartni True qiladi",
        ],
        answer: 1,
        explain:
          "continue joriy aylanishning qolgan kodini o'tkazib yuboradi, lekin tsiklning o'zi davom etadi. To'xtatish uchun break ishlatiladi.",
      },
    ],
  },

  {
    id: 12,
    title: "for tsikli va range()",
    desc: "Ro'yxat va sonlar oralig'i bo'ylab aylanish.",
    minutes: 11,
    blocks: [
      {
        type: "p",
        html: "<code>for</code> tsikli biror to'plamdagi har bir elementni navbat bilan oladi. Bu Python'da eng ko'p ishlatiladigan tsikl turi.",
      },
      {
        type: "code",
        title: "ismlar.py",
        code: `ismlar = ["Ali", "Zara", "Bek"]

for ism in ismlar:
    print("Salom,", ism)`,
        output: `Salom, Ali
Salom, Zara
Salom, Bek`,
      },
      { type: "h", html: "range() funksiyasi" },
      {
        type: "p",
        html: "<code>range()</code> sonlar ketma-ketligini yaratadi. Uch xil shaklda ishlatiladi:",
      },
      {
        type: "table",
        head: ["Shakl", "Natija"],
        rows: [
          ["<code>range(5)</code>", "<code>0, 1, 2, 3, 4</code>"],
          ["<code>range(1, 6)</code>", "<code>1, 2, 3, 4, 5</code>"],
          ["<code>range(1, 10, 2)</code>", "<code>1, 3, 5, 7, 9</code>"],
          ["<code>range(3, 0, -1)</code>", "<code>3, 2, 1</code>"],
        ],
      },
      {
        type: "note",
        variant: "info",
        title: "Tugash qiymati kirmaydi",
        html: "<code>range(1, 6)</code> 6 ni o'z ichiga olmaydi — 1 dan 5 gacha. Bu Python'dagi eng ko'p uchraydigan chalkashliklardan biri.",
      },
      {
        type: "code",
        title: "range.py",
        code: `for i in range(5):
    print(i, end=" ")
print()

for i in range(1, 10, 2):
    print(i, end=" ")
print()

for i in range(3, 0, -1):
    print(i)`,
        output: `0 1 2 3 4
1 3 5 7 9
3
2
1`,
      },
      { type: "h", html: "Ichma-ich tsikllar" },
      {
        type: "p",
        html: "Bir tsikl ichida ikkinchi tsikl bo'lishi mumkin. Har bir tashqi aylanishda ichki tsikl to'liq bajariladi.",
      },
      {
        type: "code",
        title: "jadval.py",
        code: `for i in range(1, 4):
    for j in range(1, 4):
        print(i * j, end=" ")
    print()`,
        output: `1 2 3
2 4 6
3 6 9`,
      },
      { type: "h", html: "enumerate() bilan indeks" },
      {
        type: "p",
        html: "Element bilan birga uning tartib raqami kerak bo'lsa, <code>enumerate()</code> ishlatiladi. <code>start</code> parametri sanashni qaysi sondan boshlashni belgilaydi.",
      },
      {
        type: "code",
        title: "enumerate.py",
        code: `mevalar = ["olma", "banan", "uzum"]

for indeks, meva in enumerate(mevalar, start=1):
    print(indeks, meva)`,
        output: `1 olma
2 banan
3 uzum`,
      },
      {
        type: "note",
        variant: "tip",
        title: "Qaysi tsiklni tanlash?",
        html: "Elementlar to'plami bo'ylab aylanish kerak bo'lsa — <code>for</code>. Tugash sharti noma'lum bo'lsa — <code>while</code>. Ko'p hollarda <code>for</code> qulayroq va xavfsizroq.",
      },
    ],
    quiz: [
      {
        q: "range(2, 8) qaysi sonlarni beradi?",
        options: ["2, 3, 4, 5, 6, 7", "2, 3, 4, 5, 6, 7, 8", "0, 1, 2, 3, 4, 5, 6, 7", "2, 4, 6, 8"],
        answer: 0,
        explain:
          "range(boshlanish, tugash) boshlanishdan boshlaydi, tugash qiymatini esa o'z ichiga olmaydi. Shuning uchun 2 dan 7 gacha.",
      },
      {
        q: "for tsikli nimaning ustida aylanishi mumkin?",
        options: [
          "Faqat sonlar ustida",
          "Faqat ro'yxatlar ustida",
          "Ro'yxat, matn, lug'at va range kabi to'plamlar ustida",
          "Faqat range() natijasi ustida",
        ],
        answer: 2,
        explain:
          "for har qanday iteratsiya qilinadigan obyekt ustida ishlaydi: ro'yxat, kortej, matn, lug'at, to'plam, range va boshqalar.",
      },
    ],
  },

  {
    id: 13,
    title: "Ro'yxatlar (list)",
    desc: "Bir nechta qiymatni bitta o'zgaruvchida saqlash va o'zgartirish.",
    minutes: 11,
    blocks: [
      {
        type: "p",
        html: "Ro'yxat (list) — bir nechta qiymatni tartib bilan saqlaydigan tuzilma. U <strong>o'zgaruvchan</strong>: elementlarni qo'shish, o'chirish va almashtirish mumkin. Ro'yxat kvadrat qavslar <code>[]</code> bilan yaratiladi.",
      },
      {
        type: "code",
        title: "ro'yxat.py",
        code: `mevalar = ["olma", "banan", "uzum"]

print(mevalar[0])
print(mevalar[-1])
print(len(mevalar))
print(mevalar[0:2])`,
        output: `olma
uzum
3
['olma', 'banan']`,
      },
      {
        type: "p",
        html: "Indekslash matnlardagi kabi ishlaydi: birinchi element indeksi 0, oxirgisi -1. Kesim <code>[0:2]</code> birinchi ikki elementni oladi.",
      },
      { type: "h", html: "Element qo'shish va o'chirish" },
      {
        type: "table",
        head: ["Metod", "Vazifasi"],
        rows: [
          ["<code>.append(x)</code>", "Oxiriga element qo'shadi"],
          ["<code>.insert(i, x)</code>", "i-indeksga element qo'shadi"],
          ["<code>.remove(x)</code>", "Birinchi uchragan x qiymatini o'chiradi"],
          ["<code>.pop(i)</code>", "i-indeksdagi elementni olib tashlab qaytaradi"],
          ["<code>.sort()</code>", "Ro'yxatni joyida tartiblaydi"],
          ["<code>.reverse()</code>", "Tartibni teskari qiladi"],
        ],
      },
      {
        type: "code",
        title: "metodlar.py",
        code: `sonlar = [5, 2, 9]

sonlar.append(4)
sonlar.insert(0, 1)
sonlar.remove(2)
sonlar.sort()

print(sonlar)
print(sonlar.pop())
print(sonlar)`,
        output: `[1, 4, 5, 9]
9
[1, 4, 5]`,
      },
      {
        type: "p",
        html: "Ketma-ketlikni kuzatamiz: <code>[5, 2, 9]</code> → append → <code>[5, 2, 9, 4]</code> → insert → <code>[1, 5, 2, 9, 4]</code> → remove(2) → <code>[1, 5, 9, 4]</code> → sort → <code>[1, 4, 5, 9]</code>. Oxirgi <code>pop()</code> eng katta elementni olib tashlaydi.",
      },
      { type: "h", html: "Ro'yxat bilan foydali amallar" },
      {
        type: "code",
        title: "amallar.py",
        code: `sonlar = [3, 7, 2, 8]

print(sum(sonlar))
print(max(sonlar))
print(min(sonlar))
print(7 in sonlar)
print(sorted(sonlar, reverse=True))`,
        output: `20
8
2
True
[8, 7, 3, 2]`,
      },
      {
        type: "note",
        variant: "info",
        title: "sort() va sorted() farqi",
        html: "<code>.sort()</code> ro'yxatning o'zini o'zgartiradi va <code>None</code> qaytaradi. <code>sorted()</code> esa yangi tartiblangan ro'yxat qaytaradi, asl ro'yxat o'zgarmaydi.",
      },
      { type: "h", html: "Ro'yxat ustida aylanish" },
      {
        type: "code",
        title: "aylanish.py",
        code: `baholar = [85, 92, 78]

for baho in baholar:
    print(f"Baho: {baho}")

baholar[0] = 90
print(baholar)
print(sum(baholar) / len(baholar))`,
        output: `Baho: 85
Baho: 92
Baho: 78
[90, 92, 78]
86.66666666666667`,
      },
      {
        type: "note",
        variant: "tip",
        title: "Bo'sh ro'yxat",
        html: "Bo'sh ro'yxat <code>[]</code> bilan yaratiladi. Tsikl yordamida unga element qo'shib borish mumkin: avval <code>natijalar = []</code>, keyin <code>natijalar.append(qiymat)</code>.",
      },
    ],
    quiz: [
      {
        q: "Ro'yxat oxiriga element qo'shish uchun qaysi metod ishlatiladi?",
        options: ["add()", "append()", "push()", "insert()"],
        answer: 1,
        explain:
          "append() elementni ro'yxat oxiriga qo'shadi. add() to'plamlar uchun, insert() esa indeks bo'yicha qo'shadi.",
      },
      {
        q: "sorted(sonlar) chaqirilgandan keyin sonlar ro'yxati qanday bo'ladi?",
        options: [
          "Tartiblanadi va o'zgaradi",
          "O'zgarmaydi, yangi ro'yxat qaytadi",
          "Bo'shab qoladi",
          "Xato beradi",
        ],
        answer: 1,
        explain:
          "sorted() asl ro'yxatga tegmaydi, tartiblangan nusxasini qaytaradi. Joyida tartiblash uchun .sort() ishlatiladi.",
      },
    ],
  },

  {
    id: 14,
    title: "Kortejlar va to'plamlar",
    desc: "tuple va set: o'zgarmas ketma-ketlik va noyob elementlar.",
    minutes: 10,
    blocks: [
      {
        type: "p",
        html: "Kortej (tuple) — ro'yxatga o'xshash, lekin <strong>o'zgarmas</strong> ketma-ketlik. Uni yaratgandan keyin elementlarini almashtirib bo'lmaydi. Kortej oddiy qavslar <code>()</code> bilan yoziladi.",
      },
      {
        type: "code",
        title: "kortej.py",
        code: `nuqta = (3, 5)
x, y = nuqta

print(nuqta)
print(nuqta[0])
print(x + y)
print(len(nuqta))`,
        output: `(3, 5)
3
8
2`,
      },
      {
        type: "p",
        html: "<code>x, y = nuqta</code> — kortejni o'zgaruvchilarga ajratish (unpacking). Bu usul funksiyalar bir nechta qiymat qaytarganda ko'p ishlatiladi.",
      },
      {
        type: "note",
        variant: "warning",
        title: "Kortej o'zgarmas",
        html: "<code>nuqta[0] = 4</code> yozsangiz <code>TypeError</code> xatosi chiqadi. O'zgartirish kerak bo'lsa ro'yxatdan foydalaning.",
      },
      {
        type: "p",
        html: "Kortejlar koordinata, sana yoki bir marta aniqlanadigan sozlamalar kabi o'zgarmas ma'lumotlar uchun qulay.",
      },
      { type: "h", html: "To'plamlar (set)" },
      {
        type: "p",
        html: "To'plam — <strong>noyob</strong> elementlardan iborat tartibsiz kolleksiya. Takroriy qiymatlar avtomatik olib tashlanadi. Jingalak qavslar <code>{}</code> bilan yaratiladi.",
      },
      {
        type: "code",
        title: "set.py",
        code: `sonlar = [1, 2, 2, 3, 3, 3]
noyob = set(sonlar)

print(len(noyob))
print(sorted(noyob))
print(2 in noyob)
print(5 in noyob)`,
        output: `3
[1, 2, 3]
True
False`,
      },
      {
        type: "note",
        variant: "info",
        title: "Nega sorted() ishlatildi?",
        html: "To'plam tartibsiz, shuning uchun uni to'g'ridan-to'g'ri chop etganda elementlar tartibi kafolatlanmaydi. Barqaror natija uchun <code>sorted()</code> bilan ro'yxatga aylantiriladi.",
      },
      { type: "h", html: "To'plam amallari" },
      {
        type: "table",
        head: ["Amal", "Belgisi", "Ma'nosi"],
        rows: [
          ["Kesishma", "<code>a &amp; b</code>", "Ikkala to'plamda ham bor elementlar"],
          ["Birlashma", "<code>a | b</code>", "Ikkala to'plamdagi barcha elementlar"],
          ["Ayirma", "<code>a - b</code>", "a da bor, b da yo'q elementlar"],
        ],
      },
      {
        type: "code",
        title: "amallar.py",
        code: `a = {1, 2, 3, 4}
b = {3, 4, 5}

print(sorted(a & b))
print(sorted(a | b))
print(sorted(a - b))

a.add(6)
a.discard(1)
print(sorted(a))`,
        output: `[3, 4]
[1, 2, 3, 4, 5]
[1, 2]
[2, 3, 4, 6]`,
      },
      {
        type: "note",
        variant: "tip",
        title: "Qachon nima ishlatiladi?",
        html: "Tartib muhim va o'zgartirish kerak bo'lsa — <code>list</code>. Tartib muhim, lekin o'zgartirish kerak bo'lmasa — <code>tuple</code>. Faqat noyob qiymatlar va tezkor tekshiruv kerak bo'lsa — <code>set</code>.",
      },
    ],
    quiz: [
      {
        q: "Kortej yaratilgandan keyin uning elementini o'zgartirish mumkinmi?",
        options: ["Ha, har doim", "Yo'q, TypeError beradi", "Faqat birinchi elementni", "Faqat append() bilan"],
        answer: 1,
        explain:
          "Tuple o'zgarmas (immutable) tur. Elementni almashtirishga urinish TypeError xatosiga olib keladi.",
      },
      {
        q: "set([1, 2, 2, 3, 3]) natijasida nechta element bo'ladi?",
        options: ["5", "3", "2", "1"],
        answer: 1,
        explain:
          "To'plam takroriy qiymatlarni saqlamaydi. 1, 2 va 3 qiymatlari qoladi — jami 3 ta noyob element.",
      },
    ],
  },

  {
    id: 15,
    title: "Lug'atlar (dict)",
    desc: "Kalit va qiymat juftliklarida ma'lumot saqlash.",
    minutes: 11,
    blocks: [
      {
        type: "p",
        html: "Lug'at (dictionary) ma'lumotni <strong>kalit: qiymat</strong> juftliklarida saqlaydi. Ro'yxatda elementga tartib raqami orqali murojaat qilsak, lug'atda kalit nomi orqali murojaat qilamiz.",
      },
      {
        type: "code",
        title: "talaba.py",
        code: `talaba = {
    "ism": "Aziza",
    "yosh": 16,
    "kurs": "Python",
}

print(talaba["ism"])
print(talaba["yosh"])
print(len(talaba))`,
        output: `Aziza
16
3`,
      },
      { type: "h", html: "get() metodi" },
      {
        type: "p",
        html: "Mavjud bo'lmagan kalitni <code>talaba[\"telefon\"]</code> orqali so'rasangiz <code>KeyError</code> xatosi chiqadi. <code>get()</code> esa xato bermaydi va <code>None</code> yoki ko'rsatilgan standart qiymatni qaytaradi.",
      },
      {
        type: "code",
        title: "get.py",
        code: `talaba = {"ism": "Aziza", "yosh": 16}

print(talaba.get("kurs", "Noma'lum"))
print(talaba.get("telefon"))

talaba["yosh"] = 17
talaba["kurs"] = "Python"

print(talaba["yosh"])
print(talaba["kurs"])`,
        output: `Noma'lum
None
17
Python`,
      },
      {
        type: "p",
        html: "Lug'atga yangi kalit qo'shish uchun shunchaki <code>lug'at[kalit] = qiymat</code> yoziladi. Agar kalit mavjud bo'lsa, qiymati yangilanadi.",
      },
      { type: "h", html: "Lug'at bo'ylab aylanish" },
      {
        type: "code",
        title: "reyting.py",
        code: `reyting = {"Ali": 85, "Zara": 92, "Bek": 78}

for ism, ball in reyting.items():
    print(f"{ism}: {ball}")

print(list(reyting.keys()))
print(list(reyting.values()))
print(sum(reyting.values()))`,
        output: `Ali: 85
Zara: 92
Bek: 78
['Ali', 'Zara', 'Bek']
[85, 92, 78]
255`,
      },
      {
        type: "ul",
        items: [
          "<code>.keys()</code> — barcha kalitlar.",
          "<code>.values()</code> — barcha qiymatlar.",
          "<code>.items()</code> — kalit va qiymat juftliklari.",
        ],
      },
      { type: "h", html: "Elementni o'chirish" },
      {
        type: "code",
        title: "ochirish.py",
        code: `reyting = {"Ali": 85, "Zara": 92}

ball = reyting.pop("Ali")

print(ball)
print(reyting)
print("Ali" in reyting)`,
        output: `85
{'Zara': 92}
False`,
      },
      {
        type: "note",
        variant: "warning",
        title: "Kalitlar takrorlanmaydi",
        html: "Bitta lug'atda bir xil kalit ikki marta bo'lishi mumkin emas. Yangi qiymat eski qiymatning ustiga yoziladi. Kalit sifatida matn, son yoki tuple ishlatilishi mumkin.",
      },
      {
        type: "note",
        variant: "tip",
        title: "Ichma-ich lug'at",
        html: "Lug'at ichida ro'yxat yoki boshqa lug'at saqlash mumkin: <code>{\"ism\": \"Aziza\", \"baholar\": [85, 92]}</code>. Bu JSON formatiga juda o'xshaydi.",
      },
    ],
    quiz: [
      {
        q: "Lug'atda mavjud bo'lmagan kalitni xatosiz olish uchun qaysi metod ishlatiladi?",
        options: ["dict[key]", "dict.get(key, default)", "dict.find(key)", "dict.index(key)"],
        answer: 1,
        explain:
          "get() kalit topilmasa xato bermaydi va None yoki ko'rsatilgan standart qiymatni qaytaradi. dict[key] esa KeyError beradi.",
      },
      {
        q: "reyting.items() nima qaytaradi?",
        options: [
          "Faqat kalitlar ro'yxatini",
          "Faqat qiymatlar ro'yxatini",
          "Kalit va qiymat juftliklarini",
          "Lug'atning uzunligini",
        ],
        answer: 2,
        explain:
          "items() har bir element uchun (kalit, qiymat) juftligini beradi. Shuning uchun for ism, ball in reyting.items() yozuvi ishlaydi.",
      },
    ],
  }
);
