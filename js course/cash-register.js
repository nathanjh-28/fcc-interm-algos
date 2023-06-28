/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

/**
 * 
 * Need to solve issue where js is not subtracting correctly.  I should break things down in to functions to repeat operations instead of copying and pasting all over the place.
 */


function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

function checkCashRegister(price, cash, cid) {
    // global variables changeSum is the amount we need to give to the person, and obj has the array of bills and coins
    let changeSum = cash - price;
    let drawerSum = 0;
    let obj = { status: "OPEN", change: [] }

    function handleChange(billUnit, idx, billStr) {
        // if there aren't any bills then we don't need to run this.
        if (cid[idx][1] !== 0) {
            drawerSum += cid[idx][1]

            // number of these bills or coins in their dollar amount format
            let dollarAmt = Math.floor(changeSum / billUnit) * billUnit
            // TEST 1
            //console.log('bill:',billUnit,'change sum:',changeSum, 'dollar amount:', dollarAmt, 'cash in drawer',cid[idx][1])
            // if there aren't enough of these bills then we should push the full amount of bills
            if (dollarAmt >= cid[idx][1]) {
                obj.change.push([billStr, cid[idx][1]])
                // update changeSum so that we can keep track of the bills that we have given
                changeSum = roundToTwo(changeSum - cid[idx][1])
            }
            // if there are too many bills we need to just push the amount that we need
            if (dollarAmt < cid[idx][1]) {
                obj.change.push([billStr, dollarAmt])
                // update changeSum so that we can keep track of the bills that we have given
                changeSum = roundToTwo(changeSum - dollarAmt)

            }
            //  TEST 2
            //console.log('bill:',billUnit,'change sum:',changeSum, 'dollar amount:', dollarAmt, obj.change)
        }
    }


    //    ONE HUNDRED
    if (changeSum !== 0 && changeSum / 100 >= 1) handleChange(100, 8, 'ONE HUNDRED')
    //    TWENTY
    if (changeSum !== 0 && changeSum / 20 >= 1) handleChange(20, 7, 'TWENTY')
    //    TEN
    if (changeSum !== 0 && changeSum / 10 >= 1) handleChange(10, 6, 'TEN')
    //    FIVE
    if (changeSum !== 0 && changeSum / 5 >= 1) handleChange(5, 5, 'FIVE')
    //    ONE
    if (changeSum !== 0 && changeSum / 1 >= 1) handleChange(1, 4, 'ONE')
    //    QUARTER
    if (changeSum !== 0 && changeSum / 0.25 >= 1) handleChange(0.25, 3, 'QUARTER')
    //    DIME
    if (changeSum !== 0 && changeSum / 0.1 >= 1) handleChange(0.1, 2, 'DIME')
    //    NICKEL
    if (changeSum !== 0 && changeSum / 0.05 >= 1) handleChange(0.05, 1, 'NICKEL')
    //    PENNY
    if (changeSum !== 0 && changeSum / 0.01 >= 1) handleChange(0.01, 0, 'PENNY')

    //console.log(cash-price, drawerSum)
    if (cash - price === drawerSum) return { status: "CLOSED", change: [...cid] };
    if (changeSum === 0) return obj;
    else return { status: "INSUFFICIENT_FUNDS", change: [] }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
console.log(1, checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); //{status: "OPEN", change: [["QUARTER", 0.5]]}
console.log(2, checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))// should return {status: "INSUFFICIENT_FUNDS", change: []})
