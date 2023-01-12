// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// P: 1 parameter == a string. Inside the string are numbers, separated by a space each. No words. It includes negatives.
// R: return, not console.log(), a string that contains two numbers separated by a string.
// E: highAndLow('1 2 3 4 5') => '5 1'
// P:
function highAndLow(numbers){
    numbers = numbers.split(' ')    // split string into array by spaces
    let low = Math.min(...numbers)  // use math.min() with spread operator to get lowest number
    let high = Math.max(...numbers) // use math.max() w/ spread operator to get highest
    return `${high} ${low}`         // put them into a string and return
}