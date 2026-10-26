#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

typedef struct {
    int *data;
    size_t size;
    size_t cap;
} Vektor;

int zaxira(Vektor *v, size_t kerak) {
    if (kerak <= v->cap) {
        return 1;
    }
    size_t yangi = v->cap ? v->cap : 2;
    while (yangi < kerak) {
        if (yangi > SIZE_MAX / 2) {
            yangi = kerak;
            break;
        }
        yangi *= 2;
    }
    if (yangi > SIZE_MAX / sizeof *v->data) {
        return 0;
    }
    int *p = realloc(v->data, yangi * sizeof *p);
    if (p == NULL) {
        return 0;
    }
    v->data = p;
    v->cap = yangi;
    return 1;
}

int main(void) {
    Vektor v = {0};
    for (int i = 1; i <= 5; i++) {
        if (!zaxira(&v, v.size + 1)) {
            free(v.data);
            return 1;
        }
        v.data[v.size++] = i;
    }
    printf("size=%zu cap=%zu\n", v.size, v.cap);
    for (size_t i = 0; i < v.size; i++) {
        printf("%d%s", v.data[i], i + 1 < v.size ? " " : "\n");
    }
    free(v.data);
    return 0;
}