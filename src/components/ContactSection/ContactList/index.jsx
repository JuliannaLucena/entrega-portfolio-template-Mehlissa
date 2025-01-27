import { contacts } from "../../../data/contact"
import { ContactCard } from "./ContactCard"
import styles from "./style.module.css"

export const ContactList = () => {
    return(
        <ul className={styles.contactList}>
            {contacts.map(contact => (
                <ContactCard key={contact.id} contact={contact} />
            ))}
        </ul>
    )
}