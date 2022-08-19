// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

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
