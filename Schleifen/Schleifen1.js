const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

   // const nr =parseInt( await prompt("Please enter your nr: "));
    //console.log('Hello', name);
    let x;
        const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
        do {
            x=0;
            const nr =parseInt( await prompt("Please enter your nr:  "));

                if (nr>=0 && nr <days.length) {
                    console.log(days[nr]);
                }else {
                    x=x+1;
                }

        }while (x!==0);




}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());