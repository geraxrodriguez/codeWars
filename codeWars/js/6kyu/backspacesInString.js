// // P: str of letters and '#'
//   // every '#' is 1 backspace
// // R: return string with backspaces processed
//   // if only '#' left, return ''


function cleanString(s) {
  arr = s
  arr.split('').forEach((c,i) => {
      if (c == '#'){
        s = s.replace(c, '')
        s = s.replace(s[i-1], '')
      }    
  })
  return s
}
// console.log(cleanString('abc#d##c')) // 'ac'
// problem with code below is that elements are being removed and then I is being updated, so # are being skipepd over
  while (s.includes('#')){
    for (let i = 0; i < s.length; i++){
      if (s[i] == '#'){
        let start = i - 1
        let end = i + 1
        let subStr = s.slice(start, end)
        s = s.replace(subStr, '')
      }
    }
  }


// not mine, but struggled a lot with this one
function cleanString(s) {
    const result = []
      for (const c of s) {
      c === '#' ? result.pop() : result.push(c)
    }
    return result.join("")
  }
cleanString = s => s
                    .split('')
                    .reduce((r, e) => e == '#' ?            // if current element is hashtag
                                        r.slice(0, -1) :    // remove last element, negative parameter here means it'll start from end of r
                                        r + e,              // if not, concat current element to our string
                                        ''                  // startign with empty string
                    );