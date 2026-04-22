

/* 
const amrzenarCadastros = []; 
var nome; 

class motororistas {

  //  informações pessoais 

CPF = this.cpf; 
NOME = this.nome;  
DATA_NASC = this.data_nasc; 

}
function motoristaF( motoristas) {
    (CPF,NOME,DATA_NASC);

} */

 
const api = axios.create({
    baseURL: 'http://localhost:3000'
});


const botaoMenu = document.getElementById('open_btn');
const sidebar = document.getElementById('sidebar');

if (botaoMenu && sidebar) {
    botaoMenu.addEventListener('click', function () {
        sidebar.classList.toggle('open-sidebar');     
    });
}


async function cadastUser(event) {
    event.preventDefault(); 

    const inputFirstName = document.getElementById('firstname');
    const inputLastName = document.getElementById('lastname');
    const inputEmail = document.getElementById('email');
    const inputNumber = document.getElementById('number');
    const inputPassword = document.getElementById('password');
    const inputConfirm = document.getElementById('Confirmpassword');


    if (inputPassword.value !== inputConfirm.value) {
        alert("As senhas não conferem!");
        return; 
    }

    try {
        // Envio para o backend
        await api.post('/usuariosdb', {
            nome:         inputFirstName.value,
            sobrenome:    inputLastName.value,
            email:        inputEmail.value,
            celular:      inputNumber.value,
            senha:        inputPassword.value,
            confirmsenha: inputConfirm.value
        });

        alert("Usuário Cadastrado ");
        

        inputFirstName.value = '';
        ipnutLastName.value = '';
        inputEmail.value = '';
        inputNumber.value = '';
        inputPassword.value = '';
        inputConfirm.value = '';

    } catch (err) {
        console.error("Erro ao cadastrar:", err);
        alert("Erro ao cadastrar DESC.");
    }
}

