import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({author, content, publishedAt}){

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBr})
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBr, addSuffix: true, })


    const [comments, setComments] = useState([
        'Post Muito Bacana, hein?'
    ])

    //É sempre importante iniciar o estado com o mesmo tipo de dado que será armazenado
    //usando programação declarativa
    const [newCommentText, setNewCommentText] = useState('')

    //função que pega o comentario dentro da textarea
    function handleCreateNewComment(){
        event.preventDefault() //evita que a pagina seja redirecionada ao enviar o formulário

        //foi desabilitado para nao usar programação imperativa
        //foi criado um novo estado para receber o texto da textarea (newCommentText)
        //const newCommentText = event.target.comment.value

        setComments([...comments, newCommentText])

        setNewCommentText('') // voltar o estado que armazena a textarea para o valor original

        //usado para limpar a textarea, porém nao é eficiente e usa programação imperativa
        //event.target.comment.value
    }

    
    //deletar comentário
    function deleteComment(commentToDelete){

        //Imutabilidade -> as variáveis nao sofrem mutação
        // o valor da variável na memória não se altera
        // é criado um novo espaço em memória
        //Para deletar, temos que criar uma nova lista sem o comentario que queremos deletar

        const commentsWithoutDeleteOne = comments.filter(comment =>{
            return comment != commentToDelete
        })


        setComments(commentsWithoutDeleteOne)
    }



    function handleNewCommentChange(){
        setNewCommentText(event.target.value)
    }
    return(
        <article className={styles.post}>
            {/** Cabeçalho onde vai ficar o Avatar, cargo e a data de publicação */}
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}> 
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                
                {content.map(line =>{
                    if(line.type == 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type == 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })} 
                
            </div>

            {/**Seção formuário de comentários */}
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>


                {/** onChange monitorar toda vez tiver uma mudança no conteúdo da textarea vai 
                 * chamar uma função (handleNewCommentChange)
                 */}
                <textarea name='comment' onChange={handleNewCommentChange} value={newCommentText} placeholder='Deixe um comentário' />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            {/**Fim Seção formulário de comentários */}

            {/**Lista de comentários */}
            <div className={styles.commentList}>
                
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment} 
                        />
                    )
                })}
               
            </div>
            {/**Fim Lista de comentários */}

        </article>
    )
}