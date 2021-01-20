/*****************************************************************************

    Create an object that will represent yourself. You have to add
    the following information:

        - First name (string)
        - Last name (string)
        - Age (number)
        - If you like animals (boolean)
        - Hobbies (array)
        - Bootcamp modality (object)

    The 'bootcamp modality' field will have to contain the following
    values, (you decide the properties' names):

        - "Web Development"
        - "Full Time"

    Now that you have created the object, do not modify its declaration.
    We are going to make some changes in the data by accessing certain
    attributes:

        - Add one year to your current age
        - Change the value which says if you like animals to its opposite
        - Modify your name by uppercasing it
        - Add an alias property to the 'bootcamp modality' and set
          its value to "WDFT"
        - Add two more hobbies to the array

    Finally, print the following using console.log:

        "Hi! I am <first_name> <last_name>, and I am <age> years old.
         I have <number_of_hobbies> hobbies, and now I am in Ironhack's
         Web Development - Full Time course."
    
    You obviously have to replace the information between < and >
    symbols with the information you have in your object.

*****************************************************************************/

const myData = {
    firstName: "Natalia",
    lastName: "Canales Pastor",
    age: 25,
    loveAnimals: true,
    hobbies: ["reading", "watch Youtube"],
    bootcampModality: {
        course: "Web Development",
        schedule: "Full Time"
    }
};

myData.age++;
myData.loveAnimals = !myData.loveAnimals;
myData.firstName = myData.firstName.toUpperCase();
myData.bootcampModality.alias = "WDFT";
myData.hobbies.push("going for a walk", "manualities");

console.log(`Hi! I am ${myData.firstName} ${myData.lastName}, and I am ${myData.age} years old.
I have ${myData.hobbies.length} hobbies, and now I am in Ironhack's
${myData.bootcampModality.course} - ${myData.bootcampModality.schedule} course.`);