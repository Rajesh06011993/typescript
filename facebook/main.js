var person = /** @class */ (function () {
    function person(name, email, pass, address, dob, phone, placelived, colleges, photoUrl, secondAddress) {
        var _this = this;
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.address = address;
        this.dob = dob;
        this.phone = phone;
        this.placelived = placelived;
        this.colleges = colleges;
        this.photoUrl = photoUrl;
        this.secondAddress = secondAddress;
        this.getEmail = function () {
            return (_this.email + " is the mail ID to which you contact");
        };
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.address = address;
        this.secondAddress = secondAddress;
        this.dob = dob;
        this.phone = phone;
        this.colleges = colleges;
        this.photoUrl = photoUrl;
        this.placelived = placelived;
    }
    person.prototype.getAge = function () {
        return "25 years old and born on " + this.dob;
    };
    return person;
}());
var dateOfBirth = new Date('December 17, 1995');
var rajesh = new person("rajesh", "raj.gmail.com", "pass", "image gardens", dateOfBirth, 22222, "Vijayawada", ["ban", "hyd"], "image.jpg");
console.log("Here is the simple object called Rajesh\n     Name: " + rajesh.name + "\n     Address: " + rajesh.address + "\n     Phone: " + rajesh.phone + "\n     Placelived: " + rajesh.placelived + "\n     College: " + rajesh.colleges + " ");
console.log("Use of functions " + rajesh.getEmail() + " and " + rajesh.getAge());
