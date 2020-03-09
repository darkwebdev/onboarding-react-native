import { StyleSheet, Text } from 'react-native';
import React from 'react';

export default ({ children }) =>
  <Text style={styles.default}>{children}</Text>;

const styles = StyleSheet.create({
  default: {
    fontSize: 20,
    marginBottom: 20
  }
});
