# Pet-Kennel-Shell
This is the repo for the CodeX Level 2 Week 4 assignment -  JavaScript Objects and Arrays Exercises.

## Day 1
### Objective
Create a pet object in JavaScript with properties and methods for playing, feeding, and checking status. Optionally, add a method to rename the pet and update its status. This assignment aims to enhance your understanding of JavaScript objects and methods by creating a simple pet object. You'll learn how to define properties, implement methods to interact with the object, and practice manipulating data within an object, reinforcing foundational object-oriented programming concepts.

### Files used
-index.js

### Bonus Features Implemented
-Added a rename() method that allows changing the pet’s name dynamically.
-Used template literals for cleaner output messages.
-Added detailed console messages for each interaction, showing updated happiness after every action.
-Commented code for clarity on object properties and method purposes.

### Testing
After entering everything in per the directions, I used CodeRunner for testing. For my final output I had:
-You played with Fluffy! Happiness is now 60.
-You fed Fluffy! Happiness is now 80.
-Your pet's new name is Sparky!

I did have what's listed below initially, but once I put the return on the same line as the message, the undefined was removed.
-Pet name: Fluffy, Species dog, Happiness: 50.
undefined
-Pet name: Fluffy, Species dog, Happiness: 60.
undefined
-Pet name: Fluffy, Species dog, Happiness: 80.
-Your pet's new name is Sparky!
Pet name: Sparky, Species dog, Happiness: 80.

### Key Concepts Learned
- Defining and manipulating object properties
- Creating and calling object methods
- Using the `this` keyword inside methods
- Returning vs. logging values
- Importance of keeping `return` and its value on the same line

## Day 2 - Follow-Up Assignment: Exploring Factory Functions with a Pet Example
### Objective:
Create a factory function in JavaScript to generate pet objects with properties and methods. Implement and test multiple pets, adding optional features like a rest method for extra credit. This assignment will help you understand and implement factory functions in JavaScript by creating a function that generates pet objects. You'll learn how to encapsulate object creation logic within a function and practice using factory functions to create multiple instances of pet objects.

NOTE: The trick to this is to put object creation inside a function the, RETURN THAT OBJECT with a return statement.

### Files used
-index-2.js

### Bonus Features Implemented
-Introduced the rest() method to fully restore a pet’s energy to 100.
-Added multiple pet instances using the factory function to simulate a small “pet family.”
-Implemented and tested both happiness and energy changes through method interactions.
-Included inline comments explaining how this binds each method to the correct pet object.

### Testing
Used Code Runner with VS Code for testing again, same as I did for Day 1. Output shown, including the bonus was:
Pet name: Blob, Species: Goat, Happiness: 50, Energy: 100.
Pet name: Sylvester, Species: Cat, Happiness: 50, Energy: 100.
Pet name: SpongeBob Square Pants, Species: Sponge, Happiness: 50, Energy: 100.
You played with Blob! Happiness is now 60, and energy is now 80.
Pet name: Blob, Species: Goat, Happiness: 60, Energy: 80.
You fed Sylvester! Happiness is now 70, and energy is now 120.
Pet name: Sylvester, Species: Cat, Happiness: 70, Energy: 120.
SpongeBob Square Pants has rested. Energy is now fully restored to 100.
Pet name: SpongeBob Square Pants, Species: Sponge, Happiness: 50, Energy: 100.

### Key Concepts Learned
- How to return objects from functions using the factory pattern
- The importance of nesting methods inside the returned object
- Understanding how `this` links methods to their own object’s data
- The difference between object properties (data) and methods (behavior)
- The benefit of `const` for variables that hold object references

### Notes
- Energy was not capped at 100, because the rubric didn’t require it. However, adding a simple if conditional could be used later to keep values realistic if needed.

