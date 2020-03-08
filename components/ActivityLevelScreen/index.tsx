import React, { FC, useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BottomButton from '../BottomButton';
import Title from '../Title';
import RocketSlider from './RocketSlider';
import Context, { levels } from '../../context';
import Screen, { ScreenProps } from '../Screen';

const DefaultLevel = 4;

const ActivityLevelScreen: FC<ScreenProps> = ({ navigation }) => {
  const { activityLevel, setActivityLevel } = useContext(Context);
  const [ level, setLevel ] = useState(DefaultLevel);

  useEffect(() => {
    setActivityLevel(levels[level-1]);
  }, [level]);

  return <Screen bg={require('../../assets/clouds.png')} noBox={true} style={styles.bg}>
    <View style={styles.box}>
      <Title>To get your perfect workouts, tell us your activity level!</Title>
      <RocketSlider value={level} onChange={setLevel}/>
      <Text style={styles.levelText}>{activityLevel}</Text>
      <BottomButton
        onPress={() => { navigation.navigate('Success'); }}
      />
    </View>
  </Screen>;
};

const styles = StyleSheet.create({
  bg: {
    top: '30%',
    height: '40%'
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
