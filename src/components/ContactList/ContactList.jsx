import Contact from "../Contact/Contact";
import css from './ContactList.module.css'

export default function ContactList({ contacts, onDelete }) {
    return (
        <ul className={css.contactList}>
            {contacts.length > 0 ? (
            contacts.map((contact) => (
                    <li className={css.contactItem} key={contact.id}>
                        <Contact
                            data={contact}
                            onDelete={onDelete}
                        />
                    </li>
                )) 
            ) : (
                    <p className={css.noFound}>Contact not found</p>
            )}
        </ul>
    );
};