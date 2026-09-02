import PropTypes from "prop-types";
import Card from '../UI/Card'
import {calculateTotalWeight} from "../../utils/helpers";

const LogEntry = ({workout, onDelete}) => {
    return (
        <Card>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <strong>{workout.exerciseName}</strong>
                    <p>{workout.date} • {workout.sets} sets x {workout.reps} reps • {workout.weight} kg</p>
                    <small>Total load: {calculateTotalWeight(workout)} kg</small>
                    <button onClick={() => onDelete(workout.id)}>Delete</button>
                </div>
            </div>
        </Card>
    )
}

LogEntry.PropTypes = {
    workout: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default LogEntry;