/* 
The goal of this exercise is to convert a string to a new string where 
each character in the new string is "(" if that character appears only 
once in the original string, or ")" if that character appears more than 
once in the original string. Ignore capitalization when determining if 
a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

function duplicateEncoder(string) {
    // Convert the string to lowercase to ignore case
    string = string.toLowerCase();
    
    // Initialize an empty string to store the result
    let result = "";
    
    // Iterate through each character in the string
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        // Count the occurrences of the current character in the string
        let count = string.split(char).length - 1;
        
        // If the character appears more than once, add ")" to the result, otherwise add "("
        if (count > 1) {
            result += ")";
        } else {
            result += "(";
        }
    }
    
    return result;
}

// Test cases
console.log(duplicateEncoder("din"));      // Output: "((("
console.log(duplicateEncoder("recede"));   // Output: "()()()"
console.log(duplicateEncoder("Success"));  // Output: ")())())"
console.log(duplicateEncoder("Hola"));  