import {useParams,useNavigate} from 'react-router-dom';
import Header from '../components/common/Header';
import ExerciseDetail from '../components/Exercise/ExerciseDetail';
import {exercisesData} from '../data/exercisesData';

const ExerciseDetailPage=({onAdd})=>{
    const {id}=useParams();
    const navigate=useNavigate();
    const exercise=exercisesData.find(e=>e.id===Number(id));
    return exercise?<>
        <Header title="Exercise Details"/>
        <ExerciseDetail exercise={exercise} onBack={()=>navigate('/exercises')} onAdd={onAdd}/></>:<>
        <Header title="Exercise not found"/>
        <button onClick={()=>navigate('/exercises')}>Back to Exercises</button>
        </>
};
        
        
export default ExerciseDetailPage;
