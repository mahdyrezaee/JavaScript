const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const zahl = parseFloat (await prompt("Please enter your zahl: "));
    console.log("zahl " , zahl);
    switch (zahl){
        case 1:
            console.log("Montag");
            break;
        case 2:
            console.log("Dienstag");
            break;
        case 3:
            console.log("Mitwoch");
            break;
        case 4:
            console.log("Donnerstag");
            break;
        case 5:
            console.log("Freitag");
            break;
        case 6:
            console.log("Samstag");
            break;
        case 7:
            console.log("Sonntag");
            break;
         default:
            console.log("falsch");
            break;

    }

}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());