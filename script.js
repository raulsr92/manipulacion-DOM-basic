// Class 10: Leyendo HTML desde JavaScript
console.log("Hello, world!");

const h1 = document.querySelector("h1");
console.log(h1);

const p = document.querySelector("p");
console.log(p);

const parrafito = document.querySelector(".parrafito");
console.log(parrafito);

const pid = document.querySelector("#pid");
console.log(pid);

const input = document.querySelector("input");
console.log(input);

console.log({
	h1,
	p,
	parrafito,
	pid,
	input,
});

console.log(input.clientHeight);
console.log(input.value);

const p2 = document.querySelectorAll("p");
console.log(p2);

console.log({
	h1,
	p,
	parrafito,
	pid,
	input,
	p2,
});

const pid2 = document.getElementById("pid");
console.log(pid2);

// Class 11: Escribiendo HTML desde JavaScript

h1.innerHTML="Bienvenido a la web del <br> Manchester United"

console.log(parrafito.getAttribute("class"))

// h1.setAttribute("class", "main-tittle" )

console.log(h1.classList)

h1.classList.add("landing")

console.log(h1.classList)

h1.classList.add("landing")

console.log(h1.classList)

h1.classList.remove("main-title")

console.log(h1.classList)

console.log(h1.classList.contains("landing"))


const img = document.createElement("img")

console.log(img);

img.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/824/824727.png?w=740&t=st=1673542318~exp=1673542918~hmac=c9bcf1eebf7ea6498d0bb82325c21768090d59925e344cbca7a57c6549083926")
console.log(img);

pid.append(img);

// pid.replaceWith(img);

// Agregar un div 

const div = document.createElement("div");
console.log(div);

div.setAttribute("class", "container");
console.log(div);

const body = document.querySelector("body");
console.log(body);

body.append(div);
