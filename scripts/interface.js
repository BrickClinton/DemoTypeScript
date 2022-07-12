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
function area(shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " width area " + area + " cm squared";
}
console.log(area({ name: "rectangulo", width: 30, height: 15 }));
console.log(area({ name: "rectangulo", width: 30, height: 25, color: "blue" }));
var tank = {
    size: 50,
    health: 100,
    range: 60,
    damage: 12
};
// This is okay
tank.health = 95;
var tankHit = function (tankName, damageDone) {
    tankName.health -= damageDone;
    return tankName.health;
};
// CLASES
var Person = /** @class */ (function () {
    // Evitar instanciar esta clase
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduceSelf = function () {
        console.log("Hi, I am " + this.name + "!");
    };
    return Person;
}());
// Herencia
var Friend = /** @class */ (function (_super) {
    __extends(Friend, _super);
    function Friend(name, age, yearsKnown) {
        var _this = _super.call(this, name, age) || this;
        _this.yearsknown = yearsKnown;
        return _this;
    }
    Friend.prototype.timeKnown = function () {
        console.log("We have been friends for " + this.yearsknown + " years");
    };
    Friend.prototype.friendSience = function () {
        var firstAge = this.age - this.yearsknown;
        console.log("we have been friends since I was ".concat(firstAge, " years old"));
    };
    return Friend;
}(Person));
var friendA = new Friend("William", 19, 8);
// Imprime
friendA.friendSience();
// SIN GENERICOS
function randomElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var positions = [15, 45, 12, 75];
var randomPosition = randomElem(positions);
var colors = ['violet', 'indigo', 'blue', 'green'];
var randomColor = randomElem(colors);
// CON GENERICOS => function randomElem<T extends Interface>(){}
function randomElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var datosColor = randomElem(colors);
var datosPosition = randomElem(positions);
