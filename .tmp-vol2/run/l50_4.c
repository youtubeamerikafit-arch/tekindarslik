#include <stdio.h>

void almashtir(const char **a, const char **b) {
    const char *vaqtincha = *a;
    *a = *b;
    *b = vaqtincha;
}

int main(void) {
    const char *x = "olma";
    const char *y = "anor";

    printf("oldin: %s %s\n", x, y);
    almashtir(&x, &y);
    printf("keyin: %s %s\n", x, y);
    return 0;
}