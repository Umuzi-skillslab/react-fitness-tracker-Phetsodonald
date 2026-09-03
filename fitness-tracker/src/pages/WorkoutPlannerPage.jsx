import Header from '../components/common/Header';
import WorkoutPlanner from '../components/WorkoutPlanner/WorkoutPlanner';

const WorkoutPlannerPage=({workoutPlan,onRemove,onClear})=><><Header title="Weekly Workout Planner" subtitle="Your seven-day training schedule."/>
<WorkoutPlanner workoutPlan={workoutPlan} onRemove={onRemove} onClear={onClear}/>
</>;

export default WorkoutPlannerPage;