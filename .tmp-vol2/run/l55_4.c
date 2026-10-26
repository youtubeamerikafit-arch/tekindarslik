#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

typedef struct {
    size_t n;
    int qiymat[];
} ButunMassiv;

ButunMassiv *massiv_yarat(size_t n) {
    if (n > (SIZE_MAX - sizeof(ButunMassiv)) / sizeof(int)) {
        return NULL;
    }
    ButunMassiv *m = malloc(sizeof *m + n * sizeof *m->qiymat);
    if (m == NULL) {
        return NULL;
    }
    m->n = n;
    return m;
}

int main(void) {
    ButunMassiv *m = massiv_yarat(5);
    if (m == NULL) {
        return 1;
    }
    int jami = 0;
    for (size_t i = 0; i < m->n; i++) {
        m->qiymat[i] = (int)(i * i);
        jami += m->qiymat[i];
    }
    printf("n=%zu jami=%d\n", m->n, jami);
    free(m);
    return 0;
}