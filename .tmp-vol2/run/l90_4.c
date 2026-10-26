#include <stdio.h>
#include <stdlib.h>

int son_oyla(const char *s, int *natija) {
    char *oxiri = NULL;
    long v = strtol(s, &oxiri, 10);
    if (oxiri == s || *oxiri != '\0') {
        return 0;
    }
    *natija = (int)v;
    return 1;
}

int main(void) {
    struct {
        const char *kirish;
        int kutilgan_ok;
        int kutilgan_qiymat;
    } holatlar[] = {
        {"42", 1, 42},
        {"-7", 1, -7},
        {"12x", 0, 0},
        {"", 0, 0},
        {"2147483647", 1, 2147483647},
    };
    int n = (int)(sizeof holatlar / sizeof holatlar[0]);
    int otdi = 0;

    for (int i = 0; i < n; i++) {
        int qiymat = 0;
        int ok = son_oyla(holatlar[i].kirish, &qiymat);
        int togri = (ok == holatlar[i].kutilgan_ok) &&
                    (!ok || qiymat == holatlar[i].kutilgan_qiymat);
        printf("case %d: %s\n", i + 1, togri ? "ok" : "xato");
        otdi += togri;
    }
    printf("natija: %d/%d\n", otdi, n);
    return otdi == n ? 0 : 1;
}