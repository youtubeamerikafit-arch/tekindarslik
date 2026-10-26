#include <stdio.h>
#include <string.h>

typedef struct {
    unsigned char *blok;
    size_t hajm;
    size_t ishlatilgan;
} Arena;

void *arena_ol(Arena *a, size_t n) {
    size_t tek = (a->ishlatilgan + 7u) & ~(size_t)7u;
    if (tek > a->hajm || n > a->hajm - tek) {
        return NULL;
    }
    void *p = a->blok + tek;
    a->ishlatilgan = tek + n;
    return p;
}

int main(void) {
    unsigned char bufer[32];
    Arena a = {bufer, sizeof bufer, 0};

    char *birinchi = arena_ol(&a, 6);
    memcpy(birinchi, "salom", 6);
    printf("ishlatilgan=%zu\n", a.ishlatilgan);

    a.ishlatilgan = 0;
    printf("reset=%zu\n", a.ishlatilgan);

    char *ikkinchi = arena_ol(&a, 5);
    memcpy(ikkinchi, "asal", 5);
    printf("yangi=%s used=%zu\n", ikkinchi, a.ishlatilgan);
    return 0;
}