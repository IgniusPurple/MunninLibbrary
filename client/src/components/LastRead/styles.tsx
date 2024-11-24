import styled from "styled-components";

interface ProgressBarProps {
    progress: number;
}

export const LastReadWrapper = styled.div`
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;

    border-style: solid;
    border-width: 1px;
    border-color: #97D2EC;

    img {
        width: 11rem;
    }

    h4 {
        color: #F0B695;
        font-size: 1.5rem;
    }

    span {
        color: #888787;
        font-size: 1rem;
    }

`

export const BookProgress = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 0.5rem;
`

export const ProgressBar = styled.div<ProgressBarProps>`
    width: 100%;
    height: 0.5rem;
    background-color: #D9D9D9;
    border-radius: 2rem;

    margin-top: 0.5rem;

    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: ${(props) => props.progress}%;
        height: 100%;
        background-color: #4D4D4D;
        border-radius: 2rem;

    }
`

export const InfosBookProgress = styled.div`
    display: flex;
    flex-direction: column;
`