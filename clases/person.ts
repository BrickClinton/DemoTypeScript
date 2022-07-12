
// persona
class Person {
  // Atributos
  private firstName: string;
  private lastName: string;
  private address: string;
  protected email: string;
  private phone: string;

  // Constructor
  constructor(firstName: string, lastName: string, email: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  // Getters and Setters
  public setFisrtname(firstName: string): void {
    this.firstName = firstName;
  }

  public getFirstname(): string{
    return this.firstName;
  }

  public setLastname(lastName: string): void {
    this.lastName = lastName;
  }

  public getLastname(): string {
    return this.lastName;
  }
}

// Instancia
var person = new Person("Edurado", "Gonzoles", "edu@gmail.com");
console.log(person);

// Asignando datos
person.setFisrtname("Luis Miguel");
person.setLastname("Magallanes Perez");


// HERENCIA
class User extends Person {
  private account: string;
  private password: string;

  constructor(firstName: string, lastName: string, email: string, account: string, password: string){
    super(firstName, lastName, email);
    this.account = account;
    this.password = password;
  }

  public getAccountUser(): string{
    return super.getFirstname() + " " + super.getLastname() + " " + `${this.account} ${this.password}`;
  }

  public setEmail(email: string): void{
    this.email = email;
  }
}

var user = new User("Benito", "Martinez", "neb@gmail.com", "Admin", "856556Op+");
console.log(user)