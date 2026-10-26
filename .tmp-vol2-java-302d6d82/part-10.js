{
  id: 95,
  title: "Arxitektura, SOLID va microservices asoslari",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "Kod to'g'ri ishlashi yetarli emas — u <b>o'zgarishga chidamli</b> bo'lishi kerak. SOLID tamoyillari sinflarni mas'uliyat, kengaytirish va bog'liqlik bo'yicha tartibga soladi. Arxitektura darajasida monolit, modulli monolit va microservices tanlovi biznes talablariga bog'liq: microservices mustaqil deploy beradi, lekin tarmoq, kuzatuv va ma'lumotlar izchilligi narxini oshiradi.",
    },
    {
      type: "code",
      title: "Strategiya.java",
      code: `enum Chegirma {
    YOZGI(10), QISHKI(15), VIP(25);

    final int foiz;

    Chegirma(int foiz) {
        this.foiz = foiz;
    }

    int qolla(int narx) {
        return narx - narx * foiz / 100;
    }
}

public class Strategiya {
    public static void main(String[] args) {
        int narx = 200_000;
        for (Chegirma chegirma : Chegirma.values()) {
            System.out.println(chegirma + ": " + chegirma.qolla(narx));
        }
    }
}`,
      output: "YOZGI: 180000\nQISHKI: 170000\nVIP: 150000",
    },
    {
      type: "note",
      variant: "info",
      title: "SOLID qisqacha",
      html: "<b>S</b> — bitta mas'uliyat; <b>O</b> — kengaytirishga ochiq, o'zgartirishga yopiq; <b>L</b> — Liskov almashtirish; <b>I</b> — interfeyslarni ajratish; <b>D</b> — bog'liqlik inversiyasi. Strategy pattern OCP'ning amaliy ko'rinishi: yangi chegirma qo'shish uchun mavjud kodni o'zgartirmaysiz.",
    },
    {
      type: "code",
      title: "Portlar.java",
      code: `import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.ArrayList;
import java.util.List;

interface Saqlash {
    void saqla(String yozuv);

    int soni();
}

class XotiraSaqlash implements Saqlash {
    private final List<String> yozuvlar = new ArrayList<>();

    public void saqla(String yozuv) {
        yozuvlar.add(yozuv);
    }

    public int soni() {
        return yozuvlar.size();
    }
}

class FaylSaqlash implements Saqlash {
    private final Path fayl;

    FaylSaqlash(Path fayl) {
        this.fayl = fayl;
    }

    public void saqla(String yozuv) {
        try {
            Files.writeString(fayl, yozuv + System.lineSeparator(),
                StandardOpenOption.CREATE, StandardOpenOption.APPEND);
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    public int soni() {
        try {
            return (int) Files.lines(fayl).count();
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}

class Xizmat {
    private final Saqlash saqlash;

    Xizmat(Saqlash saqlash) {
        this.saqlash = saqlash;
    }

    void qosh(String yozuv) {
        saqlash.saqla(yozuv);
    }
}

public class Portlar {
    public static void main(String[] args) throws Exception {
        Saqlash xotira = new XotiraSaqlash();
        Xizmat xizmat = new Xizmat(xotira);
        xizmat.qosh("a");
        xizmat.qosh("b");
        System.out.println("Xotira: " + xotira.soni());

        Path fayl = Path.of("loyiha.txt");
        Saqlash faylSaqlash = new FaylSaqlash(fayl);
        Xizmat faylXizmat = new Xizmat(faylSaqlash);
        faylXizmat.qosh("a");
        faylXizmat.qosh("b");
        System.out.println("Fayl: " + faylSaqlash.soni());
        Files.deleteIfExists(fayl);
    }
}`,
      output: "Xotira: 2\nFayl: 2",
    },
    {
      type: "table",
      head: ["Uslub", "Afzalligi", "Narxi"],
      rows: [
        ["Monolit", "Oddiy deploy, tez ishlab chiqish", "Katta jamoada bog'liqlik"],
        ["Modulli monolit", "Aniq chegaralar, bitta deploy", "Intizom talab qiladi"],
        ["Microservices", "Mustaqil deploy va masshtablash", "Tarmoq, kuzatuv, data izchilligi"],
      ],
    },
    {
      type: "ul",
      items: [
        "Microservices'ni erta tanlamang: kichik jamoa va noaniq domen uchun modulli monolit tezroq.",
        "Har bir servis o'z ma'lumotlar bazasiga ega bo'lishi kerak — umumiy jadval bu chegarani buzadi.",
        "Servislararo muloqotda idempotentlik, timeout, retry va circuit breaker rejalashtiriladi.",
        "Arxitektura qarorlarini ADR (Architecture Decision Record) sifatida yozib borish foydali.",
      ],
    },
  ],
  quiz: [
    {
      q: "Single Responsibility Principle amalda nimani anglatadi?",
      options: [
        "Klassda faqat bitta metod bo'ladi",
        "Klassning o'zgarishiga bitta sabab bo'ladi",
        "Har klass final bo'ladi",
        "Faqat bitta interfeys bo'ladi",
      ],
      answer: 1,
      explain: "SRP klassning bitta mas'uliyat sohasiga ega bo'lishini bildiradi: uni o'zgartirishga faqat bitta biznes sabab bo'lishi kerak.",
    },
    {
      q: "Strategy pattern qaysi SOLID tamoyilini amalda ko'rsatadi?",
      options: [
        "Single Responsibility",
        "Open/Closed",
        "Liskov Substitution",
        "Interface Segregation",
      ],
      answer: 1,
      explain: "Yangi strategiya qo'shish mavjud kodni o'zgartirmasdan amalga oshadi — kengaytirishga ochiq, o'zgartirishga yopiq.",
    },
    {
      q: "Microservices'ning asosiy narxi nima?",
      options: [
        "Mustaqil deploy yo'qligi",
        "Tarmoq, kuzatuv va ma'lumotlar izchilligi murakkabligi",
        "Faqat bitta tilda yozish",
        "Testlashning imkonsizligi",
      ],
      answer: 1,
      explain: "Servislar mustaqil deploy qilinsa ham, ular orasidagi tarmoq xatolari, distributed tracing va eventual consistency boshqaruv talab qiladi.",
    },
  ],
},
{
  id: 96,
  title: "Docker: image, layer va compose",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "Docker ilovani <b>image</b> sifatida qadoqlaydi: JRE, kutubxonalar va kod birga. Image qatlamlardan (layer) iborat; har <code>RUN</code>, <code>COPY</code> yangi qatlam yaratadi va keshlanadi. JVM uchun <b>multi-stage</b> build eng yaxshi amaliyot: birinchi bosqichda Maven bilan quramiz, ikkinchi bosqichga faqat JRE va jar qoldiramiz. Konteyner xotirasini <code>-XX:MaxRAMPercentage</code> bilan boshqaring.",
    },
    {
      type: "code",
      title: "App.java",
      code: `public class App {
    public static void main(String[] args) {
        System.out.println("Kitobxona ishga tushdi");
        System.out.println("Port: " + System.getenv().getOrDefault("PORT", "8080"));
        System.out.println("Profil: " + System.getenv().getOrDefault("SPRING_PROFILES_ACTIVE", "prod"));
    }
}`,
      output: "Kitobxona ishga tushdi\nPort: 8080\nProfil: prod",
    },
    {
      type: "code",
      title: "Dockerfile",
      code: `FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /src
COPY pom.xml .
COPY src ./src
RUN mvn -q -DskipTests package

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
RUN addgroup -S app && adduser -S app -G app
COPY --from=build /src/target/kitobxona.jar app.jar
USER app
EXPOSE 8080
ENTRYPOINT ["java", "-XX:MaxRAMPercentage=75", "-jar", "app.jar"]`,
      output: " => exporting to image\n => => naming to docker.io/noldan/kitobxona:1.0\n => => unpacking to docker.io/noldan/kitobxona:1.0",
      outputLabel: "docker build (qisqartirilgan)",
    },
    {
      type: "note",
      variant: "tip",
      title: "Layer keshi",
      html: "<code>pom.xml</code>ni kod nusxalashdan oldin ko'chirish Maven dependency qatlamini keshlaydi: kod o'zgarganda qayta yuklab olinmaydi. <code>.dockerignore</code>ga <code>target/</code> va <code>.git/</code>ni qo'shing. Konteyner ildiz bo'lmagan <code>USER</code> bilan ishlashi xavfsizlik talabidir.",
    },
    {
      type: "code",
      title: "AppContainerTest.java",
      code: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import org.junit.jupiter.api.Test;
import org.testcontainers.containers.GenericContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;
import org.testcontainers.containers.wait.strategy.Wait;

@Testcontainers
class AppContainerTest {
    @Container
    static GenericContainer<?> app = new GenericContainer<>("noldan/kitobxona:1.0")
        .withExposedPorts(8080)
        .waitingFor(Wait.forHttp("/actuator/health").forStatusCode(200));

    @Test
    void healthIshlaydi() throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder(
            URI.create("http://localhost:" + app.getMappedPort(8080) + "/actuator/health"))
            .build();

        HttpResponse<String> response = client.send(
            request, HttpResponse.BodyHandlers.ofString());

        System.out.println("Status: " + response.statusCode());
        System.out.println("Tana: " + response.body());
    }
}`,
      output: "Status: 200\nTana: {\"status\":\"UP\"}\nTests run: 1, Failures: 0, Errors: 0, Skipped: 0",
      outputLabel: "mvn verify",
    },
    {
      type: "ul",
      items: [
        "Image — o'zgarmas shablon, konteyner — uning ishlayotgan nusxasi.",
        "Multi-stage build image hajmini kamaytiradi va build vositalarini production'dan olib tashlaydi.",
        "<code>ENTRYPOINT</code> asosiy buyruqni, <code>CMD</code> esa standart argumentlarni beradi.",
        "Compose bilan lokal muhitda app, PostgreSQL va Redis birgalikda ko'tariladi.",
      ],
    },
  ],
  quiz: [
    {
      q: "Docker multi-stage build'ning asosiy foydasi nima?",
      options: [
        "Kodni avtomatik test qiladi",
        "Yakuniy image'da faqat runtime artefaktlari qoladi",
        "Docker'siz ishlaydi",
        "Tarmoqni tezlashtiradi",
      ],
      answer: 1,
      explain: "Birinchi bosqichda build, ikkinchi bosqichga faqat JRE va jar ko'chiriladi — image kichik va xavfsizroq bo'ladi.",
    },
    {
      q: "Dockerfile'da ENTRYPOINT va CMD orasidagi farq nima?",
      options: [
        "Farqi yo'q",
        "ENTRYPOINT asosiy buyruq, CMD standart argumentlar",
        "CMD faqat Windows uchun",
        "ENTRYPOINT faqat build uchun",
      ],
      answer: 1,
      explain: "ENTRYPOINT konteyner ishga tushganda bajariladigan buyruqni belgilaydi; CMD unga standart argumentlar beradi yoki almashtirilishi mumkin bo'lgan buyruq bo'ladi.",
    },
    {
      q: "JVM konteynerda heap'ni muhit chegarasiga moslash uchun qaysi flag ishlatiladi?",
      options: [
        "-XX:MaxRAMPercentage=75",
        "-Xint",
        "-XX:+UseSerialGC",
        "-Dfile.encoding=UTF-8",
      ],
      answer: 0,
      explain: "MaxRAMPercentage JVM'ga konteyner xotirasining foizini heap uchun ishlatishni aytadi; zamonaviy JVM konteyner limitlarini o'zi ham taniydi.",
    },
  ],
},
{
  id: 97,
  title: "REST loyiha 1: domain va ma'lumotlar qatlami",
  minutes: 17,
  blocks: [
    {
      type: "p",
      html: "Yakuniy loyiha — <b>Kitobxona REST API</b>. Uch darsda domen modeli, servis qatlami, API, xavfsizlik va testlarni quramiz. Birinchi qadam: entity'lar, jadval cheklovlari va repository. Entity'da biznes invariantlar joylashadi: nusxa manfiy bo'lmasin, enum matn sifatida saqlansin, nom bo'yicha indeks bo'lsin.",
    },
    {
      type: "code",
      title: "Kitob.java",
      code: `import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.Instant;

