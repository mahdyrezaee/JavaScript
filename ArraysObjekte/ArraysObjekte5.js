const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const field = [
        { Vorname: "Hans", Nachname: "Müller", Alter: 22 },
        { Vorname: "Georg", Nachname: "Huber", Alter: 37 },
        { Vorname: "Fritz", Nachname: "Mayr", Alter: 19 },
    ];


    function check(rowNum, columnName) {
       // const row = field[rowNum];
        if (rowNum < 0 || rowNum > 2 || rowNum %1 !==0) {
            return "zahl ist falsch1";
        }

        const value = field[columnName];
        if (field[rowNum][columnName] ===undefined) {
            return "name ist falsch";
        }

        return field[rowNum][columnName];
    }


    const rowNum = parseFloat(await prompt(" zahl bitte 0-2   :"));
    const columnName = await prompt(" Name colum bitte (Vorname),(Nachname),(Alter)   :");
    console.log(check(rowNum, columnName));

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());