import styled from 'styled-components';
import BackgroundLogin from '../../assets/BackgroundLogin.png';

export const ContainerLogin = styled.div`
    display: flex;

    width: 100vw;
    height: 100vh;

    background-image: url(${BackgroundLogin});
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 530px) {
        justify-content: center;
        align-items: center;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    height: 100%;

    margin-left: 100px;

    @media (max-width: 530px) {
        margin-left: 0;
        max-width: 100%;
    }
`;

export const ContentLogo = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;

    margin-bottom: 50px;

    img {
        margin-right: 20px;
    }
`;

export const TitleLogin = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 40px;

    color: #ffffff;
`;

export const Form = styled.div`
    width: 100%;
`;
