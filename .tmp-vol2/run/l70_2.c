#include <stdio.h>
#include <stdlib.h>

void birlashtir(int *a, int *tmp, int chap, int orta, int ong) {
    int i = chap, j = orta + 1, k = chap;
    while (i <= orta && j <= ong) {
        if (a[i] <= a[j]) tmp[k++] = a[i++];
        else tmp[k++] = a[j++];
    }
    while (i <= orta) tmp[k++] = a[i++];
    while (j <= ong) tmp[k++] = a[j++];
    for (i = chap; i <= ong; i++) a[i] = tmp[i];
}

void merge_sort(int *a, int *tmp, int chap, int ong) {
    if (chap >= ong) return;
    int orta = chap + (ong - chap) / 2;
    merge_sort(a, tmp, chap, orta);
    merge_sort(a, tmp, orta + 1, ong);
    birlashtir(a, tmp, chap, orta, ong);
}

int main(void) {
    int a[] = {38, 27, 43, 3, 9, 82, 10};
    int n = (int)(sizeof a / sizeof a[0]);
    int *tmp = malloc((size_t)n * sizeof *tmp);
    if (!tmp) return 1;

    merge_sort(a, tmp, 0, n - 1);
    for (int i = 0; i < n; i++) {
        printf("%d%s", a[i], i + 1 < n ? " " : "\n");
    }
    free(tmp);
    return 0;
}