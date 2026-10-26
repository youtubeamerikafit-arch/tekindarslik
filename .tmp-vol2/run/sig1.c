#include <stdio.h>
#include <signal.h>

static volatile sig_atomic_t signal_keldi = 0;

void handler(int sig) {
    signal_keldi = sig;
}

int main(void) {
    signal(SIGINT, handler);
    printf("ishlayapti\n");
    raise(SIGINT);

    if (signal_keldi != 0) {
        printf("signal %d keldi\n", (int)signal_keldi);
    }
    printf("to'xtatildi\n");
    return 0;
}