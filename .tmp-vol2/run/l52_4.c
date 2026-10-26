#include <stdio.h>

typedef int (*Amal)(int, int);

int qosh(int a, int b) { return a + b; }
int kopaytir(int a, int b) { return a * b; }

Amal tanla(char belgi) {
    if (belgi == '*') {
        return kopaytir;
    }
    return qosh;
}

int main(void) {
    Amal f = tanla('*');
    printf("f(6, 7) = %d\n", f(6, 7));
    printf("tanla('+')(8, 9) = %d\n", tanla('+')(8, 9));
    return 0;
}