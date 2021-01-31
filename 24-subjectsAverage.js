/*****************************************************************************

    Create a function that receives an object with some subject
    names as keys and arrays of exam's scores as values, like
    the following one:

        {
            maths: [9, 8.8, 7, 8.5],
            spanish: [10, 10, 9.5, 9.25],
            english: [8, 9.5, 8.5, 8.75]
        }

    The function will have to calculate the average for each
    subject and return an object with the final results, like
    the following one:

        {
            maths: 8.325,
            spanish: 9.6875,
            english: 8.6875
        }

    A good approach would be to divide this exercise in two
    functions:

        - One function would receive an array of numbers and
          would calculate the average.

        - The other function would receive the subjects object
          and would use the 'average function' to calculate
          all the needed results.

*****************************************************************************/

let subjects = {
    maths: [9, 8.8, 7, 8.5],
    spanish: [10, 10, 9.5, 9.25],
    english: [8, 9.5, 8.5, 8.75]
};

function arrayAverage(numbers) {
    let totalSum = 0;
    let numNumbers = 0;
    let totalAverage;

    for (let i = 0; i < numbers.length; i++) {
        if (typeof(numbers[i]) === "number") {
            totalSum += numbers[i];
            numNumbers++;
        }
    }
    if (numNumbers !== 0) {
        totalAverage = totalSum / numNumbers;
    } else {
        totalAverage = 0;
    }
    
    return totalAverage.toFixed(2);
}


function subjectsAverage(object) {
    let average = {};
    for (key in object) {
        average[key] = arrayAverage(object[key]);
    }

    return average;
}

let solution = subjectsAverage(subjects);