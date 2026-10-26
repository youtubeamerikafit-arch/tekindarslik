#include <stdio.h>
#include <stdint.h>

int varint_yoz(uint32_t x, uint8_t *out) {
    int n = 0;
    while (x >= 0x80u) {
        out[n++] = (uint8_t)((x & 0x7Fu) | 0x80u);
        x >>= 7;
    }
    out[n++] = (uint8_t)x;
    return n;
}

int varint_oqi(const uint8_t *in, int n, uint32_t *x) {
    uint32_t natija = 0;
    int siljish = 0;
    for (int i = 0; i < n; i++) {
        natija |= (uint32_t)(in[i] & 0x7Fu) << siljish;
        if ((in[i] & 0x80u) == 0) {
            *x = natija;
            return i + 1;
        }
        siljish += 7;
        if (siljish >= 32) return 0;
    }
    return 0;
}

int main(void) {
    uint32_t x = 300;
    uint8_t bayt[8];
    int n = varint_yoz(x, bayt);

    printf("300 ->");
    for (int i = 0; i < n; i++) {
        printf(" %02X", bayt[i]);
    }
    printf("\n");

    uint32_t qaytdi = 0;
    int ishlatilgan = varint_oqi(bayt, n, &qaytdi);
    printf("qaytdi=%u bayt=%d\n", qaytdi, ishlatilgan);
    return 0;
}