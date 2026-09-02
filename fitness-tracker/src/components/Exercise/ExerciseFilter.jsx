import PropTypes from "prop-types";
import styles from ",/Exercise.module.css";

const ExerciseFilter = ({category, muscleGroup, difficulity, onCategoryChange, onMuscleChange, onDifficulityChange}) => {
    return (
        <div className={styles.filters}>
            <select value={category} onChange={onCategoryChange}>
                <option value="all">All Categories</option>
                <option value="strength">Strength</option>
                <option value="cardio">Cardio</option>
                <option value="flexibility">Flexibility</option>
                <option value="balance">Balance</option>
            </select>
            <select value={muscleGroup} onChange={onMuscleChange}>
                <option value="all">All Muscles</option>
                {['chest','back','shoulders','arms','core','legs'].map(m=>
                <option key={m} value={m}>{m}</option>)}
                
            </select>
            <select value={difficulty} onChange={onDifficultyChange}>
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>
        </div>
    )
}

ExerciseFilter.propTypes={
    category:PropTypes.string.isRequired,
    muscleGroup:PropTypes.string.isRequired,
    difficulty:PropTypes.string.isRequired,
    onCategoryChange:PropTypes.func.isRequired,
    onMuscleChange:PropTypes.func.isRequired,
    onDifficultyChange:PropTypes.func.isRequired
};

export default ExerciseFilter;