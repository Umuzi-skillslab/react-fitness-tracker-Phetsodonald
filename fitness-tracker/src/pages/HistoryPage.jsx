import Header from '../components/common/Header';
import WorkoutLog from '../components/WorkoutLog/WorkoutLog';

const HistoryPage=({history,exercises,onLog,onDelete})=> <>
    <Header title="Workout History" subtitle="Log completed sessions and review your recent activity."/>
    <WorkoutLog history={history} exercises={exercises} onLog={onLog} onDelete={onDelete}/>
    </>;
    
export default HistoryPage;