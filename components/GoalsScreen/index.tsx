import React, { FC, useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import Title from '../Title';
import Subtitle from '../Subtitle';
import BottomButton from '../BottomButton';
import SelectionItem from './SelectionItem';
import Context, { goals } from '../../context';
import Screen, { RootStackParamList } from '../Screen';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Goals'>;
}

type State = {
  findWorkouts: boolean;
  lessWeight: boolean;
  prepareBirth: boolean;
  feelRelaxed: boolean;
}

const defaultState: State = {
  findWorkouts: false,
  lessWeight: false,
  prepareBirth: false,
  feelRelaxed: false
};

const GoalsScreen:FC<Props> = ({ navigation }) => {
  const [{ findWorkouts, lessWeight, prepareBirth, feelRelaxed }, setState] = useState<State>(defaultState);
  const { setGoals } = useContext(Context);

  const selectionProps = [{
    value: findWorkouts,
    onChange: value => setState(state => ({...state, findWorkouts: value }))
  }, {
    value: lessWeight,
    onChange: value => setState(state => ({...state, lessWeight: value }))
  }, {
    value: prepareBirth,
    onChange: value => setState(state => ({...state, prepareBirth: value }))
  }, {
    value: feelRelaxed,
    onChange: value => setState(state => ({...state, feelRelaxed: value }))
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
