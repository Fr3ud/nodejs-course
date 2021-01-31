const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> ',
});

r1.prompt();

const commands = {
    help() {
        console.log(`Commands: ${Object.keys(commands).join(', ')}`);
    },
    hello() {
        console.log('Hello there!');
    },
    exit() {
        r1.close();
    }
};

r1.on('line', (line) => {
    line = line.trim();
    const command = commands[line];
    if (command) command();
    else console.log('Unknown command');
    r1.prompt();
}).on('close', () => {
    console.log('Bye!');
    process.exit(0);
});
