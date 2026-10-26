#include <stdio.h>
#include <string.h>

#define MAX 64

int main(void) {
    const char *a = "ABCBDAB";
    const char *b = "BDCABA";
    int n = (int)strlen(a);
    int m = (int)strlen(b);
    int dp[MAX][MAX] = {0};

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a[i - 1] == b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = dp[i - 1][j] > dp[i][j - 1]
                           ? dp[i - 1][j] : dp[i][j - 1];
            }
        }
    }

    char natija[MAX];
    int k = 0, i = n, j = m;
    while (i > 0 && j > 0) {
        if (a[i - 1] == b[j - 1]) {
            natija[k++] = a[i - 1];
            i--;
            j--;
        } else if (dp[i - 1][j] >= dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }
    natija[k] = '\0';
    for (int x = 0; x < k / 2; x++) {
        char t = natija[x];
        natija[x] = natija[k - 1 - x];
        natija[k - 1 - x] = t;
    }
    printf("uzunlik=%d\n", dp[n][m]);
    printf("lcs=%s\n", natija);
    return 0;
}