const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const obj = {name: 'John', age: 30, city: 'New York'};

    const neu = JSON.stringify(obj, null, 3);
    console.log(neu);



}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());