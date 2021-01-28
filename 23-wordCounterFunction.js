/*****************************************************************************

    Create a function that receives a string as argument, and returns
    an object with each word as key and the number of times each
    word appears as values.

    For example, for the following string:

        "Are you sure you are Abel?"

    the function's return value would be the following object:

        {
            Are: 1,
            you: 2,
            sure: 1,
            are: 1,
            Abel?: 1
        }

    Finally, call the function with any string you want and, given
    the function's output, iterate the object's keys to print the
    following messages:

        `The word 'Are' appears 1 time(s) in the string "Are you sure you are Abel?"`
        `The word 'you' appears 2 time(s) in the string "Are you sure you are Abel?"`
        `The word 'sure' appears 1 time(s) in the string "Are you sure you are Abel?"`
        `The word 'are' appears 1 time(s) in the string "Are you sure you are Abel?"`
        `The word 'Abel?' appears 1 time(s) in the string "Are you sure you are Abel?"`


    BONUS 1: in the previous string, the word 'are' appears as two
             different keys due to the first uppercased letter (we
             know 'Are' is not the same as 'are').

             Improve your function to do the same but in a 'case
             insensitive' way. That way, your function should return
             the following object:
            
                {
                    are: 2,
                    you: 2,
                    sure: 1,
                    abel?: 1
                }


    BONUS 2: add another parameter to your function that will allow
             us to tell if we want a 'case sensitive' behavior or a
             'case insensitive' one.

             For example, calling the function like this:

                myFunction("Are you sure you are Abel?", true);

             would return this object:

                {
                    Are: 1,
                    you: 2,
                    sure: 1,
                    are: 1,
                    Abel?: 1
                }

             and calling the function like this:

                myFunction("Are you sure you are Abel?", false);

             would return this object:
            
                {
                    are: 2,
                    you: 2,
                    sure: 1,
                    abel?: 1
                }


    BONUS 3: we should not consider punctuation marks as parts of
             a word. In the previous examples, we were always
             considering 'Abel?' and 'abel?' as a word, but the
             correct one would be 'Abel' or 'abel'.

             Search in Google how the string's 'replace' method
             works to 'erase' the following punctuation marks from
             the string that your function receives as argument:

                ,    .    ?    (    )    :    ;    !

             That way, calling the function this way:

                myFunction("Are you sure you are Abel?", true);

             should give us the following object as result:

                {
                    Are: 1,
                    you: 2,
                    sure: 1,
                    are: 1,
                    Abel: 1
                }

             To test this Bonus well, call the function with the
             following string:

                "Hey! How are you? Did you know I am going to marry
                 that girl I met years ago? Her name is Natalia (she
                 is 25 years old), and we are already planning how
                 everything is going to be: the wedding day schedule,
                 the decoration... I am excited about it, and very
                 happy to organize quite an important event; although
                 I am a bit stressed because there are many things to
                 think about!"

*****************************************************************************/