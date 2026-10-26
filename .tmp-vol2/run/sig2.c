#include <stdio.h>
#include <signal.h>
#include <string.h>

static volatile sig_atomic_t toxta = 0;

void term_handler(int sig) {
    (void)sig;
    toxta = 1;
}

int main(void) {
    struct sigaction sa;
    memset(&sa, 0, sizeof sa);
    sa.sa_handler = term_handler;
    sigemptyset(&sa.sa_mask);
    sa.sa_flags = 0;

    if (sigaction(SIGTERM, &sa, NULL) != 0) {
        perror("sigaction");
        return 1;
    }

    raise(SIGTERM);
    printf("SIGTERM ushlandi=%d\n", (int)toxta);
    printf("toza chiqish\n");
    return 0;
}