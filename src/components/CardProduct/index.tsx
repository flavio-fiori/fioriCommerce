import { FaCartPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { formatPrice } from './../../helpers';
import { useCart } from '../../hooks/useCart';

import { Card } from './style';

import { Product } from './../../types';

export const CardProduct = ({ product }) => {

    const { name, price } = product;

    const cartContext = useCart();

    const handleAddProduct = (product: Product) => {
        
        cartContext.addProduct(product);
    
    };

    return(

        <Card>
        
            <figure>
                <img src="/images/clock.png" alt=""/>
            </figure>

            <strong>{ name }</strong>

            <p>
                <span className="old">{ formatPrice(price.old) }</span>
                <span className="best">{ formatPrice(price.best) }</span>
            </p>

            <button
                onClick={ () => handleAddProduct(product) }
            >
                <FaCartPlus/>
                Comprar
            </button>
        
        </Card>

    )

}