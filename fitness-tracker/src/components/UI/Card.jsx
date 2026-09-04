import PropTypes from "prop-types";
import styles from "./UI.module.css";

const Card = ({children, title, interactive=false}) => {
    return (
        <section className={styles.card} style={{cursor: interactive ? "pointer": "default"}}>
            {title&&<h3>{title}</h3>}
            {children}
        </section>
    )
}

Card.PropTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    interactive: PropTypes.bool
}

export default Card;