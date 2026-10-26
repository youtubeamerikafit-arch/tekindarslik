module.exports = [
  {
    id: 60,
    title: "Move semantikasi chuqur: rvalue havolalar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Move semantikasi resursni <b>nusxalash o'rniga ko'chirish</b> imkonini beradi. Buning kaliti — rvalue havola <code>T&amp;&amp;</code>: u vaqtinchalik yoki ko'chirilishi mumkin bo'lgan obyektga bog'lanadi. Move konstruktori ko'rsatkichni \"o'g'irlaydi\", manbani esa xavfsiz, lekin bo'sh holatda qoldiradi.",
      },
      {
        type: "code",
        title: "bufer.cpp",
        code: `#include <cstddef>
#include <iostream>
#include <utility>

class Bufer {
public:
    explicit Bufer(std::size_t hajm)
        : hajm_(hajm), malumot_(new int[hajm]{}) {
        std::cout << "yaratildi " << hajm_ << '\\n';
    }

    ~Bufer() { delete[] malumot_; }

    Bufer(const Bufer& b)
        : hajm_(b.hajm_), malumot_(new int[b.hajm_]) {
        for (std::size_t i = 0; i < hajm_; ++i) {
            malumot_[i] = b.malumot_[i];
        }
        std::cout << "nusxalandi\\n";
    }

    Bufer(Bufer&& b) noexcept
        : hajm_(b.hajm_), malumot_(b.malumot_) {
        b.malumot_ = nullptr;
        b.hajm_ = 0;
        std::cout << "ko'chirildi\\n";
    }

    std::size_t hajm() const { return hajm_; }

private:
    std::size_t hajm_;
    int* malumot_;
};

int main() {
    Bufer a(3);
    Bufer b = std::move(a);
    std::cout << b.hajm() << ' ' << a.hajm() << '\\n';

    Bufer c = b;
    std::cout << c.hajm() << '\\n';
}`,
        output: `yaratildi 3
ko'chirildi
3 0
nusxalandi
3`,
      },
      {
        type: "p",
        html: "<code>std::move(a)</code> hech narsani ko'chirmaydi — u shunchaki <code>a</code> ni rvalue ga <b>cast</b> qiladi. Keyin overload resolution move konstruktorni tanlaydi. Move dan keyin <code>a</code> ning hajmi 0 ga o'rnatildi: obyekt \"moved-from\" holatda, lekin destruktor chaqirilishi xavfsiz.",
      },
      {
        type: "code",
        title: "vector_move.cpp",
        code: `#include <iostream>
#include <string>
#include <utility>
#include <vector>

int main() {
    std::vector<std::string> nomlar;
    nomlar.reserve(2);

    std::string ism = "Aziza";
    nomlar.push_back(std::move(ism));
    nomlar.push_back("Bek");

    std::cout << nomlar[0] << ' ' << nomlar[1] << '\\n';
    std::cout << nomlar.size() << ' ' << nomlar.capacity() << '\\n';

    std::string boshqa = std::move(nomlar[0]);
    std::cout << boshqa << '\\n';
}`,
        output: `Aziza Bek
2 2
Aziza`,
      },
      {
        type: "table",
        head: ["Kategoriya", "Misol", "Move bog'lanadimi?"],
        rows: [
          ["lvalue", "Nomlangan o'zgaruvchi <code>x</code>", "Yo'q"],
          ["prvalue", "<code>std::string(\"a\")</code>", "Ha"],
          ["xvalue", "<code>std::move(x)</code>", "Ha"],
          ["const lvalue", "<code>const std::string s</code>", "Yo'q — copy tanlanadi"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Moved-from — noma'lum, lekin yaroqli",
        html: "Move dan keyin obyekt <b>valid but unspecified</b>: uni o'qish yoki qayta ishlatishdan oldin aniq holatga keltiring. <code>const</code> obyektni <code>std::move</code> qilish move emas, copy chaqiradi. Move konstruktori va move assignment ni <code>noexcept</code> qiling: <code>vector</code> reallocation da aynan shu xususiyatga tayanadi.",
      },
    ],
    quiz: [
      {
        q: "std::move(x) aslida nima qiladi?",
        options: [
          "Xotirani darhol bo'shatadi",
          "x ni rvalue havolaga cast qiladi, o'zi ko'chirmaydi",
          "x dan yangi obyekt yaratadi",
          "x ni const qiladi"
        ],
        answer: 1,
        explain: "std::move — static_cast<T&&> ko'rinishidagi cast; haqiqiy move konstruktor yoki assignment ichida bajariladi.",
      },
      {
        q: "Move konstruktorining odatiy imzosi qaysi?",
        options: [
          "T(const T&)",
          "T(T)",
          "T(T&&) noexcept",
          "T& operator=(T)"
        ],
        answer: 2,
        explain: "Move konstruktor T&& qabul qiladi va odatda noexcept bo'ladi; bu konteynerlarga xavfsiz move qilish imkonini beradi.",
      },
      {
        q: "Move qilingan obyekt haqida qaysi gap to'g'ri?",
        options: [
          "Uni o'qish har doim xato beradi",
          "U yaroqli, lekin qiymati noma'lum (valid but unspecified)",
          "U avtomatik o'chiriladi",
          "U const ga aylanadi"
        ],
        answer: 1,
        explain: "Standart moved-from obyektning yaroqli, ammo qiymati aniqlanmagan holatda qolishini talab qiladi; uni qayta ishlatishdan oldin tayinlang.",
      },
    ],
  },
  {
    id: 61,
    title: "Perfect forwarding va universal havolalar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Universal havola <code>T&amp;&amp;</code> faqat shablon parametrida paydo bo'ladi va <b>reference collapsing</b> orqali lvalue ni ham, rvalue ni ham qabul qiladi. <code>std::forward&lt;T&gt;</code> esa argumentning asl kategoriyasini saqlab uzatadi — bu <b>perfect forwarding</b>. Usiz lvalue lar jim ravishda rvalue bo'lib ketishi yoki nusxa ko'payishi mumkin.",
      },
      {
        type: "code",
        title: "uzatish.cpp",
        code: `#include <iostream>
#include <string>
#include <utility>

struct Ovoz {
    void operator()(const std::string& s) const {
        std::cout << "lvalue: " << s << '\\n';
    }
    void operator()(std::string&& s) const {
        std::cout << "rvalue: " << s << '\\n';
    }
};

template <typename F, typename T>
decltype(auto) uzat(F&& f, T&& qiymat) {
    return std::forward<F>(f)(std::forward<T>(qiymat));
}

int main() {
    Ovoz ovoz;
    std::string matn = "Noldan";

    uzat(ovoz, matn);
    uzat(ovoz, std::string("C++20"));
}`,
        output: `lvalue: Noldan
rvalue: C++20`,
      },
      {
        type: "p",
        html: "Agar <code>std::forward&lt;T&gt;(qiymat)</code> o'rniga oddiy <code>qiymat</code> yozilsa, ikkinchi chaqiruv ham lvalue bo'lib qolardi va move yo'qolardi. Reference collapsing qoidalari: <code>T&amp; &amp;</code> → <code>T&amp;</code>, <code>T&amp; &amp;&amp;</code> → <code>T&amp;</code>, <code>T&amp;&amp; &amp;</code> → <code>T&amp;</code>, <code>T&amp;&amp; &amp;&amp;</code> → <code>T&amp;&amp;</code>.",
      },
      {
        type: "code",
        title: "emplace.cpp",
        code: `#include <iostream>
#include <string>
#include <utility>
#include <vector>

struct Yozuv {
    std::string nom;
    int ball;

    Yozuv(std::string n, int b) : nom(std::move(n)), ball(b) {
        std::cout << "konstruktor " << nom << '\\n';
    }
    Yozuv(const Yozuv& y) : nom(y.nom), ball(y.ball) {
        std::cout << "nusxa " << nom << '\\n';
    }
    Yozuv(Yozuv&& y) noexcept : nom(std::move(y.nom)), ball(y.ball) {
        std::cout << "move " << nom << '\\n';
    }
};

int main() {
    std::vector<Yozuv> v;
    v.reserve(2);

    v.push_back(Yozuv("A", 1));
    v.emplace_back("B", 2);

    std::cout << v.size() << '\\n';
}`,
        output: `konstruktor A
move A
konstruktor B
2`,
      },
      {
        type: "table",
        head: ["Yozuv", "Ma'nosi"],
        rows: [
          ["<code>T&amp;&amp;</code> (shablonda)", "Universal (forwarding) havola"],
          ["<code>std::forward&lt;T&gt;(x)</code>", "Asl kategoriyani saqlab uzatadi"],
          ["<code>std::move(x)</code>", "Har doim rvalue qiladi"],
          ["<code>v.emplace_back(args...)</code>", "Elementni joyida, forward bilan quradi"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Bir argumentni ikki marta forward qilmang",
        html: "Forward qilingan argument rvalue bo'lsa, birinchi ishlatishdan keyin ko'chirilgan bo'lishi mumkin. Uni ikkinchi marta ishlatish xavfli. Shuningdek, universal havola qabul qiluvchi konstruktor copy konstruktorni \"yutib yuborishi\" mumkin — bunday konstruktorni <code>explicit</code> qiling yoki concept bilan cheklang.",
      },
    ],
    quiz: [
      {
        q: "Shablondagi T&& parametriga lvalue uzatilsa T qanday bo'ladi?",
        options: [
          "T = int",
          "T = int&",
          "T = int&&",
          "T = const int"
        ],
        answer: 1,
        explain: "Lvalue uchun T int& bo'ladi; reference collapsing natijasida int& && → int&, ya'ni parametr lvalue havola bo'ladi.",
      },
      {
        q: "std::forward ning vazifasi nima?",
        options: [
          "Argumentni har doim nusxalash",
          "Argumentning lvalue/rvalue kategoriyasini saqlab uzatish",
          "Xotirani bo'shatish",
          "Turni const ga aylantirish"
        ],
        answer: 1,
        explain: "forward shartli cast qiladi: T lvalue havola bo'lsa lvalue, aks holda rvalue sifatida uzatadi.",
      },
      {
        q: "int& && qanday turga collapse bo'ladi?",
        options: [
          "int&&",
          "int&",
          "int",
          "Kompilyatsiya xatosi"
        ],
        answer: 1,
        explain: "Reference collapsing qoidasiga ko'ra, bitta lvalue havola qatnashsa natija ham lvalue havola bo'ladi: int&.",
      },
    ],
  },
  {
    id: 62,
    title: "Smart pointerlar chuqur: deleter, weak_ptr, sikllar",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "<code>unique_ptr</code> — yagona egalik, <code>shared_ptr</code> — bo'lishilgan egalik, <code>weak_ptr</code> esa egaliksiz kuzatuvchi. <code>unique_ptr</code> maxsus <b>deleter</b> qabul qiladi: fayl, socket yoki C API resursini ham RAII bilan boshqarish mumkin. <code>shared_ptr</code> ning control block i esa <code>use_count</code> va weak count ni saqlaydi.",
      },
      {
        type: "code",
        title: "deleter.cpp",
        code: `#include <iostream>
#include <memory>
#include <utility>

struct Xotira {
    void operator()(int* p) const {
        std::cout << "tozalandi: " << *p << '\\n';
        delete p;
    }
};

int main() {
    std::unique_ptr<int, Xotira> p(new int(42));
    std::cout << *p << '\\n';

    auto q = std::make_unique<int>(7);
    std::cout << *q << '\\n';

    std::unique_ptr<int, Xotira> r(std::move(p));
    std::cout << (p == nullptr) << '\\n';
}`,
        output: `42
7
1
tozalandi: 42`,
      },
      {
        type: "p",
        html: "Move dan keyin <code>p</code> null bo'ladi, resurs esa <code>r</code> ga o'tadi. Scope oxirida obyektlar teskari tartibda yo'q qilinadi: avval <code>r</code> (42 ni tozalaydi), keyin <code>q</code>. <code>weak_ptr</code> esa egalik qilmaydi: u <code>lock()</code> orqali vaqtincha <code>shared_ptr</code> oladi yoki obyekt allaqachon o'chgan bo'lsa, bo'sh pointer qaytaradi.",
      },
      {
        type: "code",
        title: "sikl.cpp",
        code: `#include <iostream>
#include <memory>
#include <string>
#include <utility>

struct Tugun {
    std::string nom;
    std::shared_ptr<Tugun> keyingi;
    std::weak_ptr<Tugun> oldingi;

    explicit Tugun(std::string n) : nom(std::move(n)) {
        std::cout << "yaratildi " << nom << '\\n';
    }
    ~Tugun() { std::cout << "yo'q qilindi " << nom << '\\n'; }
};

int main() {
    auto a = std::make_shared<Tugun>("A");
    auto b = std::make_shared<Tugun>("B");

    a->keyingi = b;
    b->oldingi = a;

    std::cout << "a soni: " << a.use_count() << '\\n';
    std::cout << "b soni: " << b.use_count() << '\\n';

    auto qulflangan = b->oldingi.lock();
    std::cout << "oldingi: " << qulflangan->nom << '\\n';

    a->keyingi.reset();
    std::cout << "b soni: " << b.use_count() << '\\n';
}`,
        output: `yaratildi A
yaratildi B
a soni: 1
b soni: 2
oldingi: A
b soni: 1
yo'q qilindi B
yo'q qilindi A`,
      },
      {
        type: "table",
        head: ["Pointer", "Egalik", "Nusxa", "Qachon"],
        rows: [
          ["<code>unique_ptr</code>", "Yagona", "Yo'q (faqat move)", "Standart tanlov"],
          ["<code>shared_ptr</code>", "Bo'lishilgan", "Ha, hisob oshadi", "Haqiqatan umumiy egalik"],
          ["<code>weak_ptr</code>", "Egaliksiz", "Ha", "Sikl yoki kuzatuv"],
          ["<code>make_shared</code>", "Bo'lishilgan", "Bitta allokatsiya", "Odatda afzal"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Siklni weak_ptr bilan uzing",
        html: "Ikki <code>shared_ptr</code> bir-biriga ishora qilsa, <code>use_count</code> hech qachon 0 ga tushmaydi va xotira oqadi. Bog'lanishlardan birini <code>weak_ptr</code> qiling. Ota-bola munosabatida ota <code>shared_ptr</code>, bola ota tomonga <code>weak_ptr</code> saqlashi — odatiy yechim. <code>shared_from_this</code> esa faqat obyekt <code>shared_ptr</code> bilan boshqarilayotganda ishlaydi.",
      },
    ],
    quiz: [
      {
        q: "Bitta shared_ptr dan ikkita nusxa olinsa use_count qanday bo'ladi?",
        options: [
          "1",
          "2",
          "0",
          "Aniqlanmagan"
        ],
        answer: 1,
        explain: "Har bir shared_ptr nusxasi control block dagi kuchli hisobni oshiradi; ikkita egalik uchun use_count 2 bo'ladi.",
      },
      {
        q: "Muddati o'tgan weak_ptr ustida lock() chaqirilsa nima qaytadi?",
        options: [
          "nullptr ko'rsatkich",
          "Bo'sh shared_ptr",
          "Istisno",
          "Yangi obyekt"
        ],
        answer: 1,
        explain: "lock() obyekt tirik bo'lsa shared_ptr, aks holda bo'sh shared_ptr qaytaradi; shundan keyin tekshirish mumkin.",
      },
      {
        q: "make_shared ning shared_ptr<T>(new T) ga nisbatan afzalligi nima?",
        options: [
          "Xotirani umuman ishlatmaydi",
          "Control block va obyekt uchun bitta allokatsiya qiladi",
          "Har doim weak_ptr yaratadi",
          "Destruktorni chaqirmaydi"
        ],
        answer: 1,
        explain: "make_shared odatda bitta blokda obyekt va control block ni joylashtiradi; bu tezlik va istisno xavfsizligini yaxshilaydi.",
      },
    ],
  },
  {
    id: 63,
    title: "RAII va scope guard amaliyoti",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "RAII (Resource Acquisition Is Initialization) — resursni obyekt hayot tsikliga bog'lash. Konstruktor resursni oladi, destruktor <b>har qanday chiqishda</b> — normal return, <code>break</code>, <code>return</code> yoki istisno — bo'shatadi. Bu qo'lda <code>close</code>/<code>delete</code> yozishdan ko'ra ishonchli.",
      },
      {
        type: "code",
        title: "resurs.cpp",
        code: `#include <iostream>
#include <string>
#include <utility>

class Resurs {
public:
    explicit Resurs(std::string nom) : nom_(std::move(nom)) {
        std::cout << "ochildi " << nom_ << '\\n';
    }

    ~Resurs() {
        std::cout << "yopildi " << nom_ << '\\n';
    }

    Resurs(const Resurs&) = delete;
    Resurs& operator=(const Resurs&) = delete;

private:
    std::string nom_;
};

void ish() {
    Resurs r("fayl");
    std::cout << "ish bajarilmoqda\\n";
}

int main() {
    ish();
    std::cout << "tugadi\\n";
}`,
        output: `ochildi fayl
ish bajarilmoqda
yopildi fayl
tugadi`,
      },
      {
        type: "p",
        html: "Scope guard — RAII ning umumiy shakli: destruktorda ixtiyoriy tozalash funksiyasini chaqiradi. U istisno tashlanganda ham ishlaydi, chunki stack unwinding lokal obyektlarning destruktorlarini chaqiradi. Quyidagi misolda tozalash ikki marta — muvaffaqiyatli va istisnoli yo'lda — bajariladi.",
      },
      {
        type: "code",
        title: "guard.cpp",
        code: `#include <functional>
#include <iostream>
#include <stdexcept>
#include <utility>

class Guard {
public:
    explicit Guard(std::function<void()> f) : f_(std::move(f)) {}

    ~Guard() { f_(); }

    Guard(const Guard&) = delete;
    Guard& operator=(const Guard&) = delete;

private:
    std::function<void()> f_;
};

void xavfli(bool xato) {
    Guard g([] { std::cout << "tozalash\\n"; });
    std::cout << "boshlandi\\n";

    if (xato) {
        throw std::runtime_error("xato");
    }
    std::cout << "tugadi\\n";
}

int main() {
    try {
        xavfli(false);
    } catch (const std::exception& e) {
        std::cout << "ushlandi: " << e.what() << '\\n';
    }

    try {
        xavfli(true);
    } catch (const std::exception& e) {
        std::cout << "ushlandi: " << e.what() << '\\n';
    }
}`,
        output: `boshlandi
tugadi
tozalash
boshlandi
tozalash
ushlandi: xato`,
      },
      {
        type: "table",
        head: ["RAII obyekti", "Boshqaradigan resurs"],
        rows: [
          ["<code>std::unique_ptr</code>", "Heap xotirasi"],
          ["<code>std::lock_guard</code>", "Mutex qulfi"],
          ["<code>std::ofstream</code>", "Fayl deskriptori"],
          ["<code>std::jthread</code>", "Thread va join"],
          ["Scope guard", "Ixtiyoriy tozalash amali"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Destruktor istisno tashlamasin",
        html: "Destruktor odatda <code>noexcept</code>. Agar stack unwinding paytida destruktor istisno tashlasa, <code>std::terminate</code> chaqiriladi. Tozalashda xato bo'lishi mumkin bo'lsa, uni yutib yuboring yoki xato kanaliga yozib qo'ying. Lokal obyektlar qurilishning <b>teskari</b> tartibida yo'q qilinadi.",
      },
    ],
    quiz: [
      {
        q: "Bitta scope ichida a, keyin b qurilgan bo'lsa, destruktorlar qanday tartibda ishlaydi?",
        options: [
          "a, keyin b",
          "b, keyin a",
          "Faqat a",
          "Tartib kafolatlanmagan"
        ],
        answer: 1,
        explain: "Lokal obyektlar qurilishning teskari tartibida yo'q qilinadi: avval b, keyin a.",
      },
      {
        q: "Scope guard istisno tashlanganda ishlaydimi?",
        options: [
          "Yo'q, faqat normal return da",
          "Ha, stack unwinding destruktorni chaqiradi",
          "Faqat catch blokida",
          "Faqat std::terminate da"
        ],
        answer: 1,
        explain: "Istisno stack unwinding ni boshlaydi va lokal RAII obyektlarining destruktorlari chaqiriladi.",
      },
      {
        q: "Stack unwinding paytida destruktor istisno tashlasa nima bo'ladi?",
        options: [
          "Ikkinchi istisno e'tiborsiz qoladi",
          "std::terminate chaqiriladi",
          "Dastur davom etadi",
          "Birinchi istisno bekor qilinadi"
        ],
        answer: 1,
        explain: "Bir vaqtda ikki istisno bilan unwinding davom eta olmaydi; standart std::terminate ni talab qiladi.",
      },
    ],
  },
  {
    id: 64,
    title: "Allokatorlar va xotira strategiyalari",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Standart <code>new</code>/<code>delete</code> umumiy maqsadli, lekin har bir kichik allokatsiya qimmatga tushishi mumkin. <b>Arena</b> (bump) allokator katta buferdan ketma-ket bo'lak beradi va hammasini bir marta bo'shatadi. C++17 <code>std::pmr</code> shu g'oyani tayyor resurslar bilan taqdim etadi.",
      },
      {
        type: "code",
        title: "pmr_arena.cpp",
        code: `#include <array>
#include <cstddef>
#include <iostream>
#include <memory_resource>
#include <vector>

int main() {
    std::array<std::byte, 1024> bufer{};
    std::pmr::monotonic_buffer_resource arena(bufer.data(), bufer.size());
    std::pmr::vector<int> sonlar(&arena);

    for (int i = 1; i <= 6; ++i) {
        sonlar.push_back(i * i);
    }

    std::cout << sonlar.size() << '\\n';

    int yigindi = 0;
    for (int x : sonlar) {
        yigindi += x;
    }
    std::cout << yigindi << '\\n';
    std::cout << (sonlar.get_allocator().resource() == &arena) << '\\n';
}`,
        output: `6
91
1`,
      },
      {
        type: "p",
        html: "Arena buferi stack yoki boshqa uzoq yashovchi joyda bo'lishi kerak. U <code>release()</code> yoki o'z destruktori bilan butun buferni bo'shatadi; individual <code>deallocate</code> chaqiruvlari amalda hech narsa qilmaydi. Shu sababli arena ko'p kichik obyekt yaratib, ularni birgalikda tashlab yuboradigan bosqichlar uchun ideal.",
      },
      {
        type: "code",
        title: "placement_new.cpp",
        code: `#include <cstddef>
#include <iostream>
#include <new>

class Nuqta {
public:
    Nuqta(int x, int y) : x_(x), y_(y) {}
    int x() const { return x_; }
    int y() const { return y_; }

private:
    int x_;
    int y_;
};

int main() {
    alignas(Nuqta) std::byte bufer[sizeof(Nuqta) * 2];

    Nuqta* a = new (bufer) Nuqta(1, 2);
    Nuqta* b = new (bufer + sizeof(Nuqta)) Nuqta(3, 4);

    std::cout << a->x() << ',' << a->y() << '\\n';
    std::cout << b->x() << ',' << b->y() << '\\n';

    a->~Nuqta();
    b->~Nuqta();
}`,
        output: `1,2
3,4`,
      },
      {
        type: "table",
        head: ["Vosita", "Afzalligi", "Kamchiligi"],
        rows: [
          ["<code>new/delete</code>", "Umumiy, moslashuvchan", "Har allokatsiya qimmat"],
          ["Arena / monotonic", "Juda tez, fragmentatsiya kam", "Individual free yo'q"],
          ["Pool", "Bir xil o'lchamli obyektlar uchun tez", "Turli o'lchamga mos emas"],
          ["<code>pmr::vector</code>", "Allokatorni oson almashtiradi", "Resurs umri boshqarilishi kerak"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Avval o'lchang",
        html: "Allokatorni almashtirishdan oldin profiler bilan haqiqiy muammoni toping: fragmentatsiya, qulf (malloc contention) yoki ortiqcha allokatsiya. <code>std::pmr::unsynchronized_pool_resource</code> bir oqimli ish uchun yaxshi; ko'p oqimda esa sinxronizatsiya xarajatini hisobga oling. Custom allokatorning har bir nusxasi tenglikni to'g'ri ta'minlashi shart.",
      },
    ],
    quiz: [
      {
        q: "monotonic_buffer_resource da individual deallocate odatda nima qiladi?",
        options: [
          "Bo'lakni darhol qaytaradi",
          "Amalda hech narsa qilmaydi; hammasi resurs tugaganda bo'shaydi",
          "Butun arenani tozalaydi",
          "Xotirani nolga to'ldiradi"
        ],
        answer: 1,
        explain: "Monotonic resurs individual bo'shatishni qo'llamaydi; u butun buferni bir marta bo'shatadi.",
      },
      {
        q: "Placement new nima uchun ishlatiladi?",
        options: [
          "Yangi heap blokini ajratish",
          "Tayyor xotirada obyekt konstruktorini chaqirish",
          "Obyektni o'chirish",
          "Turni o'zgartirish"
        ],
        answer: 1,
        explain: "Placement new berilgan manzilda obyekt quradi; xotirani o'zi ajratmaydi.",
      },
      {
        q: "Allocator::allocate odatda nimani qaytaradi?",
        options: [
          "Konstruktor qilingan obyektlar",
          "Xom (konstruktor qilinmagan) xotira ko'rsatkichini",
          "Faqat nullptr",
          "std::vector"
        ],
        answer: 1,
        explain: "Allocator xom xotira ajratadi; obyektlarni konstruksiya qilish alohida (construct/placement) bosqich.",
      },
    ],
  },
];
