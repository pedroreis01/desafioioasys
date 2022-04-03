import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../../assets/Logo.png';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import {
  ContainerLogin,
  Content,
  ContentLogo,
  Form,
  TitleLogin,
} from './styles';

interface UserData {
    id: string;
    name: string;
    birthdate: string;
    gender: string;
}

const Login: React.FC = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [messageError, setMessageError] = useState<string | undefined>(
    undefined,
  );
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(async () => {
    api.post('auth/sign-in', {
      email: emailValue,
      password: passwordValue,
    })
      .then((response) => {
        const token = response.headers.authorization;
        const refreshToken = response.headers['refresh-token'];
        const { data } = response;
        signIn(data, token, refreshToken);
        setMessageError(undefined);
        history.push('/home');
      })
      .catch((error) => {
        const { message } = error.response.data.errors;
        setMessageError(message);
      });
  }, [emailValue, history, passwordValue, signIn]);

  return (
        <ContainerLogin>
            <Content>
                <ContentLogo>
                    <img src={Logo} alt="Logo" />
                    <TitleLogin>Books</TitleLogin>
                </ContentLogo>
                <Form>
                    <Input
                      id="email"
                      label="Email"
                      name="email"
                      props={{
                        placeholder: 'Email',
                        value: emailValue,
                        onChange: (e) => setEmailValue(e.target.value),
                      }}
                    />
                    <Input
                      id="password"
                      label="Senha"
                      name="password"
                      error={messageError}
                      props={{
                        placeholder: 'Senha',
                        type: 'password',
                        value: passwordValue,
                        onChange: (e) => setPasswordValue(e.target.value),
                      }}
                      buttonProps={{ onClick: handleSubmit }}
                      buttonText="Entrar"
                    />
                </Form>
            </Content>
        </ContainerLogin>
  );
};

export default Login;
