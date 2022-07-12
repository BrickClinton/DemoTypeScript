// Creando objeto
var person = {
    firstName: "Juan",
    lastName: "Sanchez",
    age: 56,
    email: "juan@hotmail.com",
    address: "Av richard 256",
    department: "ica",
    province: "Chincha",
    district: "Alto laran"
};
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
];
// Eliminando el distrito
delete person.district;
console.log(person);
