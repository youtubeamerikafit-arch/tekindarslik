#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    size_t uzunlik;
    char matn[];
} Satr;

Satr *satr_yarat(const char *s) {
    size_t n = strlen(s);
    Satr *p = malloc(sizeof *p + n + 1);
    if (p == NULL) {
        return NULL;
    }
    p->uzunlik = n;
    memcpy(p->matn, s, n + 1);
    return p;
}

int main(void) {
    Satr *s = satr_yarat("Noldan");
    if (s == NULL) {
        return 1;
    }
    printf("uzunlik=%zu matn=%s\n", s->uzunlik, s->matn);
    free(s);
    return 0;
}