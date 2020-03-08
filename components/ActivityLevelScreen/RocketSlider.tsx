import React, { FC } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

type Props = {
  value: number;
  onChange: (level: number) => void;
}

// todo: reotate rocket 90deg, show rocket on android
const RocketSlider: FC<Props> = ({ value, onChange }) =>
  <View>
    {/*<Image source={require('../../assets/scale.png')} style={styles.scale} />*/}
    <Slider
      style={{ width: 500, height: 500, transform: [ { rotate: "-90deg" } ] }}
      minimumValue={1}
      maximumValue={5}
      step={1}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#DEF4F2"
      onValueChange={onChange}
      value={value}
      thumbImage={require('../../assets/rocket.png')}
    />
    <Text style={styles.levelNumber}>{value}</Text>
  </View>;


const styles = StyleSheet.create({
  scale: {
    position: 'absolute',
    alignSelf: 'center'
  },
  levelNumber: {
    position: 'absolute',
    top: 25,
    alignSelf: 'center',
    fontSize: 20
  }
});

export default RocketSlider;
