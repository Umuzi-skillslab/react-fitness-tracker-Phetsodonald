import PropTypes from "prop-types";
import styles from "./Media.module.css";

const VideoPlayer = ({videoUrl, title, description}) => {
    return (
        <div className={styles.media}>
            <h3>{title}</h3>
            <p>{description}</p>
            <video controls preload="metadata">
                <source src={videoUrl} type="video/mp4"/>
                Browser does not support the video tag.
            </video>
        </div>
    )
}

VideoPlayer.PropTypes = {
    videoUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}

export default VideoPlayer;