@Entity
@Table(name = "kitob", indexes = @Index(name = "idx_kitob_nom", columnList = "nom"))
public class Kitob {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 120)
    private String nom;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Janr janr;

    @Column(nullable = false)
    private int nusxa;

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.PERSIST)
    private Muallif muallif;

    @Column(nullable = false)
    private Instant yaratilgan = Instant.now();

    protected Kitob() {
    }

    public Kitob(String nom, Janr janr, int nusxa, Muallif muallif) {
        if (nusxa < 0) {
            throw new IllegalArgumentException("Nusxa manfiy bo'lmaydi");
        }
        this.nom = nom;
        this.janr = janr;
        this.nusxa = nusxa;
        this.muallif = muallif;
    }

    public void kamaytir() {
        if (nusxa == 0) {
            throw new IllegalStateException("Nusxa tugadi");
        }
        nusxa--;
    }

    public Long getId() { return id; }
    public String getNom() { return nom; }
    public Janr getJanr() { return janr; }
    public int getNusxa() { return nusxa; }
    public Muallif getMuallif() { return muallif; }
    public Instant getYaratilgan() { return yaratilgan; }
}

enum Janr {
    ROMAN, ILMIY, TARIXIY
}`,
      output: "Hibernate: create table kitob (id bigint generated by default as identity, janr varchar(255) check (janr in ('ROMAN','ILMIY','TARIXIY')), muallif_id bigint not null, nom varchar(120) not null, nusxa integer not null, yaratilgan timestamp(6) with time zone not null, primary key (id))\nHibernate: create index idx_kitob_nom on kitob (nom)",
      outputLabel: "spring.jpa.show-sql=true",
    },
    {
      type: "note",
      variant: "info",
      title: "Entity dizayni",
      html: "Maydonlar private, o'zgarish faqat biznes metodlar orqali: <code>kamaytir()</code> nusxa tugashini tekshiradi. Bu <b>rich domain model</b> — qoidalar servisga tarqalib ketmaydi. <code>Instant</code> UTC vaqtni saqlaydi; API'da ISO-8601 formatda chiqadi.",
    },
    {
      type: "code",
      title: "KitobxonaApplication.java",
      code: `import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class KitobxonaApplication {
    public static void main(String[] args) {
        SpringApplication.run(KitobxonaApplication.class, args);
    }
}

