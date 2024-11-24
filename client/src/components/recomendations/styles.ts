import styled from "styled-components";

export const RecommendationWrapper = styled.div`
    width: 100%;
    max-width: 54.25rem;
    background-color: #3E3A42;

    overflow: hidden;
    
    margin: auto;    
    h2 {
        font-size: 2rem;
        color: #C8C2C2;
        font-weight: bolder;
        padding: 1.5rem 0.75rem;
        margin-bottom: 0;
    }

    h3 {
        font-size: 2rem;
        color: #F0B695;
        font-weight: bolder;
    }

    p {
        font-size: 1.5rem;
        color: #A09F9F;
        max-width: 28.5rem;
    }
`

export const Highlighted = styled.div`
    display: flex;
    gap: 1.5rem;

    padding: 1.5rem 0.75rem;
    padding-top: 0;

    img {
        max-width: 18.25rem;
    }
`

export const Writter = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #F0B695;
    font-size: 1.25rem;
    img {
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
    }
`

export const ReadingWrapper = styled.div`
    h2 {
        font-size: 2rem;
        font-weight: bolder;
        color: #C8C2C2;
        
    }
`

export const ReadingList = styled.div`
    display: flex;
    gap: 1.5rem;
    padding-left: 1.5rem;

    img {
        max-width: 13.25rem;
    }
`