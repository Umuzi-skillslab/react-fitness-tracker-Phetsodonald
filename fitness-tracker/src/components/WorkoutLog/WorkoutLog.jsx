import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../UI/Button";
import EmptyState from "../UI/EmptyState";
import LogEntry from "./LogEntry";
import styles from "./WorkoutLog.module.css";

const WorkoutLog = ({history, exercises, onLog, onDelete}) => {
    const [exerciseId, setExerciseId] = useState(exercises[0]?.id || "");
    const [sets, setSets] = useState(3);
    const [reps, setReps] = useState(10);
    const [weight, setWeight] = useState(0);
    const submit=e=>{
        e.preventDefault();
        const exercise=exercises.find(x=>x.id===Number(exerciseId));
        if(exercise)onLog({exerciseId:exercise.id,exerciseName:exercise.name,sets:Number(sets),reps:Number(reps),weight:Number(weight),date:new Date().toISOString().slice(0,10),id:Date.now()})};
        return <div>
            <form className={styles.form} onSubmit={submit}>
                <select value={exerciseId} onChange={e=>setExerciseId(e.target.value)}>{exercises.map(e=>
                    <option key={e.id} value={e.id}>{e.name}</option>)}
                </select>
                <input type="number" min="1" value={sets} onChange={e=>setSets(e.target.value)} placeholder="Sets"/>
                <input type="number" min="1" value={reps} onChange={e=>setReps(e.target.value)} placeholder="Reps"/>
                <input type="number" min="0" value={weight} onChange={e=>setWeight(e.target.value)} placeholder="Weight"/>
                <Button type="submit">Log Workout</Button>
                
            </form>
            <div className={styles.logs}>{history.length?history.map(w=><LogEntry key={w.id} workout={w} onDelete={onDelete}/>):<EmptyState message="No workouts logged yet."/>}
            </div>
            </div>
            };


WorkoutLog.propTypes={
    history:PropTypes.array.isRequired,
    exercises:PropTypes.array.isRequired,
    onLog:PropTypes.func.isRequired,
    onDelete:PropTypes.func.isRequired
};


export default WorkoutLog;