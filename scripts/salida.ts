console.log("Hello world")

// Types
var myString : string = "Hello world";
var myNumber : number = 56;
var myBool   : boolean = true;
var myVarios : any = "hello"; // Varios tipos


// Arrays
var stringArray : string[] = ["",""]; 
var numberArray : number[] = [1, 2, 3, 4];
var booleanArray: boolean[] = [true, false, true];
var anyArray    : any[] = ["Hello", 25, false, 12.25, {}, []]; // Acepta cualquier tipo de datos
var never       : never; // utilizado para funciones que nunca regresan nada (error o ciclo infinito)

// Array Genericos
var NumerosGenericos: Array<number> = [8, 45, 10, 15];

// Tuple tipo defindo para cada elemento
var strNumTuple : [string, number];
var intStrTuple : [number, string, number, boolean];

strNumTuple  = ["hello", 25];
intStrTuple = [15, "hellp", 25, true];


// Enum 
enum Animales {cat, lion, dog, cow, monkey}
enum Frutas {fresa = 1, manzana, pera = 8} // estableciendo indices
let c: Animales = Animales.cat;

console.log(Animales[3])
console.log(Animales.monkey)

// void, undefined, null
/* let myVoid : void = undefined;
let MyNull : null = null;
let myUndefined : undefined = undefined; */

// Funciones
function stuck():never{
  while (true){
    
  }
}

function getSum(num1: number, num2: number): number{
  return num1 + num2;
}

let mySum = function(num1: number | string, num2: number | string): number{
  if(typeof num1 === 'string'){
    num1 = parseInt(num1);
  }
  
  if(typeof num2 === 'string'){
    num2 = parseInt(num2);
  }

  return num1 + num2;
}

// ? => Opcional
function getName(firstName: string, lastName?: string): string{
  if(lastName === undefined){
    return firstName;
  }
  return `${firstName} ${lastName}`
}


function myVoidFunction(): void{

}

// Interfaces
interface iTodo {
  title: string; 
  text: string;
  email?: string;
  casado?: boolean;
  readonly edad: number;
};

interface Libro{
  title: string,
  text: string,
  year: string,
  autor?: string,
  readonly [cadenas: string]: any,
  [numeros: number]: any,
}

function showTodo(todo: iTodo){
  console.log(`${todo.title} - ${todo.text}`)
}

let myLibro: Libro = {  
  title: "Titulo",
  text: "texto",
  year: "2022",
  pais: "Peru",
  depart: "Ica",
  num: 85,
  oll: "sdkd"
};


let myTodo: iTodo = {title: "East last", text: "string", casado: true, edad: 85};


showTodo(myTodo)


// Clases
class User {
  // Atributos
  private name: string;
  private email: string;
  private age: number;

  // Constructor
  constructor(name, email, age){
    this.name = name;
    this.email = email;
    this.age = age;
  }

  public register(){
    console.log(`${this.name} ${this.email}`);
  }

  public setMeAge(age){
    this.age = age;
  }

  public showMeAge(){
    return this.age;
  }

  public payInvoice(){
    console.log(`${this.name} ${this.email} ${this.age}`)
  }
}

// Objetos
var user = new User("Jhon", "@", 85);

user.register();
user.setMeAge(52);


// Herencia
class Member extends User{
  private id: number;
  
  constructor(id, name, email, age){
    super(name, email, age);
    this.id = id;
  }

  public payInvoice(){
    super.payInvoice();
  }
  
}


var gordo = new Member(5, "Juan", "@jul", 85);
gordo.payInvoice();