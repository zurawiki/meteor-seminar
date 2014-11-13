#include <stdio.h>

int add(int x, int y) {
    return x + y;
}

void hi() {
    printf("Hi\n");
}

int main(void) {
    printf("%d\n", add(1,2));
    hi();

    return 0;
}
