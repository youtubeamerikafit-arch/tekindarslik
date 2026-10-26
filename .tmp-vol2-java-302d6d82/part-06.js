{
  id: 75,
  title: "Buffer, Channel va Selector",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "Java NIO uch asosiy tushunchaga tayanadi: <b>Buffer</b> (ma'lumot konteyneri), <b>Channel</b> (buffer bilan ishlaydigan ikki tomonlama oqim) va <b>Selector</b> (bir nechta kanalni bitta threadda kuzatish). Buffer'da <code>position</code>, <code>limit</code> va <code>capacity</code> bor. Yozgandan keyin <code>flip()</code> qilmasangiz, o'qish noto'g'ri bo'ladi — bu NIO'dagi eng ko'p uchraydigan xato.",
    },
    {
      type: "code",
      title: "BufferDemo.java",
      code: `import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;

public class BufferDemo {
    public static void main(String[] args) {
        ByteBuffer buffer = ByteBuffer.allocate(32);
        buffer.put("salom".getBytes(StandardCharsets.UTF_8));

        System.out.println("position: " + buffer.position());
        System.out.println("limit: " + buffer.limit());

        buffer.flip();
        byte[] baytlar = new byte[buffer.remaining()];
        buffer.get(baytlar);

        System.out.println("Matn: " + new String(baytlar, StandardCharsets.UTF_8));
        System.out.println("Qoldi: " + buffer.remaining());

        buffer.clear();
        System.out.println("Tozalandi: " + buffer.position() + "/" + buffer.limit());
    }
}`,
      output: "position: 5\nlimit: 32\nMatn: salom\nQoldi: 0\nTozalandi: 0/32",
    },
    {
      type: "note",
      variant: "info",
      title: "flip, clear va rewind",
      html: "<code>flip()</code> limitni position'ga qo'yib, position'ni 0 qiladi — yozish rejimidan o'qishga o'tadi. <code>clear()</code> position'ni 0, limitni capacity qiladi, lekin ma'lumotni o'chirmaydi. <code>rewind()</code> esa limitni saqlab, position'ni 0 qiladi — qayta o'qish uchun.",
    },
    {
      type: "code",
      title: "ChannelDemo.java",
      code: `import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;

public class ChannelDemo {
    public static void main(String[] args) throws Exception {
        Path fayl = Path.of("nima.txt");
        Files.writeString(fayl, "Java NIO", StandardCharsets.UTF_8);

        try (FileChannel kanal = FileChannel.open(fayl, StandardOpenOption.READ)) {
            ByteBuffer buffer = ByteBuffer.allocate(16);
            int oqildi = kanal.read(buffer);
            buffer.flip();
            String matn = StandardCharsets.UTF_8.decode(buffer).toString();

            System.out.println("O'qildi: " + oqildi);
            System.out.println("Matn: " + matn);
        }

        Files.delete(fayl);
        System.out.println("Fayl o'chirildi: " + Files.notExists(fayl));
    }
}`,
      output: "O'qildi: 8\nMatn: Java NIO\nFayl o'chirildi: true",
    },
    {
      type: "ul",
      items: [
        "Selector bitta threadda minglab ulanishni kuzatish imkonini beradi — event loop shu asosda quriladi.",
        "<code>select()</code> tayyor kanallarni qaytaradi; <code>selectedKeys()</code> to'plamini har safar tozalash kerak.",
        "Heap buffer <code>allocate</code>, to'g'ridan-to'g'ri (direct) buffer <code>allocateDirect</code> bilan yaratiladi — I/O uchun tezroq, lekin qimmatroq.",
        "Kanal <code>configureBlocking(false)</code> qilinmasa Selector bilan ishlamaydi.",
      ],
    },
  ],
  quiz: [
    {
      q: "Buffer'ga yozgandan keyin o'qish uchun qaysi metod chaqiriladi?",
      options: ["clear()", "flip()", "rewind()", "compact()"],
      answer: 1,
      explain: "flip() limitni joriy position'ga o'rnatadi va position'ni 0 qiladi; shundan keyin buffer'dan o'qish mumkin.",
    },
    {
      q: "Selector qanday vazifani bajaradi?",
      options: [
        "Faylni siqadi",
        "Bir nechta kanalning tayyorligini bitta threadda kuzatadi",
        "Ma'lumotni shifrlaydi",
        "Thread hovuzini yaratadi",
      ],
      answer: 1,
      explain: "Selector kanallarni OP_READ, OP_WRITE, OP_ACCEPT kabi hodisalar bo'yicha kuzatadi va tayyorlarini tanlab beradi.",
    },
    {
      q: "Direct buffer'ning heap buffer'dan farqi nima?",
      options: [
        "Direct buffer faqat o'qish uchun",
        "Direct buffer JVM heap'idan tashqarida, I/O uchun tezroq",
        "Heap buffer'da limit yo'q",
        "Farqi yo'q",
      ],
      answer: 1,
      explain: "allocateDirect native xotiradan foydalanadi va I/O operatsiyalarida nusxalashni kamaytiradi; yaratish va GC boshqaruvi qimmatroq.",
    },
  ],
},
{
  id: 76,
  title: "FileChannel va memory-mapped fayllar",
  minutes: 15,
  blocks: [
    {
      type: "p",
      html: "<code>FileChannel</code> oddiy oqimlardan farqli ravishda <b>position</b> bilan ishlaydi, bir vaqtda o'qish va yozishni qo'llaydi, faylni xotiraga <b>mmap</b> qilish imkonini beradi. Memory-mapped fayl OS sahifa keshiga tayanadi: katta faylni butunlay o'qimasdan, kerakli qismiga murojaat qilish mumkin. Bu log, indeks va katta binary fayllar uchun samarali.",
    },
    {
      type: "code",
      title: "MmapDemo.java",
      code: `import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;

public class MmapDemo {
    public static void main(String[] args) throws Exception {
        Path fayl = Path.of("mmap.txt");
        Files.writeString(fayl, "salom dunyo", StandardCharsets.UTF_8);

        try (FileChannel kanal = FileChannel.open(
                fayl, StandardOpenOption.READ, StandardOpenOption.WRITE)) {

            MappedByteBuffer buffer = kanal.map(
                FileChannel.MapMode.READ_WRITE, 0, kanal.size());

            byte[] baytlar = new byte[buffer.remaining()];
            buffer.get(baytlar);
            System.out.println("Oldin: " + new String(baytlar, StandardCharsets.UTF_8));

            buffer.position(0);
            buffer.put("SALOM".getBytes(StandardCharsets.UTF_8));
            buffer.force();
        }

        System.out.println("Keyin: " + Files.readString(fayl));
        Files.delete(fayl);
    }
}`,
      output: "Oldin: salom dunyo\nKeyin: SALOM dunyo",
    },
    {
      type: "note",
      variant: "warning",
      title: "force() va xavfsizlik",
      html: "<code>MappedByteBuffer</code> o'zgarishlari OS sahifa keshida qolishi mumkin; <code>force()</code> ularni diskka yozishga harakat qiladi. mmap faylni o'chirish Windows'da kechikishi mumkin, chunki mapping hali ochiq. Kichik fayllar uchun <code>Files.readAllBytes</code> soddaroq va xavfsiz.",
    },
    {
      type: "code",
      title: "LockDemo.java",
      code: `import java.nio.channels.FileChannel;
import java.nio.channels.FileLock;
import java.nio.channels.OverlappingFileLockException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;

public class LockDemo {
    public static void main(String[] args) throws Exception {
        Path fayl = Path.of("lock.txt");

        try (FileChannel kanal = FileChannel.open(
                fayl, StandardOpenOption.CREATE, StandardOpenOption.WRITE);
             FileLock qulf = kanal.tryLock()) {

            System.out.println("Qulf olindi: " + (qulf != null));

            try (FileChannel ikkinchiKanal = FileChannel.open(fayl, StandardOpenOption.WRITE)) {
                try {
                    FileLock ikkinchi = ikkinchiKanal.tryLock();
                    System.out.println("Ikkinchi: " + (ikkinchi != null));
                    if (ikkinchi != null) {
                        ikkinchi.release();
                    }
                } catch (OverlappingFileLockException e) {
                    System.out.println("Ikkinchi: band");
                }
            }
        }

        Files.deleteIfExists(fayl);
        System.out.println("Tugadi");
    }
}`,
      output: "Qulf olindi: true\nIkkinchi: band\nTugadi",
    },
    {
      type: "ul",
      items: [
        "Fayl qulflari <b>advisory</b>: ularni faqat hamkor dasturlar hurmat qiladi, OS majburlamaydi.",
        "<code>tryLock()</code> darhol natija beradi, <code>lock()</code> esa kutadi; bir JVM ichida ustma-ust qulf istisno tashlaydi.",
        "Katta faylni bo'laklab mmap qilish mumkin: <code>map(mode, offset, size)</code>.",
        "Yozishdan keyin <code>force()</code> yoki kanalni yopish ma'lumotning diskka tushishini kafolatlaydi.",
      ],
    },
  ],
  quiz: [
    {
      q: "Memory-mapped fayl qanday afzallik beradi?",
      options: [
        "Faylni butunlay RAM'ga nusxalash shart emas",
        "Faylni avtomatik shifrlaydi",
        "Faylni tarmoqqa yuboradi",
        "Fayl hajmini cheklaydi",
      ],
      answer: 0,
      explain: "mmap faylni virtual xotiraga bog'laydi; OS kerakli sahifalarni yuklaydi, shuning uchun katta faylni to'liq o'qish shart emas.",
    },
    {
      q: "MappedByteBuffer o'zgarishlarini diskka majburan yozish uchun nima chaqiriladi?",
      options: ["flip()", "force()", "clear()", "close()"],
      answer: 1,
      explain: "force() sahifalarni diskka yozishga urinadi; yopish ham odatda yetarli, lekin force aniqroq nazorat beradi.",
    },
    {
      q: "FileLock qanday xususiyatga ega?",
      options: [
        "OS darajasida majburiy",
        "Advisory — hamkor dasturlar hurmat qiladi",
        "Faqat o'qish uchun",
        "Faqat Windows'da ishlaydi",
      ],
      answer: 1,
      explain: "Java fayl qulflari advisory xarakterda; boshqa dastur qulfni chetlab o'tishi mumkin, shuning uchun protokol muhim.",
    },
  ],
},
{
  id: 77,
  title: "Socket va TCP klient-server",
  minutes: 17,
  blocks: [
    {
      type: "p",
      html: "TCP — ishonchli, tartiblangan bayt oqimi. <code>ServerSocket</code> portni tinglaydi, <code>accept()</code> yangi ulanish uchun <code>Socket</code> qaytaradi. Har bir ulanish uchun alohida thread yoki NIO selector ishlatiladi. <b>Muhim</b>: TCP oqim, xabar emas — chegara yo'q. Shuning uchun protokolda uzunlik prefiksi yoki qator oxiri belgisi kelishiladi.",
    },
    {
      type: "code",
      title: "TcpDemo.java",
      code: `import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.charset.StandardCharsets;

public class TcpDemo {
    public static void main(String[] args) throws Exception {
        try (ServerSocket server = new ServerSocket(0)) {
            int port = server.getLocalPort();

            Thread serverThread = new Thread(() -> {
                try (Socket socket = server.accept();
                     BufferedReader in = new BufferedReader(new InputStreamReader(
                         socket.getInputStream(), StandardCharsets.UTF_8));
                     PrintWriter out = new PrintWriter(
                         socket.getOutputStream(), true, StandardCharsets.UTF_8)) {

                    String sorov = in.readLine();
                    out.println("Echo: " + sorov);
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            });
            serverThread.start();

            try (Socket client = new Socket("localhost", port);
                 PrintWriter out = new PrintWriter(
                     client.getOutputStream(), true, StandardCharsets.UTF_8);
                 BufferedReader in = new BufferedReader(new InputStreamReader(
                     client.getInputStream(), StandardCharsets.UTF_8))) {

                out.println("salom");
                System.out.println("Javob: " + in.readLine());
            }

            serverThread.join();
        }
        System.out.println("Server yopildi");
    }
}`,
      output: "Javob: Echo: salom\nServer yopildi",
    },
    {
      type: "note",
      variant: "warning",
      title: "readLine() bloklaydi",
      html: "<code>readLine()</code> qator oxiri kelguncha kutadi. Agar mijoz qatorni yubormasa yoki ulanish uzilsa, thread osilib qolishi mumkin. Production'da <code>setSoTimeout</code> qo'ying va resurslarni try-with-resources bilan yoping. Qator o'rniga uzunlik prefiksli protokol ishonchliroq.",
    },
    {
      type: "code",
      title: "UriDemo.java",
      code: `import java.net.URI;

public class UriDemo {
    public static void main(String[] args) {
        URI uri = URI.create("https://api.noldan.uz:8443/java/kurs?dars=77#mavzu");

        System.out.println("Scheme: " + uri.getScheme());
        System.out.println("Host: " + uri.getHost());
        System.out.println("Port: " + uri.getPort());
        System.out.println("Path: " + uri.getPath());
        System.out.println("Query: " + uri.getQuery());
        System.out.println("Fragment: " + uri.getFragment());
    }
}`,
      output: "Scheme: https\nHost: api.noldan.uz\nPort: 8443\nPath: /java/kurs\nQuery: dars=77\nFragment: mavzu",
    },
    {
      type: "ul",
      items: [
        "Port 0 berilsa OS bo'sh port tanlaydi — testlarda qulay.",
        "TCP'da <code>flush()</code> yoki <code>autoFlush</code> bo'lmasa, ma'lumot buferda qolishi mumkin.",
        "<code>URI</code> parsing uchun, <code>URL</code> esa ochish uchun; zamonaviy HTTP ishlarida <code>URI</code> afzal.",
        "Har ulanishga thread ochish minglab mijozda og'ir; virtual thread yoki NIO event loop tanlanadi.",
      ],
    },
  ],
  quiz: [
    {
      q: "ServerSocket.accept() qanday ishlaydi?",
      options: [
        "Darhol null qaytaradi",
        "Yangi ulanish kelguncha bloklaydi",
        "Portni yopadi",
        "Ma'lumot yuboradi",
      ],
      answer: 1,
      explain: "accept() yangi TCP ulanishini kutadi va unga bog'langan Socket qaytaradi; bloklovchi metod hisoblanadi.",
    },
    {
      q: "TCP nimani kafolatlaydi?",
      options: [
        "Xabar chegaralarini",
        "Tartib va yetkazilishni",
        "Shifrlashni",
        "Xabar hajmini",
      ],
      answer: 1,
      explain: "TCP baytlarning tartibini va yetkazilishini kafolatlaydi, lekin xabar chegarasini emas — buni protokol belgilaydi.",
    },
    {
      q: "URI.create(\"https://host:8443/a?x=1\").getPort() nima qaytaradi?",
      options: ["443", "8443", "-1", "80"],
      answer: 1,
      explain: "Port aniq ko'rsatilgan bo'lsa, o'sha qiymat qaytariladi; ko'rsatilmasa -1 bo'ladi.",
    },
  ],
},
{
  id: 78,
  title: "HttpClient bilan REST chaqiruvlari",
  minutes: 17,
  blocks: [
    {
      type: "p",
      html: "Java 11+ da <code>java.net.http.HttpClient</code> bor: HTTP/1.1 va HTTP/2, sinxron va asinxron so'rovlar, WebSocket. U immutable va thread-safe — bitta klientni butun ilova bo'ylab qayta ishlatish mumkin. So'rov <b>builder</b> bilan quriladi, javob <code>BodyHandler</code> orqali o'qiladi.",
    },
    {
      type: "code",
      title: "HttpClientDemo.java",
      code: `import com.sun.net.httpserver.HttpServer;
import java.net.InetSocketAddress;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;

public class HttpClientDemo {
    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(0), 0);
        server.createContext("/salom", exchange -> {
            byte[] javob = "{\\"xabar\\":\\"salom\\"}".getBytes(StandardCharsets.UTF_8);
            exchange.getResponseHeaders().add("Content-Type", "application/json");
            exchange.sendResponseHeaders(200, javob.length);
            exchange.getResponseBody().write(javob);
            exchange.close();
        });
        server.start();

        int port = server.getAddress().getPort();
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("http://localhost:" + port + "/salom"))
            .GET()
            .build();

        HttpResponse<String> response = client.send(
            request, HttpResponse.BodyHandlers.ofString());

        System.out.println("Status: " + response.statusCode());
        System.out.println("Tana: " + response.body());
        System.out.println("Content-Type: "
            + response.headers().firstValue("Content-Type").orElse("yo'q"));

        server.stop(0);
        System.out.println("Server to'xtadi");
    }
}`,
      output: "Status: 200\nTana: {\"xabar\":\"salom\"}\nContent-Type: application/json\nServer to'xtadi",
    },
    {
      type: "note",
      variant: "info",
      title: "Timeout va redirect",
      html: "Standart holatda timeout yo'q — osilib qolmasligi uchun <code>.timeout(Duration.ofSeconds(5))</code> qo'ying. Redirect'lar <code>HttpClient.Redirect.NORMAL</code> bilan yoqiladi. <code>sendAsync</code> <code>CompletableFuture</code> qaytaradi va bloklamaydi.",
    },
    {
      type: "code",
      title: "AsyncPost.java",
      code: `import com.sun.net.httpserver.HttpServer;
import java.net.InetSocketAddress;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.concurrent.CompletableFuture;

public class AsyncPost {
    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(0), 0);
        server.createContext("/echo", exchange -> {
            String sorov = new String(
                exchange.getRequestBody().readAllBytes(), StandardCharsets.UTF_8);
            byte[] javob = sorov.toUpperCase().getBytes(StandardCharsets.UTF_8);
            exchange.getResponseHeaders().add("X-Usul", exchange.getRequestMethod());
            exchange.sendResponseHeaders(201, javob.length);
            exchange.getResponseBody().write(javob);
            exchange.close();
        });
        server.start();

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("http://localhost:" + server.getAddress().getPort() + "/echo"))
            .timeout(Duration.ofSeconds(2))
            .POST(HttpRequest.BodyPublishers.ofString("salom"))
            .build();

        CompletableFuture<HttpResponse<String>> kelajak =
            client.sendAsync(request, HttpResponse.BodyHandlers.ofString());

        System.out.println("Status: " + kelajak.thenApply(HttpResponse::statusCode).join());
        System.out.println("Tana: " + kelajak.thenApply(HttpResponse::body).join());
        System.out.println("X-Usul: " + kelajak
            .thenApply(r -> r.headers().firstValue("X-Usul").orElse("yo'q"))
            .join());

        server.stop(0);
    }
}`,
      output: "Status: 201\nTana: SALOM\nX-Usul: POST",
    },
    {
      type: "ul",
      items: [
        "<code>BodyHandlers.ofString</code>, <code>ofByteArray</code>, <code>ofFile</code>, <code>discarding</code> — javobni qayta ishlash usullari.",
        "Bitta <code>HttpClient</code> yarating va ulashing; har so'rovga yangi klient ochish resurs isrofidir.",
        "HTTP/2 uchun <code>client.version(HttpClient.Version.HTTP_2)</code>; server qo'llamasa 1.1 ga tushadi.",
        "Status 4xx/5xx istisno tashlamaydi — statusni o'zingiz tekshirishingiz kerak.",
      ],
    },
  ],
  quiz: [
    {
      q: "HttpClient.sendAsync qanday natija qaytaradi?",
      options: ["HttpResponse", "CompletableFuture<HttpResponse<T>>", "String", "void"],
      answer: 1,
      explain: "sendAsync bloklamaydi va CompletableFuture qaytaradi; natijani thenApply yoki join bilan olish mumkin.",
    },
    {
      q: "HTTP javob tanasini matn sifatida o'qish uchun qaysi body handler ishlatiladi?",
      options: [
        "BodyHandlers.ofString()",
        "BodyPublishers.ofString()",
        "HttpResponse.BodyHandler.discard()",
        "BodyHandlers.ofFile()",
      ],
      answer: 0,
      explain: "BodyHandlers.ofString() javobni String sifatida beradi; BodyPublishers esa so'rov tanasi uchun.",
    },
    {
      q: "HttpClient obyekti haqida qaysi gap to'g'ri?",
      options: [
        "Har so'rovda yangisini yaratish shart",
        "Thread-safe va qayta ishlatiladi",
        "Faqat HTTP/1.1 ni qo'llaydi",
        "Faqat sinxron ishlaydi",
      ],
      answer: 1,
      explain: "HttpClient immutable va thread-safe; bitta nusxani ilova bo'ylab ishlatish tavsiya etiladi. U HTTP/2 va WebSocket'ni ham qo'llaydi.",
    },
  ],
},
{
  id: 79,
  title: "Non-blocking I/O va WebSocket asoslari",
  minutes: 16,
  blocks: [
    {
      type: "p",
      html: "Bloklovchi I/O'da thread ma'lumot kelguncha kutadi. <b>Non-blocking</b> rejimda esa thread boshqa ish bilan shug'ullanadi: <code>Selector</code> tayyor kanallarni aytadi, <code>AsynchronousSocketChannel</code> esa callback yoki <code>Future</code> beradi. WebSocket xuddi shu g'oyani ilova darajasida davom ettiradi — ulanish ochiq qoladi va ikki tomon xabar almashadi.",
    },
    {
      type: "code",
      title: "SelectorDemo.java",
      code: `import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.ServerSocketChannel;
import java.nio.channels.SocketChannel;
import java.nio.charset.StandardCharsets;
import java.util.Iterator;

public class SelectorDemo {
    public static void main(String[] args) throws Exception {
        try (Selector selector = Selector.open();
             ServerSocketChannel server = ServerSocketChannel.open()) {

            server.bind(new InetSocketAddress("localhost", 0));
            server.configureBlocking(false);
            server.register(selector, SelectionKey.OP_ACCEPT);

            int port = ((InetSocketAddress) server.getLocalAddress()).getPort();
            Thread client = new Thread(() -> {
                try (SocketChannel kanal = SocketChannel.open(
                        new InetSocketAddress("localhost", port))) {
                    kanal.write(StandardCharsets.UTF_8.encode("salom"));
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            });
            client.start();

            boolean oqildi = false;
            long tugash = System.currentTimeMillis() + 2000;

            while (!oqildi && System.currentTimeMillis() < tugash) {
                selector.select(200);
                Iterator<SelectionKey> iterator = selector.selectedKeys().iterator();
                while (iterator.hasNext()) {
                    SelectionKey key = iterator.next();
                    iterator.remove();

                    if (key.isAcceptable()) {
                        SocketChannel kanal = server.accept();
                        kanal.configureBlocking(false);
                        kanal.register(selector, SelectionKey.OP_READ);
                        System.out.println("Ulandi");
                    } else if (key.isReadable()) {
                        SocketChannel kanal = (SocketChannel) key.channel();
                        ByteBuffer buffer = ByteBuffer.allocate(16);
                        kanal.read(buffer);
                        buffer.flip();
                        System.out.println("Matn: "
                            + StandardCharsets.UTF_8.decode(buffer));
                        kanal.close();
                        oqildi = true;
                    }
                }
            }

            client.join();
            System.out.println("O'qildi: " + oqildi);
        }
        System.out.println("Selector yopildi");
    }
}`,
      output: "Ulandi\nMatn: salom\nO'qildi: true\nSelector yopildi",
    },
    {
      type: "note",
      variant: "info",
      title: "WebSocket API",
      html: "<code>HttpClient.newWebSocketBuilder().buildAsync(uri, listener)</code> bilan ulanish ochiladi. Listener'da <code>onOpen</code>, <code>onText</code>, <code>onBinary</code>, <code>onClose</code> bo'ladi. Backpressure uchun har safar <code>webSocket.request(1)</code> chaqiriladi — bu bir vaqtda qayta ishlanadigan xabarlar sonini cheklaydi.",
    },
    {
      type: "code",
      title: "AsyncDemo.java",
      code: `import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.AsynchronousServerSocketChannel;
import java.nio.channels.AsynchronousSocketChannel;
import java.nio.channels.CompletionHandler;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

public class AsyncDemo {
    public static void main(String[] args) throws Exception {
        try (AsynchronousServerSocketChannel server =
                 AsynchronousServerSocketChannel.open()) {

            server.bind(new InetSocketAddress("localhost", 0));
            int port = ((InetSocketAddress) server.getLocalAddress()).getPort();
            CountDownLatch latch = new CountDownLatch(1);

            server.accept(null, new CompletionHandler<AsynchronousSocketChannel, Void>() {
                @Override
                public void completed(AsynchronousSocketChannel kanal, Void attachment) {
                    ByteBuffer buffer = ByteBuffer.allocate(16);
                    kanal.read(buffer, null, new CompletionHandler<Integer, Void>() {
                        @Override
                        public void completed(Integer soni, Void att) {
                            buffer.flip();
                            System.out.println("Server oldi: "
                                + StandardCharsets.UTF_8.decode(buffer));
                            latch.countDown();
                        }

                        @Override
                        public void failed(Throwable xato, Void att) {
                            xato.printStackTrace();
                        }
                    });
                }

                @Override
                public void failed(Throwable xato, Void attachment) {
                    xato.printStackTrace();
                }
            });

            try (AsynchronousSocketChannel client = AsynchronousSocketChannel.open()) {
                client.connect(new InetSocketAddress("localhost", port))
                    .get(2, TimeUnit.SECONDS);
                client.write(StandardCharsets.UTF_8.encode("salom"))
                    .get(2, TimeUnit.SECONDS);
                System.out.println("Xabar keldi: " + latch.await(2, TimeUnit.SECONDS));
            }
        }
        System.out.println("Tugadi");
    }
}`,
      output: "Server oldi: salom\nXabar keldi: true\nTugadi",
    },
    {
      type: "ul",
      items: [
        "Asynchronous channel callback'lari boshqa threadda bajariladi — umumiy holatni sinxronlash kerak.",
        "Selector event loop'da bitta sekin handler butun loop'ni to'xtatadi; og'ir ishni alohida pool'ga bering.",
        "WebSocket ping/pong bilan ulanish tirikligini tekshiradi; proxy'lar uchun muhim.",
        "Non-blocking kod murakkab; agar virtual thread yetarli bo'lsa, bloklovchi kodni soddaroq yozish mumkin.",
      ],
    },
  ],
  quiz: [
    {
      q: "SelectionKey.isReadable() qachon true bo'ladi?",
      options: [
        "Kanal yozishga tayyor bo'lganda",
        "Kanaldan o'qish mumkin bo'lgan ma'lumot bo'lganda",
        "Ulanish yopilganda",
        "Har doim",
      ],
      answer: 1,
      explain: "isReadable kanalda o'qish uchun ma'lumot borligini bildiradi; select() shu holatga tayyor kanallarni qaytaradi.",
    },
    {
      q: "AsynchronousSocketChannel.read qanday natija beradi?",
      options: [
        "Darhol baytlar sonini",
        "Future yoki callback orqali natija",
        "Faqat void",
        "String",
      ],
      answer: 1,
      explain: "Asinxron kanal read operatsiyasi uchun Future qaytaradi yoki CompletionHandler qabul qiladi; natija keyin keladi.",
    },
    {
      q: "WebSocket listener'da request(1) nima uchun chaqiriladi?",
      options: [
        "Ulanishni yopish uchun",
        "Backpressure — keyingi xabarni qabul qilishga ruxsat",
        "Xabar yuborish uchun",
        "Ping yuborish uchun",
      ],
      answer: 1,
      explain: "request(n) qabul qilinadigan xabarlar sonini oshiradi; bu sekin iste'molchida xotira to'lib ketishining oldini oladi.",
    },
  ],
},
