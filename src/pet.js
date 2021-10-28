function Pet(name) {
    this.name = name;
    this.age = 0;
    this.growUp = function() {
        this.age += 1;
      };
    this.hunger = 0;
    this.getHungry = function() {
      this.growUp += 5;
    };
    this.fitness = 10;
    
}
const pet = {};

pet.name = 'Richard';

module.exports = Pet;




