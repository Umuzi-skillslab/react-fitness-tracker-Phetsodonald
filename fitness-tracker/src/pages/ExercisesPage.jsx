import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import SearchBar from "../components/UI/SearchBar";
import ExerciseFilter from "../components/Exercise/ExerciseFilter";
import ExerciseList from "../components/Exercise/ExerciseList";
import { exercisesData } from "../data/exercisesData";

const ExercisesPage = ({workoutPlan, onAdd}) => {
    const [exercises, setExercises] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('all');
    const [muscleGroup, setMuscleGroup] = useState('all');
    const [difficulty, setDifficulty] = useState('all');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const timer = setTimeout(()=>{
            try{
                setExercises(exercisesData);
                setIsLoading(false)}
            catch{setError('Failed to load exercises');
            setIsLoading(false)}},200);
            return()=>clearTimeout(timer)},[]
        );

        const filtered=useMemo(()=>exercises.filter(e=>(e.name.toLowerCase().includes(searchTerm.toLowerCase()))&&(category==='all'||e.category===category)&&(muscleGroup==='all'||e.muscleGroups.includes(muscleGroup))&&(difficulty==='all'||e.difficulty===difficulty)),[exercises,searchTerm,category,muscleGroup,difficulty]);
        const clear=()=>{setSearchTerm('');setCategory('all');setMuscleGroup('all');setDifficulty('all')};return <><Header title="Browse Exercises" subtitle="Search, filter, and choose exercises for your plan."/><SearchBar onSearch={setSearchTerm} onClear={clear}/><ExerciseFilter category={category} muscleGroup={muscleGroup} difficulty={difficulty} onCategoryChange={e=>setCategory(e.target.value)} onMuscleChange={e=>setMuscleGroup(e.target.value)} onDifficultyChange={e=>setDifficulty(e.target.value)}/><ExerciseList exercises={filtered} isLoading={isLoading} error={error} workoutPlan={Object.values(workoutPlan).flat()} onSelect={id=>navigate(`/exercises/${id}`)} onAdd={onAdd}/></>
};

export default ExercisesPage;