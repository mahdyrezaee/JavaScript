
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    let nr;
    do {
         nr = parseInt(await prompt("Please enter your nr:  "));
    }while (  isNaN(nr) || nr <= 1 || nr >= 100);
    console.log(nr)
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());