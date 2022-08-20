/** 
 * This is a demo task.

Write a function:
function solution(A); That, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1.
Write an efficient algorithm for the following assumptions:
N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

/** Algorithm Starts Here */
const givenArray = [1, 3, 6, 4, 1, 2];
printSmallestPositiveMissing = (givenArray = []) => {
    // write your code in JavaScript (Node.js 8.9.4)
   let defaultValue = 1;
   // Return 1 (Smallest Postive) if givenArray is Empty
   if(!givenArray.length){
      return defaultValue;
   };
   // Iterate 
   while(givenArray.indexOf(defaultValue) !== -1){
      defaultValue++;
   };
   return defaultValue;
};
console.log(printSmallestPositiveMissing(givenArray));