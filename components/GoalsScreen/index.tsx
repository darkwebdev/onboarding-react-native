import React, { FC, useState } from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import BottomBox from '../BottomBox';
import Title from '../Title';
import Subtitle from '../Subtitle';
import BottomButton from '../BottomButton';
import { RootStackParamList } from '../screens';
import SelectionItem from './SelectionItem';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Goals'>;
}

const GoalsScreen:FC<Props> = ({ navigation }) => {
  const [findWorkouts, setFindWorkouts] = useState(false);
  const [lessWeight, setLessWeight] = useState(false);
  const [prepareBirth, setPrepareBirth] = useState(false);
  const [feelRelaxed, setFeelRelaxed] = useState(false);

  const selectionProps = [{
    value: findWorkouts,
    onChange: setFindWorkouts,
    text: 'Find workouts for my pregnancy'
  }, {
    value: lessWeight,
    onChange: setLessWeight,
    text: 'Not to gain unnecessary weight'
  }, {
    value: prepareBirth,
    onChange: setPrepareBirth,
    text: 'Prepare for birth'
  }, {
    value: feelRelaxed,
    onChange: setFeelRelaxed,
    text: 'Feel more relaxed'
  }];

// todo: fix background to be aligned to top
  return <ImageBackground
    source={require('../../assets/background_image.png')}
    style={styles.bg}>
    <BottomBox>
      <Title>What are your goals?</Title>
      <Subtitle>Help us tailor our program to your needs.</Subtitle>
      <View style={styles.selectionList}>
        {selectionProps.map((props, i) =>
          <SelectionItem {...props} key={i} />
        )}
      </View>
      <BottomButton
          disabled={!selectionProps.some(({ value }) => value === true)}
          onPress={() => navigation.navigate('DueDate')}
      />
    </BottomBox>
  </ImageBackground>
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%'
  },
  selectionList: {
    width: '100%'
  }
});

export default GoalsScreen;
