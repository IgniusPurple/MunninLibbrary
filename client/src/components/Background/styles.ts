
import styled from "styled-components";

interface BackImgProps {
    path: string;
}

export const BackgroundImage = styled.div<BackImgProps>`
    width: 100%;
    height: 100%;

    top: 0;
    z-index: -1;

    position: absolute;

    background-image: url(${props => props.path});
    object-fit: contain;

    button {
        position: absolute;
    }
`