## Day 3 - Assignment: Managing Your Pet Kennel with JavaScript Arrays
### Objective
Create pets using a factory function, add them to a "kennel" array using both push and bracket notation, and log the array. Optionally, add a rest method to increase happiness. This assignment will help you practice using arrays in JavaScript by creating and managing a collection of pet objects. You'll learn how to add items to an array using both the push method and bracket notation.

### Files Used
-index-3.js

### Bonus Features Implemented
- Added maxEnergy per pet to prevent energy from going above 100.
- Added checks to prevent energy from going below 0.
- Added a cuddles() method to simulate an extra game mechanic that increases happiness and energy.
- Used `forEach()` to call `rest()` on every pet in the kennel and then displayed the updated table.

### Testing
Used CodeRunner to do the testing in VS Code.
All methods and features were tested in sequence:
1. Displayed initial status for each pet.
2. Added pets to the kennel array using both methods.
3. Logged kennel contents with `console.table()`.
4. Tested `cuddles()`, `play()`, and `feed()` methods individually.
5. Used `forEach()` to make every pet rest and logged the updated kennel state.

### Challenges & Lessons Learned
One of the biggest challenges was understanding how to properly call methods on specific pets once they were inside the kennel array. I originally tried calling them like `kennel.pet1.play()` before realizing that `kennel` is an array, not an object with named keys. The correct approach is either to call the method on the variable itself (`pet1.play()`) or use array indexing (`kennel[0].play()`).

I also learned the difference between using `console.log()` and `console.table()`. `console.table()` is best for displaying multiple objects (like all pets in the kennel), while `console.log()` should be used when printing individual messages returned from methods.

## Day 4 - Assignment: Organizing and Feeding Pets in Multiple Kennels
### Objective:
Use factory functions to create pets, organize them into dog, cat, and fish kennels, then use for loops to feed each pet and display their updated happiness status. This assignment will help you practice organizing objects into different arrays and using a for loop to perform operations on each array.

### Files used
index-4.js

### Bonus Features
- Randomness: Added a helper function `getRandomInt(min, max)` that returns a random whole number in-range (inclusive).
  Used in both the `feed()` and `bored()` methods.
- Behavior variety: `bored()` simulates neglect by lowering happiness and energy values.
- Modern looping: Implemented `forEach()` loops for cleaner, modern syntax.

### Testing
Used CodeRunner to do the testing in VS Code, checking console logs for all three arrays.
Each pet showed unique happiness and energy values due to the random number generator.

To further verify my bonus work, I tested the `bored()` method on all the dogs.
Output confirmed that:
- Random losses between 5–30 were applied correctly.
- Happiness and energy decreased as expected.
- Status updates reflected the new values each time.

 ### Notes / Lessons Learned
- I used Google a lot to understand how `forEach()` worked compared to `for` loops, then convert examples to fit my kennel arrays.
- Also used Google to find a way to do the randomness as I thought I could do what we did in GameLab first for randomNumbers... but that was a big no!
- It really helps to have clear, descriptive array names! (I accidentally called my `fishTank` a `fishKennel` at one point — oopsie, kitty!)
- `forEach(pet => ...)` runs a function once for each pet in the array — no index number needed.
- The classic `for (let i = 0; i < arr.length; i++)` version does the same thing, but it’s wordier.
- Random integer refresher - `Math.floor(Math.random() * (max - min + 1)) + min -` => returns a whole number between min and max. Have to do the (max - min + 1) to make sure we're able to use the whole range identified, otherwise it uses what's within the identified range, not all of it as you would think it would.

### Future Improvement Idea
Rubric didn't call for this, but I could add logic in to keep the enrgy and the happiness going below 0 with the bored method.

## Day 5 - Follow-Up Assignment: Managing Pet Energy and Happiness
### Objective
Update your pet objects to manage both happiness and energy with play and feed methods. Use for loops to play with pets, feed only those with low energy, and log status updates. This assignment will reinforce your understanding of JavaScript loops and conditionals by having you manage the energy and happiness of pets through playing and feeding.
