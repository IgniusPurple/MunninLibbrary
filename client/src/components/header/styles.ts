import styled from "styled-components";

export const HeaderStyles = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-height: 6.25rem;

    background-color: #3E3A42;

    padding: 1.5rem 2rem;

    img {
        max-width: 57px;
    }

    ul {
        display: flex;
        max-width: 25.75rem;
        width: 100vw;

        justify-content: space-between;
        padding: 0 1rem;

        margin: 0;

        li {
            list-style-type: none;
        }
    }

    a {
        text-decoration: none;
        color: white;

        font-size: 1.5rem;
    }
    
    input {
        background: #D9D9D9;
        color: #8A8D8C;

        border-radius: 10rem;
        font-size: 1rem;
        padding: 0.625rem;

        width: 100%;
        max-width: 22rem;
    }

    .logo {
        width: 100%;
        max-width: 16rem;
    }
    
`

export const ProfileWrapper = styled.div`
    gap: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
    button {
        font-size: 1.5rem;
        color: white;
        border: none;

        background-color: transparent;
    }
`