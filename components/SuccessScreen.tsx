import React, { FC, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Context from '../context';
import Title from './Title';
import SubTitle from './SubTitle';
import Screen, { ScreenProps } from './Screen';
import BottomButton from './BottomButton';

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
        <SubTitle>Chosen Goals</SubTitle>
        {goals.map((goal, i) =>
          <Text key={i} style={styles.text}>✓ {goal}</Text>
        )}
      </View>

      <View style={styles.result}>
        <SubTitle>Estimated Due Date</SubTitle>
        <Text style={styles.text}>{new Date(dueDate).toLocaleDateString(undefined, dateOptions)}</Text>
      </View>

      <View style={styles.result}>
        <SubTitle>Chosen Activity Level</SubTitle>
        <Text style={styles.text}>{activityLevel}</Text>
      </View>
    </View>
    <BottomButton
      disabled={true}
    />
  </Screen>;
};

const styles = StyleSheet.create({
  result: {
    marginLeft: -60,
    marginBottom: 30
  },
  text: {
    textAlign: 'center'
  }
});

export default SuccessScreen;
