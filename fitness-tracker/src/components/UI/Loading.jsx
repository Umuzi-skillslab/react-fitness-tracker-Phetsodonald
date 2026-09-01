import PropTypes from "prop-types";

const Loading = ({message="Loading..."}) => {
    return (
        <p role="status" style={{padding: "30px", textAlign: "center"}}>
            {message}
        </p>

    )
}

Loading.PropTypes = {
    message: PropTypes.string
};

export default Loading;