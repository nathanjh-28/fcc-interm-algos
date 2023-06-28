/*
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
*/

function telephoneCheck(str) {
    if (str[3] === '-' && str[7] === '-') return util(str)
    if (str[0] === '(' && str[4] === ')' && str[8] === '-') return util(str)
    if (str[0] === '(' && str[4] === ')' && str[5] === ' ' && str[9] === '-') return util(str)
    if (str[3] === ' ' && str[7] === ' ') return util(str)
    if (str.match(/\d/g) && str.length === 10) return true
    if (str[0] === '1' && str[1] === ' ' && str[5] === ' ' && str[9] === ' ') return util(str)
    if (str[0] === '1' && str[1] === ' ' && str[5] === '-' && str[9] === '-') return util(str)
    if (str[0] === '1' && str[1] === ' ' && str[2] === '(' && str[6] === ')' && str[7] === ' ' && str[11] === '-') return util(str)
    if (str[0] === '1' && str[1] === '(' && str[5] === ')' && str[9] === '-') return util(str)

    else return false
}

//console.log(telephoneCheck("1 555 555 5555"))
console.log(telephoneCheck("1 (555) 555-5555"))
console.log(telephoneCheck("1(555)555-5555"))
//console.log(util("555-555-5555"));

//util function that takes a string and verifies if it can be converted to a valide 10 digit number.
function util(str) {
    const re = /\d/g;
    const phoneNumStr = str.match(re);
    if (phoneNumStr[0] === '1') phoneNumStr.shift();
    if (phoneNumStr.length !== 10) return false
    else return true
}