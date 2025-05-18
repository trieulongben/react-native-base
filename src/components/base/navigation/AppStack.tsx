import {TScreenItem} from '@hooks/app/useAppNavigation';
import {ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React, {useState} from 'react';

import {screenOptions} from '@configs/navigation';

interface IAppStackProps<T> {
  stackData: TScreenItem<T>[];
  initialRouteName?: Extract<keyof T, string>;
}
const AppStack = <T extends ParamListBase>({
  initialRouteName,
  stackData,
}: IAppStackProps<T>) => {
  const [Stack] = useState(createNativeStackNavigator<T>());

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={screenOptions}>
      {stackData.map(({key, component, name, options}) => (
        <Stack.Screen
          key={key}
          name={name}
          component={component}
          options={{...options}}
        />
      ))}
    </Stack.Navigator>
  );
};
export default AppStack;
