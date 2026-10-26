#include <stdio.h>
#include <stdint.h>
#include <string.h>

#define BIT 64

static uint64_t h1(const char *s) {
    uint64_t h = 1469598103934665603ULL;
    while (*s) {
        h ^= (unsigned char)*s++;
        h *= 1099511628211ULL;
    }
    return h;
}

static uint64_t h2(const char *s) {
    uint64_t h = 5381;
    while (*s) h = h * 33 + (unsigned char)*s++;
    return h;
}

static uint64_t h3(const char *s) {
    uint64_t h = 0;
    while (*s) h = h * 131 + (unsigned char)*s++;
    return h;
}

void qosh(uint64_t *f, const char *s) {
    *f |= UINT64_C(1) << (h1(s) % BIT);
    *f |= UINT64_C(1) << (h2(s) % BIT);
    *f |= UINT64_C(1) << (h3(s) % BIT);
}

int bormi(uint64_t f, const char *s) {
    uint64_t m = (UINT64_C(1) << (h1(s) % BIT)) |
                 (UINT64_C(1) << (h2(s) % BIT)) |
                 (UINT64_C(1) << (h3(s) % BIT));
    return (f & m) == m;
}

int main(void) {
    uint64_t f = 0;
    qosh(&f, "cat");
    qosh(&f, "dog");
    printf("cat=%s\n", bormi(f, "cat") ? "ehtimol bor" : "yo'q");
    printf("dog=%s\n", bormi(f, "dog") ? "ehtimol bor" : "yo'q");
    printf("bird=%s\n", bormi(f, "bird") ? "ehtimol bor" : "yo'q");
    printf("fox=%s\n", bormi(f, "fox") ? "ehtimol bor" : "yo'q");
    return 0;
}