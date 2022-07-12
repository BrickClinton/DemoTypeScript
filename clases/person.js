var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// persona
var Person = /** @class */ (function () {
    // Constructor
    function Person(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    // Getters and Setters
    Person.prototype.setFisrtname = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.getFirstname = function () {
        return this.firstName;
    };
    Person.prototype.setLastname = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.getLastname = function () {
        return this.lastName;
    };
    return Person;
}());

// Instancia
var person = new Person("Edurado", "Gonzoles", "edu@gmail.com");
console.log(person);
// Asignando datos
person.setFisrtname("Luis Miguel");
person.setLastname("Magallanes Perez");
// HERENCIA
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(firstName, lastName, email, account, password) {
        var _this = _super.call(this, firstName, lastName, email) || this;
        _this.account = account;
        _this.password = password;
        return _this;
    }
    User.prototype.getAccountUser = function () {
        return _super.prototype.getFirstname.call(this) + " " + _super.prototype.getLastname.call(this) + " " + "".concat(this.account, " ").concat(this.password);
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    return User;
}(Person));
var user = new User("Benito", "Martinez", "neb@gmail.com", "Admin", "856556Op+");
console.log(user);
