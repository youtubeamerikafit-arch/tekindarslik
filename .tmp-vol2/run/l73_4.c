#include <stdio.h>
#include <string.h>

static int poz[16];
static int ustun[16];
static int d1[32];
static int d2[32];

int yech(int qator, int n) {
    if (qator == n) {
        return 1;
    }
    for (int col = 0; col < n; col++) {
        int a = qator - col + n;
        int b = qator + col;
        if (ustun[col] || d1[a] || d2[b]) continue;
        poz[qator] = col;
        ustun[col] = d1[a] = d2[b] = 1;
        if (yech(qator + 1, n)) return 1;
        ustun[col] = d1[a] = d2[b] = 0;
    }
    return 0;
}

int main(void) {
    int n = 6;
    if (!yech(0, n)) {
        printf("yechim yo'q\n");
        return 1;
    }
    printf("ustunlar:");
    for (int i = 0; i < n; i++) {
        printf(" %d", poz[i]);
    }
    printf("\n");
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            putchar(poz[i] == j ? 'Q' : '.');
        }
        putchar('\n');
    }
    return 0;
}