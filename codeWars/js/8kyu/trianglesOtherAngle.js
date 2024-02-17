// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.
// P: 2 out of the 3 angles. Ints.
// R: RETURN the third angle as an int
// E: 
// P: 

function otherAngle(angle1, angle2){
    // sum of triangle's angles == 180
    // subtract 180 - angle1 - angle2
    // return third anlge
    return 180 - angle1 - angle2
    
  }
  
  // getMissingAngle(100, 50) // 30
  // getMissingAngle(50, 50) // 80