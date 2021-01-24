/* Make a matrix 10x10 with strings as elements that
will contain the x & y values for each iteration */

const matrix = [];

for (let x = 0; x < 10; x++) {
    let row = [];
    for (let y = 0; y < 10; y++) {
        row.push(`${x}${y}`);
    }
    matrix.push(row);
}

console.log(matrix);