const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const ob={VorName :"Mahdi",NachName:"Rezaee" , age:18,Grosse : 210}

     console.log(ob)
    const ob2 = { ein: 1, zwei: 2, drrei: 3 }

    const keys = Object.keys(ob2);
    console.log(keys);

}
// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
//
// const jsonFormatted = JSON.stringify(obj, null, 2);
// console.log(jsonFormatted);

execute().catch((err) => { console.error(err); }).finally(() => rl.close());