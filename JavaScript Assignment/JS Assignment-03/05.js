
var p = {
    firstName: "abc",
    lastName: "xyz"
};

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


console.log(p.middleName);
p.middleName = "pqr";
console.log(p.middleName);

