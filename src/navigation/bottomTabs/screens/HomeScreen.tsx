import LayoutScreen from '@components/base/layout/LayoutScreen';
import React from 'react';
import HomeScreenComps from './components/home_layout';

const HomeScreen = () => {
  return (
    <LayoutScreen isSafeArea={true} safeAreaColor="surface">
      <HomeScreenComps.Header />
      <HomeScreenComps.Body />
    </LayoutScreen>
  );
};
export default HomeScreen;
