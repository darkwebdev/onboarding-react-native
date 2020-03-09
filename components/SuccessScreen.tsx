import React, { FC, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Context from '../context';
import Title from './Title';
import Subtitle from './Subtitle';
import Screen, { ScreenProps } from './Screen';

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const SuccessScreen: FC<ScreenProps> = ({}) => {
  const { goals, dueDate, activityLevel } = useContext(Context);

  return <Screen>
    <Title>Is everything correct?</Title>
    <View>
      <View style={styles.result}>
        <Subtitle>Chosen Goals</Subtitle>
        {goals.map((goal, i) =>
          <Text key={i}>✓ {goal}</Text>
        )}
      </View>

      <View style={styles.result}>
        <Subtitle>Estimated Due Date</Subtitle>
        <Text>{new Date(dueDate).toLocaleDateString(undefined, dateOptions)}</Text>
      </View>

      <View style={styles.result}>
        <Subtitle>Chosen Activity Level</Subtitle>
        <Text>{activityLevel}</Text>
      </View>
    </View>
  </Screen>;
};

const styles = StyleSheet.create({
  result: {
    marginLeft: -60,
    marginBottom: 30
  }
});

export default SuccessScreen;
