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

    it ('decreases fitness by 3 when growUp is called', ()  => {
      const pet = new Pet('Richard');
      pet.growUp();
      expect(pet.fitness).toEqual(7)
    });

    it ('increases fitness by 4 when walk function is called', () => {
      const pet = new Pet('Richard');
      pet.fitness = 6;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });

    it ('increases fitness by to a maximum of 10', () => {
      const pet = new Pet('Richard');
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });

    it ('decreases hunger level by 3', () => {
      const pet = new Pet('Richard');
      pet.hunger = 2;
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });

    it ('returns string "I need a walk" if fitness is 3 or less ', () => {
      const pet = new Pet('Richard');
      pet.fitness = 3;
      expect(pet.checkUp()).toBe("I need a walk");
    });

    it ('returns string "I am hungry" if hunger is 5 or more ', () => {
      const pet = new Pet('Richard');
      pet.hunger = 5;
      expect(pet.checkUp()).toBe("I am hungry");
      
    });

    it ('returns string "I am hungry AND I need a walk" if hunger is 5 or more and fitness is 3 or less ', () => {
      const pet = new Pet('Richard');
      pet.hunger = 6;
      pet.fitness = 2;
      expect(pet.checkUp()).toBe("I am hungry AND I need a walk");
    });

    it ('returns string "I feel great!" if hunger is 5 or less and fitness is 3 or more ', () => {
      const pet = new Pet('Richard');
      pet.hunger = 4; 
      pet.fitness = 4;
      expect(pet.checkUp()).toBe("I feel great!");
    });

  it ('returns false if pet fitness is 0 or less', () => {
    const pet = new Pet('Richard');
    pet.fitness = 0;
    expect(pet.isAlive()).toBe(false);
  });
  it ('returns false if pet hunger is 10 or more', () => {
    const pet = new Pet('Richard');
    pet.hunger = 11;
    expect(pet.isAlive()).toBe(false);
  });
  it ('returns false if pet age is 30 or more', () => {
    const pet = new Pet('Richard');
    pet.age = 31;
    expect(pet.isAlive()).toBe(false);
  });
  it ('returns true if pet age is less than 30, pet fitness is more than 0 and hunger is less than 10', () => {
    const pet = new Pet('Richard');
    pet.age = 29;
    pet.fitness = 1;
    pet.hunger = 9;
    expect(pet.isAlive()).toBe(true);
  });
  
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Richard');
    pet.age = 33;
    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
  // it('throws an error if the pet is not alive', () => {
  //   const pet = new Pet('Richard');
  //   pet.fitness = 0;
  //   expect(() => pet.checkUP()).toThrow('Your pet is no longer alive :(');
  // });
  });
