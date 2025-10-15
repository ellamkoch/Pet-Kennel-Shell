// for the randomness for the bonus - has to be declared above the factory so it works inside it.
function getRandomInt(min, max) {
  min = Math.ceil(min); // rounds the minimum value up to the nearest whole #
  max = Math.floor(max); // rounds the max value down to the nearest whole #
  return Math.floor(Math.random() * (max - min + 1)) + min; // multiplying by (max - min + 1) scales the range, then adds the min to shift the start of the range. random gives you random #'s between the range that is set. In this case, the range is set in the method below for feed. .floor ensures that you're getting a whole # back and that it includes the max # possible based on the range set in the method below.
}

//createPet function - this has to be defined first before pets are created so js knows what to do when it runs those lines.
function createPet(name, species, energy = 80, happiness = 50) { // properties are in ()
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

     // bored method - for bonus
    bored() {
        const loss = getRandomInt(5,30); // uses random integer function to give back a # between 5 and 30 when method is called
        this.energy -= loss; /// decreases energy anywhere between 5-30
        this.happiness -= loss; //decreases happiness anywhere between 5-30
        return `${this.name} is bored because you haven't played with them. Play with them soon before they destroy something! Happiness is now down to ${this.happiness}, and energy is now ${this.energy}.`;
        }
    };
}

// Empty Array to store pets
const dogKennel = [];
const catKennel = [];
const fishTank = [];

//Multiple Pets to push to arrays
// 5 cats
const cat1 = createPet("Sylvester", "Cat", 40);
const cat2 = createPet("Snarf", "Cat", 45);
const cat3 = createPet("Snowball", "Cat", 65);
const cat4 = createPet("Smoke", "Cat", 73);
const cat5 = createPet("Sneak", "Cat", 82);

// 5 dogs
const dog1 = createPet("Lucky", "Dog", 73);
const dog2 = createPet("Rusty", "Dog", 83);
const dog3 = createPet("Pudge", "Dog", 68);
const dog4 = createPet("Stella", "Dog", 75);
const dog5 = createPet("Jakie-Bear", "Dog", 70);

// 5 fish
const fish1 = createPet("Blob", "Fish", 50);
const fish2 = createPet("SpongeBob Square Pants", "Fish", 35);
const fish3 = createPet("Goliath", "Fish", 18);
const fish4 = createPet("Jack", "Fish", 36);
const fish5 = createPet("Fins", "Fish", 42);

// pushing the pets to the appropriate arrays - found a faster way to push them all instead of calling them individually.
catKennel.push(cat1, cat2, cat3, cat4, cat5);
dogKennel.push(dog1, dog2, dog3, dog4, dog5);
fishTank.push(fish1, fish2, fish3, fish4, fish5);

// for loops for step 3, but with the bonus forEach
// commented out the for loops but kept them here to remind myself how this works.
// for (let i = 0; i < dogKennel.length; i++) {
//  Loops through this kennel, feed each pet, and show the feeding message.
// }

// for (let i = 0; i < catKennel.length; i++) {

// }

// for (let i = 0; i < fishTank.length; i++) {

// }

catKennel.forEach(pet => { // pet is simply what we're calling the parameters in this. the forEach loops through each piece within the array catKennel.
    console.log(pet.feed()); // it then calls the feed method in console.log and returns the updated msg for the objects within the array in the console.
    pet.status(); //gives us an updated status for the pets in this array
});

dogKennel.forEach(pet => { // pet is simply what we're calling the parameters in this. the forEach loops through each piece within the array dogKennel.
  console.log(pet.feed());  // it then calls the feed method in console.log and returns the updated msg for the objects within the array in the console.
  console.log(pet.bored()); // testing the bored method, but only on the dogs. 
  pet.status();  //gives us an updated status for the pets in this array
});

fishTank.forEach(pet => { // pet is simply what we're calling the parameters in this. the forEach loops through each piece within the array fishTank.
  console.log(pet.feed()); // it then calls the feed method in console.log and returns the updated msg for the objects within the array in the console.
  pet.status(); //gives us an updated status for the pets in this array
});
