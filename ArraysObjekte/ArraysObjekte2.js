const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const Handy = {MOdel: "infinix", Hard: 128, Farbe: "schwarz", Kostet: 2500};


    console.log(Handy.MOdel);
    console.log(Handy.Hard);
    console.log(Handy.Farbe);
    console.log(Handy.Kostet);


}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());