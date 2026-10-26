#include <stdio.h>
#include <stdlib.h>

typedef struct Tugun {
    int qiymat;
    struct Tugun *keyingi;
} Tugun;

int main(void) {
    int n = 7, k = 3;
    Tugun *bosh = NULL;
    Tugun *oxir = NULL;

    for (int i = 1; i <= n; i++) {
        Tugun *t = malloc(sizeof *t);
        if (t == NULL) {
            return 1;
        }
        t->qiymat = i;
        t->keyingi = NULL;
        if (bosh == NULL) {
            bosh = t;
        } else {
            oxir->keyingi = t;
        }
        oxir = t;
    }
    oxir->keyingi = bosh;

    Tugun *p = bosh;
    Tugun *oldin = oxir;
    printf("tartib:");

    while (p->keyingi != p) {
        for (int i = 1; i < k; i++) {
            oldin = p;
            p = p->keyingi;
        }
        printf(" %d", p->qiymat);
        oldin->keyingi = p->keyingi;
        Tugun *ochirilgan = p;
        p = p->keyingi;
        free(ochirilgan);
    }
    printf(" %d\n", p->qiymat);
    free(p);
    return 0;
}