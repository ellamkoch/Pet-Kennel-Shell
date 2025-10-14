// pet object
const pet = {
    name: "Fluffy",
    species: "dog",
    happiness: 50, // don't need "" since this is a #. "" tells js that its a string.

    // initial status reading - must be nested so the function belongs to the object
     status() {
        console.log(`Pet name: ${this.name}, Species ${this.species}, Happiness: ${this.happiness}.`);
     },

    //method 1 - play
    play() {
        this.happiness += 10; // increases happiness by 10
        return `You played with ${this.name}! Happiness is now ${this.happiness}.`; // returns this msg with updated values
        },

    // method 2 feed
    feed() {
        this.happiness += 20; // increases happiness by 20
        return `You fed ${this.name}! Happiness is now ${this.happiness}.`; // returns this msg with updated values
        },

    // method 3 - updated status check
    status() {
        return `Pet name: ${this.name}, Species ${this.species}, Happiness: ${this.happiness}.`; // returns updated pet stats
    },
    // Bonus for Day 1
    rename(newName) {
        this.name = newName;
        return `Your pet's new name is ${this.name}!`;
    }
};

// Status checks
pet.status();

// after playing status check
console.log(pet.play()); // calls pet play method into the log to return the msg and increase happiness by 10
pet.status();

// after feeding status check-  calls pet feed method into the log to return the msg and increase happiness by 20
console.log(pet.feed());
pet.status();

// bonus for Day 1 to rename and show status again - calls method to rename the pet, names pet Sparky based on what is in () and returns the msg in the rename method
console.log(pet.rename("Sparky"));
pet.status(); // gives the last pet status with the new name
