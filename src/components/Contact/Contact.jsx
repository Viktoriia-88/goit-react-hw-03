import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from './Contact.module.css'

export default function Contact({ id, name, number, onDelete }) {
    return (
        <div className={css.contact}>
            <div className={css.date}>
                <p className={css.dateValue}><FaUser className={css.icon} size="18" />{name}</p>
                <p className={css.dateValue}><FaPhoneAlt className={css.icon} size="18" />{number}</p>
            </div>
            <button className={css.button} onClick={() => onDelete(id)}>Delete</button>
        </div>
        
    );
};