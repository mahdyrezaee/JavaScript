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
        // if (map[rowmann][commann] === "y") {
        //
        // }
    } while (map[rowmann][commann] === "█") ;
    const p={x:rowmann,y:commann};
    map [p.x][p.y] ="x"
    console.log(rowmann + "+" + commann);
    let com;
    let row;
    do {
        com = Math.floor(Math.random() * 5) + 1;
        row = Math.floor(Math.random() * 5) + 1;

    } while (map[row][com] === "█" && map[row][com] === "x");
    const  s={x:row,y:com}
 //   const o={x:rowmann,y:commann};
    map [s.x][s.y] ="o"

    let wo = " ";

    do {

        await fragen(wo);
        function spielen(wo) {

            if (wo === "u") {
                console.log("spielen  : u ");
                if (map[p.x - 1][p.y] === "█") {

                } else if (map[p.x - 1][p.y] === "o") {
                    map[p.x][p.y] = "o"
                } else {
                    map[p.x][p.y] = "_";
                    p.x = p.x - 1;
                    map[p.x][p.y] = "x"
                }
            } else if (wo === "d") {
                console.log("spielen  : d ");

                if (map[p.x + 1][p.y] === "█") {

                } else if (map[p.x + 1][p.y] === "o") {
                    map[p.x][p.y] = "o"
                } else {
                    map[p.x][p.y] = "_";
                    p.x = p.x + 1;
                    map[p.x][p.y] = "x"
                }
            } else if (wo === "l") {
                console.log("spielen  : l ");

                if (map[p.x][p.y - 1] === "█") {


                } else if (map[p.x][p.y - 1] === "o") {
                    map[p.x][p.y] = "o"
                } else {
                    map[p.x][p.y] = "_";
                    p.y = p.y - 1;
                    map[p.x][p.y] = "x"
                }
            } else if (wo === "r") {
                console.log("spielen  : r ");

                if (map[p.x][p.y + 1] === "█") {


                } else if (map[p.x][p.y + 1] === "o") {
                    map[p.x][p.y] = "o"
                } else {
                    map[p.x][p.y] = "_";
                    p.y = p.y + 1;
                    map[p.x][p.y] = "x"

                }
            }
            check(wo);
        }

        async function check(wo) {
            console.log("check");
            console.clear();
            if (wo === "x") {
                console.log("du bist rasgekommen")
                // return "du bist rasgekommen"
            } else if (map[p.x][p.y] === "o") {
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
            await spielen(wo);
        }

    }while (wo !=="x" && map[p.x][p.y] !== "o" );
    //  console.log("du bist rasgekommen");
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());