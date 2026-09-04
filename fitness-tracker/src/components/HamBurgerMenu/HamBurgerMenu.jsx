import styles from "./HamBurgerMenu.module.css";

function HamBurgerMenu({isOpen, setIsOpen}){
    const icon = isOpen ? "✕" : "▤";
    return (
        <div 
            className={styles.container} 
            onClick={() => {
                setIsOpen(!isOpen)
            }} 
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
            {icon}
        </div>
    )
}

export default HamBurgerMenu;