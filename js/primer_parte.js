
//COMENTARIO

let formulario = document.getElementById('formulario-comentario');
let formularioNombre = document.getElementById('nombreForm');
let formularioComentario = document.getElementById('comentarioForm');


formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('nombreForm');
    console.log('comentarioForm');

    console.log(formularioNombre.value);
    console.log(formularioComentario.value);

    let regexFormularioNombre = /^[a-zA-Z\_\-]{4,16}$/; // Letras, numeros, guion y guion_bajo

    

    if(!regexFormularioNombre.test(formularioNombre.value) || formularioComentario.value == "" || formularioNombre.value == ""){
        document.getElementById("comentario-no-enviado").style.display = "block";
        document.getElementById("comentario-enviado").style.display = "none";
        
    }
    else if(regexFormularioNombre.test(formularioNombre.value)){
        document.getElementById("comentario-enviado").style.display = "block";
        document.getElementById("comentario-no-enviado").style.display = "none";
        
    }

})



//MENU HAMBURGUESA

function sacarMenu(){
    document.querySelector('.menu').style.right = "-100%";
}

function mostrarmenu(){
    document.querySelector('.menu').style.right = "0%";
}








