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

Bufer bufer_nusxa(const Bufer *manba) {
    return bufer_yarat(manba->matn);
}

void bufer_ochir(Bufer *b) {
    free(b->matn);
    b->matn = NULL;
    b->uzunlik = 0;
}

int main(void) {
    Bufer a = bufer_yarat("salom");
    Bufer b = bufer_nusxa(&a);
    if (a.matn == NULL || b.matn == NULL) {
        return 1;
    }

    b.matn[0] = 'S';
    printf("a=%s b=%s\n", a.matn, b.matn);
    printf("bir xil blokmi=%d\n", a.matn == b.matn);
    bufer_ochir(&a);
    bufer_ochir(&b);
    return 0;
}