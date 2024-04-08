const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const zahl = parseFloat (await prompt("Please enter your zahl: "));


    if (isNaN(zahl)) {
        console.log("Das ist keine gültige Zahl.");
    } else if (zahl % 1 !== 0) {
        console.log("Die Zahl ist eine Kommazahl.");
    } else {

        if (zahl % 2 === 0) {
            console.log("Die Zahl ist gerade.");
        } else {
            console.log("Die Zahl ist ungerade.");
        }
    }

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());