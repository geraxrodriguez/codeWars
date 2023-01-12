// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:
// h = 0
// m = 1
// s = 1
// result = 61000

function past(h, m, s){
    const hoursToMS = h * 60 * 60 * 1000
    const minToMS = m * 60 * 1000
    const secToMS = s * 1000
    return hoursToMS + minToMS + secToMS
}