import PropTypes from "prop-types";
import styles from "./UI.module.css";
import { Children } from "react";


const Badge = ({Children, tone="default"}) => {
    return (
        <span className={styles.badge} style={{opacity: tone === "muted" ? 0.65 : 1}}>
            {Children}
        </span>
    )
}

Badge.PropTypes = {
    Children: PropTypes.node.isRequired,
    tone: PropTypes.string
}

export default Badge;