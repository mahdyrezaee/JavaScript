const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    const name = await prompt("Please enter your name: ");

    console.log('Hello', name);

    const age = await prompt("Please enter your age: ");
    console.log("age" , age);
    // console.log(`your ${age} years old`);

    const ageparsed =parseInt(age);

    const agenummer =parseInt(age);
    console.log("age patsed" , ageparsed);
    console.log("age nummer" , agenummer);
    // Ende von eurem Code

    if (age > 30 ){
        console.log("nein" );
    }else {
        console.log("ja" );
    }
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());
