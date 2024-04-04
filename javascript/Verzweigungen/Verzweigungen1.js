const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    // Euer Code kommt hier hinein
    let pasword =222;
    console.log(pasword)
    //const pass = parseFloat (await prompt("Please enter your paasword: "));
   const pass = await prompt("Please enter your paasword: ");
    //Vielen Dank.ich  tachsche int (222 ===222.0)==>Steing("222" !=="222.0")
    console.log("pass " , pass);
    if (pass === pasword){
        console.log("richtig" );
    }else {
        console.log("falsch");
    }

}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());