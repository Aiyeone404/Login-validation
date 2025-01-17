let dadosemail = document.getElementById('email');
let pass = document.getElementById('password');
let log = document.getElementById('logar');

function entrar() {
    const DescEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Verifica se o email possui as características de um email válido

    if (dadosemail.value.trim() === '' || pass.value.trim() === '') { // Verifica se os campos estão vazios
        alert('Preencha os dados!');
        return;
    }

    if (!DescEmail.test(dadosemail.value)) { // Verifica se o email é válido
        alert('Email inválido');
        return;
    }

    // Verifica se a senha tem mais de 6 caracteres
    if (pass.value.length < 6) {
        alert('A senha deve ter até 6 caracteres');
        return;
    }

    alert('Login realizado com sucesso');
}
