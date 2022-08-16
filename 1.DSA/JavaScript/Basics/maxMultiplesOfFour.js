function maxDivibleByFour(testArr) {
    // write your code in JavaScript (Node.js 8.9.4)
var max = testArr[0];
/* if(givenArray.indexOf(givenArray) %4 !== 0 ){
//     return;
// }; */
for (let num = 1; num < testArr.length; num++) {
    if (testArr[num] > max) {
        max = testArr[num];
    }
}
return max;
}

console.log(maxDivibleByFour([-6, -91, 1011, -100, 84, -22, 0, 1, 473]));