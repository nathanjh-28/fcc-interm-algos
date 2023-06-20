/*

Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.


*/

function fearNotLetter(str) {
    const arr = str.split('')
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        temp = arr[i].charCodeAt(0) + 1
        if (temp !== arr[i + 1].charCodeAt(0)) return String.fromCharCode(temp);
    }
    return undefined;
}

console.log(fearNotLetter('abcef'))