import styled from 'styled-components';

export const ContainerCard = styled.div`
    display: flex;
    width: 100%;
    max-width: 300px;
    justify-content: space-between;
    align-items: center;

    background: #ffffff;
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
    border-radius: 4px;

    margin: 10px;
    padding: 5px;

    cursor: pointer;
`;

export const ImageCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));

    > img {
        max-width: 100px;
    }

    @media (max-width: 345px) {
        > img {
            max-width: 75px;
        }
    }
`;

export const DetailsCard = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    width: 50%;
    height: 100%;

    justify-content: space-between;
`;

export const HeaderCard = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleCard = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;

    color: #333333;
`;

export const AuthorsCard = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;

    color: #ab2680;
`;

export const FooterCard = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TextCard = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;

    color: #999999;
`;
