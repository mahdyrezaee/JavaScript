const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const field = [
       //  ["Vorname" , "Nachname" , "Alter"],
        ["Hans" , "Müller" , 22],
        ["Georg" , "Huber" , 37],
        ["Fritz" , "Mayr" , 19],

    ];

    const Srringtonr = {
        Vorname: 0,
        Nachname: 1,
        Alter: 2,
    };


    function check(rowNum, columnName) {
        const columnIndex = Srringtonr[columnName];
        if (columnIndex === undefined) {
            return "Spaltenname nicht gefunden";
        }

        const rowData = field[rowNum];
        if (!rowData) {
            return "Zeilennummer nicht gefunden";
        }

        return rowData[columnIndex];
    }

    const zeilennummer = 2;
    const spaltenname = "Nachname";
    console.log(check(zeilennummer, spaltenname));


}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());