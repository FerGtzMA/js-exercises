function repeatStr (n, s) {
    // return s.repeat(n);
    let result = "";

    for (let i = 0; i < n; i++) {
        result += s;
    }

    return result;
}