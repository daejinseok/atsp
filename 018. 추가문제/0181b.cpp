#include <cstring>
#include <cstdio>
#include <cmath>


// 1
// 11
// 121
// 1331
// 14641


#define MAXI 20
int M[MAXI][MAXI];
int k;

int main(){

    printf("k : ");
    scanf("%d", &k);
    //k = 6;

    memset( M, 0, sizeof M);

    for(int i=0; i <= k; i++){

        for(int j=0; j < (k-i)*8/2; j++){
            printf(" ");
        } 

        for(int j=0; j <= i; j++){

            int a, b;

            if( j == 0 && i== 0){
                a = 1;
                b = 0;
            }else if ( (j-1) < 0 ){
                a = 0;
                b = M[i-1][j];
            }else{
                a = M[i-1][j-1];
                b = M[i-1][j];
            }

            M[i][j] = a + b;

            printf("%3d ", M[i][j]);
            printf("    ");
        }

        printf("\n");
    }
}