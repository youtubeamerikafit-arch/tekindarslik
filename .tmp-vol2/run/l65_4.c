#include <stdio.h>
#include <stdlib.h>

typedef struct T {
    int k;
    int h;
    struct T *l;
    struct T *r;
} T;

int baland(T *t) { return t ? t->h : 0; }
int max2(int a, int b) { return a > b ? a : b; }
int bf(T *t) { return t ? baland(t->l) - baland(t->r) : 0; }

T *yangi(int k) {
    T *t = malloc(sizeof *t);
    t->k = k;
    t->h = 1;
    t->l = t->r = NULL;
    return t;
}

T *ongga(T *y) {
    T *x = y->l;
    y->l = x->r;
    x->r = y;
    y->h = 1 + max2(baland(y->l), baland(y->r));
    x->h = 1 + max2(baland(x->l), baland(x->r));
    return x;
}

T *chapga(T *x) {
    T *y = x->r;
    x->r = y->l;
    y->l = x;
    x->h = 1 + max2(baland(x->l), baland(x->r));
    y->h = 1 + max2(baland(y->l), baland(y->r));
    return y;
}

T *qosh(T *t, int k) {
    if (!t) return yangi(k);
    if (k < t->k) t->l = qosh(t->l, k);
    else if (k > t->k) t->r = qosh(t->r, k);
    else return t;
    t->h = 1 + max2(baland(t->l), baland(t->r));
    int b = bf(t);
    if (b > 1 && k < t->l->k) return ongga(t);
    if (b < -1 && k > t->r->k) return chapga(t);
    if (b > 1 && k > t->l->k) {
        t->l = chapga(t->l);
        return ongga(t);
    }
    if (b < -1 && k < t->r->k) {
        t->r = ongga(t->r);
        return chapga(t);
    }
    return t;
}

int main(void) {
    T *ildiz = NULL;
    for (int i = 1; i <= 7; i++) {
        ildiz = qosh(ildiz, i);
    }
    printf("ildiz=%d balandlik=%d\n", ildiz->k, ildiz->h);
    return 0;
}