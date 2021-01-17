/*****************************************************************************

    Given the following object:

        {
            name: "Abel",
            lastName: "Frías Díaz",
            age: 24
        }

    Use the two possible ways to access objects' attributes to show
    the following message in the console:

        "My name is Abel Frías Díaz, and I am 24 years old."

    HINT: with 'the two possible ways' we mean using dot (.) notation
          and square-brackets ([]) notation.

*****************************************************************************/

const myFavoritePerson = {
    name: "Abel",
    lastName: "Frías Díaz",
    age: 24
};

console.log(`My name is ${myFavoritePerson.name} ${myFavoritePerson.lastName}, and I am ${myFavoritePerson.age} years old.`);

// console.log(`My name is ${myFavoritePerson["name"]} ${myFavoritePerson["lastName"]}, and I am ${myFavoritePerson["age"]} years old.`);