import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

function activeRoute(route){
    const location = useLocation();
    return location.pathname === route ? `${styles.active}` : "" ;
}

function Navbar({isOpen}){
 

    return (
        <ul className={`${styles.navigation} ${isOpen ? styles.open : ""}`}>
            <li><Link to="/" className={ activeRoute("/")}>Home</Link></li>
            <li><Link to="/exercises" className={ activeRoute("/exercises") }>Exercises</Link></li>
            <li><Link to="/workout-planner" className={ activeRoute("/workout-planner") }>Workout-Planner</Link></li>
            <li><Link to="/progress" className={ activeRoute("/progress") }>Progress</Link></li>
            <li><Link to="/history" className={ activeRoute("/history") }>History</Link></li>
        </ul>
    )
}

export default Navbar;