import styles from "./style.module.css"
import git from "../../assets/git-icon.png"
import html from "../../assets/html-icon.png"
import css from "../../assets/css-icon.png"
import js from "../../assets/js-icon.png"
import node from "../../assets/node-icon.png"
import react from "../../assets/react-icon.png"
import eu from "../../assets/gabriel01.jpg"

export const BannerSection = () => {
    return (
        <>
            <section className={styles.bannerSection}>
                <div className={styles.bannerDiv}>
                    <div className={styles.perfil}>
                        <button id="perfil" className={styles.btnGabriel}>
                            <img src={eu} alt="perfil" className={styles.imgGabriel} />
                        </button>
                        <p>
                            Hello, my name is Gabriel
                        </p>
                    </div>
                    <h1 className={styles.color}>
                        I <span> love </span> creating and <span> developing </span> projects

                    </h1>
                    <p>
                        Discover here in this environment, created especially for you, all my projects and technologies
                    </p>
                    <div className={styles.btnConfig}>
                        <button className={styles.btnProject}>
                            <h3>
                                See Projects
                            </h3>
                        </button>
                        <button>
                            <img src={git} alt="git-icon" />
                        </button>
                    </div>
                    <div className={styles.iconConfig}>
                        <img src={html} alt="html" />
                        <img src={css} alt="html" />
                        <img src={js} alt="html" />
                        <img src={node} alt="html" />
                        <img src={react} alt="html" />
                    </div>
                </div>
            </section>
        </>
    )
}