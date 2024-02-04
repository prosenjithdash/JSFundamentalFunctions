// Sum of Array elements

const array = [10, 30, 50, 80, 100];
let sum1 = 0;
console.log(array.length);

for (s1 of array) {
    sum1 = sum1 + s1;
}

console.log(array)
console.log(sum1)

// Sum array functions

function sum(sumarray) {
    console.log(sumarray)
    let sum  = 0;
    for (const s of sumarray) {
        console.log(s)
        sum = sum + s;
    }
    console.log(sum)
}
const array1 = [50, 33, 23];
const result = sum(array1);

