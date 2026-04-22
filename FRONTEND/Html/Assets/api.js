// Vamos a crição da nossa primeria API. 
 
// Criando o JSON NPM init -y 
// veio o Package.json Tipo um arq Default do Json (Configurções basicas).


// Vamos a instalação das Bibliotecas.

// Express  [ npm i express ]
// veio o  [ package-lock.json ] dependecias dos express Configs em Json. 
// veio o [ File - Node Modules ] dependecias dos express. 

// Importação do Express 
import express from 'express'

// Necessario alterar o tipo no Package.json 
//        [ "type": "module", ]

//Ate aqui o nosso projeto esta funcional precisamos fazer agora 
//o vunculo com nosso DB 
 
// Com o mongo DB ultilizariamos o prisma 
// Vamos usar um banco de dados Não Relacional 
// MONGO DB nao o NEON 

// Link de vinculo [ postgresql://neondb_owner:npg_nrQ60XZTjEPv@ep-gentle-meadow-acawek4i-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require ]
// Como eu sou inovador eu vou fazer a conexão ultilizando o prisma 
// npm install prisma --save--dev // npm install prisma //
// npx prisma init - esse cria o arquivo de ligações 
import { PrismaClient } from '@prisma/client'
// vamos usar a versão 6 npm 
// install prisma@6 --save-dev
// npm install @prisma/client@6
// npm install @prisma/client@6
// npx prisma generate


// mudei os links .env para o dB 
// remover o output de siada e mudar para
// generator client {
//   provider = "prisma-client-js"
// }



// Mude de:
// .../neondb?sslmode=require&channel_binding=true

// Para:
// .../neondb?sslmode=require&pgbouncer=true

// Criamos um modelo dentro do Schema para receber DADOS dos usuarios 

/* EXEMPLO DE MODELO 

model usuarios {
  id        String      @id @default(uuid())
  email     String      @unique 
  name      String     
  age       String       
 @@map("Usuarios")

// npx prisma generate      gerei

// npx prisma db pull       upei para o db 

} */

//      INSTALL e HABILT cors 

// npm install cors 
// Import cors from cors / app.use(cors( / Vazio / ou / minha URL / ))

import cors from 'cors'

 //             tudo criado agora vamos para as (req e res) 
 //     Ate aqui nossa tabela foi criada dentro do Neon ultilizando o 
 //                         Prisma 

 // varaivel que guarda o express
const app = express() 
// expresse vai ultilziar o Json para enviar o Dados 
app.use(express.json())
//habilitado qualqer pagina a etnrar no meu back end 



// variavel do prisma
const prisma = new PrismaClient()

// variavel do cors
app.use(cors())

// Array vazio para levar os dados ate o DB (Eu acho)
const usuarios = []

// o expresse na rota post 
// no caminho /usuarios 
// executa um função Asycrona (tipo requisição e reposta)


//                adicionar 

app.post('/usuariosdb', async (req, res) => {

    await prisma.usuarios.create({

            // dentro de DATA vamos fazer o Mapeamento: 
                data:{
                                // Mapeamento 
                    //nome que ta vindo na minha requisição 
                    nome:           req.body.nome,
                    //sobrenome que ta vindo na minha requisição 
                    sobrenome:      req.body.sobrenome,
                    //Email que ta vindo na minha requisição 
                    email:          req.body.email,
                    //celualar que ta vindo na minha requisição 
                    celular:        req.body.celular,
                    //senhs que ta vindo na minha requisição 
                    senha:          req.body.senha,
                    //confirmsenha que ta vindo na minha requisição 
                    confirmsenha:   req.body.confirmsenha
        }
    })
                            // importante 
// toda requisição precisa de uma resposta como a gente faz isso? : 
                    res.status(201).json(req.body)
})
 //  importante    servidor precisa escutar em uma porta para escutar defina-a assim : app.listen(3000) no final do codigo 


// Agora vamos buscar infromações com o GET 
// Essa função retorna tudo que ta dentro do meu banco de dados 





//              Buscar 

app.get('/usuariosdb', async (req,res)=> {
    // var temporaria
    let usuariosdb = []  

    // condição ( passsamos os parametro da URL tipo usaurios?nome=algumacoisa )
    if (req.query){
    // Essa variaivel vai buscar alguma coisa dentro de dbPrisma.usuarios. (findmany Varios intens ou todos)
        user = await prisma.usuarios.findMany({
    // ONDE? 
       where: {
//   Filtro nome: na requisição / no query / no name / ( valor de nome )
            nome:           req.query.nome,
            sobrenome:      req.query.sobrenome,    
            email:          req.query.email,                  
            celular:        req.query.celular,                  
            senha:          req.query.senha, 
            confirmsenha:   req.query.confirmsenha
            }
        })
//   senão acontecer busca tudo / quando esta sem parametros      
    } else {
        user = await prisma.usuarios.findMany()
    }
//  No final responda com 200 conseguimos 
    res.status(200).json(user)
})


//              Editar 


app.put ('/usuariosdb/:id' , async (req, res ) => {
    await prisma.usuarios.update({
        where:{
        // Buscar pelo id do usuario 
            id: req.params.id
        },
        data: {
            nome:           req.body.nome,
            sobrenome:      req.body.sobrenome,    
            email:          req.body.email,                  
            celular:        req.body.celular,                  
            senha:          req.body.senha, 
            confirmsenha:   req.body.confirmsenha         
        }
    })
    res.status(201).json(req.body)
})


//         DELETAR

app.delete('/usuariosdb/:id', async (req,res)=>{
    await prisma.usuarios.delete ({
        where: {
        // Buscar pelo id do usuario 
            id: req.params.id,
        },
    })
                        // Respsota 
    res.status(200).json({ message: ' Usuarios Apagado do Banco De Dados! '})
})



//------------------------------------------------------------------------------------//
                                // importante 
//------------------------------------------------------------------------------------//

                            // importante 
        // servidor precisa escutar em uma porta defina-a assim : 
                            app.listen(3000)
                    //express.escutar(numero da porta)

//------------------------------------------------------------------------------------//
                                // importante 
//------------------------------------------------------------------------------------//

