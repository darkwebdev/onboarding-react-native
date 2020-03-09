import { createContext } from 'react';

export enum Goals {
  FindWourkouts = 'Find workouts for my pregnancy',
  LessWeight = 'Not to gain unnecessary weight',
  PrepareBirth = 'Prepare for birth',
  FeelRelaxed = 'Feel more relaxed'
}

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
  goals: Goals[];
  setGoals: (goals: Goals[]) => void;
  dueDate?: Date;
  setDueDate: (date: Date) => void;
  activityLevel?: Level;
  setActivityLevel: (level: Level) => void;
}

const Context = createContext<Context>({
  goals: [],
  setGoals: () => {},
  dueDate: new Date(),
  setDueDate: () => {},
  activityLevel: undefined,
  setActivityLevel: () => {}
});

export default Context;
