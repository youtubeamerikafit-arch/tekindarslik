#include <stdio.h>

#define N 4
#define W 7

int max2(int a, int b) { return a > b ? a : b; }

int main(void) {
    int ogirlik[N] = {1, 3, 4, 5};
    int qiymat[N] = {1, 4, 5, 7};
    int dp[N + 1][W + 1] = {0};

    for (int i = 1; i <= N; i++) {
        for (int w = 0; w <= W; w++) {
            dp[i][w] = dp[i - 1][w];
            if (ogirlik[i - 1] <= w) {
                dp[i][w] = max2(dp[i][w],
                                dp[i - 1][w - ogirlik[i - 1]] + qiymat[i - 1]);
            }
        }
    }

    printf("maksimal=%d\n", dp[N][W]);
    printf("sigim=%d buyumlar=%d\n", W, N);

    int w = W;
    printf("tanlov:");
    for (int i = N; i > 0; i--) {
        if (dp[i][w] != dp[i - 1][w]) {
            printf(" %d", i);
            w -= ogirlik[i - 1];
        }
    }
    printf("\n");
    return 0;
}