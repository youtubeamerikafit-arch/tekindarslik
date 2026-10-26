#include <stdio.h>
#include <stdlib.h>

int chiziqli(const int *a, int n, int x, long *taqqos) {
    for (int i = 0; i < n; i++) {
        (*taqqos)++;
        if (a[i] == x) return i;
    }
    return -1;
}

int ikkilik(const int *a, int n, int x, long *taqqos) {
    int past = 0, yuqori = n - 1;
    while (past <= yuqori) {
        (*taqqos)++;
        int orta = past + (yuqori - past) / 2;
        if (a[orta] == x) return orta;
        if (a[orta] < x) past = orta + 1;
        else yuqori = orta - 1;
    }
    return -1;
}

int main(void) {
    int n = 1000000;
    int *a = malloc((size_t)n * sizeof *a);
    if (!a) return 1;
    for (int i = 0; i < n; i++) a[i] = i;

    long c1 = 0, c2 = 0;
    int x = n - 1;
    chiziqli(a, n, x, &c1);
    ikkilik(a, n, x, &c2);

    printf("chiziqli=%ld\n", c1);
    printf("ikkilik=%ld\n", c2);
    free(a);
    return 0;
}