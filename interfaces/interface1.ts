
// Atributos de personas
interface IPerson {
  firstName: string,
  lastName: string,
  age: number,
  visit?: string[],
  readonly email?: string,   // de solo lectura y Opcional (?)
  phone?: string,           // Opcional (?)
  [otros: string]: any      // Más propiedades opcionales(String)
}

// Creando objeto
var person: IPerson = {
  firstName: "Juan",
  lastName: "Sanchez",
  age: 56,
  email: "juan@hotmail.com",
  address: "Av richard 256",
  department: "ica",
  province: "Chincha",
  district: "Alto laran"
}


// Actualizando valores
person.firstName = "Hugo Ismael";

// Intentando actualizar email (solo lectura) => ERROR
//person.email = "Hugo@gmail.com";

// Datos alternativos
person.address = "El callao";
person.phone = "95652566";
person.visit = [
  "Alemania",
  "paris",
  "Suiza"
]

// Eliminando el distrito
delete person.district;

console.log(person)


// HERENCIAS
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
