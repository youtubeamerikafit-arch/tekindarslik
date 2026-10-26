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

void dfs(Graf *g, int u, int *tashrif) {
    tashrif[u] = 1;
    printf(" %d", u);
    for (Qirra *q = g->bosh[u]; q; q = q->keyingi) {
        if (!tashrif[q->to]) {
            dfs(g, q->to, tashrif);
        }
    }
}

int main(void) {
    Graf g = {0};
    qosh(&g, 0, 1);
    qosh(&g, 0, 2);
    qosh(&g, 1, 3);
    qosh(&g, 2, 3);
    qosh(&g, 3, 4);
    qosh(&g, 4, 5);

    int tashrif[N] = {0};
    printf("DFS:");
    dfs(&g, 0, tashrif);
    printf("\n");
    return 0;
}