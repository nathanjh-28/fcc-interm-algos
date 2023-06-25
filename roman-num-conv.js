function convertToRoman(num) {
    return num;
}

convertToRoman(36);

function one(num) {
    switch (num) {
        case num == 0: return 'X'
        case num == 5: return 'V'
        case num == 1: return 'I'
        case num == 2: return 'II'
        case num == 3: return 'III'
        case num == 4: return 'IV'
        case num == 6: return 'VI'
        case num == 7: return 'VII'
        case num == 8: return 'VIII'
        case num == 9: return 'IX'
    }
}

function two(num) {
    switch (num) {
        case num == 10: return 'X'
        case num == 50: return 'L'
        case num == 100: return 'C'
        case num == 20: return 'XX'
        case num == 30: return 'XXX'
        case num == 40: return 'XL'
        case num == 60: return 'LX'
        case num == 70: return 'LXX'
        case num == 80: return 'LXXX'
        case num == 90: return 'XC'
    }
}

function three(num) {
    switch (num) {
        case num == 100: return 'C'
        case num == 200: return 'CC'
        case num == 300: return 'CCC'
        case num == 400: return 'CD'
        case num == 500: return 'D'
        case num == 600: return 'DC'
        case num == 700: return 'DCC'
        case num == 800: return 'DCCC'
        case num == 900: return 'CM'
        case num == 1000: return ''

    }
}

