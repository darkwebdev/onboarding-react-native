import React, { FC, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Context from '../context';
import Title from './Title';
import Subtitle from './Subtitle';
import Screen, { ScreenProps } from './Screen';

const SuccessScreen: FC<ScreenProps> = ({}) => {
  const { goals, dueDate, activityLevel } = useContext(Context);

  return <Screen>
    <Title>Is everything correct?</Title>
    <View>
      <Subtitle>Chosen Goals</Subtitle>
      {goals.map(goal => <Text>{goal}</Text>)}

      <Subtitle>Estimated Due Date</Subtitle>
      <Text>{String(new Date(dueDate))}</Text>

      <Subtitle>Your Activity Level</Subtitle>
      <Text>{activityLevel}</Text>
    </View>
  </Screen>
};

const styles = StyleSheet.create({
});

export default SuccessScreen;
