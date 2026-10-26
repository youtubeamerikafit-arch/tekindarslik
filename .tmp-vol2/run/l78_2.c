#include <stdio.h>

int popcount(unsigned int x) {
    int soni = 0;
    while (x != 0) {
        x &= x - 1;
        soni++;
    }
    return soni;
}

int ikkining_darajasi(unsigned int x) {
    return x != 0 && (x & (x - 1)) == 0;
}

int main(void) {
    unsigned int x = 45;
    printf("x=%u popcount=%d\n", x, popcount(x));
    printf("pastki_bit=%u\n", x & (~x + 1));
    printf("64_daraja=%d\n", ikkining_darajasi(64));
    printf("45_daraja=%d\n", ikkining_darajasi(45));
    return 0;
}