import React, { useEffect, useState } from 'react';

import { ContainerAlert, ContentMessage } from './styles';

interface InputErrorAlertProps {
    error: string | undefined;
}

const InputErrorAlert: React.FC<InputErrorAlertProps> = ({ error }) => {
  const [textClass, setTextClass] = useState('notShow');

  useEffect(() => {
    if (error) {
      setTextClass('show');
    }
  }, [error]);
  return (
        <>
            {error && (
                <ContainerAlert className={textClass}>
                    <ContentMessage>{error}</ContentMessage>
                </ContainerAlert>
            )}
        </>
  );
};

export default InputErrorAlert;
