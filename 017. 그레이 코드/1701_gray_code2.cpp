/*

--0
    -00
        000 -> 출력
        r 100 -> 출력
    r-10
        110
        r010

r--1

    



*/



#include <cstring>
#include <cstdio>

#define MAXN 20

void print_gray_r(int index);

int code[MAXN], N; // code는 초기화가 필요없다.

void print_code(){
    for( int i = 0; i < N; i++) printf("%d", code[i]);
    printf("\n");
}

void print_gray(int index, int r){

    if( index == N){
        print_code();
        return;
    }

    code[index] = r;
    print_gray(index + 1, 0);

    code[index] = 1 - r;
    print_gray(index + 1, 1);
}

int main(){

    printf("Input size N :");
    scanf("%d", &N);
    print_gray(0, 0);
    return 0;
}