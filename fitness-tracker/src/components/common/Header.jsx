import Navbar from "../Navigation/Navbar";
import HamBurgerMenu from "../HamBurgerMenu/HamBurgerMenu";
import styles from "./common.module.css";
import { useState } from "react";
import PropTypes from "prop-types";

function Header({ title, subtitle }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                {title && <h2>{title}</h2>}
                {subtitle && <p>{subtitle}</p>}
            </div>
            <Navbar isOpen={isOpen} />
            <HamBurgerMenu
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

export default Header;