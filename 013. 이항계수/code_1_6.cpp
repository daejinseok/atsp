#include <cstdio>
#include <cstring>


#define M 200

static long long memo[M][M];

long long choose(int n, int r) {

    if ( memo[n][r] != -1 ){
        return memo[n][r];
    }

    if( (n == r) || (r == 0) ) {
        return memo[n][r] = 1;
    }

    return memo[n][r] = choose( n-1, r-1 ) + choose( n-1, r );
}

int main(void){

    int n, r;

    memset(memo, -1, sizeof memo );

    printf("input n r:");
    scanf("%d %d", &n, &r);
    printf("%lld\n", choose(n, r));
}