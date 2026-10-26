#include <stdio.h>

int main(void) {
    const char *e[] = {"a", "b", "c"};
    int n = 3;

    for (int mask = 0; mask < (1 << n); mask++) {
        printf("{");
        int birinchi = 1;
        for (int i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                if (!birinchi) printf(",");
                printf("%s", e[i]);
                birinchi = 0;
            }
        }
        printf("}\n");
    }
    return 0;
}