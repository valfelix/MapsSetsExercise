// Maps and Sets Exercise
/* Quick Question #1
What does the following code return? */

new Set([1,1,2,2,3,4]) // Set(4) {1, 2, 3, 4}

/* Quick Question #2
What does the following code return? */

// [...new Set("referee")].join("") // 'ref'

/* Quick Questions #3
What does the Map m look like after running the following code? */

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); 

/*
0: {Array(3) => true}
1: {Array(3) => false}
*/

/* hasDuplicate
Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate */

const hasDuplicate = arr => arr.length !== new Set(arr).size;

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

/* vowelCount
Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string. */ 

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function isVowel(char){
    return "aeiou".includes(char);
}

function vowelCount(str) {
    let string = str.toLowerCase();
    const vowelMap = new Map();
    for(let char of string){
        if(isVowel(char)){
            if(vowelMap.has(char)){
                vowelMap.set(char, vowelMap.get(char) + 1);
            } else {
                vowelMap.set(char, 1);
            }
        }
    }
    return vowelMap;
}
