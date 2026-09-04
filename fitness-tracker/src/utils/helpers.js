export const formatDuration = minutes => {
    return `${minutes} min`
}

export const calculateTotalCalories = exercises =>
  exercises.reduce(
    (sum, e) => sum + Number(e.caloriesBurn || 0),
    0
  );

export const calculateTotalWeight = workout => {
    return (workout ?.sets || 0) * (workout ?.reps || 0) * (workout ?.weight || 0);
};

export const getStreak = history => {
    if (!history.length) return 0;

    const dates = history
        .map(item => item.date)
        .sort((a, b) => new Date(b) - new Date(a));

    let streak = 1;

    for (let i = 1; i < dates.length; i++) {
        const diff =
            (new Date(dates[i - 1]) - new Date(dates[i])) / 86400000;

        if (diff === 1) {
            streak++;
        } else {
            break;
        }
    }

    return streak;
};
