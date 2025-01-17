let dadosemail=document.getElementById('email');
let pass=document.getElementById('password');
let log=document.getElementById('logar');
function entrar(){
    const DescEmail =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Aqui Ele verifica se Os email possuem as Caracteristicas De um Email.
    if(dadosemail.value.trim() === '' || pass.value.trim() === ''){ // Faz a checagem Se os campos estao vazios ou nao
        alert('Preencha Os Dados!')
        return;
    }
    if(!DescEmail.test(dadosemail.value)){ //Checa Se os Email sao Validos
        alert('Email Invalido');
        return;
    }
    alert('login Realizado Com Sucesso')
}