# Pet-Kennel-Shell
This is the repo for the CodeX Level 2 Week 4 assignment -  JavaScript Objects and Arrays Exercises.

## Day 1
### Objective
This assignment aims to enhance your understanding of JavaScript objects and methods by creating a simple pet object. You'll learn how to define properties, implement methods to interact with the object, and practice manipulating data within an object, reinforcing foundational object-oriented programming concepts.

### Files used
-index.js

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
This assignment will help you understand and implement factory functions in JavaScript by creating a function that generates pet objects. You'll learn how to encapsulate object creation logic within a function and practice using factory functions to create multiple instances of pet objects.

NOTE: The trick to this is to put object creation inside a function the, RETURN THAT OBJECT with a return statement.

### Files used
-index-2.js

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
