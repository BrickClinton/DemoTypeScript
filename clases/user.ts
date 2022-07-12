class User{
  private name: string;
  private email: string;
  private password: string;

  constructor(name: string, email: string, password: string){
    this.name = name;
    this.email = email;
    this.password = password;
  }

  public getEmail(){
    return this.email;
  }

  public getPassword(){
    return this.password;
  }
}


function mostrarMensaje(name: string): string{
  return "hola " + name;
}



var message: string = mostrarMensaje("58");
var numero: number = 58;
var estado: boolean = false;
var array: any[] = ["uno", 15, true, 55];


function randomElem<T>(array: T[]): T{
  let indexElem = Math.floor(Math.random() * array.length);
  return array[indexElem];
}

var arrayString: string[] = ["manzana", "Pera", "Fresa"];
var arrayInt : number[] = [45, 85, 56, 86];
var arrayBool : boolean[] = [true, false, true, false];

var elemStr: string = randomElem(arrayString);
var elemNum: number = randomElem(arrayInt);
var elemBol: boolean = randomElem(arrayBool);

console.log(array)


