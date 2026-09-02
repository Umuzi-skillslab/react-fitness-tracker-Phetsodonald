import PropTypes from "prop-types";
import ExerciseCard from "./ExerciseCard";
import Loading from "../UI/Loading";
import EmptyState from "../UI/EmptyState";
import styles from "./Exercise.module.css";


const ExerciseList = ({exercises, isLoading=false, error="", onSelect, onAdd, workoutPlan=[]}) => {
    if (isLoading){
        return (
            <Loading message="Loading exercises..."/>
        )
    }

    if(error){
        return(
            <p role="alert">{error}</p>
        )
    }

    return (exercises.length > 0 ? <div className={styles.grid}>{exercises.map(exercise => <ExerciseCard key={exercise.id} onSelect={onSelect} onAdd={onAdd} isInPlan={workoutPlan.some(item => item.id === exercise.id)} />)}</div> : <EmptyState message="No exercises found"/>)
    
}

ExerciseList.propTypes={
    exercises:PropTypes.array.isRequired,
    isLoading:PropTypes.bool,
    error:PropTypes.string,
    onSelect:PropTypes.func.isRequired,
    onAdd:PropTypes.func,
    workoutPlan:PropTypes.array
};

export default ExerciseList;