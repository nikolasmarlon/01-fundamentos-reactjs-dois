
//A função recebe um único argumento (props)
//props é um objeto que recebe props{author: "", content: ""} que são as 
// informações enviadas

export function Post(props){
    return (
        <div>
            <h1>{props.author}</h1>
            <p>{props.content}</p>
        </div>
    )
}