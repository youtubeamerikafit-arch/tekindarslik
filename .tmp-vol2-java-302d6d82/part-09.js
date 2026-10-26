{
  id: 90,
  title: "JUnit 5 chuqur: parametrized va lifecycle",
  minutes: 15,
  blocks: [
    {
      type: "p",
      html: "JUnit 5 uch qismdan iborat: Jupiter (test API), Platform (runner) va Vintage (eski testlar). <code>@BeforeEach</code> har test oldidan, <code>@BeforeAll</code> esa butun klass uchun bir marta ishlaydi. <code>@ParameterizedTest</code> bir testni bir nechta kirish bilan bajaradi — chegara holatlarini kam kod bilan qamrab oladi.",
    },
    {
      type: "code",
      title: "KalkulyatorTest.java",
      code: `import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class KalkulyatorTest {
    private Kalkulyator kalkulyator;

    @BeforeEach
    void tayyorla() {
        kalkulyator = new Kalkulyator();
    }

    @ParameterizedTest(name = "{0} + {1} = {2}")
    @CsvSource({"1,2,3", "0,0,0", "-1,1,0", "10,5,15"})
    void qoshish(int a, int b, int kutilgan) {
        assertEquals(kutilgan, kalkulyator.qosh(a, b));
    }

    @Test
    @DisplayName("Nolga bo'lish ArithmeticException beradi")
    void nolgaBolish() {
        assertThrows(ArithmeticException.class, () -> kalkulyator.bol(1, 0));
    }
}`,
      output: "Tests run: 5, Failures: 0, Errors: 0, Skipped: 0\nBUILD SUCCESS",
      outputLabel: "mvn test",
    },
    {
      type: "note",
      variant: "info",
      title: "Lifecycle tartibi",
      html: "Bitta test uchun tartib: <code>@BeforeAll</code> (bir marta) → <code>@BeforeEach</code> → test → <code>@AfterEach</code> → <code>@AfterAll</code>. Har test uchun yangi test klass nusxasi yaratiladi, shuning uchun maydonlar testlar orasida tozalanadi. Umumiy holat kerak bo'lsa <code>static</code> yoki <code>@TestInstance(PER_CLASS)</code> ishlatiladi.",
    },
    {
      type: "code",
      title: "HisobTest.java",
      code: `import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class HisobTest {
    @Nested
    class BoshHolat {
        @Test
        void boshlangichNol() {
            assertEquals(0, new Hisob().qiymat());
        }
    }

    @Nested
    class Qoshish {
        @Test
        void bittaQoshish() {
            Hisob hisob = new Hisob();
            hisob.qosh(5);
            assertEquals(5, hisob.qiymat());
        }

        @Test
        @Disabled("keyingi sprintda")
        void ikkiQoshish() {
            Hisob hisob = new Hisob();
            hisob.qosh(2);
            hisob.qosh(3);
            assertEquals(5, hisob.qiymat());
        }
    }
}`,
      output: "Tests run: 2, Failures: 0, Errors: 0, Skipped: 1\nBUILD SUCCESS",
      outputLabel: "mvn test",
    },
    {
      type: "ul",
      items: [
        "<code>@CsvSource</code> — oddiy qiymatlar; <code>@MethodSource</code> — murakkab obyektlar; <code>@ValueSource</code> — bitta parametr.",
        "<code>assertAll</code> bir nechta tekshiruvni bajarib, barcha xatolarni birga ko'rsatadi.",
        "<code>@Disabled</code> testni hisobotda ko'rinadigan qilib o'tkazib yuboradi — o'chirib tashlashdan yaxshiroq.",
        "Test nomi nima tekshirilayotganini aytsin: <code>nolgaBolishXatoBeradi</code> kabi.",
      ],
    },
  ],
  quiz: [
    {
      q: "@BeforeAll metodi qanday bo'lishi kerak?",
      options: [
        "static (yoki PER_CLASS rejimida instance)",
        "private",
        "abstract",
        "Faqat void bo'lmagan",
      ],
      answer: 0,
      explain: "Standart rejimda @BeforeAll barcha testlardan oldin bir marta ishlaydi va shuning uchun static bo'ladi; PER_CLASS rejimida instance metod bo'lishi mumkin.",
    },
    {
      q: "@ParameterizedTest uchun qiymatlar qaysi annotatsiyadan kelishi mumkin?",
      options: ["@CsvSource", "@BeforeEach", "@Disabled", "@Nested"],
      answer: 0,
      explain: "@CsvSource satrlardan parametrlar beradi; @MethodSource, @ValueSource, @EnumSource ham manba bo'la oladi.",
    },
    {
      q: "@Disabled qilingan test hisobotda qanday ko'rinadi?",
      options: [
        "Failures sifatida",
        "Skipped sifatida",
        "Umuman ko'rinmaydi",
        "Errors sifatida",
      ],
      answer: 1,
      explain: "Disabled testlar bajarilmaydi va skipped hisobida ko'rsatiladi — bu holatni hujjatlashtiradi.",
    },
  ],
},
{
  id: 91,
  title: "Mockito: mock, stub va verify",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "Unit testda haqiqiy baza yoki tarmoq kerak emas: bog'liqliklar <b>test double</b> bilan almashtiriladi. Mockito <code>mock()</code> bilan soxta obyekt yaratadi, <code>when(...).thenReturn(...)</code> bilan xatti-harakatni belgilaydi, <code>verify()</code> bilan chaqiruvlarni tekshiradi. <b>Muhim</b>: mock'ni faqat tashqi bog'liqlik chegarasida ishlating, biznes mantiqni mock bilan tekshirmang.",
    },
    {
      type: "code",
      title: "KitobXizmatTest.java",
      code: `import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;

class KitobXizmatTest {
    @Test
    void topilmaganXato() {
        KitobRepository repo = mock(KitobRepository.class);
        when(repo.findById(99L)).thenReturn(Optional.empty());

        KitobXizmat xizmat = new KitobXizmat(repo);
        assertThrows(Topilmadi.class, () -> xizmat.ol(99L));

        verify(repo, times(1)).findById(99L);
        verifyNoMoreInteractions(repo);
    }

    @Test
    void saqlashArgumenti() {
        KitobRepository repo = mock(KitobRepository.class);
        when(repo.save(any(Kitob.class))).thenAnswer(i -> i.getArgument(0));

        new KitobXizmat(repo).qosh("Dune", 2);

        ArgumentCaptor<Kitob> captor = ArgumentCaptor.forClass(Kitob.class);
        verify(repo).save(captor.capture());

        assertEquals("Dune", captor.getValue().getNom());
        assertEquals(2, captor.getValue().getNusxa());
    }
}`,
      output: "Tests run: 2, Failures: 0, Errors: 0, Skipped: 0\nBUILD SUCCESS",
      outputLabel: "mvn test",
    },
    {
      type: "note",
      variant: "info",
      title: "Mock, stub va spy",
      html: "<b>Stub</b> oldindan belgilangan javob qaytaradi; <b>mock</b> chaqiruvlarni qayd etadi; <b>spy</b> haqiqiy obyektni o'rab, ba'zi metodlarnigina almashtiradi. Ortiqcha stub qilish testni mo'rt qiladi — faqat kerakli xatti-harakatni belgilang.",
    },
    {
      type: "code",
      title: "MockExtensionTest.java",
      code: `import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class MockExtensionTest {
    @Mock
    private KitobRepository repo;

    @InjectMocks
    private KitobXizmat xizmat;

    @Test
    void soniRepositorydanKeladi() {
        when(repo.count()).thenReturn(5L);
        assertEquals(5, xizmat.soni());
    }
}`,
      output: "Tests run: 1, Failures: 0, Errors: 0, Skipped: 0\nBUILD SUCCESS",
      outputLabel: "mvn test",
    },
    {
      type: "ul",
      items: [
        "<code>@ExtendWith(MockitoExtension.class)</code> mock'larni avtomatik yaratadi va strict stubbing tekshiruvini yoqadi.",
        "<code>verify(repo, never())</code> chaqiruv bo'lmaganini tasdiqlaydi; <code>times(2)</code> aniq sonni.",
        "<code>ArgumentCaptor</code> metodga uzatilgan obyektni tekshirish uchun ishlatiladi.",
        "Mockito final klass va static metodlarni standart holda qo'llamaydi; bunday holatda dizaynni qayta ko'ring.",
      ],
    },
  ],
  quiz: [
    {
      q: "Mockito'da metodning qaytarish qiymatini oldindan belgilash qanday amalga oshiriladi?",
      options: [
        "when(...).thenReturn(...)",
        "verify(...)",
        "assertThrows(...)",
        "@BeforeEach",
      ],
      answer: 0,
      explain: "when(mock.metod(...)).thenReturn(qiymat) stub yaratadi; verify esa chaqiruvni tekshiradi.",
    },
    {
      q: "ArgumentCaptor nima uchun ishlatiladi?",
      options: [
        "Test natijasini saqlash",
        "Metodga uzatilgan argumentni ushlab tekshirish",
        "Mock yaratish",
        "Testni o'tkazib yuborish",
      ],
      answer: 1,
      explain: "ArgumentCaptor verify vaqtida argument qiymatini ushlaydi, keyin uning maydonlarini assert qilish mumkin.",
    },
    {
      q: "@InjectMocks nima qiladi?",
      options: [
        "Mock'larni test obyektiga inject qiladi",
        "Yangi repository yaratadi",
        "Testni takrorlaydi",
        "Keshni tozalaydi",
      ],
      answer: 0,
      explain: "@InjectMocks test obyektini yaratib, @Mock maydonlarini konstruktor yoki maydon orqali inject qiladi.",
    },
  ],
},
{
  id: 92,
  title: "Testcontainers va integratsion testlar",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "Unit testlar biznes mantiqni tez tekshiradi, lekin SQL, tranzaksiya va JPA xatti-harakati faqat haqiqiy bazada ko'rinadi. <b>Testcontainers</b> Docker orqali vaqtinchalik PostgreSQL, MySQL, Redis yoki Kafka ko'taradi. Test tugagach konteyner o'chadi — H2 bilan taqlid qilishdan ko'ra ishonchliroq.",
    },
    {
      type: "code",
      title: "KitobIntegrationTest.java",
      code: `import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@Testcontainers
@SpringBootTest
class KitobIntegrationTest {
    @Container
    static PostgreSQLContainer<?> postgres =
        new PostgreSQLContainer<>("postgres:16-alpine");

    @DynamicPropertySource
    static void sozla(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }

    @Autowired
    private KitobRepository repo;

    @Test
    void saqlashVaQidirish() {
        repo.save(new Kitob("Dune", "ROMAN", 2));
        assertTrue(repo.findByNom("Dune").isPresent());
        assertEquals(1, repo.count());
    }
}`,
      output: "Tests run: 1, Failures: 0, Errors: 0, Skipped: 0\nBUILD SUCCESS",
      outputLabel: "mvn verify",
    },
    {
      type: "note",
      variant: "tip",
      title: "Konteynerni qayta ishlatish",
      html: "Har test klassida yangi konteyner ko'tarish sekin. <code>testcontainers.reuse.enable=true</code> va <code>withReuse(true)</code> bilan lokal ishlashda konteyner qayta ishlatiladi. CI'da esa toza muhit uchun odatda reuse o'chiriladi.",
    },
    {
      type: "code",
      title: "RedisTest.java",
      code: `import org.junit.jupiter.api.Test;
import org.testcontainers.containers.GenericContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.junit.jupiter.api.Assertions.assertTrue;

@Testcontainers
class RedisTest {
    @Container
    static GenericContainer<?> redis =
        new GenericContainer<>("redis:7-alpine").withExposedPorts(6379);

    @Test
    void konteynerIshlaydi() {
        assertTrue(redis.isRunning());
        System.out.println("Port > 0: " + (redis.getMappedPort(6379) > 0));
        System.out.println("Image: " + redis.getDockerImageName());
    }
}`,
      output: "Port > 0: true\nImage: redis:7-alpine\nTests run: 1, Failures: 0, Errors: 0, Skipped: 0",
      outputLabel: "mvn test",
    },
    {
      type: "ul",
      items: [
        "Testcontainers Docker talab qiladi; CI runner'da Docker socket mavjud bo'lishi kerak.",
        "<code>@Container</code> static bo'lsa, konteyner barcha testlar uchun bir marta ko'tariladi.",
        "<code>@ServiceConnection</code> (Boot 3.1+) bilan JDBC URL'ni qo'lda yozish shart emas.",
        "Integratsion testlar sekinroq — ularni alohida Maven profilida yoki <code>verify</code> fazasida ishlatish odatiy.",
      ],
    },
  ],
  quiz: [
    {
      q: "Testcontainers qanday vazifani bajaradi?",
      options: [
        "Testlarni parallel ishlatadi",
        "Docker orqali vaqtinchalik real xizmat ko'taradi",
        "Kodni kompilyatsiya qiladi",
        "Metrikalarni yig'adi",
      ],
      answer: 1,
      explain: "Testcontainers test davomida Docker konteynerida PostgreSQL, Redis kabi xizmatlarni ishga tushiradi va oxirida tozalaydi.",
    },
    {
      q: "@Container static maydon nimani anglatadi?",
      options: [
        "Har test uchun yangi konteyner",
        "Barcha testlar uchun bitta konteyner",
        "Konteyner ishlatilmaydi",
        "Faqat oxirgi testda ishlaydi",
      ],
      answer: 1,
      explain: "static @Container test klassidagi barcha testlar uchun bir marta ko'tariladi va sinf tugagach to'xtatiladi.",
    },
    {
      q: "Dinamik JDBC URL'ni Spring kontekstiga qanday uzatamiz?",
      options: [
        "DynamicPropertySource",
        "@BeforeEach",
        "application.properties",
        "@Disabled",
      ],
      answer: 0,
      explain: "DynamicPropertySource konteyner ishga tushgandan keyin olingan URL, login va parolni Spring Environment'ga qo'shadi.",
    },
  ],
},
{
  id: 93,
  title: "Maven multi-module va dependency management",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "Katta loyiha bitta modulda tez chalkashadi. <b>Multi-module</b> Maven loyihasi umumiy ota <code>pom.xml</code> va bir nechta bola modullardan iborat: <code>core</code> (domain), <code>app</code> (web), <code>test-utils</code>. Ota POM versiyalarni <code>dependencyManagement</code>da markazlashtiradi, bolalar esa faqat guruh va artefaktni yozadi.",
    },
    {
      type: "code",
      title: "pom.xml (ota)",
      code: `<project xmlns="http://maven.apache.org/POM/4.0.0">
  <modelVersion>4.0.0</modelVersion>
  <groupId>uz.noldan</groupId>
  <artifactId>kitobxona</artifactId>
  <version>1.0.0</version>
  <packaging>pom</packaging>

  <modules>
    <module>core</module>
    <module>app</module>
  </modules>

  <properties>
    <maven.compiler.release>21</maven.compiler.release>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>

  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>uz.noldan</groupId>
        <artifactId>core</artifactId>
        <version>\${project.version}</version>
      </dependency>
    </dependencies>
  </dependencyManagement>
</project>`,
      output: "kitobxona ................................ SUCCESS\ncore ..................................... SUCCESS\napp ...................................... SUCCESS\nBUILD SUCCESS",
      outputLabel: "mvn package",
    },
    {
      type: "note",
      variant: "info",
      title: "Reactor va -pl",
      html: "Maven barcha modullarni <b>reactor</b>da tartib bilan quradi: avval <code>core</code>, keyin unga bog'liq <code>app</code>. Faqat bitta modulni qurish uchun <code>mvn -pl app -am package</code> ishlatiladi: <code>-am</code> kerakli bog'liqliklarni ham quradi.",
    },
    {
      type: "code",
      title: "Xabar.java",
      code: `package uz.noldan.core;

public class Xabar {
    public static final String VERSIYA = "1.0.0";

    public String matn() {
        return "salom";
    }

    public static void main(String[] args) {
        System.out.println(new Xabar().matn());
    }
}`,
      output: "salom",
    },
    {
      type: "code",
      title: "Application.java",
      code: `package uz.noldan.app;

import uz.noldan.core.Xabar;

public class Application {
    public static void main(String[] args) {
        Xabar xabar = new Xabar();
        System.out.println(xabar.matn());
        System.out.println(Xabar.VERSIYA);
    }
}`,
      output: "salom\n1.0.0",
    },
    {
      type: "ul",
      items: [
        "<code>dependencyManagement</code> versiyani belgilaydi, lekin bog'liqlikni qo'shmaydi — bola modul baribir <code>dependencies</code>da yozadi.",
        "Scope'lar: <code>compile</code> (standart), <code>provided</code>, <code>runtime</code>, <code>test</code>.",
        "BOM import: <code>&lt;type&gt;pom&lt;/type&gt;&lt;scope&gt;import&lt;/scope&gt;</code> bilan Spring Boot versiyalarini boshqarish.",
        "Har modulning o'z testlari bo'lsin; ota POM'da faqat umumiy plugin sozlamalari qolsin.",
      ],
    },
  ],
  quiz: [
    {
      q: "Ota POM'da <packaging>pom</packaging> nimani bildiradi?",
      options: [
        "Modul jar chiqarmaydi, faqat aggregator",
        "Modul urush fayli chiqaradi",
        "Modul o'chirilgan",
        "Modul faqat test uchun",
      ],
      answer: 0,
      explain: "pom packaging agregator/ota loyiha uchun ishlatiladi; u kod kompilyatsiya qilmaydi, modullarni birlashtiradi.",
    },
    {
      q: "dependencyManagement bo'limi nima qiladi?",
      options: [
        "Bog'liqlikni avtomatik qo'shadi",
        "Versiyalarni markazlashtiradi, lekin bog'liqlikni qo'shmaydi",
        "Faqat test bog'liqliklarini boshqaradi",
        "Repository'ni o'chiradi",
      ],
      answer: 1,
      explain: "dependencyManagement versiya va scope'ni belgilaydi; bola modul dependency'ni yozganda versiyani tushirib qoldirishi mumkin.",
    },
    {
      q: "mvn -pl app -am package buyrug'i nima qiladi?",
      options: [
        "Faqat app'ni, bog'liq modullarsiz quradi",
        "app va unga kerakli modullarni quradi",
        "Barcha modullarni test qiladi",
        "Faqat testlarni ishga tushiradi",
      ],
      answer: 1,
      explain: "-pl app tanlangan modulni, -am esa uning bog'liqliklarini ham reactor'ga qo'shadi.",
    },
  ],
},
{
  id: 94,
  title: "Logging va observability: SLF4J, Micrometer",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "Kuzatuvchanlik (observability) uch ustunga tayanadi: <b>loglar</b>, <b>metrikalar</b> va <b>tracing</b>. Kodda SLF4J interfeysidan foydalaning, implementatsiyani (Logback, Log4j2) konfiguratsiya tanlaydi. <code>log.info(\"Foydalanuvchi {}\", nom)</code> kabi parametrli yozuv string concatenation'dan tezroq va xavfsizroq.",
    },
    {
      type: "code",
      title: "LogDemo.java",
      code: `import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;

public class LogDemo {
    private static final Logger log = LoggerFactory.getLogger(LogDemo.class);

    public static void main(String[] args) {
        MDC.put("sorovId", "abc-123");
        log.info("Foydalanuvchi {} tizimga kirdi", "ali");
        log.warn("Kitob {} topilmadi", 99);
        log.debug("Bu odatda ko'rinmaydi");
        MDC.clear();
    }
}`,
      output: "INFO  LogDemo - Foydalanuvchi ali tizimga kirdi\nWARN  LogDemo - Kitob 99 topilmadi",
      outputLabel: "Logback pattern: %-5level %logger{0} - %msg",
    },
    {
      type: "note",
      variant: "warning",
      title: "MDC va threadlar",
      html: "<code>MDC</code> thread-local xarita; virtual threadlarda ham ishlaydi, lekin thread pool'da qiymatlar qolib ketmasligi uchun har so'rov oxirida <code>MDC.clear()</code> qiling. Log pattern'ga <code>%X{sorovId}</code> qo'shsangiz, barcha yozuvlar so'rov ID bilan bog'lanadi.",
    },
    {
      type: "code",
      title: "MetrikaDemo.java",
      code: `import io.micrometer.core.instrument.Timer;
import io.micrometer.core.instrument.simple.SimpleMeterRegistry;
import java.time.Duration;
import java.util.concurrent.TimeUnit;

public class MetrikaDemo {
    public static void main(String[] args) {
        SimpleMeterRegistry registry = new SimpleMeterRegistry();
        Timer timer = Timer.builder("kitob.qidiruv").register(registry);

        timer.record(Duration.ofMillis(120));
        timer.record(Duration.ofMillis(80));

        System.out.println("Soni: " + timer.count());
        System.out.println("Jami ms: " + timer.totalTime(TimeUnit.MILLISECONDS));
        System.out.println("Maks ms: " + timer.max(TimeUnit.MILLISECONDS));
    }
}`,
      output: "Soni: 2\nJami ms: 200.0\nMaks ms: 120.0",
    },
    {
      type: "table",
      head: ["Ustun", "Savolga javob beradi", "Vosita"],
      rows: [
        ["Loglar", "Nima sodir bo'ldi?", "SLF4J + Logback, Loki"],
        ["Metrikalar", "Qancha va qanchalik tez?", "Micrometer + Prometheus"],
        ["Tracing", "So'rov qayerda kechikdi?", "OpenTelemetry, Jaeger"],
      ],
    },
  ],
  quiz: [
    {
      q: "SLF4J'da parametrli logging nimasi bilan foydali?",
      options: [
        "Darajani avtomatik oshiradi",
        "Kerak bo'lmaganda string concatenation bajarilmaydi",
        "Faylni yopadi",
        "MDC'ni tozalaydi",
      ],
      answer: 1,
      explain: "Parametrli yozuvda xabar faqat daraja yoqilganda formatlanadi; string concatenation esa har doim bajariladi.",
    },
    {
      q: "MDC nima saqlaydi?",
      options: [
        "Metrikalar tarixini",
        "Thread bo'yicha kontekst qiymatlarini (sorovId kabi)",
        "Faqat parollarni",
        "SQL so'rovlarni",
      ],
      answer: 1,
      explain: "MDC thread-local xarita bo'lib, log pattern'ga so'rov ID, foydalanuvchi kabi kontekstni qo'shish uchun ishlatiladi.",
    },
    {
      q: "Micrometer Timer nimani o'lchaydi?",
      options: [
        "Faqat xatolar sonini",
        "Operatsiyalar soni va davomiyligini",
        "Xotira hajmini",
        "Threadlar sonini",
      ],
      answer: 1,
      explain: "Timer hodisalar soni, jami va maksimal davomiylikni yozadi; u latency kuzatish uchun asosiy metrikadir.",
    },
  ],
},
