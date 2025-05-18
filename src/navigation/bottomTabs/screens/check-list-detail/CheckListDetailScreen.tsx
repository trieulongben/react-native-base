import LayoutScreen from '@components/base/layout/LayoutScreen';
import {useAppRoute} from '@hooks/app/useAppNavigation';
import React from 'react';
import {CheckListDetailComponents} from './components';

const CheckListDetailScreen = () => {
  const route = useAppRoute('CheckListDetailScreen');
  const {id} = route.params;

  return (
    <LayoutScreen safeAreaColor="surface">
      <CheckListDetailComponents.Header id={id} />
      <CheckListDetailComponents.Body id={id} />
    </LayoutScreen>
  );
};

export default CheckListDetailScreen;
