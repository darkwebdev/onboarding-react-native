import React, { FC, useContext } from 'react';
import { StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';

import SubTitle from './SubTitle';
import BottomButton from './BottomButton';
import Screen, { ScreenProps } from './Screen';
import Context from '../context';

const MsIn9Months: number = 9 * 31 * 24 * 60 * 60 * 1000;
const today: Date = new Date();
const todayPlus9Month: Date = new Date(Date.now() + MsIn9Months);

const DueDateScreen: FC<ScreenProps> = ({ navigation }) => {
  const { dueDate = today, setDueDate } = useContext(Context);

  return <Screen>
    <SubTitle>Select your estimated due date</SubTitle>
    <DatePicker
      mode="date"
      date={dueDate}
      minimumDate={today}
      maximumDate={todayPlus9Month}
      onDateChange={setDueDate}
    />
    <BottomButton onPress={() => { navigation.navigate('ActivityLevel'); }} />
  </Screen>;
};

export default DueDateScreen;
