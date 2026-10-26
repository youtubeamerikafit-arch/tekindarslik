#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char *matn;
    size_t uzunlik;
} Bufer;

Bufer bufer_yarat(const char *s) {
    Bufer b = {NULL, 0};
    size_t n = strlen(s);
    b.matn = malloc(n + 1);
    if (b.matn != NULL) {
        memcpy(b.matn, s, n + 1);
        b.uzunlik = n;
    }
    return b;
}

void bufer_kochir(Bufer *manzil, Bufer *manba) {
    *manzil = *manba;
    manba->matn = NULL;
    manba->uzunlik = 0;
}

int main(void) {
    Bufer a = bufer_yarat("xotira");
    Bufer b = {NULL, 0};

    bufer_kochir(&b, &a);
    printf("b=%s uzunlik=%zu\n", b.matn, b.uzunlik);
    printf("a=%s\n", a.matn ? a.matn : "(bo'sh)");
    free(b.matn);
    return 0;
}