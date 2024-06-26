/* Write a function that takes an integer as input, and returns 
the number of bits that are equal to one in the binary representation
of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the 
function should return 5 in this case */

var countBits = function(n) {
    bitN = n.toString(2).split('');
    let unos = 0;
    for (let i = 0; i < bitN.length; i++) {
        if (bitN[i] == 1) {
            unos = unos + 1;
        }
    }

    return unos;
  };

console.log(countBits(6367587293));