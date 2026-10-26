#include <stdio.h>

#define K 3

typedef struct {
    int data[K];
    size_t n;
} KichikHeap;

void almashtir(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}

void pastga(KichikHeap *h, size_t i) {
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
}

void taklif(KichikHeap *h, int x) {
    if (h->n < K) {
        size_t i = h->n++;
        h->data[i] = x;
        while (i > 0) {
            size_t ota = (i - 1) / 2;
            if (h->data[ota] <= h->data[i]) break;
            almashtir(&h->data[ota], &h->data[i]);
            i = ota;
        }
    } else if (x > h->data[0]) {
        h->data[0] = x;
        pastga(h, 0);
    }
}

int ol(KichikHeap *h, int *x) {
    if (h->n == 0) return 0;
    *x = h->data[0];
    h->data[0] = h->data[--h->n];
    pastga(h, 0);
    return 1;
}

int main(void) {
    int sonlar[] = {4, 9, 1, 7, 5, 8};
    KichikHeap h = {0};
    for (int i = 0; i < 6; i++) {
        taklif(&h, sonlar[i]);
    }
    printf("top3:");
    int x = 0;
    while (ol(&h, &x)) {
        printf(" %d", x);
    }
    printf("\n");
    return 0;
}