@Component
class Seed implements CommandLineRunner {
    private final KitobRepository repo;

    Seed(KitobRepository repo) {
        this.repo = repo;
    }

    @Override
    public void run(String... args) {
        if (repo.count() == 0) {
            Muallif qodiriy = new Muallif("Abdulla Qodiriy");
            Muallif qodirov = new Muallif("Pirimqul Qodirov");
            repo.saveAll(List.of(
                new Kitob("O'tkan kunlar", Janr.ROMAN, 3, qodiriy),
                new Kitob("Mehrobdan chayon", Janr.ROMAN, 2, qodiriy),
                new Kitob("Yulduzli tunlar", Janr.ROMAN, 1, qodirov)
            ));
        }

        System.out.println("Kitoblar: " + repo.count());
        repo.findByNomContainingIgnoreCase("kun")
            .forEach(k -> System.out.println("Topildi: " + k.getNom()));
    }
}`,
      output: "Kitoblar: 3\nTopildi: O'tkan kunlar",
    },
    {
      type: "ul",
      items: [
        "Repository interfeysi <code>JpaRepository&lt;Kitob, Long&gt;</code>dan meros oladi; implementatsiya yozilmaydi.",
        "<code>findByNomContainingIgnoreCase</code> qidiruv uchun derived query; katta jadvalda indeks muhim.",
        "Entity'ni API'ga to'g'ridan-to'g'ri qaytarmang: DTO proyeksiya kerakli maydonlarni boshqaradi.",
        "Keyingi darsda servis va controller qo'shamiz; hozir ma'lumot qatlami tayyor.",
      ],
    },
  ],
  quiz: [
    {
      q: "JPA entity'da protected bo'sh konstruktor nima uchun kerak?",
      options: [
        "Hibernate entity'ni reflection bilan yaratadi",
        "Faqat testlar uchun",
        "JSON serializatsiyasi uchun",
        "Interfeys talabi",
      ],
      answer: 0,
      explain: "JPA provayderi entity nusxasini yaratish uchun bo'sh konstruktorga tayanadi; uni protected qilish tashqi kodga obyekt yaratishni taqiqlaydi.",
    },
    {
      q: "@Enumerated(EnumType.STRING) nimani beradi?",
      options: [
        "Enum ordinal raqamini saqlaydi",
        "Enum nomini matn sifatida saqlaydi",
        "Enum'ni JSON'ga aylantiradi",
        "Enum'ni o'chiradi",
      ],
      answer: 1,
      explain: "STRING rejimida enum nomi saqlanadi; bu o'qish oson va enum tartibi o'zgarsa ma'lumot buzilmaydi.",
    },
    {
      q: "Biznes invariantni qayerda saqlash afzal?",
      options: [
        "Faqat controllerda",
        "Entity yoki domen metodida",
        "Faqat bazada",
        "Faqat frontendda",
      ],
      answer: 1,
      explain: "Qoidalar entity/domen ichida bo'lsa, ular barcha kirish yo'llarida bir xil ishlaydi va servislar orasida takrorlanmaydi.",
    },
  ],
},
{
  id: 98,
  title: "REST loyiha 2: service va API",
  minutes: 17,
  blocks: [
    {
      type: "p",
      html: "Ikkinchi qadamda biznes amallarni servisga, HTTP chegarasini controller'ga ajratamiz. Controller faqat so'rovni qabul qiladi va javob statusini tanlaydi; tranzaksiya, qidiruv va qoidalar servisda. DTO'lar API shaklini belgilaydi, entity esa ichki model bo'lib qoladi.",
    },
    {
      type: "code",
      title: "KitobXizmati.java",
      code: `import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

