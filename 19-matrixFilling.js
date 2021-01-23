/*****************************************************************************

    Create an 10x10 matrix using loops (try not to check the solution
    of the previous exercise) which will have boolean values in each
    'cell'. Initialise all the values to 'false'.

    Now, create the following array:

        ["26", "03", "17", "52", "84", "91", "11", "08", "20"]

    What you have to do now is to iterate the array and fill the
    matrix with 'true' values where each element of the array
    specifies. For example: if the element we have from the array
    is "26", we have to set a 'true' value at the row=2 and column=6
    of the matrix.

    Summarizing, the steps you have to do are:

        1. Create the matrix using loops
        2. Create the array specified above
        3. Iterate the array and fill the matrix with 'true' values
           where the array's elements specify, using the first number
           as the row index, and the second as column index

    Now replace the matrix' boolean values with strings, having as
    default value an empty string, and filling with a simple "X" where
    the array's positions specify.

*****************************************************************************/

const matrix = [];

for (let i = 0; i < 10; i++) {
    let array = [];
    for (let j = 0; j < 10; j++) {
        array.push(" ");
    }
    matrix.push(array);
}

const numbers = ["26", "03", "17", "52", "84", "91", "11", "08", "20"];

numbers.forEach(element => {
    let row = parseInt(element[0]);
    let column = parseInt(element[1]);
    matrix[row][column] = "X";
});

console.log(matrix);