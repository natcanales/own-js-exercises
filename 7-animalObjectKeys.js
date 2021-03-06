/*****************************************************************************

    Given the following object:

        {
            name: "dog",
            legs: 4,
            isFriend: true
        }

    Use 'Object.keys()' to get an array of the object's keys, and
    then print in the console the name of each key.

    Expected output:

        name
        legs
        isFriend

*****************************************************************************/

const pet = {
    name: "dog",
    legs: 4,
    isFriend: true
};

let petKeysArray = Object.keys(pet);

for (let i = 0; i < petKeysArray.length; i++) {
    console.log(petKeysArray[i]);
}