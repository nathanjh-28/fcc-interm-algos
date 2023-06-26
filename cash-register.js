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


function checkCashRegister(price, cash, cid) {
    let changeSum = cash - price;
    let obj = { status: "OPEN", change: [] };
    let cidCopy = [...cid];

    //.    ONE HUNDRED
    if (changeSum !== 0 && changeSum / 100 >= 1) {
        // condition if there are bills left over in the cash drawer afterwards and return just the amount needed to make change.
        // how many bills do I need?
        // Math.floor(changeSum / 100)*100
        // how many bills do I have?
        //.   cid[8][1]
        // If I don't have enough bills how do I print only the number of bills that I have
        // If I have too many bills how do I print only the bills that I need
        if (Math.floor(changeSum / 100) * 100 > cid[8][1]) obj.change.push(["ONE HUNDRED", cid[8][1]])
        if (Math.floor(changeSum / 100) * 100 < cid[8][1]) obj.change.push(["ONE HUNDRED", Math.floor(changeSum / 100) * 100])
        //cidCopy[8][1] -= cidCopy[8][1] - changeSum
        changeSum -= Math.floor(changeSum / 100) * 100
    }
    //.    TWENTY
    if (changeSum !== 0 && changeSum / 20 >= 1) {
        if (Math.floor(changeSum / 20) * 20 > cid[7][1]) obj.change.push(["TWENTY", cid[7][1]])
        if (Math.floor(changeSum / 20) * 20 < cid[7][1]) obj.change.push(["TWENTY", Math.floor(changeSum / 20) * 20])
        //cidCopy[7][1] -= cidCopy[7][1] - changeSum
        changeSum -= Math.floor(changeSum / 20) * 20
        console.log(changeSum, Math.floor(changeSum / 20) * 20)
    }
    //.    TEN
    if (changeSum !== 0 && changeSum / 10 >= 1) {
        if (Math.floor(changeSum / 10) * 10 > cid[6][1]) obj.change.push(["TEN", cid[6][1]])
        if (Math.floor(changeSum / 10) * 10 < cid[6][1]) obj.change.push(["TEN", Math.floor(changeSum / 10) * 10])
        //cidCopy[6][1] -= cidCopy[6][1] - changeSum
        changeSum -= Math.floor(changeSum / 10) * 10
    }
    //.    FIVE
    if (changeSum !== 0 && changeSum / 5 >= 1) {
        if (Math.floor(changeSum / 5) * 5 > cid[5][1]) obj.change.push(["FIVE", cid[5][1]])
        if (Math.floor(changeSum / 5) * 5 < cid[5][1]) obj.change.push(["FIVE", Math.floor(changeSum / 5) * 5])
        //cidCopy[5][1] -= cidCopy[5][1] - changeSum
        changeSum -= Math.floor(changeSum / 5) * 5
    }
    //.    ONE
    if (changeSum !== 0 && changeSum / 1 >= 1) {
        if (Math.floor(changeSum / 1) * 1 > cid[4][1]) obj.change.push(["ONE", cid[4][1]])
        if (Math.floor(changeSum / 1) * 1 < cid[4][1]) obj.change.push(["ONE", Math.floor(changeSum / 1) * 1])
        //cidCopy[4][1] -= cidCopy[4][1] - changeSum
        changeSum -= Math.floor(changeSum / 1) * 1
    }
    //.    QUARTER
    if (changeSum !== 0 && changeSum / 0.25 >= 1) {
        if (Math.floor(changeSum / 0.25) * 0.25 > cid[3][1]) obj.change.push(["QUARTER", cid[3][1]])
        if (Math.floor(changeSum / 0.25) * 0.25 < cid[3][1]) obj.change.push(["QUARTER", Math.floor(changeSum / 0.25) * 0.25])
        //cidCopy[3][1] -= cidCopy[3][1] - changeSum
        changeSum -= Math.floor(changeSum / 0.25) * 0.25
    }
    //.    DIME
    if (changeSum !== 0 && changeSum / 0.1 >= 0) {
        if (Math.floor(changeSum / 0.1) * 0.1 > cid[2][1]) obj.change.push(["DIME", cid[2][1]])
        if (Math.floor(changeSum / 0.1) * 0.1 < cid[2][1]) obj.change.push(["DIME", Math.floor(changeSum / 0.1) * 0.1])
        //cidCopy[2][1] -= cidCopy[2][1] - changeSum
        changeSum -= Math.floor(changeSum / .1) * .1
    }
    //.    NICKEL
    if (changeSum !== 0 && changeSum / 0.05 >= 0) {
        if (Math.floor(changeSum / 0.05) * 0.05 > cid[1][1]) obj.change.push(["NICKEL", cid[1][1]])
        if (Math.floor(changeSum / 0.05) * 0.05 < cid[1][1]) obj.change.push(["NICKEL", Math.floor(changeSum / 0.05) * 0.05])
        //cidCopy[1][1] -= cidCopy[1][1] - changeSum
        changeSum -= Math.floor(changeSum / 0.05) * 0.05
    }
    //.    PENNY
    if (changeSum !== 0 && changeSum / 0.01 >= 0) {
        if (Math.floor(changeSum / 0.01) * 0.01 > cid[0][1]) obj.change.push(["PENNY", cid[0][1]])
        if (Math.floor(changeSum / 0.01) * 0.01 < cid[0][1]) obj.change.push(["PENNY", Math.floor(changeSum / 0.01) * 0.01])
        //cidCopy[0][1] -= cidCopy[0][1] - changeSum
        changeSum -= Math.floor(changeSum / .01) * .01
    }


    //if (changeSum > 0) obj = {status: "INSUFFICIENT_FUNDS", change: []}
    //work on case where its exact change
    //if(changeSum === 0) obj = {status:"CLOSED", change:cid };
    return obj;
}

//console.log(checkCashRegister(100, 200, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

//console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// should return {status: "OPEN", change: [["QUARTER", 0.5]]})

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

/*
 
4.25 in quarters
.5 in change
 
 
*/