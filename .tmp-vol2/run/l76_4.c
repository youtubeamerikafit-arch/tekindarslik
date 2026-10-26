#include <stdio.h>
#include <string.h>

int min3(int a, int b, int c) {
    int m = a < b ? a : b;
    return m < c ? m : c;
}

int masofa(const char *a, const char *b) {
    int n = (int)strlen(a);
    int m = (int)strlen(b);
    int dp[32][32];

    for (int i = 0; i <= n; i++) dp[i][0] = i;
    for (int j = 0; j <= m; j++) dp[0][j] = j;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a[i - 1] == b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + min3(dp[i - 1][j],
                                    dp[i][j - 1],
                                    dp[i - 1][j - 1]);
            }
        }
    }
    return dp[n][m];
}

int main(void) {
    printf("kitten->sitting=%d\n", masofa("kitten", "sitting"));
    printf("abc->abc=%d\n", masofa("abc", "abc"));
    printf("abc->yabd=%d\n", masofa("abc", "yabd"));
    return 0;
}