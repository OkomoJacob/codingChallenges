/*A function to multiply two or three numbers and print the output*/

multiply = function (num1, num2){
    return num1 * num2
}
console.log(multiply(23, 4));

/*Clever alternative using arrow function without return*/
product = (num3, num4) => num3 * num4
console.log(product(4, 7))