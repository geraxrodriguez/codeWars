// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
    return str
      .split('')
      .reduce((s, lett, i) => {
        if (!isNaN(lett)){
          return s
        }
        else if (i == 0){
          return s + lett.toLowerCase()
        } 
        else if (lett == lett.toUpperCase()) {
          return s + `-${lett.toLowerCase()}`
        } 
        else {
          return s + lett
        }
      }, '') // need to identify if current letter is capital
}
  