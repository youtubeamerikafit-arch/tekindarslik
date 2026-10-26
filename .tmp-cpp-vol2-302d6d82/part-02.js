module.exports = [
  {
    id: 55,
    title: "constexpr: kompilyatsiya vaqtida hisoblash",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "<code>constexpr</code> funksiya ikkala rejimda ham ishlaydi: argumentlar kompilyatsiya vaqtida ma'lum bo'lsa, natija <b>compile-time</b> hisoblanadi; aks holda oddiy funksiya kabi runtime bajariladi. Bu C++11 dagi bir qatorli cheklovlardan ancha uzoq: C++14 dan boshlab tsikl, lokal o'zgaruvchi va <code>if</code> ishlatish mumkin.",
      },
      {
        type: "code",
        title: "faktorial.cpp",
        code: `#include <iostream>

constexpr long long faktorial(int n) {
    long long natija = 1;
    for (int i = 2; i <= n; ++i) {
        natija *= i;
    }
    return natija;
}

int main() {
    constexpr auto uch = faktorial(3);
    static_assert(uch == 6, "3! olti bo'lishi kerak");

    std::cout << faktorial(5) << '\\n';
    std::cout << faktorial(10) << '\\n';
    std::cout << uch << '\\n';
}`,
        output: `120
3628800
6`,
      },
      {
        type: "p",
        html: "<code>static_assert</code> shartni kompilyatsiya vaqtida tekshiradi: noto'g'ri bo'lsa, dastur umuman qurilmaydi. <code>constexpr auto uch</code> esa qiymatni kompilyator hisoblab, natijani binar faylga yozadi. <code>faktorial(5)</code> ni ham kompilyator hisoblashi mumkin, lekin bu majburiy emas — optimizatsiya darajasiga bog'liq.",
      },
      {
        type: "code",
        title: "kvadratlar.cpp",
        code: `#include <array>
#include <iostream>

constexpr std::array<int, 5> kvadratlar() {
    std::array<int, 5> natija{};
    for (int i = 0; i < 5; ++i) {
        natija[i] = i * i;
    }
    return natija;
}

int main() {
    constexpr auto kv = kvadratlar();
    static_assert(kv[3] == 9);

    int yigindi = 0;
    for (int x : kv) {
        yigindi += x;
    }

    std::cout << kv[2] << ' ' << kv[4] << '\\n';
    std::cout << yigindi << '\\n';
}`,
        output: `4 16
30`,
      },
      {
        type: "table",
        head: ["Yozuv", "Ma'nosi", "Cheklov"],
        rows: [
          ["<code>constexpr int x = 5;</code>", "Kompilyatsiya vaqtida hisoblanadigan qiymat", "Boshlang'ich qiymat constant expression bo'lishi kerak"],
          ["<code>constexpr int f(int);</code>", "Compile-time va runtime chaqiruvga yaroqli funksiya", "C++14 dan tsikl va lokal o'zgaruvchi mumkin"],
          ["<code>static_assert(shart);</code>", "Kompilyatsiya vaqtidagi tekshiruv", "Shart compile-time ma'lum bo'lishi shart"],
          ["<code>if constexpr</code>", "Shartga qarab kod shoxini tanlash", "Bu alohida dars mavzusi"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "constexpr — kafolat emas, imkoniyat",
        html: "Funksiya <code>constexpr</code> bo'lsa ham, runtime argument bilan chaqirilsa oddiy kod sifatida bajariladi. Agar faqat compile-time bajarilishini <b>majburan</b> xohlasangiz, <code>consteval</code> ishlating. Katta jadvallarni <code>constexpr</code> bilan yaratish binar hajmini oshirishi mumkin — profiling qiling.",
      },
    ],
    quiz: [
      {
        q: "constexpr funksiya runtime o'zgaruvchi bilan chaqirilsa nima bo'ladi?",
        options: [
          "Kompilyatsiya xatosi beradi",
          "Har doim compile-time hisoblanadi",
          "Oddiy funksiya kabi runtime bajariladi",
          "Avtomatik consteval ga aylanadi"
        ],
        answer: 2,
        explain: "constexpr funksiya ikki rejimga yaroqli; argumentlar compile-time bo'lmasa, u runtime bajariladi.",
      },
      {
        q: "static_assert noto'g'ri shart bilan yozilsa nima yuz beradi?",
        options: [
          "Kompilyatsiya xatosi",
          "Runtime istisno",
          "Dastur sekin ishlaydi",
          "Faqat ogohlantirish chiqadi"
        ],
        answer: 0,
        explain: "static_assert kompilyatsiya vaqtida tekshiriladi; shart bajarilmasa build to'xtaydi.",
      },
      {
        q: "constexpr std::array ni qaytaruvchi funksiya nima uchun foydali?",
        options: [
          "Xotirani butunlay tejaydi",
          "Jadvalni kompilyatsiya vaqtida tayyorlab, runtime hisoblashni yo'qotadi",
          "Har doim vector dan tezroq ishlaydi",
          "Dinamik allokatsiyani yoqadi"
        ],
        answer: 1,
        explain: "constexpr funksiya natijasi compile-time hisoblanib, runtime yuklamani kamaytiradi; bu kafolat emas, lekin odatiy foyda.",
      },
    ],
  },
  {
    id: 56,
    title: "consteval, constinit va if constexpr",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Uchta vosita bir-biridan farq qiladi: <code>consteval</code> funksiya <b>faqat</b> compile-time chaqiriladi; <code>constinit</code> o'zgaruvchi <b>statik inicializatsiya</b> ni kafolatlaydi, lekin keyin o'zgartirilishi mumkin; <code>if constexpr</code> esa shartga qarab faqat bitta shoxni instantiatsiya qiladi.",
      },
      {
        type: "code",
        title: "bayon.cpp",
        code: `#include <iostream>
#include <string>
#include <type_traits>

template <typename T>
std::string bayon(const T& qiymat) {
    if constexpr (std::is_integral_v<T>) {
        return "butun: " + std::to_string(qiymat);
    } else if constexpr (std::is_floating_point_v<T>) {
        return "kasr: " + std::to_string(qiymat);
    } else if constexpr (std::is_same_v<T, std::string>) {
        return "matn: " + qiymat;
    } else {
        return "noma'lum tur";
    }
}

int main() {
    std::cout << bayon(42) << '\\n';
    std::cout << bayon(2.5) << '\\n';
    std::cout << bayon(std::string("C++")) << '\\n';
}`,
        output: `butun: 42
kasr: 2.500000
matn: C++`,
      },
      {
        type: "p",
        html: "Muhim jihat: <code>if constexpr</code> da tanlanmagan shox <b>instantiatsiya qilinmaydi</b>. Shu sababli <code>std::to_string(qiymat)</code> faqat sonlar uchun kompilyatsiya qilinadi; <code>std::string</code> bilan bu shox umuman ko'rilmaydi. Oddiy <code>if</code> bilan esa barcha shoxlar tekshirilib, xato berardi.",
      },
      {
        type: "code",
        title: "consteval.cpp",
        code: `#include <iostream>

consteval int kvadrat(int x) {
    return x * x;
}

constinit int global_hisob = kvadrat(5);

int main() {
    constexpr int k = kvadrat(7);
    static_assert(k == 49);

    global_hisob += 1;

    std::cout << k << '\\n';
    std::cout << global_hisob << '\\n';
}`,
        output: `49
26`,
      },
      {
        type: "table",
        head: ["Vosita", "Kafolat", "O'zgartirish mumkinmi?"],
        rows: [
          ["<code>constexpr</code> funksiya", "Compile-time chaqiruv mumkin", "Runtime chaqiruv ham mumkin"],
          ["<code>consteval</code> funksiya", "Faqat compile-time", "Runtime chaqiruv kompilyatsiya xatosi"],
          ["<code>constinit</code> o'zgaruvchi", "Statik (dinamik bo'lmagan) inicializatsiya", "Ha, keyin o'zgartirish mumkin"],
          ["<code>constexpr</code> o'zgaruvchi", "Qiymat constant expression", "Yo'q (const)"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "constinit const emas",
        html: "<code>constinit</code> faqat <b>inicializatsiya vaqti</b> haqida; u <code>const</code> emas. <code>constinit int hisob = 0;</code> keyin <code>hisob++</code> qilish mumkin. Bu global obyektlarning \"static initialization order fiasco\" muammosini kamaytiradi, chunki dinamik konstruktor chaqirilmaydi.",
      },
    ],
    quiz: [
      {
        q: "consteval funksiya runtime argument bilan chaqirilsa nima bo'ladi?",
        options: [
          "Oddiy funksiya kabi ishlaydi",
          "Faqat ogohlantirish chiqadi",
          "Runtime istisno tashlanadi",
          "Kompilyatsiya xatosi beradi"
        ],
        answer: 3,
        explain: "consteval funksiya faqat immediate (compile-time) chaqiruvga mo'ljallangan; runtime chaqiruv build xatosidir.",
      },
      {
        q: "if constexpr tanlanmagan shoxda qanday kod tekshirilmaydi?",
        options: [
          "Shoxdagi turga bog'liq bo'lmagan barcha kod",
          "Shox umuman instantiatsiya qilinmaydi, lekin sintaksis tekshiriladi",
          "Shox runtime da o'chiriladi",
          "Shoxdagi barcha nomlar e'tiborsiz qoladi"
        ],
        answer: 1,
        explain: "Tanlanmagan shox joriy instantiation uchun generatsiya qilinmaydi; shu bilan birga umumiy sintaksis va ba'zi nomlar baribir tekshiriladi.",
      },
      {
        q: "constinit int hisob = 5; haqida qaysi gap to'g'ri?",
        options: [
          "hisob ni keyin o'zgartirib bo'lmaydi",
          "hisob faqat constexpr funksiyada ishlaydi",
          "Inicializatsiya statik, keyin hisob ni o'zgartirish mumkin",
          "hisob har chaqiruvda qayta inicializatsiya qilinadi"
        ],
        answer: 2,
        explain: "constinit statik inicializatsiyani kafolatlaydi, const emas; qiymatni keyin o'zgartirish mumkin.",
      },
    ],
  },
  {
    id: 57,
    title: "Concepts va requires (C++20)",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "<b>Concept</b> — shablon parametriga qo'yiladigan nomlangan, kompilyatsiya vaqtidagi talab. U xatoni chuqur shablon ichidan emas, chaqiruv joyidan tushunarli qilib ko'rsatadi. Concept <code>requires</code> ifodasi yoki mavjud type trait lar asosida yoziladi va <code>static_assert</code> bilan ham tekshiriladi.",
      },
      {
        type: "code",
        title: "raqam.cpp",
        code: `#include <concepts>
#include <iostream>

template <typename T>
concept Raqam = std::integral<T> || std::floating_point<T>;

template <Raqam T>
T katta(T a, T b) {
    return (a < b) ? b : a;
}

int main() {
    std::cout << katta(3, 8) << '\\n';
    std::cout << katta(2.5, 1.5) << '\\n';
    // katta("a", "b");  // const char* Raqam emas — aniq xato
}`,
        output: `8
2.5`,
      },
      {
        type: "p",
        html: "Concept cheklovi <code>template &lt;Raqam T&gt;</code> yoki <code>template &lt;typename T&gt; requires Raqam&lt;T&gt;</code> ko'rinishida qo'llanadi. C++20 ning <b>abbreviated template</b> yozuvi yanada qisqa: <code>void f(Raqam auto x)</code>. Concept muvaffaqiyatsiz bo'lsa, overload ro'yxatidan chiqariladi — SFINAE dan farqli, xato xabari ancha o'qiladigan bo'ladi.",
      },
      {
        type: "code",
        title: "konteyner.cpp",
        code: `#include <concepts>
#include <iostream>
#include <string>
#include <vector>

template <typename T>
concept Konteyner = requires(const T& c) {
    { c.size() } -> std::convertible_to<std::size_t>;
    { c.empty() } -> std::convertible_to<bool>;
};

template <Konteyner C>
void hisobot(const C& c) {
    std::cout << "hajm=" << c.size()
              << " bo'sh=" << std::boolalpha << c.empty() << '\\n';
}

int main() {
    std::vector<int> v{1, 2, 3};
    std::string s;

    hisobot(v);
    hisobot(s);

    static_assert(Konteyner<std::vector<int>>);
    static_assert(!Konteyner<int>);
}`,
        output: `hajm=3 bo'sh=false
hajm=0 bo'sh=true`,
      },
      {
        type: "table",
        head: ["Sintaksis", "Vazifasi"],
        rows: [
          ["<code>concept Raqam = ...;</code>", "Nomlangan talabni e'lon qiladi"],
          ["<code>template &lt;Raqam T&gt;</code>", "Parametrni concept bilan cheklaydi"],
          ["<code>requires Raqam&lt;T&gt;</code>", "requires clause qo'shadi"],
          ["<code>requires(T t) { t.size(); }</code>", "Ifoda kompilyatsiya bo'lishini tekshiradi"],
          ["<code>Raqam auto x</code>", "Qisqa (abbreviated) shablon parametri"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Concept — hujjat va cheklov birga",
        html: "Concept nomi talabni o'zi hujjatlashtiradi: <code>template &lt;Konteyner C&gt;</code> o'quvchiga darhol <code>size()</code> va <code>empty()</code> kerakligini aytadi. Standart concept lar (<code>std::integral</code>, <code>std::ranges::range</code>, <code>std::movable</code>) dan foydalaning; o'z conceptingizni faqat domain talabi bo'lsa yozing.",
      },
    ],
    quiz: [
      {
        q: "Concept qachon tekshiriladi?",
        options: [
          "Faqat runtime da, birinchi chaqiruvda",
          "Kompilyatsiya vaqtida",
          "Har bir funksiya chaqiruvida runtime da",
          "Faqat static_assert ichida"
        ],
        answer: 1,
        explain: "Concept kompilyatsiya vaqtidagi predikat; u shablon parametriga moslikni build paytida tekshiradi.",
      },
      {
        q: "requires ifodasi nimani tekshiradi?",
        options: [
          "Ifodaning runtime natijasini",
          "Ifoda kompilyatsiya bo'lishini va tur cheklovlarini",
          "Xotira sarfini",
          "Faqat funksiya mavjudligini"
        ],
        answer: 1,
        explain: "requires expression kodning kompilyatsiya bo'lishini, qaytish turini va boshqa talablarni tekshiradi; u bajarilmaydi.",
      },
      {
        q: "template <Raqam T> yozuvida Raqam nima?",
        options: [
          "Runtime tekshiriladigan enum",
          "Klass nomi",
          "Concept — shablon parametri cheklovi",
          "Maxsuslashtirilgan allokator"
        ],
        answer: 2,
        explain: "Raqam — concept; T faqat shu talabni qanoatlantirsa, shablon instantiation qilinadi.",
      },
    ],
  },
  {
    id: 58,
    title: "Ranges: lazy views va proyeksiyalar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "C++20 <code>&lt;ranges&gt;</code> kutubxonasi algoritmlarni diapazon (range) bilan ishlatadi va <b>views</b> — lazy, kompozitsiyalanadigan ko'rinishlarni beradi. View elementlarni nusxalamaydi; u manba ustida hisoblash zanjirini quradi. <code>|</code> operatori bilan bosqichlarni ketma-ket ulash mumkin.",
      },
      {
        type: "code",
        title: "juft_kvadrat.cpp",
        code: `#include <iostream>
#include <ranges>
#include <vector>

int main() {
    std::vector<int> sonlar{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    auto natija = sonlar
        | std::views::filter([](int x) { return x % 2 == 0; })
        | std::views::transform([](int x) { return x * x; })
        | std::views::take(3);

    for (int x : natija) {
        std::cout << x << ' ';
    }
    std::cout << '\\n';
}`,
        output: `4 16 36 `,
      },
      {
        type: "p",
        html: "Bu yerda hech qanday yangi vector yaratilmaydi: har bir element orqali yurganda filtr, transform va take ketma-ket qo'llanadi. <b>Proyeksiya</b> esa algoritmga elementning qaysi qismini ko'rishni aytadi: <code>&amp;Talaba::ball</code> kabi member pointer yoki lambda.",
      },
      {
        type: "code",
        title: "talabalar.cpp",
        code: `#include <algorithm>
#include <functional>
#include <iostream>
#include <ranges>
#include <string>
#include <vector>

struct Talaba {
    std::string ism;
    int ball;
};

int main() {
    std::vector<Talaba> talabalar{
        {"Aziza", 88}, {"Bek", 95}, {"Dilnoza", 91}};

    std::ranges::sort(talabalar, std::greater<>{}, &Talaba::ball);

    for (const auto& t : talabalar) {
        std::cout << t.ism << ' ' << t.ball << '\\n';
    }

    auto top = std::ranges::find(talabalar, "Bek", &Talaba::ism);
    std::cout << "topildi: " << top->ball << '\\n';
}`,
        output: `Bek 95
Dilnoza 91
Aziza 88
topildi: 95`,
      },
      {
        type: "table",
        head: ["Vosita", "Vazifasi", "Lazy?"],
        rows: [
          ["<code>views::filter</code>", "Shartga mos elementlarni o'tkazadi", "Ha"],
          ["<code>views::transform</code>", "Har elementni o'zgartiradi", "Ha"],
          ["<code>views::take(n)</code>", "Birinchi n element", "Ha"],
          ["<code>views::iota(1, 5)</code>", "Sonlar ketma-ketligi", "Ha"],
          ["<code>ranges::sort</code>", "Diapazonni joyida tartiblaydi", "Yo'q — eager"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "View manbadan uzoq yashamasin",
        html: "View odatda elementlarni <b>egalab olmaydi</b>. <code>auto v = std::vector{1,2,3} | views::take(2);</code> kabi yozuvda vaqtinchalik vector view tugagach yo'q bo'ladi va <code>v</code> osilib qoladi. Manba (yoki <code>views::all</code> bilan bog'langan obyekt) view dan uzoqroq yashashini ta'minlang.",
      },
    ],
    quiz: [
      {
        q: "std::views::filter haqida qaysi gap to'g'ri?",
        options: [
          "Darhol yangi vector yaratadi",
          "Lazy ishlaydi va elementlarni yurganda filtrlaydi",
          "Faqat saralangan diapazonlarda ishlaydi",
          "Manbani o'zgartiradi"
        ],
        answer: 1,
        explain: "View hisoblashni kechiktiradi: elementlarga murojaat paytida filtr qo'llanadi, alohida konteyner yaratilmaydi.",
      },
      {
        q: "std::ranges::sort(talabalar, std::greater<>{}, &Talaba::ball) dagi uchinchi argument nima?",
        options: [
          "Taqqoslash funksiyasi",
          "Proyeksiya — qaysi a'zo bo'yicha taqqoslash",
          "Allokator",
          "Diapazon o'lchami"
        ],
        answer: 1,
        explain: "Uchinchi argument proyeksiya: har elementdan ball olinib, greater<> bilan taqqoslanadi.",
      },
      {
        q: "View ni vaqtinchalik konteyner ustida saqlash nima uchun xavfli?",
        options: [
          "View konteynerni nusxalay olmaydi",
          "Konteyner yo'q bo'lgach, view osilgan havolalarga ega bo'lib qoladi",
          "Kompilyator view ni taqiqlaydi",
          "View faqat string bilan ishlaydi"
        ],
        answer: 1,
        explain: "View egalik qilmaydi; vaqtinchalik manba tugashi bilan uning elementlariga havolalar dangling bo'ladi.",
      },
    ],
  },
  {
    id: 59,
    title: "Metaprogrammalash amaliyoti: type list va CRTP",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Shablon metaprogrammalashning ikkita amaliy ko'rinishi: <b>type list</b> — turlar ro'yxati ustida compile-time mantiq, va <b>CRTP</b> (Curiously Recurring Template Pattern) — ota shablon bola turini biladigan statik polimorfizm. Ikkalasi ham runtime xarajatsiz kuchli abstraksiya beradi.",
      },
      {
        type: "code",
        title: "tur_listi.cpp",
        code: `#include <iostream>
#include <type_traits>

template <typename... Turlar>
struct TurListi {};

template <typename T, typename List>
struct Bor : std::false_type {};

template <typename T, typename... Qolgan>
struct Bor<T, TurListi<T, Qolgan...>> : std::true_type {};

template <typename T, typename Birinchi, typename... Qolgan>
struct Bor<T, TurListi<Birinchi, Qolgan...>>
    : Bor<T, TurListi<Qolgan...>> {};

int main() {
    using List = TurListi<int, double, char>;

    std::cout << Bor<int, List>::value << '\\n';
    std::cout << Bor<float, List>::value << '\\n';
    std::cout << Bor<char, List>::value << '\\n';
}`,
        output: `1
0
1`,
      },
      {
        type: "p",
        html: "Bu yerda uchta maxsuslashtirish ishlaydi: bo'sh ro'yxat uchun asosiy <code>false_type</code>, birinchi element mos kelganda <code>true_type</code>, aks holda qolgan ro'yxat bilan rekursiya. C++17 <code>if constexpr</code> va fold expression bilan xuddi shu mantiqni qisqaroq yozish mumkin, lekin type list tuzilmasi kutubxona API larida hanuz uchraydi.",
      },
      {
        type: "code",
        title: "crtp_hisob.cpp",
        code: `#include <iostream>

template <typename T>
struct Hisoblagich {
    static int yaratilgan;

    Hisoblagich() { ++yaratilgan; }
    Hisoblagich(const Hisoblagich&) { ++yaratilgan; }

    static int soni() { return yaratilgan; }
};

template <typename T>
int Hisoblagich<T>::yaratilgan = 0;

struct Nuqta : Hisoblagich<Nuqta> {
    int x = 0;
};

struct Vektor : Hisoblagich<Vektor> {
    int x = 0;
};

int main() {
    Nuqta a, b;
    Vektor c;

    std::cout << Nuqta::soni() << '\\n';
    std::cout << Vektor::soni() << '\\n';
    std::cout << Hisoblagich<Nuqta>::soni() << '\\n';
}`,
        output: `2
1
2`,
      },
      {
        type: "table",
        head: ["Naqsh", "G'oya", "Afzalligi"],
        rows: [
          ["Type list", "Turlar paketini rekursiv tahlil qilish", "Kutubxona darajasidagi metama'lumot"],
          ["CRTP", "<code>class D : Base&lt;D&gt;</code>", "Virtualsiz statik polimorfizm"],
          ["Fold + if constexpr", "Zamonaviy qisqa metaprogramma", "O'qish oson, kam boilerplate"],
          ["concepts", "Talablarni nomlash", "Eng yaxshi xato xabarlari"],
        ],
      },
      {
        type: "note",
        variant: "info",
        title: "CRTP qayerda uchraydi?",
        html: "CRTP <code>std::enable_shared_from_this</code>, visitorlar, mixinlar va statik interfeyslarda ishlatiladi. Kamchiligi: har bir bola tur uchun alohida kod generatsiyasi va virtual funksiya kabi runtime almashtirishning yo'qligi. Runtime polimorfizm kerak bo'lsa, <code>virtual</code> dan foydalaning.",
      },
    ],
    quiz: [
      {
        q: "type list da bo'sh ro'yxat uchun asosiy shablon nima qaytaradi?",
        options: [
          "std::true_type",
          "std::false_type",
          "Kompilyatsiya xatosi",
          "void"
        ],
        answer: 1,
        explain: "Bor ning asosiy shabloni false_type dan meros oladi; bo'sh ro'yxatda boshqa mos maxsuslashtirish yo'q.",
      },
      {
        q: "CRTP da bola klass ota shablonga qanday uzatiladi?",
        options: [
          "class D : public Base<D>",
          "class D : public Base",
          "template <class D> class Base : D",
          "class D { Base<D> b; }"
        ],
        answer: 0,
        explain: "Bola o'z turini ota shablon parametri sifatida beradi: Base<D>; ota klass static_cast orqali D ga murojaat qiladi.",
      },
      {
        q: "CRTP ning asosiy afzalligi nimada?",
        options: [
          "Runtime virtual chaqiruvni tezlashtiradi",
          "Virtual jadvalisiz statik polimorfizm beradi",
          "Xotirani avtomatik tozalaydi",
          "Har bir tur uchun bitta umumiy kod yaratadi"
        ],
        answer: 1,
        explain: "CRTP kompilyatsiya vaqtida tur ma'lum bo'lgani uchun virtual dispatchsiz umumiy implementatsiya beradi.",
      },
    ],
  },
];
