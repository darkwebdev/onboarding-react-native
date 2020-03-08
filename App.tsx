import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GoalsScreen from './components/GoalsScreen';
import DueDateScreen from './components/DueDateScreen';
import ActivityLevelScreen from './components/ActivityLevelScreen';
import SuccessScreen from './components/SuccessScreen';
import { RootStackParamList } from './components/Screen';
import Context, { Goal, Level } from './context';
import { FC, useContext, useState } from 'react';

const screenOptions = {
  title: null
};

const Stack = createStackNavigator<RootStackParamList>();

const App: FC = () => {
  const context = useContext(Context);
  const [goals, setGoals] = useState<Goal[]>(context.goals);
  const [dueDate, setDueDate] = useState<Date>(context.dueDate);
  const [activityLevel, setActivityLevel] = useState<Level>(context.activityLevel);

  const updatedContext: Context = {
    goals, setGoals,
    dueDate, setDueDate,
    activityLevel, setActivityLevel
  };

  return <Context.Provider value={{ ...context, ...updatedContext }}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTransparent: true }}>
        <Stack.Screen name="Goals" component={GoalsScreen} options={screenOptions} />
        <Stack.Screen name="DueDate" component={DueDateScreen} options={screenOptions} />
        <Stack.Screen name="ActivityLevel" component={ActivityLevelScreen} options={screenOptions} />
        <Stack.Screen name="Success" component={SuccessScreen} options={screenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  </Context.Provider>
};

export default App;
