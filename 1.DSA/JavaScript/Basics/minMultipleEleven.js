/*  Given an array of A consisting odf N integers, 
    Return minimum integer which is a multiple of 11
*/

const smallestMultipleEleven = num => {
    let res = 0;
    let i = 1;
    let found = false;
    while (found === false) {
       res += num;
       while (res % i === 0 && i <= num) {
          if (i === num) {
             found = true;
          };
          i++;
       };
       i = 1;
    };
    return res;
 };
 console.log(smallestMultipleEleven(11));
 
//  console.log(smallestMultiple(4));
//  console.log(smallestMultiple(11));
//  console.log(smallestMultiple(15));