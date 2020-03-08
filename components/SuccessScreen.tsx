import React, { FC, useContext } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Context from '../context';
import BottomBox from './BottomBox';
import Title from './Title';
import Subtitle from './Subtitle';

const SuccessScreen:FC = () => {
  const { goals, dueDate, activityLevel } = useContext(Context);

  return <ImageBackground
    source={require('../assets/background_image.png')}
    style={styles.bg}>
    <BottomBox>
      <Title>Is everything correct?</Title>
      <View>
        <Subtitle>Chosen Goals</Subtitle>
        {goals.map(goal => <Text>{goal}</Text>)}

        <Subtitle>Estimated Due Date</Subtitle>
        <Text>{String(new Date(dueDate))}</Text>

        <Subtitle>Your Activity Level</Subtitle>
        <Text>{activityLevel}</Text>
      </View>
    </BottomBox>
  </ImageBackground>;
};

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%'
  },
  selectionList: {
    width: '100%'
  }
});

export default SuccessScreen;
