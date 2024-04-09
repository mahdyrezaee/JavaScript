
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const person =[
        { vorname: "Helin", nachname: "Mohammadi", alt: 39 ,grosse:140},
    { vorname: "Mahdi", nachname: "Rezaee", alt: 18 ,grosse:200},
    { vorname: "Nati", nachname: "Mirzaee", alt: 55 ,grosse:125},
        { vorname: "ssad", nachname: "Qolami", alt: 9 ,grosse:100}
]

    for (let i in person) {
        console.log(i);
        console.log(person[i]);
        console.log();
    }
    console.log("*************************************************************");
    for (let i of person){
        console.log();
        console.log(i);
    }
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());