const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();

r1.question('Enter your name: ', (name) => {
    console.log(`Hello ${name}!`);
    r1.close();
});
