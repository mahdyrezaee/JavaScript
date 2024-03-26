const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const isEven = parseFloat(await prompt("ein zahl: "));
    if (isEven %2==0){
        console.log(true);
    }else {
        console.log(false);
    }


}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());