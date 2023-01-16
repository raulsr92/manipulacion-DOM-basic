// Class 12: Eventos en JavaScript: interactuando con usuarios

const h1 = document.querySelector("h1");
console.log(h1);
const input1 = document.querySelector("#calculo1");
console.log(input1);
const input2 = document.querySelector("#calculo2");
console.log(input2);
const button = document.querySelector("#btnCalcular");
console.log(button);

function buttonOnClick(){
    console.log("Escuchando el evento click");
}

function input2OnChange(){
    alert("Escuchando el evento change");
};

// concatenación 

function suma(){
    let sum= input1.value + " " +  input2.value
    return alert(sum)
}

// suma aritmética (concatenación)

function sumaArit(){
    let sum= Number(input1.value) + Number(input2.value)
    return alert(sum)
}

// suma aritmética - enteros (integer)

function sumaArit2(){
    let sum= parseInt(input1.value) + parseInt(input2.value)
    return alert("La suma es" + " " + sum)
}

// suma aritmética - decimales (floats)

function sumaArit3(){
    let sum= parseFloat(input1.value) + parseFloat(input2.value)
    return alert("La sumatoria es" + " " + sum)
}

// mostrar resultado en el HTML

const p = document.querySelector("#resultSum");
console.log(p);

function sumaArit2(){
    let sum= parseInt(input1.value) + parseInt(input2.value)
    return p.innerHTML="La suma es" + " " + sum
}

function sumaArit4(){
    let sum= parseInt(input1.value) + parseInt(input2.value)
    return p.innerText="La suma es:" + " " + sum
}

