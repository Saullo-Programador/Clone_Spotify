import { StatusBar } from 'expo-status-bar';

//import GetStarted from './src/screens/GetStarted';

import ChooseMode from './src/screens/ChooseMode';

export default function App() {
  return (
    <>
      <ChooseMode />
      <StatusBar style="light" translucent/>
    </>
  );
}
