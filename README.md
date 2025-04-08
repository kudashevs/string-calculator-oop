String Calculator kata (Object-Oriented implementation)
==========================

This is a repo with different object-oriented solutions of the String Calculator kata.

***Spoiler alert*** If you have never done this kata before, please try to solve it before looking at the solutions in the repo.
Otherwise, the kata won’t be interesting and beneficial.

The repo consists of a master branch and four different branches for each solution. All the branches stem from master
(they stem from the 4th step where the important design decision was made). These are the branches:
- [a single unit of work with state](../../tree/single-unit-with-state) ([a related article](https://kudashevs.com/posts/2025/04/string-calculator-kata-single-unit-with-state))
- [a single unit of work without state](../../tree/single-unit-no-state) ([a related article](https://kudashevs.com/posts/2025/04/string-calculator-kata-single-unit-no-state))
- [a bundle of entities](../../tree/collaboration-of-entities) ([a related article](https://kudashevs.com/posts/2025/04/string-calculator-kata-collaboration-of-entities))
- [a bundle of behavior](../../tree/collaboration-of-behavior) ([a related article](https://kudashevs.com/posts/2025/04/string-calculator-kata-collaboration-of-behavior))


## Kata's description

***Important note before you start***
* Try not to read ahead.
* Do one task at a time. The trick is to learn to work incrementally.
* Make sure you only test for correct inputs (there is no need to test for invalid inputs for this kata).

### Step 1
Create a simple string calculator with a method signature:
```
int Add(string numbers)
```

The method can take up to two numbers, separated by commas, and will return their sum.
For example `""` or `"1"` or `"1,2"` as inputs (for an empty string it will return 0). 

**Hints:**
* Start with the simplest test case of an empty string and move to one and two numbers
* Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
* Remember to refactor after each passing test

### Step 2
Allow the `Add()` method to handle an unknown amount of numbers.

### Step 3
Allow the `Add()` method to handle new lines between numbers (instead of commas).
1. the following input is ok: `"1\n2,3"` (will equal 6)
2. the following input is NOT ok: `"1,\n"` (not need to prove it - just clarifying)

### Step 4
Support different delimiters.
1. to change a delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\n[numbers…]"
for example `"//;\n1;2"` should return three where the default delimiter is `";"`.
2. the first line is optional. All existing scenarios should still be supported.

### Step 5
Calling `Add()` with a negative number will throw an exception `"negatives not allowed"` - and the negative that was passed. 
If there are multiple negatives, show all of them in the exception message.

***STOP HERE*** if you are a beginner. Continue if you can finish the steps so far in less than 30 minutes.

### Step 6
Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2.

### Step 7
Delimiters can be of any length with the following format: `"//[delimiter]\n"` for example: "//[***]\n1***2***3" should return 6.

### Step 8
Allow multiple delimiters like this: `"//[delim1][delim2]\n"` for example "//[*][%]\n1*2%3" should return 6.

### Step 9
Make sure you can also handle multiple delimiters with length longer than one char.

### Step 10 (optional)
Look at the code once again and reflect on the end result. Try to ask these questions:
* Why the code is structured in this way? What are the pros and cons of the implementation?
* Are you happy with the implementation? Which parts of the implementation you don't like?
* Does the code comply with the general programming principles (Separation of Concerns, DRY, KISS)?
* Does the code comply with the object-oriented principles (GRASP, SOLID, especially the SRP and OCP)?
* What happens if a new string format is required?
* What happens if the requirements changes in ... (business logic, extraction, validation, filtering)?
* Which parts of the implementation can be improved? How? Why this is an improvement?
* Use AI if you are up to.


## Credits

Credits to [Roy Osherove](http://osherove.com/tdd-kata-1) for the original idea.


## License

The MIT License (MIT). Please see the [License file](LICENSE.md) for more information.