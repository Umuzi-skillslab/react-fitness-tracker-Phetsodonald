import PropTypes from "prop-types";

const ErrorMessage = ({message}) => {
    return (
        <p role="alert" style={{padding: "12px", border: "1px solid #dc2626"}}>
            {message}
        </p>
    )
}

ErrorMessage.PropTypes = {
    message: PropTypes.string.isRequired
}

export default ErrorMessage;