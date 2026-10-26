#include <stdio.h>

void almashtir(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int bolish(int *a, int past, int yuqori) {
    int pivot = a[yuqori];
    int i = past - 1;
    for (int j = past; j < yuqori; j++) {
        if (a[j] <= pivot) {
            i++;
            almashtir(&a[i], &a[j]);
        }
    }
    almashtir(&a[i + 1], &a[yuqori]);
    return i + 1;
}

void quick_sort(int *a, int past, int yuqori) {
    if (past >= yuqori) return;
    int p = bolish(a, past, yuqori);
    quick_sort(a, past, p - 1);
    quick_sort(a, p + 1, yuqori);
}

int main(void) {
    int a[] = {38, 27, 43, 3, 9, 82, 10};
    int n = (int)(sizeof a / sizeof a[0]);
    quick_sort(a, 0, n - 1);
    for (int i = 0; i < n; i++) {
        printf("%d%s", a[i], i + 1 < n ? " " : "\n");
    }
    return 0;
}