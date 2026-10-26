#include <stdio.h>
#include <stdlib.h>

typedef struct Tugun {
    int qiymat;
    struct Tugun *keyingi;
} Tugun;

int main(void) {
    Tugun *bosh = NULL;
    Tugun *oxir = NULL;

    for (int i = 1; i <= 5; i++) {
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
    for (int i = 0; i < 5; i++) {
        if (i > 0) {
            printf(" ");
        }
        printf("%d", p->qiymat);
        p = p->keyingi;
    }
    printf("\nqaytdi=%d\n", p == bosh);
    return 0;
}