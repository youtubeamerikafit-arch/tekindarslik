#include <stdio.h>
#include <stdlib.h>

typedef struct Tugun {
    int qiymat;
    struct Tugun *oldingi;
    struct Tugun *keyingi;
} Tugun;

typedef struct {
    Tugun *bosh;
    Tugun *oxir;
    size_t soni;
} Royxat;

Tugun *qosh(Royxat *r, int qiymat) {
    Tugun *t = malloc(sizeof *t);
    if (t == NULL) {
        return NULL;
    }
    t->qiymat = qiymat;
    t->keyingi = NULL;
    t->oldingi = r->oxir;
    if (r->oxir != NULL) {
        r->oxir->keyingi = t;
    } else {
        r->bosh = t;
    }
    r->oxir = t;
    r->soni++;
    return t;
}

void chop(Royxat *r, Tugun *t) {
    if (t->oldingi != NULL) {
        t->oldingi->keyingi = t->keyingi;
    } else {
        r->bosh = t->keyingi;
    }
    if (t->keyingi != NULL) {
        t->keyingi->oldingi = t->oldingi;
    } else {
        r->oxir = t->oldingi;
    }
    free(t);
    r->soni--;
}

void chiqar(const Royxat *r, int teskari) {
    Tugun *t = teskari ? r->oxir : r->bosh;
    while (t != NULL) {
        printf("%d%s", t->qiymat, (teskari ? t->oldingi : t->keyingi) ? " " : "\n");
        t = teskari ? t->oldingi : t->keyingi;
    }
}

int main(void) {
    Royxat r = {0};
    Tugun *a = qosh(&r, 10);
    Tugun *b = qosh(&r, 20);
    qosh(&r, 30);

    printf("soni=%zu\n", r.soni);
    chiqar(&r, 0);
    chiqar(&r, 1);

    chop(&r, b);
    printf("o'chirildi=%d\n", 20);
    chiqar(&r, 0);
    printf("oxir=%d\n", r.oxir->qiymat);
    printf("a_keyingi=%d\n", a->keyingi->qiymat);
    return 0;
}