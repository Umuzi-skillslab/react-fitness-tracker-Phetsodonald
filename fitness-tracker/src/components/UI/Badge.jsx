import PropTypes from "prop-types";
import styles from "./UI.module.css";

const Badge = ({ children, tone = "default" }) => {
    return (
        <span
            className={styles.badge}
            style={{
                opacity: tone === "muted" ? 0.65 : 1,
            }}
        >
            {children}
        </span>
    );
};

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    tone: PropTypes.string,
};

export default Badge;