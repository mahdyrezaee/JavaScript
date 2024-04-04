const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
        function random1(max ,min ) {
            const num = Math.floor(Math.random() * (max - min + 1)) + min;
            return num;
            //es zahlt 1_10

        }
    console.log("eins  : " +random1(10, 1));


    function random2(max  ) {

        num2 = Math.random() * max;
        //0-9 auch zum baispiel 1.55
        console.log("rund : "+ Math.round(num2));
        //1.55 ==>2 und 1.35 ==>1
        return num2;

    }
    console.log("zwei : " +random2(10));

    function random3(max ,min ) {
        const num = Math.floor(Math.random(max)+min );
        return num;
        //es zahlt 1_10

    }
    console.log("eins  : " +random3(10, 1));


}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());