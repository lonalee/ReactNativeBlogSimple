
// 

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';

// createStackNavigator 메소드의 두번째 인자는 설정 옵션
const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteNamd: 'Index',
  defaultNavigationOptions: {
    title: 'BLOGS'
  }
})

export default createAppContainer(navigator)