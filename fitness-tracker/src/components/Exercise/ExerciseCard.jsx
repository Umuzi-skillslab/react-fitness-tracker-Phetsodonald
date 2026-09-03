import PropTypes from "prop-types";
import { useState } from "react";
import Badge from "../UI/Badge";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./Exercise.module.css";
import { formatDuration } from "../../utils/helpers";

const ExerciseCard = ({ exercise, onSelect, onAdd, isInPlan = false }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Card interactive>
            <article
                className={styles.ExerciseCard}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <h3>{exercise.name}</h3>

                <div className={styles.meta}>
                    <Badge>{exercise.category}</Badge>

                    <Badge tone={hovered ? "default" : "muted"}>
                        {exercise.difficulity}
                    </Badge>

                    <p>{exercise.muscleGroups.join(", ")}</p>

                    <p>
                        {formatDuration(exercise.duration)} •{" "}
                        {exercise.sets} sets x {exercise.reps} reps
                    </p>

                    <div className={styles.actions}>
                        <Button onClick={() => onSelect(exercise.id)}>
                            View
                        </Button>

                        <Button
                            variant={isInPlan ? "secondary" : "primary"}
                            disabled={isInPlan}
                            onClick={() => onAdd(exercise)}
                        >
                            {isInPlan ? "In Plan" : "Add to Plan"}
                        </Button>
                    </div>
                </div>
            </article>
        </Card>
    );
};

ExerciseCard.propTypes = {
    exercise: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        muscleGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
        difficulity: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        sets: PropTypes.number.isRequired,
        reps: PropTypes.number.isRequired,
    }).isRequired,

    onSelect: PropTypes.func.isRequired,
    onAdd: PropTypes.func,
    isInPlan: PropTypes.bool,
};

export default ExerciseCard;