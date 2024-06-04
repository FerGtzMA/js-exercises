/* 
In this kata you are required to, given a string, 
replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and 
don't return it.

"a" = 1, "b" = 2, etc.
*/

function alphabetPosition(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let charCode = text.toLowerCase().charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) { // Verificar si es una letra minúscula
            result += (charCode - 96) + " "; // Calcular la posición en el alfabeto y agregarla al resultado
        }
    }

    return result.trim(); // Eliminar el espacio final y retornar el resultado
}

let texto = "The sunset sets at twelve o' clock.";
let resultado = alphabetPosition(texto);
console.log(resultado);