import Navbar from "../Navigation/Navbar";
import HamBurgerMenu from "../HamBurgerMenu/HamBurgerMenu";
import  styles from "./common.module.css";
import { useState } from "react";

function Header(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <h1>OnTrack</h1>
            <Navbar isOpen={isOpen}/>
            <HamBurgerMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
        </header>
    )
}

export default Header;