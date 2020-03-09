import { selectedGoals, State } from '../utils';
import { Goals } from '../../../context';

describe('selectedGoals', () => {
  describe('given empty state', () => {
    it('should return no goals', () => {
      const state: State = {};
      expect(selectedGoals(state)).toEqual([]);
    });
  });
  describe('given one selected goal', () => {
    it('should return that goal text', () => {
      const state: State = { ['FindWorkouts' as Goals]: true };
      expect(selectedGoals(state)).toEqual([Goals.FindWorkouts]);
    });
  });
  describe('given multiple selected goals', () => {
    it('should return all of those goals text', () => {
      const state: State = {
        ['FindWorkouts' as Goals]: false,
        ['LessWeight' as Goals]: false,
        ['PrepareBirth' as Goals]: true,
        ['FeelRelaxed' as Goals]: true
      };
      expect(selectedGoals(state)).toEqual([Goals.PrepareBirth, Goals.FeelRelaxed]);
    });
  });
});
