import { useId } from 'react';
import css from './SearchBox.module.css'

export default function SearchBox({ search, onSearch }) {
    const searchId = useId();
    return (
        <div className={css.searchBox}>
            <label className={css.label} htmlFor={searchId}>Find contacts by name</label>
            <input className={css.inputBox} 
                type="name"
                id={searchId}
                value={search}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}