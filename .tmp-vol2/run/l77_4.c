#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int qiymat;
    int ogirlik;
} Buyum;

int taqqos(const void *x, const void *y) {
    const Buyum *a = x;
    const Buyum *b = y;
    double ra = (double)a->qiymat / a->ogirlik;
    double rb = (double)b->qiymat / b->ogirlik;
    return (ra < rb) - (ra > rb);
}

int main(void) {
    Buyum b[] = {{60, 10}, {100, 20}, {120, 30}};
    int n = (int)(sizeof b / sizeof b[0]);
    int sigim = 50;
    double jami = 0.0;

    qsort(b, n, sizeof b[0], taqqos);
    for (int i = 0; i < n && sigim > 0; i++) {
        int olin = b[i].ogirlik < sigim ? b[i].ogirlik : sigim;
        jami += (double)b[i].qiymat * olin / b[i].ogirlik;
        sigim -= olin;
    }
    printf("qiymat=%.1f\n", jami);
    return 0;
}