#include <stdio.h>
#include <stdint.h>

void yoz_be(uint8_t b[4], uint32_t x) {
    b[0] = (uint8_t)(x >> 24);
    b[1] = (uint8_t)(x >> 16);
    b[2] = (uint8_t)(x >> 8);
    b[3] = (uint8_t)x;
}

uint32_t oqi_be(const uint8_t b[4]) {
    return ((uint32_t)b[0] << 24) |
           ((uint32_t)b[1] << 16) |
           ((uint32_t)b[2] << 8) |
           (uint32_t)b[3];
}

int main(void) {
    uint32_t x = 0x12345678u;
    uint8_t bayt[4];
    yoz_be(bayt, x);

    printf("baytlar: %02X %02X %02X %02X\n",
           bayt[0], bayt[1], bayt[2], bayt[3]);
    printf("qaytdi: %08X\n", oqi_be(bayt));
    return 0;
}