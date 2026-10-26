#include <stdio.h>
#include <stdint.h>
#include <string.h>

int main(void) {
    float f = 1.0f;
    uint32_t bits = 0;

    memcpy(&bits, &f, sizeof bits);
    printf("float=%.1f bits=%08X\n", f, bits);
    printf("olcham=%zu\n", sizeof bits);
    return 0;
}