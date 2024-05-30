/* 
Your task is to make a function that can take any non-negative integer 
as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n){
    // Convertir el número en una cadena y luego en un array de dígitos
    let digitos = String(n).split('').map(Number);

    // Ordenar los dígitos en orden descendente
    digitos.sort((a, b) => b - a);

    // Unir los dígitos en una cadena y convertirlo nuevamente a número
    let numeroOrdenado = parseInt(digitos.join(''));

    return numeroOrdenado;
}

console.log(descendingOrder(42145));