record KitobSorovi(
    @jakarta.validation.constraints.NotBlank String nom,
    @jakarta.validation.constraints.Min(1) int nusxa,
    Janr janr,
    Long muallifId) {
}

record KitobJavob(Long id, String nom, Janr janr, int nusxa) {
    static KitobJavob dan(Kitob kitob) {
        return new KitobJavob(kitob.getId(), kitob.getNom(),
            kitob.getJanr(), kitob.getNusxa());
    }
}

class NusxaTugadi extends RuntimeException {
    NusxaTugadi(Long id) {
        super("Kitob " + id + " uchun nusxa tugadi");
    }
}

@Service
class KitobXizmati {
    private final KitobRepository repo;
    private final MuallifRepository muallifRepo;

    KitobXizmati(KitobRepository repo, MuallifRepository muallifRepo) {
        this.repo = repo;
        this.muallifRepo = muallifRepo;
    }

    @Transactional(readOnly = true)
    Page<KitobJavob> royxat(Pageable sahifa) {
        return repo.findAll(sahifa).map(KitobJavob::dan);
    }

    @Transactional
    KitobJavob qosh(KitobSorovi sorov) {
        Muallif muallif = muallifRepo.findById(sorov.muallifId())
            .orElseThrow(() -> new IllegalArgumentException("Muallif topilmadi"));
        Kitob kitob = new Kitob(sorov.nom(), sorov.janr(), sorov.nusxa(), muallif);
        return KitobJavob.dan(repo.save(kitob));
    }

