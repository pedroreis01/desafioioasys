import styled from 'styled-components';

export const StyledLoader = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: #ffffff;
    z-index: 2000;

    color: #0168fa;

    & > * {
        margin: auto 0;
    }
`;
