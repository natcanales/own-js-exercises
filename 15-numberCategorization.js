/*****************************************************************************

    Having the following array of numbers:

        [95, 40, 26, 3, 17, 23, 71, 89, 100, 34, 24, 81, 56, 44, 15]

    Create two arrays: the first will only have the even numbers of
    the previous array, and second will have the odd ones. Then, print
    both using console.log to achieve this output:

        Even numbers are: 40,26,100,34,24,56,44
        Odd numbers are: 95,3,17,23,71,89,81,15

    NOTE: for this exercise, you must use the arrays' forEach loop.
          Remember that the forEach loop has the following syntax:

            array.forEach(element => {
               // Code  
            });

*****************************************************************************/

let numbers = [95, 40, 26, 3, 17, 23, 71, 89, 100, 34, 24, 81, 56, 44, 15];
let evenNumbers = [];
let oddNumbers = [];

numbers.forEach(element => {
    if (element % 2 === 0) {
        evenNumbers.push(element);
    } else {
        oddNumbers.push(element);
    }
});

console.log(`Even numbers are: ${evenNumbers}.`);
console.log(`Odd numbers are: ${oddNumbers}.`);