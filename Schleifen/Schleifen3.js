
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    let nr1;
    do {

        nr1 = parseInt(await prompt("Please enter your nr1:  "));
    }while ( isNaN(nr1) || nr1 <= 1 || nr1 >= 100);
    console.clear();
    let grlegenheit=0;
    let nr2;
    do {
        nr2 = parseInt(await prompt("Please enter your nr2:  "));
        if (nr1 > nr2){
            console.log(" nr1 ist gross ");
        }
        if (nr1 < nr2){
            console.log(" nr1 ist klein ");
        }
        grlegenheit +=1;
    }while ( nr2 !== nr1);
    console.log(" alles test "+ grlegenheit);
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());