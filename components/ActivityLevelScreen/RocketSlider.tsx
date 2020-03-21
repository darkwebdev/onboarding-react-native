import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Slider from '@ptomasroos/react-native-multi-slider';

type Props = {
  value: number;
  onChange: (level: number) => void;
};

const levelPosition = (value: number): number => (value - 1) * 70 - 88;

const customMarker = () => <Image source={require('../../assets/rocket.png')} />;

// todo: show custom slider track
const RocketSlider: FC<Props> = ({ value, onChange }) =>
  <View style={{ position: 'relative' }}>
    <Slider
      style={styles.slider}
      vertical
      min={1}
      max={5}
      step={1}
      snapped
      // minimumTrackTintColor="#FFFFFF"
      // maximumTrackTintColor="#9ADCD7"
      onValuesChange={([v]) => onChange(v)}
      values={[value]}
      customMarker={customMarker}
      // thumbImage={require('../../assets/rocket-hor.png')}
      imageBackgroundSource={require('../../assets/scale.png')}
    />
    <Text style={[styles.levelNumber, { bottom: levelPosition(value) }]}>
      {value}
    </Text>
  </View>;

const styles = StyleSheet.create({
  scale: {
    position: 'absolute',
    alignSelf: 'center'
  },
  slider: {
    width: '100%',
    height: '100%'
  },
  levelNumber: {
    position: 'absolute',
    paddingRight: 2,
    alignSelf: 'center',
    fontSize: 18
  }
});

export default RocketSlider;
