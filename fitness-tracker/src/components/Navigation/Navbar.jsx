import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar(){
    return (
        <header className={styles.header}>
            <h1>OnTrack</h1>
            <ul className={styles.navigation}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/exercises">Exercises</Link></li>
                <li><Link to="/workout-planner">Workout-Planner</Link></li>
                <li><Link to="/progress">Progress</Link></li>
                <li><Link to="/history">History</Link></li>
            </ul>
        </header>
    )
}

export default Navbar;