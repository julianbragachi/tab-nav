
import { useFonts } from 'expo-font';
import ShopNavigator from './src/navigation/ShopNavigator';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    ComfortaaLight: require('./src/assets/fonts/Comfortaa-Light.ttf'),
    ComfortaaRegular: require('./src/assets/fonts/Comfortaa-Regular.ttf'),
    ComfortaaMedium: require('./src/assets/fonts/Comfortaa-Medium.ttf'),
    ComfortaaSemiBold: require('./src/assets/fonts/Comfortaa-SemiBold.ttf'),
    ComfortaaBold: require('./src/assets/fonts/Comfortaa-Bold.ttf')
  })
  if(!fontsLoaded){return null}
  return <BottomTabNavigator/>;
}


