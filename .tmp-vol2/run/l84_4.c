#include <stdio.h>
#include <stdarg.h>

void logf(const char *daraja, const char *format, ...) {
    va_list ap;
    va_start(ap, format);
    printf("[%s] ", daraja);
    vprintf(format, ap);
    printf("\n");
    va_end(ap);
}

int main(void) {
    logf("INFO", "foydalanuvchi=%s yosh=%d", "Ali", 25);
    logf("WARN", "ball=%d", 90);
    logf("DEBUG", "x=%.1f", 3.5);
    return 0;
}