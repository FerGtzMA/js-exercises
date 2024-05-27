/* Escribe un codigo que dada una palabra muestre 
las palabras que contiene y la cantidad de veces 
que aparece cada una de ellas */

palabra = 'anitalavalatina';

function contadorletras(palabra){
    let palabraCadena = palabra.split("");

    console.log(palabraCadena);

    const arrayUnico = [... new Set(palabraCadena)];

    console.log(arrayUnico);

    let resultado = [];
    let contador = 0;
    for (let i = 0; i < arrayUnico.length; i++) {
        for (let j = 0; j < palabraCadena.length; j++) {
            if (arrayUnico[i] === palabra[j]) {
                contador = contador + 1;
            }
        }; 
        resultado.push(`${arrayUnico[i]}: ${contador}`);
        contador = 0;
    }

    console.log(resultado);
}

contadorletras(palabra)