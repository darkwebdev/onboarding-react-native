import React from 'react';
import { Button, ImageBackground, Text, View } from 'react-native';

export default ({ navigation }) =>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ImageBackground source={require('../assets/background_image.png')} style={{width: '100%', height: '100%'}}>
      <Text>Goals</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </ImageBackground>
  </View>
