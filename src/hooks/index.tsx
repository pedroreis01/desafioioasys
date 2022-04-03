import React from 'react';
import { AuthProvider } from './auth';

export interface IProvider {
    children: React.ReactNode;
}

const AppProvider = (props: IProvider) => (
    <AuthProvider>{props.children}</AuthProvider>
);

export default AppProvider;
