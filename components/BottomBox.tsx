import React from 'react';
import { StyleSheet, View } from 'react-native';

export default ({ children }) =>
  <View style={styles.default}>{children}</View>

const styles = StyleSheet.create({
  default: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30,
    paddingBottom: 90,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  }
});
