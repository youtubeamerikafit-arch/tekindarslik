#include <stdio.h>

#define CAP 5

typedef struct {
    int data[CAP];
    size_t head;
    size_t tail;
    size_t count;
} Deque;

int oldiga(Deque *d, int x) {
    if (d->count == CAP) return 0;
    d->head = (d->head + CAP - 1) % CAP;
    d->data[d->head] = x;
    d->count++;
    return 1;
}

int orqaga(Deque *d, int x) {
    if (d->count == CAP) return 0;
    d->data[d->tail] = x;
    d->tail = (d->tail + 1) % CAP;
    d->count++;
    return 1;
}

int oldidan(Deque *d, int *x) {
    if (d->count == 0) return 0;
    *x = d->data[d->head];
    d->head = (d->head + 1) % CAP;
    d->count--;
    return 1;
}

int main(void) {
    Deque d = {0};
    orqaga(&d, 2);
    orqaga(&d, 3);
    oldiga(&d, 1);
    orqaga(&d, 4);

    int x = 0;
    oldidan(&d, &x);
    printf("oldidan=%d\n", x);

    printf("ichida:");
    for (size_t i = 0; i < d.count; i++) {
        printf(" %d", d.data[(d.head + i) % CAP]);
    }
    printf("\n");

    oldiga(&d, 0);
    printf("yangi_soni=%zu\n", d.count);
    return 0;
}