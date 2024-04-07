const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const deinezahl = await prompt("Bitte deine nr (nr 0 und 1): ");
    for (let i =0 ; i<deinezahl.length ; i++){
        if (deinezahl[i]!== "0" && deinezahl[i]!== "1"){
            console.log("falsch")
            return;
        }
    }
    let x = 0;
    let x1 = 0;
    let maxsize = deinezahl.length - 1;
    console.log("sssss  : " +maxsize)
    for (let i = 0; i < deinezahl.length; i++) {
        x += parseInt(deinezahl[i]) * Math.pow(2, maxsize);
        //Math.pow(2, maxsize);zum bei spiel ==>  x= (2,2) =>(2*2)=4 ||x= (2,3) =>(2*2*2)=8 ....
        maxsize--;
    }
   console.log("Sie konnen hier sehen 1 : " +x)


}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());