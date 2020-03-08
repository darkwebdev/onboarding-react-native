import React, { FC, useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { StackNavigationProp } from '@react-navigation/stack';

import Subtitle from './Subtitle';
import BottomButton from './BottomButton';
import Screen, { RootStackParamList } from './Screen';
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

  return <Screen>
    <Subtitle>Select your estimated due date</Subtitle>
    <DateTimePicker
      value={dueDate}
      onChange={onChange}
      style={styles.datePicker}
    />
    <BottomButton onPress={() => { navigation.navigate('ActivityLevel')}} />
  </Screen>
};

const styles = StyleSheet.create({
  datePicker: {
    width:'100%'
  }
});

export default DueDateScreen;
