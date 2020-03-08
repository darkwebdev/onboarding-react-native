import React, { FC, ReactNode } from 'react';
import { ImageBackground, StyleSheet, ImageStyle, ImageSourcePropType } from 'react-native';
import BottomBox from './BottomBox';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Goals: undefined;
  DueDate: undefined;
  ActivityLevel: undefined;
  Success: undefined;
}

export type ScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}

type Props = {
  bg?: ImageSourcePropType;
  noBox?: boolean;
  style?: ImageStyle;
  children: ReactNode;
}

const Screen: FC<Props> = ({
  bg = require('../assets/background_image.png'),
  noBox = false,
  style = {},
  children
}) => <ImageBackground
  source={bg}
  style={styles.bg}
  imageStyle={[styles.img, style]}>
    {noBox ? children : <BottomBox>{children}</BottomBox>}
  </ImageBackground>;

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%'
  },
  img: {
    position: 'absolute'
  }
});

export default Screen;
