import './App.css'
import './App2.css'


function App() {
  return (
    
      <div class="container">

        <nav>
          <ul>

            <li class="nav1">
              <a href="saiba-mais.html">Sobre o site</a>
            </li>

            <li class="nav1">
              <a href="saiba-mais.html">detalhes do site</a>
            </li>

            <li class="nav1">
              <a href="saiba-mais.html">Saiba mais</a>
            </li>
            
          </ul>
        </nav>

        <header>
          <div class="center">
            <img src="../avatar.png"/>
            <h1 > PROJETO USUARIOS</h1>
            <h3 > MAIS DETALHES DO PROJETO E SEU OBJETIVO </h3>
            <h4> <a href="saiba-mais.html">From: Murillo Augusto</a> </h4>
          </div>
        </header>

        <main>
          <section>
            <div class="mainAl">
              <h2 >Central de Automções</h2>
              <p>
                Esse site tenta ser uma altrnativa para empresas que prencher os mesmo formularios dia a pos dias e apresentar os comnhecimento de automções.
                Para facilitar eu criei esse layout interativo que facilita o processo onde voce grencia seus cadastros e pega os dados dos objetos cadastrados e
                preenche de forma automatica formularios ou campos em outros sites
              </p>
            </div>
          </section>
        </main>
        
      </div>    
  )
}

export function App2() {
  return (
    
<nav id= "sidebar">

    <div id="sidebar_content">
        
        <div id="user">
            <img src="../avatar.png" id= "user_avatar"alt="Avatar"/>
                <p id="user_infos">
                        <span class="item-description">
                            Murillo Augusto  
                            </span>

                            <span class="item-description">
                            admnistrador
                        </span>
                    </p>
               </div>       


            <ul id="side_items">
                <li class="side-item ">
                    <a href="pag-02.HTML">
                      <i class="fa-solid fa-user" style={{ color: 'rgb(100, 220, 160)' }}></i>
                    <span class="item-description">
                        Meu usuario
                    </span>
                    </a>
                </li>


            <li class="side-item ">
                <a href="#">
                    
                     <i class="fa-solid fa-flask" style={{ color: 'rgb(100, 220, 160)' }}></i>
                        <span class="item-description">
                            Meus Cadastros
                        </span>
                    </a>
                </li>


            <li class="side-item ">
                <a href="#">
                    <i class="fa-solid fa-plus" style={{ color: 'rgb(100, 220, 160)' }}></i>
                        <span class="item-description">
                            Adiconar Usuarios
                        </span>
                    </a>
                </li>


            <li class="side-item ">
                <a href="#">
                    <i class="fa-solid fa-flask-vial" style={{ color: 'rgb(100, 220, 160)' }}></i>                   
                        <span class="item-description"> 
                             Editar usuarios
                        </span>
                    </a>
                </li>


            <li class="side-item ">
                <a href="#">
                    <i class="fa-solid fa-file-image" style={{ color: 'rgb(100, 220, 160)' }}></i>
                        <span class="item-description">
                            Exportar
                        </span>
                    </a>
                </li>


                <li class="side-item ">
                <a href="#">
                    <i class="fa-solid fa-gear" style={{ color: 'rgb(100, 220, 160)' }}></i>
                        <span class="item-description">
                            Configurações
                        </span>
                    </a>
                </li>
            </ul>


    <button id="open_btn">
    <i id = 'btn-icon' class="fa-solid fa-chevron-right" style={{ color: 'rgb(100, 220, 160)' }}></i>
    </button>


</div>
  
            <div id="logout">
                <button id="logout_btn">
                    <i class="fa-solid fa-arrow-right-from-bracket" style={{ color: 'rgb(100, 220, 160)' }}></i>
                    <span class= "item-description">
                        Logout
                    </span>
                </button>
            </div>
           
        </nav>
    

  )}

export function App3() {
  return (
  <footer>
          
    <div class="rodape">
        <div class="alinFooter">
            <a href="https://github.com/murillo8818-glitch" target="_blank" rel="noopener noreferrer"> 
                <img src="./github.svg"/>
                <p>Github</p>
            </a>
            
            <a href="https://www.linkedin.com/in/murillo-augusto-8826a925a/" target="_blank" rel="noopener noreferrer">
                <img src="./linkedin.svg"/>
                <p>Linkedin</p>
            </a>
        </div>
      </div>

</footer>
)}

export default App
