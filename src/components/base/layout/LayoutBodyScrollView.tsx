import React from 'react';

import {ScrollView} from 'react-native';

interface ILayoutBodyScrollViewProps {
  paddingHorizontal?: number;
  children?: React.ReactNode;
}
const LayoutBodyScrollView = ({children}: ILayoutBodyScrollViewProps) => {
  return <ScrollView>{children}</ScrollView>;
};
export default LayoutBodyScrollView;
