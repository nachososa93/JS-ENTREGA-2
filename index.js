const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1400,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// EJERCICIO A


const idPizzas = pizzas.forEach((tiposDePizzas) => {

  if (tiposDePizzas.id % 2 !== 0) {
    console.log(`El id de ${tiposDePizzas.nombre} es ${tiposDePizzas.id} y el numero es impar.`);
  }

}
);

console.log("");

// EJERCICIO B

const precioPizzas = pizzas.some((tiposDePizzas) => {

  return tiposDePizzas.precio < 600;

}

)
if (precioPizzas == true) {
  console.log("Si hay pizzas por menos de $600 ");
}
else {
  console.log("No hay pizzas por menos de $600");
}
console.log("");
// EJERCIO C

const nombreConPrecio = pizzas.forEach((tiposDePizzas)=>{
console.log(`La ${tiposDePizzas.nombre} cuesta $${tiposDePizzas.precio}`);
}
)
console.log("");
// EJERCICIO D


const ingredientesPizzas= pizzas.map((tiposDePizzas)=>{
return tiposDePizzas.ingredientes.toString()
  })
const nombrePizzas= pizzas.map((tiposDePizzas)=>{
    return tiposDePizzas.nombre
      })


for ( i = 0; i <nombrePizzas.length; i++){
  for ( i = 0; i <ingredientesPizzas.length; i++)
  console.log(`La ${nombrePizzas[i]} tiene como ingredientes ${ingredientesPizzas[i]}`);
}







