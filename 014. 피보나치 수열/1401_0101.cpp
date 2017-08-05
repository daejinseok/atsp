
/*

1
--
0
1

2
--
10
11

3
---
110
111
101

4
----
1 + 3
1110
1111
1101

10 + 2
1010
1011


*/


#include <cstdio>
#include <cstdlib>
#include <cmath>
#include <bitset>
#include <iostream>

using namespace std;


void print2bit(int n){

    int r;

    do {
        n = n/2;
        r = n%2;
        printf("%d", r);
    } while (n != 0 );
}

int isCount(int num, int n){

    int bnum = num;

    int old = num & 1;
    int cur;
    num = num >> 1;

    for(int i = 1; i < n; i++){
        cur = num & 1;
        if( old == 0 & cur == 0){
            return 0;
        }
        old = cur;
        num = num >> 1;
    }

    cout << bitset<16>(bnum) << " ";
    printf(" %d\n", bnum);
    return 1;
}

int count(int n){

    long double i = pow(2, n-1);
    long double e = pow(2, n);

    int cnt = 0;

    for(; i < e; i++){
        cnt += isCount(i, n);
    }


    return cnt;
}


int main(void){

    int n;
    printf("size n :");
    scanf("%d", &n);
    printf("%d\n", count(n));
}