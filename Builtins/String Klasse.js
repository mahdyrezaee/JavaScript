const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    let text = "Hallo Welt!";


    console.log("Länge des Textes:", text.length);
    console.log("Erster Buchstabe:", text[0]);

    let txt = text.split(" ");
    // Diese teil ist wie Java :)
    console.log("Text als Array:", txt);


}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());