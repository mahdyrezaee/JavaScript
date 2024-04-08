const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const a = parseFloat (await prompt("Please enter your zahl1: "));

    const was = await prompt("Please enter your +,-,*,/  : ");

    const b =parseFloat ( await prompt("Please enter your zahl2: "));

    switch (was) {
        case '+' :
            console.log(a+ "+" +b+ "=" +(a + b));
            break;
        case '-' :
            console.log(a+ "-" +b+ "=" +(a - b));
            break;
        case '*'  :
            console.log(a+ "*" +b+ "=" +(a * b));
            break;
        case '/' :
            console.log(a+ "/" +b+ "=" +(a / b));
            break;
        case '%':
            console.log(a+ "%" +b+ "=" +(a % b ));
            break;
        default:
            console.log("False");

    }

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());