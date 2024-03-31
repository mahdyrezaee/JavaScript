
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const serson = { vorname: "Mahdi", nachname: "Rezaee", alt: 18 ,grosse:200};
    for (let i in serson) {
        console.log(i);
        console.log(serson[i]);
    }
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());