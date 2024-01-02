// P: two objects
    // first one contains how much of each ingredient the recipe calls for
    // second is the ingreidents we have and how much we have of each
// R: return an int, the amount of cakes Pete can bake
// P

function cakes(recipe, available) {
    let cakes = []                                                            // container to collect number for how many cakes each ingredient can make
    
    for (const ingredient in recipe) {
      if (!available[ingredient]){                                            // if ingredient not available, return false
        return 0
      }
      cakes.push( Math.floor(available[ingredient] / recipe[ingredient]) )    
    }
    
    // my orginal answer
     return cakes.sort((a, b) => a - b)[0] 
     // not my original answer but i think better way to return our lowest value in terms of performance
     // look at me, using the spread operator
     return Math.min(...cakes)
}