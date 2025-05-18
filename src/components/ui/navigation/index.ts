import BottomTabBar from './bottomTab/BottomTabBar';
import BottomTabBarItem from './bottomTab/BottomTabBarItem';
import AppHeader from './header/AppHeader';
import BottomTabHeader from './header/BottomTabHeader';
import HeaderLeft from './header/HeaderLeft';

export const Navigation = {
  Header: {
    HeaderLeft,
    AppHeader,
    BottomTab: BottomTabHeader,
  },
  BottomTab: {TabBar: BottomTabBar, Item: BottomTabBarItem},
};
