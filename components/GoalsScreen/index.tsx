import React, { FC, useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Title from '../Title';
import Subtitle from '../Subtitle';
import BottomButton from '../BottomButton';
import GoalSwitch from './GoalSwitch';
import Context, { Goals } from '../../context';
import Screen, { ScreenProps } from '../Screen';
import { selectedGoals, State } from './utils';

const GoalsScreen: FC<ScreenProps> = ({ navigation }) => {
  const [state, setState] = useState<State>({});
  const { setGoals } = useContext(Context);

  const onGoalChange = (goal: keyof State) => (value: boolean) => {
    setState(state => ({ ...state, [goal]: value }));
  };

  useEffect(() => {
    setGoals(selectedGoals(state));
  }, [state]);

  return <Screen>
    <Title>What are your goals?</Title>
    <Subtitle>Help us tailor our program to your needs.</Subtitle>
    <View style={styles.selectionList}>
      {Object.entries(Goals).map(([key, text]) =>
        <GoalSwitch
          value={!!state[key as Goals]}
          onChange={onGoalChange(key as Goals)}
          text={text}
          key={key}
        />
      )}
    </View>
    <BottomButton
        disabled={!Object.values(state).some(goal => goal)}
        onPress={() => { navigation.navigate('DueDate'); }}
    />
  </Screen>;
};

const styles = StyleSheet.create({
  selectionList: {
    width: '100%',
    paddingRight: 10
  }
});

export default GoalsScreen;
