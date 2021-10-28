const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Richard')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
      const pet = new Pet('Richard');

      expect(pet.name).toBe('Richard');
    });

    it('has a initial age of 0', () => {
      const pet = new Pet('Richard');
      expect(pet.age).toEqual(0);
    });

    it('increments the age by 1', () => {
      const pet = new Pet('Richard');
      pet.growUp();
      expect(pet.age).toEqual(1);
    
    });

    it('has initial hunger = 0', () => {
      const pet = new Pet('Richard');
      expect(pet.hunger).toEqual(0);
    });

    it ('increases hunger by 5 when pet.growUp is called', () => {
      const pet = new Pet('Richard');
      pet.growUp();
      expect(pet.hunger).toEqual(5)
    });

    it('has initial fitnes = 10', () => {
      const pet = new Pet('Richard');
      expect(pet.fitness).toEqual(10);
    });

    it ('decreases fitness by 3 when pet.growUp is called', ()  => {
      const pet = new Pet('Richard');
      pet.growUp();
      expect(pet.fitness).toEqual(3)
    });
    it ('increases fitness by 4 when walk function is called', () => {
      const pet = new Pet('Richard');
      pet.fitness = 6;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });


  });

