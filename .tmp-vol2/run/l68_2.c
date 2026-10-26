#include <stdio.h>
#include <limits.h>

#define N 5
#define INF 1000000

int main(void) {
    int g[N][N] = {
        {0, 4, 1, 0, 0},
        {0, 0, 0, 1, 0},
        {0, 2, 0, 5, 0},
        {0, 0, 0, 0, 3},
        {0, 0, 0, 0, 0},
    };
    int masofa[N];
    int tashrif[N] = {0};

    for (int i = 0; i < N; i++) masofa[i] = INF;
    masofa[0] = 0;

    for (int qadam = 0; qadam < N; qadam++) {
        int u = -1;
        for (int i = 0; i < N; i++) {
            if (!tashrif[i] && (u == -1 || masofa[i] < masofa[u])) {
                u = i;
            }
        }
        if (u == -1 || masofa[u] == INF) break;
        tashrif[u] = 1;
        for (int v = 0; v < N; v++) {
            if (g[u][v] != 0 && masofa[u] + g[u][v] < masofa[v]) {
                masofa[v] = masofa[u] + g[u][v];
            }
        }
    }

    for (int i = 0; i < N; i++) {
        printf("%d:%d%s", i, masofa[i], i + 1 < N ? " " : "\n");
    }
    return 0;
}