const a = [1,2,3,4,5,6,7,8];

// task 1
// Find the minimum element of this array
// console.log(Math.min(...a));

// task 2
// Find the maximum element of this array
// console.log(Math.max(...a));

// task 3
// Find the index of the minimum element of this array
// console.log(a.indexOf(Math.min(...a)));

// task 4
// Find the index of the maximum element of this array
// console.log(a.indexOf(Math.max(...a)));

// task 5
// Calculate the sum of array's elements with odd indices
// let sum = 0;
// for(let i=0;i<a.length;i++){
//     if(i%2===0){
//         console.log(a[i]);
//         sum+=a[i];
//     }
// }
// console.log(`sum:${sum}`);

// task 6
// Reverse this array (array in reverse direction) - you have to create YOUR OWN function, which WILL NOT create any new array
// let reverse = (a) =>{
//     return a.reverse();
// }
// console.log(reverse(a));

// task 7
// Count the number of odd elements in the array
// let sum=0;
// for(let i=0; i<a.length;i++){
//     if(a[i]%2===0){
//         sum+=a[i];
//     }
// }
// console.log(sum);   

// task 8
// Swap the first and second half of the array, for example, for an array of 1234, the result is 3412, or for 12345 the result will be 45312.
let firstHalf=[];
let secondHalf=[];
let halfOfArray = (a,firstHalf) =>{
    for(i=0;i<a.length/2;i++){
        firstHalf.push(a[i]);
    }
}
halfOfArray(a,firstHalf);
a.reverse();
halfOfArray(a,secondHalf);
c.reverse();
console.log('secondHalf:',secondHalf);
console.log('firstHalf:',firstHalf);
let unionOfArrays = [...new Set([...secondHalf, ...firstHalf])];
console.log(`unionOfArrays:${unionOfArrays}`);
