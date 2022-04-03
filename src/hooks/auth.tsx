import React, {
  createContext, useCallback, useContext, useState,
} from 'react';

import api from '../services/api';

interface User {
    id: string;
    name: string;
    birthdate: string;
    gender: string;
}

interface AuthState {
    user: User;
    refreshToken: string;
    token: string;
}

interface AuthContextData {
    user: User;
    token: string;
    refreshToken: string;
    signIn(
        credentials: User,
        token: string,
        refreshToken: string
    ): Promise<void>;
    signOut(): void;
    updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const tokenUsuario = localStorage.getItem('@Ioasys:token');
    const refreshTokenUsuario = localStorage.getItem(
      '@Ioasys:refreshToken',
    );
    const user = localStorage.getItem('@Ioasys:user');

    if (tokenUsuario && refreshTokenUsuario && user) {
      api.defaults.headers.common.Authorization = `Bearer${tokenUsuario}`;
      api.defaults.headers.common['refresh-token'] = refreshTokenUsuario;

      return {
        token: tokenUsuario,
        refreshToken: refreshTokenUsuario,
        user: JSON.parse(user),
      };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async (user, token, refreshToken) => {
    localStorage.setItem('@Ioasys:token', token);
    localStorage.setItem('@Ioasys:refreshToken', refreshToken);
    localStorage.setItem('@Ioasys:user', JSON.stringify(user));

    setData({ token, refreshToken, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Ioasys:token');
    localStorage.removeItem('@Ioasys:refreshToken');
    localStorage.removeItem('@Ioasys:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      setData({
        token: data.token,
        refreshToken: data.refreshToken,
        user,
      });
    },
    [data],
  );

  return (
        <AuthContext.Provider
          value={{
            user: data.user,
            signIn,
            signOut,
            updateUser,
            token: data.token,
            refreshToken: data.refreshToken,
          }}
        >
            {children}
        </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
