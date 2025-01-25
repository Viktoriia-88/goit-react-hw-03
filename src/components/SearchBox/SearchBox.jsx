import css from './SearchBox.module.css'

export default function SearchBox({ value, onSearch }) {
    return (
        <div className={css.searchBox}>
            <p className={css.label}>Find contacts by name</p>
            <input className={css.inputBox}
                type="text"
                value={value}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}