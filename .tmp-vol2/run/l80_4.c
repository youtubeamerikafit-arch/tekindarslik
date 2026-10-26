#include <stdio.h>
#include <string.h>

int maydonlar(const char *satr, char out[][32], int maks) {
    const char *p = satr;
    int n = 0;
    while (*p && n < maks) {
        int k = 0;
        if (*p == '"') {
            p++;
            while (*p) {
                if (*p == '"' && p[1] == '"') {
                    out[n][k++] = '"';
                    p += 2;
                } else if (*p == '"') {
                    p++;
                    break;
                } else {
                    out[n][k++] = *p++;
                }
            }
        } else {
            while (*p && *p != ',') out[n][k++] = *p++;
        }
        out[n][k] = '\0';
        n++;
        if (*p == ',') p++;
    }
    return n;
}

int main(void) {
    char csv[] = "ism,yosh\nKarim,30\n\"Zo\"\"r\",25\n";
    char *qator = strtok(csv, "\n");
    int q = 0;
    char maydon[4][32];

    while (qator) {
        int n = maydonlar(qator, maydon, 4);
        printf("qator %d: maydon=%d birinchi=%s\n", q, n, maydon[0]);
        q++;
        qator = strtok(NULL, "\n");
    }
    printf("jami=%d\n", q);
    return 0;
}