#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define ALIFBO 26

typedef struct T {
    struct T *bola[ALIFBO];
    int oxiri;
} T;

T *yangi(void) { return calloc(1, sizeof(T)); }

void qosh(T *r, const char *s) {
    for (size_t i = 0; s[i]; i++) {
        int idx = s[i] - 'a';
        if (!r->bola[idx]) r->bola[idx] = yangi();
        r = r->bola[idx];
    }
    r->oxiri = 1;
}

T *top(T *r, const char *p) {
    for (size_t i = 0; p[i]; i++) {
        int idx = p[i] - 'a';
        if (!r->bola[idx]) return NULL;
        r = r->bola[idx];
    }
    return r;
}

void chiqar(T *t, char *buf, int len) {
    if (!t) return;
    if (t->oxiri) {
        buf[len] = '\0';
        printf(" %s", buf);
    }
    for (int i = 0; i < ALIFBO; i++) {
        if (t->bola[i]) {
            buf[len] = (char)('a' + i);
            chiqar(t->bola[i], buf, len + 1);
        }
    }
}

int main(void) {
    T *r = yangi();
    qosh(r, "cat");
    qosh(r, "car");
    qosh(r, "cart");
    qosh(r, "dog");

    T *p = top(r, "ca");
    char buf[32];
    memcpy(buf, "ca", 2);
    printf("ca_bor=%d\n", p != NULL);
    printf("ca_so'zlar:");
    chiqar(p, buf, 2);
    printf("\n");
    return 0;
}