import PropTypes from 'prop-types';
import DayCard from './DayCard';
import styles from './WorkoutPlanner.module.css';

const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const keyFor=d=>d.toLowerCase();

const WorkoutPlanner=({workoutPlan,onRemove,onClear})=>
<div className={styles.days}>{days.map(day=>
    <DayCard key={day} day={day} exercises={workoutPlan[keyFor(day)]||[]} onRemove={onRemove} onClear={onClear}/>)}
</div>;

WorkoutPlanner.propTypes={
    workoutPlan:PropTypes.object.isRequired,
    onRemove:PropTypes.func.isRequired,
    onClear:PropTypes.func.isRequired
};

export default WorkoutPlanner;