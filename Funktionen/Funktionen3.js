const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {


    const big = (zahl1, zahl2, zahl3, zahl4) => {
        const grosste = (zahl1 >= zahl2 && zahl1 >= zahl3 && zahl1 >= zahl4) ? zahl1 :
            (zahl2 >= zahl1 && zahl2 >= zahl3 && zahl2 >= zahl4) ? zahl2 :
                (zahl3 >= zahl1 && zahl3 >= zahl2 && zahl3 >= zahl4) ? zahl3 :zahl4;


        return grosste;

    }
    const big2 = (zahl1, zahl2, zahl3, zahl4) => {

        const grosste1 = (zahl1 >= zahl2) ? zahl1 : zahl2;
        const grosste2 = (zahl3 >= zahl4) ? zahl3 : zahl4;
        const grosste3 = (grosste1 >= grosste2) ? grosste1 : grosste2;

        return grosste3;
    }
    let zahl1;
    let zahl2;
    let zahl3;
    let zahl4;

    do {
        console.clear()

        zahl1 = parseFloat(await prompt("Gib die erste Zahl ein:"));
        zahl2 = parseFloat(await prompt("Gib die zweite Zahl ein:"));
        zahl3 = parseFloat(await prompt("Gib die dritte Zahl ein:"));
        zahl4 = parseFloat(await prompt("Gib die vierte Zahl ein:"));
    } while (isNaN(zahl1) || isNaN(zahl2) || isNaN(zahl3) || isNaN(zahl4));

    console.log(big(zahl1, zahl2, zahl3, zahl4));

    console.log(big2(zahl1, zahl2, zahl3, zahl4));


}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());