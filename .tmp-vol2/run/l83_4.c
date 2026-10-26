#include <stdio.h>
#include <stddef.h>

struct B {
    char a;
    char c;
    int b;
};

struct C {
    int b;
    char a;
    char c;
};

int main(void) {
    printf("B=%zu C=%zu\n", sizeof(struct B), sizeof(struct C));
    printf("B_b=%zu C_b=%zu\n",
           offsetof(struct B, b),
           offsetof(struct C, b));
    printf("element=%zu\n", sizeof(struct B[10]));
    return 0;
}