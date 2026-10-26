#include <stdio.h>

int jami(int a[], int n) {
    int s = 0;
    for (int i = 0; i < n; i++) {
        s += a[i];
    }
    return s;
}

int main(void) {
    int a[5] = {1, 2, 3, 4, 5};
    int (*butun)[5] = &a;

    printf("elementlar=%zu\n", sizeof a / sizeof a[0]);
    printf("butun massiv=%zu\n", sizeof *butun / sizeof (*butun)[0]);
    printf("qadam=%ld\n", (long)((butun + 1) - butun));
    printf("jami=%d\n", jami(a, 5));
    return 0;
}