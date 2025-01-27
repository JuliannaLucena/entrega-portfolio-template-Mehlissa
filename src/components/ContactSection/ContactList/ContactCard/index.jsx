import styles from "./style.module.css"

export const ContactCard = ({ contact }) => {
    return (
        <li className={styles.contactCard}>
            <div>
                <button className={styles.btnIcon}>
                    <img src={contact.image} alt={contact.name} />
                </button>
            </div>
            <div className="contactText">
                <h2>
                    {contact.name}
                </h2>
                <p>
                    {contact.descripition}
                </p>
            </div>
        </li>
    )
}