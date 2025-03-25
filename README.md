String Calculator kata (Object-Oriented implementation)
==========================

This is an object-oriented implementation of the String Calculator kata.


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


## Credits

Credits to [Roy Osherove](http://osherove.com/tdd-kata-1) for the original idea.


## License

The MIT License (MIT). Please see the [License file](LICENSE.md) for more information.