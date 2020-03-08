import React, { FC, useContext, useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../screens';
import BottomButton from '../BottomButton';
import Title from '../Title';
import RocketSlider from './RocketSlider';
import Context, { levels } from '../../context';

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

  return <ImageBackground
    source={require('../../assets/clouds.png')}
    style={styles.bg}>
    <View style={styles.box}>
      <Title>To get your perfect workouts, tell us your activity level!</Title>
      <RocketSlider value={level} onChange={onChange}/>
      <Text style={styles.levelText}>{activityLevel}</Text>
      <BottomButton onPress={() => { navigation.navigate('Success'); }} />
    </View>
  </ImageBackground>;
};

const styles = StyleSheet.create({
  bg: {
    width: '100%',
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
