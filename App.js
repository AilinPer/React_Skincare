import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import TabNav from './src/Navigation/TabNav';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {

  const [fontsLoaded] = useFonts({
    Merriweather: require ("./assets/Fonts/Merriweather-Regular.ttf")
  })

  if (!fontsLoaded){
    return
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <RootNavigation/> */}
        <TabNav/>
      </NavigationContainer>
    </Provider>
  )
}
