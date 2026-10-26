#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *a = malloc(3 * sizeof *a);
    if (a == NULL) {
        return 1;
    }
    for (int i = 0; i < 3; i++) {
        a[i] = (i + 1) * 10;
    }
    printf("a[1]=%d\n", a[1]);
    /* free(a) ataylab yozilmagan */
    return 0;
}