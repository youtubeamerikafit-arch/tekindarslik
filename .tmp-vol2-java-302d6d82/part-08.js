{
  id: 85,
  title: "Spring Boot: avtokonfiguratsiya va profillar",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "<code>@SpringBootApplication</code> uchta annotatsiyani birlashtiradi: <code>@Configuration</code>, <code>@EnableAutoConfiguration</code> va <code>@ComponentScan</code>. Avtokonfiguratsiya classpath'dagi kutubxonalarga qarab bean'larni o'zi sozlaydi. Sozlamalar <code>application.properties</code> yoki <code>application.yml</code>da, profilga xos fayllar <code>application-dev.yml</code> kabi nomlanadi.",
    },
    {
      type: "code",
      title: "DemoApplication.java",
      code: `import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Component;

@SpringBootApplication
@EnableConfigurationProperties(AppProps.class)
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}

@ConfigurationProperties(prefix = "app")
record AppProps(String nom, int limit, boolean demo) {
}

@Component
class Starter implements org.springframework.boot.CommandLineRunner {
    private final AppProps props;

    Starter(AppProps props) {
        this.props = props;
    }

    @Override
    public void run(String... args) {
        System.out.println("Nom: " + props.nom());
        System.out.println("Limit: " + props.limit());
        System.out.println("Demo: " + props.demo());
    }
}`,
      output: "Nom: Noldan\nLimit: 25\nDemo: true",
      outputLabel: "Ilovaning o'z chiqishi",
    },
    {
      type: "note",
      variant: "info",
      title: "application.yml",
      html: "Bu qiymatlar <code>application.yml</code>dan keladi:<br><code>app.nom: Noldan</code><br><code>app.limit: 25</code><br><code>app.demo: true</code>. <code>@ConfigurationProperties</code> type-safe bog'lash beradi; <code>@Value</code> esa bitta qiymat uchun qulay, lekin validatsiya va relaksatsiyalangan nomlashda kuchsizroq.",
    },
    {
      type: "code",
      title: "ProfilDemo.java",
      code: `import java.util.Arrays;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
class ProfilDemo implements CommandLineRunner {
    private final Environment muhit;

    ProfilDemo(Environment muhit) {
        this.muhit = muhit;
    }

    @Override
    public void run(String... args) {
        System.out.println("Faol profillar: "
            + Arrays.toString(muhit.getActiveProfiles()));
        System.out.println("Port: " + muhit.getProperty("server.port", "8080"));
        System.out.println("Baza: " + muhit.getProperty("app.baza", "h2"));
    }
}`,
      output: "Faol profillar: [dev]\nPort: 8081\nBaza: postgres",
      outputLabel: "--spring.profiles.active=dev",
    },
    {
      type: "ul",
      items: [
        "Profil fayllari ustuvorlik bo'yicha qatlamlanadi: <code>application.yml</code> + <code>application-dev.yml</code>.",
        "Tashqi konfiguratsiya (env, command line) ichki fayldan ustun turadi.",
        "<code>@Profile(\"dev\")</code> bilan bean faqat kerakli muhitda yaratiladi.",
        "<code>spring.config.import</code> bilan Vault yoki Config Server'dan sozlamalar tortiladi.",
      ],
    },
  ],
  quiz: [
    {
      q: "@SpringBootApplication tarkibida qaysi annotatsiya yo'q?",
      options: ["@Configuration", "@EnableAutoConfiguration", "@ComponentScan", "@RestController"],
      answer: 3,
      explain: "@SpringBootApplication uchlikdan iborat: @Configuration, @EnableAutoConfiguration va @ComponentScan. @RestController alohida qo'shiladi.",
    },
    {
      q: "application-dev.yml qachon faollashadi?",
      options: [
        "Har doim",
        "dev profili faol bo'lganda",
        "Faqat testlarda",
        "Faqat production'da",
      ],
      answer: 1,
      explain: "Profilga xos fayl faqat shu profil faol bo'lganda qo'shimcha qatlam sifatida o'qiladi.",
    },
    {
      q: "Tashqi muhit o'zgaruvchisi va application.yml bir xil xususiyatni bersa, qaysi biri ustun?",
      options: [
        "application.yml",
        "Tashqi muhit o'zgaruvchisi",
        "Ikkalasi birlashadi",
        "Tasodifiy tanlanadi",
      ],
      answer: 1,
      explain: "Spring Boot'da tashqi konfiguratsiya (env, tizim xossalari, command line) fayldagi qiymatdan yuqori ustuvorlikka ega.",
    },
  ],
},
{
  id: 86,
  title: "REST controller, DTO va Bean Validation",
  minutes: 17,
  blocks: [
    {
      type: "p",
      html: "REST controller so'rovni qabul qiladi, DTO'ga bog'laydi va javob qaytaradi. Entity'ni to'g'ridan-to'g'ri tashqariga chiqarmang: bu API'ni baza sxemasiga bog'lab qo'yadi va ortiqcha maydonlarni oshkor qiladi. <b>Bean Validation</b> (<code>@Valid</code>, <code>@NotBlank</code>, <code>@Min</code>) kirishni chegarada tekshiradi.",
    },
    {
      type: "code",
      title: "KitobController.java",
      code: `import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

record KitobSorovi(
    @NotBlank(message = "bo'sh bo'lmasin") String nom,
    @Min(value = 1, message = "kamida 1 bo'lsin") int nusxa) {
}

record KitobJavob(Long id, String nom, int nusxa) {
}

@RestController
@RequestMapping("/api/kitoblar")
class KitobController {
    private final KitobServis servis;

    KitobController(KitobServis servis) {
        this.servis = servis;
    }

    @PostMapping
    ResponseEntity<KitobJavob> qosh(@Valid @RequestBody KitobSorovi sorov) {
        KitobJavob javob = servis.qosh(sorov);
        return ResponseEntity.status(HttpStatus.CREATED).body(javob);
    }
}`,
      output: "HTTP/1.1 201 Created\nContent-Type: application/json\n\n{\"id\":1,\"nom\":\"O'tkan kunlar\",\"nusxa\":3}",
      outputLabel: "curl -i natijasi",
    },
    {
      type: "note",
      variant: "warning",
      title: "@Valid qayerda ishlaydi?",
      html: "<code>@Valid</code> faqat controller parametrida yoki <code>@Validated</code> bean metodida ishlaydi. DTO'ni servis ichida qo'lda yaratsangiz, validatsiya avtomatik bo'lmaydi. Murakkab qoidalar uchun custom <code>ConstraintValidator</code> yoziladi.",
    },
    {
      type: "code",
      title: "ValidationDemo.java",
      code: `import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import java.util.Set;

public class ValidationDemo {
    public static void main(String[] args) {
        try (ValidatorFactory factory = Validation.buildDefaultValidatorFactory()) {
            Validator validator = factory.getValidator();
            KitobSorovi sorov = new KitobSorovi("", 0);

            Set<ConstraintViolation<KitobSorovi>> xatolar = validator.validate(sorov);
            xatolar.stream()
                .map(x -> x.getPropertyPath() + ": " + x.getMessage())
                .sorted()
                .forEach(System.out::println);

            System.out.println("Xatolar soni: " + xatolar.size());
        }
    }
}`,
      output: "nom: bo'sh bo'lmasin\nnusxa: kamida 1 bo'lsin\nXatolar soni: 2",
    },
    {
      type: "ul",
      items: [
        "DTO — so'rov va javob uchun alohida tur; entity API chegarasida ko'rinmaydi.",
        "<code>@NotBlank</code> null, bo'sh va faqat probeldan iborat matnni rad etadi; <code>@NotNull</code> faqat null'ni.",
        "201 — yangi resurs yaratildi; javobda <code>Location</code> header ham berilishi mumkin.",
        "Validatsiya xatolari odatda 400 va tushunarli maydon-xabar ro'yxati bilan qaytariladi.",
      ],
    },
  ],
  quiz: [
    {
      q: "Controller metodida @RequestBody bilan birga validatsiyani yoqish uchun nima qo'shiladi?",
      options: ["@Valid", "@Transactional", "@Async", "@Scheduled"],
      answer: 0,
      explain: "@Valid parametr oldiga qo'yilganda Spring Bean Validation'ni ishga tushiradi va xatolarni MethodArgumentNotValidException bilan beradi.",
    },
    {
      q: "@NotBlank va @NotNull orasidagi farq nima?",
      options: [
        "Farqi yo'q",
        "@NotBlank bo'sh va probel matnni ham rad etadi",
        "@NotNull faqat raqamlar uchun",
        "@NotBlank faqat kolleksiyalar uchun",
      ],
      answer: 1,
      explain: "@NotNull faqat null qiymatni tekshiradi; @NotBlank esa null, bo'sh satr va faqat bo'shliqlardan iborat matnni ham rad etadi.",
    },
    {
      q: "Yangi resurs muvaffaqiyatli yaratilganda qaysi status qaytariladi?",
      options: ["200", "201", "204", "302"],
      answer: 1,
      explain: "201 Created yangi resurs paydo bo'lganini bildiradi; 204 odatda tanasiz muvaffaqiyatli javob uchun.",
    },
  ],
},
{
  id: 87,
  title: "Spring Data JPA va repositorylar",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "Spring Data JPA repository interfeysini yozish yetarli: implementatsiyani framework yaratadi. <code>JpaRepository</code> CRUD, sahifalash va saralashni beradi. Metod nomidan so'rov yasash (<code>findByNomContainingIgnoreCase</code>) yoki <code>@Query</code> bilan aniq JPQL yozish mumkin. Murakkabroq holatlar uchun <code>Specification</code> yoki Querydsl ishlatiladi.",
    },
    {
      type: "code",
      title: "KitobRepository.java",
      code: `import java.util.List;
import java.util.Optional;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

interface KitobRepository extends JpaRepository<Kitob, Long> {
    List<Kitob> findByNomContainingIgnoreCase(String qism);

    Optional<Kitob> findByNom(String nom);

    @Query("SELECT k FROM Kitob k WHERE k.nusxa >= :min ORDER BY k.nom")
    List<Kitob> mavjudlar(@Param("min") int min);

    Page<Kitob> findByJanr(String janr, Pageable pageable);
}

@Component
class RepositoryDemo implements CommandLineRunner {
    private final KitobRepository repo;

    RepositoryDemo(KitobRepository repo) {
        this.repo = repo;
    }

    @Override
    public void run(String... args) {
        System.out.println("Jami: " + repo.count());
        System.out.println("Qidiruv: " + repo.findByNomContainingIgnoreCase("kun").size());

        Pageable sahifaSorovi = PageRequest.of(0, 2, Sort.by("nom"));
        Page<Kitob> sahifa = repo.findByJanr("ROMAN", sahifaSorovi);
        System.out.println("Romanlar: " + sahifa.getTotalElements());
        System.out.println("Sahifada: " + sahifa.getContent().size());
        System.out.println("Sahifalar: " + sahifa.getTotalPages());
    }
}`,
      output: "Jami: 5\nQidiruv: 1\nRomanlar: 3\nSahifada: 2\nSahifalar: 2",
    },
    {
      type: "note",
      variant: "info",
      title: "Metod nomi qanday o'qiladi?",
      html: "<code>findByNomContainingIgnoreCase</code> — <b>findBy</b> + maydon <b>Nom</b> + operator <b>Containing</b> + <b>IgnoreCase</b>. Boshqa operatorlar: <code>GreaterThan</code>, <code>Between</code>, <code>OrderBy...</code>, <code>ExistsBy</code>. Nom juda uzun bo'lsa <code>@Query</code> o'qish osonroq.",
    },
    {
      type: "code",
      title: "Xizmat.java",
      code: `import jakarta.transaction.Transactional;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

interface KitobRepository extends JpaRepository<Kitob, Long> {
    @Modifying
    @Query("UPDATE Kitob k SET k.nusxa = k.nusxa - :soni " +
           "WHERE k.id = :id AND k.nusxa >= :soni")
    int kamaytir(@Param("id") Long id, @Param("soni") int soni);
}

class Xizmat {
    private final KitobRepository repo;

    Xizmat(KitobRepository repo) {
        this.repo = repo;
    }

    @Transactional
    boolean ol(Long id) {
        return repo.kamaytir(id, 1) == 1;
    }
}

@Component
class XizmatDemo implements CommandLineRunner {
    private final Xizmat xizmat;
    private final KitobRepository repo;

    XizmatDemo(Xizmat xizmat, KitobRepository repo) {
        this.xizmat = xizmat;
        this.repo = repo;
    }

    @Override
    public void run(String... args) {
        System.out.println("Birinchi: " + xizmat.ol(1L));
        System.out.println("Ikkinchi: " + xizmat.ol(1L));
        System.out.println("Qoldi: " + repo.findById(1L).orElseThrow().getNusxa());
    }
}`,
      output: "Birinchi: true\nIkkinchi: false\nQoldi: 0",
    },
    {
      type: "ul",
      items: [
        "<code>@Modifying</code> so'rov ishlashi uchun <code>@Transactional</code> kontekst kerak.",
        "Sahifalashda <code>Pageable</code> va <code>Page</code> ishlatiladi; katta jadvallarda offset chuqurlashsa sekinlashadi.",
        "Repository'ni servis qatlamidan tashqariga chiqarmang: biznes qoidalar servisda qolsin.",
        "N+1'dan qochish uchun repository metodlarida <code>@EntityGraph</code> yoki <code>JOIN FETCH</code> qo'llanadi.",
      ],
    },
  ],
  quiz: [
    {
      q: "findByNomContainingIgnoreCase metodi qanday so'rov yasaydi?",
      options: [
        "Nom bo'yicha aniq tenglik",
        "Nom ichida qism matn, katta-kichik harfga befarq",
        "Faqat birinchi harf",
        "Barcha yozuvlarni",
      ],
      answer: 1,
      explain: "Containing LIKE %...% ma'nosini beradi, IgnoreCase esa katta-kichik harfni farqlamaydi.",
    },
    {
      q: "@Modifying @Query UPDATE uchun qaysi shart muhim?",
      options: [
        "Faqat o'qish tranzaksiyasi",
        "@Transactional kontekst",
        "Pageable parametri",
        "DTO qaytarish",
      ],
      answer: 1,
      explain: "Modifikatsiya qiluvchi so'rov tranzaksiya ichida bajarilishi kerak; aks holda TransactionRequiredException chiqadi.",
    },
    {
      q: "Page.getTotalElements() nimani qaytaradi?",
      options: [
        "Joriy sahifadagi elementlar sonini",
        "Butun so'rov bo'yicha elementlar sonini",
        "Sahifalar sonini",
        "Oxirgi ID'ni",
      ],
      answer: 1,
      explain: "getTotalElements umumiy mos yozuvlar sonini, getContent esa faqat joriy sahifa elementlarini beradi.",
    },
  ],
},
{
  id: 88,
  title: "Spring Security: JWT va rollar",
  minutes: 17,
  blocks: [
    {
      type: "p",
      html: "Spring Security so'rovni filtrlar zanjiridan o'tkazadi. REST API uchun odatda <b>stateless</b> rejim tanlanadi: sessiya yo'q, har so'rovda <code>Authorization: Bearer &lt;token&gt;</code> yuboriladi. JWT token imzo bilan himoyalangan, lekin <b>shifrlanmagan</b> — unga maxfiy ma'lumot qo'ymang. Rol va huquqlar <code>hasRole</code> / <code>hasAuthority</code> bilan tekshiriladi.",
    },
    {
      type: "code",
      title: "Xavfsizlik.java",
      code: `import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
class Xavfsizlik {
    @Bean
    SecurityFilterChain filterChain(HttpSecurity http, JwtFiltr jwt) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/kitoblar/**")
                    .hasAnyRole("USER", "ADMIN")
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated())
            .addFilterBefore(jwt, UsernamePasswordAuthenticationFilter.class)
            .build();
    }

    @Bean
    PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }
}`,
      output: "GET /api/kitoblar  -> 401 Unauthorized\nGET /api/kitoblar + token -> 200 OK\nGET /api/admin + USER token -> 403 Forbidden",
      outputLabel: "So'rovlar natijasi",
    },
    {
      type: "note",
      variant: "warning",
      title: "hasRole va hasAuthority",
      html: "<code>hasRole(\"ADMIN\")</code> avtomatik <code>ROLE_</code> prefiksini qo'shadi, ya'ni <code>ROLE_ADMIN</code> authority'sini tekshiradi. Agar token'da <code>ADMIN</code> saqlansa, <code>hasAuthority(\"ADMIN\")</code> ishlatiladi. Aralashtirish eng ko'p uchraydigan 403 sababidir.",
    },
    {
      type: "code",
      title: "JwtDemo.java",
      code: `import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import javax.crypto.SecretKey;

public class JwtDemo {
    public static void main(String[] args) {
        SecretKey kalit = Keys.hmacShaKeyFor(
            "juda-uzun-maxfiy-kalit-kamida-32-bayt!".getBytes(StandardCharsets.UTF_8));

        String token = Jwts.builder()
            .subject("ali")
            .claim("rol", "ADMIN")
            .issuedAt(new Date())
            .expiration(new Date(System.currentTimeMillis() + 60_000))
            .signWith(kalit)
            .compact();

        System.out.println("Bo'laklar: " + token.split("\\\\.").length);

        var claims = Jwts.parser()
            .verifyWith(kalit)
            .build()
            .parseSignedClaims(token)
            .getPayload();

        System.out.println("Subject: " + claims.getSubject());
        System.out.println("Rol: " + claims.get("rol"));
        System.out.println("Muddati bor: " + (claims.getExpiration() != null));
    }
}`,
      output: "Bo'laklar: 3\nSubject: ali\nRol: ADMIN\nMuddati bor: true",
    },
    {
      type: "ul",
      items: [
        "JWT uch qismdan iborat: header.payload.signature; payload Base64 bilan kodlangan, shifrlanmagan.",
        "Imzo kaliti kamida 256 bit bo'lishi kerak; kalitni env yoki secret manager'da saqlang.",
        "<code>403</code> — autentifikatsiya o'tdi, lekin huquq yetarli emas; <code>401</code> — token yo'q yoki yaroqsiz.",
        "Parol hech qachon ochiq saqlanmaydi: BCrypt/Argon2 bilan hash qilinadi.",
      ],
    },
  ],
  quiz: [
    {
      q: "REST API uchun SessionCreationPolicy.STATELESS nimani anglatadi?",
      options: [
        "Har so'rovda yangi sessiya yaratiladi",
        "Server sessiya saqlamaydi, har so'rov token bilan autentifikatsiya qilinadi",
        "Sessiya faqat admin uchun",
        "Cookie o'chiriladi",
      ],
      answer: 1,
      explain: "Stateless rejimda HttpSession ishlatilmaydi; autentifikatsiya har so'rovdagi token orqali amalga oshiriladi.",
    },
    {
      q: "hasRole(\"ADMIN\") qaysi authority'ni tekshiradi?",
      options: ["ADMIN", "ROLE_ADMIN", "ROLE_", "AUTHORITY_ADMIN"],
      answer: 1,
      explain: "hasRole avtomatik ROLE_ prefiksini qo'shadi; token ichida ROLE_ADMIN bo'lishi kerak.",
    },
    {
      q: "JWT payload haqida qaysi gap to'g'ri?",
      options: [
        "Shifrlangan, o'qib bo'lmaydi",
        "Base64 kodlangan, o'qish mumkin — maxfiy ma'lumot qo'ymang",
        "Faqat imzo saqlanadi",
        "Har doim shifrlanadi",
      ],
      answer: 1,
      explain: "JWT payload Base64URL bilan kodlanadi, shuning uchun uni har kim o'qiy oladi; imzo faqat o'zgartirishni aniqlaydi.",
    },
  ],
},
{
  id: 89,
  title: "Xato boshqaruvi, actuator va monitoring",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "Yaxshi API xatoni ham <b>resurs</b> sifatida qaytaradi: barqaror format, to'g'ri status va tushunarli kod. Spring'da <code>@RestControllerAdvice</code> barcha controller'lar uchun markazlashgan xato boshqaruvini beradi. <b>Actuator</b> esa health, metrics, env kabi production endpoint'larini ochadi — ularni himoyalashni unutmang.",
    },
    {
      type: "code",
      title: "XatoBoshqaruvi.java",
      code: `import java.net.URI;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

class Topilmadi extends RuntimeException {
    Topilmadi(String xabar) {
        super(xabar);
    }
}

@RestControllerAdvice
class XatoBoshqaruvi {
    @ExceptionHandler(Topilmadi.class)
    ResponseEntity<ProblemDetail> topilmadi(Topilmadi xato) {
        ProblemDetail muammo = ProblemDetail.forStatusAndDetail(
            HttpStatus.NOT_FOUND, xato.getMessage());
        muammo.setTitle("Resurs topilmadi");
        muammo.setInstance(URI.create("/api/kitoblar/99"));
        muammo.setProperty("kod", "KITOB_TOPILMADI");
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(muammo);
    }
}`,
      output: "HTTP/1.1 404 Not Found\nContent-Type: application/problem+json\n\n{\"type\":\"about:blank\",\"title\":\"Resurs topilmadi\",\"status\":404,\"detail\":\"Kitob 99 topilmadi\",\"instance\":\"/api/kitoblar/99\",\"kod\":\"KITOB_TOPILMADI\"}",
      outputLabel: "ProblemDetail javobi",
    },
    {
      type: "note",
      variant: "tip",
      title: "Actuator endpoint'lari",
      html: "<code>/actuator/health</code> — tiriklik; <code>/actuator/metrics</code> — metrikalar; <code>/actuator/env</code> — konfiguratsiya (maxfiy qiymatlarni yashirish kerak). Production'da faqat <code>health,info,metrics,prometheus</code>ni ochib, qolganini yopish odatiy.",
    },
    {
      type: "code",
      title: "Metrikalar.java",
      code: `import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.simple.SimpleMeterRegistry;

public class Metrikalar {
    public static void main(String[] args) {
        SimpleMeterRegistry registry = new SimpleMeterRegistry();

        Counter sorovlar = Counter.builder("kitob.sorov")
            .description("Kitob endpoint'iga so'rovlar")
            .tag("tur", "get")
            .register(registry);

        sorovlar.increment();
        sorovlar.increment(2);

        System.out.println("Sanoq: " + registry.get("kitob.sorov").counter().count());
        System.out.println("Teg: "
            + registry.get("kitob.sorov").counter().getId().getTag("tur"));
        System.out.println("Metrikalar: " + registry.getMeters().size());
    }
}`,
      output: "Sanoq: 3.0\nTeg: get\nMetrikalar: 1",
    },
    {
      type: "ul",
      items: [
        "<code>ProblemDetail</code> — RFC 9457 muammo javobi; status, title, detail va custom maydonlarni beradi.",
        "Kutilmagan xatolarni logga yozing, lekin foydalanuvchiga stack trace ko'rsatmang.",
        "<b>Counter</b> faqat oshadi, <b>Gauge</b> joriy qiymatni ko'rsatadi, <b>Timer</b> davomiylikni o'lchaydi.",
        "Micrometer metrikalarni Prometheus, Datadog yoki CloudWatch formatiga birlashtiradi.",
      ],
    },
  ],
  quiz: [
    {
      q: "@RestControllerAdvice ning vazifasi nima?",
      options: [
        "Barcha controller'lar uchun xatolarni markazlashgan boshqarish",
        "Yangi controller yaratish",
        "Faqat validatsiya",
        "Faylni yuklash",
      ],
      answer: 0,
      explain: "@RestControllerAdvice va @ExceptionHandler birgalikda istisnolarni HTTP javobiga aylantiradi, kodni controller'lardan tozalaydi.",
    },
    {
      q: "Actuator'ning qaysi endpoint'i ilova tirikligini ko'rsatadi?",
      options: ["/actuator/metrics", "/actuator/health", "/actuator/env", "/actuator/loggers"],
      answer: 1,
      explain: "health endpoint UP/DOWN holatini va komponentlar salomatligini qaytaradi; Kubernetes probe'lari shundan foydalanadi.",
    },
    {
      q: "Micrometer'da faqat oshib boruvchi qiymat qaysi metrika turi?",
      options: ["Gauge", "Counter", "Timer", "DistributionSummary"],
      answer: 1,
      explain: "Counter monoton o'sadi; Gauge joriy qiymatni ko'rsatadi, Timer vaqtni o'lchaydi.",
    },
  ],
},
