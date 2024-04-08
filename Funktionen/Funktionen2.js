const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    // const isEven=a;
    // if (isEven %2===0){
    //     console.log(true);
    //     return;
    // }else {
    //     console.log(false);
    //     return;
    // }
    // console.log(execute (a ===55))
    const isEven=(zahl) =>{
        isEven1 = zahl %2===0?true : false;
       // console.log(isEven1);
        return isEven1;
        // if (zahl %2===0){
        //     console.log(true);
        //     return;
        // }else {
        //     console.log(false);
        //     return;
        // }

    }
    console.log( isEven(3));
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());