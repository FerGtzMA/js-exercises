/* 
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present 
should return true
XO("zzoo") => false
*/

function XO(str) {
    strArr = str.toLowerCase().split("");
    if (strArr.filter((ohs) => ohs == 'o').length == strArr.filter((exes) => exes == 'x').length) {
        console.log(strArr.filter((ohs) => ohs == 'o').length);
        console.log(strArr.filter((ohs) => ohs == 'x').length);
        return true;
    }
    return false;
}

console.log(XO("xo"));