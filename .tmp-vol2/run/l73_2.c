#include <stdio.h>

static int ustun[16];
static int diag1[32];
static int diag2[32];

int yechim(int qator, int n) {
    if (qator == n) {
        return 1;
    }
    int soni = 0;
    for (int col = 0; col < n; col++) {
        int d1 = qator - col + n;
        int d2 = qator + col;
        if (ustun[col] || diag1[d1] || diag2[d2]) {
            continue;
        }
        ustun[col] = diag1[d1] = diag2[d2] = 1;
        soni += yechim(qator + 1, n);
        ustun[col] = diag1[d1] = diag2[d2] = 0;
    }
    return soni;
}

int main(void) {
    int n = 8;
    printf("yechimlar=%d\n", yechim(0, n));
    return 0;
}