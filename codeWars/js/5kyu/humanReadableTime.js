// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    const hours = padNum(Math.floor(seconds / 3600))     // find hours
    let secondsLeft = seconds - hours * 3600             // seconds left after hours
    
    const minutes = padNum(Math.floor(secondsLeft / 60)) // find minutes
    secondsLeft = padNum((secondsLeft - minutes * 60))    // seconds left after minutes
    
    return `${hours}:${minutes}:${secondsLeft}`;
}

function padNum(n){
    return n.toString().padStart(2, '0')
}