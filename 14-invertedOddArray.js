/*****************************************************************************

    Create an array with all the odd numbers between 0 and 26 in
    descending order, and print it using console.log.

    Expected result:

        [25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]

    NOTE: once completed, try to do it again inverting the order of
          the loop you used.

*****************************************************************************/

/* let oddNumbers = [];

for (let i = 0; i < 26; i++) {
    if (i % 2 !== 0) {
        oddNumbers.unshift(i);
    }
}

console.log(oddNumbers); */

let oddNumbers = [];

for (let i = 25; i > 0; i--) {
    if (i % 2 !== 0) {
        oddNumbers.push(i);
    }
}

console.log(oddNumbers);