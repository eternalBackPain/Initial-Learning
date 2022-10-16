//Minimum function
function min(x, y) {
    if (x < y) {
        return x;
    }
    if (x > y) {
        return y;
    }
}
console.log(min(1, 2));

console.log("")

//recursion
function isEven(x) {
    if (x == 0) {
        return true;
    }
    if (x == 1) {
        return false;
    }
    while (x > 1) {
        x = x - 2;
        if (x == 0) {
            return true;
        }
        if (x == 1) {
            return false;
        }
    }
}
console.log(isEven(0));

//recursion solution
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}


//bean counting
function countChars(word, letter) {
    let counter = 0;
    for (i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            counter += 1;
        }
    }
    return counter;
}
console.log(countChars("Bubbbbles", "b"));