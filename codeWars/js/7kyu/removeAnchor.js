// P: a string, will contain a '#'
// R: the string with anything after '#' removed
// E: "www.codewars.com#about" --> "www.codewars.com"
  // "www.codewars.com?page=1" -->"www.codewars.com?page=1"
// P:

function removeUrlAnchor(url){
    // split at first occurence of '#'
    // return first element in our array
    return url.split('#')[0]
}