import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {

        // variables
        --grey-900: #3F3F40;
        --grey-700: #727273;
        --grey-500: #8D8E8F;
        --grey-200: #C5C6C7;
        --white: #FCFDFF;

    }

    * {

        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {

        background-color: var(--grey-200);

    }

    body, 
    input,
    select,
    textarea {

        font-family: 'Ubuntu', sans-serif;
        font-weight: 300;

    }

    a { 

        text-decoration: none;
        
    }

    .content {

        width: 100%;
        max-width: 1120px;
        display: block;
        position: relative;
        margin: -5rem auto 0 auto;

        &.white {

            background-color: var(--white);
            border-radius: 0.5rem;
            padding: 2rem;

        }

    }


    @media (max-width: 1080px) {

        font-size: 93.75%

    }

    @media (max-width: 720px) {

        font-size: 87.5%;

    }
`;