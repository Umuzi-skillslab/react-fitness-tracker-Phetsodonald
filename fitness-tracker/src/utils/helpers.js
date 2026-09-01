export const formatDuration = minutes => {
    return `${minutes} min`
}

export const calculateTotalCalories = exercises => {
    return exercises.reduce((previousValue, currentValue) => {
        previousValue + Number(currentValue.caloriesBurn || 0), 0
    });
};

export const calculateTotalWeight = workout => {
    return (workout ?.sets || 0) * (workout ?.reps || 0) * (workout ?.weight || 0);
}