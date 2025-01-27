import styles from "./style.module.css"

export const Header = () => {
    return (
        <header className={styles.container}>
            <div >
                <h2>Gabriel</h2>
            </div>    
                <div>
                    <a href="#">Home</a>
                    <a href="#">Projects</a>
                    <a href="#">Contatos</a>
                    <a href="#">Mídias Digitais</a>
                </div>
        </header>
    )
}