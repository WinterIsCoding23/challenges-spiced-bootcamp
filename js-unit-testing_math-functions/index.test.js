import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

//tests add
test("add (2, 3)", () => {
    const result = add(2, 3); 
    expect(result).toBe(5);
});

test("add with negative return when greater argument negative", () => {
    const result = add(23, -56);
    expect(result).toBeLessThan(0);
});

test("add with return close to 0.3 with add(0.1, 0.2)", () => {
    const result = add(0.1, 0.2);
    expect(result).toBeCloseTo(0.3);
});


//tests subtract
test ("subtract returns 10 with subtract(15, 5)", () => {
    const result = subtract(15, 5);
    expect(result).toBe(10);
})

test("subtract with negative return when second argument greater", () => {
    const result = subtract(8, 250);
    expect(result).toBeLessThan(0);
});


//tests multiply
test("return 8 when input 2 and 4", () => {
    const result = multiply(2, 4);
    expect(result).toBe(8);
})

test("return negative value when first argument negative", () => {
    const result = multiply(-2, 5);
    expect(result).toBeLessThan(0);
})

test("returns a negative value if only the second argument is negative", () => {
    const result = multiply(2, -5);
    expect(result).toBeLessThan(0);
})

test("returns a positive value if called with two negative arguments", () => {
    const result = multiply(-2, -5);
    expect(result).toBeGreaterThan(0);
})


//tests divide
test("returns 3 if called with divide(9, 3)", () => {
    const result = divide(9, 3);
    expect(result).toBe(3);
})

test("returns message if called with 0 as second argument", () => {
    const result = divide(9, 0);
    expect(result).toBe("You should not do this!");
})



/*
Your tests should cover the following criteria (write one test case for each of them):

- `add()`

  - returns 5 if called with add(2, 3)
  - returns a negative value if the greater argument is negative (Hint: use the matcher `toBeLessThan()`)
  - returns a value close to 0.3 if called with add(0.1, 0.2) (Hint: use the matcher `toBeCloseTo()`)

- `subtract()`

  - returns 10 if called with subtract(15, 5)
  - returns a negative value if the second argument is greater than the first one (use `toBeLessThan()` again)

- `multiply()`

  - returns 8 if called with multiply(2, 4)
  - returns a negative value if only the first argument is negative
  - returns a negative value if only the second argument is negative
  - returns a positive value if called with two negative arguments

- `divide()`
  - returns 3 if called with divide(9, 3)
  - returns "You should not do this!" if called with 0 as second argument
  */