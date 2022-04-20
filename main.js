const Pizzas = [
	{id: 1,
	nombre: 'Muzarella',
	ingredientes: ['masa','salsa','muzzarella','oregano'],
	precio: 800,},

	{id: 2,
	nombre: 'Napolitana',
	ingredientes: ['masa','salsa','muzzarella','tomate','ajo'],
	precio: 950,},

	{id: 3,
	nombre: 'Jamon y Morron',
	ingredientes: ['masa','salsa','muzzarella','jamon','morron'],
	precio: 1100,},

	{id: 4,
	nombre: 'Huevo',
	ingredientes: ['masa','salsa','muzzarella','huevo picado'],
	precio: 900,},

	{id: 5,
	nombre: 'Cancha',
	ingredientes: ['masa','muzzarella'],
	precio: 550,}
]

/*Pizzas con id Impar*/
const idImpar = Pizzas.filter(Pizzas => Pizzas.id%2!==0).map(Pizzas => Pizzas.nombre).join(", ")

console.log(`Las pizzas con identificador impar son ${idImpar}.`)

/*Precio menor a $600*/

const chequearPrecio = Pizzas.filter(Pizzas => Pizzas.precio<600).map(Pizzas => Pizzas.nombre)

const menorPrecio = () => {
    if (chequearPrecio == false){
    console.log (`No tenemos ninguna pizza por menos de $600`)}
    else{
      console.log (`La pizza con valor menor a $600 es la de ${chequearPrecio}.`)}
}

menorPrecio()

/*Nombres de todas las pizzas*/

const nombres = Pizzas.map(Pizzas => Pizzas.nombre).join(", ")

console.log (`Los nombres de las pizzas son ${nombres}.`)

/*Nombre y precio de las pizzas*/

const nombrePrecio = Pizzas.map (Pizzas => {
  console.log (`La pizza de ${Pizzas.nombre} sale $${Pizzas.precio}.`)
})