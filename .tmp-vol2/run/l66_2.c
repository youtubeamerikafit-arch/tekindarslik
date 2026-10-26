#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define ALIFBO 26

typedef struct Tugun {
    struct Tugun *bola[ALIFBO];
    int soz_oxiri;
} Tugun;

Tugun *yangi(void) {
    return calloc(1, sizeof(Tugun));
}

void qosh(Tugun *ildiz, const char *soz) {
    Tugun *p = ildiz;
    for (size_t i = 0; soz[i] != '\0'; i++) {
        int idx = soz[i] - 'a';
        if (p->bola[idx] == NULL) {
            p->bola[idx] = yangi();
        }
        p = p->bola[idx];
    }
    p->soz_oxiri = 1;
}

int bor(Tugun *ildiz, const char *soz) {
    Tugun *p = ildiz;
    for (size_t i = 0; soz[i] != '\0'; i++) {
        int idx = soz[i] - 'a';
        if (p->bola[idx] == NULL) {
            return 0;
        }
        p = p->bola[idx];
    }
    return p->soz_oxiri;
}

void tozala(Tugun *t) {
    if (!t) return;
    for (int i = 0; i < ALIFBO; i++) {
        tozala(t->bola[i]);
    }
    free(t);
}

int main(void) {
    Tugun *ildiz = yangi();
    qosh(ildiz, "cat");
    qosh(ildiz, "car");
    qosh(ildiz, "dog");

    printf("cat=%d\n", bor(ildiz, "cat"));
    printf("ca=%d\n", bor(ildiz, "ca"));
    printf("dog=%d\n", bor(ildiz, "dog"));
    tozala(ildiz);
    return 0;
}