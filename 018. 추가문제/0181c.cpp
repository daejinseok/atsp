#include <cstring>
#include <cstdio>
#include <cmath>

#define MAXIN 100

int M[MAXIN];
int n, m;


void go(int sum, int idx){


    //printf("list %d %d\n", sum, idx);

    if( idx == 0){
        if(sum == 0){
            for(int i=m; i>=1; i--){
                printf("%d ", M[i]);
            }
            printf("\n");
        }
        return;
    }

    if( sum < 0 ){
        return;
    }

    for(int i=1; i<=n; i++){
        M[idx] = i;
        go(sum-i, idx-1);
    }
}


int main(){

    printf("n m : ");
    scanf("%d %d", &n, &m);

    go(n, m);

}