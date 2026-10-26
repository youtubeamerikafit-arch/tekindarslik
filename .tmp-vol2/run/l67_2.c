#include <stdio.h>
#include <stdlib.h>

#define N 6

typedef struct Qirra {
    int to;
    struct Qirra *keyingi;
} Qirra;

typedef struct {
    Qirra *bosh[N];
} Graf;

void qosh(Graf *g, int u, int v) {
    Qirra *a = malloc(sizeof *a);
    a->to = v;
    a->keyingi = g->bosh[u];
    g->bosh[u] = a;

    Qirra *b = malloc(sizeof *b);
    b->to = u;
    b->keyingi = g->bosh[v];
    g->bosh[v] = b;
}

void bfs(Graf *g, int start) {
    int navbat[N];
    int bosh = 0, oxir = 0;
    int tashrif[N] = {0};

    navbat[oxir++] = start;
    tashrif[start] = 1;

    printf("BFS:");
    while (bosh < oxir) {
        int u = navbat[bosh++];
        printf(" %d", u);
        for (Qirra *q = g->bosh[u]; q; q = q->keyingi) {
            if (!tashrif[q->to]) {
                tashrif[q->to] = 1;
                navbat[oxir++] = q->to;
            }
        }
    }
    printf("\n");
}

int main(void) {
    Graf g = {0};
    qosh(&g, 0, 1);
    qosh(&g, 0, 2);
    qosh(&g, 1, 3);
    qosh(&g, 2, 3);
    qosh(&g, 3, 4);
    qosh(&g, 4, 5);
    bfs(&g, 0);
    return 0;
}