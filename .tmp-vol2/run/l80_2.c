#include <stdio.h>
#include <string.h>

int ajrat(const char *satr, char maydon[][32], int maks) {
    const char *p = satr;
    int soni = 0;

    while (*p != '\0' && soni < maks) {
        int k = 0;
        if (*p == '"') {
            p++;
            while (*p != '\0') {
                if (*p == '"') {
                    if (p[1] == '"') {
                        if (k < 31) maydon[soni][k++] = '"';
                        p += 2;
                    } else {
                        p++;
                        break;
                    }
                } else {
                    if (k < 31) maydon[soni][k++] = *p;
                    p++;
                }
            }
        } else {
            while (*p != '\0' && *p != ',') {
                if (k < 31) maydon[soni][k++] = *p;
                p++;
            }
        }
        maydon[soni][k] = '\0';
        soni++;
        if (*p == ',') p++;
    }
    return soni;
}

int main(void) {
    char maydon[8][32];
    int n = ajrat("\"Ali, Vali\",25,\"Toshkent\"", maydon, 8);

    printf("maydonlar=%d\n", n);
    for (int i = 0; i < n; i++) {
        printf("%d: %s\n", i, maydon[i]);
    }
    return 0;
}