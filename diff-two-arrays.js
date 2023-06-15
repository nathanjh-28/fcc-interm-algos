/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    const newArr = arr1.concat(arr2);
    newArr.sort()
    let result = [];
    console.log(newArr)
    for (let i = 0; i < newArr.length; i += 2) {
        console.log(newArr[i], newArr[i + 1])
        if (newArr[i] != newArr[i + 1]) {
            result.push(newArr[i]);
            i--;
        }
    }
    return result;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]))