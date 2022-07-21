import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            {/** Cabeçalho onde vai ficar o Avatar, cargo e a data de publicação */}
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/nikolasmarlon.png" />

                    <div className={styles.authorInfo}>
                        <strong>Nikolas Marlon</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="19 de Julho às 22:40" deteTime="2022-07-19 22:32:05">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                
                <p>
                    Lorem ipsum, dolor sit amet onsectetur adipisicing elit. Eaque debitis id tenetur autem quod sapiente inventore nobis commodi alias, ab repudiandae ex tempora impedit, quo excepturi omnis delectus odio facilis.
                </p>
                <p><a href="#">meusite.com.br</a></p>
                <p className={styles.hashtags}>
                    <a href="">#reactJs</a> 
                    <a href="">#node</a>
                    <a href="">#vidadedev</a>
                    <a href="">#alunando</a>
                </p>
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
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
            {/**Fim Lista de comentários */}

        </article>
    )
}