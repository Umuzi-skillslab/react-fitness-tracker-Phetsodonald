import PropTypes from "prop-types";
import styles from "./Media.module.css";

const AudioPlayer = ({audioUrl, title, description}) => {
    return(
        <div className={styles.media}>
            <h4>{title}</h4>
            <p>{description}</p>
            <audio controls>
                <source src={audioUrl} type="audio/mpeg"/>
                Browser does not support the audio element.
            </audio>
        </div>
    )
}

AudioPlayer.PropTypes = {
    audioUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}

export default AudioPlayer;