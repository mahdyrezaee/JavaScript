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
        const rowData = field[rowNum];
        if (!rowData) {
            return "Zeilennummer nicht gefunden";
        }

        const value = rowData[columnName];
        if (value === undefined) {
            return "Spaltenname nicht gefunden";
        }

        return value;
    }


    const zeilennummer = 1;
    const spaltenname = "Nachname";
    console.log(getValueByRowAndColumn(zeilennummer, spaltenname));

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());