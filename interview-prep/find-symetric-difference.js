/*
Find the Symmetric Difference
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
*/

// function sym(...args) {
//     if (args.length === 2) return sym2(args[0], args[1])
//     if (args.length === 3) return sym2(sym2(args[0], args[1]), args[2])


// }

// //console.log(sym([1, 2, 3], [5, 2, 1, 4]));
// console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
// //console.log(sym2([1, 2, 3], [5, 2, 1, 4]))

// function sym2(...args) {
//     const resultArr = []
//     const fullArr = args[0].concat(args[1]).sort()
//     for (let i = 0; i < fullArr.length; i += 2) {
//         if (fullArr[i] !== fullArr[i + 1]) {
//             resultArr.push(fullArr[i])
//             i--
//         }
//     }

//     return resultArr

// }

function sym() {
    // create argument array
    const args = [];
    for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    // utility function to combine arrays
    function symDiff(arr1, arr2) {
        const result = [];

        arr1.forEach(item => {
            if (arr2.indexOf(item) < 0 && result.indexOf(item) < 0) result.push(item);
        });

        arr2.forEach(item => {
            if (arr1.indexOf(item) < 0 && result.indexOf(item) < 0) result.push(item);
        })
        return result


    }

    // run utility function as callback for reduce method
    return args.reduce(symDiff)

}

console.log(sym([1, 2, 3], [5, 2, 1, 4]))