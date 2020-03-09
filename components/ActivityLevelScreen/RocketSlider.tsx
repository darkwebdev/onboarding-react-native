import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

type Props = {
  value: number;
  onChange: (level: number) => void;
  width?: number | string;
  height?: number | string;
};

// todo: show custom slider track
// todo: show rocket on android
const RocketSlider: FC<Props> = ({ value, width = 500, height= 500, onChange }) =>
  <View style={{ position: 'relative' }}>
    <Slider
      style={[
        styles.slider,
        { width: height, height: width }
      ]}
      minimumValue={1}
      maximumValue={5}
      step={1}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#9ADCD7"
      onValueChange={onChange}
      value={value}
      thumbImage={require('../../assets/rocket-hor.png')}
    />
    <Text style={[styles.levelNumber, { bottom: 200 + (value - 1) * 38 }]}>
      {value}
    </Text>
  </View>;

const styles = StyleSheet.create({
  scale: {
    position: 'absolute',
    alignSelf: 'center'
  },
  slider: {
    transform: [{
      rotate: '-90deg'
    }]
  },
  levelNumber: {
    position: 'absolute',
    paddingRight: 2,
    alignSelf: 'center',
    fontSize: 18
  }
});

export default RocketSlider;
