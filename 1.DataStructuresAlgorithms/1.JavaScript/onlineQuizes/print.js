const arr = [3,5,8];
findSmallestMissing = (arr = []) => {
   let count = 1;
   if(!arr.length){
      return count;
   };
   while(arr.indexOf(count) == -1){
      count++;
   };
   return count;
};
console.log(findSmallestMissing(arr));