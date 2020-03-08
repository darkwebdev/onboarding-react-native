import React, { FC, useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../Screen';
import BottomButton from '../BottomButton';
import Title from '../Title';
import RocketSlider from './RocketSlider';
import Context, { levels } from '../../context';
import Screen from '../Screen';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'ActivityLevel'>;
}

const DefaultLevel = 4;

const ActivityLevelScreen:FC<Props> = ({ navigation }) => {
  const { activityLevel, setActivityLevel } = useContext(Context);
  const [ level, setLevel ] = useState(DefaultLevel);

  const onChange = (value: number) => {
    setLevel(value);
    setActivityLevel(levels[value-1]);
  };

  return <Screen bg={require('../../assets/clouds.png')} noBox={true} style={styles.bg}>
    <View style={styles.box}>
      <Title>To get your perfect workouts, tell us your activity level!</Title>
      <RocketSlider value={level} onChange={onChange}/>
      <Text style={styles.levelText}>{activityLevel}</Text>
      <BottomButton onPress={() => { navigation.navigate('Success'); }} />
    </View>
  </Screen>;
};

const styles = StyleSheet.create({
  bg: {
    height: '80%'
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 90
  },
  levelText: {
    fontSize: 20
  }
});

export default ActivityLevelScreen;
