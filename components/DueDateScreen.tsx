import React, { FC, useContext } from 'react';
import { StyleSheet } from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import Subtitle from './Subtitle';
import BottomButton from './BottomButton';
import Screen, { ScreenProps } from './Screen';
import Context from '../context';

const MsIn9Months: number = 9 * 31 * 24 * 60 * 60 * 1000;

const DueDateScreen: FC<ScreenProps> = ({ navigation }) => {
  const { dueDate, setDueDate } = useContext(Context);

  const onChange = (event: Event, selectedDate: Date | undefined) => {
    setDueDate(selectedDate!);
  };

  return <Screen>
    <Subtitle>Select your estimated due date</Subtitle>
    <DateTimePicker
      value={dueDate!}
      minimumDate={new Date()}
      maximumDate={new Date(Date.now() + MsIn9Months)}
      onChange={onChange}
      style={styles.datePicker}
    />
    <BottomButton onPress={() => { navigation.navigate('ActivityLevel'); }} />
  </Screen>;
};

const styles = StyleSheet.create({
  datePicker: {
    width:'100%'
  }
});

export default DueDateScreen;
