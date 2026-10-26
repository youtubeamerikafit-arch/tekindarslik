#include <stdio.h>

#define N 6

int main(void) {
    int g[N][N] = {0};
    int indeg[N] = {0};
    int navbat[N];
    int bosh = 0, oxir = 0;

    int qirralar[][2] = {{5, 2}, {5, 0}, {4, 0}, {4, 1}, {2, 3}, {3, 1}};
    int m = (int)(sizeof qirralar / sizeof qirralar[0]);

    for (int i = 0; i < m; i++) {
        int u = qirralar[i][0], v = qirralar[i][1];
        g[u][v] = 1;
        indeg[v]++;
    }

    for (int i = 0; i < N; i++) {
        if (indeg[i] == 0) navbat[oxir++] = i;
    }

    printf("tartib:");
    while (bosh < oxir) {
        int u = navbat[bosh++];
        printf(" %d", u);
        for (int v = 0; v < N; v++) {
            if (g[u][v]) {
                if (--indeg[v] == 0) navbat[oxir++] = v;
            }
        }
    }
    printf("\n");
    return 0;
}