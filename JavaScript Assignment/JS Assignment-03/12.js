
function person(fname, lname, age, skills, dateofbirth, address, married, profession) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.skills = skills;
    this.dateofbirth = dateofbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}

amitabh = new person("amitabh", "bachan", 22, ["c"], "24/10/1996", { city: "hyderabad", pincode: "521185" }, "false", "sr analyst");
abhisheik = new person("abhisheik", 21, "HTML", "08/06/1997", "false", "jr analyst");
// creating object
var abhisheik = Object.create(amitabh);

print = function () {
    console.log(amitabh);
    console.log(abhisheik.lname);
    console.log(abhisheik.address);
}();
