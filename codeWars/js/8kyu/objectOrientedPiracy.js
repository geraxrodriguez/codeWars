// Ahoy matey! You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to 
// identify ships with heavy booty on board! Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full 
// of gold and not people? You begin with writing a generic Ship class / struct:

// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
// }

// Task:
// You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.
// Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then 
// the ship is worth looting. Any ship weighing that much must have a lot of booty!
// Add the method "isWorthIt" to decide if the ship is worthy to loot. For example:

// var titanic = new Ship(15, 10);
// titanic.isWorthIt() will return false

// Good luck and may you find GOOOLD!

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function() {
      return (this.draft - this.crew * 1.5) > 20
    };
}