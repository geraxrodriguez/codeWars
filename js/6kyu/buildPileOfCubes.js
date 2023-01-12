function findNb(m) {
    // reverse engineer to find that
    // n^3 + (n-1)^3 + (n-2)^3 ... 1^3 = m
    // is same thing as
    // 1^3 + 2^3 + 3^3 ... n^3 = m, just backwards

    let n = 1                 
    let sum = 1;              
    while (sum < m){          
      sum += Math.pow(n+1, 3) 
      n++                     
    }
    
    return sum == m ? n : -1
}

// didn't need to post any other ones, cuz my solution is fire on this one