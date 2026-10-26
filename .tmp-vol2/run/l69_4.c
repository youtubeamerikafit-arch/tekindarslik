#include <stdio.h>
#include <stdlib.h>

#define N 5
#define M 7

typedef struct {
    int u, v, w;
} Qirra;

int ota[N], olcham[N];

int top(int x) {
    while (ota[x] != x) {
        ota[x] = ota[ota[x]];
        x = ota[x];
    }
    return x;
}

int birlashtir(int a, int b) {
    a = top(a);
    b = top(b);
    if (a == b) return 0;
    if (olcham[a] < olcham[b]) {
        int t = a; a = b; b = t;
    }
    ota[b] = a;
    olcham[a] += olcham[b];
    return 1;
}

int taqqos(const void *x, const void *y) {
    const Qirra *a = x;
    const Qirra *b = y;
    return (a->w > b->w) - (a->w < b->w);
}

int main(void) {
    Qirra qirralar[M] = {
        {0, 1, 2}, {0, 2, 3}, {1, 2, 1}, {1, 3, 4},
        {2, 3, 5}, {3, 4, 6}, {2, 4, 7},
    };
    for (int i = 0; i < N; i++) {
        ota[i] = i;
        olcham[i] = 1;
    }
    qsort(qirralar, M, sizeof qirralar[0], taqqos);

    int jami = 0, tanlangan = 0;
    printf("MST:");
    for (int i = 0; i < M && tanlangan < N - 1; i++) {
        if (birlashtir(qirralar[i].u, qirralar[i].v)) {
            printf(" %d-%d", qirralar[i].u, qirralar[i].v);
            jami += qirralar[i].w;
            tanlangan++;
        }
    }
    printf("\njami=%d\n", jami);
    return 0;
}