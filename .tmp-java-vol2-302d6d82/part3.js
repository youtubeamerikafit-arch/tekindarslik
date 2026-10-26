module.exports = [
  {
    id: 66,
    title: "Structured concurrency: vazifalar daraxti",
    minutes: 17,
    desc: "Bog'liq vazifalarni bir doirada boshqarish, bekor qilish va xatoni tarqatish.",
    blocks: [
      {
        type: "p",
        text: `Bir so'rov ichida bir nechta parallel chaqiruv bo'lsa, ularning hayoti ota vazifaga bog'liq bo'lishi kerak. <b>Structured concurrency</b> shu g'oyani beradi: barcha bola vazifalar ota scope tugaguncha yakunlanadi, xato bo'lsa qolganlari bekor qilinadi. Natijada threadlar tasodifan osilib qolmaydi.`,
      },
      {
        type: "h",
        text: "Ikki chaqiruvni parallel bajarish",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Struktura {
    public static void main(String[] args) throws Exception {
        try (ExecutorService ex = Executors.newFixedThreadPool(2)) {
            Callable<Object> profil = () -> "profil";
            Callable<Object> hisob = () -> 42;
            var natijalar = ex.invokeAll(List.of(profil, hisob));
            System.out.println(natijalar.get(0).get() + " / " + natijalar.get(1).get());
        }
    }
}`,
        output: "profil / 42",
      },
      {
        type: "p",
        text: `Bu yerda <code>try-with-resources</code> scope vazifasini bajaradi: blokdan chiqishda executor yopiladi va barcha vazifalar tugashini kutadi. Structured concurrency ning asosiy qoidalari: bolalar ota tugagach qolmaydi, bekor qilish pastga tarqaladi, xato yuqoriga ko'tariladi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.concurrent.CompletableFuture;

public class FailFast {
    public static void main(String[] args) {
        CompletableFuture<String> a = CompletableFuture.completedFuture("ok");
        CompletableFuture<String> b = CompletableFuture.failedFuture(
            new IllegalStateException("hisob"));

        CompletableFuture.allOf(a, b).handle((v, e) -> {
            System.out.println("xato: " + e.getCause().getMessage());
            return null;
        }).join();
    }
}`,
        output: "xato: hisob",
      },
      {
        type: "table",
        headers: ["Siyosat", "Xatti-harakat", "Qachon"],
        rows: [
          ["ShutdownOnFailure", "Bitta xato bo'lsa barchasini bekor qiladi", "Barcha natijalar shart"],
          ["ShutdownOnSuccess", "Birinchi muvaffaqiyat qolganini bekor qiladi", "Bir nechta manbadan javob"],
          ["Oddiy scope", "Xatoni qo'lda boshqarish", "Maxsus retry yoki fallback"],
        ],
      },
      {
        type: "note",
        text: `Java 21 da <code>StructuredTaskScope</code> preview holatida, keyingi versiyalarda ham API o'zgargan. Preview API'larni faqat <code>--enable-preview</code> bilan kompilyatsiya qilish mumkin. Ishlab chiqarishda mavjud JDK versiyasining rasmiy holatini tekshiring; g'oyani ExecutorService va invokeAll bilan ham qo'llash mumkin.`,
      },
    ],
    quiz: [
      {
        q: "Structured concurrency da ota scope tugaganda bola vazifalar bilan nima bo'ladi?",
        options: [
          "Ular fonda davom etadi",
          "Ularning natijasi unutiladi",
          "Scope ularning yakunlanishini kutadi yoki bekor qiladi",
          "Ular avtomatik boshqa scope'ga ko'chadi",
        ],
        answer: 2,
        explanation:
          "Scope bolalar hayotini qamrab oladi: chiqishdan oldin ular tugaydi yoki bekor qilinadi. Bu thread sizib ketishining oldini oladi.",
      },
      {
        q: "ShutdownOnFailure siyosati qanday ishlaydi?",
        options: [
          "Bitta bola xato bersa, qolgan bolalarni bekor qiladi",
          "Faqat birinchi muvaffaqiyatli natijani qoldiradi",
          "Xatolarni butunlay e'tiborsiz qoldiradi",
          "Har bir bolani ketma-ket bajaradi",
        ],
        answer: 0,
        explanation:
          "Fail-fast siyosat: birinchi xato butun scope uchun muhim, shuning uchun qolgan ishlar bekor qilinadi va xato ota vazifaga uzatiladi.",
      },
      {
        q: "StructuredTaskScope Java 21 da qanday holatda?",
        options: [
          "Butunlay olib tashlangan",
          "Faqat Kotlin'da mavjud",
          "Standart va barqaror",
          "Preview API",
        ],
        answer: 3,
        explanation:
          "Java 21 da StructuredTaskScope preview bo'lgan. Keyingi relizlarda API rivojlanib bordi, shuning uchun versiyani tekshirish muhim.",
      },
    ],
  },
  {
    id: 67,
    title: "ScopedValue va ThreadLocal muqobili",
    minutes: 16,
    desc: "Kontekstni cheklangan doirada uzatish va thread hovuzlaridagi sizishlarning oldini olish.",
    blocks: [
      {
        type: "p",
        text: `<code>ThreadLocal</code> har bir threadga alohida qiymat beradi, lekin hovuzdagi thread qayta ishlatilganda qiymat qolib ketishi mumkin. Bundan tashqari, u o'zgaruvchan va cheksiz yashaydi. <code>ScopedValue</code> esa <b>o'zgarmas</b> kontekstni faqat belgilangan blok ichida beradi.`,
      },
      {
        type: "h",
        text: "Cheklangan kontekst",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Kontekst {
    static final ScopedValue<String> FOYDALANUVCHI = ScopedValue.newInstance();

    public static void main(String[] args) {
        ScopedValue.where(FOYDALANUVCHI, "aziza").run(() -> {
            System.out.println("foydalanuvchi: " + FOYDALANUVCHI.get());
        });
        System.out.println("tashqarida: " + FOYDALANUVCHI.isBound());
    }
}`,
        output: "foydalanuvchi: aziza\ntashqarida: false",
      },
      {
        type: "p",
        text: `Qiymat blok tugagach avtomatik yo'qoladi, <code>remove()</code> chaqirish shart emas. Ichma-ich <code>where</code> bilan vaqtincha boshqa qiymat berish mumkin, lekin mavjud qiymatni o'zgartirib bo'lmaydi. Bu xavfsizlikni oshiradi: kod tasodifan global kontekstni buzmang.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Tl {
    public static void main(String[] args) throws Exception {
        ThreadLocal<String> tl = new ThreadLocal<>();
        tl.set("asosiy");

        Thread t = new Thread(() -> System.out.println("bola: " + tl.get()));
        t.start();
        t.join();

        System.out.println("ota: " + tl.get());
        tl.remove();
        System.out.println("tozalandi: " + (tl.get() == null));
    }
}`,
        output: "bola: null\nota: asosiy\ntozalandi: true",
      },
      {
        type: "table",
        headers: ["Mezon", "ThreadLocal", "ScopedValue"],
        rows: [
          ["O'zgaruvchanlik", "set bilan o'zgaradi", "Faqat bind, o'zgarmas"],
          ["Yashash muddati", "remove gacha", "Blok tugaguncha"],
          ["Bola threadga meros", "inheritThreadLocals bilan", "Scope ichida ko'rinadi"],
          ["Xotira sizishi", "Hovuzda ehtiyot kerak", "Blok bilan cheklangan"],
        ],
      },
      {
        type: "note",
        text: `ScopedValue ham Java 21 da preview. Uni mutable holat uchun ishlatmang: bu kontekst uzatish vositasi, kesh yoki hisoblagich emas. Virtual threadlar bilan birga ishlatilganda an'anaviy ThreadLocal'ga qaraganda ancha bashoratli bo'ladi.`,
      },
    ],
    quiz: [
      {
        q: "ScopedValue ning ThreadLocal dan asosiy farqi nimada?",
        options: [
          "U faqat string saqlaydi",
          "U o'zgarmas va faqat scope ichida amal qiladi",
          "U har bir threadga yangi JVM yaratadi",
          "U remove() talab qiladi",
        ],
        answer: 1,
        explanation:
          "ScopedValue qiymati bind qilingan blok ichida ko'rinadi va blok tugagach yo'qoladi. Uni keyin o'zgartirib bo'lmaydi.",
      },
      {
        q: "ThreadLocal hovuzdagi threadlarda qanday xavf tug'diradi?",
        options: [
          "Qiymat avtomatik GC bo'ladi",
          "Thread nomi o'zgaradi",
          "Boshqa so'rov oldingi so'rov qiymatini ko'rishi mumkin",
          "ThreadLocal har doim xato beradi",
        ],
        answer: 2,
        explanation:
          "Thread qayta ishlatilganda eski qiymat qolishi mumkin. Shuning uchun ishlatgandan keyin remove() chaqirish kerak.",
      },
      {
        q: "ScopedValue ni qanday faollashtirish mumkin?",
        options: [
          "where(...).run(...) yoki call(...) bilan",
          "Faqat static blokda",
          "Faqat Thread.start() bilan",
          "Faqat System.setProperty bilan",
        ],
        answer: 0,
        explanation:
          "ScopedValue.where(key, value) Carrier yaratadi; run yoki call shu bog'lanish doirasida kodni bajaradi.",
      },
    ],
  },
  {
    id: 68,
    title: "Flow API va backpressure",
    minutes: 17,
    desc: "Reaktiv oqimlar, talab (demand) va sekin iste'molchini boshqarish.",
    blocks: [
      {
        type: "p",
        text: `Reaktiv oqimda publisher ma'lumot ishlab chiqaradi, subscriber esa uni qabul qiladi. Eng muhim tushuncha — <b>backpressure</b>: subscriber qancha element tayyor ekanini <code>request(n)</code> bilan aytadi. Publisher talabdan ortiq yubormasligi kerak.`,
      },
      {
        type: "h",
        text: "Flow API bilan oddiy oqim",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.concurrent.CountDownLatch;
import java.util.concurrent.Flow;
import java.util.concurrent.SubmissionPublisher;

public class Oqim {
    public static void main(String[] args) throws Exception {
        SubmissionPublisher<Integer> pub = new SubmissionPublisher<>();
        CountDownLatch tugadi = new CountDownLatch(1);

        pub.subscribe(new Flow.Subscriber<>() {
            public void onSubscribe(Flow.Subscription s) {
                s.request(3);
            }

            public void onNext(Integer x) {
                System.out.println("oldi: " + x);
            }

            public void onError(Throwable t) {
                tugadi.countDown();
            }

            public void onComplete() {
                System.out.println("tugadi");
                tugadi.countDown();
            }
        });

        pub.submit(1);
        pub.submit(2);
        pub.submit(3);
        pub.close();
        tugadi.await();
    }
}`,
        output: "oldi: 1\noldi: 2\noldi: 3\ntugadi",
      },
      {
        type: "p",
        text: `Subscriber uchta elementga ruxsat so'radi, publisher ham uchta yuboradi. Agar u <code>request(1)</code> qilsa, qolgan elementlar navbatda kutadi. Bu oddiy navbatdan farqi: sekin iste'molchi xotirani cheksiz to'ldirib yubormaydi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.List;

public class Bosim {
    public static void main(String[] args) {
        List<Integer> bufer = List.of(10, 20, 30);
        int talab = 2;
        int yuborilgan = 0;

        for (int x : bufer) {
            if (yuborilgan < talab) {
                System.out.println("yuborildi: " + x);
                yuborilgan++;
            } else {
                System.out.println("buferda: " + x);
            }
        }
        System.out.println("talab: " + talab + ", qoldi: " + (bufer.size() - yuborilgan));
    }
}`,
        output:
          "yuborildi: 10\nyuborildi: 20\nbuferda: 30\ntalab: 2, qoldi: 1",
      },
      {
        type: "table",
        headers: ["Komponent", "Rol", "Muhim metod"],
        rows: [
          ["Publisher", "Element ishlab chiqaradi", "subscribe"],
          ["Subscriber", "Elementlarni qabul qiladi", "onNext, onComplete"],
          ["Subscription", "Talabni boshqaradi", "request, cancel"],
          ["Processor", "O'rtada transformatsiya", "onNext + subscribe"],
        ],
      },
      {
        type: "note",
        text: `Reaktiv oqim har doim tezroq degani emas; u oqimni boshqarish uchun model. <code>onNext</code> ichida bloklovchi IO qilmang, aks holda butun oqim sekinlashadi. Reactor va RxJava Flow API g'oyasini operatorlar bilan boyitadi.`,
      },
    ],
    quiz: [
      {
        q: "Reaktiv oqimda request(n) nimani bildiradi?",
        options: [
          "Publisher n ta yangi thread yaratadi",
          "Subscriber n ta element qabul qilishga tayyor",
          "n ta subscriber qo'shiladi",
          "Oqim n marta takrorlanadi",
        ],
        answer: 1,
        explanation:
          "request(n) demand signali: subscriber hozircha n ta elementga tayyor. Publisher shu chegaradan oshmasligi kerak.",
      },
      {
        q: "Backpressure ning maqsadi nima?",
        options: [
          "Har bir elementni ikki marta yuborish",
          "Publisher tezligini butunlay o'chirish",
          "Sekin iste'molchini tez ishlab chiqaruvchidan himoya qilish",
          "Xotirani cheksiz ko'paytirish",
        ],
        answer: 2,
        explanation:
          "Backpressure ishlab chiqarish tezligini iste'mol qilish qobiliyatiga moslaydi va buferning cheksiz o'sishini oldini oladi.",
      },
      {
        q: "Flow.Subscriber.onNext ichida uzoq bloklovchi IO qilish nima uchun yomon?",
        options: [
          "Chunki onNext faqat bir marta chaqiriladi",
          "Chunki u butun oqimni va boshqa signallarni sekinlashtiradi",
          "Chunki u kompilyatsiya xatosini beradi",
          "Chunki u backpressureni avtomatik yoqadi",
        ],
        answer: 1,
        explanation:
          "onNext odatda bitta mantiqiy oqimda bajariladi. Uzoq bloklash keyingi elementlar va onComplete ni kechiktiradi.",
      },
    ],
  },
  {
    id: 69,
    title: "JPMS: modul tizimi va jlink",
    minutes: 17,
    desc: "module-info, requires, exports, opens va minimal runtime yaratish.",
    blocks: [
      {
        type: "p",
        text: `Java 9 bilan <b>Java Platform Module System</b> keldi. Modul — nomlangan, chegaralangan kod birligi. <code>module-info.java</code> faylida modul nimaga bog'liqligini va nimani tashqariga ochishini e'lon qiladi. Bu classpath muammolarini kamaytiradi va inkapsulyatsiyani kuchaytiradi.`,
      },
      {
        type: "h",
        text: "Modul ichidagi kod",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Modul {
    public static void main(String[] args) {
        Module m = Modul.class.getModule();
        System.out.println("nom: " + m.getName());
        System.out.println("named: " + m.isNamed());
        System.out.println("exports: " + m.getDescriptor().exports().size());
    }
}`,
        output: "nom: uz.noldan.app\nnamed: true\nexports: 1",
      },
      {
        type: "p",
        text: `Bu klass <code>uz.noldan.app</code> moduli ichida ishga tushirilganda modul nomi va e'lon qilingan exportlar sonini ko'rsatadi. Classpath'da ishga tushirilsa, u <b>unnamed module</b> bo'ladi va natija boshqacha chiqadi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`module uz.noldan.app {
    requires java.logging;
    exports uz.noldan.app;
    opens uz.noldan.app.model to java.desktop;
}`,
        output: "modul: uz.noldan.app",
      },
      {
        type: "table",
        headers: ["Direktiva", "Ma'nosi", "Ehtiyot qismi"],
        rows: [
          ["requires", "Boshqa modulga bog'liqlik", "transitive bilan uzatish"],
          ["exports", "Paketni compile/runtime ochish", "Faqat API paketlar"],
          ["opens", "Reflection uchun ochish", "Framewoklar uchun kerak"],
          ["uses / provides", "ServiceLoader integratsiyasi", "SPI bilan ishlash"],
        ],
      },
      {
        type: "note",
        text: `<code>jlink --add-modules uz.noldan.app --output runtime</code> faqat kerakli modullardan kichik JRE yaratadi. <code>jdeps</code> bog'liqliklarni tahlil qiladi. Modul tizimiga o'tish katta eski loyihada bosqichma-bosqich amalga oshiriladi: avval classpath, keyin automatic module, oxirida to'liq modul.`,
      },
    ],
    quiz: [
      {
        q: "exports va opens orasidagi farq nima?",
        options: [
          "exports compile va runtime uchun ochadi, opens reflection uchun",
          "opens faqat testlar uchun",
          "exports faqat native metodlar uchun",
          "Farqi yo'q",
        ],
        answer: 0,
        explanation:
          "exports paketning public turlarini kompilyatsiya va ishlashda ochadi. opens esa chuqur reflection uchun ruxsat beradi.",
      },
      {
        q: "requires transitive nimani bildiradi?",
        options: [
          "Modul faqat testlarda kerak",
          "Bog'liqlik uzatilmaydi",
          "Modul butunlay yopiladi",
          "Modulga bog'liq boshqa modullar ham shu bog'liqlikni oladi",
        ],
        answer: 3,
        explanation:
          "transitive bog'liqlik API orqali tashqariga chiqadi: modulni requires qilgan boshqa modul ham uni o'qiy oladi.",
      },
      {
        q: "Classpath'da ishga tushirilgan oddiy ilova qaysi modulga tegishli?",
        options: [
          "java.base",
          "Unnamed module",
          "java.sql",
          "Har bir paket alohida modul",
        ],
        answer: 1,
        explanation:
          "Classpath'dagi kod unnamed module ichida bo'ladi. U barcha ochiq paketlarni o'qiy oladi, lekin o'z paketlarini modul sifatida eksport qilmaydi.",
      },
    ],
  },
  {
    id: 70,
    title: "Text blocklar va var bilan ifodali kod",
    minutes: 14,
    desc: "Ko'p qatorli matnlar, incidental whitespace va lokal tur inferensiyasi.",
    blocks: [
      {
        type: "p",
        text: `Ko'p qatorli JSON, SQL yoki HTML ni oddiy string ichida yozish o'qishni qiyinlashtiradi. <b>Text block</b> uchta qo'shtirnoq bilan boshlanadi va ichidagi qatorlarni tabiiy saqlaydi. <b>var</b> esa lokal o'zgaruvchi turini kompilyatorga aniqlash imkonini beradi.`,
      },
      {
        type: "h",
        text: "JSON ni tabiiy ko'rinishda yozish",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class Matn {
    public static void main(String[] args) {
        String json = """
                {
                  "ism": "Aziza",
                  "yosh": 16
                }""";
        System.out.println(json);
        System.out.println("qatorlar: " + json.lines().count());
    }
}`,
        output:
          "{\n  \"ism\": \"Aziza\",\n  \"yosh\": 16\n}\nqatorlar: 4",
      },
      {
        type: "p",
        text: `Text block ichidagi umumiy bo'sh joy <b>incidental whitespace</b> hisoblanadi va olib tashlanadi. Yopuvchi <code>"""</code> qator oxirida bo'lsa, oxirgi newline stringga qo'shilmaydi. Agar matn ichida <code>"""</code> uchrasa, uni escape qilish kerak.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`public class VarDemo {
    public static void main(String[] args) {
        var narx = 12000;
        var soni = 3;
        var jami = narx * soni;
        var matn = "Jami: %d so'm".formatted(jami);

        System.out.println(matn);
        System.out.println("tur: " + ((Object) jami).getClass().getSimpleName());
    }
}`,
        output: "Jami: 36000 so'm\ntur: Integer",
      },
      {
        type: "table",
        headers: ["Joy", "var mumkinmi", "Izoh"],
        rows: [
          ["Lokal o'zgaruvchi", "Ha", "Initializer shart"],
          ["Metod parametri", "Yo'q", "Tur aniq yoziladi"],
          ["Maydon", "Yo'q", "Klass API turi aniq bo'lishi kerak"],
          ["Lambda parametri", "Yo'q", "Kontekstdan aniqlanadi"],
        ],
      },
      {
        type: "note",
        text: `<code>var</code> dinamik til emas: tur compile vaqtida qat'iy aniqlanadi. Uni faqat o'ng tomondagi ifoda turi aniq bo'lganda ishlating. <code>var x = null</code> kompilyatsiya xatosi beradi, chunki tur aniqlanmaydi.`,
      },
    ],
    quiz: [
      {
        q: "Text blockda incidental whitespace nima?",
        options: [
          "String oxiridagi bo'shliq",
          "Har bir qator boshidagi umumiy chekinish",
          "Faqat tab belgilari",
          "Faqat kommentariyalar",
        ],
        answer: 1,
        explanation:
          "Text block barcha qatorlar uchun umumiy minimal chekinishni olib tashlaydi, shuning uchun kod ichidagi matn chiroyli qoladi.",
      },
      {
        q: "var qayerda ishlatilishi mumkin?",
        options: [
          "Klass maydoni sifatida",
          "Metod parametri sifatida",
          "Lokal o'zgaruvchi sifatida, initializer bilan",
          "Interfeys konstantasi sifatida",
        ],
        answer: 2,
        explanation:
          "var faqat lokal o'zgaruvchilarda, initializer mavjud bo'lganda ishlaydi. Maydon va parametrlar uchun aniq tur yoziladi.",
      },
      {
        q: "var x = null yozilsa nima bo'ladi?",
        options: [
          "x Object bo'ladi",
          "Kompilyatsiya xatosi beradi",
          "Runtime da null bo'ladi",
          "x avtomatik String bo'ladi",
        ],
        answer: 1,
        explanation:
          "null hech qanday aniq turni bermaydi, shuning uchun kompilyator var uchun turni aniqlay olmaydi.",
      },
    ],
  },
  {
    id: 71,
    title: "Recordlar amalda: invariant va himoyalangan nusxa",
    minutes: 16,
    desc: "Compact constructor, validatsiya, immutable ro'yxatlar va record semantikasi.",
    blocks: [
      {
        type: "p",
        text: `Record qiymat obyektlarini qisqa yozish uchun mo'ljallangan: maydonlar, konstruktor, accessor, <code>equals</code>, <code>hashCode</code> va <code>toString</code> avtomatik yaratiladi. Lekin record avtomatik <b>chuqur immutable</b> bo'lmaydi: ichidagi massiv yoki mutable ro'yxat o'zgarishi mumkin.`,
      },
      {
        type: "h",
        text: "Compact constructor bilan himoya",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.ArrayList;
import java.util.List;

record Buyurtma(String mijoz, List<String> qatorlar) {
    Buyurtma {
        if (qatorlar.isEmpty()) {
            throw new IllegalArgumentException("bo'sh");
        }
        qatorlar = List.copyOf(qatorlar);
    }
}

public class Main {
    public static void main(String[] args) {
        var b = new Buyurtma("Aziza", new ArrayList<>(List.of("java")));
        try {
            b.qatorlar().add("x");
        } catch (UnsupportedOperationException e) {
            System.out.println("o'zgarmas ro'yxat");
        }
        System.out.println(b);
    }
}`,
        output: "o'zgarmas ro'yxat\nBuyurtma[mijoz=Aziza, qatorlar=[java]]",
      },
      {
        type: "p",
        text: `Compact constructorda parametrga qayta qiymat berish maydonga yoziladigan qiymatni o'zgartiradi. <code>List.copyOf</code> himoyalangan, o'zgarmas nusxa yaratadi. Shunday qilib tashqi kod record ichidagi ro'yxatni o'zgartira olmaydi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`record Nuqta(int x, int y) {
}

public class Teng {
    public static void main(String[] args) {
        var a = new Nuqta(1, 2);
        var b = new Nuqta(1, 2);

        System.out.println("equals: " + a.equals(b));
        System.out.println("hash bir xil: " + (a.hashCode() == b.hashCode()));
        System.out.println("== : " + (a == b));
    }
}`,
        output: "equals: true\nhash bir xil: true\n== : false",
      },
      {
        type: "table",
        headers: ["Xususiyat", "Record", "Oddiy class"],
        rows: [
          ["Meros olish", "Classdan olmaydi", "Mumkin"],
          ["Maydonlar", "final, komponentlar", "Erkin"],
          ["equals/hashCode", "Avtomatik", "Qo'lda yoki Lombok"],
          ["Accessor", "komponent nomi bilan", "getX() uslubi"],
        ],
      },
      {
        type: "note",
        text: `Record ichidagi massivni himoya qilish uchun konstruktorda <code>clone()</code> qiling va accessorda yana clone qaytaring. Recordlar interfeyslarni implement qilishi va static metodlarga ega bo'lishi mumkin. Ular DTO va value object uchun juda qulay, lekin JPA entity o'rnini bosmaydi.`,
      },
    ],
    quiz: [
      {
        q: "Compact constructor nima uchun ishlatiladi?",
        options: [
          "Maydonlarni validatsiya qilish va himoyalangan nusxa yaratish uchun",
          "Recordni abstract qilish uchun",
          "Yangi thread yaratish uchun",
          "Faqat toString ni o'zgartirish uchun",
        ],
        answer: 0,
        explanation:
          "Compact constructor parametrlarni tekshirish va tashqi mutable obyektlardan himoyalangan nusxa olish uchun qulay.",
      },
      {
        q: "Record komponenti List bo'lsa, u avtomatik immutable bo'ladimi?",
        options: [
          "Ha, record hamma narsani muzlatadi",
          "Ha, lekin faqat ArrayList uchun",
          "Yo'q, ro'yxatning o'zi mutable bo'lishi mumkin",
          "Faqat Java 17 da ha",
        ],
        answer: 2,
        explanation:
          "Record faqat havolani final qiladi. Ichidagi kolleksiya mutable bo'lsa, uning tarkibi o'zgarishi mumkin, shuning uchun List.copyOf kerak.",
      },
      {
        q: "Bir xil komponentli ikki record obyekti uchun == va equals qanday natija beradi?",
        options: [
          "Ikkalasi ham true",
          "== true, equals false",
          "Ikkalasi ham false",
          "== false, equals true",
        ],
        answer: 3,
        explanation:
          "Record equals komponent qiymatlarini solishtiradi, shuning uchun true. == esa havolalarni solishtiradi va alohida obyektlar uchun false.",
      },
    ],
  },
  {
    id: 72,
    title: "Sealed ierarxiya va pattern matching",
    minutes: 17,
    desc: "Cheklangan meros, exhaustive switch va record patternlar bilan domen modellashtirish.",
    blocks: [
      {
        type: "p",
        text: `<code>sealed</code> interfeys yoki klass vorislarini aniq ro'yxat bilan cheklaydi. Bu domen modelini yopiq qiladi va kompilyatorga <b>exhaustive</b> switch yozish imkonini beradi. Yangi tur qo'shilsa, eski switch kompilyatsiya xatosi beradi va uni yangilashga majbur qiladi.`,
      },
      {
        type: "h",
        text: "To'lov turlari",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`sealed interface Tolov permits Naqd, Karta {
}

record Naqd(int sum) implements Tolov {
}

record Karta(int sum, String raqam) implements Tolov {
}

public class Main {
    static String tavsif(Tolov t) {
        return switch (t) {
            case Naqd n -> "naqd: " + n.sum();
            case Karta k -> "karta: " + k.sum();
        };
    }

    public static void main(String[] args) {
        System.out.println(tavsif(new Naqd(5000)));
        System.out.println(tavsif(new Karta(12000, "8600")));
    }
}`,
        output: "naqd: 5000\nkarta: 12000",
      },
      {
        type: "p",
        text: `Switch <code>default</code> siz ham to'liq, chunki barcha ruxsat etilgan turlar sanab o'tilgan. Bu xavfsizlikni oshiradi: yangi <code>Uzum</code> turi qo'shilsa, kompilyator qaysi joylarni yangilash kerakligini ko'rsatadi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`sealed interface Shakl permits Doira, Kvadrat {
}

record Doira(double r) implements Shakl {
}

record Kvadrat(double tomon) implements Shakl {
}

public class Yuza {
    static double yuza(Shakl s) {
        return switch (s) {
            case Doira(var r) -> 3.14 * r * r;
            case Kvadrat(var t) -> t * t;
        };
    }

    public static void main(String[] args) {
        System.out.println(yuza(new Doira(2)));
        System.out.println(yuza(new Kvadrat(3)));
    }
}`,
        output: "12.56\n9.0",
      },
      {
        type: "table",
        headers: ["Modifikator", "Vorislar", "Qo'shimcha"],
        rows: [
          ["sealed", "Faqat permits ro'yxati", "Ochiq yoki yopiq bo'lishi mumkin"],
          ["final", "Voris yo'q", "Eng qat'iy"],
          ["non-sealed", "Cheklovsiz", "Ochiq ierarxiyaga qaytish"],
          ["record", "Final", "Pattern bilan qulay"],
        ],
      },
      {
        type: "note",
        text: `Sealed ierarxiya API dizaynida kuchli vosita, lekin u har joyda kerak emas. Uchdan beshtagacha aniq variant bo'lsa juda foydali; kelajakda kengaytiriladigan plugin tizimi uchun esa oddiy interfeys mosroq. Guard bilan shart qo'shish mumkin: <code>case Naqd n when n.sum() &gt; 0</code>.`,
      },
    ],
    quiz: [
      {
        q: "sealed interfeysda vorislar qanday aniqlanadi?",
        options: [
          "permits ro'yxati bilan",
          "Faqat final kalit so'zi bilan",
          "Avtomatik barcha klasslar bilan",
          "faqat package-private bilan",
        ],
        answer: 0,
        explanation:
          "sealed interfeys permits bilan ruxsat etilgan vorislarni sanaydi. Ular final, sealed yoki non-sealed bo'lishi kerak.",
      },
      {
        q: "Sealed ierarxiyada default siz switch nima uchun kompilyatsiya bo'ladi?",
        options: [
          "Chunki switch defaultni avtomatik qo'shadi",
          "Chunki barcha mumkin bo'lgan turlar qamrab olingan",
          "Chunki sealed switchni o'chirib qo'yadi",
          "Chunki recordlar defaultni talab qiladi",
        ],
        answer: 1,
        explanation:
          "Kompilyator ruxsat etilgan barcha variantlarni biladi. Ular to'liq sanab o'tilsa, switch exhaustive hisoblanadi.",
      },
      {
        q: "Record pattern nima beradi?",
        options: [
          "Recordni avtomatik serializatsiya qiladi",
          "Record maydonlarini reflection bilan o'chiradi",
          "Komponentlarni bir qadamda ajratib olish imkonini",
          "Recordni abstract klassga aylantiradi",
        ],
        answer: 2,
        explanation:
          "case Doira(var r) kabi pattern record komponentlarini ochib beradi, kodni qisqartiradi va tur xavfsizligini saqlaydi.",
      },
    ],
  },
  {
    id: 73,
    title: "SequencedCollection va yangi yordamchi APIlar",
    minutes: 15,
    desc: "Java 21 kolleksiya interfeyslari, RandomGenerator va HexFormat.",
    blocks: [
      {
        type: "p",
        text: `Java 21 da kolleksiyalar uchun yagona <b>SequencedCollection</b> interfeysi paydo bo'ldi. Endi <code>List</code>, <code>Deque</code> va <code>LinkedHashSet</code> kabi tuzilmalar bir xil <code>addFirst</code>, <code>addLast</code>, <code>getFirst</code>, <code>reversed</code> API'lariga ega.`,
      },
      {
        type: "h",
        text: "Ro'yxatning ikki uchi",
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.ArrayList;
import java.util.List;

public class Tartib {
    public static void main(String[] args) {
        List<String> tillar = new ArrayList<>(List.of("java", "kotlin", "sql"));
        tillar.addFirst("c");
        tillar.addLast("go");

        System.out.println(tillar);
        System.out.println(tillar.reversed());
        System.out.println(tillar.getFirst() + " / " + tillar.getLast());
    }
}`,
        output:
          "[c, java, kotlin, sql, go]\n[go, sql, kotlin, java, c]\nc / go",
      },
      {
        type: "p",
        text: `<code>reversed()</code> nusxa emas, <b>ko'rinish</b> qaytaradi. Asl ro'yxat o'zgarsa, ko'rinish ham o'zgaradi. <code>SequencedMap</code> esa <code>putFirst</code>, <code>putLast</code>, <code>firstEntry</code> va <code>reversed</code> beradi.`,
      },
      {
        type: "code",
        lang: "java",
        code: String.raw`import java.util.HexFormat;
import java.util.random.RandomGenerator;

public class Yangi {
    public static void main(String[] args) {
        var random = RandomGenerator.getDefault();
        System.out.println("oraliqda: " + (random.nextInt(1, 7) >= 1));

        byte[] baytlar = {10, 15, (byte) 255};
        String hex = HexFormat.of().formatHex(baytlar);
        System.out.println(hex);
        System.out.println(hex.length());
    }
}`,
        output: "oraliqda: true\n0a0fff\n6",
      },
      {
        type: "table",
        headers: ["API", "Foydasi", "Misol"],
        rows: [
          ["SequencedCollection", "Bosh/oxir amallari", "addFirst, reversed"],
          ["SequencedMap", "Tartibli map", "putFirst, firstEntry"],
          ["RandomGenerator", "Algoritmni almashtirish", "getDefault, of"],
          ["HexFormat", "Baytlarni hex ga aylantirish", "formatHex, parseHex"],
        ],
      },
      {
        type: "note",
        text: `SequencedCollection thread-safe degani emas. <code>Collections.synchronizedList</code> yoki concurrent kolleksiya baribir kerak. <code>reversed()</code> ko'rinishini o'zgartirish asl kolleksiyaga ta'sir qiladi, shuning uchun chegaralarni yaxshilab tekshiring.`,
      },
    ],
    quiz: [
      {
        q: "Java 21 da List.addFirst() qanday ishlaydi?",
        options: [
          "Faqat LinkedList da mavjud",
          "List interfeysining default metodi sifatida mavjud",
          "Faqat immutable ro'yxatlarda ishlaydi",
          "U har doim istisno tashlaydi",
        ],
        answer: 1,
        explanation:
          "List SequencedCollection dan default addFirst/addLast oladi. Mutable implementatsiyalar buni qo'llab-quvvatlaydi; immutable ro'yxatlar istisno beradi.",
      },
      {
        q: "reversed() qaytargan natija qanday?",
        options: [
          "Har doim yangi mustaqil nusxa",
          "Asl kolleksiyaning ko'rinishi",
          "Faqat bo'sh ro'yxat",
          "Map ga aylantirilgan obyekt",
        ],
        answer: 1,
        explanation:
          "reversed odatda ko'rinish qaytaradi. Asl kolleksiyadagi o'zgarishlar ko'rinishda ham ko'rinadi.",
      },
      {
        q: "HexFormat.of().formatHex(new byte[]{10, 15}) qanday natija beradi?",
        options: ["0A0F", "0a0fff", "0a0f", "10 15"],
        answer: 2,
        explanation:
          "formatHex kichik harfli hex beradi va har bir baytni ikki belgi bilan yozadi: 0a0f.",
      },
    ],
  },
];
