
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {


    // function getRandomInt(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }

    function isValidGuess(guess) {
        return !isNaN(guess) && guess >= 1 && guess <= 100;
    }

    function playGame() {
        console.clear();
        let secretNumber = getRandomInt(1, 100);
        let attempts = 0;

        rl.question('Spieler 1, gib eine Zahl zwischen 1 und 100 ein: ', (answer) => {
            let guess = parseInt(answer);

            if (isValidGuess(guess)) {
                console.clear();
                rl.close();
                console.log('Spieler 2, versuche die Zahl zu erraten.');

                rl.on('line', (input) => {
                    attempts++;
                    let guess = parseInt(input);
                    if (isValidGuess(guess)) {
                        if (guess === secretNumber) {
                            console.log(`Herzlichen Glückwunsch! Du hast die Zahl ${secretNumber} erraten.`);
                            console.log(`Du hast ${attempts} Versuche gebraucht.`);
                            rl.close();
                        } else if (guess < secretNumber) {
                            console.log('Die gesuchte Zahl ist größer.');
                        } else {
                            console.log('Die gesuchte Zahl ist kleiner.');
                        }
                    } else {
                        console.log('Ungültige Eingabe. Bitte gib eine Zahl zwischen 1 und 100 ein.');
                    }
                });
            } else {
                console.log('Ungültige Eingabe. Bitte gib eine Zahl zwischen 1 und 100 ein.');
                playGame();
            }
        });
    }

    playGame();
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());