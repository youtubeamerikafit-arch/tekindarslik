#include <stdio.h>

#define N 6

int ota[N];
int olcham[N];

void init(void) {
    for (int i = 0; i < N; i++) {
        ota[i] = i;
        olcham[i] = 1;
    }
}

int top(int x) {
    while (ota[x] != x) {
        ota[x] = ota[ota[x]];
        x = ota[x];
    }
    return x;
}

int birlashtir(int a, int b) {
    int ra = top(a), rb = top(b);
    if (ra == rb) return 0;
    if (olcham[ra] < olcham[rb]) {
        int t = ra;
        ra = rb;
        rb = t;
    }
    ota[rb] = ra;
    olcham[ra] += olcham[rb];
    return 1;
}

int main(void) {
    init();
    birlashtir(0, 1);
    birlashtir(2, 3);
    birlashtir(1, 2);

    printf("0_va_3=%d\n", top(0) == top(3));
    printf("4_va_5=%d\n", top(4) == top(5));

    int komponent = 0;
    for (int i = 0; i < N; i++) {
        if (top(i) == i) komponent++;
    }
    printf("komponent=%d\n", komponent);
    return 0;
}