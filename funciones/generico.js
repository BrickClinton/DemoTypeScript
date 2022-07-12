// Retorna un elemento aleatorio del array
function randomElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var colors = ["Blue", "Violet", "Indigo", "Green"];
var numeros = [45, 48, 42, 63, 5];
var randomColor = randomElem(colors);
var randomNum = randomElem(numeros);
// Remover caracter
function removeChar(theString, theChart) {
    var theRegex = new RegExp(theChart, "gi");
    return theString.replace(theRegex, '');
}
function printName(theInput) {
    console.log("My name is ".concat(theInput.name));
}
var serena = {
    name: "serena williams",
    profession: "Tennis player"
};
printName(serena);
