
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

    let entrar = false

    if(!regexFormularioNombre.test(formularioNombre.value) || formularioComentario.value == "" || formularioNombre.value == ""){
        alert(`No se puede enviar comentario`);
        let entrar = true;
    }
    else if(regexFormularioNombre.test(formularioNombre.value)){
        alert(`Se envio correctamente el comentario`);
        let entrar = true;
    }

})



//MENU HAMBURGUESA

function sacarMenu(){
    document.querySelector('.menu').style.right = "-100%";
}

function mostrarmenu(){
    document.querySelector('.menu').style.right = "0%";
}








