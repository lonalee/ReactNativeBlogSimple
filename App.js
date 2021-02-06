
// 
import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext'

// createStackNavigator 메소드의 두번째 인자는 설정 옵션
const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteNamd: 'Index',
  defaultNavigationOptions: {
    title: 'BLOGS'
  }
})

//AS-IS ==> export default createAppContainer(navigator)
// TO-BE ==> 
const App = createAppContainer(navigator);

export default () => {
  return <BlogProvider><App /></BlogProvider>
  // App Component to be in the children prop
}