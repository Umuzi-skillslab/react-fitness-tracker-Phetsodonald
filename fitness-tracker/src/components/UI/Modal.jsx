import PropTypes from "prop-types";
import Button from "./Button";
import styles from "./UI.module.css";

const Modal = ({children, title="Details", onClose}) => {
    return(
        <div className={styles.modalBackdrop} role="dialog" aria-modal="true">
            <div className={styles.modal}>
                <h2>{title}</h2>
                {children}
                <Button variant="secondary" onClick={onClose}>Close</Button>
            </div>
        </div>
    );
}

Modal.PropTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired
}

export default Modal;