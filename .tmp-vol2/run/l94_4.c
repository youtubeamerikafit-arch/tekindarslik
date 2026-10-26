#include <stdio.h>
#include <limits.h>

int xavfsiz_qosh(int a, int b, int *natija) {
    if (b > 0 && a > INT_MAX - b) return 0;
    if (b < 0 && a < INT_MIN - b) return 0;
    *natija = a + b;
    return 1;
}

int main(void) {
    int natija = 0;
    printf("oddiy=%d natija=%d\n",
           xavfsiz_qosh(2, 3, &natija), natija);
    printf("katta=%d\n", xavfsiz_qosh(INT_MAX, 1, &natija));
    printf("kichik=%d\n", xavfsiz_qosh(INT_MIN, -1, &natija));
    return 0;
}