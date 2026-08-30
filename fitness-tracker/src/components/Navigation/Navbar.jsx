import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ isOpen }) {
    const location = useLocation();

    return (
        <ul className={`${styles.navigation} ${isOpen ? styles.open : ""}`}>
            <li>
                <Link
                    to="/"
                    className={location.pathname === "/" ? styles.active : ""}
                >
                    Home
                </Link>
            </li>

            <li>
                <Link
                    to="/exercises"
                    className={
                        location.pathname === "/exercises"
                            ? styles.active
                            : ""
                    }
                >
                    Exercises
                </Link>
            </li>

            <li>
                <Link
                    to="/workout-planner"
                    className={
                        location.pathname === "/workout-planner"
                            ? styles.active
                            : ""
                    }
                >
                    Workout-Planner
                </Link>
            </li>

            <li>
                <Link
                    to="/progress"
                    className={
                        location.pathname === "/progress"
                            ? styles.active
                            : ""
                    }
                >
                    Progress
                </Link>
            </li>

            <li>
                <Link
                    to="/history"
                    className={
                        location.pathname === "/history"
                            ? styles.active
                            : ""
                    }
                >
                    History
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;