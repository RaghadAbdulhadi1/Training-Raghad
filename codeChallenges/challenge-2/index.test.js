/**
 * The factorial of a number is the product of all the numbers from 1 to that number. For example,
 * factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.
 * The factorial of a positive number n is given by:
 * factorial of n (n!) = 1 * 2 * 3 * 4.....n
 * Write a function that, given a number, returns a factorial of the number
 */
 function factorial(number) {
    // TO DO
    if(number==1 || number==0){
        return 1;
    }
    return number * factorial(number-1)
  }
//   console.log(factorial(11))
//   describe("Tests", () => {
//     it("test factorial", () => {
//       expect(factorial(0)).toEqual(1);
//       expect(factorial(1)).toEqual(1);
//       expect(factorial(5)).toEqual(120);
//       expect(factorial(6)).toEqual(720);
//       expect(factorial(11)).toEqual(39916800);
//     });
//   });

// Time Complexity: O(logn)