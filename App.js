import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

import StackNavigator from './StackNavigator';
import { AuthProvider } from './hooks/useAuth';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <AuthProvider>
          <StackNavigator></StackNavigator>
        </AuthProvider>
      </NavigationContainer>
   </TailwindProvider>
  );
}

