import styled from 'styled-components';

export const ContainerAlert = styled.span`
    width: 100%;
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.4);
    align-items: center;
    justify-content: center;
    font-size: 15px;
    padding-top: 18px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    color: #ffffff;
    backdrop-filter: blur(2px);

    border-radius: 4px;
    &:before {
        position: absolute;
        content: '';
        /* width: 0;
    height: 0; */
        border: 6px solid transparent;
        border-bottom-color: rgba(255, 255, 255, 0.4);
        left: 10px;
        top: -12px;
    }

    .notShow {
        display: none;
    }
`;

export const ContentMessage = styled.div`
    padding: 0 10px 10px 10px;

    height: 100%;
    width: 100%;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
`;
