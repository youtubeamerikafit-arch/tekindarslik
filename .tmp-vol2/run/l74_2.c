#include <stdio.h>
#include <string.h>

void almashtir(char *a, char *b) {
    char t = *a;
    *a = *b;
    *b = t;
}

void permutatsiya(char *s, int chap, int ong) {
    if (chap == ong) {
        printf("%s\n", s);
        return;
    }
    for (int i = chap; i <= ong; i++) {
        almashtir(&s[chap], &s[i]);
        permutatsiya(s, chap + 1, ong);
        almashtir(&s[chap], &s[i]);
    }
}

int main(void) {
    char s[] = "ABC";
    permutatsiya(s, 0, (int)strlen(s) - 1);
    return 0;
}