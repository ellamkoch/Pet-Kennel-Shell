//createPet function - this has to be defined first before pets are created so js knows what to do when it runs those lines.
function createPet(name, species, energy = 80, happiness = 50, maxEnergy = 100) { // properties are in ()
    return {
        name: name,
        species: species,
        energy: energy,
        happiness: happiness,
        maxEnergy: maxEnergy, // going for the bonus w/ maxEnergy being identified as a property of the createPet function


    //  initial status reading - methods must be nested so the functions belongs to the object
    status() {
        console.log (`Pet name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}/${this.maxEnergy}.`);
    }, //Energy: ${this.energy}/${this.maxEnergy}`) will show that this is the current energy of the pet out of a max of 100 energy

    // play method
    play() {
        this.happiness += 10; // increases happiness by 10
        this.energy -= 20;// decreases energy by 20
        if (this.energy < 0) { // bonus to keep energy from going below 0
           this.energy = 0;
           return `You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy} out of ${this.maxEnergy}.`;// returns this if energy goes below 0, and resets energy to 0.
        } else {  // returns this msg if energy isnt below 0
            return `You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy} out of ${this.maxEnergy}.`;
        }
        },

    // feed method
    feed() {
        this.happiness += 20; // increases happiness by 20
        this.energy += 20;// increases energy by 20
         if (this.energy > this.maxEnergy) { // bonus to keep energy from going over 100
           this.energy = this.maxEnergy; // makes energy equal the maxEnergy idenfitied above in the properties of the function createPet
            return `You fed ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy} out of ${this.maxEnergy}.`; //returns this msg if energy goes above 100, and sets energy at 100.
        } else {
            return `You fed ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy} out of ${this.maxEnergy}.`;
        } // returns this msg if energy is below 100
    },

    // Bonus method
    rest() {
        this.energy = this.maxEnergy;// changes energy to maxEnergy property of 100 set in the properties
        return `${this.name} has rested. Energy is now fully restored to ${this.energy}.`;
    },

    cuddles() { // if a pet gets cuddles from their owner they get +20 happiness and +15 energy
        this.happiness +=20;
        this.energy +=15;
        if (this.energy > this.maxEnergy) { // bonus to keep energy from going over 100
            this.energy = this.maxEnergy; // makes energy equal the maxEnergy idenfitied above in the properties of the function createPet
           return `You cuddled with ${this.name} and they loved it! Happiness is now ${this.happiness}, and energy is now ${this.energy} out of ${this.maxEnergy}.`; //returns this msg if energy goes above 100, and sets energy at 100.
           } else {
             return `You cuddled with ${this.name} and they loved it! Happiness is now ${this.happiness}, and energy is now ${this.energy} out of ${this.maxEnergy}.`;
    } // returns this msg if energy is below 100

 }
};
}

// Empty Array to store pets
const kennel = [];

//Multiple Pets created by createPet Factory
const pet1 = createPet("Blob", "Goat", 50);
const pet2 = createPet("Sylvester", "Cat", 40);
const pet3 = createPet("SpongeBob Square Pants", "Sponge", 35);
const pet4 = createPet("Lucky", "Dog", 85);
const pet5 = createPet("Monkey", "Horse", 70);
const pet6 = createPet("Snarf", "Snarf", 45);

// initial status msgs for each
pet1.status();
pet2.status();
pet3.status();
pet4.status();
pet5.status();
pet6.status();

// pushing pets to the kennel array
kennel.push(pet1);
kennel.push(pet2);
kennel.push(pet3);
kennel.push(pet4);
kennel.push(pet5);

// pushing the remaining pets into the array
kennel[kennel.length] = pet6;

// intial values of pets in the kennel
console.table(kennel);

// testing the methods
console.log(pet3.cuddles()); // targeting the variable in question and then applying the method.
console.log(pet1.play());
console.log(pet3.feed());

//Bonus for each part, resting all the pets in their kennel and showing their energy goes to 100 in the table.
kennel.forEach(pet => pet.rest());
//showing all the updated values of the pets in the kennel
console.table(kennel);


