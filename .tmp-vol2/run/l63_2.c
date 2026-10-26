#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>

#define CAP 8

typedef struct Tugun {
    char kalit[16];
    int qiymat;
    struct Tugun *keyingi;
} Tugun;

typedef struct {
    Tugun *slotlar[CAP];
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

int qosh(Jadval *j, const char *kalit, int qiymat) {
    size_t idx = (size_t)(hash(kalit) % CAP);
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

int top(Jadval *j, const char *kalit, int *qiymat) {
    size_t idx = (size_t)(hash(kalit) % CAP);
    for (Tugun *t = j->slotlar[idx]; t; t = t->keyingi) {
        if (strcmp(t->kalit, kalit) == 0) {
            *qiymat = t->qiymat;
            return 1;
        }
    }
    return 0;
}

int main(void) {
    Jadval j = {0};
    const char *kalitlar[] = {"ali", "vali", "hasan", "olim", "zuhra"};
    for (int i = 0; i < 5; i++) {
        qosh(&j, kalitlar[i], i + 1);
    }
    int qiymat = 0;
    printf("ali=%d\n", top(&j, "ali", &qiymat) ? qiymat : -1);
    printf("zuhra=%d\n", top(&j, "zuhra", &qiymat) ? qiymat : -1);
    printf("soni=%zu\n", j.soni);
    return 0;
}