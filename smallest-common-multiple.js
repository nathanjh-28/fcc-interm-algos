/* 
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

*/

function smallestCommons(arr) {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    //console.log(min,max)
    const newArr = [];
    for (let i = min; i <= max; i++) {
        newArr.push(i)
        //console.log(newArr)
    }
    const maxLength = newArr.reduce((a, b) => a * b)
    let temp;
    let validator = 0;
    for (let i = 1; i < maxLength; i++) {
        temp = i * max;
        validator = 0;
        for (let j = 0; j < newArr.length; j++) {
            if (temp % newArr[j] === 0) validator++
            if (validator === newArr.length) return temp
        }
    }




    //return newArr;
}

//console.log(smallestCommons([1,5]));
//console.log(smallestCommons([2,10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));