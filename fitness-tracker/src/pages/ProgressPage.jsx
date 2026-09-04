import Header from '../components/common/Header';
import Card from '../components/UI/Card';
import ProgressChart from '../components/WorkoutLog/ProgressChart';
import {calculateTotalCalories,getStreak} from '../utils/helpers';

const ProgressPage=({history,workoutPlan})=>{
    const planned=Object.values(workoutPlan).flat();
    return <><Header title="Progress" subtitle="A quick snapshot of your consistency."/>
    <div className="stats">
        <Card title="Workouts">
            <strong>
                {history.length}
            </strong>
        </Card>
        <Card title="Exercises Planned">
            <strong>
                {planned.length}
            </strong>
        </Card>
        <Card title="Estimated Calories">
            <strong>
                {calculateTotalCalories(planned)}
            </strong>
        </Card>
        <Card title="Streak">
            <strong>
                {getStreak(history)} days
            </strong>
        </Card>
    </div>
    <ProgressChart history={history}/>
    </>
};

export default ProgressPage;