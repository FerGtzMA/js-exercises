/* Create a function that takes an integer as an argument and 
returns "Even" for even numbers or "Odd" for odd numbers. */

function OddAndEven(num) {
    if (num%2 === 0) {
        console.log("Even");
        return "Even";
    }else{
        console.log("Odd");
        return "Odd";
    }
}