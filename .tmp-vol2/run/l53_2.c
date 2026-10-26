#include <stdio.h>
#include <string.h>

typedef struct {
    unsigned char *blok;
    size_t hajm;
    size_t ishlatilgan;
} Arena;

void *arena_ol(Arena *a, size_t n) {
    size_t tek = (a->ishlatilgan + sizeof(void *) - 1)
                 & ~(sizeof(void *) - 1);
    if (tek > a->hajm || n > a->hajm - tek) {
        return NULL;
    }
    void *p = a->blok + tek;
    a->ishlatilgan = tek + n;
    return p;
}

void arena_reset(Arena *a) {
    a->ishlatilgan = 0;
}

int main(void) {
    unsigned char xotira[64];
    Arena a = {xotira, sizeof xotira, 0};

    int *sonlar = arena_ol(&a, 3 * sizeof *sonlar);
    for (int i = 0; i < 3; i++) {
        sonlar[i] = i * i;
    }

    char *matn = arena_ol(&a, 6);
    memcpy(matn, "salom", 6);

    printf("%d %d %d\n", sonlar[0], sonlar[1], sonlar[2]);
    printf("%s\n", matn);
    printf("ishlatilgan=%zu\n", a.ishlatilgan);
    return 0;
}