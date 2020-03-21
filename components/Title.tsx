import { StyleSheet, Text } from 'react-native';
import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Title: FC<Props> = ({ children }) =>
  <Text style={styles.default}>{children}</Text>;

const styles = StyleSheet.create({
  default: {
    paddingHorizontal: 10,
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 20
  }
});

export default Title;
