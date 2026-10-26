#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>

typedef struct Tugun {
    char kalit[16];
    int qiymat;
    struct Tugun *keyingi;
} Tugun;

#define CAP 4

typedef struct {
    Tugun **slotlar;
    size_t sigim;
    size_t soni;
} Jadval;

uint64_t hash(const char *s) {
    uint64_t h = 1469598103934665603ULL;
    while (*s) {
        h ^= (unsigned char)*s++;
        h *= 1099511628211ULL;
    }
    return h;
}

int jadval_init(Jadval *j, size_t sigim) {
    j->slotlar = calloc(sigim, sizeof *j->slotlar);
    if (!j->slotlar) return 0;
    j->sigim = sigim;
    j->soni = 0;
    return 1;
}

int kattalashtir(Jadval *j) {
    size_t yangi_sigim = j->sigim * 2;
    Tugun **yangi = calloc(yangi_sigim, sizeof *yangi);
    if (!yangi) return 0;
    for (size_t i = 0; i < j->sigim; i++) {
        Tugun *t = j->slotlar[i];
        while (t) {
            Tugun *keyingi = t->keyingi;
            size_t idx = (size_t)(hash(t->kalit) % yangi_sigim);
            t->keyingi = yangi[idx];
            yangi[idx] = t;
            t = keyingi;
        }
    }
    free(j->slotlar);
    j->slotlar = yangi;
    j->sigim = yangi_sigim;
    return 1;
}

int qosh(Jadval *j, const char *kalit, int qiymat) {
    if (j->soni + 1 > j->sigim * 3 / 4) {
        if (!kattalashtir(j)) return 0;
    }
    size_t idx = (size_t)(hash(kalit) % j->sigim);
    for (Tugun *t = j->slotlar[idx]; t; t = t->keyingi) {
        if (strcmp(t->kalit, kalit) == 0) {
            t->qiymat = qiymat;
            return 1;
        }
    }
    Tugun *t = malloc(sizeof *t);
    if (!t) return 0;
    snprintf(t->kalit, sizeof t->kalit, "%s", kalit);
    t->qiymat = qiymat;
    t->keyingi = j->slotlar[idx];
    j->slotlar[idx] = t;
    j->soni++;
    return 1;
}

int main(void) {
    Jadval j;
    jadval_init(&j, CAP);
    const char *kalitlar[] = {"ali", "vali", "hasan", "olim", "zuhra", "kamol"};
    for (int i = 0; i < 6; i++) {
        qosh(&j, kalitlar[i], i + 1);
    }
    printf("sigim=%zu soni=%zu\n", j.sigim, j.soni);
    printf("kamol_bor=%d\n", j.sigim == 8 ? 1 : 0);
    return 0;
}