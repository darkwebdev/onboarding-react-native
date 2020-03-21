import { StyleSheet, Text } from 'react-native';
import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SubTitle: FC<Props> = ({ children }) =>
  <Text style={styles.default}>{children}</Text>;

const styles = StyleSheet.create({
  default: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20
  }
});

export default SubTitle;
