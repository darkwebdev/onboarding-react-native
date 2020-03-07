import React from 'react';
import { Button, ImageBackground, Text, View } from 'react-native';

export default ({ navigation }) =>
  <ImageBackground source={require('../assets/background_image.png')} style={{width: '100%', height: '100%'}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>To get your perfect workouts, tell us your activity level!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DueDate')}
      />
    </View>
  </ImageBackground>
