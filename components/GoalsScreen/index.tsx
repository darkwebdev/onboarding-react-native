import React, { FC, useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Title from '../Title';
import Subtitle from '../Subtitle';
import BottomButton from '../BottomButton';
import GoalSwitch from './GoalSwitch';
import Context, { goals } from '../../context';
import Screen, { ScreenProps } from '../Screen';

const goalIndexes = [ 'findWorkouts', 'lessWeight', 'prepareBirth', 'feelRelaxed'] as const;
type GoalIndexType = typeof goalIndexes;
type GoalIndex = GoalIndexType[number];

type State = {
  [index in GoalIndex]?: boolean;
}

const GoalsScreen: FC<ScreenProps> = ({ navigation }) => {
  const [{ findWorkouts, lessWeight, prepareBirth, feelRelaxed }, setState] = useState<State>({});
  const { setGoals } = useContext(Context);

  const onGoalChange = (goal: keyof State) => (value: boolean) => {
    setState(state => ({ ...state, [goal]: value }));
  };

  const goalSwitches = [ findWorkouts, lessWeight, prepareBirth, feelRelaxed ];

  return <Screen>
    <Title>What are your goals?</Title>
    <Subtitle>Help us tailor our program to your needs.</Subtitle>
    <View style={styles.selectionList}>
      {goalSwitches.map((goal, i) =>
        <GoalSwitch value={goal} onChange={onGoalChange(goalIndexes[i])} text={goals[i]} key={i} />
      )}
    </View>
    <BottomButton
        disabled={!goalSwitches.some(goal => goal)}
        onPress={() => {
          setGoals(selectedGoals(goalSwitches));
          navigation.navigate('DueDate');
        }}
    />
  </Screen>
};

function selectedGoals(goalSwitches) {
  return goalSwitches.reduce((all, goal, i) => [...all, goal ? goals[i] : []], []);
}

const styles = StyleSheet.create({
  selectionList: {
    width: '100%'
  }
});

export default GoalsScreen;
