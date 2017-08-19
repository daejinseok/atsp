// 36page
// 0.e Level 2 스택 두 개를 이요하여 큐를 만드는 방법은 무엇일까? 
// 원소를 넣고(enqueue), 빼는(dequeue) 동작은 가능한 효율적어야 한다.

const _ = require('underscore/underscore-min.js');

var s1 = [], s2 = [];

function enqueue(p){

    s1.push(p);

    console.log("enqueue : " + p);
    printState();
}

function InnerDequeue(){

    var s1l = s1.length, s2l = s2.length;
    
    if ( s1l === 0 && s2l === 0){
        console.log("data out!!!");
        return '';
    }

    if( s1l === 1 && s2l === 0){
        return s1.pop();
    }    

    if(s2l === 0){
        //s1.forEach( () => s2.push(s1.pop()) );
        _.each(s1, () => s2.push(s1.pop()) );
    }

    return s2.pop();
}


function dequeue(){

    var queue = InnerDequeue();

    if ( queue !== ''){
        console.log("dequeue : " + queue);
    }

    printState();
}


function printState(){
    console.log("s1 : " + s1);
    console.log("s2 : " + s2);
}


// --- console 처리 --------------------

console.log("\n'o' pull one data output, 'q' is quit, other input data\n");

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

function byebye() {
    console.log('\n ByeBye 36page 006e \n');
    process.exit(0);
}

rl.prompt();

rl.on('line', (line) => {
    switch (line.trim().toLowerCase()) {
        case 'o':
            dequeue();
            break;
        case 'q':
            byebye();
            break;
        default:
            enqueue(line.trim());
            break;
    }
    rl.prompt();
}).on('close', () => {
    byebye();
});
