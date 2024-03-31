const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {

    const field = [
        // ["Vorname" , "Nachname" , "Alter"],
        ["Hans" , "Müller" , 22],
        ["Georg" , "Huber" , 37],
        ["Fritz" , "Mayr" , 19],

    ];
    const zahl1 = parseInt( await prompt("line  ? : "));

    const name =await prompt("name (Vorname ,Nachname ,Alter) ?: ");
    const  zahl2 =name ="Vorname" ,name ="Nachname",name ="Alter"? 0:1:2;
    // if (name==="Vorname"){
    //     console.log(field[zahl1][0]);
    // }else if(name==="Nachname"){
    //     console.log(field[zahl1][1]);
    // }else if(name==="Alter") {
    //     console.log(field[zahl1][2]);
    // }else {
    //     console.log("false");
    // }

    console.log(field[zahl1][zahl2]);




    console.log(field)

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());