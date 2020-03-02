import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GoalsScreen from './components/Goals';
import DueDateScreen from './components/DueDate';
import ActivityLevelScreen from './components/ActivityLevel';
import SuccessScreen from './components/Success';

type RootStackParamList = {
  Goals: undefined;
  DueDate: undefined;
  ActivityLevel: undefined;
  Success: undefined;
};
const screenOptions = {
  title: null
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTransparent: true }}>
        <Stack.Screen name="Goals" component={GoalsScreen} options={screenOptions} />
        <Stack.Screen name="DueDate" component={DueDateScreen} options={screenOptions} />
        <Stack.Screen name="ActivityLevel" component={ActivityLevelScreen} options={screenOptions} />
        <Stack.Screen name="Success" component={SuccessScreen} options={screenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
