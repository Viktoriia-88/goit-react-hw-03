import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from './Contact.module.css'

export default function Contact({ data, onDelete }) {
    return (
        <div className={css.contact}>
            <div className={css.data}>
                <p className={css.dataValue}><FaUser className={css.icon} size="18" />{data.name}</p>
                <p className={css.dataValue}><FaPhoneAlt className={css.icon} size="18" />{data.number}</p>
            </div>
            <button className={css.btnDelete} onClick={() => onDelete(data.id)}>Delete</button>
        </div>
    );
};