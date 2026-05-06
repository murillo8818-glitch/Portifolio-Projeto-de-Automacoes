 // vamos criar
 
 const api = axios.create({
    baseURL: 'http://localhost:3000'
});

// Função que faz a busca carregando 
 async function buscaUsuarios() {

try {
    // 1° variavel que espera a resposta chegar;
        const EspResposta = await api.get('/usuariosdb') 

    // 2° captura da resposta que MOSTRA os dados 
        console.log(EspResposta.data);
        
        const userAtual = EspResposta.data[0]

        
        const spanNome = document.querySelectorAll(' .card span')

         nome[0].innerText = livro.titulo;

//----------------------------------------------------------    
//      caso der erro  
//----------------------------------------------------------
    } catch (error){

    // 1° esse aqui e o mensageiro (carrega o error)
        console.log("Erro por causa disso:", error)
        span("erro por causa disso", error)
    } 

 }