import { useNavigation } from '@react-navigation/native';
import { Button,SafeAreaView, Text, View } from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function HomeScreen() {
  const tw = useTailwind();
  const  navigation = useNavigation();

  return (
    <SafeAreaView style={tw('flex content-end items-center')}>
      <Text style={tw('text-xl text-blue-600')}>Home Screen</Text>
      <Button title="Click" onPress={()=>navigation.navigate('Chat')}></Button>
    </SafeAreaView>
  );
}

