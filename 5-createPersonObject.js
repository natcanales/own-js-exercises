/*****************************************************************************

    Create an empty object. Then, one by one, add the following
    properties to it:

        +--------------------------------------------+
        | Key: "name"     | Value: "Natalie"         |
        +--------------------------------------------+
        | Key: "lastName" | Value: "Canales Pastor"  |
        +--------------------------------------------+
        | Key: "age"      | Value: 25                |
        +--------------------------------------------+

    Use the two possible ways to access objects' attributes to
    fill the object's information.

    Finally, use console.log to show the following message:

        "My name is Natalie Canales Pastor, and I am 25 years old."

    HINT: with 'the two possible ways' we mean using dot (.) notation
          and square-brackets ([]) notation.

*****************************************************************************/

const person = {};

person.name = "Natalie";
person.lastName = "Canales Pastor";
person.age = 25;

console.log(`My name is ${person.name} ${person.lastName}, and I am ${person.age} years old.`);

/* const person = {};

person["name"] = "Natalie";
person["lastName"] = "Canales Pastor";
person["age"] = 25;

console.log(`My name is ${person["name"]} ${person["lastName"]}, and I am ${person["age"]} years old.`); */