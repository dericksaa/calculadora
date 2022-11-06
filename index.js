const displayValorAnterior=document.getElementById('valor_anterior');
const displayValorActual=document.getElementById('valor_actual');

const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const bdark = document.querySelector('#bdark')
const body = document.querySelector('body')
bdark.addEventListener('click', e=>{
    body.classList.toggle('darkmode')
})


const display = new Display(displayValorAnterior, displayValorActual)

botonesNumeros.forEach(boton =>{
    boton.addEventListener('click',()=>{
        display.agregarNumero(boton.innerHTML)

    })
})

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value))
})