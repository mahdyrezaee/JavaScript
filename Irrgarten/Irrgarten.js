const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const map = [
        ["█", "█", "█", "█", "█", "█", "█"],
        ["█", "_", "_", "_", "█", "_", "█"],
        ["█", "_", "█", "_", "_", "_", "█"],
        ["█", "_", "_", "_", "█", "_", "█"],
        ["█", "_", "_", "_", "_", "_", "█"],
        ["█", "_", "_", "█", "_", "_", "█"],
        ["█", "█", "█", "█", "█", "█", "█"],
    ];




    let commann;
    let rowmann;
    do {
        commann = Math.floor(Math.random() * 5) + 1;
        rowmann = Math.floor(Math.random() * 5) + 1;

    } while (map[rowmann][commann] === "y" );
    map[rowmann][commann]="x";
    console.log(rowmann+ "+"+commann);
    let com;
    let row;
    do {
        com = Math.floor(Math.random() * 5) + 1;
        row = Math.floor(Math.random() * 5) + 1;

    } while (map[row][com] === "y" && map[row][com] === "x" );
   map[row][com]="o"

    let wo = " ";
    do {
        for (i = 0; i < map.length; i++) {
            console.log(map[i].join("  "))
        }
        wo = await prompt("Wohin gehts du (u , d , l , r ): und x = aus : ");

        if (wo === "u") {
            if (map[rowmann - 1][commann] === "█") {

            } else if (map[rowmann - 1][commann] === "o") {
                map[rowmann][commann] = "o"
            } else {
                map[rowmann][commann] = "_";
                rowmann = rowmann - 1;
                map[rowmann][commann] = "x"
            }
        } else if (wo === "d") {

            if (map[rowmann + 1][commann] === "█") {

            }else if (map[rowmann + 1][commann] === "o") {
                map[rowmann][commann] = "o"
            } else {
                map[rowmann][commann] = "_";
                rowmann = rowmann + 1;
                map[rowmann][commann] = "x"
            }
        } else if (wo === "l") {

            if (map[rowmann][commann - 1] === "█") {


            } else if (map[rowmann][commann - 1] === "o") {
                map[rowmann][commann] = "o"
            }else {
                map[rowmann][commann] = "_";
                commann = commann - 1;
                map[rowmann][commann] = "x"
            }
        } else if (wo === "r") {

            if (map[rowmann][commann + 1] === "█") {


            } else if (map[rowmann][commann + 1] === "o") {
                map[rowmann][commann] = "o"
            } else {
                map[rowmann][commann] = "_";
                commann = commann + 1;
                map[rowmann][commann] = "x"

            }
        }else if(wo === "x"){


        }


        console.clear();
         if (wo=== "x"){
            console.log(" aus")
        }else if( map[rowmann][commann] === "o") {
            console.log(" Du hast gewonnen")
        }else {
            console.log("nochmal ");

        }

    } while ( wo!=="x" && map[rowmann][commann] !== "o");

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());