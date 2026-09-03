import {useEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import ExercisesPage from './pages/ExercisesPage';
import ExerciseDetailPage from './pages/ExerciseDetailPage';
import WorkoutPlannerPage from './pages/WorkoutPlannerPage';
import HistoryPage from './pages/HistoryPage';
import ProgressPage from './pages/ProgressPage';
import NotFound from './pages/NotFound';
import {exercisesData} from './data/exercisesData';
import useLocalStorage from './hooks/useLocalStorage';

const emptyPlan={
    monday:[],
    tuesday:[],
    wednesday:[],
    thursday:[],
    friday:[],
    saturday:[],
    sunday:[]
};

const App = ()=>{
    const [workoutPlan,setWorkoutPlan]= useLocalStorage('workoutPlan',emptyPlan);
    const [history,setHistory]=useLocalStorage('workoutHistory',[]);
    useEffect(()=>{if(!workoutPlan||typeof workoutPlan!=='object')setWorkoutPlan(emptyPlan)},[]);
    const addToPlan=exercise=>setWorkoutPlan(prev=>({...prev,monday:[...(prev.monday||[]),exercise]}));
    const removeFromPlan=(day,id)=>setWorkoutPlan(prev=>({...prev,[day.toLowerCase()]:prev[day.toLowerCase()].filter(e=>e.id!==id)}));
    const clearDay=day=>setWorkoutPlan(prev=>({...prev,[day.toLowerCase()]:[]}));
    const logWorkout=workout=>setHistory(prev=>[workout,...prev]);
    const deleteLog=id=>setHistory(prev=>prev.filter(w=>w.id!==id));
    
    return <BrowserRouter>
        {/* <Header/> */}
        <main className="container">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/exercises" element={<ExercisesPage workoutPlan={workoutPlan} onAdd={addToPlan}/>}/>
                <Route path="/exercises/:id" element={<ExerciseDetailPage onAdd={addToPlan}/>}/>
                <Route path="/workout-planner" element={<WorkoutPlannerPage workoutPlan={workoutPlan} onRemove={removeFromPlan} onClear={clearDay}/>}/>
                <Route path="/history" element={<HistoryPage history={history} exercises={exercisesData} onLog={logWorkout} onDelete={deleteLog}/>}/>
                <Route path="/progress" element={<ProgressPage history={history} workoutPlan={workoutPlan}/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </main>
        <Footer/>
        </BrowserRouter>
};

export default App;
