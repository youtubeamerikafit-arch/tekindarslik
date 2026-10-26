#include <stdio.h>
#include <stdlib.h>

void counting_sort(int *a, int n, int k) {
    int *son = calloc((size_t)k, sizeof *son);
    int *natija = malloc((size_t)n * sizeof *natija);
    if (!son || !natija) {
        free(son);
        free(natija);
        return;
    }
    for (int i = 0; i < n; i++) son[a[i]]++;
    for (int i = 1; i < k; i++) son[i] += son[i - 1];
    for (int i = n - 1; i >= 0; i--) {
        natija[son[a[i]] - 1] = a[i];
        son[a[i]]--;
    }
    for (int i = 0; i < n; i++) a[i] = natija[i];
    free(son);
    free(natija);
}

int main(void) {
    int a[] = {4, 2, 2, 8, 3, 3, 1};
    int n = (int)(sizeof a / sizeof a[0]);
    counting_sort(a, n, 10);
    for (int i = 0; i < n; i++) {
        printf("%d%s", a[i], i + 1 < n ? " " : "\n");
    }
    return 0;
}