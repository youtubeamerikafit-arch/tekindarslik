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
    if (t == NULL) return NULL;
    t->qiymat = qiymat;
    t->keyingi = NULL;
    t->oldingi = r->oxir;
    if (r->oxir) r->oxir->keyingi = t;
    else r->bosh = t;
    r->oxir = t;
    r->soni++;
    return t;
}

void chop(Royxat *r, Tugun *t) {
    if (t->oldingi) t->oldingi->keyingi = t->keyingi;
    else r->bosh = t->keyingi;
    if (t->keyingi) t->keyingi->oldingi = t->oldingi;
    else r->oxir = t->oldingi;
    free(t);
    r->soni--;
}

int main(void) {
    Royxat r = {0};
    for (int i = 1; i <= 3; i++) {
        qosh(&r, i * 10);
    }

    chop(&r, r.bosh);
    printf("bosh=%d oldingi=%s\n", r.bosh->qiymat,
           r.bosh->oldingi == NULL ? "NULL" : "bor");
    printf("soni=%zu\n", r.soni);

    chop(&r, r.oxir);
    printf("oxir=%d keyingi=%s\n", r.oxir->qiymat,
           r.oxir->keyingi == NULL ? "NULL" : "bor");
    printf("soni=%zu\n", r.soni);
    return 0;
}