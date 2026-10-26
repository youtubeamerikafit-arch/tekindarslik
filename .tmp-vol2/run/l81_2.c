#include <stdio.h>
#include <string.h>
#include <ctype.h>

typedef struct {
    const char *p;
} Parser;

void ws(Parser *ps) {
    while (isspace((unsigned char)*ps->p)) ps->p++;
}

int satr(Parser *ps, char *out, int cap) {
    if (*ps->p != '"') return 0;
    ps->p++;
    int k = 0;
    while (*ps->p && *ps->p != '"') {
        char c = *ps->p++;
        if (c == '\\') {
            char e = *ps->p++;
            if (e == 'n') c = '\n';
            else if (e == 't') c = '\t';
            else if (e == '"') c = '"';
            else if (e == '\\') c = '\\';
            else return 0;
        }
        if (k + 1 < cap) out[k++] = c;
    }
    if (*ps->p != '"') return 0;
    ps->p++;
    out[k] = '\0';
    return 1;
}

int butun(Parser *ps, int *x) {
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

int main(void) {
    const char *json = "{\"ism\":\"Ali\",\"yosh\":25,\"faol\":true}";
    Parser ps = {json};
    char ism[32] = "";
    int yosh = 0;

    ws(&ps);
    if (*ps.p != '{') return 1;
    ps.p++;
    ws(&ps);

    while (*ps.p != '}') {
        char kalit[32];
        if (!satr(&ps, kalit, sizeof kalit)) return 1;
        ws(&ps);
        if (*ps.p != ':') return 1;
        ps.p++;
        ws(&ps);

        if (strcmp(kalit, "ism") == 0) {
            if (!satr(&ps, ism, sizeof ism)) return 1;
        } else if (strcmp(kalit, "yosh") == 0) {
            if (!butun(&ps, &yosh)) return 1;
        } else {
            while (*ps.p && *ps.p != ',' && *ps.p != '}') ps.p++;
        }
        ws(&ps);
        if (*ps.p == ',') {
            ps.p++;
            ws(&ps);
        }
    }

    printf("ism=%s\n", ism);
    printf("yosh=%d\n", yosh);
    return 0;
}