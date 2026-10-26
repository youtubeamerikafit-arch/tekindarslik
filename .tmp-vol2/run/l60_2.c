#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

#define CAP 32

int main(void) {
    char ifoda[] = "3 4 + 2 *";
    int stek[CAP];
    int top = 0;
    char *p = ifoda;

    while (*p != '\0') {
        while (isspace((unsigned char)*p)) {
            p++;
        }
        if (*p == '\0') {
            break;
        }
        if (*p == '+' || *p == '-' || *p == '*' || *p == '/') {
            if (top < 2) {
                printf("xato: operand yetarli emas\n");
                return 1;
            }
            int b = stek[--top];
            int a = stek[--top];
            int natija = 0;
            switch (*p) {
                case '+': natija = a + b; break;
                case '-': natija = a - b; break;
                case '*': natija = a * b; break;
                case '/': natija = a / b; break;
            }
            stek[top++] = natija;
            p++;
        } else {
            char *oxiri = NULL;
            long son = strtol(p, &oxiri, 10);
            if (oxiri == p || top == CAP) {
                printf("xato: token\n");
                return 1;
            }
            stek[top++] = (int)son;
            p = oxiri;
        }
    }

    if (top != 1) {
        printf("xato: ifoda tugallanmagan\n");
        return 1;
    }
    printf("natija=%d\n", stek[0]);
    return 0;
}