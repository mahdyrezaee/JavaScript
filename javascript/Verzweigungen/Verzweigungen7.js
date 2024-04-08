const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
//     const a = parseFloat (await prompt("Please enter your zahl1: "));
//     const b =parseFloat ( await prompt("Please enter your zahl2: "));
//     const d =parseFloat ( await prompt("Please enter your zahl3: "));
//     const e =parseFloat ( await prompt("Please enter your zahl4: "));
//
//     const myNumber = -8;
// // Variable = Bedingung ? wenn wahr : wenn falsch;
//     const a1 = a >= b &&  a  > d && a > e ? 'größte' : 'klein';
//     console.log(`Die Zahl1 war  ${a1}`);
//     const b1 = b >= a  && b  > d && b > e ? 'größte' : 'klein';
//     console.log(`Die Zahl2 war ${b1}`)
//     const d1 = d >= a  && d  > b && d > e ? 'größte' : 'klein';
//     console.log(`Die Zahl3 war ${d1}`)
//     const e1 = e >= a  && e  > b && e > d ? 'größte' : 'klein';
//     console.log(`Die Zahl4 war ${e1}`)
    const zahl1 = parseFloat(await prompt("Gib die erste Zahl ein:"));
    const zahl2 = parseFloat(await prompt("Gib die zweite Zahl ein:"));
    const zahl3 = parseFloat(await prompt("Gib die dritte Zahl ein:"));
    const zahl4 = parseFloat(await prompt("Gib die vierte Zahl ein:"));

// Größte Zahl mit Ternärem Ausdruck finden
    const größte = (zahl1 >= zahl2 && zahl1 >= zahl3 && zahl1 >= zahl4) ? zahl1 :
        (zahl2 >= zahl1 && zahl2 >= zahl3 && zahl2 >= zahl4) ? zahl2 :
            (zahl3 >= zahl1 && zahl3 >= zahl2 && zahl3 >= zahl4) ? zahl3 : zahl4;

// Ergebnis ausgeben
    console.log(" größte  ist: " + größte)

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());