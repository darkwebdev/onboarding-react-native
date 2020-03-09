import { StyleSheet, Text } from 'react-native';
import React from 'react';

export default ({ children }) =>
  <Text style={styles.default}>{children}</Text>

const styles = StyleSheet.create({
  default: {
    paddingHorizontal: 10,
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 20
  }
});
