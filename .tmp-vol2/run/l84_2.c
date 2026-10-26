#include <stdio.h>
#include <stdarg.h>

int yigindi(int soni, ...) {
    va_list ap;
    va_start(ap, soni);
    int jami = 0;
    for (int i = 0; i < soni; i++) {
        jami += va_arg(ap, int);
    }
    va_end(ap);
    return jami;
}

int main(void) {
    printf("jami=%d\n", yigindi(4, 10, 20, 30, 40));
    printf("jami=%d\n", yigindi(2, 7, 8));
    return 0;
}