#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int bosh;
    int oxir;
} Interval;

int taqqos(const void *x, const void *y) {
    const Interval *a = x;
    const Interval *b = y;
    return (a->oxir > b->oxir) - (a->oxir < b->oxir);
}

int main(void) {
    Interval v[] = {
        {1, 4}, {3, 5}, {0, 6}, {5, 7},
        {3, 9}, {5, 9}, {6, 8}, {8, 9},
    };
    int n = (int)(sizeof v / sizeof v[0]);
    qsort(v, n, sizeof v[0], taqqos);

    int oxir = -1, soni = 0;
    printf("tanlangan:");
    for (int i = 0; i < n; i++) {
        if (v[i].bosh >= oxir) {
            printf(" (%d,%d)", v[i].bosh, v[i].oxir);
            oxir = v[i].oxir;
            soni++;
        }
    }
    printf("\nsoni=%d\n", soni);
    return 0;
}