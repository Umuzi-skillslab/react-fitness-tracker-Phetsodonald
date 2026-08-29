import Navbar from "../Navigation/Navbar";
import  styles from "./common.module.css";

function Header(){
    return (
        <header className={styles.header}>
            <h1>OnTrack</h1>
            <Navbar/>
        </header>
    )
}

export default Header;