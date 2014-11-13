#include <stdio.h>

struct student {
    char* name;
    int year;
    char gender;
};

int main(void) {
    struct student s = (struct student) {"Roger", 2016, 'M'};
    printf("%s\n", s.name);

    return 0;
}
