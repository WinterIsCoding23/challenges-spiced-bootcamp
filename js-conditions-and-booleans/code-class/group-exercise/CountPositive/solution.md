# Steps:

1. Declare a variable for the result as an empty array
2. Declare a variable for the quantity of positive numbers with an initial value of 0;
3. Declare a variable for the total of negative subtractions with an initial value of 0;
4. If the length of the input array is zero or if it's null, give back an empty result container.
5. Loop over the input array
6. If the element in the array is higher than zero, add a 1 to the variable for the positive number
7. If the element in the array is less than zero, add the negative number to the variable for the negative subtractions
8. Put both numbers into the result array, in the order declared
9. Return the result array

```js
let result;
let positiveNumbers = 0;
let negativeNumbers = 0;

if (inputArray.length === 0) {
    result = 0;
    return;
}

// Loop through InputArray and for each element:
if (element > 0) {
    positiveNumbers++;
} else {
    negativeNumbers += element;
}

// Other way to write the if statement.
element > 0 ? positiveNumbers++ : (negativeNumbers += element);

result = [positiveNumbers, negativeNumbers];
```
