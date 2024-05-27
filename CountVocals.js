/* Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
    let vocals = ['a', 'e', 'i', 'o', 'u'];

    let arrayStr = str.split("");

    let contador = 0;

    for (let i = 0; i < arrayStr.length; i++) {
        if (vocals.includes(arrayStr[i])) {
            contador++;
        }
    }

    return contador;
}