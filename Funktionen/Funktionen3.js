const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {


    const isEven=(zahl1,zahl2,zahl3,zahl4) => {
        const grosste = (zahl1 >= zahl2 && zahl1 >= zahl3 && zahl1 >= zahl4) ? zahl1 :
            (zahl2 >= zahl1 && zahl2 >= zahl3 && zahl2 >= zahl4) ? zahl2 :
                (zahl3 >= zahl1 && zahl3 >= zahl2 && zahl3 >= zahl4) ? zahl3 : zahl4;
        return grosste;
    }


    const zahl1 = parseFloat(await prompt("Gib die erste Zahl ein:"));
    const zahl2 = parseFloat(await prompt("Gib die zweite Zahl ein:"));
    const zahl3 = parseFloat(await prompt("Gib die dritte Zahl ein:"));
    const zahl4 = parseFloat(await prompt("Gib die vierte Zahl ein:"));
    console.log(isEven(zahl1,zahl2,zahl3,zahl4) );

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());