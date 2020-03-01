import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

type Props = {
  text: string;
  size?: number;
  color?: string;
  style?: ViewStyle;
  onPress: () => void;
  disabled: boolean;
}

export default ({
  text,
  size= 20,
  color = '#FFFFFF',
  style = {},
  disabled,
  onPress
}: Props) =>
  <TouchableOpacity
    style={{ ...styles.cta, ...style, backgroundColor: disabled ? '#9ADCD766' : style.backgroundColor || '#9ADCD7' }}
    disabled={disabled}
    onPress={onPress}
  >
    <Text style={{ color, fontSize: size }}>{text}</Text>
  </TouchableOpacity>

const styles = StyleSheet.create({
  cta: {
    alignItems: 'center',
    width: '100%',
    padding: 20
  }
});
