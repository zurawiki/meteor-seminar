// #include <stdio.h>
//
// int add(int x, int y) {
//     return x + y;
// }
//
// void hi() {
//     printf("Hi\n");
// }
//
// int main(void) {
//     printf("%d", add(1,2));
//     hi();
//
//     return 0;
// }

// Why doesn't this work?
console.log( add(1,2) );
hi();

var add = function(x, y) {
    return x + y;
}

var hi = function() {
    console.log("Hi");
}
