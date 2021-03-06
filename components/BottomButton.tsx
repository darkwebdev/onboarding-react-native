import React, { FC, ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, View } from 'react-native';

type Props = {
  size?: number;
  color?: string;
  style?: ViewStyle;
  onPress?: () => void;
  disabled?: boolean;
  children?: ReactNode;
};

const BottomButton: FC<Props> = ({
  size= 20,
  color = '#FFFFFF',
  style = {},
  disabled,
  onPress = () => {},
  children= 'Continue'
}) =>
  <View style={styles.footer}>
    <TouchableOpacity
      style={[
        styles.cta,
        style,
        { backgroundColor: disabled ? '#9ADCD766' : style.backgroundColor || '#9ADCD7' }
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={{ color, fontSize: size }}>{children}</Text>
    </TouchableOpacity>
  </View>;

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  cta: {
    alignItems: 'center',
    width: '100%',
    padding: 20
  }
});

export default BottomButton;
