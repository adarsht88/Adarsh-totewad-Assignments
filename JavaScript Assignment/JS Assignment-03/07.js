
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = function () {
            return this.firstName + " " + this.lastName;
        }
    }
}

const jsonData = '{"firstName":"abc", "lastName":"xyz"}';
const x = JSON.parse(jsonData);

var p = new Person("abc", "xyz");
console.log(eval(p.fullName() === (x.firstName + " " + x.lastName)));
