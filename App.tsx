import {NativeBaseProvider, StatusBar} from 'native-base'
import {THEME} from './src/styles/theme'
import {Home} from './src/screens/Home'
import { Loading } from './src/components/Loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

export default function App() {
  const [fonstLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  
  return (
  <NativeBaseProvider theme={THEME}>
    <StatusBar
    barStyle='light-content'
    backgroundColor='transparent'
    translucent
    />
  {fonstLoaded ? <Home/> : <Loading/>}
  </NativeBaseProvider>
  );
}

