import styles from "./HamBurgerMenu.module.css";

function HamBurgerMenu({isOpen, setIsOpen}){
    return (
        <div className={styles.container} onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close navigation" : "Open navigation"}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default HamBurgerMenu;