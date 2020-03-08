import React, { FC, useContext, useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { StackNavigationProp } from '@react-navigation/stack';

import BottomBox from './BottomBox';
import Subtitle from './Subtitle';
import BottomButton from './BottomButton';
import { RootStackParamList } from '../screens';
import Context from '../context';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'DueDate'>;
}

// todo: limit dates to today->9month
const DueDateScreen:FC<Props> = ({ navigation }) => {
  const { dueDate, setDueDate } = useContext(Context);

  const onChange = (event: Event, selectedDate: Date) => {
    setDueDate(selectedDate);
  };

  return <ImageBackground
    source={require('../assets/background_image.png')}
    style={styles.bg}>
    <BottomBox>
      <Subtitle>Select your estimated due date</Subtitle>
      <DateTimePicker
        value={dueDate}
        onChange={onChange}
        style={styles.datePicker}
      />
      <BottomButton onPress={() => { navigation.navigate('ActivityLevel')}} />
    </BottomBox>
  </ImageBackground>
};

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%'
  },
  selectionList: {
    width: '100%',
    marginBottom: 60
  },
  datePicker: {
    width:'100%'
  }
});

export default DueDateScreen;
