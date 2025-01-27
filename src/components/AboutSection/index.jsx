import styles from "./style.module.css"
import git from "../../assets/git-icon.png"
import seta from "../../assets/seta-icon.png"

export const AboutSection = () => {
    return (
        <>
            <section className={styles.aboutSection}>
                <div className={styles.project}>
                    <h2 className={styles.color}>
                        My projects
                    </h2>
                    <p className={styles.subtitle}>
                        Projects created at <span> Gabriel Camaleonte </span>
                    </p>
                </div>
                <section className={styles.sectionBox}>
                    <div className={styles.textBox}>
                        <div className={styles.textBox__01}>
                            <h1 className={styles.color}>
                                Quickstart
                            </h1>
                            <div className={styles.newBox}>
                                <p>
                                    New
                                </p>
                            </div>
                        </div>
                        <div className={styles.textBox__01}>
                            <p className={styles.subtitle}>
                                Linguagens:
                            </p>
                            <div>
                                <p className={styles.newBox__01}>
                                    Javascript
                                </p>
                            </div>
                        </div>
                        <p className={styles.subtitle__01}>
                            Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório...
                        </p>
                        <div className={styles.divFinal}>
                            <div className={styles.divFinal__01}>
                                <img src={git} alt="git-icon" className={styles.img}/>
                                <p>
                                    Github Code
                                </p>
                            </div>
                            <div className={styles.divFinal__01}>
                                <img src={seta} alt="seta-icon" className={styles.img}/>
                                <p>
                                    Aplicação
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textBox}>
                        <div className={styles.textBox__01}>
                            <h1 className={styles.color}>
                                Quickstart
                            </h1>
                        </div>
                        <div className={styles.textBox__01}>
                            <p className={styles.subtitle}>
                                Linguagens:
                            </p>
                            <div>
                                <p className={styles.newBox__01}>
                                    Javascript
                                </p>
                            </div>
                        </div>
                        <p className={styles.subtitle__01}>
                            Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório...
                        </p>
                        <div className={styles.divFinal}>
                            <div className={styles.divFinal__01}>
                                <img src={git} alt="git-icon" className={styles.img}/>
                                <p>
                                    Github Code
                                </p>
                            </div>
                            <div className={styles.divFinal__01}>
                                <img src={seta} alt="seta-icon" className={styles.img}/>
                                <p>
                                    Aplicação
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textBox}>
                        <div className={styles.textBox__01}>
                            <h1 className={styles.color}>
                                Quickstart
                            </h1>
                        </div>
                        <div className={styles.textBox__01}>
                            <p className={styles.subtitle}>
                                Linguagens:
                            </p>
                            <div>
                                <p className={styles.newBox__01}>
                                    Javascript
                                </p>
                            </div>
                        </div>
                        <p className={styles.subtitle__01}>
                            Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório...
                        </p>
                        <div className={styles.divFinal}>
                            <div className={styles.divFinal__01}>
                                <img src={git} alt="git-icon" className={styles.img}/>
                                <p>
                                    Github Code
                                </p>
                            </div>
                            <div className={styles.divFinal__01}>
                                <img src={seta} alt="seta-icon" className={styles.img}/>
                                <p>
                                    Aplicação
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textBox}>
                        <div className={styles.textBox__01}>
                            <h1 className={styles.color}>
                                Quickstart
                            </h1>
                        </div>
                        <div className={styles.textBox__01}>
                            <p className={styles.subtitle}>
                                Linguagens:
                            </p>
                            <div>
                                <p className={styles.newBox__01}>
                                    Javascript
                                </p>
                            </div>
                        </div>
                        <p className={styles.subtitle__01}>
                            Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório...
                        </p>
                        <div className={styles.divFinal}>
                            <div className={styles.divFinal__01}>
                                <img src={git} alt="git-icon" className={styles.img}/>
                                <p>
                                    Github Code
                                </p>
                            </div>
                            <div className={styles.divFinal__01}>
                                <img src={seta} alt="seta-icon" className={styles.img}/>
                                <p>
                                    Aplicação
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}