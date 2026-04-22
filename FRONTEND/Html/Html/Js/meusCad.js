async function getUsers() {
    try {
        // 1. Faz a requisição (Busca na geladeira)
        const response = await fetch('http://localhost:3000/user');
        
        // 2. Transforma o que chegou em dados legíveis (JSON)
        const usersFromApi = await response.json();

        // 3. No JS puro, não existe setUsers. 
        // Chamamos uma função para desenhar esses dados na tela:
        
        container.innerHTML += `
    <div class="card">
        <div>
            <p>Nome: <span>${usuario.nome}</span></p>
            <p>Sobrenome: <span>${usuario.sobrenome}</span></p>
            <p>Email: <span>${usuario.email}</span></p>
            <p>Número: <span>${usuario.celular}</span></p>
            <p>Senha: <span>${usuario.senha}</span></p>
            <p>Confirmar Senha: <span>${usuario.confirmsenha}</span></p>
        </div>
        </div>
`;
        
        renderUsers(usersFromApi);
        
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
    }
}