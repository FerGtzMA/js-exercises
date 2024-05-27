function digitalRoot(n) {
    let digits = n.toString().split('');
    let result = 0;

    let i = 0;
    while (i < digits.length) {
        result = result + parseInt(digits[i]);
        console.log(digits[i]);
        console.log(i);
        i++;
        if (i === digits.length) {
            if (result >= 10) {
                i = 0;
                digits = result.toString().split('');
                result = 0;
            }
        }
    }

    console.log(digits.length);
    console.log(result);
    console.log(digits);

    return result;
}

digitalRoot(167);