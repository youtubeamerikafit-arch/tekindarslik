#include <stdio.h>

int past_chegara(const int *a, int n, int x) {
    int past = 0, yuqori = n;
    while (past < yuqori) {
        int orta = past + (yuqori - past) / 2;
        if (a[orta] < x) past = orta + 1;
        else yuqori = orta;
    }
    return past;
}

int yuqori_chegara(const int *a, int n, int x) {
    int past = 0, yuqori = n;
    while (past < yuqori) {
        int orta = past + (yuqori - past) / 2;
        if (a[orta] <= x) past = orta + 1;
        else yuqori = orta;
    }
    return past;
}

int main(void) {
    int a[] = {1, 3, 3, 5, 8, 8, 8, 10};
    int n = (int)(sizeof a / sizeof a[0]);
    int p = past_chegara(a, n, 8);
    int y = yuqori_chegara(a, n, 8);
    printf("past=%d yuqori=%d soni=%d\n", p, y, y - p);
    printf("4_uchun=%d\n", past_chegara(a, n, 4));
    return 0;
}