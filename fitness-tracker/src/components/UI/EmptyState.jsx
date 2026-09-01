import PropTypes from "prop-types";

const EmptyState = ({message="Nothing here yet."}) => {
    return (
        <div style={{padding: "30px", textAlign: "center"}}>
            <p>{message}</p>
        </div>
    )
}

EmptyState.PropTypes = {
    message: PropTypes.string
}

export default EmptyState;