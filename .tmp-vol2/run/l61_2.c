#include <stdio.h>

#define CAP 4

typedef struct {
    int data[CAP];
    size_t head;
    size_t tail;
    size_t count;
} Navbat;

int qosh(Navbat *q, int x) {
    if (q->count == CAP) {
        return 0;
    }
    q->data[q->tail] = x;
    q->tail = (q->tail + 1) % CAP;
    q->count++;
    return 1;
}

int ol(Navbat *q, int *x) {
    if (q->count == 0) {
        return 0;
    }
    *x = q->data[q->head];
    q->head = (q->head + 1) % CAP;
    q->count--;
    return 1;
}

int main(void) {
    Navbat q = {0};
    for (int i = 1; i <= 4; i++) {
        qosh(&q, i * 10);
    }
    printf("beshinchi=%s\n", qosh(&q, 50) ? "qo'shildi" : "to'la");

    int x = 0;
    ol(&q, &x);
    printf("olindi=%d ", x);
    ol(&q, &x);
    printf("%d\n", x);

    qosh(&q, 50);
    qosh(&q, 60);
    printf("soni=%zu\n", q.count);

    printf("navbat:");
    for (size_t i = 0; i < q.count; i++) {
        printf(" %d", q.data[(q.head + i) % CAP]);
    }
    printf("\n");
    return 0;
}