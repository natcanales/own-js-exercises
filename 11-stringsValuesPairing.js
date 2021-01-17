/*****************************************************************************

    We have now two strings with some nouns separated with commas:

        "title, author, year, rating"
        "Harry Potter and the Sorcerer's Stone, J. K. Rowling, 1997, 8.5"

    Obtain two arrays (one per string) and iterate through them to
    print the following output:

        - Title: Harry Potter and the Sorcerer's Stone
        - Author: J. K. Rowling
        - Year: 1997
        - Rating: 8.5

    NOTE: once you have the two arrays, notice that each pair of
          elements inside both arrays are at the same index. For
          example, you can notice this:

            firstArray[0]   ---> "title"
            secondArray[0]  ---> "Harry Potter and the Sorcerer's Stone"

          At index 0, we have both the property ("title") and its
          appropriate value ("Harry Potter and the Sorcerer's Stone"),
          and the same applies to the rest of indexes.

          This basically means that, even if you have two arrays,
          you only need one loop to create the correct pairs.

*****************************************************************************/