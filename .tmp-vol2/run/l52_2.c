#include <stdio.h>

typedef int (*Amal)(int, int);

int qosh(int a, int b) { return a + b; }
int ayir(int a, int b) { return a - b; }
int kopaytir(int a, int b) { return a * b; }

typedef struct {
    const char *nom;
    Amal bajar;
} Buyruq;

int main(void) {
    Buyruq jadval[] = {
        {"qo'shish", qosh},
        {"ayirish", ayir},
        {"ko'paytirish", kopaytir},
    };
    int x = 12, y = 4;
    size_t n = sizeof jadval / sizeof jadval[0];

    for (size_t i = 0; i < n; i++) {
        printf("%s: %d\n", jadval[i].nom, jadval[i].bajar(x, y));
    }
    return 0;
}