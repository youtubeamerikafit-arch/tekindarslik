module.exports = [
  {
    id: 65,
    title: "STL arxitekturasi: konteyner, iterator, algoritm",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "STL uchta mustaqil qatlamdan iborat: <b>konteynerlar</b> ma'lumotni saqlaydi, <b>iteratorlar</b> ular bo'ylab yurishni ta'minlaydi, <b>algoritmlar</b> esa iterator juftligi bilan ishlaydi. Algoritm konteyner turini bilmaydi — shuning uchun bitta <code>std::find</code> vector, list va hatto massivda ishlaydi.",
      },
      {
        type: "code",
        title: "sanash.cpp",
        code: `#include <iostream>
#include <list>
#include <vector>

template <typename Konteyner, typename Qiymat>
int sanash(const Konteyner& c, const Qiymat& q) {
    int n = 0;
    for (const auto& x : c) {
        if (x == q) {
            ++n;
        }
    }
    return n;
}

int main() {
    std::vector<int> v{1, 2, 1, 3, 1};
    std::list<int> l{2, 2, 1};

    std::cout << sanash(v, 1) << '\\n';
    std::cout << sanash(l, 2) << '\\n';
}`,
        output: `3
2`,
      },
      {
        type: "p",
        html: "Iteratorning <b>traits</b> i uning qiymat turi, kategoriyasi va farq turini kompilyatsiya vaqtida ochib beradi. Kutubxona kodida <code>std::iterator_traits&lt;It&gt;::value_type</code> shu maqsadda ishlatiladi. <code>std::distance</code> esa iterator kategoriyasiga qarab samarali usulni tanlaydi.",
      },
      {
        type: "code",
        title: "traits.cpp",
        code: `#include <iostream>
#include <iterator>
#include <type_traits>
#include <vector>

int main() {
    using It = std::vector<int>::iterator;
    using Qiymat = std::iterator_traits<It>::value_type;

    static_assert(std::is_same_v<Qiymat, int>);
    std::cout << std::is_same_v<std::iterator_traits<It>::iterator_category,
                               std::random_access_iterator_tag> << '\\n';

    std::vector<int> v{10, 20, 30};
    std::cout << std::distance(v.begin(), v.end()) << '\\n';
}`,
        output: `1
3`,
      },
      {
        type: "table",
        head: ["Qatlam", "Vazifasi", "Misol"],
        rows: [
          ["Konteyner", "Elementlarni saqlaydi va egalik qiladi", "<code>vector</code>, <code>map</code>"],
          ["Iterator", "Elementga murojaat va harakat", "<code>begin()</code>, <code>end()</code>"],
          ["Algoritm", "Iterator oralig'ida amal", "<code>sort</code>, <code>find</code>"],
          ["Funksional", "Taqqoslash yoki amal", "<code>less</code>, lambda"],
          ["Allokator", "Xotira strategiyasi", "<code>std::allocator</code>"],
        ],
      },
      {
        type: "note",
        variant: "info",
        title: "Yarim ochiq oraliq",
        html: "STL oraliqlari <code>[first, last)</code> — <code>last</code> kirmaydi. Shuning uchun bo'sh konteynerda <code>begin() == end()</code>. Bu kelishuv tsikl shartini soddalashtiradi va <code>last</code> ni bir marta hisoblash imkonini beradi. O'z funksiyangizda ham shu konvensiyaga rioya qiling.",
      },
    ],
    quiz: [
      {
        q: "STL algoritmlari konteynerlar bilan qanday bog'lanadi?",
        options: [
          "Har bir algoritm har bir konteyner uchun alohida yoziladi",
          "Iterator juftligi orqali — konteyner turini bilmaydi",
          "Faqat virtual funksiyalar orqali",
          "Faqat massivlar bilan ishlaydi"
        ],
        answer: 1,
        explain: "Algoritmlar iteratorlar bilan ishlaydi; konteyner o'z begin/end iteratorlarini beradi, shu bilan umumiy kod ta'minlanadi.",
      },
      {
        q: "std::iterator_traits<std::vector<int>::iterator>::value_type qanday tur?",
        options: [
          "int",
          "int&",
          "vector<int>",
          "size_t"
        ],
        answer: 0,
        explain: "vector<int> iteratorining value_type i int; havola emas, elementning qiymat turi.",
      },
      {
        q: "[first, last) oraliq nimani anglatadi?",
        options: [
          "Ikkala chegara ham kiradi",
          "first kiradi, last kirmaydi",
          "first kirmaydi, last kiradi",
          "Faqat last kiradi"
        ],
        answer: 1,
        explain: "STL da yarim ochiq oraliq ishlatiladi: first element kiradi, last esa bir qadam keyingi pozitsiya hisoblanadi.",
      },
    ],
  },
  {
    id: 66,
    title: "Iterator kategoriyalari va invalidation",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Har bir iterator qanday amallarni qo'llashi <b>kategoriya</b> bilan belgilanadi: input, forward, bidirectional, random access va (C++20) contiguous. <code>std::advance</code>, <code>std::distance</code> va algoritmlar kategoriyaga qarab eng samarali usulni tanlaydi. Konteyner o'zgarganda iteratorning amal qilishi — <b>invalidation</b> — alohida muhim mavzu.",
      },
      {
        type: "code",
        title: "kategoriya.cpp",
        code: `#include <iostream>
#include <iterator>
#include <list>
#include <vector>

int main() {
    std::vector<int> v{1, 2, 3, 4, 5};
    std::list<int> l{1, 2, 3, 4, 5};

    auto it = std::next(v.begin(), 3);
    std::cout << *it << '\\n';

    std::cout << std::distance(v.begin(), v.end()) << '\\n';
    std::cout << std::distance(l.begin(), l.end()) << '\\n';

    std::advance(it, -2);
    std::cout << *it << '\\n';
}`,
        output: `4
5
5
2`,
      },
      {
        type: "p",
        html: "<code>std::next</code> va <code>std::advance</code> iteratorni o'zgartirmasdan yoki o'zgartirib suradi. <code>vector</code> da <code>distance</code> O(1), <code>list</code> da O(n): list iteratorlari faqat qadam-baqadam yurishni biladi. Algoritm murakkabligini hisoblashda iterator kategoriyasi hal qiluvchi.",
      },
      {
        type: "code",
        title: "erase_sikl.cpp",
        code: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> v{1, 2, 3};
    v.reserve(10);
    int* p = v.data();
    v.push_back(4);
    std::cout << (p == v.data()) << '\\n';

    std::vector<int> sonlar{1, 2, 3, 4, 5, 6};
    for (auto it = sonlar.begin(); it != sonlar.end(); ) {
        if (*it % 2 == 0) {
            it = sonlar.erase(it);
        } else {
            ++it;
        }
    }

    for (int x : sonlar) {
        std::cout << x << ' ';
    }
    std::cout << '\\n';
}`,
        output: `1
