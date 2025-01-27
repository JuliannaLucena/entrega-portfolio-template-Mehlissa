import styles from "./style.module.css"
import { ContactList } from "./ContactList"


export const ContactSection = () => {
    return (
        <>
            <section className={styles.contactSection}>
                <div className={styles.contactDiv}>
                    <h1>
                        Let's set up a conversation and <span> develop our creativity </span> together?
                    </h1>
                    <p>
                        Advertise your brand organically within Dribbble’s design inspiration feed.
                    </p>
                </div>
                <div>
                    <ContactList />
                </div>
            </section>

        </>
    )
}