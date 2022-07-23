import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'




export function Comment({content, onDeleteComment}){


    //deletar comentário 
    function handleDeleteComment(){

       onDeleteComment(content)
    }

    return(
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/nikolasmarlon.png" />

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Nikolas Marlon</strong>

                            <time title='22 de janeiro de 2022' dateTime='2022-05-22 08:15:13'>Públicado Há 1h</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            {/**Biblioteca phosphor-react */}
                            <Trash className={styles.trash}/>
                        </button>                        
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        {/**Biblioteca phosphor-react */}
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}