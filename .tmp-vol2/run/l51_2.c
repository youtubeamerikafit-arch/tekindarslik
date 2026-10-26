#include <stdio.h>
#include <stddef.h>

int main(void) {
    int a[] = {4, 8, 15, 16, 23, 42};
    int *bosh = a;
    int *oxiri = a + sizeof a / sizeof a[0];
    long jami = 0;

    for (int *p = bosh; p < oxiri; p++) {
        jami += *p;
    }

    ptrdiff_t n = oxiri - bosh;
    printf("n=%ld jami=%ld\n", (long)n, jami);
    printf("oxirgi=%d\n", *(oxiri - 1));
    printf("one-past teng=%d\n", oxiri == a + 6);
    return 0;
}