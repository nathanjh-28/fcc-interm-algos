/*
Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

*/

const Person = function (firstAndLast) {
    this.getFullName = function () {
        return firstAndLast;
    }
    this.getFirstName = function () {
        return firstAndLast.split(' ')[0]
    }
    this.getLastName = function () {
        return firstAndLast.split(' ')[1]
    }
    this.setFirstName = function (first) {
        let tempArr = firstAndLast.split(' ')
        tempArr[0] = first
        firstAndLast = tempArr.join(' ')
    }
    this.setLastName = function (last) {
        let tempArr = firstAndLast.split(' ');
        tempArr[1] = last;
        firstAndLast = tempArr.join(' ')
    }
    this.setFullName = function (newFullName) {
        firstAndLast = newFullName;
    }

};

const bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
bob.setFirstName("Haskell")
console.log(Object.keys(bob).length)