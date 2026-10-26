#include <stdio.h>
#include <stdint.h>
#include <stddef.h>

int xavfsiz_kopaytir(size_t a, size_t b, size_t *natija) {
    if (a != 0 && b > SIZE_MAX / a) {
        return 0;
    }
    *natija = a * b;
    return 1;
}

int main(void) {
    size_t n = 0;

    if (xavfsiz_kopaytir(10, 20, &n)) {
        printf("natija=%zu\n", n);
    }
    printf("katta=%s\n", xavfsiz_kopaytir(SIZE_MAX, 2, &n) ? "bor" : "yo'q");
    printf("nol=%s\n", xavfsiz_kopaytir(0, 50, &n) && n == 0 ? "bor" : "yo'q");
    return 0;
}