// Return Min integer that is disvisble by 11
function smallestMultipleEleven(testArray) {
   var arrayLength = testArray.length;
   minimum = testArray[arrayLength - 1];
   //  Check divisibility by 11
   if (minimum % 11 == 0) {
      while (arrayLength--) {
         if (testArray[arrayLength] < minimum) {
            minimum = testArray[arrayLength]
         };
      }
      return minimum;
   };
};
var testArray = [-6, -91, 1011, -100, 84, -22, 0, 1, 473];
var input = smallestMultipleEleven(testArray);
console.log(input);