1 3 5`,
      },
      {
        type: "table",
        head: ["Amal", "vector", "list", "map"],
        rows: [
          ["<code>push_back</code>", "Reallokatsiyada barcha iteratorlar buziladi", "Buzilmaydi", "—"],
          ["<code>insert</code> (o'rtaga)", "Shu nuqtadan keyingilar buziladi", "Faqat o'chirilgan element", "Boshqa iteratorlar saqlanadi"],
          ["<code>erase</code>", "Erase nuqtasidan keyingilar buziladi", "Faqat o'chirilgan element", "Faqat o'chirilgan element"],
          ["Kategoriya", "Random access / contiguous", "Bidirectional", "Bidirectional"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Erase dan keyin ++it qilmang",
        html: "<code>v.erase(it)</code> o'chirilgan iteratorni yaroqsiz qiladi; keyin <code>++it</code> — UB. <code>erase</code> keyingi element iteratorini qaytaradi, shuning uchun <code>it = v.erase(it)</code> yoziladi. C++20 <code>std::erase_if</code> bu naqshni yanada soddalashtiradi.",
      },
    ],
    quiz: [
      {
        q: "Qaysi iterator turi it + 3 amalini qo'llay oladi?",
        options: [
          "Input iterator",
          "Forward iterator",
          "Bidirectional iterator",
          "Random access iterator"
        ],
        answer: 3,
        explain: "Ixtiyoriy qadam bilan siljish (it + n) faqat random access iteratorlarda mavjud; boshqalarda std::advance kerak.",
      },
      {
        q: "vector::erase(it) qaysi iteratorlarni yaroqsiz qiladi?",
        options: [
          "Faqat it ni",
          "it va undan keyingi barcha iteratorlarni",
          "Faqat begin() ni",
          "Hech qaysisini"
        ],
        answer: 1,
        explain: "Elementlar siljiganligi sababli erase nuqtasidan oxirigacha bo'lgan iteratorlar va havolalar yaroqsiz bo'ladi.",
      },
      {
        q: "list ga element qo'shganda boshqa iteratorlarga nima bo'ladi?",
        options: [
          "Barchasi buziladi",
          "Faqat begin() buziladi",
          "Boshqa elementlarning iteratorlari saqlanadi",
          "Hajm o'zgarsa barchasi buziladi"
        ],
        answer: 2,
        explain: "list tugunlarga asoslangan; qo'shish mavjud tugunlarni ko'chirmaydi, shuning uchun boshqa iteratorlar amal qiladi.",
      },
    ],
  },
  {
    id: 67,
    title: "Konteynerlar ichki tuzilishi va murakkablik",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "<code>vector</code> uzluksiz bufer, <code>deque</code> bloklar massivi, <code>list</code> ikki tomonlama bog'langan tugunlar, <code>map</code>/<code>set</code> balanslangan daraxt (odatda qizil-qora), <code>unordered_*</code> esa hash-jadval. Tanlov murakkablik, xotira sarfi va <b>kesh lokalligi</b> o'rtasidagi murosa.",
      },
      {
        type: "code",
        title: "vector_reserve.cpp",
        code: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> v;
    v.reserve(10);

    std::cout << (v.capacity() >= 10) << '\\n';

    int* p = v.data();
    for (int i = 0; i < 10; ++i) {
        v.push_back(i);
    }

    std::cout << (p == v.data()) << '\\n';
    std::cout << v.size() << ' ' << (v.capacity() >= v.size()) << '\\n';
}`,
        output: `1
1
10 1`,
      },
      {
        type: "p",
        html: "<code>reserve</code> oldindan xotira ajratadi va qayta ajratishni oldini oladi; shu tufayli elementlarga ko'rsatkichlar barqaror qoladi. <code>vector</code> o'sishi geometrik (odatda 2 barobar) bo'lgani uchun <code>push_back</code> amortizatsiyalangan O(1). O'rtaga <code>insert</code> esa O(n) — elementlar siljiydi.",
      },
      {
        type: "code",
        title: "deque_list.cpp",
        code: `#include <deque>
#include <iostream>
#include <list>

int main() {
    std::deque<int> d{2, 3};
    d.push_front(1);
    d.push_back(4);

    for (int x : d) {
        std::cout << x << ' ';
    }
    std::cout << '\\n';

    std::list<int> a{1, 2};
    std::list<int> b{3, 4};

    auto it = a.begin();
    ++it;
    a.splice(it, b);

    for (int x : a) {
        std::cout << x << ' ';
    }
    std::cout << '\\n';
}`,
        output: `1 2 3 4
1 3 4 2`,
      },
      {
        type: "table",
        head: ["Konteyner", "Tuzilma", "push", "Qidiruv"],
        rows: [
          ["<code>vector</code>", "Uzluksiz bufer", "Oxiriga amortizatsiyalangan O(1)", "Tartibsiz O(n)"],
          ["<code>deque</code>", "Bloklar massivi", "Ikkala uchida O(1)", "Tartibsiz O(n)"],
          ["<code>list</code>", "Bog'langan tugunlar", "Har joyda O(1)", "O(n), splice O(1)"],
          ["<code>map</code>", "Balanslangan daraxt", "O(log n)", "O(log n)"],
          ["<code>unordered_map</code>", "Hash-jadval", "O'rtacha O(1)", "O'rtacha O(1)"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Standart tanlov — vector",
        html: "Aksariyat holatda <code>std::vector</code> eng tez: uzluksiz xotira kesh uchun qulay, iteratorlar sodda, xotira sarfi kam. <code>list</code> faqat tez-tez o'rtaga qo'shish/o'chirish yoki iterator barqarorligi shart bo'lganda o'rinli. <code>map</code> tartiblangan kalit kerak bo'lganda; <code>unordered_map</code> esa tartib muhim bo'lmasa tezroq.",
      },
    ],
    quiz: [
      {
        q: "vector::push_back ning amortizatsiyalangan murakkabligi qanday?",
        options: [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        answer: 0,
        explain: "Noyob reallokatsiyalar o'sish hajmi tufayli umumiy xarajat amortizatsiya qilinadi; har bir push_back o'rtacha O(1).",
      },
      {
        q: "list::splice ning murakkabligi qanday?",
        options: [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n log n)"
        ],
        answer: 2,
        explain: "splice faqat bir nechta ko'rsatkichni qayta bog'laydi, elementlarni ko'chirmaydi; shuning uchun O(1).",
      },
      {
        q: "std::map da kalit bo'yicha qidiruv odatda qanday murakkablikda?",
        options: [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        answer: 1,
        explain: "map balanslangan daraxt; qidiruv, qo'shish va o'chirish O(log n).",
      },
    ],
  },
  {
    id: 68,
    title: "Algoritmlar: transform, accumulate va erase-remove",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "STL algoritmlari <code>&lt;algorithm&gt;</code> va <code>&lt;numeric&gt;</code> da yashaydi. <code>transform</code> biror oraliqni boshqasiga aylantiradi, <code>accumulate</code> yig'indi/agregat hisoblaydi, <code>partial_sum</code> prefiks yig'indilarini beradi. Ular tsikllarni qisqartiradi va niyatni aniq ifodalaydi.",
      },
      {
        type: "code",
        title: "transform.cpp",
        code: `#include <algorithm>
#include <iostream>
#include <numeric>
#include <vector>

int main() {
    std::vector<int> v{1, 2, 3, 4};
    std::vector<int> kvadrat(v.size());

    std::transform(v.begin(), v.end(), kvadrat.begin(),
                   [](int x) { return x * x; });

    int yigindi = std::accumulate(kvadrat.begin(), kvadrat.end(), 0);

    std::vector<int> pref(kvadrat.size());
    std::partial_sum(kvadrat.begin(), kvadrat.end(), pref.begin());

    for (int x : kvadrat) {
        std::cout << x << ' ';
    }
    std::cout << '\\n' << yigindi << '\\n';

    for (int x : pref) {
        std::cout << x << ' ';
    }
    std::cout << '\\n';
}`,
        output: `1 4 9 16
30
1 5 14 30`,
      },
      {
        type: "p",
        html: "<code>accumulate</code> ning uchinchi argumenti <b>boshlang'ich qiymat</b> va natija turini belgilaydi: <code>0</code> bersangiz int, <code>0LL</code> bersangiz long long. <code>remove_if</code> elementlarni o'chirmaydi — mos kelmaydiganlarini oldinga suradi va yangi mantiqiy oxirni qaytaradi; keyin <code>erase</code> kerak.",
      },
      {
        type: "code",
        title: "erase_remove.cpp",
        code: `#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

struct Yozuv {
    std::string nom;
    int ball;
};

int main() {
    std::vector<int> sonlar{1, 2, 3, 4, 5, 6};
    sonlar.erase(
        std::remove_if(sonlar.begin(), sonlar.end(),
                       [](int x) { return x % 2 == 0; }),
        sonlar.end());

    for (int x : sonlar) {
        std::cout << x << ' ';
    }
    std::cout << '\\n';

    std::vector<Yozuv> y{{"A", 80}, {"B", 90}, {"C", 80}};
    std::stable_sort(y.begin(), y.end(),
                     [](const Yozuv& a, const Yozuv& b) {
                         return a.ball > b.ball;
                     });

    for (const auto& e : y) {
        std::cout << e.nom << ' ';
    }
    std::cout << '\\n';
}`,
        output: `1 3 5
B A C`,
      },
      {
        type: "table",
        head: ["Algoritm", "Vazifasi", "Murakkablik"],
        rows: [
          ["<code>transform</code>", "Har elementni aylantiradi", "O(n)"],
          ["<code>accumulate</code>", "Agregat hisoblaydi", "O(n)"],
          ["<code>remove_if</code> + <code>erase</code>", "Shartga moslarni o'chiradi", "O(n)"],
          ["<code>stable_sort</code>", "Teng elementlar tartibini saqlaydi", "O(n log n)"],
          ["<code>partial_sum</code>", "Prefiks yig'indilari", "O(n)"],
        ],
      },
      {
        type: "note",
        variant: "info",
        title: "Parallel algoritmlar",
        html: "C++17 <code>std::execution::par</code> bilan algoritmlarni parallel bajarish mumkin, lekin GCC da bu odatda TBB kutubxonasini talab qiladi va har doim tezroq bo'lavermaydi. Kichik ma'lumotlarda overhead katta; avval o'lchab ko'ring. <code>par_unseq</code> esa vektorlashtirishga ruxsat beradi, ammo funksiyangiz data race va tartibga bog'liq bo'lmasligi kerak.",
      },
    ],
    quiz: [
      {
        q: "std::remove_if elementlarni darhol o'chiradimi?",
        options: [
          "Ha, konteynerdan olib tashlaydi",
          "Yo'q, faqat kerakli elementlarni oldinga suradi",
          "Ha, lekin faqat vector da",
          "Faqat map da o'chiradi"
        ],
        answer: 1,
        explain: "remove_if mos kelmagan elementlarni oldinga ko'chiradi va yangi oxirni qaytaradi; jismonan o'chirish uchun erase kerak.",
      },
      {
        q: "std::stable_sort ning kafolati nima?",
        options: [
          "Har doim tezroq",
          "Teng elementlarning nisbiy tartibini saqlaydi",
          "Faqat sonlarni saralaydi",
          "Xotira ishlatmaydi"
        ],
        answer: 1,
        explain: "stable_sort teng kalitli elementlarning kirish tartibini saqlaydi; sort esa buni kafolatlamaydi.",
      },
      {
        q: "accumulate ning boshlang'ich qiymati natija turiga qanday ta'sir qiladi?",
        options: [
          "Hech qanday ta'sir qilmaydi",
          "Natija turini va hisoblash turini belgilaydi",
          "Faqat chiqish formatini o'zgartiradi",
          "Har doim double qiladi"
        ],
        answer: 1,
        explain: "accumulate akkumulyator sifatida uchinchi argument turini ishlatadi; 0 int, 0.0 double natija beradi.",
      },
    ],
  },
  {
    id: 69,
    title: "Ranges amaliyoti: iota, proyeksiya va kompozitsiya",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "Ranges bilan cheksiz yoki hisoblanadigan ketma-ketliklarni ham oddiy diapazon kabi ishlatish mumkin. <code>views::iota</code> sonlar generatori; <code>filter</code>, <code>transform</code>, <code>take</code> esa kompozitsiya quradi. Proyeksiya algoritmni elementning ichki maydoniga bog'lash imkonini beradi.",
      },
      {
        type: "code",
        title: "iota.cpp",
        code: `#include <iostream>
#include <ranges>

int main() {
    auto sonlar = std::views::iota(1, 11)
        | std::views::filter([](int x) { return x % 3 == 0; })
        | std::views::transform([](int x) { return x * 10; });

    for (int x : sonlar) {
        std::cout << x << ' ';
    }
    std::cout << '\\n';
}`,
        output: `30 60 90 `,
      },
      {
        type: "p",
        html: "Bu zanjir hech qanday konteyner yaratmaydi va faqat uch marta hisoblaydi: 3, 6, 9 ni topib, 30, 60, 90 ga aylantiradi. <code>iota(1)</code> cheksiz bo'lishi mumkin; uni <code>take</code> yoki <code>take_while</code> bilan cheklash kerak. Proyeksiya esa <code>ranges::count_if</code>, <code>any_of</code>, <code>max_element</code> kabi algoritmlarda ishlaydi.",
      },
      {
        type: "code",
        title: "mahsulot.cpp",
        code: `#include <algorithm>
#include <iostream>
#include <ranges>
#include <string>
#include <vector>

struct Mahsulot {
    std::string nom;
    int narx;
};

int main() {
    std::vector<Mahsulot> m{{"olma", 12}, {"non", 5}, {"sut", 9}};

    auto qimmat = std::ranges::count_if(
        m, [](int n) { return n > 8; }, &Mahsulot::narx);
    std::cout << qimmat << '\\n';

    auto bor = std::ranges::any_of(
        m, [](const std::string& s) { return s == "sut"; }, &Mahsulot::nom);
    std::cout << bor << '\\n';

    auto eng = std::ranges::max_element(m, {}, &Mahsulot::narx);
    std::cout << eng->nom << '\\n';
}`,
        output: `2
1
olma`,
      },
      {
        type: "table",
        head: ["Vosita", "Natija", "Eslatma"],
        rows: [
          ["<code>views::iota(a, b)</code>", "a dan b gacha sonlar", "b kirmaydi"],
          ["<code>views::take(n)</code>", "Birinchi n element", "Cheksiz diapazonni cheklaydi"],
          ["<code>views::reverse</code>", "Teskari ko'rinish", "Bidirectional range kerak"],
          ["<code>views::join</code>", "Ichki diapazonlarni birlashtiradi", "Lazy"],
          ["Proyeksiya", "Algoritmga maydonni ko'rsatadi", "Member pointer yoki lambda"],
        ],
      },
      {
        type: "note",
        variant: "tip",
        title: "Materializatsiya kerak bo'lganda",
        html: "View natijasini saqlab qolish kerak bo'lsa, uni konteynerga ko'chiring: <code>std::vector&lt;int&gt; v(natija.begin(), natija.end());</code>. C++23 da <code>std::ranges::to&lt;std::vector&gt;()</code> bor. View ni uzoq saqlashdan oldin manba umrini tekshiring — aks holda dangling bo'ladi.",
      },
    ],
    quiz: [
      {
        q: "std::views::iota(1, 11) qaysi sonlarni beradi?",
        options: [
          "1 dan 11 gacha, 11 kiradi",
          "1 dan 10 gacha, 11 kirmaydi",
          "0 dan 11 gacha",
          "Faqat 1 va 11"
        ],
        answer: 1,
        explain: "iota yarim ochiq oraliq beradi: 1,2,...,10; oxirgi 11 kirmaydi.",
      },
      {
        q: "ranges::count_if ga proyeksiya berilsa nima o'zgaradi?",
        options: [
          "Predikat elementning o'zi o'rniga proyeksiya natijasini oladi",
          "Algoritm konteynerni o'zgartiradi",
          "Count_if eager bo'ladi",
          "Proyeksiya faqat sort da ishlaydi"
        ],
        answer: 0,
        explain: "Proyeksiya har elementdan qiymat chiqaradi va predikat shu qiymat bilan chaqiriladi.",
      },
      {
        q: "views::take(3) qanday ishlaydi?",
        options: [
          "Darhol 3 elementli vector yaratadi",
          "Lazy ravishda birinchi 3 elementni o'tkazadi",
          "Manbadan 3 elementni o'chiradi",
          "Faqat cheksiz diapazonlarda ishlaydi"
        ],
        answer: 1,
        explain: "take — lazy adaptor; yurganda birinchi 3 elementdan keyin to'xtaydi.",
      },
    ],
  },
];
