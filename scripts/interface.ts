interface iShape {
  name: string;
  width: number;
  height: number;
  color?: string;
}

// Con indice de firmas
interface lakes {
  name: string,
  area: number,
  length: number,
  depth: number,
  isFreshwater: boolean,
  countries: string[],
  frozen?: string[],
  [extraProp: string]: any // Cualquier número de propiedades de diferentes objetos
}

function area(shape: iShape){
  var area = shape.width * shape.height;
  return "I'm " + shape.name + " width area " + area + " cm squared";
}

console.log(area({name: "rectangulo", width: 30, height: 15}))
console.log(area({name: "rectangulo", width: 30, height: 25, color: "blue"}))

// Propiedades de solo lectura
interface Enemy {
  readonly size: number,
  health: number,
  range: number,
  readonly damage: number
}

let tank: Enemy = {
  size: 50,
  health: 100,
  range: 60,
  damage: 12
}

// This is okay
tank.health = 95;

// Error because
//tank.damage = 10; // solo lectura

// Funciones e interfaces
interface EnemyHit{
  (name: Enemy, damageDone: number): number;
}

let tankHit: EnemyHit = function(tankName: Enemy, damageDone: number){
  tankName.health -= damageDone;
  return tankName.health;
}


// CLASES
class Person {
  private name: string;
  protected age: number;

  // Evitar instanciar esta clase
  protected constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  introduceSelf(){
    console.log("Hi, I am " + this.name + "!");
  }
}

// Herencia
class Friend extends Person{
  yearsknown: number;

  constructor(name: string, age: number, yearsKnown: number){
    super(name, age);
    this.yearsknown = yearsKnown;
  }

  timeKnown(){
    console.log("We have been friends for " + this.yearsknown + " years");
  }

  friendSience(){
    let firstAge = this.age - this.yearsknown;
    console.log(`we have been friends since I was ${firstAge} years old`);
  }
}

let friendA = new Friend("William", 19, 8);


// Imprime
friendA.friendSience();


// SIN GENERICOS
function randomElem(theArray: any[]): any{
  let randomIndex = Math.floor(Math.random() * theArray.length);
  return theArray[randomIndex];
}

let positions = [15, 45, 12, 75];
let randomPosition = randomElem(positions);

let colors = ['violet', 'indigo', 'blue', 'green'];
let randomColor = randomElem(colors);

// CON GENERICOS => function randomElem<T extends Interface>(){}
function randomElem<T>(theArray: T[]): T{
  let randomIndex = Math.floor(Math.random() * theArray.length);
  return theArray[randomIndex];
}

let datosColor: string = randomElem(colors);
let datosPosition: number = randomElem(positions);
