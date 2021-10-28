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
  });

