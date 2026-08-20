const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

const erroNome = document.getElementById("erro-nome");
const erroEmail = document.getElementById("erro-email");
const erroMensagem = document.getElementById("erro-mensagem")

formulario.addEventListener("submit", function(event) {
    
    event.preventDefault();

    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroMensagem.textContent = "";

    let formularioValido = true;
   
    if(nome.value.trim() === "") {
        
        erroNome.textContent = "Preencha seu nome!";
        formularioValido = false;

    }

    if(email.value.trim() === "") {
        
        erroEmail.textContent = "Preencha seu e-mail";
        formularioValido = false;
    }

    if (mensagem.value.trim() === "") {

        erroMensagem.textContent = "Escreva uma mensagem!";
        formularioValido = false;

    }

    if(formularioValido) {
        
        alert("Mensagem enviada com sucesso!");

        formulario.reset();
    }
    
});