#include <stdio.h>

#define CAP 32

typedef struct {
    int data[CAP];
    size_t n;
} Heap;

void almashtir(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int qosh(Heap *h, int x) {
    if (h->n == CAP) return 0;
    size_t i = h->n++;
    h->data[i] = x;
    while (i > 0) {
        size_t ota = (i - 1) / 2;
        if (h->data[ota] <= h->data[i]) break;
        almashtir(&h->data[ota], &h->data[i]);
        i = ota;
    }
    return 1;
}

int ol(Heap *h, int *x) {
    if (h->n == 0) return 0;
    *x = h->data[0];
    h->data[0] = h->data[--h->n];
    size_t i = 0;
    for (;;) {
        size_t chap = 2 * i + 1;
        size_t ong = 2 * i + 2;
        size_t eng = i;
        if (chap < h->n && h->data[chap] < h->data[eng]) eng = chap;
        if (ong < h->n && h->data[ong] < h->data[eng]) eng = ong;
        if (eng == i) break;
        almashtir(&h->data[i], &h->data[eng]);
        i = eng;
    }
    return 1;
}

int main(void) {
    Heap h = {0};
    int qiymatlar[] = {5, 3, 8, 1, 9};
    for (int i = 0; i < 5; i++) {
        qosh(&h, qiymatlar[i]);
    }
    printf("chiqish:");
    while (ol(&h, &qiymatlar[0])) {
        printf(" %d", qiymatlar[0]);
    }
    printf("\n");
    return 0;
}