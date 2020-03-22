import React, { FC } from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

type Props = {
  value: number;
  onChange: (level: number) => void;
};

const levelPosition = (value: number): number => (value - 1) * 50 - 48;

const customMarker = () => <Image
  style={{ marginTop: 12 }}
  source={require('../../assets/rocket.png')}
/>;

const RocketSlider: FC<Props> = ({ value, onChange }) =>
  <View style={{ position: 'relative' }}>
    <MultiSlider
      sliderLength={200}
      vertical
      min={1}
      max={5}
      step={1}
      snapped
      onValuesChange={([v]: number[]) => onChange(v)}
      values={[value]}
      customMarker={customMarker}
      selectedStyle={{ backgroundColor: '#DEF4F2' }}
      unselectedStyle={{ backgroundColor: '#69C0BA' }}
      trackStyle={styles.track}
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
  track: {
    height: 10,
    borderRadius: 10
  },
  levelNumber: {
    position: 'absolute',
    paddingRight: 2,
    alignSelf: 'center',
    fontSize: 18
  }
});

export default RocketSlider;
