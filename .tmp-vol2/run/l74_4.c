#include <stdio.h>

int tanla(int *a, int n, int i, int qoldi, int *javob, int *uzunlik) {
    if (qoldi == 0) {
        return 1;
    }
    if (i == n || qoldi < 0) {
        return 0;
    }
    javob[*uzunlik] = a[i];
    (*uzunlik)++;
    if (tanla(a, n, i + 1, qoldi - a[i], javob, uzunlik)) {
        return 1;
    }
    (*uzunlik)--;

    if (tanla(a, n, i + 1, qoldi, javob, uzunlik)) {
        return 1;
    }
    return 0;
}

int main(void) {
    int a[] = {3, 34, 4, 12, 5, 2};
    int n = (int)(sizeof a / sizeof a[0]);
    int javob[8];
    int uzunlik = 0;

    if (tanla(a, n, 0, 9, javob, &uzunlik)) {
        printf("topildi:");
        for (int i = 0; i < uzunlik; i++) {
            printf(" %d", javob[i]);
        }
        printf("\n");
    } else {
        printf("topilmadi\n");
    }
    return 0;
}