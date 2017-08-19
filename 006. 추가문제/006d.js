const _ = require('underscore/underscore-min.js');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input a1 a2 a3... : ', a => {
        console.log(a.split(" "));
        rl.close();
    }
);

rl.question('Input a1 a2 a3... : ', a => {
  console.log(a.split(" "));
  rl.close();
}
);


