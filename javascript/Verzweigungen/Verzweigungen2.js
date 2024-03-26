const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const temperatur = parseFloat (await prompt("Please enter your temperatur: "));
    console.log("temperatur " , temperatur);
    if (temperatur <0){
        console.log("kalt");

    }else if(temperatur <80){
        console.log("angenehm");
    }else {
        console.log("ein bisschen warm");
    }


}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());