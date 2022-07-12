
// Retorna un elemento aleatorio del array
function randomElem<T> (theArray: T[]): T{
  let randomIndex = Math.floor(Math.random() * theArray.length);
  return theArray[randomIndex];
}

let colors: string[] = ["Blue", "Violet", "Indigo", "Green"];
let numeros: number[] = [45, 48, 42, 63, 5];

let randomColor: string = randomElem(colors);
let randomNum: number = randomElem(numeros);

// Remover caracter
function removeChar(theString: string, theChart: string): string{
  let theRegex = new RegExp(theChart, "gi");
  return theString.replace(theRegex, '');
}

// Remover numero (no se puede usar un método que no sea generica dentro)
/* function removeIt<T>(theInput: T, theIt: string): T{ 
  let theRegex = new RegExp(theIt, "gi");
  return theInput.replace(theRegex, ''); // Error
} */

// SOLUCIÓN

// Herencia de interfaces
interface IPeople{
  name: string
}

interface IFamily{
  name: string,
  age: number,
  relation: string
}

interface ICelebrity extends IPeople{
  profession: string
}

function printName<T extends IPeople>(theInput: T): void{
  console.log(`My name is ${theInput.name}`)
}

let serena: ICelebrity = {
  name: "serena williams",
  profession: "Tennis player"
}

printName(serena)