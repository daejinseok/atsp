
const start = Date.now();
const log = console.log;


const _ = require('underscore/underscore-min.js');

const D = [
    [1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 1, 1, 1],
];

const M = D.length;
const N = D[0].length;

function foo(i, j){
    if ( !D[i][j] ){
        return 0;
    }

    if( i === 0 && j === 0){
        return 1;
    }

    if( i > 0 && j === 0){
        return foo(i-1, j);
    }

    if( i === 0 && j > 0){
        return foo(i, j-1);
    }

    if( i > 0 && j > 0){
        return( foo(i-1, j) + foo(i, j-1))
    }
}

for(let i = 0; i < M; i++){
    for(let j = 0; j < N; j++){
        console.log( i, j, foo(i, j) );
    }
}

log( 'time : ' + ( Date.now() - start ) );