module.exports = [
  {
    id: 70,
    title: "Exception safety: kafolatlar va copy-and-swap",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Istisno tashlanganda obyekt qanday holatda qolishi — <b>exception safety</b>. Uch daraja bor: <b>nothrow</b> (istisno yo'q), <b>strong</b> (amal yo to'liq bajariladi, yo obyekt o'zgarmaydi) va <b>basic</b> (obyekt yaroqli, lekin holati o'zgargan bo'lishi mumkin). Kutubxona kodi uchun strong kafolat ko'pincha maqsad.",
      },
      {
        type: "code",
        title: "copy_swap.cpp",
        code: `#include <iostream>
#include <stdexcept>
#include <utility>
#include <vector>

class Saqlagich {
public:
    Saqlagich() = default;
    explicit Saqlagich(std::vector<int> v) : v_(std::move(v)) {}

    void yangila(std::vector<int> yangi) {
        if (yangi.size() > 4) {
            throw std::runtime_error("juda katta");
        }
        v_.swap(yangi);
    }

    std::size_t hajm() const { return v_.size(); }
    int birinchi() const { return v_.empty() ? -1 : v_.front(); }

private:
    std::vector<int> v_;
};

int main() {
    Saqlagich s({1, 2, 3});
    std::cout << s.hajm() << ' ' << s.birinchi() << '\\n';

    try {
        s.yangila({1, 2, 3, 4, 5});
    } catch (const std::exception& e) {
        std::cout << "rad etildi: " << e.what() << '\\n';
    }
    std::cout << s.hajm() << ' ' << s.birinchi() << '\\n';

    s.yangila({7, 8});
    std::cout << s.hajm() << ' ' << s.birinchi() << '\\n';
}`,
        output: `3 1
rad etildi: juda katta
3 1
2 7`,
      },
      {
        type: "p",
        html: "Nega bu <b>strong</b> kafolat? Yangi qiymat parametrda to'liq quriladi; xato bo'lsa, funksiya tanasi umuman <code>v_</code> ga tegmaydi. Muvaffaqiyatli bo'lsa, <code>swap</code> — <code>noexcept</code> amal — holatni almashtiradi. Copy-and-swap aynan shu g'oyaga asoslanadi va assignment operatorida ham qo'llaniladi.",
      },
      {
        type: "code",
        title: "noexcept_move.cpp",
        code: `#include <iostream>
#include <vector>

struct Hisoblagich {
    static int nusxa;
    static int move;

    Hisoblagich() = default;
    Hisoblagich(const Hisoblagich&) { ++nusxa; }
    Hisoblagich(Hisoblagich&&) noexcept { ++move; }
};

int Hisoblagich::nusxa = 0;
int Hisoblagich::move = 0;

int main() {
    std::vector<Hisoblagich> v;
    v.reserve(2);

    v.push_back(Hisoblagich{});
    v.push_back(Hisoblagich{});
    v.emplace_back();

    std::cout << v.size() << ' '
              << Hisoblagich::nusxa << ' '
              << Hisoblagich::move << '\\n';
}`,
        output: `3 0 4`,
      },
      {
        type: "table",
        head: ["Kafolat", "Ma'nosi", "Misol"],
        rows: [
          ["nothrow", "Istisno tashlanmaydi", "<code>swap</code>, destruktor"],
          ["strong", "Muvaffaqiyat yoki o'zgarmagan holat", "Copy-and-swap, <code>vector::push_back</code>"],
          ["basic", "Yaroqli, lekin o'zgargan holat", "Ko'p operatsiyalar"],
          ["none", "Kafolat yo'q", "Xom resurs bilan ishlash"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Move noexcept bo'lmasa — copy",
        html: "<code>std::vector</code> qayta ajratishda <code>move_if_noexcept</code> dan foydalanadi: move konstruktori <code>noexcept</code> bo'lmasa, u strong kafolatni saqlash uchun <b>nusxalashni</b> tanlaydi. Shuning uchun move konstruktori va move assignment ni <code>noexcept</code> qilish unumdorlik uchun muhim.",
      },
    ],
    quiz: [
      {
        q: "Strong exception safety kafolati nimani bildiradi?",
        options: [
          "Amal hech qachon istisno tashlamaydi",
          "Xato bo'lsa obyekt dastlabki holatida qoladi",
          "Xato bo'lsa obyekt o'chiriladi",
          "Faqat vector uchun ishlaydi"
        ],
        answer: 1,
        explain: "Strong kafolat — atomiklik: amal yo muvaffaqiyatli tugaydi, yo istisno bilan obyekt o'zgarmaydi.",
      },
      {
        q: "Copy-and-swap qaysi kafolatni ta'minlashda ishlatiladi?",
        options: [
          "Strong",
          "None",
          "Faqat nothrow",
          "Runtime polimorfizm"
        ],
        answer: 0,
        explain: "Avval nusxa tayyorlanadi, keyin noexcept swap qilinadi; xato bo'lsa asl obyekt tegilmaydi — strong kafolat.",
      },
      {
        q: "vector reallocation da move konstruktori noexcept bo'lmasa nima qiladi?",
        options: [
          "Har doim move qiladi",
          "Strong kafolat uchun nusxalashni tanlashi mumkin",
          "Dasturni to'xtatadi",
          "Xotirani oshirmaydi"
        ],
        answer: 1,
        explain: "move_if_noexcept mantiqi: move xavfli bo'lsa, vector eski elementlarni nusxalab, strong kafolatni saqlaydi.",
      },
    ],
  },
  {
    id: 71,
    title: "Xato modellari: optional, variant va expected",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Har bir xato istisno emas. Ba'zi holatlar <b>kutilgan natija</b>: foydalanuvchi noto'g'ri son kiritdi, qidiruv hech narsa topmadi. Bunday holatlar uchun <code>std::optional</code> (qiymat bor/yo'q), <code>std::variant</code> (bir nechta mumkin bo'lgan natija) va C++23 <code>std::expected</code> (qiymat yoki xato) mos keladi.",
      },
      {
        type: "code",
        title: "variant.cpp",
        code: `#include <iostream>
#include <string>
#include <utility>
#include <variant>

struct Xato {
    std::string xabar;
};

using Natija = std::variant<int, Xato>;

Natija bolish(int a, int b) {
    if (b == 0) {
        return Xato{"nolga bo'lish"};
    }
    return a / b;
}

int main() {
    for (auto [a, b] : {std::pair{10, 2}, std::pair{7, 0}}) {
        auto r = bolish(a, b);

        if (auto* qiymat = std::get_if<int>(&r)) {
            std::cout << "natija: " << *qiymat << '\\n';
        } else {
            std::cout << "xato: " << std::get<Xato>(r).xabar << '\\n';
        }
    }
}`,
        output: `natija: 5
xato: nolga bo'lish`,
      },
      {
        type: "p",
        html: "<code>variant</code> har doim alternativalardan <b>bittasini</b> saqlaydi va xotirani eng katta alternativa hajmida ajratadi. <code>optional</code> esa faqat \"bor/yo'q\" savoliga javob beradi; u <code>0</code> bilan \"qiymat yo'q\" ni aralashtirmaydi. Quyida matnni songa aylantirishda <code>optional</code> va <code>from_chars</code> ishlatiladi.",
      },
      {
        type: "code",
        title: "optional.cpp",
        code: `#include <charconv>
#include <iostream>
#include <optional>
#include <string_view>
#include <system_error>

std::optional<int> songa(std::string_view s) {
    int qiymat = 0;
    auto [ptr, ec] = std::from_chars(s.data(), s.data() + s.size(), qiymat);

    if (ec != std::errc{} || ptr != s.data() + s.size()) {
        return std::nullopt;
    }
    return qiymat;
}

int main() {
    for (std::string_view s : {"42", "abc", "7x"}) {
        if (auto v = songa(s)) {
            std::cout << "ok: " << *v << '\\n';
        } else {
            std::cout << "xato: " << s << '\\n';
        }
    }
}`,
        output: `ok: 42
xato: abc
xato: 7x`,
      },
      {
        type: "table",
        head: ["Vosita", "Qachon", "Afzalligi"],
        rows: [
          ["<code>optional&lt;T&gt;</code>", "Qiymat bo'lishi yoki bo'lmasligi", "Aniq interfeys, sentinel yo'q"],
          ["<code>variant&lt;A,B&gt;</code>", "Bir nechta xil natija", "Tur xavfsiz union"],
          ["<code>expected&lt;T,E&gt;</code> (C++23)", "Qiymat yoki boy xato", "Xato sababini saqlaydi"],
          ["Istisno", "Noyob, chuqur xato", "Unwinding bilan tozalanadi"],
          ["<code>error_code</code>", "Tizim xatolari", "Allokatsiyasiz"],
        ],
      },
      {
        type: "note",
        variant: "info",
        title: "Nazorat oqimi uchun istisno emas",
        html: "Foydalanuvchi kiritishini tekshirish kabi <b>kutilgan</b> holatlarda istisno qimmat va o'qishni qiyinlashtiradi: <code>optional</code>/<code>variant</code> afzal. Istisno esa konstruktor muvaffaqiyatsizligi yoki chuqur kutubxona xatosi kabi holatlarga mos. <code>std::expected</code> C++23 da; GCC 13 uni qo'llab-quvvatlaydi, lekin loyihangiz standarti C++20 bo'lsa, o'z <code>Result&lt;T,E&gt;</code> shabloningizni yozing.",
      },
    ],
    quiz: [
      {
        q: "std::variant<int, Xato> bir vaqtda nechta alternativani saqlaydi?",
        options: [
          "Ikkalasini ham",
          "Har doim birinchisini",
          "Faqat bittasini",
          "Nolni"
        ],
        answer: 2,
        explain: "variant — tur xavfsiz union: har doim faol alternativalardan bittasi saqlanadi.",
      },
      {
        q: "Qidiruv natijasi topilmasa, std::optional qanday afzallik beradi?",
        options: [
          "Xotirani avtomatik bo'shatadi",
          "Qiymat yo'qligini -1 kabi sentinel bilan aralashtirmaydi",
          "Har doim istisno tashlaydi",
          "Faqat pointer qaytaradi"
        ],
        answer: 1,
        explain: "optional mavjudlikni tur darajasida ifodalaydi; haqiqiy qiymat 0 yoki -1 bo'lishi bilan chalkashmaydi.",
      },
      {
        q: "std::from_chars muvaffaqiyatsizlikni qanday bildiradi?",
        options: [
          "Istisno tashlaydi",
          "std::errc kodini va konvertatsiya tugagan ko'rsatkichni qaytaradi",
          "Faqat nullptr qaytaradi",
          "std::optional qaytaradi"
        ],
        answer: 1,
        explain: "from_chars natijani out-parametrga yozadi va {ptr, ec} qaytaradi; ec != errc{} xatoni bildiradi.",
      },
    ],
  },
  {
    id: 72,
    title: "Serialization: JSON, CSV va binary format",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Serialization — obyektni saqlash yoki tarmoqqa uzatish uchun matn/ikkilik shaklga aylantirish. Format tanlovi talablarga bog'liq: JSON — o'qish va moslashuvchanlik, CSV — jadval va soddallik, binary — tezlik va ixchamlik. Har bir formatda <b>versiya</b> va <b>validatsiya</b> haqida o'ylash kerak.",
      },
      {
        type: "code",
        title: "json.cpp",
        code: `#include <iomanip>
#include <iostream>
#include <sstream>
#include <string>

int main() {
    std::string nom = "Noldan C++";
    int yosh = 3;

    std::ostringstream json;
    json << "{\\"nom\\":" << std::quoted(nom)
         << ",\\"yosh\\":" << yosh << "}";

    std::cout << json.str() << '\\n';
}`,
        output: `{"nom":"Noldan C++","yosh":3}`,
      },
      {
        type: "p",
        html: "<code>std::quoted</code> satrni qo'shtirnoq ichiga oladi va ichidagi qo'shtirnoq hamda teskari chiziqlarni qochiradi — kichik JSON yozish uchun yetarli. Katta va murakkab hujjatlar uchun maxsus kutubxona (nlohmann/json, simdjson) ishlatiladi; u parsing, escaping va schema xatolarini to'liq hal qiladi.",
      },
      {
        type: "code",
        title: "binary.cpp",
        code: `#include <cstdint>
#include <iostream>
#include <sstream>
#include <string>

struct Yozuv {
    std::uint32_t id;
    std::string nom;
};

void yoz(std::ostream& out, const Yozuv& y) {
    std::uint32_t uzunlik = static_cast<std::uint32_t>(y.nom.size());
    out.write(reinterpret_cast<const char*>(&y.id), sizeof(y.id));
    out.write(reinterpret_cast<const char*>(&uzunlik), sizeof(uzunlik));
    out.write(y.nom.data(), uzunlik);
}

Yozuv oqi(std::istream& in) {
    Yozuv y{};
    std::uint32_t uzunlik = 0;

    in.read(reinterpret_cast<char*>(&y.id), sizeof(y.id));
    in.read(reinterpret_cast<char*>(&uzunlik), sizeof(uzunlik));
    y.nom.resize(uzunlik);
    in.read(y.nom.data(), uzunlik);
    return y;
}

int main() {
    Yozuv a{7, "Noldan"};
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);

    yoz(ss, a);
    std::cout << ss.str().size() << '\\n';

    ss.seekg(0);
    Yozuv b = oqi(ss);
    std::cout << b.id << ' ' << b.nom << '\\n';
}`,
        output: `14
7 Noldan`,
      },
      {
        type: "table",
        head: ["Format", "Afzalligi", "Kamchiligi"],
        rows: [
          ["JSON", "O'qish oson, til erkinn", "Hajm katta, parsing sekin"],
          ["CSV", "Jadval va Excel bilan mos", "Nesting yo'q, escaping murakkab"],
          ["Binary", "Ixcham va tez", "Endianness va padding mo'rt"],
          ["Protobuf", "Schema va versiyalash", "Qo'shimcha toolchain"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Xom struct ni yozmang",
        html: "Butun struct ni <code>write(&y, sizeof(y))</code> bilan yozish ko'rsatkichlar, padding va endianness tufayli ko'chirilmaydi. Har bir maydonni aniq o'lchamda yozing (masalan, <code>uint32_t</code>). O'qishda uzunlikni <b>tekshiring</b>: buferdan tashqari o'qish va xotira hujumlarining oldini oling. Formatga versiya raqamini qo'shing.",
      },
    ],
    quiz: [
      {
        q: "std::quoted qanday vazifani bajaradi?",
        options: [
          "Sonlarni yaxlitlaydi",
          "Satrni qo'shtirnoq ichiga olib, ichki maxsus belgilarni qochiradi",
          "Faylni ikkilik rejimda ochadi",
          "JSON ni parse qiladi"
        ],
        answer: 1,
        explain: "std::quoted chiqarishda qo'shtirnoq va teskari chiziqni escape qiladi, kirishda esa ularni qayta o'qiydi.",
      },
      {
        q: "Binary formatning asosiy ko'chirilish muammosi nima?",
        options: [
          "Faqat matnni saqlaydi",
          "Endianness, padding va platformaga bog'liqlik",
          "Har doim juda katta",
          "Uni o'qib bo'lmaydi"
        ],
        answer: 1,
        explain: "Xom ikkilik tasvir platforma ABI siga bog'liq; aniq o'lcham va endianness kelishuvi kerak.",
      },
      {
        q: "CSV ni oddiy vergul bo'yicha split qilish nega yetarli emas?",
        options: [
          "Vergul har doim taqiqlangan",
          "Qo'shtirnoq ichidagi vergul maydonning bir qismi bo'lishi mumkin",
          "CSV faqat sonlarni saqlaydi",
          "Fayl juda katta bo'ladi"
        ],
        answer: 1,
        explain: "CSV quoting qoidalari bor: qo'shtirnoq ichidagi vergul ajratuvchi emas; to'liq parser yoki kutubxona kerak.",
      },
    ],
  },
  {
    id: 73,
    title: "std::filesystem chuqur: path, iterator, xatolar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "C++17 <code>&lt;filesystem&gt;</code> — papka va fayllar bilan ishlashning standart yo'li. <code>fs::path</code> yo'lni platformaga mos tarzda saqlaydi va <code>/</code> operatori bilan bo'laklarni birlashtiradi. <code>directory_iterator</code> bir darajani, <code>recursive_directory_iterator</code> esa butun daraxtni yuradi.",
      },
      {
        type: "code",
        title: "path.cpp",
        code: `#include <filesystem>
#include <iostream>

namespace fs = std::filesystem;

int main() {
    fs::path p = "ma'lumotlar";
    p /= "2026";
    p /= "hisobot.csv";

    std::cout << p.generic_string() << '\\n';
    std::cout << p.filename().string() << '\\n';
    std::cout << p.extension().string() << '\\n';
    std::cout << p.parent_path().filename().string() << '\\n';
    std::cout << p.stem().string() << '\\n';
}`,
        output: `ma'lumotlar/2026/hisobot.csv
hisobot.csv
.csv
2026
hisobot`,
      },
      {
        type: "p",
        html: "<code>generic_string()</code> har doim <code>/</code> ajratgichini beradi — log va testlar uchun qulay. <code>filename</code>, <code>extension</code>, <code>stem</code>, <code>parent_path</code> yo'lni bo'laklarga ajratadi. Quyidagi misol vaqtinchalik papka yaratadi, fayllarni rekursiv topadi va tozalaydi; chiqishda faqat <b>nisbiy nomlar</b> ko'rsatiladi.",
      },
      {
        type: "code",
        title: "recursive.cpp",
        code: `#include <algorithm>
#include <filesystem>
#include <fstream>
#include <iostream>
#include <string>
#include <vector>

namespace fs = std::filesystem;

int main() {
    fs::path ildiz = fs::temp_directory_path() / "noldan_fs_demo";
    fs::remove_all(ildiz);
    fs::create_directories(ildiz / "ichki");

    { std::ofstream(ildiz / "a.txt") << "A"; }
    { std::ofstream(ildiz / "ichki" / "b.txt") << "B"; }

    std::vector<std::string> nomlar;
    for (const auto& e : fs::recursive_directory_iterator(ildiz)) {
        if (e.is_regular_file()) {
            nomlar.push_back(e.path().filename().string());
        }
    }

    std::sort(nomlar.begin(), nomlar.end());
    for (const auto& n : nomlar) {
        std::cout << n << '\\n';
    }

    std::cout << fs::file_size(ildiz / "a.txt") << '\\n';
    fs::remove_all(ildiz);
}`,
        output: `a.txt
b.txt
1`,
      },
      {
        type: "table",
        head: ["Amal", "Funksiya", "Eslatma"],
        rows: [
          ["Mavjudlik", "<code>fs::exists(p)</code>", "Symlink va xatolarni hisobga oling"],
          ["Papka yaratish", "<code>fs::create_directories</code>", "Ota papkalarni ham yaratadi"],
          ["Yurish", "<code>directory_iterator</code>", "Tartib kafolatlanmagan"],
          ["Rekursiv yurish", "<code>recursive_directory_iterator</code>", "Chuqurlikni boshqarish mumkin"],
          ["O'lcham", "<code>fs::file_size</code>", "Katalog uchun ishlamaydi"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "error_code overloadlari",
        html: "Ko'p <code>fs</code> funksiyalari istisno tashlaydigan va <code>std::error_code&amp;</code> qabul qiladigan ikki versiyaga ega. Serverda bitta yo'q fayl butun ishni to'xtatmasligi uchun <code>std::error_code ec; fs::exists(p, ec)</code> ishlating. <code>remove_all</code> bilan ishlashda yo'lni ikki marta tekshiring — bu <b>destruktiv</b> amal.",
      },
    ],
    quiz: [
      {
        q: "fs::path papka = \"a\"; auto f = papka / \"b.txt\"; natijasi nima?",
        options: [
          "a va b.txt matnlari qo'shiladi",
          "Yo'l komponenti qo'shiladi: a/b.txt",
          "Fayl ochiladi",
          "Xato beradi"
        ],
        answer: 1,
        explain: "path operator/ yo'l komponentini platformaga mos ajratgich bilan qo'shadi.",
      },
      {
        q: "recursive_directory_iterator ning oddiy directory_iterator dan farqi nima?",
        options: [
          "Faqat fayllarni ko'rsatadi",
          "Ichki papkalarga ham kiradi",
          "Tartiblangan natija beradi",
          "Faqat symlink larni yuradi"
        ],
        answer: 1,
        explain: "recursive variant ichki kataloglarga rekursiv kiradi; oddiy iterator faqat bir darajani ko'rsatadi.",
      },
      {
        q: "directory_iterator elementlari qanday tartibda keladi?",
        options: [
          "Alifbo tartibida kafolatlangan",
          "Fayl tizimiga bog'liq, tartib kafolatlanmagan",
          "Har doim teskari tartibda",
          "Faqat vaqt bo'yicha"
        ],
        answer: 1,
        explain: "Standart tartibni kafolatlamaydi; deterministik chiqish uchun natijalarni o'zingiz saralang.",
      },
    ],
  },
  {
    id: 74,
    title: "Undefined behavior va xavfsiz kod",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Undefined behavior (UB) — standart ruxsat bermagan amal; kompilyator unga asoslanib kodni \"optimallashtirishi\" va natija butunlay kutilmagan bo'lishi mumkin. Eng ko'p uchraydiganlari: signed overflow, chegaradan tashqari indeks, osilgan havola, inicializatsiya qilinmagan o'qish, data race va strict aliasing buzilishi.",
      },
      {
        type: "code",
        title: "overflow.cpp",
        code: `#include <iostream>
#include <limits>

int main() {
    int katta = std::numeric_limits<int>::max();
    long long xavfsiz = static_cast<long long>(katta) + 1;
    std::cout << xavfsiz << '\\n';

    unsigned int u = 0;
    u -= 1;
    std::cout << u << '\\n';

    int son = -7;
    std::cout << son / 2 << ' ' << son % 2 << '\\n';
}`,
        output: `2147483648
4294967295
-3 -1`,
      },
      {
        type: "p",
        html: "Signed overflow — UB, shuning uchun <code>int</code> chegarasida qo'shishdan oldin kengroq turga o'ting yoki <code>std::numeric_limits</code> bilan tekshiring. <b>Unsigned</b> arifmetika esa modul bo'yicha aniq belgilangan: <code>0u - 1</code> maksimal qiymatga aylanadi. Bu farqni intervyularda tez-tez so'rashadi.",
      },
      {
        type: "code",
        title: "lifetime.cpp",
        code: `#include <iostream>
#include <iterator>
#include <string>
#include <string_view>

std::string yarat() {
    return "vaqtinchalik matn";
}

int main() {
    std::string egasi = yarat();
    std::string_view korinish = egasi;
    std::cout << korinish << '\\n';

    int massiv[3] = {1, 2, 3};
    int* p = massiv;
    std::cout << p[1] << '\\n';
    std::cout << std::size(massiv) << '\\n';
}`,
        output: `vaqtinchalik matn
2
3`,
      },
      {
        type: "table",
        head: ["UB turi", "Misol", "Xavfsiz muqobil"],
        rows: [
          ["Signed overflow", "<code>INT_MAX + 1</code>", "Kengroq tur yoki tekshiruv"],
          ["Out-of-bounds", "<code>v[v.size()]</code>", "<code>v.at(i)</code> yoki tekshiruv"],
          ["Dangling", "Vaqtinchalikdan <code>string_view</code>", "Egalik qiluvchi obyekt saqlash"],
          ["Uninitialized", "<code>int x; cout &lt;&lt; x;</code>", "Har doim inicializatsiya"],
          ["Data race", "Ikki thread bir xil yozadi", "Mutex yoki atomic"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "\"Mening kompyuterimda ishlaydi\" — dalil emas",
        html: "UB natijasi kompilyator, optimizatsiya darajasi va platformaga qarab o'zgaradi. <code>-fsanitize=address,undefined</code> bilan test qiling; <code>-Wall -Wextra -Wpedantic</code> ogohlantirishlarini xato deb qabul qiling. Optimizatsiya paytida kompilyator UB ga tayanib kodni butunlay olib tashlashi mumkin.",
      },
    ],
    quiz: [
      {
        q: "int turida INT_MAX + 1 bajarilsa nima bo'ladi?",
        options: [
          "Aniq INT_MIN ga aylanadi",
          "Undefined behavior",
          "Runtime istisno",
          "Kompilyator avtomatik long long ishlatadi"
        ],
        answer: 1,
        explain: "Signed overflow standart bo'yicha UB; natija kafolatlanmagan, optimizator kutilmagan qaror qabul qilishi mumkin.",
      },
      {
        q: "string_view qaysi xavfni olib keladi?",
        options: [
          "Xotirani egalab olmaydi, manba o'chsa osilgan bo'ladi",
          "Har doim nusxa oladi",
          "Faqat ASCII ni qo'llaydi",
          "Xotirani o'zi bo'shatadi"
        ],
        answer: 0,
        explain: "string_view egalik qilmaydi; u ko'rsatkich va uzunlikdan iborat, shuning uchun manba umri muhim.",
      },
      {
        q: "Qaysi amal aniq belgilangan (UB emas)?",
        options: [
          "int o'zgaruvchini o'qimasdan ishlatish",
          "Massiv chegarasidan tashqariga yozish",
          "unsigned 0 dan 1 ni ayirish",
          "Ikki thread ning sinxronizatsiyasiz yozishi"
        ],
        answer: 2,
        explain: "Unsigned arifmetika modul bo'yicha aniq belgilangan; 0u - 1 maksimal unsigned qiymatni beradi.",
      },
    ],
  },
];
