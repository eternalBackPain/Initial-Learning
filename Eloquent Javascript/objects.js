//EXERCISE 1: the sum of a range
function range(start, end, step) {
    let arr = [start];
    for (i = start; i < end; i += step) {
        arr.push(i + 1);
    }
    return arr;
}
console.log(range(-5, 1));

function sum(array) {
    let total = 0;
    for (let value of array) { //used to iterate over elements of arrays
        total += value;
    }
    return total;
}
console.log(sum(range(1, 10)));
console.log("");

//EXERCISE 2: reversing an array
function reverseArray(array) {
    console.log(array);
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log("");

// I COULD NOT FIGURE OUT HOW TO REVERSE THE ARRAY WITHOUT CREATING A NEW ARRAY AND
// WITHOUT USING THE REVERSE METHOD
// function reverseArrayInPlace(array) {
//     for (i = 0; i < array.length; i++) {
//         array.splice(i, 0, array[array.length]);
//     };
//     return array;
// }
// console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
console.log("");


//EXERCISE 3: A list
function arrayToList(array) {
    let list = {
        value: array[0],
        rest: {
            value: array[1],
            rest: {
                value: array[2],
                rest: null
            }
        }
    }
    return list
}
//solution
function arrayToListSolution(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        };
    }
    return list;
}

    //another solution 
    function listToArraySolution(list) {
        let array = [];
        for (let node = list; node; node = node.rest) {
            array.push(node.value);
        }
        return array;
    }

console.log(arrayToList([1, 2, 3]))
// console.log(listToArray(arrayToList([1, 2, 3])))


//EXERCISE 4: Deep Comparison
