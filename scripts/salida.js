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
console.log("Hello world");

// Types
var myString = "Hello world";
var myNumber = 56;
var myBool = true;
var myVarios = "hello"; // Varios tipos

// Arrays
var stringArray = ["", ""];
var numberArray = [1, 2, 3, 4];
var booleanArray = [true, false, true];
var anyArray = ["Hello", 25, false, 12.25, {}, []]; // Acepta cualquier tipo de datos

// Tuple tipo defindo para cada elemento
var strNumTuple;
strNumTuple = ["hello", 25];

// void, undefined, null
/* let myVoid : void = undefined;
let MyNull : null = null;
let myUndefined : undefined = undefined; */

// Funciones
function getSum(num1, num2) {
    return num1 + num2;
}

var mySum = function (num1, num2) {
    if (typeof num1 === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};

// ? => Opcional
function getName(firstName, lastName) {
    if (lastName === undefined) {
        return firstName;
    }
    return "".concat(firstName, " ").concat(lastName);
}
function myVoidFunction() {
}
;
function showTodo(todo) {
    console.log("".concat(todo.title, " - ").concat(todo.text));
}
var myTodo = { title: "East last", text: "string" };
showTodo(myTodo);


// Clases
var User = /** @class */ (function () {
    // Constructor
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log("".concat(this.name, " ").concat(this.email));
    };
    User.prototype.setMeAge = function (age) {
        this.age = age;
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.payInvoice = function () {
        console.log("".concat(this.name, " ").concat(this.email, " ").concat(this.age));
    };
    return User;
}());


// Objetos
var user = new User("Jhon", "@", 85);
user.register();
user.setMeAge(52);

// Herencia
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var gordo = new Member(5, "Juan", "@jul", 85);
gordo.payInvoice();
