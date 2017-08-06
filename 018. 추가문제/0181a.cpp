#include <cstdio>
#include <cmath>

// mingw에서는 long double이 이상하게 동작함.!!!
// 그래서 그냥 double만 사용함.
// https://stackoverflow.com/questions/1764350/conversion-specifier-of-long-double-in-c


int n, k;

double selfcall(int i){

    if( i == 1){
        return 1;
    }

    return pow(i,k) + selfcall(i-1);
}

int main(){

    printf("n, k : ");
    scanf("%d, %d", &n, &k);
    printf("%d %d \n", n, k);    

    double r = 0;
    for(int i = 1; i <= n; i++){
        r = r + pow(i, k);
    }

    printf("%.0Lf \n", r);

    double r1 = selfcall(n);

    printf("%.0Lf \n", r1);

    return 0;
}