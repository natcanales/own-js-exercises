/*****************************************************************************

    Given the following object:

        {
            brand: "KIA",
            model: "Rio",
            plate: "7548KRS",
            alias: "Kristine"
        }

    Get an array of the object's keys, and then print in the
    console the key-value pairs. The keys have to be capitalized
    (first letter must be uppercased).

    Expected output:

        Brand: KIA
        Model: Rio
        Plate: 7548KRS
        Alias: Kristine

*****************************************************************************/

const car = {
    brand: "KIA",
    model: "Rio",
    plate: "7548KRS",
    alias: "Kristine"
};

let carKeysArray = Object.keys(car);

for (let i = 0; i < carKeysArray.length; i++) {
    let key = carKeysArray[i];
    let value = car[key];
    key = key[0].toUpperCase() + key.slice(1);
    console.log(`${key}: ${value}`);
}