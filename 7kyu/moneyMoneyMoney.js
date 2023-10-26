// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// P: 4 parameters: D will always be more than P
      // Principal = starting amount.
      // Interest = APR
      // tax = rax rate owed on accrued interest
      // Desired = goal amount of money
// R: Return the number of years it's gonna take to reach desired amount
// E: calculateYears(1000, .05, .18, 1100) => 3 
// P: 

function calculateYears(principal, interest, tax, desired) {
    let years = 0;                          // counter for years
    while (principal < desired){            // loop while principle is less than desired amount
      let accrued = principal * interest    // calculate interest
      let net = accrued - accrued * tax     // calculate and subtract tax
      principal += net                      // add remainder to principle
      years++                               // if loop runs, 1 year has passed
    }
    return years 
  }