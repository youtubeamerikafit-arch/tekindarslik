#include <stdio.h>
#include <string.h>
#include <stdint.h>

#define CAP 8
typedef enum { BOSH, BAND, TOMB } Holat;

typedef struct {
    char kalit[16];
    int qiymat;
    Holat holat;
} Slot;

typedef struct {
    Slot slotlar[CAP];
    size_t soni;
    size_t tomb;
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
    size_t start = (size_t)(hash(kalit) % CAP);
    size_t tomb = CAP;
    for (size_t i = 0; i < CAP; i++) {
        size_t idx = (start + i) % CAP;
        Slot *s = &j->slotlar[idx];
        if (s->holat == BAND && strcmp(s->kalit, kalit) == 0) {
            s->qiymat = qiymat;
            return 1;
        }
        if (s->holat == TOMB && tomb == CAP) tomb = idx;
        if (s->holat == BOSH) {
            if (tomb != CAP) {
                s = &j->slotlar[tomb];
                j->tomb--;
            }
            snprintf(s->kalit, sizeof s->kalit, "%s", kalit);
            s->qiymat = qiymat;
            s->holat = BAND;
            j->soni++;
            return 1;
        }
    }
    return 0;
}

int ochir(Jadval *j, const char *kalit) {
    size_t start = (size_t)(hash(kalit) % CAP);
    for (size_t i = 0; i < CAP; i++) {
        Slot *s = &j->slotlar[(start + i) % CAP];
        if (s->holat == BOSH) return 0;
        if (s->holat == BAND && strcmp(s->kalit, kalit) == 0) {
            s->holat = TOMB;
            j->soni--;
            j->tomb++;
            return 1;
        }
    }
    return 0;
}

int top(Jadval *j, const char *kalit, int *qiymat) {
    size_t start = (size_t)(hash(kalit) % CAP);
    for (size_t i = 0; i < CAP; i++) {
        Slot *s = &j->slotlar[(start + i) % CAP];
        if (s->holat == BOSH) return 0;
        if (s->holat == BAND && strcmp(s->kalit, kalit) == 0) {
            *qiymat = s->qiymat;
            return 1;
        }
    }
    return 0;
}

int main(void) {
    Jadval j = {0};
    qosh(&j, "ali", 1);
    qosh(&j, "vali", 2);
    qosh(&j, "hasan", 3);

    printf("o'chirildi=%d\n", ochir(&j, "vali"));
    int qiymat = -1;
    printf("vali=%d\n", top(&j, "vali", &qiymat) ? qiymat : -1);
    qosh(&j, "olim", 4);
    printf("olim=%d\n", top(&j, "olim", &qiymat) ? qiymat : -1);
    printf("soni=%zu tomb=%zu\n", j.soni, j.tomb);
    return 0;
}