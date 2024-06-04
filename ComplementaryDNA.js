/* 
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells 
and carries the "instructions" for the development and functioning of 
living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" 
and "G". Your function receives one side of the DNA (string, except for Haskell); 
you need to return the other complementary side. DNA strand is never empty 
or there is no DNA at all (again, except for Haskell).

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

function dnaStrand(dna){
    dnaArr = dna.split("");
    for (let i = 0; i < dnaArr.length; i++) {
        switch (dnaArr[i]) {
            case "A": dnaArr[i] = "T";
                break;
            case "T": dnaArr[i] = "A";
                break;
            case "G": dnaArr[i] = "C";
                break;
            case "C": dnaArr[i] = "G";
                break;
            default:
                break;
        }
    }
    return dnaArr.join("");
}

console.log(dnaStrand("AARTGC"));