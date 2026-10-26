/* Python course metadata and final exam */
window.PYTHON_COURSE = {
  title: "Python",
  subtitle: "noldan birinchi loyihagacha",
  modules: [
    { id: "asoslar", title: "Asoslar", lessons: [1, 2, 3, 4, 5, 6, 7, 8] },
    { id: "mantiq", title: "Mantiq va tsikllar", lessons: [9, 10, 11, 12] },
    {
      id: "malumotlar",
      title: "Ma'lumotlar tuzilmalari",
      lessons: [13, 14, 15],
    },
    {
      id: "funksiyalar",
      title: "Funksiyalar va fayllar",
      lessons: [16, 17, 18, 19],
    },
    { id: "oop", title: "OOP va loyiha", lessons: [20, 21] },
    { id: "ilgor", title: "Ilg'or Python", lessons: [22, 23, 24, 25] },
    {
      id: "amaliyot",
      title: "Professional amaliyot",
      lessons: [26, 27, 28, 29],
    },
    { id: "loyiha", title: "Yakuniy loyiha", lessons: [30] },
    { id: "imtihon", title: "Yakuniy bosqich", lessons: [31] },
  ],
  exam: {
    passScore: 12,
    total: 15,
    questions: [
      {
        q: "Ekranga matn chiqarish uchun qaysi funksiya ishlatiladi?",
        options: ["echo()", "print()", "write()", "output()"],
        answer: 1,
        explain: "print() qiymatlarni ekranga chiqaradi. echo va write boshqa tillar yoki fayllar uchun xos.",
      },
      {
        q: "17 // 5 ifodasining qiymati nechaga teng?",
        options: ["3", "3.4", "2", "4"],
        answer: 0,
        explain: "// butun bo'lish operatori. 17 ni 5 ga bo'lganda 3 ta butun qism chiqadi, qoldiq % bilan topiladi.",
      },
      {
        q: 'len("Salom") natijasi qanday bo\'ladi?',
        options: ["4", "5", "6", "Xato"],
        answer: 1,
        explain: "len() satrdagi belgilar sonini qaytaradi. «Salom» 5 ta belgidan iborat.",
      },
      {
        q: "input() funksiyasi doim qanday turdagi qiymat qaytaradi?",
        options: ["int", "float", "str", "bool"],
        answer: 2,
        explain: "input() foydalanuvchi kiritgan matnni str sifatida qaytaradi. Son kerak bo'lsa int() yoki float() bilan aylantirish shart.",
      },
      {
        q: "Python'da shart bloklarini nima bilan ajratamiz?",
        options: ["Qavslar { }", "Chekinish (probel)", "Nuqta-vergul", "Tenglik belgisi"],
        answer: 1,
        explain: "Python'da bloklar 4 probeldan iborat chekinish orqali ajratiladi.",
      },
      {
        q: "range(1, 6) nechta son beradi va ular qaysilar?",
        options: ["6 ta: 0..5", "5 ta: 1..5", "4 ta: 1..4", "6 ta: 1..6"],
        answer: 1,
        explain: "range(boshlanish, tugash) tugash qiymatini o'z ichiga olmaydi: 1, 2, 3, 4, 5 — jami 5 ta.",
      },
      {
        q: "Ro'yxat oxiriga yangi element qo'shish uchun qaysi metod ishlatiladi?",
        options: ["insert()", "append()", "add()", "push()"],
        answer: 1,
        explain: "append() elementni ro'yxat oxiriga qo'shadi. insert() esa ko'rsatilgan indeksga joylashtiradi.",
      },
      {
        q: "Lug'atda mavjud bo'lmagan kalitni xatosiz olish uchun nima ishlatiladi?",
        options: ["dict[key]", "dict.get(key, default)", "dict.find(key)", "dict.index(key)"],
        answer: 1,
        explain: "get() kalit bo'lmasa xato bermaydi va None yoki ko'rsatilgan standart qiymatni qaytaradi.",
      },
      {
        q: "Funksiyadan qiymat qaytarish uchun qaysi kalit so'z ishlatiladi?",
        options: ["yield", "print", "return", "result"],
        answer: 2,
        explain: "return qiymatni funksiya natijasi sifatida qaytaradi. print esa faqat ekranga chiqaradi.",
      },
      {
        q: "Xatolarni ushlash uchun qaysi konstruksiya ishlatiladi?",
        options: ["if / else", "try / except", "for / in", "switch / case"],
        answer: 1,
        explain: "try ichidagi kod bajariladi, xato yuz bersa except bloki ishga tushadi.",
      },
      {
        q: "class kalit so'zi yordamida nima yaratiladi?",
        options: ["Faqat o'zgaruvchi", "Obyektlar uchun shablon", "Yangi fayl", "Tsikl"],
        answer: 1,
        explain: "class — obyektlar uchun shablon (sinf). Uning asosida keraklicha obyekt yaratish mumkin.",
      },
      {
        q: "[x * 2 for x in range(3)] ifodasining natijasi nima?",
        options: ["[2, 4, 6]", "[0, 2, 4]", "[0, 1, 2]", "[1, 2, 3]"],
        answer: 1,
        explain: "range(3) 0, 1 va 2 sonlarini beradi. Har bir son 2 ga ko'paytirilganda [0, 2, 4] ro'yxati hosil bo'ladi.",
      },
      {
        q: "Generator funksiyasida qiymatlarni birma-bir qaytarish uchun qaysi kalit so'z ishlatiladi?",
        options: ["return", "yield", "break", "print"],
        answer: 1,
        explain: "yield qiymat qaytaradi, ammo funksiyani tugatmaydi. Generator keyingi chaqiruvda o'z ishini yield'dan keyin davom ettiradi.",
      },
      {
        q: "JSON matnini Python lug'ati yoki ro'yxatiga aylantirish uchun qaysi funksiya ishlatiladi?",
        options: ["json.dumps()", "json.loads()", "json.open()", "json.parse()"],
        answer: 1,
        explain: "json.loads() JSON formatidagi matnni tahlil qilib, Python obyektiga aylantiradi. json.dumps() esa teskari yo'nalishda ishlaydi.",
      },
      {
        q: "SQLite'da foydalanuvchi qiymatini xavfsiz bog'lash uchun nima ishlatiladi?",
        options: ["Matnni SQL ichiga to'g'ridan-to'g'ri qo'shish", "? placeholder va parametrlar", "Faqat print()", "commit()"],
        answer: 1,
        explain: "? placeholder va alohida parametrlar qiymatni SQL buyrug'idan ajratadi. Bu SQL injection xavfini kamaytiradigan asosiy usul.",
      },
    ],
  },
};
window.PYTHON_LESSONS = window.PYTHON_LESSONS || [];
