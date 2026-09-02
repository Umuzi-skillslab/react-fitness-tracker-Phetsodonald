import PropTypes from "prop-types";
import Button from "../UI/Button";
import  Card from "../UI/Card";
import Badge from "../UI/Badge";
import VideoPlayer from "../Media/VideoPlayer";
import styles from "./Exercise.module.css";

const ExerciseDetails = ({exercise, onBack, onAdd}) => {
    return (
        <Card>
            <article className={styles.detail}>
                <Button variant="secondary" onClick={onBack}>Back to Exercise</Button>
                <h1>{exercise.name}</h1>
                <div className={styles.meta}>
                    {exercise.muscleGroups.map(muscleGroup => <Badge key={muscleGroup}>{muscleGroup}</Badge>)}
                </div>
                <p>
                    <strong>
                        Difficulity
                    </strong>
                    {exercise.difficulity}
                </p>
                <p><strong>Equipment:</strong>{exercise.equipment}</p>
                <h3>instruction</h3>
                <ol>{exercise.intruction.map((step, index) => <li key={index}>{step}</li>)}</ol>
                {exercise.videoUrl?<VideoPlayer videoUrl={exercise.videoUrl} title={`${exercise.name} demonstration`} description="Follow the movement at a comfortable pace."/>:null}
                <Button onClick={()=>onAdd(exercise)}>Add to Workout</Button>
            </article>
        </Card>
    )
}

ExerciseDetails.PropTypes = {
    exercise: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
}

export default ExerciseDetails;