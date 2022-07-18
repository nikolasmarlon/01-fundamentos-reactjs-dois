//css module - evita que o css de um componente afete outro componente fora do seu escopo
import styles from './Header.module.css'

export function Header(){
    return(
        <header className={styles.header}>
            <strong>Header</strong>
        </header>        
    )
}