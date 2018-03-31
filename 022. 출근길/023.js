const start = Date.now();
const log = console.log;

const _ = require('underscore/underscore-min.js');

const D = [
    [1, 2, 2, 1, 5],
    [1, 4, 4, 3, 1],
    [2, 1, 1, 1, 2],
    [1, 3, 5, 1, 1],
    [1, 5, 1, 2, 2],
];

const M = [];


function foo(i, j){

    if( i === 0 && j === 0){
        return D[i][j];
    }

    if( i === 0 && j > 0){
        return M[i][j-1] + D[i][j];
    }

    if( i > 0 && j === 0){
        return M[i-1][j] + D[i][j];
    }

    return Math.max( M[i][j-1], M[i-1][j] ) + D[i][j];
}

for(let i = 0, l = D.length; i < l; i++){
    for(let j = 0, m = D[i].length; j < m; j++){

        if( j === 0 ){
            M[i] = [];
        }

        M[i][j] = foo(i, j);
        //log(i, j, M[i][j]);
    }

    log( M[i] );
}

let i = M.length-1, j = M[0].length-1;


function foo2(i, j){
    
    if(j === 0){
        return [i-1, 0];
    }

    if(i === 0){
        return [0, j-1];
    }

    if ( M[i][j-1] > M[i-1][j] ){
        return [i, j-1];
    } else {
        return [i-1, j];
    }
}

const way = [];
while(1){

    if(i === 0 && j === 0 ){
        break;
    }

    const w = foo2(i, j);
    i = w[0], j = w[1];
    log(w);    
}


log( 'time : ' + ( Date.now() - start ) );