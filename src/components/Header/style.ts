import styled from 'styled-components';

export const Container = styled.header`

    width: 100%;    
    display: flex;
    background-color: var(--grey-900);
    padding: 1rem 0 8rem 0;

`; 

export const Grid = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    margin: auto;
    padding: 0 1.5rem;

    .logo {

        color: var(--white);
        font-size: 1.5rem;
        font-weight: bold;

        svg {
            margin-right: 0.5rem;
        }

        a {
            display: flex;
            color: inherit;
        }

    }

`;