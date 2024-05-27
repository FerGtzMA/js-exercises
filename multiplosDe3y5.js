function mukltiplo3y5(numero) {
    let numeros = []
    let suma = 0;

    for (let index = 0; index < numero; index++) {
        if (index %3=== 0 || index %5=== 0) {
            numeros.push(index);
            suma = suma + index;
        }else if (numero < 0) {
            return 0;
        }
    }

    console.log(suma);
    console.log(numeros);
    return suma;
}

mukltiplo3y5(10);