import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import IndexScreen from './src/screen/IndexScreen';

import { BlogProvider } from './src/context/BlogContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTitle:"Memo 📝"}}>
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}