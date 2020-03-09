import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { Goal } from '../../context';

type Props = {
  value: boolean;
  onChange: (value: boolean) => void;
  text: Goal;
};

const GoalSwitch = ({ value, onChange, text }: Props) =>
  <View style={styles.selection}>
    <Switch
      value={value}
      onValueChange={onChange}
      ios_backgroundColor="#9ADCD766"
      trackColor={{ false: '#9ADCD766', true: '#9ADCD7' }}
    />
    <Text style={styles.selectionText}>{text}</Text>
  </View>;

const styles = StyleSheet.create({
  selection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  selectionText: {
    padding: 20,
    fontSize: 20
  }
});

export default GoalSwitch;
