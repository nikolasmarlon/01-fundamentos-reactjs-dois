import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({author, content, publishedAt}){

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBr})
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBr, addSuffix: true, })

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
                        return <p>{line.content}</p>
                    } else if (line.type == 'link'){
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
                
            </div>

            {/**Seção formuário de comentários */}
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário' />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            {/**Fim Seção formulário de comentários */}

            {/**Lista de comentários */}
            <div className={styles.commentList}>
                <Comment />
               
            </div>
            {/**Fim Lista de comentários */}

        </article>
    )
}