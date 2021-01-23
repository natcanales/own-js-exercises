/*****************************************************************************

    Create a function that will receive an array of numbers as
    argument. The function will calculate the average of all the
    numbers of the array.

    Remember to always think of the average as two different steps:

        1. Store a sum of all the numbers of the array
        2. Divide the total sum by the number of elements

    Now add a control for each item of the array, to check that it
    is a number. If the item is not a number we will simply skip it.
    For example, if we call the function with the following array:

        [1, 2, 3, "hola", 4]

    we would only use the numbers 1 to 4 and the function should
    return the value 2.5 (1+2+3+4 = 10   -->   10/4 = 2.5)

    Then, when the function is created, call it using the following
    arrays:

        [1, 2, 3, "hello", 4]
        [26.3, 11.8, 17.2, 52.8, 49.1]
        ["hello", "goodbye"]

    Use console.log to show the results in the following way:

        The average of the array is 2.5
        The average of the array is 31.439999999999998
        The average of the array is 0

*****************************************************************************/