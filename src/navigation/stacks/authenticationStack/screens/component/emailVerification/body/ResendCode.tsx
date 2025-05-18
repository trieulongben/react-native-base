import useAppCountdown from '@hooks/app/useAppCountdown';

import React, {useCallback, useState} from 'react';

import {Layout, Text} from '@components/base';

interface IResendCodeProps {}
const ResendCode = ({}: IResendCodeProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const _handleComplete = useCallback(() => {
    setIsPlaying(false);
  }, []);
  const {seconds, reset} = useAppCountdown({
    totalSeconds: 10,
    onComplete: _handleComplete,
  });

  const _handleResendCode = useCallback(() => {
    setIsPlaying(true);
    reset();
  }, [reset]);

  if (isPlaying) {
    return (
      <Layout.Animated>
        <Text size="16" weight="medium" color="ELEMENT_ACCENT">
          {`Wait for ${seconds} to request new code`}
        </Text>
      </Layout.Animated>
    );
  }
  return (
    <Layout.Wrapper>
      <Text
        size="16"
        weight="medium"
        color="ELEMENT_ACCENT"
        onPress={_handleResendCode}>
        Resend
      </Text>
    </Layout.Wrapper>
  );
};
export default ResendCode;
