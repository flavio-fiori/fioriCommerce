import styled from 'styled-components';

export const Card = styled.article`

    width: 24%;
    border: 1px solid var(--grey-500);
    background-color: var(--white);
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 1rem 0;
    text-align: center;

    img {

        max-width: 100%;

    }

    strong {

        display: block;
        margin: 0.5rem 0;
        font-size: 16px;
        color: var(--grey-900);

    }

    p {

        display: flex;
        justify-content: space-between;
        margin: 0.75rem 0;

    }

    .old {

        text-decoration: line-through;

    }

    .best {

        font-weight: bold;

    }

    button {

        width: 100%;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 0;
        background-color: var(--grey-200);
        border: 0;
        border-radius: 0.5rem;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: bold;

        svg {

            margin-right: 0.5rem;
            font-weight: normal;

        }

    }

`;