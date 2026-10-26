#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *p = malloc(sizeof *p);
    if (p == NULL) {
        return 1;
    }
    *p = 7;
    printf("qiymat=%d\n", *p);

    free(p);
    p = NULL;
    if (p == NULL) {
        printf("ko'rsatkich tozalandi\n");
    }
    return 0;
}