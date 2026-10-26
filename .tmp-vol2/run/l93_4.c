#include <stdio.h>

int qosh(int a, int b) {
    return a + b;
}

int main(void) {
    struct {
        int a, b, kutilgan;
    } t[] = {{1, 2, 3}, {-1, 1, 0}, {100, 200, 300}};
    int n = (int)(sizeof t / sizeof t[0]);
    int otdi = 0;

    for (int i = 0; i < n; i++) {
        if (qosh(t[i].a, t[i].b) == t[i].kutilgan) {
            otdi++;
        }
    }
    printf("test: %d/%d\n", otdi, n);
    return otdi == n ? 0 : 1;
}