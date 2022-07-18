//.JSX = JavaScript + XML (Arquivo JavaScript que comtém HTML)

//importação do componente Post.jsx
import { Post } from "./Post";

//Componente é uma função que retorna HTML



export function App() { 

  return (
    //Para retornar multiplos elementos,  sempre precisa de um elemento pai envolvendo os elementos
    <div>    
      <Post />
      <Post />
      <Post />
    </div>
  )
}


