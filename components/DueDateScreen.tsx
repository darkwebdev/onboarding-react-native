import React, { FC, useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { StackNavigationProp } from '@react-navigation/stack';

import BottomBox from './BottomBox';
import Subtitle from './Subtitle';
import BottomButton from './BottomButton';
import { RootStackParamList } from './screens';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'DueDate'>;
  onDateChange: (date: Date) => void;
}

const DueDateScreen:FC<Props> = ({ navigation, onDateChange }) => {
  const [date, setDate] = useState(new Date());

  const onChange = (event: Event, selectedDate: Date) => {
    if (selectedDate) {
      setDate(selectedDate);
      onDateChange(selectedDate);
    }
  };

  return <ImageBackground
    source={require('../assets/background_image.png')}
    style={styles.bg}>
    <BottomBox>
      <Subtitle>Select your estimated due date</Subtitle>
      <DateTimePicker
        value={date}
        onChange={onChange}
        style={styles.datePicker}
      />
      <BottomButton onPress={() => navigation.navigate('ActivityLevel')}/>
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
