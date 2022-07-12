var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    return User;
}());
function mostrarMensaje(name) {
    return "hola " + name;
}
var message = mostrarMensaje("58");
var numero = 58;
var estado = false;
var array = ["uno", 15, true, 55];
function randomElem(array) {
    var indexElem = Math.floor(Math.random() * array.length);
    return array[indexElem];
}
var arrayString = ["manzana", "Pera", "Fresa"];
var arrayInt = [45, 85, 56, 86];

var elemStr = randomElem(arrayString);
var elemNum = randomElem(arrayInt);
console.log(array);
