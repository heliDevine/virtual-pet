function Pet(name) {
    this.name = name;
    this.age = 0;
    this.growUp = function() {
        this.age += 1;
      };
}
const pet = {};

pet.name = 'Richard';

module.exports = Pet;




