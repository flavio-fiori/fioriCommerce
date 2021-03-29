import Link from 'next/link';

import { FaRegClock } from 'react-icons/fa';
import { ResumeCart } from './../ResumeCart';

import { Container, Grid } from './style'; 

export const Header = () => {

    return(

        <Container>

            <Grid>

                <figure className="logo">

                    <Link href="/">
                        <a>
                            <FaRegClock />
                            
                            <figcaption>
                                FioriCommerce
                            </figcaption>
                        </a>
                    </Link>

                </figure>

                <ResumeCart />
                
            </Grid>

        </Container>


    )

};