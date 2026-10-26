#include <stdio.h>

#define N 4

typedef struct Slot {
    int qiymat;
    struct Slot *keyingi;
} Slot;

typedef struct {
    Slot slotlar[N];
    Slot *bosh;
    size_t band;
} Pool;

void pool_init(Pool *p) {
    for (int i = 0; i < N - 1; i++) {
        p->slotlar[i].keyingi = &p->slotlar[i + 1];
    }
    p->slotlar[N - 1].keyingi = NULL;
    p->bosh = p->slotlar;
    p->band = 0;
}

Slot *ol(Pool *p) {
    if (p->bosh == NULL) return NULL;
    Slot *s = p->bosh;
    p->bosh = s->keyingi;
    s->keyingi = NULL;
    p->band++;
    return s;
}

void qaytar(Pool *p, Slot *s) {
    s->keyingi = p->bosh;
    p->bosh = s;
    p->band--;
}

int main(void) {
    Pool p;
    Slot *t[N];
    pool_init(&p);

    for (int i = 0; i < N; i++) {
        t[i] = ol(&p);
    }
    printf("band=%zu\n", p.band);
    printf("yana=%s\n", ol(&p) == NULL ? "yo'q" : "bor");

    for (int i = 0; i < N; i++) {
        qaytar(&p, t[i]);
    }
    printf("band=%zu\n", p.band);

    for (int i = 0; i < N; i++) {
        t[i] = ol(&p);
        t[i]->qiymat = i + 1;
    }
    printf("qayta: %d %d %d %d\n",
           t[0]->qiymat, t[1]->qiymat, t[2]->qiymat, t[3]->qiymat);
    return 0;
}