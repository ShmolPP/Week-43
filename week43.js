// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our sylabus. 

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/
console.log("Task: A");
function drawTree(height) {

    for (let i = 0; i < height - 1; i++) {
        let spaces = " ".repeat(height - i - 1);
        let stars = "*".repeat(2 * i + 1);
        console.log(spaces + stars);
    }
    
    let trunkSpaces = " ".repeat(height - 1);
    console.log(trunkSpaces + "x");
}

console.log("Tree with height 5:");
drawTree(5);
/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/
console.log("Task: B");
function drawArrow(size) {
    for (let i = 1; i <= size; i++) {
        console.log("* ".repeat(i));
    }
    
    for (let i = size - 1; i > 0; i--) {
        console.log("* ".repeat(i));
    }
}

console.log("Arrow with size 3:");
drawArrow(3);

/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/
console.log("Task: C");
function drawBox(width, height) {
    console.log("+" + "-".repeat(width * 4) + "+");
    for (let i = 0; i < height * 2; i++) {
        console.log("|" + " ".repeat(width * 4) + "|");
    }
    console.log("+" + "-".repeat(width * 4) + "+");
}
console.log("Box with dimensions 2x2:");
drawBox(2, 2);


function isHeterogram(word) {
    word = word.toLowerCase().replace(/[^a-z]/g, '');
    const letters = new Set(word);
    return letters.size === word.length;
}

console.log("Testing heterogram function:");
console.log("'dermatoglyphics':", isHeterogram("dermatoglyphics")); // true
console.log("'hello':", isHeterogram("hello")); // false
console.log("'Alphabet':", isHeterogram("Alphabet")); // false
console.log("'thumbscrew':", isHeterogram("thumbscrew")); // true


/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");

function areAnagrams(word1, word2) {
    // Convert to lowercase and sort both words
    const sortedWord1 = word1.toLowerCase().split('').sort().join('');
    const sortedWord2 = word2.toLowerCase().split('').sort().join('');
    
    // Compare the sorted strings
    return sortedWord1 === sortedWord2;
}

// Test cases
console.log("Testing anagram function:");
console.log("'listen' and 'silent':", areAnagrams("listen", "silent")); // true
console.log("'triangle' and 'integral':", areAnagrams("triangle", "integral")); // true
console.log("'hello' and 'world':", areAnagrams("hello", "world")); // false