// S

// P: 1 parameter.
    // number. an integer
    // will be positive
    

// R: Returning one number. 
    // Do you want the number as a postive integer?
    // Do you want us to specificaly return it? Console log it?
    // 

// E: persistence(39) => 3
// P:: 

function persistence(num) {
    let product = num ;                                                        // container variable for product
    let counter = 0;
    while (product >= 10){                                                     // is product less than 10
      product = product.toString().split('').reduce((acc, curr)=> acc * curr)  // update product
      counter++                                                                // update counter
    }
    return counter                                                             // if chru, return product
  }