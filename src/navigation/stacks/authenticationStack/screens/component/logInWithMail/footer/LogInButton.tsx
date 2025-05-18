import React, {useCallback} from 'react';

import {StyleSheet} from 'react-native';

import {Button} from '@components/base/button';

import {apiClient} from '@configs/apiClient';
import {useMutation} from '@tanstack/react-query';
import {TLogInSchema} from '@type/schemaType';
import {sizeScale} from '@utils/dimension';
import {SubmitHandler, useFormContext} from 'react-hook-form';
import {showMessage} from 'react-native-flash-message';
import {useAppNavigation} from '@hooks/app/useAppNavigation';

interface ILogInButtonProps {}
const LogInButton = ({}: ILogInButtonProps) => {
  const navigation = useAppNavigation();
  const {mutateAsync, isPending} = useMutation({
    mutationFn: async (data: TLogInSchema) => {
      const payload = {
        email: data.email.toLowerCase(),
        password: data.password,
        mode: 1,
      };
      console.log('payload', payload);
      await apiClient.post('/api/account/sendotp', payload, {
        method: 'POST',
      });

      return {
        email: data.email,
        password: data.password,
      };
    },
    onSuccess: data => {
      navigation.navigate('AuthenticationStack', {
        screen: 'EmailVerificationScreen',
        params: {
          email: data.email,
          password: data.password,
        },
      });
    },
    onError: () => {
      console.log('error');
      showMessage({
        message: 'Invalid email or password',
        type: 'danger',
        icon: 'danger',
      });
    },
  });
  const {handleSubmit} = useFormContext<TLogInSchema>();

  const _handleLogIn: SubmitHandler<TLogInSchema> = useCallback(
    data => {
      mutateAsync(data);
    },
    [mutateAsync],
  );

  return (
    <Button.Fill
      size="48"
      label="LOGIN"
      containerStyle={styles.buttonContainer}
      onPress={handleSubmit(_handleLogIn)}
      isLoading={isPending}
    />
  );
};
export default LogInButton;
const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: sizeScale(16),
    paddingTop: sizeScale(16),
    paddingBottom: sizeScale(32),
  },
});
