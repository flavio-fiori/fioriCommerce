import { useRouter } from 'next/router';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from './../../helpers'; 

import { Table, Title, Body, Footer, Button } from './style';

export const TableCart = () => {

    const router = useRouter();
    const cartContext = useCart();
    const { products } = cartContext;

    const handleRemoveProduct = (id: number) => {
        cartContext.removeProduct(id);
    };

    const totalCart = products.reduce((accumulator, product) => {
        
        accumulator += (product.price.best * product.qtd);

        return accumulator;
        
    }, 0);

    const handleUpdateQty = (id: number, operation: 'less'| 'more') => {

        cartContext.updateProduct(id, operation);

    };

    return(

        <Table>

            <Title>
                <tr>

                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Ações</th>
                    <th>Valor</th>
                    <th>Retirar</th>

                </tr>
            </Title>

            <Body>

                {

                    products &&
                    products.map(product => (

                        <tr key={ product.id }>
                            <td>{ product.name }</td>
                            
                            <td>{product.qtd} { product.qtd > 1 ? 'items' : 'item'}</td>

                            <td>

                                <button
                                    disabled={product.qtd === 1}
                                    onClick={ () => handleUpdateQty(product.id, 'less')}>
                                        -
                                    </button>
                                <button
                                    onClick={ () => handleUpdateQty(product.id, 'more')}>
                                        +
                                </button>

                            </td>

                            <td>

                                <span>Unid.: { formatPrice(product.price.best ) }</span>
                                <span>Total: { formatPrice(product.price.best * product.qtd) }</span>

                            </td>

                            <td>
                                <button
                                    onClick={ () => handleRemoveProduct(product.id) }>
                                        [x]
                                </button>
                            </td>
                        </tr>

                    ))

                }

            </Body>



            <Footer>

                <tr>
                    <td colSpan={5}>Total: <strong>{ formatPrice(totalCart) }</strong></td>
                </tr>



                <tr>

                    <td colSpan={5}>

                        <Button
                            onClick={ () => router.push('/') }>
                            Voltar
                        </Button>

                        <Button
                            disabled={ products.length < 1 }>
                            Avançar
                        </Button>

                    </td>

                </tr>

            </Footer>

        </Table>

    )

}