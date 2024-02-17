// Parameters: 3 parameters, all positive floats.
    // if we don't get all 3, return -1
    // h reps where the ball is dropped from, in meters
    // bounce percentage of h the ball rebounds
    // window is a height in meters, reps where mom is looking out from
// Return: positive int of how many times mom will see ball pass ehr
    // if we don't get all 3 params, return -1
// Example: bouncingBall(3, .66, 1.5) => 3
function bouncingBall(h,  bounce,  window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window <= 0 || window >= h) { return -1 } // check if all 3 params, return -1 if not
    
    let momCount = 1                            // mom will see ball at least once, so our count should start at 1
    let bounceHeight = h * bounce 
    while (bounceHeight > window) {             // if h * bounce is greater than window, add 2 to our count. 1 for passing mom on way up, and 1 for coming back on way down
      momCount+= 2                              // 1 for passing window on way up, and 1 for way down
      bounceHeight = bounceHeight * bounce      // ball will be starting from new height after each bounce, so need to use new height  
    }
    
    return momCount
  }
  
  console.log(bouncingBall(3, .66, 1.5)) // => 3