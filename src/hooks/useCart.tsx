import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { Product } from './../types';

interface CartProductsContextData {
    products: Product[];
    addProduct: (newProduct) => void;
    removeProduct: (id: number) => void;
    updateProduct: (id: number, operation: 'less'| 'more') => void;
}

interface CartProductsProviderProps {
    children: ReactNode
}

const CartProductsContext = createContext<CartProductsContextData>({} as CartProductsContextData);

export function CartProductsProvider({ children }: CartProductsProviderProps) {

    const [products, setProducts] = useState<Product[]>([]);

    const addProduct = (newProduct) => {

        const isProductExist = products.find(product => product.id === newProduct.id);

        if(!isProductExist) {

            setProducts([...products, {...newProduct, 'qtd': 1}]);
            toast.success('Produto adicionado ao carrinho!')

        } else {

            const newProducts = products.filter(product => product.id !== isProductExist.id);
            const newQtd = isProductExist.qtd + 1;

            if(newQtd <= isProductExist.stock) {

                const newProduct = {...isProductExist, 'qtd': newQtd};

                setProducts([
                    ...newProducts,
                    newProduct
                ]);

                toast.success('Quantidade atualizada!');

            } else {

                toast.error('Quantidade indisponivel!');

            }


        }

    };

    const removeProduct = (id: number) => {

        const newProducts = products.filter(product => product.id !== id);

        setProducts([...newProducts]);

        toast.error('Produto removido do carrinho!');

    };

    const updateProduct = (id: number, operation: 'less'| 'more') => {

        let newProducts = products;
        const indexProduct = products.findIndex(product => product.id === id);
        const productCurrent = newProducts[indexProduct];

        console.log({
            newProducts, 
            indexProduct,
            productCurrent
        });

        const newQty = operation === 'less' ? 
            productCurrent.qtd = productCurrent.qtd - 1 :
            productCurrent.qtd = productCurrent.qtd + 1;

        if(newQty > 0 && newQty <= productCurrent.stock) {

            newProducts[indexProduct].qtd = newQty;
            setProducts([...newProducts]);
            toast.success('Quantidade atualizada!');

        } else {

            toast.error('Quantidade indisponivel!');

        }        

    };

    return(

        <CartProductsContext.Provider value={{ products, addProduct, removeProduct, updateProduct }}>

            { children }

        </CartProductsContext.Provider>

    )

};

export function useCart() {

    const context = useContext(CartProductsContext);

    return context;

};