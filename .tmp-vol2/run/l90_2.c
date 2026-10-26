#include <stdio.h>

int qosh(int a, int b) {
    return a + b;
}

int main(void) {
    int jami = 0, otdi = 0;

    #define TEST(nom, ifoda) do { \
        jami++; \
        if (ifoda) { \
            otdi++; \
            printf("PASS %s\n", nom); \
        } else { \
            printf("FAIL %s\n", nom); \
        } \
    } while (0)

    TEST("musbat", qosh(2, 3) == 5);
    TEST("manfiy", qosh(-2, -3) == -5);
    TEST("nol", qosh(0, 0) == 0);

    printf("natija: %d/%d\n", otdi, jami);
    return otdi == jami ? 0 : 1;
}