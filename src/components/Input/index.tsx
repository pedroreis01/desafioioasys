import {
  ButtonProps,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
} from '@material-ui/core';
import React from 'react';

import InputErrorAlert from '../InputErrorAlert';
import { ButtonInput, Container, ContentInput } from './styles';

export interface InputProps {
    id: string;
    name: string;
    label?: string;
    props?: OutlinedInputProps;
    buttonProps?: ButtonProps;
    buttonText?: string;
    error?: string | undefined;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  props,
  buttonProps,
  buttonText,
  error,
}) => {
  return (
        <Container id="container">
            <ContentInput>
                <label htmlFor={id}>{label}</label>
                <OutlinedInput
                  id={id}
                  name={name}
                  endAdornment={
                        <InputAdornment position="end">
                            {buttonProps && (
                                <ButtonInput {...buttonProps}>
                                    {buttonText}
                                </ButtonInput>
                            )}
                        </InputAdornment>
                    }
                  {...props}
                />
            </ContentInput>
            <InputErrorAlert error={error} />
        </Container>
  );
};

export default Input;
