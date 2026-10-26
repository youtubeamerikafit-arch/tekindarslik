module.exports = [
  {
    id: 75,
    title: "std::thread: ishga tushirish va hayot tsikli",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "<code>std::thread</code> yangi oqimda funksiyani ishga tushiradi. Obyekt <b>joinable</b> bo'lsa, scope tugashidan oldin <code>join()</code> yoki <code>detach()</code> chaqirilishi shart; aks holda destruktor <code>std::terminate</code> chaqiradi. C++20 <code>std::jthread</code> buni avtomatik bajaradi va <code>stop_token</code> orqali to'xtatishni qo'llab-quvvatlaydi.",
      },
      {
        type: "code",
        title: "bitta_ishchi.cpp",
        code: `#include <iostream>
#include <thread>

int main() {
    long long yigindi = 0;

    std::thread ishchi([&yigindi] {
        for (int i = 1; i <= 100; ++i) {
            yigindi += i;
        }
    });

    ishchi.join();
    std::cout << yigindi << '\\n';
}`,
        output: `5050`,
      },
      {
        type: "p",
        html: "Natijani oqim ichida to'g'ridan-to'g'ri chop etish tartibni kafolatlamaydi. Buning o'rniga har bir oqim o'z <b>qismini</b> alohida joyga yozadi, <code>join</code> dan keyin asosiy oqim yig'adi. Quyidagi misolda 4 ta oqim 1..1000 sonlarini bo'lib hisoblaydi va natija har doim bir xil bo'ladi.",
      },
      {
        type: "code",
        title: "parallel_yigindi.cpp",
        code: `#include <iostream>
#include <thread>
#include <vector>

int main() {
    constexpr int N = 1000;
    std::vector<long long> qismlar(4, 0);
    std::vector<std::thread> ishchilar;

    for (int t = 0; t < 4; ++t) {
        ishchilar.emplace_back([&, t] {
            long long s = 0;
            for (int i = t + 1; i <= N; i += 4) {
                s += i;
            }
            qismlar[t] = s;
        });
    }

    for (auto& t : ishchilar) {
        t.join();
    }

    long long jami = 0;
    for (long long x : qismlar) {
        jami += x;
    }

    std::cout << jami << '\\n';
}`,
        output: `500500`,
      },
      {
        type: "table",
        head: ["Amal", "Vazifasi", "Eslatma"],
        rows: [
          ["<code>join()</code>", "Oqim tugashini kutadi", "Bir marta chaqiriladi"],
          ["<code>detach()</code>", "Oqimni mustaqil qoldiradi", "Resurslar boshqaruvi murakkablashadi"],
          ["<code>joinable()</code>", "Oqim hali bog'langanmi?", "<code>join</code> oldidan tekshirish"],
          ["<code>hardware_concurrency()</code>", "Mantiqiy yadrolar soni (maslahat)", "0 bo'lishi mumkin"],
          ["<code>jthread</code>", "Avtomatik join + stop_token", "C++20"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Istisno va join",
        html: "Agar <code>join</code> dan oldin istisno tashlansa, thread destruktori <code>std::terminate</code> chaqiradi. RAII qobiq (<code>jthread</code> yoki <code>lock_guard</code> uslubidagi guard) ishlating. Oqimlar sonini yadrolar sonidan ancha oshirib yubormang: kontekst almashinuvi va kesh bosimi unumdorlikni pasaytiradi.",
      },
    ],
    quiz: [
      {
        q: "joinable std::thread scope tugaganda join ham, detach ham chaqirilmasa nima bo'ladi?",
        options: [
          "Oqim avtomatik join bo'ladi",
          "std::terminate chaqiriladi",
          "Oqim avtomatik detach bo'ladi",
          "Hech narsa bo'lmaydi"
        ],
        answer: 1,
        explain: "Standart joinable thread destruktorida std::terminate ni talab qiladi; shuning uchun join yoki detach majburiy.",
      },
      {
        q: "std::jthread ning std::thread dan asosiy farqi nima?",
        options: [
          "U tezroq ishlaydi",
          "Destruktorda avtomatik join qiladi va stop_token beradi",
          "Faqat bitta oqim yaratadi",
          "Umutexni avtomatik qulflaydi"
        ],
        answer: 1,
        explain: "jthread RAII uslubida avtomatik join qiladi va stop_token orqali kooperativ to'xtatishni qo'llab-quvvatlaydi.",
      },
      {
        q: "hardware_concurrency() nimani qaytaradi?",
        options: [
          "Aniq optimal oqimlar sonini",
          "Mantiqiy yadrolar soni haqidagi maslahatni",
          "Joriy oqim ID sini",
          "CPU chastotasini"
        ],
        answer: 1,
        explain: "U faqat maslahat beradi va 0 qaytarishi mumkin; optimal oqimlar soni ish yuklamasiga bog'liq.",
      },
    ],
  },
  {
    id: 76,
    title: "Mutex, lock_guard va deadlock",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "Bir nechta oqim umumiy ma'lumotni o'zgartirsa, <b>data race</b> yuz beradi. <code>std::mutex</code> kritik bo'limni himoyalaydi: bir vaqtda faqat bitta oqim ichkariga kiradi. <code>lock_guard</code> — eng sodda RAII qulf; <code>unique_lock</code> kechiktirish va qo'lda ochish imkonini beradi; <code>scoped_lock</code> bir nechta mutexni deadlock xavfisiz qulflaydi.",
      },
      {
        type: "code",
        title: "hisoblagich.cpp",
        code: `#include <iostream>
#include <mutex>
#include <thread>
#include <vector>

int main() {
    long long hisob = 0;
    std::mutex m;
    std::vector<std::thread> ishchilar;

    for (int t = 0; t < 4; ++t) {
        ishchilar.emplace_back([&] {
            for (int i = 0; i < 1000; ++i) {
                std::lock_guard<std::mutex> qulf(m);
                ++hisob;
            }
        });
    }

    for (auto& t : ishchilar) {
        t.join();
    }

    std::cout << hisob << '\\n';
}`,
        output: `4000`,
      },
      {
        type: "p",
        html: "Qulf doim <b>eng qisqa</b> kritik bo'limni o'rashi kerak. Yuqorida <code>++hisob</code> himoyalangan, hisoblash esa tashqarida. Ikki mutexni turli tartibda qulflash deadlock ga olib keladi; <code>std::scoped_lock</code> ichki algoritmi bilan buni oldini oladi.",
      },
      {
        type: "code",
        title: "qulflar.cpp",
        code: `#include <chrono>
#include <iostream>
#include <mutex>

int main() {
    std::mutex a;
    std::mutex b;

    {
        std::scoped_lock qulf(a, b);
        std::cout << "ikkala qulf olindi\\n";
    }

    std::timed_mutex tm;
    if (tm.try_lock_for(std::chrono::milliseconds(10))) {
        std::cout << "timed qulf olindi\\n";
        tm.unlock();
    }

    std::unique_lock<std::mutex> q(a, std::defer_lock);
    std::cout << q.owns_lock() << '\\n';

    q.lock();
    std::cout << q.owns_lock() << '\\n';
}`,
        output: `ikkala qulf olindi
timed qulf olindi
0
1`,
      },
      {
        type: "table",
        head: ["Qulf", "Xususiyati", "Qachon"],
        rows: [
          ["<code>lock_guard</code>", "Eng yengil RAII, faqat lock/unlock", "Oddiy kritik bo'lim"],
          ["<code>unique_lock</code>", "Defer, try_lock, unlock, condition_variable", "Moslashuvchan boshqaruv"],
          ["<code>scoped_lock</code>", "Bir nechta mutex, deadlock oldini oladi", "C++17, bir nechta resurs"],
          ["<code>shared_mutex</code>", "Ko'p o'quvchi / bitta yozuvchi", "Read-heavy holatlar"],
          ["<code>recursive_mutex</code>", "Bir oqim qayta qulflashi mumkin", "Rekursiv API"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Deadlock ning to'rt sharti",
        html: "O'zaro istisno, ushlab turish, oldindan olish yo'qligi va aylana kutish. Amalda eng samarali chora — <b>global qulf tartibi</b> yoki <code>std::scoped_lock</code>. Qulf ichida uzoq I/O yoki boshqa mutexni kutish qilmang. <code>recursive_mutex</code> ko'pincha dizayn hidoyati: chaqiruv zanjirini qayta ko'rib chiqing.",
      },
    ],
    quiz: [
      {
        q: "lock_guard va unique_lock orasidagi asosiy farq nima?",
        options: [
          "lock_guard tezroq, unique_lock esa defer/unlock qila oladi",
          "unique_lock faqat bitta oqimda ishlaydi",
          "lock_guard condition_variable bilan ishlaydi",
          "Ular butunlay bir xil"
        ],
        answer: 0,
        explain: "lock_guard minimal RAII; unique_lock qulflashni kechiktirish, qo'lda ochish va condition_variable bilan ishlash imkonini beradi.",
      },
      {
        q: "std::scoped_lock(a, b) qanday muammoni hal qiladi?",
        options: [
          "Mutexlarni navbat bilan qulflab, deadlock oldini oladi",
          "Mutexlarni butunlay o'chiradi",
          "Faqat bitta mutexni qulflaydi",
          "Qulfni abadiy ushlab turadi"
        ],
        answer: 0,
        explain: "scoped_lock bir nechta mutexni deadlock-safe algoritm bilan qulflaydi va scope oxirida ochadi.",
      },
      {
        q: "recursive_mutex qachon kerak bo'ladi?",
        options: [
          "Har doim, oddiy mutex o'rniga",
          "Bir oqim allaqachon qulflagan mutexni yana qulflashi kerak bo'lganda",
          "Ko'p o'quvchi uchun",
          "Faqat static o'zgaruvchilar uchun"
        ],
        answer: 1,
        explain: "recursive_mutex bir oqimning qayta qulflashiga ruxsat beradi; ko'pincha rekursiv chaqiruvli API da uchraydi.",
      },
    ],
  },
  {
    id: 77,
    title: "Atomics va memory order",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "<code>std::atomic&lt;T&gt;</code> oddiy o'zgaruvchiga nisbatan <b>atomik</b> o'qish-yozishni kafolatlaydi: data race yo'q, lekin operatsiyalar orasidagi tartib <b>memory order</b> bilan belgilanadi. Standart <code>seq_cst</code> eng kuchli va tushunarli; <code>relaxed</code> faqat atomiklikni beradi; <code>acquire/release</code> esa oqimlar orasida happens-before o'rnatadi.",
      },
      {
        type: "code",
        title: "atomic_counter.cpp",
        code: `#include <atomic>
#include <iostream>
#include <thread>
#include <vector>

int main() {
    std::atomic<int> hisob{0};
    std::vector<std::thread> ishchilar;

    for (int t = 0; t < 4; ++t) {
        ishchilar.emplace_back([&] {
            for (int i = 0; i < 1000; ++i) {
                hisob.fetch_add(1, std::memory_order_relaxed);
            }
        });
    }

    for (auto& t : ishchilar) {
        t.join();
    }

    std::cout << hisob.load() << '\\n';
}`,
        output: `4000`,
      },
      {
        type: "p",
        html: "Bu yerda <code>relaxed</code> yetarli, chunki hisoblagichning yakuniy qiymatidan boshqa hech narsa muhim emas. Lekin bir oqim ma'lumot yozib, ikkinchisi uni o'qishi kerak bo'lsa, <b>release store</b> va <b>acquire load</b> juftligi kerak: u yozuvning o'qishdan oldin ko'rinishini kafolatlaydi.",
      },
      {
        type: "code",
        title: "release_acquire.cpp",
        code: `#include <atomic>
#include <iostream>
#include <thread>

int main() {
    int malumot = 0;
    std::atomic<bool> tayyor{false};

    std::thread ishchi([&] {
        malumot = 42;
        tayyor.store(true, std::memory_order_release);
    });

    while (!tayyor.load(std::memory_order_acquire)) {
        std::this_thread::yield();
    }

    std::cout << malumot << '\\n';
    ishchi.join();
}`,
        output: `42`,
      },
      {
        type: "table",
        head: ["Order", "Kafolati", "Qachon"],
        rows: [
          ["<code>relaxed</code>", "Faqat atomiklik", "Mustaqil hisoblagich"],
          ["<code>acquire</code>", "Keyingi o'qishlar yozuvdan keyin", "Bayroqni kutish"],
          ["<code>release</code>", "Oldingi yozuvlar ko'rinadi", "Bayroqni o'rnatish"],
          ["<code>acq_rel</code>", "Ikkalasi", "RMW operatsiyalar"],
          ["<code>seq_cst</code>", "Yagona global tartib", "Standart, xavfsiz tanlov"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "Atomic hamma narsani hal qilmaydi",
        html: "Bir nechta maydonni birgalikda yangilash atomik emas: <code>atomic</code> ni ko'p qadamli invariant uchun ishlatsangiz, mutex kerak. <code>std::atomic&lt;std::string&gt;</code> odatda lock bilan implementatsiya qilinadi. Memory order ni tasodifan tanlamang; avval <code>seq_cst</code> bilan to'g'ri ishlang, keyin profiling asosida yengillashtiring.",
      },
    ],
    quiz: [
      {
        q: "memory_order_relaxed nimani kafolatlaydi?",
        options: [
          "Oqimlar orasidagi to'liq tartibni",
          "Faqat operatsiyaning atomikligini",
          "Happens-before munosabatini",
          "Mutex qulfini"
        ],
        answer: 1,
        explain: "relaxed faqat atomiklikni beradi; boshqa o'zgaruvchilarning ko'rinishi yoki tartibi kafolatlanmaydi.",
      },
      {
        q: "Release store va acquire load juftligi nima beradi?",
        options: [
          "Deadlock",
          "Store dan oldingi yozuvlarning load dan keyin ko'rinishini (happens-before)",
          "Avtomatik mutex",
          "Atomic ni lock-free qiladi"
        ],
        answer: 1,
        explain: "release/acquire juftligi sinxronizatsiya o'rnatadi: release dan oldingi yozuvlar acquire dan keyin ko'rinadi.",
      },
      {
        q: "std::atomic<int> ustida ++ operatori qanday amal?",
        options: [
          "Atomik o'qish-yozish (RMW)",
          "Oddiy int ++ bilan bir xil",
          "Faqat o'qish",
          "Mutex qulflash"
        ],
        answer: 0,
        explain: "atomic ++ atomik read-modify-write; boshqa oqimlar bilan data race bo'lmaydi.",
      },
    ],
  },
  {
    id: 78,
    title: "Futures, promises va std::async",
    minutes: 17,
    blocks: [
      {
        type: "p",
        html: "<code>std::future&lt;T&gt;</code> — kelajakda paydo bo'ladigan qiymat uchun tutqich. Uni uch manbadan olish mumkin: <code>std::async</code>, <code>std::promise</code> va <code>std::packaged_task</code>. <code>get()</code> natijani kutadi va uni bir marta oladi; istisno esa future orqali chaqiruvchiga qayta tashlanadi.",
      },
      {
        type: "code",
        title: "async.cpp",
        code: `#include <future>
#include <iostream>
#include <numeric>
#include <vector>

int main() {
    std::vector<int> v(100);
    std::iota(v.begin(), v.end(), 1);

    auto future = std::async(std::launch::async, [&v] {
        return std::accumulate(v.begin(), v.end(), 0LL);
    });

    std::cout << "hisoblanmoqda\\n";
    std::cout << future.get() << '\\n';
}`,
        output: `hisoblanmoqda
5050`,
      },
      {
        type: "p",
        html: "<code>std::launch::async</code> yangi oqimda bajarishni talab qiladi; <code>std::launch::deferred</code> esa ishni <code>get()</code> yoki <code>wait()</code> gacha kechiktiradi. <code>std::promise</code> bilan natijani qo'lda, istalgan oqimdan yetkazish mumkin — bu kanal (channel) uslubidagi aloqa uchun asos.",
      },
      {
        type: "code",
        title: "promise.cpp",
        code: `#include <future>
#include <iostream>
#include <thread>

int main() {
    std::promise<int> vaada;
    std::future<int> kelajak = vaada.get_future();

    std::thread ishchi([&vaada] {
        vaada.set_value(7 * 6);
    });

    std::cout << kelajak.get() << '\\n';
    ishchi.join();
}`,
        output: `42`,
      },
      {
        type: "table",
        head: ["Vosita", "Natija manbai", "Afzalligi"],
        rows: [
          ["<code>std::async</code>", "Funksiya chaqiruvi", "Eng sodda parallel ish"],
          ["<code>std::promise</code>", "Qo'lda <code>set_value</code>", "Kanallar va callback lar"],
          ["<code>packaged_task</code>", "Funksiya + future", "Vazifani navbatga qo'yish"],
          ["<code>shared_future</code>", "Bir nechta iste'molchi", "<code>get</code> bir necha marta"],
          ["<code>future</code>", "Bitta iste'molchi", "<code>get</code> faqat bir marta"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        title: "future destruktori kutishi mumkin",
        html: "<code>std::async</code> dan olingan future ning destruktori, agar vazifa tugamagan bo'lsa, <b>bloklashi</b> mumkin. Bu kutilmagan kechikishlar beradi. Shuningdek <code>get()</code> ni ikki marta chaqirmang — ikkinchisi <code>std::future_error</code> tashlaydi. Natijani ko'p joyda ishlatish uchun <code>shared_future</code> dan foydalaning.",
      },
    ],
    quiz: [
      {
        q: "std::future ustida get() ikki marta chaqirilsa nima bo'ladi?",
        options: [
          "Bir xil qiymat qaytadi",
          "Ikkinchi chaqiruv std::future_error tashlaydi",
          "Dastur to'xtaydi",
          "Yangi hisoblash boshlanadi"
        ],
        answer: 1,
        explain: "get() natijani bir marta oladi va future ni yaroqsiz holatga keltiradi; qayta chaqiruv future_error beradi.",
      },
      {
        q: "std::promise qanday ishlaydi?",
        options: [
          "Natijani o'zi hisoblaydi",
          "set_value orqali future ga qiymat yetkazadi",
          "Faqat istisno tashlaydi",
          "Yangi oqim yaratadi"
        ],
        answer: 1,
        explain: "promise ishlab chiqaruvchi tomon; set_value (yoki set_exception) future ni to'ydiradi.",
      },
      {
        q: "std::launch::deferred nimani bildiradi?",
        options: [
          "Ish darhol yangi oqimda boshlanadi",
          "Ish get() yoki wait() chaqirilganda bajariladi",
          "Ish butunlay bekor qilinadi",
          "Ish faqat birinchi yadroda bajariladi"
        ],
        answer: 1,
        explain: "deferred siyosati ishni kechiktiradi: u get/wait paytida chaqiruvchi oqimda bajariladi.",
      },
    ],
  },
  {
    id: 79,
    title: "Coroutines overview: co_yield va co_return",
    minutes: 18,
    blocks: [
      {
        type: "p",
        html: "C++20 <b>coroutine</b> — bajarilishini to'xtatib, keyin davom ettirish mumkin bo'lgan funksiya. Uchta kalit so'z bor: <code>co_await</code> (kutish), <code>co_yield</code> (qiymat qaytarib to'xtash) va <code>co_return</code> (tugash). Coroutine <code>promise_type</code> orqali o'z xatti-harakatini boshqaradi; bu mexanizm generatorlar va asinxron I/O uchun poydevor.",
      },
      {
        type: "code",
        title: "generator.cpp",
        code: `#include <coroutine>
#include <exception>
#include <iostream>
#include <utility>

template <typename T>
struct Generator {
    struct promise_type {
        T joriy{};

        Generator get_return_object() {
            return Generator{std::coroutine_handle<promise_type>::from_promise(*this)};
        }
        std::suspend_always initial_suspend() noexcept { return {}; }
        std::suspend_always final_suspend() noexcept { return {}; }
        void return_void() {}
        std::suspend_always yield_value(T qiymat) {
            joriy = qiymat;
            return {};
        }
        void unhandled_exception() { std::terminate(); }
    };

    explicit Generator(std::coroutine_handle<promise_type> h) : h_(h) {}
    ~Generator() { if (h_) h_.destroy(); }
    Generator(const Generator&) = delete;
    Generator& operator=(const Generator&) = delete;
    Generator(Generator&& b) noexcept : h_(std::exchange(b.h_, {})) {}

    bool keyingi() {
        h_.resume();
        return !h_.done();
    }
    T qiymat() const { return h_.promise().joriy; }

private:
    std::coroutine_handle<promise_type> h_;
};

Generator<int> sonlar() {
    for (int i = 1; i <= 3; ++i) {
        co_yield i * 10;
    }
}

int main() {
    auto g = sonlar();
    while (g.keyingi()) {
        std::cout << g.qiymat() << ' ';
    }
    std::cout << '\\n';
}`,
        output: `10 20 30 `,
      },
      {
        type: "p",
        html: "<code>initial_suspend</code> har doim to'xtatadi, shuning uchun qurilishda tana hali bajarilmaydi. <code>keyingi()</code> har chaqiruvda coroutine ni davom ettiradi; <code>co_yield</code> <code>yield_value</code> ni chaqirib, qiymatni saqlaydi va to'xtaydi. Tsikl tugagach <code>return_void</code> va <code>final_suspend</code> ishlaydi, <code>done()</code> true bo'ladi.",
      },
      {
        type: "code",
        title: "task.cpp",
        code: `#include <coroutine>
#include <exception>
#include <iostream>

struct Vazifa {
    struct promise_type {
        int natija{};

        Vazifa get_return_object() {
            return Vazifa{std::coroutine_handle<promise_type>::from_promise(*this)};
        }
        std::suspend_never initial_suspend() noexcept { return {}; }
        std::suspend_always final_suspend() noexcept { return {}; }
        void return_value(int v) { natija = v; }
        void unhandled_exception() { std::terminate(); }
    };

    std::coroutine_handle<promise_type> h;

    ~Vazifa() {
        if (h) h.destroy();
    }

    int natija() const { return h.promise().natija; }
};

Vazifa faktorial(int n) {
    int natija = 1;
    for (int i = 2; i <= n; ++i) {
        natija *= i;
    }
    co_return natija;
}

int main() {
    auto v = faktorial(5);
    std::cout << v.natija() << '\\n';
}`,
        output: `120`,
      },
      {
        type: "table",
        head: ["Kalit so'z", "Promise metodi", "Ma'nosi"],
        rows: [
          ["<code>co_await x</code>", "<code>await_ready/suspend/resume</code>", "x tayyor bo'lguncha to'xtash"],
          ["<code>co_yield x</code>", "<code>yield_value(x)</code>", "Qiymat qaytarib to'xtash"],
          ["<code>co_return x</code>", "<code>return_value(x)</code>", "Natija bilan tugash"],
          ["<code>co_return;</code>", "<code>return_void()</code>", "Natijasiz tugash"],
          ["<code>final_suspend</code>", "—", "Tugashdan keyingi to'xtash"],
        ],
      },
      {
        type: "note",
        variant: "info",
        title: "Coroutine — poydevor, tayyor yechim emas",
        html: "Standart faqat mexanizmni beradi; generator, task va awaitable larni o'zingiz yoki kutubxona (cppcoro, Asio) orqali yozasiz. Coroutine holati odatda heap da saqlanadi, lekin kompilyator allokatsiyani yo'qotishi (HALO) mumkin. <code>co_await</code> ni to'g'ri yozish uchun <code>await_ready</code>, <code>await_suspend</code>, <code>await_resume</code> uchligini tushunish kerak.",
      },
    ],
    quiz: [
      {
        q: "co_yield ifodasi qanday ishlaydi?",
        options: [
          "Funksiyani butunlay tugatadi",
          "promise_type::yield_value ni chaqirib, coroutine ni to'xtatadi",
          "Yangi oqim yaratadi",
          "Faqat co_return bilan ishlaydi"
        ],
        answer: 1,
        explain: "co_yield qiymatni yield_value ga uzatadi, coroutine to'xtaydi va keyin resume bilan davom etadi.",
      },
      {
        q: "Coroutine holati odatda qayerda saqlanadi?",
        options: [
          "Faqat stackda",
          "Odatda heap da (allocatsiya optimizatsiya qilinishi mumkin)",
          "Faqat registrda",
          "Fayl tizimida"
        ],
        answer: 1,
        explain: "Coroutine frame odatda dinamik ajratiladi; HALO optimizatsiyasi ba'zi hollarda allokatsiyani olib tashlaydi.",
      },
      {
        q: "co_return 42; qaysi promise metodini chaqiradi?",
        options: [
          "return_void()",
          "yield_value(42)",
          "return_value(42)",
          "await_resume(42)"
        ],
        answer: 2,
        explain: "Qiymatli co_return return_value ga, qiymatsiz co_return esa return_void ga mos keladi.",
      },
    ],
  },
];
