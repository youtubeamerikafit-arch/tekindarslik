"use strict";

const { p, h, c, u, n, t, q } = require("./h");

module.exports = [
  {
    id: 50,
    title: "context.WithCancelCause: bekor qilish sababini saqlash",
    minutes: 16,
    desc: "Bekor qilishning sababini yo'qotmaslik uchun WithCancelCause va context.Cause bilan ishlashni o'rganamiz.",
    blocks: [
      p("Oddiy <code>context.WithCancel</code> bekor qilingan context uchun faqat <code>context.Canceled</code> xatosini beradi. Ammo amalda «nima uchun to'xtatildi?» degan savol muhim: foydalanuvchi so'rovni bekor qildimi, validatsiya xatosi chiqdimi yoki boshqa ishchi allaqachon yiqildimi? Go 1.20 dan boshlab <code>context.WithCancelCause</code> bekor qilish sababini alohida saqlaydi."),
      h("Sababni cancel paytida berish"),
      c("main.go", `package main

import (
    "context"
    "errors"
    "fmt"
    "time"
)

var ErrChecksum = errors.New("checksum xato")

func main() {
    ctx, cancel := context.WithCancelCause(context.Background())
    natija := make(chan string, 1)

    go func() {
        time.Sleep(10 * time.Millisecond)
        natija <- "hisoblandi"
    }()

    cancel(ErrChecksum)
    <-ctx.Done()

    fmt.Println("ctx.Err:", ctx.Err())
    fmt.Println("sabab:", context.Cause(ctx))
    fmt.Println("natija:", <-natija)
}`, `ctx.Err: context canceled
sabab: checksum xato
natija: hisoblandi`),
      p("Diqqat qiling: <code>ctx.Err()</code> baribir umumiy <code>context.Canceled</code> qiymatini qaytaradi. Sabab esa faqat <code>context.Cause(ctx)</code> orqali olinadi. Bu API mosligini saqlaydi: eski kod <code>errors.Is(err, context.Canceled)</code> bilan ishlashda davom etadi, yangi kod esa aniq sababni ajratadi."),
      h("Muddat tugashi ham sabab bo'lishi mumkin"),
      c("timeout.go", `package main

import (
    "context"
    "errors"
    "fmt"
    "time"
)

var ErrChecksum = errors.New("checksum xato")

func main() {
    ctx, cancel := context.WithTimeoutCause(
        context.Background(),
        5*time.Millisecond,
        ErrChecksum,
    )
    defer cancel()

    <-ctx.Done()
    fmt.Println(errors.Is(ctx.Err(), context.DeadlineExceeded))
    fmt.Println(context.Cause(ctx))
}`, `true
checksum xato`),
      n("Ota context bekor qilinganda uning sababi barcha bola contextlarga meros bo'ladi. Agar bola context o'zi avval bekor qilinsa, uning shaxsiy sababi ustuvor bo'ladi. <code>context.Cause</code> har doim birinchi bekor qilish sababini qaytaradi.", "Meros va ustuvorlik", "tip"),
    ],
    quiz: [
      q("Bekor qilingan context uchun context.Cause(ctx) odatda nimani qaytaradi?", [
        "Har doim context.Canceled ni",
        "Birinchi bekor qilish sababini",
        "Faqat deadline vaqtini",
        "Har doim nil ni",
      ], 1, "Cause birinchi cancel sababini qaytaradi; ctx.Err() esa umumiy Canceled yoki DeadlineExceeded qiymatini beradi."),
      q("Ota context WithCancelCause bilan bekor qilinsa, undan hosil qilingan bola contextda context.Cause qanday bo'ladi?", [
        "Bola o'zining shaxsiy sababini o'ylab topadi",
        "Har doim nil bo'ladi",
        "Otaning sababini meros oladi",
        "Faqat context.DeadlineExceeded bo'ladi",
      ], 2, "Bekor qilish sababi ota contextdan bolalarga tarqaladi, agar bola avvalroq o'zi bekor qilinmagan bo'lsa."),
      q("context.WithTimeoutCause da berilgan xato qachon cause sifatida saqlanadi?", [
        "Faqat cancel funksiyasi qo'lda chaqirilganda",
        "Taymer muddati tugaganda",
        "context yaratilishi bilan darhol",
        "Har doim, hatto ish muvaffaqiyatli tugasa ham",
      ], 1, "Taymer tugaganda berilgan cause saqlanadi; qo'lda cancel chaqirilsa, cancelga berilgan sabab ishlatiladi."),
    ],
  },
  {
    id: 51,
    title: "context.WithValue: faqat so'rov metadatasini uzatish",
    minutes: 14,
    desc: "Context qiymatlarini xavfsiz kalitlar bilan ishlatish va ularni dependency injection bilan aralashtirmaslikni o'rganamiz.",
    blocks: [
      p("<code>context.WithValue</code> ko'pincha noto'g'ri ishlatiladi: u konfiguratsiya, logger yoki ma'lumotlar bazasi ulanishini yashirish uchun emas, balki <b>so'rov doirasidagi metadatan</b> uchun mo'ljallangan. Request ID, autentifikatsiya qilingan foydalanuvchi yoki trace identifikatori shunday ma'lumotlarga misol."),
      h("Eksport qilinmagan kalit turi"),
      c("main.go", `package main

import (
    "context"
    "fmt"
)

type kontekstKaliti string

const sorovIDKaliti kontekstKaliti = "sorov-id"

func sorovID(ctx context.Context) string {
    if v, ok := ctx.Value(sorovIDKaliti).(string); ok {
        return v
    }
    return "noma'lum"
}

func main() {
    ctx := context.WithValue(context.Background(), sorovIDKaliti, "req-42")
    fmt.Println(sorovID(ctx))
}`, `req-42`),
      p("Kalit sifatida oddiy <code>string</code> ishlatilsa, boshqa paket ham xuddi shu nomli kalitni qo'yib, qiymatni tasodifan almashtirishi mumkin. Shuning uchun paket ichida e'lon qilingan, eksport qilinmagan maxsus tur ishlatiladi. Tashqi paket bu turdagi qiymatni yarata olmaydi."),
      h("String kalit bilan to'qnashuv"),
      c("kalit.go", `package main

import (
    "context"
    "fmt"
)

type foydalanuvchiKaliti struct{}

func main() {
    ctx := context.WithValue(context.Background(), foydalanuvchiKaliti{}, "ali")
    fmt.Println(ctx.Value(foydalanuvchiKaliti{}))
    fmt.Println(ctx.Value("foydalanuvchi"))
}`, `ali
<nil>`),
      u([
        "Context qiymati immutable zanjir hosil qiladi: har <code>WithValue</code> yangi context qaytaradi.",
        "Qiymatni majburiy deb hisoblamang; topilmasa xavfsiz default qaytaring.",
        "Katta obyektlarni contextga solmang: ular butun chaqiruv zanjiri bo'ylab yashaydi.",
        "Logger, DB pool va konfiguratsiyani aniq parametr yoki konstruktor orqali bering.",
      ]),
    ],
    quiz: [
      q("context.WithValue qanday ma'lumot uchun eng mos?", [
        "Ma'lumotlar bazasi ulanish puli",
        "So'rov doirasidagi request ID va foydalanuvchi identifikatori",
        "Butun dastur konfiguratsiyasi",
        "Logger obyektining global nusxasi",
      ], 1, "WithValue so'rov metadatasini uzatish uchun; uzoq yashovchi bog'liqliklar konstruktor yoki aniq parametr orqali beriladi."),
      q("Context kaliti sifatida nimadan foydalanish xavfsizroq?", [
        "Oddiy \"user\" stringidan",
        "Butun sonlardan",
        "Paketda e'lon qilingan eksport qilinmagan maxsus turdan",
        "Har safar yangi string yaratishdan",
      ], 2, "Eksport qilinmagan tur boshqa paketda qayta yaratilmaydi, shuning uchun kalitlar to'qnashmaydi."),
      q("DB pool kabi bog'liqlikni contextga yashirish nega tavsiya etilmaydi?", [
        "Chunki context faqat butun sonlarni saqlaydi",
        "Chunki bog'liqliklar yashirinib, API aniq bo'lmay qoladi va test qilish qiyinlashadi",
        "Chunki WithValue panic qiladi",
        "Chunki context faqat HTTP bilan ishlaydi",
      ], 1, "Bog'liqliklarni yashirish kodni o'qish va testlashni qiyinlashtiradi; ularni aniq uzatish yaxshiroq."),
    ],
  },
  {
    id: 52,
    title: "Context'ni API dizaynida to'g'ri qo'llash",
    minutes: 15,
    desc: "Contextni structda saqlash, nil uzatish va bekor qilishni boshqarish bo'yicha amaliy qoidalarni ko'rib chiqamiz.",
    blocks: [
      p("Context — chaqiruvning <b>birinchi parametri</b>, struct maydoni emas. Uni structga saqlash so'rovlar orasida eski deadline yoki bekor qilingan holatni tasodifan qayta ishlatishga olib keladi. Yaxshi API har bir uzoq amal uchun <code>ctx context.Context</code> ni birinchi argument sifatida qabul qiladi."),
      h("Aniq parametr va select"),
      c("main.go", `package main

import (
    "context"
    "fmt"
    "time"
)

func yukla(ctx context.Context, id int) (string, error) {
    select {
    case <-time.After(10 * time.Millisecond):
        return fmt.Sprintf("yozuv-%d", id), nil
    case <-ctx.Done():
        return "", ctx.Err()
    }
}

func main() {
    ctx, cancel := context.WithTimeout(context.Background(), time.Second)
    defer cancel()

    v, err := yukla(ctx, 7)
    fmt.Println(v, err)
}`, `yozuv-7 <nil>`),
      p("Bu yerda <code>ctx</code> birinchi parametr, natija esa xato bilan birga qaytadi. <code>defer cancel()</code> resurslarni bo'shatadi. Contextni struct maydoni qilib saqlash o'rniga har bir metod uni tashqaridan oladi: shunda deadline so'rovga xos bo'ladi."),
      h("So'rovdan keyingi ishni ajratish"),
      c("detach.go", `package main

import (
    "context"
    "fmt"
)

func main() {
    ctx, cancel := context.WithCancel(context.Background())
    bg := context.WithoutCancel(ctx)

    cancel()
    fmt.Println("bg:", bg.Err())
    fmt.Println("ctx:", ctx.Err())
}`, `bg: <nil>
ctx: context canceled`),
      t(["Vaziyat", "Tavsiya"], [
        ["Struct maydonida context", "Saqlanmaydi; har metod parametrida beriladi"],
        ["nil context", "Hech qachon uzatilmaydi; o'rniga context.Background()"],
        ["HTTP handler", "r.Context() dan hosil qilinadi, yangisi yaratilmaydi"],
        ["Javob yuborilgandan keyingi audit", "context.WithoutCancel bilan ajratiladi"],
      ]),
    ],
    quiz: [
      q("Context odatda funksiya imzosining qayerida turadi?", [
        "Oxirgi qaytariladigan qiymat sifatida",
        "Birinchi parametr sifatida",
        "Structning birinchi maydoni sifatida",
        "Global o'zgaruvchi sifatida",
      ], 1, "Go an'anasi bo'yicha ctx birinchi parametr bo'ladi; bu chaqiruv zanjirini aniq ko'rsatadi."),
      q("Contextni struct maydonida saqlashning asosiy xavfi nima?", [
        "Struct hajmi kattalashadi",
        "Eski deadline va bekor qilish holati keyingi so'rovlarga o'tib ketishi mumkin",
        "Kompilyator buni taqiqlaydi",
        "Faqat HTTP serverda ishlaydi",
      ], 1, "Struct uzoq yashasa, undagi context eskirib qoladi va yangi so'rovlarga noto'g'ri cheklov qo'llaydi."),
      q("context.WithoutCancel qachon foydali?", [
        "So'rov bekor qilinsa ham tugallanishi kerak bo'lgan audit yozuvi uchun",
        "Har bir SQL so'rovda deadline bekor qilish uchun",
        "Context qiymatlarini butunlay o'chirish uchun",
        "Goroutinani darhol to'xtatish uchun",
      ], 0, "WithoutCancel bekor qilish va deadline belgilarini olib tashlaydi, lekin qiymatlarni saqlaydi; javobdan keyingi ishlar uchun mos."),
    ],
  },
  {
    id: 53,
    title: "Graceful shutdown: signal, HTTP server va fon ishchilari",
    minutes: 17,
    desc: "Server ishlayotgan so'rovlarni yo'qotmasdan to'xtash va fon goroutinlarini tartibli yakunlashni o'rganamiz.",
    blocks: [
      p("Ishlab chiqarishda <code>kill -9</code> yoki konteyner to'xtashi bir zumda ulanishlarni uzadi. Graceful shutdown avval yangi so'rovlarni qabul qilishni to'xtatadi, keyin mavjud so'rovlarga tugash uchun vaqt beradi. Fon ishchilari ham bekor qilish signalini kuzatishi shart."),
      h("signal.NotifyContext va Server.Shutdown"),
      c("main.go", `package main

import (
    "context"
    "errors"
    "fmt"
    "net/http"
    "os"
    "os/signal"
    "syscall"
    "time"
)

func main() {
    ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
    defer stop()

    srv := &http.Server{
        Addr:              ":8080",
        Handler:           http.NewServeMux(),
        ReadHeaderTimeout: 5 * time.Second,
    }

    go func() {
        if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
            fmt.Println("server xatosi:", err)
        }
    }()

    <-ctx.Done()
    fmt.Println("signal qabul qilindi")

    shutdownCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()
    if err := srv.Shutdown(shutdownCtx); err != nil {
        fmt.Println("shutdown:", err)
    }
    fmt.Println("server to'xtadi")
}`, `signal qabul qilindi
server to'xtadi`),
      p("<code>Shutdown</code> yangi ulanishlarni to'xtatadi va mavjudlarini kutadi. Agar 5 soniya ichida tugamasalar, u xato qaytaradi. Shundan keyin <code>Close</code> bilan majburiy yopish mumkin. <code>ReadHeaderTimeout</code> sekin header hujumlaridan himoyalaydi."),
      h("Fon ishchilarini kutish"),
      c("workers.go", `package main

import (
    "context"
    "fmt"
    "sync"
    "time"
)

func main() {
    ctx, cancel := context.WithCancel(context.Background())
    var wg sync.WaitGroup

    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            <-ctx.Done()
        }()
    }

    time.Sleep(10 * time.Millisecond)
    cancel()
    wg.Wait()
    fmt.Println("barcha ishchilar to'xtadi")
}`, `barcha ishchilar to'xtadi`),
      u([
        "Avval signalni qabul qiling, keyin shutdownni boshlang.",
        "Shutdown uchun alohida timeout context yarating.",
        "Fon ishchilari <code>ctx.Done()</code> ni muntazam tekshirsin.",
        "WebSocket kabi hijacked ulanishlar uchun <code>RegisterOnShutdown</code> ishlatiladi.",
        "Konteynerda SIGTERM yuborilishi uchun yetarli <code>terminationGracePeriodSeconds</code> bering.",
      ]),
      n("HTTP server to'xtagani bilan ma'lumotlar bazasi ulanishi yoki fayl yozuvchisi avtomatik yopilmaydi. Ularni ham alohida tartibda yoping: avval yangi ishni to'xtatish, keyin navbatni bo'shatish, oxirida resurslarni yopish.", "Resurslarni tartib bilan yoping", "warning"),
    ],
    quiz: [
      q("http.Server.Shutdown chaqirilganda nima sodir bo'ladi?", [
        "Barcha faol ulanishlar darhol uziladi",
        "Yangi ulanishlar to'xtatiladi, mavjudlari tugashi kutiladi",
        "Faqat TLS sertifikati yangilanadi",
        "Server panikaga tushadi",
      ], 1, "Shutdown yangi so'rovlarni qabul qilmaydi va mavjud so'rovlarga tugash imkonini beradi."),
      q("signal.NotifyContext qaytargan stop funksiyasining vazifasi nima?", [
        "Serverni majburiy o'chirish",
        "Signal obunasini bekor qilib, resursni bo'shatish",
        "Yangi gorutina yaratish",
        "Context deadline ni uzaytirish",
      ], 1, "stop signal obunasini to'xtatadi va contextni bekor qiladi; uni defer bilan chaqirish kerak."),
      q("Fon ishchilarini graceful shutdown qilish uchun eng muhim shart nima?", [
        "Ular cheksiz tsiklda ishlashi",
        "Ular context bekor qilishini kuzatishi va WaitGroup bilan kutilishi",
        "Har bir ishchi alohida process bo'lishi",
        "Server.Close avtomatik ularni to'xtatishi",
      ], 1, "Fon goroutinlari ctx.Done ni tekshirishi, ularni WaitGroup yoki boshqa sinxronizatsiya bilan kutish kerak."),
    ],
  },
  {
    id: 54,
    title: "errgroup: xatolar, bekor qilish va cheklangan parallellik",
    minutes: 17,
    desc: "Bir nechta gorutinani bitta xato siyosati ostida boshqarish uchun errgroupdan foydalanamiz.",
    blocks: [
      p("<code>WaitGroup</code> faqat tugashni kutadi, xatoni qaytarmaydi. <code>errgroup</code> esa birinchi xatoni saqlaydi, unga bog'langan contextni bekor qiladi va ixtiyoriy ravishda parallellik chegarasini qo'yadi. Bu bir nechta mustaqil so'rov yoki faylni parallel yuklashda juda qulay."),
      h("Birinchi xato butun guruhni to'xtatadi"),
      c("main.go", `package main

import (
    "context"
    "errors"
    "fmt"
    "time"

    "golang.org/x/sync/errgroup"
)

func main() {
    g, ctx := errgroup.WithContext(context.Background())
    g.SetLimit(2)

    for i := 1; i <= 3; i++ {
        i := i
        g.Go(func() error {
            if i == 2 {
                return errors.New("vazifa 2 yiqildi")
            }
            time.Sleep(20 * time.Millisecond)
            return nil
        })
    }

    err := g.Wait()
    fmt.Println("xato:", err)
    fmt.Println("ctx:", ctx.Err())
}`, `xato: vazifa 2 yiqildi
ctx: context canceled`),
      p("<code>errgroup.WithContext</code> qaytargan context birinchi xatodan keyin bekor qilinadi. Shuning uchun har bir vazifa tarmoq yoki disk amallarida shu contextni ishlatishi kerak; aks holda bekor qilish amalda hech narsani to'xtatmaydi."),
      h("Natijalarni indeks bo'yicha yig'ish"),
      c("results.go", `package main

import (
    "fmt"

    "golang.org/x/sync/errgroup"
)

func main() {
    var g errgroup.Group
    g.SetLimit(4)
    natijalar := make([]int, 4)

    for i := 0; i < 4; i++ {
        i := i
        g.Go(func() error {
            natijalar[i] = (i + 1) * (i + 1)
            return nil
        })
    }

    if err := g.Wait(); err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(natijalar)
}`, `[1 4 9 16]`),
      n("Har bir gorutina alohida indeksga yozsa, mutex shart emas: slice elementlari mustaqil xotira joylarida. Lekin bir xil map yoki hisoblagichga yozish race detector tomonidan xato deb topiladi. <code>SetLimit(0)</code> hech qanday vazifani boshlamaydi va deadlock beradi.", "Race va limit tuzog'i", "warning"),
    ],
    quiz: [
      q("errgroup.WithContext birinchi xatodan keyin nima qiladi?", [
        "Xatoni e'tiborsiz qoldiradi",
        "Qaytarilgan contextni bekor qiladi",
        "Barcha gorutinalarni majburan o'ldiradi",
        "Yangi gorutina ochadi",
      ], 1, "Birinchi xato guruh contextini bekor qiladi; vazifalar shu signalni o'zlari kuzatishi kerak."),
      q("errgroup.SetLimit(0) qanday oqibat beradi?", [
        "Cheksiz parallellik yoqiladi",
        "Barcha vazifalar ketma-ket ishlaydi",
        "Hech bir gorutina ishga tushmaydi va kutish osilib qoladi",
        "Xato darhol qaytadi",
      ], 2, "Limit 0 da slot hech qachon bo'shamaydi, shuning uchun Go chaqiruvlari bloklanadi. Manfiy qiymat cheklovni olib tashlaydi."),
      q("errgroup.Wait qaysi xatoni qaytaradi?", [
        "Barcha xatolarning birlashmasini",
        "Birinchi qaytgan nil bo'lmagan xatoni",
        "Faqat context xatosini",
        "Har doim nil ni",
      ], 1, "Wait birinchi nil bo'lmagan xatoni qaytaradi; qolgan xatolar yo'qoladi, shuning uchun ularni alohida loglash kerak bo'lishi mumkin."),
    ],
  },
  {
    id: 55,
    title: "singleflight: bir xil ishni takrorlamaslik",
    minutes: 16,
    desc: "Bir vaqtda kelgan bir xil so'rovlarni bitta hisobga birlashtirib, kesh stampede va ortiqcha yukni kamaytiramiz.",
    blocks: [
      p("Keshda qiymat yo'q bo'lsa, bir vaqtda kelgan yuzlab so'rov bir xil qimmat hisobni parallel boshlashi mumkin. Bu <b>cache stampede</b> deyiladi. <code>singleflight</code> bir xil kalit bo'yicha faqat bitta bajarishni boshlaydi, qolgan chaqiruvchilarga tayyor natijani qaytaradi."),
      h("Bir kalit, bitta hisoblash"),
      c("main.go", `package main

import (
    "fmt"
    "sync"
    "time"

    "golang.org/x/sync/singleflight"
)

func main() {
    var g singleflight.Group
    var wg sync.WaitGroup
    natijalar := make(chan int, 5)

    for i := 0; i < 5; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            v, _, _ := g.Do("hisob", func() (interface{}, error) {
                fmt.Println("faqat bir marta hisoblandi")
                time.Sleep(20 * time.Millisecond)
                return 42, nil
            })
            natijalar <- v.(int)
        }()
    }

    wg.Wait()
    close(natijalar)

    yigindi := 0
    for v := range natijalar {
        yigindi += v
    }
    fmt.Println("yig'indi:", yigindi)
}`, `faqat bir marta hisoblandi
yig'indi: 210`),
      p("Besh chaqiruvchi ham bir xil natijani oldi, lekin qimmat funksiya bir marta bajarildi. <code>singleflight</code> natijani o'zi keshlab qolmaydi: keyingi so'rovlar uchun TTL kesh kerak. U faqat bir vaqtda bajarilayotgan ishlarni birlashtiradi."),
      h("Kutishni context bilan cheklash"),
      c("doch.go", `package main

import (
    "context"
    "fmt"
    "time"

    "golang.org/x/sync/singleflight"
)

func main() {
    var g singleflight.Group
    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Millisecond)
    defer cancel()

    ch := g.DoChan("sekin", func() (interface{}, error) {
        time.Sleep(80 * time.Millisecond)
        return 7, nil
    })

    select {
    case r := <-ch:
        fmt.Println("natija:", r.Val)
    case <-ctx.Done():
        fmt.Println("kutish bekor qilindi")
    }
}`, `kutish bekor qilindi`),
      n("Chaqiruvchi kutishdan voz kechsa ham, singleflight ichidagi funksiya davom etadi. Shuning uchun uzoq ishni cheksiz qoldirmang: ichkarida ham context yoki tashqi deadline bo'lishi kerak. Xato natijani darhol tashlash uchun <code>Forget(kalit)</code> ishlatiladi.", "Bekor qilish ishni to'xtatmaydi", "warning"),
    ],
    quiz: [
      q("singleflight asosan qaysi muammoni yechadi?", [
        "Ma'lumotlar bazasi sxemasini migratsiya qilishni",
        "Bir vaqtda kelgan bir xil so'rovlarning takroriy qimmat ishini",
        "Gorutinalar orasidagi data race ni",
        "TLS sertifikatini yangilashni",
      ], 1, "Bir xil kalit bo'yicha parallel chaqiruvlar bitta bajarishga birlashtiriladi."),
      q("DoChan natijasini kutish context bilan bekor qilinsa, ichki funksiya haqida nima to'g'ri?", [
        "U avtomatik to'xtaydi",
        "U davom etadi, chunki singleflight ishni bekor qilmaydi",
        "U darhol panikaga tushadi",
        "Natija barcha chaqiruvchilardan o'chiriladi",
      ], 1, "singleflight faqat natijani ulashadi; ichki ishni bekor qilish uchun unga alohida context bering."),
      q("singleflight natijani doimiy keshlab qo'yadimi?", [
        "Ha, TTL avtomatik qo'llanadi",
        "Yo'q, u faqat bir vaqtda bajarilayotgan chaqiruvlarni birlashtiradi",
        "Faqat xatolarni keshlaydi",
        "Ha, lekin faqat HTTP handlerlarda",
      ], 1, "singleflight doimiy kesh emas; takroriy so'rovlar uchun Redis yoki xotiradagi TTL kesh kerak."),
    ],
  },
  {
    id: 56,
    title: "select chuqur: nil kanal, prioritet va taymerlar",
    minutes: 16,
    desc: "selectning kam ma'lum bo'lgan xatti-harakatlarini o'rganib, deadlock va tasodifiy tanlovni boshqaramiz.",
    blocks: [
      p("<code>select</code> bir vaqtda bir nechta kanal amalini kutadi. Bir nechta case tayyor bo'lsa, Go tasodifiy birini tanlaydi. <code>nil</code> kanaldagi case hech qachon tayyor bo'lmaydi — bu xususiyat kanalni vaqtincha o'chirish uchun ishlatiladi."),
      h("Yopilgan kanalni nil qilish"),
      c("main.go", `package main

import "fmt"

func main() {
    jobs := make(chan int, 3)
    for i := 1; i <= 3; i++ {
        jobs <- i
    }
    close(jobs)

    var stop chan struct{}
    for {
        select {
        case v, ok := <-jobs:
            if !ok {
                jobs = nil
                fmt.Println("jobs yopildi")
            } else {
                fmt.Println("job:", v)
            }
        case <-stop:
            fmt.Println("stop")
        }
        if jobs == nil {
            break
        }
    }
    fmt.Println("tugadi")
}`, `job: 1
job: 2
job: 3
jobs yopildi
tugadi`),
      p("Yopilgan kanaldan o'qish darhol nol qiymat va <code>ok == false</code> qaytaradi. Agar uni nil qilmasak, tsikl cheksiz aylanadi. <code>jobs = nil</code> dan keyin bu case o'chadi; <code>stop</code> ham nil bo'lgani uchun select faqat mavjud holatlarni kutadi."),
      h("Prioritet tekshiruv"),
      c("priority.go", `package main

import "fmt"

func main() {
    stop := make(chan struct{})
    ish := make(chan int, 1)
    ish <- 5

    select {
    case <-stop:
        fmt.Println("stop allaqachon yopilgan")
    default:
        fmt.Println("stop hali yo'q")
    }

    close(stop)
    select {
    case <-stop:
        fmt.Println("ish bekor qilindi")
    case v := <-ish:
        fmt.Println("ish:", v)
    }
}`, `stop hali yo'q
ish bekor qilindi`),
      u([
        "Ikki case bir vaqtda tayyor bo'lsa, tanlov tartibi kafolatlanmaydi.",
        "Bekor qilishni birinchi tekshirish uchun oldiga <code>select { case &lt;-done: ... default: }</code> qo'ying.",
        "Tsiklda <code>time.After</code> ishlatish har iteratsiyada yangi taymer yaratadi; <code>time.NewTimer</code> va <code>Reset</code> tejamliroq.",
        "Nil kanalga yuborish yoki undan o'qish abadiy bloklanadi.",
      ]),
    ],
    quiz: [
      q("select ichida nil kanal case'i qanday ishlaydi?", [
        "Darhol nol qiymat qaytaradi",
        "Hech qachon tanlanmaydi va bloklanadi",
        "Panika chaqiradi",
        "Kanal avtomatik yaratiladi",
      ], 1, "Nil kanaldagi case doim tayyor emas; shu sababli u amalda o'chirilgan bo'ladi."),
      q("Bir nechta select case bir vaqtda tayyor bo'lsa, qaysi biri bajariladi?", [
        "Birinchi yozilgani",
        "Oxirgi yozilgani",
        "Tasodifiy tanlangan bittasi",
        "Barchasi ketma-ket",
      ], 2, "Go spetsifikatsiyasi tayyor case'lardan tasodifiy birini tanlaydi; tartibga tayanib bo'lmaydi."),
      q("Tsikl ichida time.After ishlatishning kamchiligi nima?", [
        "U har safar yangi taymer yaratadi va erta bo'shatilmasligi mumkin",
        "U faqat bir marta ishlaydi",
        "U kanalni yopadi",
        "U gorutinani bloklaydi",
      ], 0, "Har iteratsiyada yangi taymer yaratiladi; uzoq tsikllarda time.NewTimer va Reset afzal."),
    ],
  },
  {
    id: 57,
    title: "Kanal egaligi: fan-in, or-done va yopish qoidalari",
    minutes: 17,
    desc: "Kanallarni kim yopishi, fan-in paytida xavfsiz birlashtirish va bekor qilishni uzatishni o'rganamiz.",
    blocks: [
      p("Kanallar bilan bog'liq xatolarning aksariyati egalik qoidasini buzishdan kelib chiqadi: <b>kanalni faqat yuboruvchi yopadi</b>, qabul qiluvchi hech qachon yopmaydi. Bir nechta yuboruvchi bo'lsa, ularning barchasi tugaganini WaitGroup bilan kuzatib, alohida gorutina kanalni yopadi."),
      h("Fan-in: bir nechta kanalni birlashtirish"),
      c("main.go", `package main

import (
    "fmt"
    "sort"
    "sync"
)

func yarat(qiymatlar ...int) <-chan int {
    ch := make(chan int)
    go func() {
        defer close(ch)
        for _, v := range qiymatlar {
            ch <- v
        }
    }()
    return ch
}

func birlashtir(kanallar ...<-chan int) <-chan int {
    out := make(chan int)
    var wg sync.WaitGroup
    wg.Add(len(kanallar))
    for _, ch := range kanallar {
        ch := ch
        go func() {
            defer wg.Done()
            for v := range ch {
                out <- v
            }
        }()
    }
    go func() {
        wg.Wait()
        close(out)
    }()
    return out
}

func main() {
    out := birlashtir(yarat(1, 2, 3), yarat(10, 20))
    var hammasi []int
    for v := range out {
        hammasi = append(hammasi, v)
    }
    sort.Ints(hammasi)
    fmt.Println(hammasi)
}`, `[1 2 3 10 20]`),
      p("Har bir kirish kanali o'z gorutinasida o'qiladi. Ular tugagach, WaitGroup yopuvchi gorutinani ishga tushiradi. Natija tartibi kafolatlanmaganligi uchun uni saralaymiz; kanal tartibini saqlash kerak bo'lsa, boshqa dizayn tanlanadi."),
      h("or-done: bekor qilishni uzatish"),
      c("ordone.go", `package main

import (
    "context"
    "fmt"
)

func orDone(ctx context.Context, ch <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        defer close(out)
        for {
            select {
            case <-ctx.Done():
                return
            case v, ok := <-ch:
                if !ok {
                    return
                }
                select {
                case out <- v:
                case <-ctx.Done():
                    return
                }
            }
        }
    }()
    return out
}

func main() {
    ctx, cancel := context.WithCancel(context.Background())
    ch := make(chan int)
    go func() {
        defer close(ch)
        for i := 1; i <= 5; i++ {
            ch <- i
        }
    }()

    out := orDone(ctx, ch)
    fmt.Println(<-out)
    fmt.Println(<-out)
    cancel()
    fmt.Println("bekor qilindi")
}`, `1
2
bekor qilindi`),
      n("orDone qabul qiluvchini bekor qilishdan himoya qiladi, lekin yuqoridagi yuboruvchi kanalga yozishda davom etsa, u bloklanib qolishi mumkin. Shuning uchun bekor qilish signalini butun zanjir bo'ylab uzating yoki yuboruvchida ham <code>select { case ch &lt;- v: case &lt;-ctx.Done(): }</code> ishlatilsin.", "Yuqoriga ham signal bering", "warning"),
    ],
    quiz: [
      q("Kanallar bo'yicha asosiy egalik qoidasi qanday?", [
        "Qabul qiluvchi kanalni yopadi",
        "Yuboruvchi kanalni yopadi",
        "Ikkalasi ham istalgan paytda yopadi",
        "Kanalni faqat main funksiyasi yopadi",
      ], 1, "Kanalni faqat yuboruvchi tomon yopadi; qabul qiluvchi yopsa, yuboruvchi panikaga tushishi mumkin."),
      q("Bir nechta yuboruvchi bor fan-in da kanalni kim yopadi?", [
        "Birinchi tugagan yuboruvchi",
        "Qabul qiluvchi tsikl tugagach",
        "Barcha yuboruvchilar tugaganini WaitGroup bilan kutgan alohida gorutina",
        "Hech kim, kanal GC tomonidan yopiladi",
      ], 2, "Barcha yuboruvchilar tugagach, kuzatuvchi gorutina natija kanalini yopadi."),
      q("orDone o'ramining asosiy vazifasi nima?", [
        "Kanaldagi qiymatlarni saralash",
        "Bekor qilish signalini o'qish vaqtida ham hisobga olish",
        "Kanal hajmini cheksiz qilish",
        "Xatolarni qayta urinish",
      ], 1, "orDone ctx.Done ni kuzatadi va bekor qilinsa chiqish kanalini yopadi."),
    ],
  },
  {
    id: 58,
    title: "Backpressure va gorutina oqishlarini aniqlash",
    minutes: 16,
    desc: "Cheksiz gorutina yaratishning oldini olish, semaphore bilan bosimni boshqarish va oqishlarni topish usullarini ko'rib chiqamiz.",
    blocks: [
      p("Har bir so'rov uchun cheksiz gorutina ochish xotira va scheduler uchun xavfli. <b>Backpressure</b> — ishlab chiqaruvchini iste'molchi tezligiga moslashga majbur qilish. Bufersiz kanal yoki cheklangan semaphore buni tabiiy ta'minlaydi."),
      h("Semaphore bilan parallellikni cheklash"),
      c("main.go", `package main

import (
    "fmt"
    "sync"
    "time"
)

func main() {
    sem := make(chan struct{}, 2)
    var wg sync.WaitGroup

    for i := 1; i <= 5; i++ {
        sem <- struct{}{}
        wg.Add(1)
        go func() {
            defer wg.Done()
            defer func() { <-sem }()
            time.Sleep(10 * time.Millisecond)
        }()
    }

    wg.Wait()
    fmt.Println("5 ta ish 2 ta slot bilan tugadi")
}`, `5 ta ish 2 ta slot bilan tugadi`),
      p("Asosiy gorutina slot olishda bloklanadi, shuning uchun bir vaqtda ko'pi bilan ikkita ishchi ishlaydi. Bu oddiy va ishonchli backpressure. Lekin slotni gorutina ichida emas, tashqarida olish muhim: aks holda barcha gorutinalar allaqachon yaratilgan bo'ladi."),
      h("Bloklangan gorutinani topish"),
      c("leak.go", `package main

import (
    "fmt"
    "runtime"
    "time"
)

func main() {
    before := runtime.NumGoroutine()

    ch := make(chan int)
    go func() { ch <- 1 }()
    time.Sleep(20 * time.Millisecond)

    fmt.Println("buzilgan o'sish:", runtime.NumGoroutine()-before)
    fmt.Println("buffered sig'im:", cap(make(chan int, 3)))
}`, `buzilgan o'sish: 1
buffered sig'im: 3`),
      t(["Belgi", "Sabab", "Yechim"], [
        ["Gorutina soni o'sib boradi", "Yuborish yoki qabul qilish abadiy kutmoqda", "Bekor qilish va buferli kanal"],
        ["Xotira doimiy oshadi", "Natijalar yig'ilib, iste'molchi sekin", "Cheklangan navbat va backpressure"],
        ["Deadlock", "Hamma gorutina bir-birini kutmoqda", "Kanal egaligi va select"],
      ]),
    ],
    quiz: [
      q("Backpressure nimani anglatadi?", [
        "Ishlab chiqaruvchini iste'molchi tezligiga moslashga majbur qilishni",
        "Barcha gorutinalarni birdan ishga tushirishni",
        "Kanallarni butunlay olib tashlashni",
        "Xotirani cheksiz ko'paytirishni",
      ], 0, "Backpressure orqali tez ishlab chiqaruvchi sekin iste'molchi bilan moslashadi va resurslar tugab qolmaydi."),
      q("Semaphore slotini gorutina ichida olishning kamchiligi nima?", [
        "Semaphore ishlamaydi",
        "Barcha gorutinalar oldindan yaratilib, resurs sarfi oshadi",
        "Kanal avtomatik yopiladi",
        "Deadlock albatta yuz beradi",
      ], 1, "Slotni tashqarida olish gorutina yaratishdan oldin bosimni ushlab turadi."),
      q("Yuboruvchi buffered kanalga yozayotganda qabul qiluvchi yo'q bo'lsa nima bo'ladi?", [
        "Yozuv bufer to'lguncha davom etadi, keyin bloklanadi",
        "Yozuv darhol panika beradi",
        "Kanal avtomatik yopiladi",
        "Qiymat tashlab yuboriladi",
      ], 0, "Bufer bo'sh joyi bo'lsa yozuv davom etadi; to'lgach yuboruvchi bloklanadi."),
    ],
  },
  {
    id: 59,
    title: "Benchmark anatomiyasi: b.N, allokatsiya va benchstat",
    minutes: 15,
    desc: "Ishonchli benchmark yozish, allokatsiyalarni o'lchash va ikki versiyani statistik taqqoslashni o'rganamiz.",
    blocks: [
      p("Benchmark — «tezroq ko'rinadi» degan taassurot emas, takrorlanadigan o'lchov. <code>testing.B</code> funksiyani <code>b.N</code> marta chaqiradi va vaqtni o'lchaydi. Tayyorlash ishlari <code>b.ResetTimer</code> dan oldin bajarilishi kerak, aks holda ular ham o'lchovga qo'shiladi."),
      h("Allokatsiyani ham o'lchash"),
      c("bench_test.go", `package bench

import (
    "strings"
    "testing"
)

func Birlashtir(qismlar []string) string {
    var b strings.Builder
    for _, q := range qismlar {
        b.WriteString(q)
    }
    return b.String()
}

func BenchmarkBirlashtir(b *testing.B) {
    qismlar := []string{"go", " ", "test", " ", "bench"}
    b.ReportAllocs()
    b.ResetTimer()
    for i := 0; i < b.N; i++ {
        _ = Birlashtir(qismlar)
    }
}`, `goos: linux
goarch: amd64
pkg: example/bench
cpu: Intel Core i7
BenchmarkBirlashtir-8   4821342   248.3 ns/op   48 B/op   1 allocs/op
PASS
ok      example/bench   1.453s`),
      p("Natijadagi <code>1 allocs/op</code> har chaqiruvda bitta allokatsiya bo'lishini bildiradi. <code>b.ReportAllocs()</code> yozilmasa, xotira statistikasi chiqmasligi mumkin. Natijalar bir necha marta ishga tushirilib, <code>benchstat</code> bilan taqqoslanadi."),
      u([
        "Kirish ma'lumotlarini benchmarkdan tashqarida tayyorlang.",
        "Global natijani <code>b.SetBytes</code> yoki paket darajasidagi o'zgaruvchiga saqlang, aks holda kompilyator ishni olib tashlashi mumkin.",
        "Bir benchmarkda bir necha xil ishni aralashtirmang; <code>b.Run</code> bilan kichik variantlarga bo'ling.",
        "Bir martalik o'lchovga ishonmang: <code>-count=5</code> va benchstat ishlatilsin.",
      ]),
      c("taqqoslash.sh", `go test -bench=Birlashtir -benchmem -count=5 ./... > eski.txt
# kodni optimallashtiring
go test -bench=Birlashtir -benchmem -count=5 ./... > yangi.txt
benchstat eski.txt yangi.txt`, `goos: linux
goarch: amd64
                 │   eski.txt    │              yangi.txt              │
                 │    sec/op     │   sec/op     vs base                │
Birlashtir-8        248.3n ± 2%    41.7n ± 1%  -83.21% (p=0.002 n=5)
                 │    B/op       │    B/op      vs base                │
Birlashtir-8        48.00 ± 0%     0.00 ± 0%  -100.00% (p=0.002 n=5)`, "bash"),
      n("Benchmark paytida fon jarayonlari, CPU chastotasi va GC natijaga ta'sir qiladi. Natijani faqat bir xil muhitda taqqoslang. <code>-benchmem</code> qo'shimcha allokatsiya statistikasini beradi, <code>-race</code> esa benchmarkni sezilarli sekinlashtiradi.", "O'lchov muhitini bir xil tuting", "tip"),
    ],
    quiz: [
      q("testing.B dagi b.N nimani bildiradi?", [
        "Benchmark necha sekund davom etishini",
        "Funksiya necha marta bajarilishini",
        "Nechta gorutina ishlatilishini",
        "Nechta allokatsiya ruxsat etilganini",
      ], 1, "testing paketi b.N ni moslashtirib, barqaror o'lchov olish uchun funksiyani shuncha marta chaqiradi."),
      q("b.ResetTimer qachon chaqirilishi kerak?", [
        "Har bir iteratsiya boshida",
        "Qimmat tayyorgarlikdan keyin, o'lchov boshlanishidan oldin",
        "Benchmark oxirida",
        "Faqat xato bo'lganda",
      ], 1, "ResetTimer tayyorgarlik vaqtini hisobdan chiqaradi; uni tayyorgarlikdan keyin chaqirish kerak."),
      q("benchstat nimani baholaydi?", [
        "Kod sintaksisini",
        "Ikki benchmark to'plami orasidagi farqning statistik ahamiyatini",
        "Test qamrovini",
        "Xotira oqishini",
      ], 1, "benchstat o'rtacha vaqt va allokatsiyalarni taqqoslab, farq tasodifiy yoki haqiqiy ekanini ko'rsatadi."),
    ],
  },
];
