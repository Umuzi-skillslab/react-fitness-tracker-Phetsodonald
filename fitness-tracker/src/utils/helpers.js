export const formatDuration = minutes => {
    return `${minutes} min`
}

export const calculateTotalCalories = exercises => {
    return exercises.reduce((previousValue, currentValue) => {
        previousValue + Number(currentValue.caloriesBurn || 0), 0
    });
};

