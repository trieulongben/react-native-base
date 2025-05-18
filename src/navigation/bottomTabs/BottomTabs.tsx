import {TBottomTabParamsList} from '@hooks/app/useAppNavigation';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import React from 'react';

import {Navigation} from '@components/ui/navigation';
import HomeScreen from './screens/HomeScreen';
import CheckListScreen from './screens/check-list/CheckListScreen';

const Tab = createBottomTabNavigator<TBottomTabParamsList>();
const BottomTabs = () => {
  const tabBarComponent = React.useCallback(
    (props: BottomTabBarProps) => <Navigation.BottomTab.TabBar {...props} />,
    [],
  );

  return (
    <Tab.Navigator
      tabBar={tabBarComponent}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="HabitsScreen" component={CheckListScreen} />
    </Tab.Navigator>
  );
};
export default BottomTabs;
