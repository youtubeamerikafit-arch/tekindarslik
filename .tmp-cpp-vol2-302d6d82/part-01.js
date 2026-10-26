module.exports = [
  {
    id: 50,
    title: "Funksiya shablonlari: deduksiya va tur chegaralari",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "Birinchi jildda shablonlar bilan tanishgan edik. Endi <b>tur deduksiyasi</b> — kompilyator <code>T</code> ni argumentlardan qanday aniqlashini chuqur ko'ramiz. Shablon — bu konkret tur emas, balki tur bo'yicha parametrlangan <b>qolip</b>; kod esa faqat kerakli tur bilan chaqirilganda generatsiya qilinadi.",
      },
      {
        type: "code",
        title: "maksimum.cpp",
        code: `#include <iostream>
#include <string>

template <typename T>
T maksimum(const T& a, const T& b) {
    return (a < b) ? b : a;
}

int main() {
    std::cout << maksimum(3, 7) << '\\n';
    std::cout << maksimum(2.5, 1.5) << '\\n';
    std::cout << maksimum<std::string>("olma", "anor") << '\\n';
}`,
        output: `7
2.5
olma`,
      },
      {
        type: "p",
        html: "Birinchi chaqiruvda ikkala argument <code>int</code>, shuning uchun <code>T = int</code>. Ikkinchisida <code>T = double</code>. Uchinchisida <code>T</code> ni qo'lda <code>std::string</code> deb beramiz; aks holda <code>const char*</code> lar <b>ko'rsatkich</b> sifatida taqqoslanardi. Diqqat: <code>maksimum(3, 4.5)</code> kompilyatsiya xatosi beradi, chunki bitta <code>T</code> uchun ikki xil tur kelishmaydi.",
      },
      {
        type: "code",
        title: "umumiy_tur.cpp",
        code: `#include <iostream>
#include <type_traits>

template <typename A, typename B>
auto qosh(A a, B b) -> std::common_type_t<A, B> {
    return a + b;
}

int main() {
    std::cout << qosh(2, 3.5) << '\\n';
    std::cout << qosh(10, 20) << '\\n';
    std::cout << qosh(1.5f, 2.5) << '\\n';
}`,
        output: `5.5
30
4`,
      },
      {
        type: "table",
        head: ["Chaqiruv", "Natija", "Sabab"],
        rows: [
          ["<code>maksimum(3, 7)</code>", "<code>T = int</code>", "Ikkala argument bir xil turda"],
          ["<code>maksimum(3, 4.5)</code>", "Xato", "Bitta <code>T</code> uchun ikki xil tur"],
          ["<code>maksimum&lt;double&gt;(3, 4)</code>", "<code>T = double</code>", "Tur qo'lda berilgan, int lar konvertatsiya bo'ladi"],
          ["<code>maksimum(\"a\", \"b\")</code>", "<code>const char*</code>", "Massiv ko'rsatkichga aylanadi, matn emas"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Ta'rif ham header'da bo'lsin",
        html: "Shablon ta'rifi odatda header faylida yoziladi: kompilyator instantiation paytida <b>to'liq ta'rifni</b> ko'rishi kerak. Faqat deklaratsiyani header'da qoldirib, ta'rifni <code>.cpp</code> ga yashirsangiz, boshqa fayldan chaqirilganda linker xatosi chiqadi.",
      },
    ],
    quiz: [
      {
        q: "template <typename T> T katta(T a, T b); uchun katta(3, 4.5) chaqiruvi qanday natija beradi?",
        options: [
          "T = double bo'lib, 4.5 qaytadi",
          "T = int bo'lib, 4 qaytadi",
          "Kompilyatsiya xatosi: T uchun turlar ziddiyatli",
          "Runtime xatosi"
        ],
        answer: 2,
        explain: "Bitta T ikkala argumentdan deduksiya qilinadi; int va double bir vaqtda mos kelmaydi, shuning uchun kompilyator xato beradi.",
      },
      {
        q: "maksimum<double>(3, 4) chaqiruvida T qanday bo'ladi?",
        options: [
          "double — tur qo'lda berilgan",
          "int — argumentdan olinadi",
          "auto — kompilyator tanlaydi",
          "Chaqiruv noto'g'ri, chunki argumentlar int"
        ],
        answer: 0,
        explain: "Aniq template argumenti deduksiyani bosib ketadi: T = double, int argumentlar double ga konvertatsiya qilinadi.",
      },
      {
        q: "Nega shablon funksiyasining ta'rifi odatda header faylida bo'ladi?",
        options: [
          "Header fayllar har doim tezroq kompilyatsiya qilinadi",
          "Kompilyator instantiation uchun to'liq ta'rifni ko'rishi kerak",
          "Shablonlar faqat headerda ishlaydi",
          "Linker shablonlarni headerdan qidiradi"
        ],
        answer: 1,
        explain: "Shablon konkret tur uchun chaqirilganda generatsiya qilinadi; buning uchun kompilyatorga ta'rifning o'zi kerak.",
      },
    ],
  },
  {
    id: 51,
    title: "Klass shablonlari, CTAD va member templates",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Klass shabloni — turga bog'liq ma'lumot tuzilmasi qolipi. <code>Uyum&lt;int&gt;</code> va <code>Uyum&lt;std::string&gt;</code> — bitta qolipning ikki xil <b>instantiation</b> i. C++17 dan boshlab konstruktor argumentlaridan klass shablon parametrini <b>CTAD</b> (Class Template Argument Deduction) orqali aniqlash mumkin.",
      },
      {
        type: "code",
        title: "uyum.cpp",
        code: `#include <iostream>
#include <stdexcept>
#include <vector>

template <typename T>
class Uyum {
public:
    void qosh(const T& qiymat) { elementlar_.push_back(qiymat); }

    T olish() {
        if (elementlar_.empty()) {
            throw std::runtime_error("uyum bo'sh");
        }
        T qiymat = elementlar_.back();
        elementlar_.pop_back();
        return qiymat;
    }

    std::size_t hajm() const { return elementlar_.size(); }

private:
    std::vector<T> elementlar_;
};

int main() {
    Uyum<int> sonlar;
    sonlar.qosh(10);
    sonlar.qosh(20);
    std::cout << sonlar.hajm() << '\\n';
    std::cout << sonlar.olish() << '\\n';
    std::cout << sonlar.olish() << '\\n';
    std::cout << sonlar.hajm() << '\\n';
}`,
        output: `2
20
10
0`,
      },
      {
        type: "p",
        html: "Klass shabloni ichida <b>member template</b> — o'z parametrlari bo'lgan metod — ham bo'lishi mumkin. Quyidagi <code>Quti</code> qiymatni saqlaydi va istalgan funksiyani unga qo'llaydi. <code>Quti quti{42}</code> yozuvi CTAD tufayli <code>Quti&lt;int&gt;</code> deb ochiladi.",
      },
      {
        type: "code",
        title: "quti.cpp",
        code: `#include <iostream>
#include <string>
#include <utility>

template <typename T>
class Quti {
public:
    explicit Quti(T qiymat) : qiymat_(std::move(qiymat)) {}

    const T& qiymat() const { return qiymat_; }

    template <typename F>
    auto aylantir(F f) const { return f(qiymat_); }

private:
    T qiymat_;
};

int main() {
    Quti quti{42};
    std::cout << quti.qiymat() << '\\n';
    std::cout << quti.aylantir([](int x) { return x * 2; }) << '\\n';

    Quti matn{std::string("Noldan")};
    std::cout << matn.aylantir([](const std::string& s) { return s.size(); }) << '\\n';
}`,
        output: `42
84
6`,
      },
      {
        type: "table",
        head: ["Yozuv", "Ma'nosi"],
        rows: [
          ["<code>Uyum&lt;int&gt; u;</code>", "Aniq tur bilan instantiation"],
          ["<code>Quti q{42};</code>", "CTAD konstruktordan <code>T = int</code> ni topadi"],
          ["<code>template &lt;typename F&gt; auto f(F);</code>", "Klass ichidagi member template"],
          ["<code>Uyum&lt;int&gt;::hajm</code>", "Har instantiation uchun alohida funksiya"],
        ],
      },
      {
        type: "note",
        variant: "info",
        title: "Member templateni tashqarida yozish",
        html: "Agar member template klass tashqarisida aniqlansa, ikkita prefiks kerak: <code>template &lt;typename T&gt; template &lt;typename F&gt; auto Quti&lt;T&gt;::aylantir(F f) const { ... }</code>. Birinchi <code>template</code> klass parametriga, ikkinchisi metodning o'z parametriga tegishli.",
      },
    ],
    quiz: [
      {
        q: "Quti quti{42}; yozuvi qaysi imkoniyatdan foydalanadi?",
        options: [
          "To'liq maxsuslashtirish",
          "Qismiy maxsuslashtirish",
          "CTAD — klass shablon argumentini deduksiya qilish",
          "Operatorni qayta yuklash"
        ],
        answer: 2,
        explain: "C++17 CTAD konstruktor argumentidan T = int ni aniqlaydi; shu sababli Quti<int> yozish shart emas.",
      },
      {
        q: "Klass shabloni a'zo funksiyasini klass tashqarisida aniqlashda qaysi prefiks kerak?",
        options: [
          "Faqat inline",
          "Faqat constexpr",
          "template <typename T> — klass parametri uchun",
          "typename T = default"
        ],
        answer: 2,
        explain: "Klass shabloni parametri metod ta'rifidan oldin yana e'lon qilinadi; member template bo'lsa yana bitta template qatori qo'shiladi.",
      },
      {
        q: "Klass shablonidagi static a'zo har bir instantiation uchun qanday bo'ladi?",
        options: [
          "Har bir instantiation uchun alohida nusxa",
          "Barcha turlar uchun bitta umumiy nusxa",
          "Faqat int uchun yaratiladi",
          "Statik a'zo shablonda taqiqlangan"
        ],
        answer: 0,
        explain: "Uyum<int> va Uyum<double> — alohida klasslar; ularning static a'zolari ham alohida nusxaga ega.",
      },
    ],
  },
  {
    id: 52,
    title: "Variadic templates va fold expressions",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "<b>Variadic template</b> ixtiyoriy sondagi argumentlarni qabul qiladi: <code>typename... Args</code> — tur paketi, <code>Args... args</code> — qiymat paketi. C++17 <b>fold expression</b> lari paket ustidan qisqa va xavfsiz amal bajarish imkonini beradi; rekursiv yordamchi funksiyalar ko'pincha shart emas.",
      },
      {
        type: "code",
        title: "yigindi.cpp",
        code: `#include <iostream>

template <typename... Sonlar>
auto yigindi(Sonlar... sonlar) {
    return (0 + ... + sonlar);
}

template <typename... Turlar>
constexpr std::size_t soni(Turlar...) {
    return sizeof...(Turlar);
}

int main() {
    std::cout << yigindi() << '\\n';
    std::cout << yigindi(1, 2, 3) << '\\n';
    std::cout << yigindi(1.5, 2.5, 3.0) << '\\n';
    std::cout << soni(1, 2.5, 'a') << '\\n';
}`,
        output: `0
6
7
3`,
      },
      {
        type: "p",
        html: "<code>(0 + ... + sonlar)</code> — boshlang'ich qiymatli binary fold. Bo'sh paketda ham natija <code>0</code> bo'ladi, shuning uchun <code>yigindi()</code> xato bermaydi. <code>sizeof...(Args)</code> paketdagi <b>elementlar sonini</b> kompilyatsiya vaqtida qaytaradi.",
      },
      {
        type: "code",
        title: "chop_etish.cpp",
        code: `#include <iostream>
#include <string>

template <typename... Qiymatlar>
void chop(const std::string& nom, Qiymatlar&&... qiymatlar) {
    std::cout << nom << ": ";
    ((std::cout << qiymatlar << ' '), ...);
    std::cout << "(jami " << sizeof...(Qiymatlar) << " ta)\\n";
}

int main() {
    chop("sonlar", 1, 2, 3);
    chop("aralash", "C++", 20, 3.14);
    chop("bo'sh");
}`,
        output: `sonlar: 1 2 3 (jami 3 ta)
aralash: C++ 20 3.14 (jami 3 ta)
bo'sh: (jami 0 ta)`,
      },
      {
        type: "table",
        head: ["Fold", "Shakli", "Natija"],
        rows: [
          ["Unary left", "<code>(... + args)</code>", "<code>((a + b) + c)</code>"],
          ["Unary right", "<code>(args + ...)</code>", "<code>a + (b + c)</code>"],
          ["Binary left", "<code>(0 + ... + args)</code>", "Bo'sh paketda ham <code>0</code>"],
          ["Comma fold", "<code>((cout &lt;&lt; args), ...)</code>", "Har bir argumentni ketma-ket chiqaradi"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Bo'sh paket va operator",
        html: "Unary fold bo'sh paketda faqat <code>&amp;&amp;</code>, <code>||</code> va <code>,</code> uchun standart qiymatga ega (<code>true</code>, <code>false</code>, <code>void()</code>). Qo'shish uchun boshlang'ich qiymat bering: <code>(0 + ... + args)</code>. Aks holda bo'sh chaqiruv kompilyatsiya xatosi beradi.",
      },
    ],
    quiz: [
      {
        q: "sizeof...(Args) ifodasi nimani qaytaradi?",
        options: [
          "Bitta argumentning xotira hajmini",
          "Tur paketidagi elementlar sonini",
          "Paketdagi umumiy baytlar sonini",
          "Faqat birinchi argument turini"
        ],
        answer: 1,
        explain: "sizeof... paketdagi tur yoki qiymatlar sonini kompilyatsiya vaqtida hisoblaydi, xotira hajmini emas.",
      },
      {
        q: "Nega yigindi shablonida (0 + ... + args) shakli ishlatiladi?",
        options: [
          "U tezroq bajariladi",
          "U har bir argumentni ikki marta hisoblaydi",
          "Bo'sh paketda ham aniq 0 natijasini beradi",
          "U faqat butun sonlar uchun ishlaydi"
        ],
        answer: 2,
        explain: "Boshlang'ich qiymatli binary fold bo'sh paket uchun identity beradi; oddiy unary fold esa bo'sh paketda xato bo'lardi.",
      },
      {
        q: "((std::cout << args << ' '), ...) qanday fold hisoblanadi?",
        options: [
          "Binary right fold",
          "Unary right fold",
          "Binary left fold",
          "Comma operatorli unary left fold"
        ],
        answer: 3,
        explain: "Paket operatorning chap tomonida va vergul bilan kengaytiriladi; bu comma operatorli unary left fold.",
      },
    ],
  },
  {
    id: 53,
    title: "Type traits va tag dispatch",
    minutes: 16,
    blocks: [
      {
        type: "p",
        html: "<code>&lt;type_traits&gt;</code> turlar haqidagi savollarga <b>kompilyatsiya vaqtida</b> javob beradi: <code>std::is_integral_v&lt;T&gt;</code>, <code>std::is_pointer_v&lt;T&gt;</code>, <code>std::remove_reference_t&lt;T&gt;</code>. Bu ma'lumot asosida kod yo'nalishini tanlash <b>tag dispatch</b> deb ataladi: funksiya <code>std::true_type</code> yoki <code>std::false_type</code> parametri orqali ortiqcha yuklanadi.",
      },
      {
        type: "code",
        title: "tur_aniqlash.cpp",
        code: `#include <iostream>
#include <string>
#include <type_traits>

template <typename T>
std::string tur_impl(std::true_type) {
    return "butun son";
}

template <typename T>
std::string tur_impl(std::false_type) {
    return "butun son emas";
}

template <typename T>
std::string tur() {
    return tur_impl<T>(std::is_integral<T>{});
}

int main() {
    std::cout << tur<int>() << '\\n';
    std::cout << tur<long long>() << '\\n';
    std::cout << tur<double>() << '\\n';
    std::cout << tur<std::string>() << '\\n';
}`,
        output: `butun son
butun son
butun son emas
butun son emas`,
      },
      {
        type: "p",
        html: "<code>std::is_integral&lt;T&gt;{}</code> — bu <code>std::true_type</code> yoki <code>std::false_type</code> ning obyekti. Ikkala <code>tur_impl</code> ham kompilyatsiya qilinadi, lekin chaqiruvda aniq mos keladigan bittasi tanlanadi. Bu — <b>overload resolution</b> ga asoslangan metaprogrammalashning eng sodda ko'rinishi.",
      },
      {
        type: "code",
        title: "traits_tahlil.cpp",
        code: `#include <iostream>
#include <type_traits>

template <typename T>
void tahlil(T&&) {
    using Asl = std::remove_reference_t<T>;
    std::cout << std::is_const_v<Asl> << ' '
              << std::is_pointer_v<Asl> << ' '
              << std::is_array_v<Asl> << '\\n';
}

int main() {
    int son = 5;
    const int cson = 7;
    int massiv[3] = {1, 2, 3};

    tahlil(son);
    tahlil(cson);
    tahlil(massiv);
}`,
        output: `0 0 0
1 0 0
0 0 1`,
      },
      {
        type: "table",
        head: ["Trait", "Savol", "Misol natijasi"],
        rows: [
          ["<code>is_integral_v&lt;int&gt;</code>", "Butun son turimi?", "<code>true</code>"],
          ["<code>is_same_v&lt;int, long&gt;</code>", "Turlar aynan bir xilmi?", "<code>false</code>"],
          ["<code>remove_reference_t&lt;int&amp;&gt;</code>", "Havolani olib tashlaydi", "<code>int</code>"],
          ["<code>decay_t&lt;int[3]&gt;</code>", "Massivni ko'rsatkichga aylantiradi", "<code>int*</code>"],
          ["<code>is_array_v&lt;int[3]&gt;</code>", "Massiv turimi?", "<code>true</code>"],
        ],
      },
      {
        type: "note",
        variant: "info",
        title: "T&& bu yerda universal havola",
        html: "Shablondagi <code>T&&</code> har doim ham rvalue havola emas: lvalue argumentda <code>T = int&amp;</code> bo'lib, reference collapsing natijasida parametr <code>int&amp;</code> bo'ladi. Shu sababli massiv ham buzilmasdan uzatiladi. Perfect forwarding bu mexanizmni to'liq ochadi.",
      },
    ],
    quiz: [
      {
        q: "std::remove_reference_t<int&> qanday tur qaytaradi?",
        options: [
          "int",
          "int&",
          "const int",
          "int*"
        ],
        answer: 0,
        explain: "remove_reference havola qismini olib tashlaydi; int& dan int qoladi.",
      },
      {
        q: "std::is_integral<T>{} ifodasi qanday obyekt yaratadi?",
        options: [
          "Har doim bool qiymat",
          "T turidagi obyekt",
          "std::true_type yoki std::false_type obyekti",
          "Kompilyatsiya xatosi"
        ],
        answer: 2,
        explain: "type trait lar true_type yoki false_type dan meros oladi; ular tag dispatch uchun teg vazifasini bajaradi.",
      },
      {
        q: "Tag dispatch qaysi muammoni hal qiladi?",
        options: [
          "Runtime polimorfizmni yoqish",
          "Bir xil interfeys ostida turga qarab turli implementatsiyani tanlash",
          "Xotirani avtomatik bo'shatish",
          "Ko'p oqimli hisoblashni boshlash"
        ],
        answer: 1,
        explain: "Tag dispatch kompilyatsiya vaqtida trait natijasiga qarab mos overloadni tanlaydi; virtual chaqiruvsiz statik polimorfizm beradi.",
      },
    ],
  },
  {
    id: 54,
    title: "Shablon maxsuslashtirish: to'liq va qismiy",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Ba'zi turlar uchun umumiy shablon mantiqi mos kelmaydi. <b>To'liq maxsuslashtirish</b> (<code>template &lt;&gt;</code>) bitta konkret tur uchun alohida implementatsiya beradi. <b>Qismiy maxsuslashtirish</b> esa tur oilasi uchun — masalan, barcha <code>vector&lt;T&gt;</code> yoki barcha <code>T*</code> uchun — qoidani aniqlashtiradi.",
      },
      {
        type: "code",
        title: "chop_bool.cpp",
        code: `#include <iostream>
#include <string>

template <typename T>
struct Chop {
    static void yoz(const T& qiymat) {
        std::cout << qiymat << '\\n';
    }
};

template <>
struct Chop<bool> {
    static void yoz(bool qiymat) {
        std::cout << (qiymat ? "rost" : "yolg'on") << '\\n';
    }
};

int main() {
    Chop<int>::yoz(42);
    Chop<std::string>::yoz("matn");
    Chop<bool>::yoz(true);
    Chop<bool>::yoz(false);
}`,
        output: `42
matn
rost
yolg'on`,
      },
      {
        type: "p",
        html: "Qismiy maxsuslashtirishda shablon parametrlari saqlanadi, lekin asosiy tur <b>shakli</b> aniqlanadi. Quyida <code>Royxat&lt;std::vector&lt;T&gt;&gt;</code> va <code>Royxat&lt;T*&gt;</code> — ikki xil qismiy maxsuslashtirish. Kompilyator eng <b>aniq mos</b> variantni tanlaydi.",
      },
      {
        type: "code",
        title: "royxat.cpp",
        code: `#include <iostream>
#include <vector>

template <typename T>
struct Royxat {
    static const char* nom() { return "oddiy"; }
};

template <typename T>
struct Royxat<std::vector<T>> {
    static const char* nom() { return "vector"; }
};

template <typename T>
struct Royxat<T*> {
    static const char* nom() { return "pointer"; }
};

int main() {
    std::cout << Royxat<int>::nom() << '\\n';
    std::cout << Royxat<std::vector<int>>::nom() << '\\n';
    std::cout << Royxat<double*>::nom() << '\\n';
    std::cout << Royxat<std::vector<double*>>::nom() << '\\n';
}`,
        output: `oddiy
vector
pointer
vector`,
      },
      {
        type: "table",
        head: ["Shakl", "Misol", "Qachon"],
        rows: [
          ["Primary template", "<code>template &lt;typename T&gt; struct X;</code>", "Umumiy holat"],
          ["To'liq maxsuslashtirish", "<code>template &lt;&gt; struct X&lt;bool&gt;;</code>", "Bitta aniq tur"],
          ["Qismiy maxsuslashtirish", "<code>template &lt;typename T&gt; struct X&lt;T*&gt;;</code>", "Tur oilasi (ko'rsatkichlar)"],
          ["Cheklov", "Funksiya shabloni qismiy maxsuslashtirilmaydi", "Funksiyada overload yoki <code>if constexpr</code> ishlating"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "std ni maxsuslashtirmang",
        html: "Standart kutubxona shablonlarini (masalan, <code>std::hash</code> dan tashqari ruxsat etilgan hollar) o'zboshimchalik bilan maxsuslashtirish — UB. Maxsuslashtirish asosiy shablon ko'rinishidan <b>keyin</b> va birinchi ishlatilishdan <b>oldin</b> e'lon qilinishi kerak; aks holda ODR buziladi.",
      },
    ],
    quiz: [
      {
        q: "template <> struct Chop<bool> yozuvi nima deyiladi?",
        options: [
          "To'liq maxsuslashtirish",
          "Qismiy maxsuslashtirish",
          "CTAD",
          "Tag dispatch"
        ],
        answer: 0,
        explain: "template <> bilan bitta konkret tur uchun to'liq maxsuslashtirish beriladi.",
      },
      {
        q: "Royxat<std::vector<int>> uchun qaysi maxsuslashtirish tanlanadi?",
        options: [
          "Royxat<T*>",
          "Primary template",
          "Royxat<std::vector<T>> — qismiy maxsuslashtirish",
          "Ikkala maxsuslashtirish bir vaqtda"
        ],
        answer: 2,
        explain: "vector<int> aynan vector<T> shakliga mos keladi; T* shakli esa mos emas, chunki butun tur ko'rsatkich emas.",
      },
      {
        q: "Maxsuslashtirish qachon e'lon qilinishi kerak?",
        options: [
          "Birinchi ishlatilishdan keyin istalgan joyda",
          "Faqat .cpp fayl oxirida",
          "Faqat namespace tashqarisida",
          "Asosiy shablon ko'rinishidan keyin va birinchi instantiatsiyadan oldin"
        ],
        answer: 3,
        explain: "Aks holda kompilyator asosiy shablonni instantiatsiya qilib qo'yishi va ODR/qoida buzilishiga olib kelishi mumkin.",
      },
    ],
  },
];
