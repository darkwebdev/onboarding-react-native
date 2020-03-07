import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GoalsScreen from './components/GoalsScreen';
import DueDateScreen from './components/DueDateScreen';
import ActivityLevelScreen from './components/ActivityLevelScreen';
import SuccessScreen from './components/SuccessScreen';
import { RootStackParamList } from './components/screens';

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
