#include <stdio.h>

int yetadi(const int *w, int n, int kun, int sigim) {
    int kerak = 1;
    int joriy = 0;
    for (int i = 0; i < n; i++) {
        if (w[i] > sigim) return 0;
        if (joriy + w[i] > sigim) {
            kerak++;
            joriy = 0;
        }
        joriy += w[i];
    }
    return kerak <= kun;
}

int main(void) {
    int w[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int n = (int)(sizeof w / sizeof w[0]);
    int kun = 5;
    int past = 10, yuqori = 55;

    while (past < yuqori) {
        int orta = past + (yuqori - past) / 2;
        if (yetadi(w, n, kun, orta)) yuqori = orta;
        else past = orta + 1;
    }
    printf("sig'im=%d\n", past);
    return 0;
}