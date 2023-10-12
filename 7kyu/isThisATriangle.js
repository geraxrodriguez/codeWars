// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Mine:
// P(arameters): 3 parameters. All integers. All positive. Not an array of integers or anything. 
// R(eturn): Should return either true or false.
// E(example): 3,3,5 => true,  3,3,6 => false
// P(seudo):

function isTriangle(a,b,c){
    // sum of a+b+c
    const sum = a+b+c
    // b+c is equal to (sum - a). (sum-a) should be greater than a. If not, return false
    if ( !((sum-a) > a) ) { return false }
    // a+c == (sum - b). This number should be greater than b
    else if ( !((sum-b) > b) ) { return false }
    // a+b == (sum - c). This number should be greater than c
    else if ( !((sum-c) > c) ) { return false }
    
    else {return true}
}

// Such a better way
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}
