const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const Buchstaben = await prompt("Please enter your Buchstaben: ");
    console.log("Buchstaben ", Buchstaben);
    switch (Buchstaben) {
        case 'A':
        case 'I':
        case 'E':
        case 'O':
        case 'U':
        case 'Ö':
        case 'Ü':
        case 'Ä':
        case 'Y':
        case 'a':
        case 'i':
        case 'e':
        case 'o':
        case 'u':
        case 'ö':
        case 'ü':
        case 'ä':
        case 'y':
            console.log("Vokal")
            break;
        default:
            console.log("Konsonant")

    }

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());