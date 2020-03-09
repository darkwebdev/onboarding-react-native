import { Goals } from '../../context';

export type State = {
  [key in Goals]?: boolean;
};

export function selectedGoals(state: State): Goals[] {
  return Object.entries(Goals).reduce<Goals[]>((all, [key, text]) =>
      all.concat(state[key as Goals] ? [text] : []),
    []);
}
