import styled from 'styled-components';
import BackgroundHome from '../../assets/BackgroundHome.png';

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    min-height: 100vh;

    padding: 15px 30px;

    background-image: url(${BackgroundHome});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const HeaderHome = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;
    width: 100%;
`;

export const ContentLogo = styled.div`
    display: flex;

    img {
        margin-right: 20px;
    }
`;

export const ContentLogout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
        cursor: pointer;
    }
`;

export const TextHeader = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    margin-right: 10px;

    color: #333333;

    @media (max-width: 560px) {
        display: none;
    }
`;

export const TitleHome = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 40px;

    color: #333333;
`;

export const BodyHome = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;

    height: 100%;
`;

export const ContentError = styled.div`
    margin: auto;
    font-size: 50px;
    color: #333333;
    font-weight: 600;

    height: 100%;
`;
export const FooterHome = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;

    padding: 10px;
    width: 100%;

    font-weight: 400;
    font-size: 12px;
    line-height: 20px;

    color: #333333;

    @media (max-width: 700px) {
        justify-content: center;

        > p {
            display: none;
        }
    }
`;

export const PaginationIcons = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    img {
        cursor: pointer;
        margin: 0 2px;
        max-width: 32px;
    }

    > p {
        display: none;
    }

    @media (max-width: 700px) {
        > p {
            display: block;
            margin: 0 10px;
        }
    }
`;
