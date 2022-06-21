let evento = document.getElementById(`evento`);
let kitten = document.getElementById(`kitten`);
let costoProducto = document.getElementById(`costoProducto`);

costoProducto.addEventListener(`click`,click );
costoProducto.addEventListener(`keydown`, keydown)

function click(){
    evento.innerText = `Si, es por ahi! Ahora ingresa el costo del producto`    
}

function keydown(){
    evento.innerText = `Ingresando costo...Click en el gatito para financiar`
}


kitten.addEventListener(`click`, gatitoCalc);
kitten.addEventListener(`mouseover`, gatitoOver)

function gatitoCalc(){
    let costo3 = costoProducto.value / 3
    let costo6 = costoProducto.value / 6;
    let costo12 = costoProducto.value / 12;
    
    evento.innerHTML = `<h1>Financiar $ ${costoProducto.value}:</h1>
    <ul>
     <li> 3 cuotas de $ ${costo3} .</li>   
     <li> 6 cuotas de $ ${costo6} .</li>
     <li> 12 cuootas de $ ${costo12} .</li>
    </ul>` 
}

function gatitoOver (){
    evento.innerHTML = `<h1 style="color: red;font-weight: 900; font-size: 4rem" >Click!</h1>`
}
