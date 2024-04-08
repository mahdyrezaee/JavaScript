const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const field = [
        // ["Vorname" , "Nachname" , "Alter"],
        ["Hans" , "Müller" , 22],
        ["Georg" , "Huber" , 37],
        ["Fritz" , "Mayr" , 19],

    ];
    let zahl1 =0;
    let zahl2;
  do {
        zahl1 = parseInt(await prompt("line  ? : "));
    }  while (zahl1<0 || zahl1 >=3 )
    do {
        zahl2 = parseInt(await prompt("colum  ?: "));
    }  while (zahl1<0 || zahl1 >=3 )

   console.log(field[zahl1][zahl2]);




console.log(field)

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());