import {useAppNavigation, useAppRoute} from '@hooks/app/useAppNavigation';
import {SubmitHandler, useFormContext} from 'react-hook-form';

import React, {useCallback} from 'react';

import {StyleSheet} from 'react-native';

import {Button} from '@components/base/button';
import {Layout} from '@components/base/layout';
import {apiClient} from '@configs/apiClient';
import {useMutation} from '@tanstack/react-query';
import {TVerifyCodeSchema} from '@type/schemaType';
import {sizeScale} from '@utils/dimension';
import {showMessage} from 'react-native-flash-message';

interface INextStepButtonProps {}
const NextStepButton = ({}: INextStepButtonProps) => {
  const {handleSubmit} = useFormContext<TVerifyCodeSchema>();
  const route = useAppRoute('EmailVerificationScreen');

  const navigation = useAppNavigation();

  const {mutateAsync, isPending} = useMutation({
    mutationFn: async (data: TVerifyCodeSchema) => {
      const payload = {
        email: route.params.email,
        password: route.params.password,
        otpCode: data.verifyCode,
      };
      console.log('payload', payload);

      return await apiClient.post('/api/account/tokenv2', payload, {
        method: 'POST',
      });
    },
    onSuccess: () => {
      navigation.navigate('BottomTab', {
        screen: 'HomeScreen',
      });
    },
    onError: () => {
      console.log('error');
      showMessage({
        message: 'Invalid otp',
        type: 'danger',
        icon: 'danger',
      });
    },
  });

  const handleLogin: SubmitHandler<TVerifyCodeSchema> = useCallback(
    data => {
      mutateAsync(data);
    },
    [mutateAsync],
  );

  return (
    <Layout.Animated style={styles.container}>
      <Button.Fill
        size="48"
        label="Next step"
        onPress={handleSubmit(handleLogin)}
        isLoading={isPending}
      />
    </Layout.Animated>
  );
};
export default NextStepButton;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizeScale(16),
    paddingTop: sizeScale(16),
    paddingBottom: sizeScale(32),
    gap: sizeScale(16),
  },
});
