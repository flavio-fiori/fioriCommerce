import { GetStaticProps } from 'next';

import { api } from '../services/api';
import { CardProduct } from './../components/CardProduct';

import { Shelf } from './../styles/shelf';

export default function Home({ products }) {

    return (

        <main className='content'>

            <Shelf>

                {
                    products &&
                    products.map(product => (

                        <CardProduct 
                            key={ product.id } 
                            product={ product } />

                    ))
                }

            </Shelf>


        </main>

    )

}

export const getStaticProps: GetStaticProps = async () => {

    const response = await api('/products');
    const products = response.data;

    return {
        props: {
            products
        },
        revalidate: 60 * 60 * 1 // 1 Hora
    }

}