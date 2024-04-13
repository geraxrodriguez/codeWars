// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// return masked string

//P: 1 param, a string
  // will be of any length, including 0. 
//R: Last all except the last four elements changed to '#'
  // if str.length is < 4, just return it
// "64607935616" --> "#######5616"
// "1" --> "1"
//P:
function maskify(cc) {
    //if cc length is less than 4, return it 
    if (cc.length < 4) { return cc; }
    
    //find length of cc
    //loop
    //if i less than cc length - 4, replace it with '#'
    //else, don't change element
    let s = '';
    for (let i = 0; i < cc.length; i++){
      i < (cc.length - 4) ? s += '#' : s += cc[i];
    }
    return s
  }
  