// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
function sum(x, y) {
    return (x + y);
}

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
function avg(x, y, z) {
    return (x + y + z) / 3;
}

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length
function getLength(text) {
    var result = text.length;
    return result;
}

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.
function greaterThan(x, y) {
    if (x < y) {
        return true;
    }
    if (x >= y) {
        return false;
    }
}

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
function greet(text) {
    var name = ('Hello, ' + text + '!');
    return name;
}

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
function madlib(text1, text2, text3, text4) {
    var mad = ('Once upon a time, a ' + text1 + ' and a ' + text2 + ' lived with a ' + text3 + ' and a ' + text4 + '');
    return mad;
}

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z) {
    var ohyeah = Math.max(x, y, z);
    return ohyeah;
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
    if (char === 'a') {
        return true;
    }
    if (char === 'e') {
        return true;
    }
    if (char === 'i') {
        return true;
    }
    if (char === 'o') {
        return true;
    }
    return false;
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase) {
    var p = '';
    for (var i = 0; i < phrase.length; i++) {
        if (isVowel(phrase[i])) {
            p += phrase[i];
        } else if (phrase[i] === ' ') {
            p += ' ';
        } else {
            p += (phrase[i] + 'o' + phrase[i]);
        }
    }
    return p;
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(w) {
    var k = '';
    for (var i = w.length - 1; i >= 0; i--) {
        k += w[i];
    }
    return k;
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
function longer(champ, contender) {
  return (contender.length > champ.length) ? contender: champ;
}

function longestWord(str) {
    var words = str.split(' ');
    return words.reduce(longer);
}

function findLongestWord(words) {}
//Set it up only to work with three words



// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i) {

}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string) {
    //...
}
