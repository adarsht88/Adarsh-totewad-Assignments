
class Person {
constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
}
}
var p = new Person("abc", "xyz");

console.log(eval(p.fullName() === "abc xyz"));
