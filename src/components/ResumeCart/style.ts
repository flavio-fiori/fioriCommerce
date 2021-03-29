import styled from 'styled-components';

export const Button = styled.button`

    width: 10rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--grey-500);
    border-radius: 0.5rem;
    border: 0;
    cursor: pointer;
    color: var(--white);
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: bold;
    color: var(--grey-900);

    svg {

        margin-right: 0.5rem;
        width: 1.25rem;
        height: 1.25rem;
        color: var(--white);
        font-weight: normal;

    }

`;