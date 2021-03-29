import { useRouter } from 'next/router';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../hooks/useCart';

import { Button } from './style';

export const ResumeCart = () => {

    const router = useRouter();

    const cartContext = useCart();

    const qtdProducts = cartContext.products.length === 0 ? 'Carrinho Vazio' : 
                        cartContext.products.length === 1 ? '1 produto' :
                        `${cartContext.products.length} produtos` 

    return(

        <Button
            onClick={ () => router.push('/cart') }
        >

            <FaShoppingCart />

            { qtdProducts }
            
        </Button>

    )

}