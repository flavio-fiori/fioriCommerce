import styled from 'styled-components';


export const Table = styled.table`

    width: 100%;
    border-spacing: 0 0.5rem;

`;

export const Title = styled.thead`

    th {
        text-align: left;
        font-weight: bold;
        padding: 1rem;
        border-bottom: 1px solid var(--grey-500);
    }

`;

export const Body = styled.tbody`

    tr:nth-child(even){ 

        background-color: var(--grey-200);

    }

    td {

        padding: 1rem;

        span {

            display: block;
            font-size: 0.85rem;

            &:last-child {
                font-size: 1rem;
                font-weight: bold;
            }

        }

    }

    button {

        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        margin: 0 0.25rem;
        background-color: var(--grey-500);
        color: var(--white);
        border: 0;
        border-radius: 0.5rem;
        cursor: pointer;

        &:disabled {

            cursor: not-allowed;
            
        }

    }

`;

export const Footer = styled.tfoot`

    td {
        padding: 1rem;
        text-align: right;
    }

`;

export const Button = styled.button`

    width: 10rem;
    height: 3rem;
    display: inline-block;
    margin: 0.5rem 0 0 0.5rem;    
    background-color: var(--grey-900);
    color: var(--white);
    text-transform: uppercase;
    cursor: pointer;
    border: 0;
    border-radius: 0.5rem;

    &:disabled {

        cursor: not-allowed;

    }

`;