import { Button,SafeAreaView, Text, View } from 'react-native';
import {useTailwind} from 'tailwind-rn';

const ChatScreen = () => {
    const tw = useTailwind();

  return (
    <View style={tw('flex items-center')}>
      <Text>ChatScreen</Text>
    </View>
  )
}

export default ChatScreen