/*****************************************************************************

    Create an array with all the even numbers between 0 and 26 (both
    included), and print it using console.log.

    Expected result:

        [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26]

*****************************************************************************/

let evenNumbers = [];

for (let i = 0; i <= 26; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    }
}

console.log(evenNumbers);