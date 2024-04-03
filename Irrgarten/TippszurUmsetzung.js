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
        if (map[rowmann][commann] === "y") {

        }
    } while (map[rowmann][commann] === "y") ;
    map[rowmann][commann] = "x";
    console.log(rowmann + "+" + commann);
    let com;
    let row;
    do {
        com = Math.floor(Math.random() * 5) + 1;
        row = Math.floor(Math.random() * 5) + 1;

    } while (map[row][com] === "y" && map[row][com] === "x");
    map[row][com] = "o"

    let wo = " ";

    do {

        console.log(await fragen(wo));
        function spielen(wo) {

            if (wo === "u") {
                console.log("spielen  : u ");
                if (map[rowmann - 1][commann] === "█") {

                } else if (map[rowmann - 1][commann] === "o") {
                    map[rowmann][commann] = "o"
                } else {
                    map[rowmann][commann] = "_";
                    rowmann = rowmann - 1;
                    map[rowmann][commann] = "x"
                }
            } else if (wo === "d") {
                console.log("spielen  : d ");

                if (map[rowmann + 1][commann] === "█") {

                } else if (map[rowmann + 1][commann] === "o") {
                    map[rowmann][commann] = "o"
                } else {
                    map[rowmann][commann] = "_";
                    rowmann = rowmann + 1;
                    map[rowmann][commann] = "x"
                }
            } else if (wo === "l") {
                console.log("spielen  : l ");

                if (map[rowmann][commann - 1] === "█") {


                } else if (map[rowmann][commann - 1] === "o") {
                    map[rowmann][commann] = "o"
                } else {
                    map[rowmann][commann] = "_";
                    commann = commann - 1;
                    map[rowmann][commann] = "x"
                }
            } else if (wo === "r") {
                console.log("spielen  : r ");

                if (map[rowmann][commann + 1] === "█") {


                } else if (map[rowmann][commann + 1] === "o") {
                    map[rowmann][commann] = "o"
                } else {
                    map[rowmann][commann] = "_";
                    commann = commann + 1;
                    map[rowmann][commann] = "x"

                }
            }
            console.log(check(wo));
        }

        async function check(wo) {
            console.log("check");
            console.clear();
            if (wo === "x") {
                console.log("du bist rasgekommen")
                // return "du bist rasgekommen"
            } else if (map[rowmann][commann] === "o") {
                console.log(" Du hast gewonnen")
                // return " Du hast gewonnen";
            } else {
                console.log("nochmal ");

            }
        }

        async function fragen(wo) {
            for (i = 0; i < map.length; i++) {
                console.log(map[i].join("  "))
            }
            do {

                wo = await prompt("Wohin gehts du (u , d , l , r ): und x = aus : ");
            } while (wo !== "u" && wo !== "d" && wo !== "l" && wo !== "r" && wo !== "x");
            console.log(await spielen(wo));
        }

    }while (wo !=="x" && map[rowmann][commann] !== "o" );
    //  console.log("du bist rasgekommen");
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());