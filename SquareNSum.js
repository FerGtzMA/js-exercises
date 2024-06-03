/* 
Complete the square sum function so that it squares each 
number passed into it and then sums the results together.
*/

function squareSum(numbers){
    console.log(numbers);
    numbers = numbers.map((number) => number*number);
    let result = 0;
    numbers.forEach(element => {
        result += element;
    });

    return result;
}

console.log(squareSum([0, 3, 4, 5]));