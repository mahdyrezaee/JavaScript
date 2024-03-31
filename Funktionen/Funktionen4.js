const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
        function lag(...args){
            let arg;
            for (arg of args) {
                console.log(arg);
            }
        }

    log(12,44);


}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
