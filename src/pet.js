const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
class Pet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;


    // this.isAlive = function () {

    //   return this.age < 30 && this.hunger < 10 && this.fitness > 0;
      };
        
      get isAlive() {
        if (this.age > 30 || this.hunger > 10 || this.fitness < 0) {
        return false
      } else {
        return true;
      }
      };

    growUp() {
      if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      
      } else {

      this.age += 1;
      this.hunger += 5;
      this.fitness -= 3;
    }
    };

    walk() {
      if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
      else if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
      } else {
        this.fitness = MAXIMUM_FITNESS;
      }
    };


    feed() {
      if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
      else if ((this.hunger - 3) >= MINIMUM_HUNGER) {
        this.hunger -= 3;
      } else {
        this.hunger = MINIMUM_HUNGER;
      }

    };
    checkUp() {
      if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }

      if (this.hunger >= 5 && this.fitness <= 3) {
        return ("I am hungry AND I need a walk");

      } else if (this.hunger >= 5) {
        return ("I am hungry");
      }
      else if (this.fitness <= 3) {
        return ("I need a walk");
      }
      else {
        return ("I feel great!");
      }
    };
  };


module.exports = Pet;
