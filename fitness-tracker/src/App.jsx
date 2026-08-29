import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import ExercisesPage from "./pages/ExercisesPage";
import WorkoutPlannerPage from "./pages/WorkoutPlannerPage";
import ProgressPage from "./pages/ProgressPage";
import HistoryPage from "./pages/HistoryPage";
import NotFound from "./pages/NotFound";


function App(){
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/exercises" element={<ExercisesPage/>} />
        <Route path="/workout-planner" element={<WorkoutPlannerPage/>}/>
        <Route path="/progress" element={<ProgressPage/>}/>
        <Route path="/history" element={<HistoryPage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;