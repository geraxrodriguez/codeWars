// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
String.prototype.camelCase=function camelCase(){
    return this
      .split(' ')
      .map(word => `${word[0].capitalize()}${word.slice(1)}`)
      .join('')
}

return this
.split(' ')
.map(word => word.charAt(0).toUpperCase() + word.slice(1))
.join('');
  
console.log('camel case word'.camelCase())