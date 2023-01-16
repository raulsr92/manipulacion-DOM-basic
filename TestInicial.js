// Funciones

function message(name, lastname, nickname){
	let completeName= name + " " + lastname;
	return console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}


// Condicionales -2

const tipoDeSuscripcion = prompt("¿Qué tipo de suscripción tiene?: ");

if (tipoDeSuscripcion==="Free"){
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion==="Basic"){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion==="Expert"){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion==="ExpertPlus"){
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
	console.log("Ingrese una suscripción válida");
};


// Condicionales -3 Bonus

var suscripciones = [
	{tipo:"Free", descripcion:"Solo puedes tomar los cursos gratis"},
	{tipo:"Basic", descripcion:"Puedes tomar casi todos los cursos de Platzi durante un mes"},
	{tipo:"Expert", descripcion:"Puedes tomar casi todos los cursos de Platzi durante un año"},
	{tipo:"ExpertPlus", descripcion:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"},
];

var peticion;

function FindSuscription(suscripcion){
	if (suscripcion.tipo==="Free"){
		return suscripcion.descripcion
	}
};


peticion = suscripciones.filter(FindSuscription);

// Condicionales -3 Bonus-B

var tipo=["Free","Basic","Expert","ExpertPlus"];
var descripcion=[
	"Solo puedes tomar los cursos gratis",
	"Puedes tomar casi todos los cursos de Platzi durante un mes",
	"Puedes tomar casi todos los cursos de Platzi durante un año",
	"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
]

var users=prompt("Indique su suscripcion: ")

for (var i=0; i<tipo.length;i++){
	if (users===tipo[i]){
		alert(descripcion[i])
	}
}




// Ciclos-2 A

var i=0;

while (i<5){
	console.log("El valor de i es: " + i);
	i++;
}


// Ciclos-2 B

var i=10;

while (i>=2){
	console.log("El valor de i es: " + i);
	i--;
}

// Ciclos 3 - respuesta 1

var respuestaUser=Number(prompt("¿Cúanto es 2+2:"));

function evaluacion(respuestaUser){
	if (respuestaUser===4){
		console.log(":) Felicitaciones, la respuesta es correcta");
		var respuesta = true;
	} else{
		console.log(":( Inténtelo de nuevo")
		var respuesta = false;
	};
	return respuesta;
};

while(evaluacion(respuestaUser)===false) {
	respuestaUser=Number(prompt("¿Cúanto es 2+2:"));
};

// Ciclos 3 - respuesta 2

function evaluation(){
	var respuestaUser=Number(prompt("¿Cúanto es 2+2:"));
	if (respuestaUser===4){
		console.log("Felicitaciones, la respuesta es correcta");
	} else{
		while (respuestaUser!=4){
			console.log("Inténtelo de nuevo");
			respuestaUser=Number(prompt("¿Cúanto es 2+2:"))
		};
	};
};

// Ciclos 3 - respuesta 3

function evaluation(){
	var respuestaUser=Number(prompt("¿Cúanto es 2+2:"));
	while (respuestaUser!=4){
		console.log("Inténtelo de nuevo");
		respuestaUser=Number(prompt("¿Cúanto es 2+2:"))
	};
	return console.log("Felicitaciones, lo has logrado")
};

// Ciclos 3 - respuesta 4

function evaluation(){
	var respuestaUser=Number(prompt("¿Cúanto es 2+2:"));
	while (respuestaUser!=4){
		respuestaUser=Number(prompt("Inténtalo de nuevo, ¿Cúanto es 2+2:"))
	};
	return console.log("Felicitaciones, lo has logrado")
};

// Listas -2
 
var meses=["Enero", "Febrero", "Marzo", "Abril"]

function calendario(meses){
	console.log(meses[0]);
}

calendario(meses);

// Listas -3

var meses=["Enero", "Febrero", "Marzo", "Abril"]

function InicioMes(meses){
	for(var i=0; i<meses.length;i++){
		console.log(`Bienvenido ${meses[i]}`)
	}
}

InicioMes(meses);


// Listas -4

var autos = [
	{marca: "Toyota", modelo:"Corolla"},
	{marca: "Honda", modelo:"Civic"},
	{marca: "Honda", modelo:"CRV"},
	{marca: "Hiunday", modelo:"i3"},
]

function Cars(autos){
	for(var i=0; i<autos.length;i++){
		console.log(autos[i])
	}
}

Cars(autos);



// Listas -4B

let autos = {
	marca: "Toyota", 
	modelo:"Corolla", 
	fabricacion:2020, 
	color: "plata"
}

function Cars(autos){
	let keys = Object.keys(autos);
	for(var i=0; i<keys.length;i++){
		let propertie=keys[i];
		console.log( propertie + ":" + autos[propertie])
	}
}

Cars(autos);

