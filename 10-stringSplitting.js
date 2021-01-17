/*****************************************************************************

    We have a string with some nouns separated with commas:

        "title, author, year, rating"

    Using the strings' .split() method, obtain an array with each
    noun as elements and print them one by one, capitalized.

    Expected output:

        Title
        Author
        Year
        Rating

*****************************************************************************/

let nouns = "title, author, year, rating";
let separatedNouns = nouns.split(", ");

for (let i = 0; i < separatedNouns.length; i++) {
    let string = separatedNouns[i];
    string = string[0].toUpperCase() + string.slice(1);
    console.log(string);
}