const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.growUp = function() {
        this.age += 1;
        this.hunger +=5;
        this.fitness -=3;
      };
    
    this.walk = function(){
      if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
    }
    this.feed = function() {
      if ((this.hunger - 3) >= MINIMUM_HUNGER ){
        this.hunger -= 3;
      } else { 
        this.hunger = MINIMUM_HUNGER;
      }
  
    }
    this.checkUp = function() {
      if (this.fitness <= 3) {
      return ("I need a walk"); 

     } else if 
      (this.hunger >= 5) {
      return ("I am hungry");
    }
  } else if
     (this.hunger >= 5 && this.fitness <=3) {
    return ("I am hungry AND I need a walk");
  }
} else {
  return ("I feel great!");
}
  }
  


module.exports = Pet;
