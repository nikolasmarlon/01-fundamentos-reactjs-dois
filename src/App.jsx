//.JSX = JavaScript + XML (Arquivo JavaScript que comtém HTML)

//importação do componente Header.jsx
import { Header } from "./components/Header";
//importação do componente Post.jsx
import { Post } from "./Post";
//importação do compotente Sidebar.jsx
import { Sidebar } from "./components/Sidebar";

//importação css
import styles from './App.module.css'

//importação de css global (global.css)
import './global.css'




//Componente é uma função que retorna HTML
export function App() { 

  return (
    //Para retornar multiplos elementos,  sempre precisa de um elemento pai envolvendo os elementos

    //autor e content são propriedade passadas para o componente Post
    <div> 
      
      <Header />

      <div className={styles.wrapper}>
          
          {/**Componente Sidebar */}
          <Sidebar />


          <main>
            {/*Primeiro Post (componente) passando propriedades(author, content) para o componente*/}  
            <Post author="Nikolas Marlon" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio odit, rem natus perferendis voluptates modi accusamus suscipit nulla laborum unde obcaecati ut nihil aliquam sunt inventore porro nostrum, sequi quod."/>
            <Post />

            {/*Segundo Post (componente) passando propriedades(author, content) para o componente*/} 
            <Post author="Nikolas Marlon" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio odit, rem natus perferendis voluptates modi accusamus suscipit nulla laborum unde obcaecati ut nihil aliquam sunt inventore porro nostrum, sequi quod."/>
            <Post />
          </main>
      </div>      
    </div>
  )
}

