/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.*/

function convertHTML(str) {
    const reg = /&|<|>|"|'/;
    const htmlKey = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    }



    return str
        .split('')
        .map(item => reg.test(item) ? htmlKey[item] : item).join('')
}

console.log(convertHTML("Dolce & Gabbana"));