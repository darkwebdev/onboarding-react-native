import React, { FC, useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Title from '../Title';
import Subtitle from '../Subtitle';
import BottomButton from '../BottomButton';
import SelectionItem from './SelectionItem';
import Context, { goals } from '../../context';
import Screen, { ScreenProps } from '../Screen';

type GoalIndex = 'findWorkouts' | 'lessWeight' | 'prepareBirth' | 'feelRelaxed';

type State = {
  [index in GoalIndex]?: boolean;
}

const GoalsScreen: FC<ScreenProps> = ({ navigation }) => {
  const [{ findWorkouts, lessWeight, prepareBirth, feelRelaxed }, setState] = useState<State>({});
  const { setGoals } = useContext(Context);

  const onChange = (goal: keyof State) => (value: boolean) => {
    setState(state => ({ ...state, [goal]: value }));
  };

  const selectionProps = [{
    value: findWorkouts,
    onChange: onChange('findWorkouts')
  }, {
    value: lessWeight,
    onChange: onChange('lessWeight')
  }, {
    value: prepareBirth,
    onChange: onChange('prepareBirth')
  }, {
    value: feelRelaxed,
    onChange: onChange('feelRelaxed')
  }];

  const selectedGoals = () =>
    selectionProps.reduce((all, { value }, i) => [...all, value ? goals[i] : []], []);

// todo: fix background to be aligned to top
  return <Screen>
    <Title>What are your goals?</Title>
    <Subtitle>Help us tailor our program to your needs.</Subtitle>
    <View style={styles.selectionList}>
      {selectionProps.map(({ value, onChange }, i) =>
        <SelectionItem value={value} onChange={onChange} text={goals[i]} key={i} />
      )}
    </View>
    <BottomButton
        disabled={!selectionProps.some(({ value }) => value === true)}
        onPress={() => {
          setGoals(selectedGoals());
          navigation.navigate('DueDate');
        }}
    />
  </Screen>
};

const styles = StyleSheet.create({
  selectionList: {
    width: '100%'
  }
});

export default GoalsScreen;
