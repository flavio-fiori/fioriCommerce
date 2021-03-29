import { ToastContainer } from 'react-toastify';

import { CartProductsProvider } from './../hooks/useCart';

import { Header } from './../components/Header';

import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './../styles/globals';

function MyApp({ Component, pageProps }) {

    return (

        <CartProductsProvider>
            
            <Header />

            <Component {...pageProps} /> 

            <GlobalStyle />

            <ToastContainer 
                position="bottom-left" />

        </CartProductsProvider>

    ) 


}

export default MyApp
