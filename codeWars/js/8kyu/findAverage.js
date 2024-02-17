// Write a function which calculates the average of the numbers in a given list.
function findAverage(array) {
    return array.reduce((acc, curr) => acc+curr, 0) / array.length
}