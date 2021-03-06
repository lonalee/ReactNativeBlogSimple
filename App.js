
// 
import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Provider } from './src/context/BlogContext'

// createStackNavigator 메소드의 두번째 인자는 설정 옵션

const navigator = createStackNavigator(
  { // router configuration object
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen
  }, 
  {
  initialRouteNamd: 'Index',
  defaultNavigationOptions: {
    title: 'BLOGS'
  }
})

//AS-IS ==> export default createAppContainer(navigator)
// TO-BE ==> 
const App = createAppContainer(navigator);

export default () => {
  return <Provider><App /></Provider>
  // App Component to be in the children prop
}