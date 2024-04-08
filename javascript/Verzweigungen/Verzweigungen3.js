const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const zahl = parseFloat (await prompt("Please enter your zahl: "));
    console.log("zahl " , zahl);
    if (zahl === 1){
        console.log("Montag");
    }else if (zahl ===2){
        console.log("Dienstag");
    }else if (zahl ===3){
        console.log("Mitwoch");
    }else if (zahl ===4){
        console.log("Donnerstag");
    }else if (zahl ===5){
        console.log("Freitag");
    }else if (zahl ===6){
        console.log("Samstag");
    }else if (zahl ===7){
        console.log("Sonntag");
    }else {
        console.log("falsch :)");
    }

}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());