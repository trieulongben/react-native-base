import {useAppNavigation} from '@hooks/app/useAppNavigation';

import React, {useCallback} from 'react';

import {TouchableOpacity} from 'react-native';

import {Text} from '@components/base';
import {Navigation} from '@components/ui/navigation';

interface IHeaderProps {}
const Header = ({}: IHeaderProps) => {
  const {navigate} = useAppNavigation();

  const _handleGoToForgotPassword = useCallback(() => {
    navigate('ForgotPasswordScreen');
  }, [navigate]);
  const _renderHeaderRight = useCallback(() => {
    return (
      <TouchableOpacity onPress={_handleGoToForgotPassword}>
        <Text size="16" weight="medium" color="onBackground">
          Forgot password?
        </Text>
      </TouchableOpacity>
    );
  }, [_handleGoToForgotPassword]);

  const _renderHeaderLeft = useCallback(() => {
    return (
      <Text size="30" weight="semiBold" color="primary">
        SIGN IN
      </Text>
    );
  }, []);

  return (
    <Navigation.Header.AppHeader
      renderHeaderLeft={_renderHeaderLeft}
      // title="Sign in"
      renderHeaderRight={_renderHeaderRight}
    />
  );
};
export default Header;
