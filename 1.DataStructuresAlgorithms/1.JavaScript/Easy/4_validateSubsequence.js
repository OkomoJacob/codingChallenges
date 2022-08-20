/*Given two non-empty array of integers, write a function to determine whether the 
second array is a subsequent of the first one

A subsequence of an array is a set of numbers that aren't necessarily adjuscent but are 
in the same order as they appear in an array.

E.g [1, 4, 6] are a subsequnce of the array [2, 1, 7, 4, 6] and so do the numbers [2, 7].
NB: A single number in the array and the array itself are both valid subsequences of the array

Sample Input
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

Sample Output
true
*/

/*Solution
1. Keep track of one pointer in the sequence array
2. Iterate through the main array
3. Check if the index in the sequence is matching
4. If false then move the pointer in the sequence to the right untill we reach the end of the sequence
5. If we reach the end of the array without reaching the end of the sequnce, then return false.
*/

array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

function isValidSubsequence(array, sequence){
    let sequenceIdx = 0;
    // Iterate through all numbers in the main array
    for (const number of array){
        if (number == sequence[sequenceIdx]){
            sequenceIdx++;
        }
        // If end of sequence return true 
        if (sequenceIdx === sequence.length) return true;
    }
    return false;
}
console.log(isValidSubsequence(array, sequence));

/*
    Optimal Space & Time complexity
    O(n) Time | 0(1) Space- Where n is the length of the array
*/