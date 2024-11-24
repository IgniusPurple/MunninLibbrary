import styled from "styled-components";

export const OnlineWrapper = styled.div`
    width: 100%;
    max-width: 15.625rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h4 {
        font-size: 1.5rem;
        color: white
    }

    h5 {
        color: white;
        font-size: 1rem;
        margin-bottom: 0;

        span {
            font-size: 1.25rem;
            color: #888787;
        }
    }
`

export const InsigniaWrapper = styled.div`
    
`

export const AnalisysWrapper = styled.div`
    
`

export const FriendsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    
    h5 {
        color: white;
        font-size: 1rem;

        span {
            font-size: 1.25rem;
            color: #888787;
        }
    }
`

export const Friend = styled.div`
    display: flex; 
    gap: 0.75rem;
    width: 100%;

    span {
        font-size: 1rem;
        color: white;
        
        &:last-child {
            font-size: 0.75rem;
            margin-left: auto;
            margin-right: 0;

            width: 1.75rem;
            height: 1.75rem;

            border: 3px solid yellow;
            border-radius: 100%;

            padding: 0.1rem 0 0.1rem 0.3rem;
        }
    }

    
`