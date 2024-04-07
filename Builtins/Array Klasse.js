const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const ar=[88,21,46,3,14,56,91,0,465,];
    for (let i = 0; i < ar.length - 1; i++) {
        let x = i;
        for (let q = i + 1; q < ar.length; q++) {
            if (ar[x] > ar[q]) {
                x = q;
            }
        }
        let b = ar[i];
        ar[i] = ar[x];
        ar[x] = b;
    }
   // for (let i = 0; i < ar.length - 1; i++) {
        console.log(ar.join(","))
  //  }
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());