#include <stdio.h>
#include <ctype.h>

typedef struct {
    const char *p;
} Parser;

void ws(Parser *ps) {
    while (isspace((unsigned char)*ps->p)) ps->p++;
}

int son(Parser *ps, int *x) {
    int belgi = 1;
    if (*ps->p == '-') {
        belgi = -1;
        ps->p++;
    }
    if (!isdigit((unsigned char)*ps->p)) return 0;
    int v = 0;
    while (isdigit((unsigned char)*ps->p)) {
        v = v * 10 + (*ps->p - '0');
        ps->p++;
    }
    *x = belgi * v;
    return 1;
}

int massiv(Parser *ps, int *jami) {
    if (*ps->p != '[') return 0;
    ps->p++;
    ws(ps);
    if (*ps->p == ']') {
        ps->p++;
        return 1;
    }
    for (;;) {
        int x = 0;
        ws(ps);
        if (!son(ps, &x)) return 0;
        *jami += x;
        ws(ps);
        if (*ps->p == ',') {
            ps->p++;
            continue;
        }
        if (*ps->p == ']') {
            ps->p++;
            return 1;
        }
        return 0;
    }
}

int main(void) {
    const char *json = "[10, 20, 30, -5, 45]";
    Parser ps = {json};
    int jami = 0;

    if (!massiv(&ps, &jami)) {
        printf("json xato\n");
        return 1;
    }
    ws(&ps);
    printf("yig'indi=%d\n", jami);
    printf("tugadi=%d\n", *ps.p == '\0');
    return 0;
}