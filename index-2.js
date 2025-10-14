//createPet function - this has to be defined first before pets are created so js knows what to do when it runs those lines.
function createPet(name, species) { // properties are in ()
    return {
        name: name,
        species: species,
        happiness: 50,
        energy: 100,


    //  initial status reading - must be nested so the function belongs to the object
    status() {
        console.log (`Pet name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}.`);
    },

    // play method
    play() {
        this.happiness += 10; // increases happiness by 10
        this.energy -= 20;// decreases energy by 20
        return `You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
    },

    // feed method
    feed() {
        this.happiness += 20; // increases energy by 20
        this.energy += 20;// increases energy by 20
        return `You fed ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
    },

    // Bonus method
    rest() {
        this.energy = 100;// changes energy to 100 if they rest
        return `${this.name} has rested. Energy is now fully restored to ${this.energy}.`;
    }


    };
}

// creating multiple pets
const pet1 = createPet("Blob", "Goat");
const pet2 = createPet("Sylvester", "Cat");
const pet3 = createPet("SpongeBob Square Pants", "Sponge");

// initial status msgs for each
pet1.status();
pet2.status();
pet3.status();

console.log(pet1.play()); //calls the play method for pet1 and prints the msg above in the play method with the properties named from the function.
pet1.status(); // shows an updated status after the pet plays and returns the msg set above in the status method.

console.log(pet2.feed()); // calls the feed method for pet 2 and prints the msg above in the feed method with the properties named from the function
pet2.status(); // shows an updated satatus msg after the pet is fed and returns the msg set above in the status method.

// testing the bonus method rest
console.log(pet3.rest()); // calls the rest method for pet 3 and prints the mesg in the rest method with the prperties named from the function, setting the energy at 100.
pet3.status(); // shows an updated status after the pet rests and retuns the msg set above in the status method.
