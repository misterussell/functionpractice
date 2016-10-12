// setting up some variables to use for our examples. no need to mess with this:
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Rhonda', teaches : 'iOS'},
    { firstname : 'Gil', teaches : 'Java'},
    { firstname : 'Ben', teaches : 'UI'},
    { firstname : 'Jess', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

///////////////////////////////////////////////////////////////////////////////
//                                                      Explorer Mode                                                                    //
///////////////////////////////////////////////////////////////////////////////

// Write a function called `sum` that takes two parameters and returns the sum
// of those 2 numbers.
// write your code here:
function sum(x, y) {
  return x + y;
};

// write your console.log/asserts here:
// i've already written some console.logs and console.asserts for you.
// follow this pattern as you work on the rest of these problems.
// console.log('sum of 2 and 3 is ', sum(2,3));
console.assert(sum(2,3) === 5);
console.assert(sum(1,0), 1);
console.assert(sum(-48,5), -43);

// -------------------
// Write a function named `avg` that takes 3 parameters and returns the average
// of those 3 numbers.
// write your code here:
function average(x, y, z) {
  return (x + y + z) / 3;

}

// write your console.log/asserts here:
// console.log('average of 4, 20, and 3 is', average(4, 20, 3));
// console.assert(average(4, 20, 3) === 9);


// -------------------
// Write a function called `getLength` that takes one parameter (a string) and
// returns the number of characters in that string
// write your code here:
function getLength(text) {
  return text.length;
}

// write your console.log/asserts here:
// console.log('The text entered is ', getLength('ominous'), ' characters long');
// console.assert(getLength('who eats macdonalds?') > 2);

// -------------------
// Write a function called `greaterThan` that takes two parameters and
// returns true if the second parameter is greater than the first. Otherwise
// the function should return false.
// write your code here:
function greaterThan(x, y) {
  if (y > x) {
    return true;
  } else {
    return false;
  }
}

// write your console.log/asserts here:
// console.log(greaterThan(4,3));
// console.log(greaterThan(1, 100));
// console.assert(greaterThan(2, 10) === true);

// -------------------
// Write a function called `greet` that takes a single parameter and returns a
// string that is formated like "Hello, Name!" where *Name* is the parameter
// that was passed in.
// write your code here:
function greet(name) {
  return 'Hello, ' + name + '!';
}

// write your console.log/asserts here:
// console.log(greet('Frank'));
// console.assert(greet('Harry Potter'));

// -------------------
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence. Finally the
// function should return that sentence.
// write your code here:
function madlib(wordOne, wordTwo, wordThree, wordFour) {
  return 'The troll ate ' + wordOne + ' when you gave him ' + wordTwo + '. To thank you, he gave you ' + wordThree + ' and told you to eat it with ' + wordFour + '.';
}

// write your console.log/asserts here:
// console.log(madlib('cheese', 'nails', 'snake', 'laundry'));
// console.assert(madlib('math', 'elephant', 'burger', 'space'));

// -------------------
// Write a function called `max` that returns the larger of two numbers
// write your code here:
function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

// write your console.log/asserts here:
// console.log(max(20, 100));
// console.log(max(300, 40));
// console.assert(max(300, 40) === 300);

// -------------------
// Write a function called `maxOfThree` that returns the largest of three
// numbers
// write your code here:
function maxOfThree(x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
}

// write your console.log/asserts here:
// console.log(maxOfThree(10, 20, 30));
// console.log(maxOfThree(90, 1, 2));
// console.log(maxOfThree(120, 999, 2));
// console.assert(maxOfThree(122, 87, 99) === 122);

// ---------------------
// Write a function called `isVowel` that receives a single character as a
// parameter and returns true if it is a vowel, false otherwise.
// write your code here:

function isVowel (letter) {
  var checkLetter = letter.toUpperCase();
  if (checkLetter === 'A' || checkLetter === 'E' || checkLetter === 'I' || checkLetter === 'O' || checkLetter === 'U') {
    return true;
  } else {
    return false;
  }
}

// write your console.log/asserts here:
// console.log(isVowel('e'));
// console.log(isVowel('z'));
// console.log(isVowel('d'));
// console.log(isVowel('e'));
// console.assert(isVowel('t') === false);

// ---------------------
// Write a function called `translate` that will translate a text into
// "Rovarspraket". That is, double every consonant and place an occurrence of
// "o" in between. For example, translate("this is fun") should return the
// string "tothohisos isos fofunon".
// write your code here:
function translate(phrase) {
  var phraseString = phrase;
  var phraseArray = phraseString.split('');
  var newPhraseArray = phraseArray;
  //if the position in phraseArray is a consonant add an o and the same consonant
  // console.log(phraseArray);
  for (i = 0; i < phraseArray.length; i++) {
    var checkLetter = phraseArray[i].toUpperCase();
    var toDuplicate = phraseArray[i];
    if (checkLetter === 'A' || checkLetter === 'E' || checkLetter === 'I' || checkLetter === 'O' || checkLetter === 'U') {
      // console.log('vowel position:' + i);
    } else if (checkLetter === ' '){
      // console.log('space position:' + i);
    } else {
      newPhraseArray.splice(i, 1, toDuplicate + 'o' + toDuplicate);
    }
  }
    var newPhraseString = newPhraseArray.join('');
    return(newPhraseString);
}

// write your console.log/asserts here:
// console.log(translate('Nevermore'));
// console.assert(translate('Nevermore') === 'NoNevoverormomorore');
// console.log(translate('Hi how are you?'));

// ---------------------
// Write a function called `reverse` that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
// write your code here:
function reverse(phrase) {
  var phraseArray = phrase.split('');
  var reversedArray = phraseArray.reverse();
  var newPhrase = reversedArray.join('');
  return newPhrase;
}

// write your console.log/asserts here:
// console.log(reverse('Goodbye horses'));
// console.assert(reverse('Goodbye horses') === 'sesroh eybdooG');



// ---------------------
// Write a function called `largest` that takes an array of numbers and returns
// the largest number in the array.
// write your code here:
var testArray = [1,2,200,4,1200,3,93,7,13];
function largest(numArray){
  var greatestVal = 0;
  // return Math.max.apply(Math, numArray);
  for(i = 0; i < numArray.length; i++) {
    if (numArray[i] > greatestVal) {
      greatestVal = numArray[i];
    }
  }
  return greatestVal;
}

// // // write your console.log/asserts here:
// console.log(largest(testArray));
// console.log('the largest number in the `numbers` array is ', largest(testArray));
// console.assert(largest(testArray) === 1200);

// ---------------------
// Write a function called `longest` that takes an array of strings and returns
// the longest string in the array.
// write your code here:
var stringArray = ['Molly', 'Smiles', 'With', 'Grace', 'Upon', 'Her', 'Face'];
function longest(strings) {
  var greatestVal = '';
  for(i = 0; i < strings.length; i++) {
    if (strings[i].length > greatestVal.length) {
      greatestVal = strings[i];
    }
  }
  return greatestVal;
}

// write your console.log/asserts here:
// console.log(longest(stringArray));
// console.assert(longest(stringArray) === 'Smiles');
// console.assert(longest(['how','are','you','doing']));
// console.assert(longest(['how','are','you','doing']) === 'doing');

// ---------------------
// Write a function called `getEvens` that takes an array of numbers and returns
// a new array with only the even numbers from the original array
// write your code here:
function getEvens(array) {
  var evenArray = [];
  var x = 0;
  for (i = 0; i < array.length; i++) {
    if ((array[i] / 2) % 1 === 0) {
      evenArray[x] = array[i];
      x++;
    }
  }
  return evenArray;
}

// write your console.log/asserts here:
// console.log(getEvens(testArray));
// console.assert(getEvens(testArray)[2] === 4);

// ---------------------
// Write a function called `getOdds` that takes an array of numbers and returns
// a new array with only the odd numbers from the original array
// write your code here:
function getOdds(array) {
  var oddArray = [];
  var x = 0;
  for (i = 0; i < array.length; i++) {
    if ((array[i] / 2) % 1 !== 0) {
      oddArray[x] = array[i];
      x++;
    }
  }
  return oddArray;
}
// write your console.log/asserts here:
// console.log(getOdds(testArray));
console.assert(getOdds(testArray)[0] === 1);

// ---------------------
// Write a function called `containsIs` that takes an array of strings and
// returns a new array with only the strings which contain the substring `is`
// write your code here:
var isArray = ['Kiss' , 'Mountain' , 'Wish' , 'Develop' , 'Trish', 'Delish' , 'Mel D'];
function containsIs(array) {
  var newArray = [];
  var x = 0;
  for(i = 0; i < array.length; i++) {
    if (array[i].includes('is')) {
      newArray[x] = array [i];
      x++;
    }
  }
  return newArray;
}
// write your console.log/asserts here:
// console.log(containsIs(isArray));
// console.assert(containsIs(isArray)[1] === 'Wish');

///////////////////////////////////////////////////////////////////////////////
//                                                      Adventurer Mode                                                              //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `contains` that takes an string AND an array of
// strings and returns a new array with only the strings which contain the
// substring specified string
// write your code here:
var doomArray= ['doom' , 'gloom' , 'alphabet' , 'moon' , 'jack' , 'smack'];
function contains(string, array) {
  var newArray = [];
  var x = 0;
  for(i = 0; i < array.length; i++) {
    if (array[i].includes(string)) {
      newArray[x] = array [i];
      x++;
    }
  }
  return newArray;
}
// write your console.log/asserts here:
// console.log(contains('oo', doomArray));
// console.log(contains('ack', doomArray));
// console.log(contains('ack', doomArray)[1] === 'smack');

// ---------------------
// Write a function called `teachersOf` that takes a subject returns only the
// teachers who teach the specified subject.
// write your code here:
function teacher(name, subject) {
  this.name = name;
  this.subject = subject;
}
var teachers = [];
teachers[0] = new teacher('Gladys', 'Math');
teachers[1] = new teacher('Luis', 'Italian');
teachers[2] = new teacher('Jim', 'Comedy');
teachers[3] = new teacher('Larry', 'Cable TV');
teachers[4] = new teacher('Doc', 'Math');

function teachersOf(subjectSearch, listOfTeachers) {
  i=0;
  z=0;
  var yourTeachers = [];
  do {
    if (teachers[i].subject === subjectSearch) {
      yourTeachers[z] = teachers[i].name;
      z++;
    }
    i++;
  } while (i < listOfTeachers.length);
  return yourTeachers;
}
// write your console.log/asserts here:
console.log(teachersOf('Math', teachers));
console.assert(teachersOf('Math', teachers)[1] === 'Doc');

// ---------------------
// Write a function called `objectMatches` that takes 2 strings and an array of
// objects as parameters. The first string is the value to find inside an
// object. The second string string is the key where you want to look for the
// value inside the objects. The array is the array of objects through which to
// search. The function should return a new array of objects that have the
// specified value in the specified key.
// write your code here:

// write your console.log/asserts here:
// console.log('the objects that match javascript teachers are', objectMatches('JavaScript', 'teaches', instructors))

///////////////////////////////////////////////////////////////////////////////
//                                                      Epic Mode                                                                            //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `getAge` that takes a string in one of these formats:
// '12-25-2016' OR '12/25/2016'. If the input is a valid format, it should
// return the years since the date (aka tell how old someone with that birthday
// would be). If the input is invalid OR if the date is after today's date,
// throw an error in the console that describes what the user did wrong when
// calling the function.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `isValidPassword` that takes a string password. If
// the password meets the following criteria return true. otherwise return
// false.
    // at least 8 characters
    // contains at least one number
    // contains at least one of the following: . , ! $ &
    // contains at least one capital letter and one lowercase letter
// write your code here:

// write your console.log/asserts here:
