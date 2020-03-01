import React, { useState } from 'react';
import { Button, ImageBackground, Text, View, StyleSheet } from 'react-native';
import SelectionItem from './SelectionItem';

export default ({ navigation }) => {
  const [findWorkouts, setFindWorkouts] = useState(false);
  const [lessWeight, setLessWeight] = useState(false);
  const [prepareBirth, setPrepareBirth] = useState(false);
  const [feelRelaxed, setFeelRelaxed] = useState(false);

  const selectionProps = [{
    value: findWorkouts,
    onChange: setFindWorkouts,
    text: 'Find workouts for my pregnancy'
  }, {
    value: lessWeight,
    onChange: setLessWeight,
    text: 'Not to gain unnecessary weight'
  }, {
    value: prepareBirth,
    onChange: setPrepareBirth,
    text: 'Prepare for birth'
  }, {
    value: feelRelaxed,
    onChange: setFeelRelaxed,
    text: 'Feel more relaxed'
  }];

// todo: fix background to be aligned to top
  return <ImageBackground
    source={require('../../assets/background_image.png')}
    style={styles.bg}>
    <View style={styles.box}>
      <Text style={styles.title}>What are your goals?</Text>
      <Text style={styles.subTitle}>Help us tailor our program to your needs.</Text>
      <View style={styles.selectionList}>
        {selectionProps.map((props, i) =>
          <SelectionItem {...props} key={i} />
        )}
      </View>
      <Button
        title="Continue"
        color="#9ADCD7"
        onPress={() => navigation.navigate('DueDate')}
      />
    </View>
  </ImageBackground>
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%'
  },
  box: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  title: {
    fontSize: 30,
    marginBottom: 20
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 20
  },
  selectionList: {
    width: '100%',
    marginBottom: 20
  },
  cta: {
    width: '100%'
  }
});
