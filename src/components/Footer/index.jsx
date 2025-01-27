import styles from "./style.module.css"
import eu from "../../assets/gabriel01.jpg"
import insta from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import linkedin from "../../assets/linkedin.png"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerDiv}>
                <div className={styles.perfil}>
                    <button className={styles.btnGabriel}>
                        <img src={eu} alt="perfilGabriel" className={styles.imgGabriel} />
                    </button>
                    <div>
                        <h2>
                            Thank you!
                        </h2>
                        <p>
                            Follow me on my social networks and let's talk
                        </p>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.iconFace}>
                        <img src={facebook} alt="face-icon" className={styles.btnFacebook}/>
                    </button>
                    <button className={styles.iconInsta}>
                        <img src={insta} alt="face-icon" className={styles.btnInsta}/>
                    </button>
                    <button className={styles.iconLinkedin}>
                        <img src={linkedin} alt="face-icon" className={styles.btnLinkedin}/>
                    </button>
                </div>
            </div>

        </footer>
    )
}