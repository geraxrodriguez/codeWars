// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    return arr
            .filter(el => el !== 0)
            .concat(arr.filter(el => el === 0))
}

// not mine, but thought it was clean
var moveZeros = function (arr) {
    return [
      ...(arr.filter(n => n !== 0)),
      ...(arr.filter(n => n === 0))
    ];
}