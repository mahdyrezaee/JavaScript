const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
 //   const name = await prompt("Please enter your name: ");
   // console.log('Hello', name);

    // Since month is zero based, birthday will be January 10, 1995
   // const event = new Date('December 31, 1975 23:15:30 GMT-3:00');

   // console.log(event.getUTCFullYear());
// Expected output: 1976

  //  console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

  //  event.setUTCFullYear(1975 , 2 , 12);


  //  console.log(event.toUTCString());
// Expected output: "Wed, 01 Jan 1975 02:15:30 GMT"
//     *****************************************
//     const event = new Date('August 19, 1975 23:15:30 GMT-3:00');
//
//     console.log(event.toUTCString());
// Expected output: "Wed, 20 Aug 1975 02:15:30 GMT"

    // console.log(event.getUTCHours());
// Expected output: 2

    // event.setUTCHours(23);

    // console.log(event.toUTCString());
// Expected output: "Wed, 20 Aug 1975 23:15:30 GMT"
    ///////////////////////////////////////////////////////
//     const date1 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
//
//     console.log(date1.getUTCMinutes());
// // Expected output: 15
//
//     date1.setUTCMinutes(25);
//
//     console.log(date1.getUTCMinutes());
// // Expected output: 25
///////////////////////////////////
//     const event = new Date('December 31, 1975 23:15:30 GMT-3:00');
//
//     console.log(event.toUTCString());
// // Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"
//
//     console.log(event.getUTCMonth());
// // Expected output: 0
//
//     event.setUTCMonth(11);
//
//     console.log(event.toUTCString());
// // Expected output: "Wed, 01 Dec 1976 02:15:30 GMT"
//
    const event = new Date('April 4, 2024, 09:39:30 GMT+11:00');
    console.log(event.toUTCString());
   // event.setUTCMonth(8);
    console.log(event.toUTCString());
    console.log(event.toDateString());

    const date = new Date("2026-04-04T09:42:30");

    const [month, day, year] = [
        date.getMonth(),
        date.getDate(),
        date.getFullYear(),
    ];
    console.log( date.getMonth());

    const [hour, minutes, seconds] = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
    ];


}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());