/* 
An isogram is a word that has no repeating letters, consecutive or 
non-consecutive. Implement a function that determines whether a string 
that contains only letters is an isogram. Assume the empty string is 
an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str){
    str = str.toLowerCase();
    
    // Objeto para almacenar las letras encontradas
    var encountered = {};
    
    // Iterar a través de cada carácter en la cadena
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        // Si el carácter ya está en el objeto, no es un isograma
        if (encountered[char]) {
            return false;
        }
        // Marcar este carácter como encontrado
        encountered[char] = true;
    }
    
    // Si todas las letras son únicas, es un isograma
    return true;
}