import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import GetStarted from './src/screens/GetStarted';
import ChooseMode from './src/screens/ChooseMode'
import Logon from './src/screens/Logon';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='GetStarted'>

          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="ChooseMode"
            component={ChooseMode}
            options={{
              title: "",
              headerTransparent: true,
              headerTintColor:"#FFF",
            }}
          />

          <Stack.Screen
            name="Logon"
            component={Logon}
          />

        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" translucent/>
    </>
  );
}
