import { createContext } from 'react';

export const goals = [
  'Find workouts for my pregnancy',
  'Not to gain unnecessary weight',
  'Prepare for birth',
  'Feel more relaxed'
] as const;
type GoalType = typeof goals;
export type Goal = GoalType[number];

export const levels = [
  'I don’t exercise.',
  'I rarely exercise.',
  'I sometimes exercise.',
  'I regularly exercise.',
  'I often exercise.'
] as const;
type LevelType = typeof levels;
export type Level = LevelType[number];

type Context = {
  goals: Goal[];
  setGoals: (goals: Goal[]) => void;
  dueDate?: Date;
  setDueDate: (date: Date) => void;
  activityLevel?: Level;
  setActivityLevel: (level: Level) => void;
}

export default createContext<Context>({
  goals: [],
  setGoals: () => {},
  dueDate: new Date(),
  setDueDate: () => {},
  activityLevel: undefined,
  setActivityLevel: () => {}
});
