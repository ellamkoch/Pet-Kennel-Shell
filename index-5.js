// creating random integer function first so we can get the random energy set up next.
function getRandomInt(min, max) {
  min = Math.ceil(min); // rounds the minimum value up to the nearest whole #
  max = Math.floor(max); // rounds the max value down to the nearest whole #
  return Math.floor(Math.random() * (max - min + 1)) + min; // multiplying by (max - min + 1) scales the range, then adds the min to shift the start of the range. random gives you random #'s between the range that is set. In this case, the range is set in the method below for feed. .floor ensures that you're getting a whole # back and that it includes the max # possible based on the range set in the method below.
};

//createPet function - this has to be defined first before pets are created so js knows what to do when it runs those lines.
function createPet(name, species, energy = getRandomInt(0,50), happiness = 50) { // properties are in () - went for the bonus with the random intial energy. had to have the getRandomInt declared first, to make it work.
    return {
        name: name,
        species: species,
        energy: energy,
        happiness: happiness,

    //  initial status reading - methods must be nested so the functions belongs to the object
    status() {
        console.log (`Pet name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}.`);
    },

    // feed method
    feed() {
        const gain = getRandomInt(10,20); // uses random integer function to give back a # bewteen 10 and 20.
        this.happiness += gain; // increases happiness anywhere between 10-20
        this.energy += gain;// increases energy anywhere between 10-20
        return `You fed ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}`; //returns this msg and states the happiness, energy and pet names.

    },

    // play method
    play() {
        this.happiness += 10; // increases happiness by 10
        this.energy -= 15;// decreases energy by 15
        return `You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;// returns this msg with updated pet energy and happiness after play method is called.
        }
    };
}

// Empty Array to store pets
const kennel = [];

//Multiple Pets to push to arrays - must be idenfied after the empty array so they can be pushed to it.
// 5 dogs
const dog1 = createPet("Lucky", "Dog");
const dog2 = createPet("Rusty", "Dog");
const dog3 = createPet("Pudge", "Dog");
const dog4 = createPet("Stella", "Dog");
const dog5 = createPet("Jakie-Bear", "Dog");

// pushing the pets to the appropriate arrays - found a faster way to push them all instead of calling them individually.
kennel.push(dog1, dog2, dog3, dog4, dog5);

// Initial Status
kennel.forEach(pet => pet.status());

// playing with pets
kennel[0].play(); // Plays with the first pet
kennel[1].play(); // Plays with the 2nd pet
kennel[2].play(); // Plays with the second pet
kennel[4].play(); // Plays with the 5th pet
kennel[3].play(); // Plays with the 4th pet
kennel[0].play(); // Plays with the first pet again

// Status after playing
kennel.forEach(pet => pet.status());

// conditional feed pets with for loops
for (let i = 0; i < kennel.length; i++) { // 0 tells the looop to start w/ the first pet. length tells js to go through the loop as long as there are objects/pets left within the array. i++ means after each loop we add 1 so it moves forward to the next object/pet.
    let pet = kennel[i]; // grabs the current pet from the kennel/array and stores it in a temp variable called pet.
    // checks if energy is below 30
    if (pet.energy < 30) {
        pet.feed();  // calls the feed method for a pet that is in the array that is below 30 energy. 
         console.log(`You fed ${pet.name}! Happiness is now ${pet.happiness}, and energy is now ${pet.energy}.`);
    } else {
        console.log(`${pet.name} isn't hungry, so I didn't feed them for now. Will check again later.`);
    }; // used pet instead of this to call the pet variable within the array that we are adjusting. this is using dot notation. the second part, i.e. .name, is to target that particuarl property that belongs to that pet.
}

// Status after for loop goes, incase they were fed.
kennel.forEach(pet => pet.status());

