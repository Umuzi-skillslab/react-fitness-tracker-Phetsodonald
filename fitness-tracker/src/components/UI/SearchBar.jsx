import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./Button";
import styles from "./UI.module.css";

const SearchBar = ({onSearch, onClear, searchTerm="", placeholder="Search exercises..."}) => {
    const [term, setTerm] = useState(searchTerm);

    const submit = event => {
        event.preventDefault();
        onSearch(term);
    };

    const change = event => {
        setTerm(event.target.value);
        onSearch(event.target.value)
    };

    const onFocus = event => {
        event.target.select();
    }

    const onBlur = event => {
        event.target.classList.remove("focused");
    }

    const clear = () => {
        setTerm("");
        onClear();
    }
     
    return (
        <form className={styles.search} onSubmit={submit}>
            <input value={term} onChange={change}  onFocus={onFocus} onBlur={onBlur} placeholder={placeholder} />
            <Button type="submit">Search</Button>
            <Button type="button" variant="secondary" onClick={clear}>Clear</Button>
        </form>
    );
}

SearchBar.PropTypes = {
    onSearch: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    searchTerm: PropTypes.string,
    placeholder: PropTypes.string
}

export default SearchBar;