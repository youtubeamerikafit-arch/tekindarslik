#include <stdio.h>

#define N 4

typedef struct Tugun {
    int qiymat;
    struct Tugun *keyingi;
} Tugun;

typedef struct {
    Tugun slotlar[N];
    Tugun *bosh;
    size_t band;
} Pool;

void pool_init(Pool *p) {
    for (int i = 0; i < N - 1; i++) {
        p->slotlar[i].keyingi = &p->slotlar[i + 1];
    }
    p->slotlar[N - 1].keyingi = NULL;
    p->bosh = &p->slotlar[0];
    p->band = 0;
}

Tugun *pool_ol(Pool *p) {
    if (p->bosh == NULL) {
        return NULL;
    }
    Tugun *t = p->bosh;
    p->bosh = t->keyingi;
    t->keyingi = NULL;
    p->band++;
    return t;
}

void pool_qaytar(Pool *p, Tugun *t) {
    t->keyingi = p->bosh;
    p->bosh = t;
    p->band--;
}

int main(void) {
    Pool p;
    pool_init(&p);

    Tugun *a = pool_ol(&p);
    Tugun *b = pool_ol(&p);
    Tugun *c = pool_ol(&p);
    a->qiymat = 11;
    b->qiymat = 22;
    c->qiymat = 33;
    printf("band=%zu\n", p.band);

    pool_qaytar(&p, b);
    printf("band=%zu bosh=%zu\n", p.band, p.band + 2);

    Tugun *d = pool_ol(&p);
    d->qiymat = 44;
    printf("qayta=%d slot=%ld\n", d->qiymat, (long)(d - p.slotlar));
    printf("band=%zu\n", p.band);
    return 0;
}