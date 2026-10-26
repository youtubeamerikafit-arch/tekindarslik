#include <stdio.h>
#include <stdlib.h>

int **matritsa_yarat(int qator, int ustun) {
    int **m = malloc((size_t)qator * sizeof *m);
    if (m == NULL) {
        return NULL;
    }
    for (int i = 0; i < qator; i++) {
        m[i] = malloc((size_t)ustun * sizeof *m[i]);
        if (m[i] == NULL) {
            while (i > 0) {
                free(m[--i]);
            }
            free(m);
            return NULL;
        }
    }
    for (int i = 0; i < qator; i++) {
        for (int j = 0; j < ustun; j++) {
            m[i][j] = (i + 1) * 10 + j;
        }
    }
    return m;
}

void matritsa_ochir(int **m, int qator) {
    for (int i = 0; i < qator; i++) {
        free(m[i]);
    }
    free(m);
}

int main(void) {
    int **m = matritsa_yarat(2, 3);
    if (m == NULL) {
        return 1;
    }
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", m[i][j]);
        }
        printf("\n");
    }
    printf("qator=%d ustun=%d\n", 2, 3);
    matritsa_ochir(m, 2);
    return 0;
}