#include <stdio.h>

#define N 1000

static int a[N][N];

int main(void) {
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            a[i][j] = i + j;
        }
    }

    long qator = 0, ustun = 0;
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            qator += a[i][j];
        }
    }
    for (int j = 0; j < N; j++) {
        for (int i = 0; i < N; i++) {
            ustun += a[i][j];
        }
    }
    printf("qator=%ld ustun=%ld\n", qator, ustun);
    return 0;
}