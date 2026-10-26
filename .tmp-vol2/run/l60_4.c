#include <stdio.h>
#include <string.h>

int muvozanatli(const char *s) {
    char stek[64];
    int top = 0;

    for (size_t i = 0; s[i] != '\0'; i++) {
        char c = s[i];
        if (c == '(' || c == '[' || c == '{') {
            if (top == 64) {
                return 0;
            }
            stek[top++] = c;
        } else if (c == ')' || c == ']' || c == '}') {
            char kutilgan = (c == ')') ? '(' : (c == ']') ? '[' : '{';
            if (top == 0 || stek[--top] != kutilgan) {
                return 0;
            }
        }
    }
    return top == 0;
}

int main(void) {
    const char *yaxshi = "{[()]}";
    const char *yomon = "([)]";
    printf("%d\n", muvozanatli(yaxshi));
    printf("%d\n", muvozanatli(yomon));
    return 0;
}