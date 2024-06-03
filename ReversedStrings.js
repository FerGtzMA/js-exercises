/* Complete the solution so that it reverses 
the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' */

function solution(str){

    //return str.split('').reverse().join('');  

    strArr = str.split("");
    result = "";
    for (let i = strArr.length -1; i >= 0; i--) {
        result += strArr[i];
    }

    return result;
}

console.log(solution("Hola"));