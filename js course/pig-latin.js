/* Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

*/

function translatePigLatin(str) {

    const vowelRe = /^[aeiou]/
    const consRe = /^[^aeiou]*/

    if (vowelRe.test(str)) {
        return str.concat('way')
    }
    if (consRe.test(str)) {
        const preFix = str.match(consRe)
        //console.log(preFix[0])
        let fix = str.slice(preFix[0].length)
        //console.log(fix)
        return fix + preFix + 'ay'
    }

    return str;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("apple"))
