// Class 13: addEventListener
const h1 = document.querySelector("h1");
console.log(h1);
const input1 = document.querySelector("#calculo1");
console.log(input1);
const input2 = document.querySelector("#calculo2");
console.log(input2);
const button = document.querySelector("#btnCalcular");
console.log(button);
const p = document.querySelector("#resultSum");
console.log(p);
const form = document.querySelector("#form");
console.log(form);

// event: Click

/*
function buttonOnClick(){
    let sum= parseInt(input1.value) + parseInt(input2.value)
    return p.innerText="El resultado de la suma es:" + " " + sum
} 


button.addEventListener(`click`, buttonOnClick);

*/

// event: Submit

/*

function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    let sum= parseInt(input1.value) + parseInt(input2.value)
    return p.innerText="El resultado de la suma es:" + " " + sum
} 

form.addEventListener(`submit`, sumarInputValues);
*/


// event: Click 2

function buttonOnClick(){
    let sum= parseInt(input1.value) + parseInt(input2.value)
    return p.innerText="El resultado de la suma es:" + " " + sum + "."+"Gracias."
};


button.addEventListener(`click`, buttonOnClick);


/*
function whenFocus(){
    let sum= parseInt(input1.value) + parseInt(input2.value)
    return p.innerText="El resultado de la suma es:" + " " + sum + "."+"El resultado se mostró luego de un ENTER."
} 

button.addEventListener(`focusin`, whenFocus)*/
