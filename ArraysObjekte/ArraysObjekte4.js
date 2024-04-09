
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const field = [
        //  ["Vorname" , "Nachname" , "Alter"],
        ["Hans", "Müller", 22],
        ["Georg", "Huber", 37],
        ["Fritz", "Mayr", 19],

    ];

    const Srringtonr = {
        Vorname: 0,
        Nachname: 1,
        Alter: 2,
    };


    function check(rowNum, columnName) {
        // const row = field[rowNum];
        if (rowNum < 0 || rowNum > 2 || rowNum %1 !==0) {
            return "zahl ist falsch1";
        }

        const column = Srringtonr[columnName];
        if (column ===undefined){
            return "name ist falsch";
        }
        // if (column < 0 || column > 2) {
        //     return "falsch2";
        // }


       return field[rowNum][column];
    }

    const rowNum = parseFloat(await prompt(" zahl bitte 0-2   :"));
    const columnName = await prompt(" Name colum bitte (Vorname),(Nachname),(Alter)   :");
    console.log(check(rowNum, columnName));


}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());