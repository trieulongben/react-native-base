import LayoutScreen from '@components/base/layout/LayoutScreen';
import React from 'react';
import {CheckListScreenComponents} from './components';
import {ECheckListType} from './data';

const CheckListScreen = () => {
  return (
    <LayoutScreen safeAreaColor="surface">
      <CheckListScreenComponents.Header />
      <CheckListScreenComponents.Body type={ECheckListType.SNORING} />
      <CheckListScreenComponents.Footer />
    </LayoutScreen>
  );
};

export default CheckListScreen;
