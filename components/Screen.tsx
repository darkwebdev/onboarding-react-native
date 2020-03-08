import React, { FC, ReactNode } from 'react';
import { ImageBackground, StyleSheet, View, ImageStyle, ImageSourcePropType } from 'react-native';
import BottomBox from './BottomBox';

export type RootStackParamList = {
  Goals: undefined;
  DueDate: undefined;
  ActivityLevel: undefined;
  Success: undefined;
};

type Props = {
  bg?: ImageSourcePropType;
  noBox?: boolean;
  style?: ImageStyle;
  children: ReactNode;
}

const Screen:FC<Props> = ({
  bg = require('../assets/background_image.png'),
  noBox = false,
  style = {},
  children
}) => {
  // add context provider

  return <ImageBackground source={bg} style={{...styles.bg, ...style }}>
    {noBox ? children : <BottomBox>{children}</BottomBox>}
  </ImageBackground>;
};

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%'
  }
});

export default Screen;
