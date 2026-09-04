import PropTypes from 'prop-types';
import Card from '../UI/Card';
import Button from '../UI/Button';
import EmptyState from '../UI/EmptyState';
import styles from './WorkoutPlanner.module.css';

const DayCard=({day,exercises,onRemove,onClear})=>
<Card title={day} >
    <div className={styles.day}>{exercises.length?exercises.map(ex=>
        <div className={styles.exercise} key={ex.id}>
            <span>{ex.name}</span>
            <Button variant="danger" onClick={()=>onRemove(day,ex.id)}>Remove</Button>
        </div>):<EmptyState message="No exercises planned"/>}{exercises.length>0&&<Button variant="secondary" onClick={()=>onClear(day)}>Clear Day</Button>}
    </div>
</Card>;

DayCard.propTypes={
    day:PropTypes.string.isRequired,
    exercises:PropTypes.array.isRequired,
    onRemove:PropTypes.func.isRequired,
    onClear:PropTypes.func.isRequired
};

export default DayCard;