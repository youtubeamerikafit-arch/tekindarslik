#include <stdio.h>
#include <stdlib.h>

typedef struct Tugun {
    int kalit;
    int balandlik;
    struct Tugun *chap;
    struct Tugun *ong;
} Tugun;

int h(Tugun *t) { return t ? t->balandlik : 0; }
int katta(int a, int b) { return a > b ? a : b; }
int balans(Tugun *t) { return t ? h(t->chap) - h(t->ong) : 0; }

Tugun *yangi(int kalit) {
    Tugun *t = malloc(sizeof *t);
    if (!t) return NULL;
    t->kalit = kalit;
    t->balandlik = 1;
    t->chap = t->ong = NULL;
    return t;
}

Tugun *ongga(Tugun *y) {
    Tugun *x = y->chap;
    Tugun *o = x->ong;
    x->ong = y;
    y->chap = o;
    y->balandlik = 1 + katta(h(y->chap), h(y->ong));
    x->balandlik = 1 + katta(h(x->chap), h(x->ong));
    return x;
}

Tugun *chapga(Tugun *x) {
    Tugun *y = x->ong;
    Tugun *o = y->chap;
    y->chap = x;
    x->ong = o;
    x->balandlik = 1 + katta(h(x->chap), h(x->ong));
    y->balandlik = 1 + katta(h(y->chap), h(y->ong));
    return y;
}

Tugun *qosh(Tugun *t, int kalit) {
    if (!t) return yangi(kalit);
    if (kalit < t->kalit) t->chap = qosh(t->chap, kalit);
    else if (kalit > t->kalit) t->ong = qosh(t->ong, kalit);
    else return t;

    t->balandlik = 1 + katta(h(t->chap), h(t->ong));
    int b = balans(t);

    if (b > 1 && kalit < t->chap->kalit) return ongga(t);
    if (b < -1 && kalit > t->ong->kalit) return chapga(t);
    if (b > 1 && kalit > t->chap->kalit) {
        t->chap = chapga(t->chap);
        return ongga(t);
    }
    if (b < -1 && kalit < t->ong->kalit) {
        t->ong = ongga(t->ong);
        return chapga(t);
    }
    return t;
}

void chiqar(Tugun *t) {
    if (!t) return;
    chiqar(t->chap);
    printf("%d ", t->kalit);
    chiqar(t->ong);
}

int main(void) {
    Tugun *ildiz = NULL;
    int kalitlar[] = {10, 20, 30, 40, 50, 25};
    for (int i = 0; i < 6; i++) {
        ildiz = qosh(ildiz, kalitlar[i]);
    }
    chiqar(ildiz);
    printf("\nbalandlik=%d\n", h(ildiz));
    return 0;
}