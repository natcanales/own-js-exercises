/*****************************************************************************

    We have now two strings with some nouns separated with commas:

        "title, director, year, rating"
        "Inception, Christopher Nolan, 2010, 8.8"

    The objective now will be to create the following object using
    the strings' information:

        {
            title: "Inception",
            director: "Christopher Nolan",
            year: 2010,
            rating: 8.8
        }

    The same as you did in the previous exercise can be used to
    create this object. Just start by creating an empty object
    and fill its information while looping through each property
    name.

    NOTE: take into account that the object has to store the
          year and the rating as numbers, and not as strings.
          Search "convert string to number javascript" in Google
          to help you find a way to achieve this.

*****************************************************************************/

let filmAttributes = "title, director, year, rating";
let filmData = "Inception, Christopher Nolan, 2010, 8.8";

const film = {};

filmAttributes = filmAttributes.split(", ");
filmData = filmData.split(", ");

for (let i = 0; i < filmAttributes.length; i++) {
    film[filmAttributes[i]] = filmData[i];
}

film.year = parseInt(film.year);
film.rating = parseFloat(film.rating);