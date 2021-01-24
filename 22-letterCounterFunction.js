/*****************************************************************************

    Create a function that receives a string as argument, and returns
    an object with each letter as key and the number of times each
    letter appears as values.

    For example, for the string "hello", the function's return value
    would be the following object:

        {
            h: 1,
            e: 1,
            l: 2,
            o: 1
        }

    Finally, call the function with any string you want and, given
    the function's output, iterate the object's keys to print the
    following messages:

        `The letter 'h' appears 1 time(s) in the string "hello"`
        `The letter 'e' appears 1 time(s) in the string "hello"`
        `The letter 'l' appears 2 time(s) in the string "hello"`
        `The letter 'o' appears 1 time(s) in the string "hello"`


    BONUS 1: if you call your function with the string "HehE", the
             returned object would be:

                {
                    H: 1,
                    e: 1,
                    h: 1,
                    E: 1
                }

             Improve your function to do this in a 'case insensitive'
             way. That way, your function should return the following
             object:
            
                {
                    h: 1,
                    e: 1
                }


    BONUS 2: add another parameter to your function that will allow
             us to tell if we want a 'case sensitive' behavior or a
             'case insensitive' one.

             For example, calling the function like this:

                myFunction("HehE", true);

             would return this object:

                {
                    H: 1,
                    e: 1,
                    h: 1,
                    E: 1
                }

             and calling the function like this:

                myFunction("HehE", false);

             would return this object:
            
                {
                    h: 1,
                    e: 1
                }

*****************************************************************************/

function countLetters(word, isSensitive = true) {
    let spell = {};

    if (!isSensitive) {
        word = word.toLowerCase();
    }

    for (let i = 0; i < word.length; i++) {        
        let letter = word[i];
        if (spell.hasOwnProperty(letter)) {
            spell[letter]++;
        } else {
            spell[letter] = 1;
        }
    }

    return spell;
}

let word = "HehE";
let spell = countLetters(word);

for (key in spell) {
    console.log(`The letter ${key} appears ${spell[key]} time(s) in the string "${word}"`);
}