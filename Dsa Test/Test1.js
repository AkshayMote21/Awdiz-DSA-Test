// Question 1:
// Write a JavaScript for loop that iterates from 0 to 10 and prints only the even numbers.
// for(var i = 0; i<=10; i++ ){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }


// Question 2:
// Write a JavaScript while loop that calculates the factorial of a given number.
// var i = 5;
// var j = 1;
// if(i == 0){
//     console.log(1);
// }
// else{
//     while(i>=1){
//         j = i*j;
//         i--;
//     }
//     console.log(j);
// }


// Question 3:
// Create a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers using a for loop.
// var array =[1,2,3,4,5,6] ;
// var sum = 0;
// function arraySum(array){
//     for(i = 0; i<array.length;i++){
//         sum = sum + array[i];
//     }
//     console.log(sum);
// }
// arraySum(array);


// Question 4:
// Write a JavaScript program that generates a Fibonacci sequence up to a certain number n, using a while loop.



// Question 5:
// Create a JavaScript function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 5 characters.
var array = ["Rohit","Virat","Rishabh","Jasprit","Ravindra","Rahul"];
function Length(array){
    for(i=0;i<array.length;i++){
        if(array[i].length >5){
           var array2 = console.log([array[i]]);
        }
    }
}
Length(array);


// Question 6:
// Write a JavaScript function that takes a number as input and returns true if it is a prime number, otherwise false.
// function primeNumber(number1){
//     if(number1 == 0 || number1 == 1){
//         console.log(`Given number  ${number1} is not a Prime Number`)
//     }
//     else if(number1 > 1){
//         for(var i=2;i<=number1-1;i++){
//             if(number1 % i == 0){
//                 var k = true;
//             }
//         }
//         if(k == true){
//             console.log(`Given number  ${number1} is not a Prime Number`);
//         }
//         else{
//             console.log(`Given number ${number1} is a Prime Number`);
//         }
//     }
//     else{
//         console.log(`Given number  ${number1} is not a Prime Number`);
//     }

// }
// primeNumber(7);

// Question 7:
// Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by both 3 and 5.
// var totalSum =0;
// for(i=1;i<=1000;i++){
//     if(i%3 ==0 && i%5 ==0){
//         // console.log(i);
//         totalSum = totalSum+i;
//     }
// }
// console.log(totalSum);


// Question 8:
// Write a JavaScript function that takes a string as input and returns the reverse of the string using a for loop.

// Question 9:
// Create a JavaScript program that generates a random password of a specified length, consisting of letters (both uppercase and lowercase) and numbers.

// Question 10:
// Write a JavaScript function that takes an array of numbers as input and returns the maximum difference between any two numbers in the array.