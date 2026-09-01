import { describe } from 'vitest';
import {formatDuration, calculateTotalCalories, calculateTotalWeight, getStreak} from './helpers';

describe("formatDuration", () => {
    test("should format duration",() => 
        expect(formatDuration(10)).toBe('10 min')
    );
});

describe("calculateTotalCalories", () => {
    test("should calculate calories",() => 
        expect(calculateTotalCalories([{caloriesBurn:20},{caloriesBurn:30}])).toBe(50)
    );
})

describe("calculateTotalWeight", () => {
    test("should calculate total weight",() => 
        expect(calculateTotalWeight({sets:3,reps:10,weight:5})).toBe(150)
    );
});

describe("getStreak", () => {
    test("should calculate streak",() => 
        expect(getStreak([{date:'2026-08-31'},{date:'2026-08-30'}])).toBe(2)
    );
})

