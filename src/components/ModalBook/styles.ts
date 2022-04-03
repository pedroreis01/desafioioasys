import styled from 'styled-components';
import Quotes from '../../assets/Quotes.png';

export const CloseModal = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    padding: 10px;

    > img {
        cursor: pointer;
    }
`;

export const ModalContent = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    max-height: 90%;
    background-color: #ffffff;
    box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
    border-radius: 4px;
    padding: 40px;

    @media (max-width: 900px) {
        width: 90%;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        max-height: 90%;
        overflow-x: auto;
        padding: 20px;
        top: 52%;
    }
`;

export const ContentError = styled.div`
    margin: auto;
    font-size: 50px;
    color: #333333;
    font-weight: 600;

    height: 100%;
`;

export const ImageModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 50%;

    margin-right: 30px;

    filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));

    > img {
        max-width: 100%;
    }

    @media (max-width: 900px) {
        display: flex;
        width: 100%;
        margin-right: 0;

        > img {
            max-width: 80vmin;
        }
    }
`;

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: space-between;

    width: 50%;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const HeaderModal = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleModal = styled.div`
    font-weight: 600;
    font-size: 28px;
    line-height: 40px;

    color: #333333;
`;

export const AuthorsBook = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;

    color: #ab2680;
`;

export const DetailsModal = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleDetails = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;

    text-transform: uppercase;

    color: #333333;
`;

export const ContentDetails = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TextDetails = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;

    color: #999999;
`;

export const ContentDescription = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    > img {
        width: 17.58px;

        background: #333333;
        opacity: 0.5;
    }
`;

export const TextDescription = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;

    color: #999999;

    &:before {
        content: url(${Quotes});
    }
`;
