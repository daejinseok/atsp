
const start = Date.now();
const log = console.log;


const D = [
    [1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 1, 1, 1],
];

const M = D.length;
const N = D[0].length;

const Mem = [];


function foo(i, j){
    if ( !D[i][j] ){
        return 0;
    }

    if( i === 0 && j === 0){
        return 1;
    }

    if( i > 0 && j === 0){
        return Mem[i-1][j];
    }

    if( i === 0 && j > 0){
        return Mem[i][j-1];
    }

    if( i > 0 && j > 0){
        return( Mem[i-1][j] + Mem[i][j-1])
    }
}

for(let i = 0; i < M; i++){
    for(let j = 0; j < N; j++){

        if ( j === 0 ){
            Mem[i] = [];
        }

        Mem[i][j] = foo(i, j);
        log(i, j, Mem[i][j]);
    }
}

log( 'time : ' + ( Date.now() - start ) );