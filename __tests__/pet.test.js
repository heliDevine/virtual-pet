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
      expect(pet.age).toEqual(0);
    });

    it('increments the age by 1', () => {
      pet.growUp();
      expect(pet.age).toEqual(1);
    
    });

    it('has initial hunger = 0', () => {
      expect(pet.hunger).toEqual(0);
    });

    it ('increases hunger by 5 when pet.growUp is called', () => {
      expect(pet.getHungry).toEqual(5)
    });

    it('has initial fitnes = 10', () => {
      expect(pet.fitness).toEqual(10);
    });
    it ('decreases fitness by 3 when pet.growUp is called', ()  => {
      expect(pet.getUnfit).toEqual(3)
    });

  });

