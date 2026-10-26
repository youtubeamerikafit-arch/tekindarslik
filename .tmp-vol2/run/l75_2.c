#include <stdio.h>

#define MAX 100

static long long memo[MAX];
static int tayyor[MAX];

long long fib(int n) {
    if (n <= 1) return n;
    if (tayyor[n]) return memo[n];
    memo[n] = fib(n - 1) + fib(n - 2);
    tayyor[n] = 1;
    return memo[n];
}

int main(void) {
    printf("fib(10)=%lld\n", fib(10));
    printf("fib(40)=%lld\n", fib(40));
    printf("fib(90)=%lld\n", fib(90));
    return 0;
}