    @Transactional
    KitobJavob olish(Long id) {
        Kitob kitob = repo.findById(id).orElseThrow();
        if (kitob.getNusxa() == 0) {
            throw new NusxaTugadi(id);
        }
        kitob.kamaytir();
        return KitobJavob.dan(kitob);
    }
}`,
      output: "Xizmat tayyor: 3 ta kitob\nOlish: 1 -> qoldi 2",
      outputLabel: "seed'dan keyingi holat",
    },
    {
      type: "note",
      variant: "warning",
      title: "Tranzaksiya chegarasi",
      html: "<code>@Transactional</code> faqat proxy orqali chaqiruvda ishlaydi: bir servis ichida <code>this.boshqaMetod()</code> chaqirilsa, tranzaksiya qo'llanmaydi. Servis metodlarini public qiling va ularni controller yoki boshqa bean orqali chaqiring. <code>readOnly = true</code> flush'ni o'chiradi va o'qishni optimallashtiradi.",
    },
    {
      type: "code",
      title: "KitobController.java",
      code: `import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/kitoblar")
class KitobController {
    private final KitobXizmati xizmat;

    KitobController(KitobXizmati xizmat) {
        this.xizmat = xizmat;
    }

    @GetMapping
    Page<KitobJavob> royxat(@PageableDefault(size = 20) Pageable sahifa) {
        return xizmat.royxat(sahifa);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    KitobJavob qosh(@Valid @RequestBody KitobSorovi sorov) {
        return xizmat.qosh(sorov);
    }

    @PostMapping("/{id}/olish")
    KitobJavob olish(@PathVariable Long id) {
        return xizmat.olish(id);
    }
}`,
      output: "GET /api/kitoblar?page=0&size=2 -> 200\n{\"content\":[{\"id\":1,\"nom\":\"O'tkan kunlar\",\"janr\":\"ROMAN\",\"nusxa\":3},{\"id\":2,\"nom\":\"Mehrobdan chayon\",\"janr\":\"ROMAN\",\"nusxa\":2}],\"totalElements\":3}\nPOST /api/kitoblar/1/olish -> 200\n{\"id\":1,\"nom\":\"O'tkan kunlar\",\"janr\":\"ROMAN\",\"nusxa\":2}\nPOST /api/kitoblar/3/olish (nusxa 0) -> 409\n{\"title\":\"Nusxa tugadi\",\"status\":409}",
      outputLabel: "curl natijalari",
    },
    {
      type: "ul",
      items: [
        "<code>Page</code> javobi <code>content</code>, <code>totalElements</code>, <code>totalPages</code> kabi maydonlarni beradi.",
        "409 Conflict biznes qoidasi buzilganda (nusxa tugashi) 400'dan ko'ra aniqroq.",
        "<code>@PageableDefault</code> sahifa hajmini cheklaydi; foydalanuvchiga cheksiz size bermang.",
        "Controller'da hech qanday SQL yoki tranzaksiya bo'lmasligi kerak — faqat HTTP qatlami.",
      ],
    },
  ],
  quiz: [
    {
      q: "@Transactional(readOnly = true) qanday foyda beradi?",
      options: [
        "Yozishni taqiqlaydi va flush'ni optimallashtiradi",
        "Tranzaksiyani butunlay o'chiradi",
        "Faqat testlarda ishlaydi",
        "Keshni tozalaydi",
      ],
      answer: 0,
      explain: "readOnly rejimi Hibernate flush'ini o'chiradi va ba'zi drayverlarda o'qishni optimallashtiradi; yozishga urinish xato beradi.",
    },
    {
      q: "Nusxa tugaganda qaysi HTTP status mos?",
      options: ["200", "404", "409", "500"],
      answer: 2,
      explain: "409 Conflict resursning joriy holati amalni bajarishga xalaqit berayotganini bildiradi; 404 resurs yo'qligi uchun.",
    },
    {
      q: "Controller qatlamining mas'uliyati nima?",
      options: [
        "SQL yozish",
        "HTTP so'rovini qabul qilish va javobni shakllantirish",
        "Entity hayotiy tsiklini boshqarish",
        "Faqat autentifikatsiya",
      ],
      answer: 1,
      explain: "Controller HTTP chegarasi: parametrlarni bog'lash, validatsiya va status tanlash. Biznes logika servisda qoladi.",
    },
  ],
},
{
  id: 99,
  title: "REST loyiha 3: xavfsizlik, testlar va intervyu",
  minutes: 18,
  blocks: [
    {
      type: "p",
      html: "Oxirgi qadam: API'ni himoyalash, integratsion testlar bilan qulflash va deploy'ga tayyorlash. O'qish hamma rolga, yozish faqat admin'ga ruxsat. Testlar <code>MockMvc</code> bilan HTTP darajasida tekshiradi. So'nggi bo'limda intervyuda eng ko'p so'raladigan mavzularni takrorlaymiz.",
    },
    {
      type: "code",
      title: "ApiXavfsizlik.java",
      code: `import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
class ApiXavfsizlik {
    @Bean
    SecurityFilterChain api(HttpSecurity http, JwtFiltr jwt) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**", "/actuator/health").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/kitoblar/**").hasAnyRole("USER", "ADMIN")
                .requestMatchers(HttpMethod.POST, "/api/kitoblar/**").hasRole("ADMIN")
                .anyRequest().authenticated())
            .addFilterBefore(jwt, UsernamePasswordAuthenticationFilter.class)
            .build();
    }
}`,
      output: "GET /api/kitoblar (token yo'q) -> 401\nGET /api/kitoblar (USER) -> 200\nPOST /api/kitoblar (USER) -> 403\nPOST /api/kitoblar (ADMIN) -> 201",
      outputLabel: "xavfsizlik matritsasi",
    },
    {
      type: "note",
      variant: "info",
      title: "Deploy oldidan",
      html: "Maxfiy kalitlarni env orqali bering, <code>ddl-auto</code>ni production'da <code>validate</code> qiling, Flyway migratsiyalarini qo'llang. Actuator'dan faqat <code>health,prometheus</code>ni oching. Docker image'ni CI'da test qilib, <code>docker compose up</code> bilan lokal tekshiring.",
    },
    {
      type: "code",
      title: "KitobApiTest.java",
      code: `import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class KitobApiTest {
    @Autowired
    private MockMvc mvc;

    @Test
    void tokensiz401() throws Exception {
        mvc.perform(get("/api/kitoblar"))
            .andExpect(status().isUnauthorized());
    }

    @Test
    @WithMockUser(roles = "USER")
    void foydalanuvchiOqiydi() throws Exception {
        mvc.perform(get("/api/kitoblar"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.content").isArray());
    }

    @Test
    @WithMockUser(roles = "USER")
    void foydalanuvchiYozolmaydi() throws Exception {
        mvc.perform(get("/api/kitoblar/1/olish").with(r -> {
            r.setMethod("POST");
            return r;
        })).andExpect(status().isForbidden());
    }
}`,
      output: "Tests run: 3, Failures: 0, Errors: 0, Skipped: 0\nBUILD SUCCESS",
      outputLabel: "mvn verify",
    },
    {
      type: "table",
      head: ["Mavzu", "Intervyuda nimalar so'raladi"],
      rows: [
        ["Kolleksiyalar", "HashMap internallari, equals/hashCode, fail-fast"],
        ["Concurrency", "synchronized vs Lock, CAS, virtual threads, deadlock"],
        ["JVM", "heap/stack, GC turlari, JIT, classloader"],
        ["DB", "indeks, tranzaksiya, isolation, N+1"],
        ["Spring", "DI, proxy, @Transactional, security filter chain"],
        ["Arxitektura", "SOLID, monolit vs microservices, idempotentlik"],
      ],
    },
    {
      type: "ul",
      items: [
        "Loyihani GitHub'ga qo'ying: README, API misollari, testlar va Docker buyruqlari bo'lsin.",
        "Intervyuda javobni kod bilan bog'lang: 'HashMap'da bucket + treeify' kabi aniq mexanizm ayting.",
        "Bilimni amaliyotda ko'rsating: kichik REST API, testlar va CI pipeline katta taassurot qoldiradi.",
        "Savol berishdan qo'rqmayin: talablar, cheklovlar va trade-off'larni aniqlashtirish kuchli muhandis belgisi.",
      ],
    },
  ],
  quiz: [
    {
      q: "Bir servis ichida @Transactional metodni this orqali chaqirsak nima bo'ladi?",
      options: [
        "Tranzaksiya ishlamaydi, chunki proxy chetlab o'tiladi",
        "Tranzaksiya ikki marta ochiladi",
        "Xato beradi",
        "Tranzaksiya avtomatik rollback bo'ladi",
      ],
      answer: 0,
      explain: "Spring tranzaksiyani proxy orqali qo'llaydi; self-invocation proxy'ni chetlab o'tadi va @Transactional ta'sir qilmaydi.",
    },
    {
      q: "Indeks qo'shishning asosiy trade-off'i nima?",
      options: [
        "O'qish tezlashadi, yozish va xotira narxi oshadi",
        "Faqat xotira kamayadi",
        "Hech qanday narxi yo'q",
        "Faqat birlamchi kalitga qo'shiladi",
      ],
      answer: 0,
      explain: "Indeks qidiruvni tezlashtiradi, lekin har INSERT/UPDATE'da yangilanishi kerak va qo'shimcha disk egallaydi.",
    },
    {
      q: "Ko'p I/O kutishli vazifalarni yuqori parallellikda bajarish uchun nima mos?",
      options: ["Virtual threadlar", "Faqat bitta platform thread", "Serial GC", "Statik metodlar"],
      answer: 0,
      explain: "Virtual threadlar bloklanishda carrier threadni bo'shatadi, shuning uchun minglab I/O vazifasini arzon boshqaradi.",
    },
  ],
},
