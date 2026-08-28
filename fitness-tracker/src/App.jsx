import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Home from "./pages/Home";
import ExercisesPage from "./pages/ExercisesPage";
import WorkoutPlannerPage from "./pages/WorkoutPlannerPage";
import ProgressPage from "./pages/ProgressPage";
import HistoryPage from "./pages/HistoryPage";
import NotFound from "./pages/NotFound";


function App(){
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/exercises" element={<ExercisesPage/>} />
        <Route path="/workout-planner" element={<WorkoutPlannerPage/>}/>
        <Route path="/progress" element={<ProgressPage/>}/>
        <Route path="/history" element={<HistoryPage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;