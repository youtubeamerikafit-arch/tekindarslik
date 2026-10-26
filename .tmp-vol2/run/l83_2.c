#include <stdio.h>
#include <stddef.h>

struct A {
    char a;
    int b;
    char c;
};

int main(void) {
    printf("size=%zu\n", sizeof(struct A));
    printf("a=%zu b=%zu c=%zu\n",
           offsetof(struct A, a),
           offsetof(struct A, b),
           offsetof(struct A, c));
    return 0;
}