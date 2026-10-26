#include <stdio.h>
#include <stdlib.h>

void xona_sort(int *a, int n, int xona) {
    int natija[16];
    int son[10] = {0};

    for (int i = 0; i < n; i++) {
        son[(a[i] / xona) % 10]++;
    }
    for (int i = 1; i < 10; i++) {
        son[i] += son[i - 1];
    }
    for (int i = n - 1; i >= 0; i--) {
        int raqam = (a[i] / xona) % 10;
        natija[--son[raqam]] = a[i];
    }
    for (int i = 0; i < n; i++) {
        a[i] = natija[i];
    }
}

void radix_sort(int *a, int n) {
    int eng_katta = 0;
    for (int i = 0; i < n; i++) {
        if (a[i] > eng_katta) eng_katta = a[i];
    }
    for (int xona = 1; eng_katta / xona > 0; xona *= 10) {
        xona_sort(a, n, xona);
    }
}

int main(void) {
    int a[] = {170, 45, 75, 90, 802, 24, 2, 66};
    int n = (int)(sizeof a / sizeof a[0]);
    radix_sort(a, n);
    for (int i = 0; i < n; i++) {
        printf("%d%s", a[i], i + 1 < n ? " " : "\n");
    }
    return 0;
}