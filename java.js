


const loginBtn = document.getElementById('Login');
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('Fechar');
    const cadastroBtn = document.getElementById('cadastroBtn');

 
    loginBtn.onclick = () => modal.style.display = 'flex';
    closeModalBtn.onclick = () => modal.style.display = 'none';

    cadastroBtn.onclick = function() {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const cpf = document.getElementById('cpf').value;
        const senha = document.getElementById('senha').value;

      
            alert('Cadastro foi realizado');
            window.location.href = 'perfil.html';
  
    };
    

});


function mascara_telefone() {
    let tel_formatado = document.getElementById("telefone").value;

    if (tel_formatado[0] !== "(") {
        if (tel_formatado[0] !== undefined) {
            document.getElementById("telefone").value = "(" + tel_formatado[0];
        }
    }

    if (tel_formatado[3] !== ")") {
        if (tel_formatado[3] !== undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3];
        }
    }

    if (tel_formatado[9] !== "-") {
        if (tel_formatado[9] !== undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9];
        }
    }
    localStorage.setItem("telefone",tel_formatado)
}


function mascara_cpf() {
    let cpf_formatado = document.getElementById("cpf").value;

    if (cpf_formatado[3] !== ".") {
        if (cpf_formatado[3] !== undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 3) + "." + cpf_formatado[3];
        }
    }

    if (cpf_formatado[7] !== ".") {
        if (cpf_formatado[7] !== undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 7) + "." + cpf_formatado[7];
        }
    }

    if (cpf_formatado[11] !== "-") {
        if (cpf_formatado[11] !== undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 11) + "-" + cpf_formatado[11];
        }
    }
    localStorage.setItem("cpf",cpf_formatado)
}


function mascara_nome() {
    let nome_formatado = document.getElementById("nome").value;

 
    localStorage.setItem("nome",nome_formatado)
}

function mascara_email() {
    let email_formatado = document.getElementById("email").value;

 
    localStorage.setItem("email",email_formatado)
}


function enviarForm(event) {
    event.preventDefault();
   

    alert('informacoes enviadas');

 localStorage.setItem("nome", document.getElementById("nome").value);
localStorage.setItem("email", document.getElementById("email").value);
    window.location.href = 'perfil.html';
}
