/*****************************************************************************

    Create a function that will receive an array of numbers as
    argument. We will not explain what you have to do. Inspect the
    following example and you will understand how the function will
    have to work.

    Example:

        Imagining we created the function with name 'myFunction',
        when calling it like this:

            myFunction([26, 3, 17, "hello", 11, 8, "goodbye", 20])

        The function should return the following object:

            {
                originalArray: [26, 3, 17, 11, 8, 20],
                evenNumbersArray: [26, 8, 20],
                oddNumbersArray: [3, 17, 11],
                invalidValues: ["hello", "goodbye"]
            }

    To test your function, call it using the following array:

        [95, 40, 26, 3, 17, "hello", 71, "goodbye", 24, 81, 56, 44, 15]

    After obtaining the function's return value, use console.log to
    print the following message:

        "The original array had 11 numbers.
        5 of them where even, and 6 where odd.
        There were 2 invalid values."

*****************************************************************************/

function categorizeNumbers(numbers) {
    let evenNumbersArray = [];
    let oddNumbersArray = [];
    let result = {
        originalArray: [],
        invalidValues: []
    };

    numbers.forEach(number => {
        if (typeof number === "number") {
            result.originalArray.push(number);
            if (number % 2 === 0) {
                evenNumbersArray.push(number);
            } else {
                oddNumbersArray.push(number);
            }
        } else {
            result.invalidValues.push(number);
        }
    });

    result.evenNumbersArray = evenNumbersArray;
    result.oddNumbersArray = oddNumbersArray;

    return result;
}

let solution = categorizeNumbers([95, 40, 26, 3, 17, "hello", 71, "goodbye", 24, 81, 56, 44, 15]);

console.log(`The original array had ${solution.originalArray.length} numbers.
${solution.evenNumbersArray.length} of them where even, and ${solution.oddNumbersArray.length} where odd.
There where ${solution.invalidValues.length} invalid values.`);