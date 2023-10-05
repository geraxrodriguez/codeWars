// Issue

// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.

function pipeFix(numbers){
    const max = numbers[numbers.length-1]
    const min = numbers[0]
    let output = [];
    for (let i = min-1; i <= max-1; i++){
      output.push(i + 1)
    }
    return output
}