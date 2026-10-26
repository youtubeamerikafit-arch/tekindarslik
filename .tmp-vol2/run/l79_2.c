#include <stdio.h>
#include <stdint.h>

void ornat(uint64_t *s, int i) {
    *s |= UINT64_C(1) << i;
}

int tekshir(uint64_t s, int i) {
    return (s & (UINT64_C(1) << i)) != 0;
}

int main(void) {
    uint64_t s = 0;
    int indekslar[] = {1, 5, 9, 63};
    for (int i = 0; i < 4; i++) {
        ornat(&s, indekslar[i]);
    }

    int soni = 0;
    uint64_t t = s;
    while (t) {
        t &= t - 1;
        soni++;
    }
    printf("soni=%d\n", soni);
    printf("5_bor=%d\n", tekshir(s, 5));
    printf("6_bor=%d\n", tekshir(s, 6));
    printf("63_bor=%d\n", tekshir(s, 63));
    return 0;
}