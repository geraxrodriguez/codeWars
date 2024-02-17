// Given a list of digits, return the smallest number that could be formed from these digits, using the digits 
// only once (ignore duplicates).

// P: 1 => An array of digits. 
        // duplicates, yes
        // integers, i assume
        // pos or neg
        
// R: Return the smallest num that can be formed from these digits
        // ignore duplicates
        // 

// E: minValue([5, 5, 4, 3, 2]) => 2345
// P:

function minValue(values){
    return Number(                   // turn into an integer
                [...new Set(values)] // get rid of duplicates by creating a set, then turning it into an array
                .sort((a,b) => a-b)  // sort lowest to biggest
                .map((num,index) => index != 0 ? Math.abs(num) : num)
                .join('')            // join into one num, but this will create a str
        )                
}

console.log(minValue([-5,5,5,4,3,2,-1]))