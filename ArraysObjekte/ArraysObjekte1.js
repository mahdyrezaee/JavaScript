const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const woche=["Montag" ,"Dienstag" , "Mitwoch" , "Donnerstag" , "Feitag" , "Samstag" , "Sonntag"]

    const zahl = await prompt(" zahl bitte 1-7   :");
    if (zahl>=1 && zahl <=7  && zahl % 1 ===0){
        console.log(woche[zahl-1]);
        return;
    }else {
        console.log(" false ");
        return;
    }


}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());