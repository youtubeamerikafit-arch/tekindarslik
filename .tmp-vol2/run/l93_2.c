#include <stdio.h>

#ifndef LOYIHA_VERSIYA
#define LOYIHA_VERSIYA "2.0"
#endif

int main(void) {
    printf("versiya: %s\n", LOYIHA_VERSIYA);

#ifdef NDEBUG
    printf("rejim: release\n");
#else
    printf("rejim: debug\n");
#endif
    return 0;
}