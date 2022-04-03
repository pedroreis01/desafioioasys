import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    margin-top: 10px;

    position: relative;
`;

export const ContentInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    .MuiInputLabel-outlined.MuiInputLabel-shrink {
        transform: translate(14px, 3px) scale(0.75) !important;
    }

    label {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        width: auto;
        /* identical to box height, or 133% */

        color: #ffffff;

        opacity: 0.5;

        top: 5px;
        left: 12px;
        position: absolute;
        z-index: 1 !important;
        background: transparent;
    }

    legend {
        display: none;
    }

    fieldset {
        display: none;
    }

    > * {
        background: rgba(0, 0, 0, 0.32);
        backdrop-filter: blur(2px);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        color: #ffffff;
        border-radius: 4px;
        width: 100%;
    }

    input {
        color: #ffffff;
        width: 100%;
        border-color: unset;
        background-color: unset;
    }

    .MuiOutlinedInput-input {
        padding: 32px 14px 8px 14px;
    }

    .MuiInputAdornment-positionEnd {
        min-width: 85px;
    }
`;

export const ButtonInput = styled.button`
    width: 100%;
    height: 36px;

    background: #ffffff;
    border-radius: 44px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    border: none;

    color: #b22e6f;

    &:hover {
        background: ${shade(0.1, '#ffffff')};
    }
`;
