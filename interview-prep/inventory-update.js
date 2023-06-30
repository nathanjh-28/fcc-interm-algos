/*
Inventory Update
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
*/

function updateInventory(arr1, arr2) {
    let found = false;
    for (let i = 0; i < arr2.length; i++) {
        found = false;
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i][1] === arr1[j][1]) {
                arr1[j][0] += arr2[i][0];
                found = true;
            }

        }
        if (!found) arr1.push(arr2[i])
    }

    return arr1.sort((a, b) => a[1].localeCompare(b[1]));
}