import React, { useEffect, useState } from 'react';

import { 
    Container,
    ContainerMobile
} from './styles'

import logo_svg from '../../assets/svgs/logo/logo_version_white.svg' 



export default function Navbar(){
    const [height, setHeight] = useState();
    const [width, setWidth] = useState();

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        setHeight(height);
        setWidth(width);
      }
    
      useEffect(() => {
        getWindowDimensions();
        window.addEventListener("resize", getWindowDimensions);
      }, []);


    return(<>
        {width > 500 ? <Container>
        <a className='logo' href='/'>
            <img src={logo_svg}/>    
        </a>

        <div className='itens'>
            <a href='/generate'>
                Generate
            </a>
            <a href='/recover'>
                Recover
            </a>
            <a href='/about'>
                About
            </a>
            <a href='/contact'>
                Contact
            </a>
        </div>
    </Container>:
    <ContainerMobile>

    </ContainerMobile>
    }
    
    </>)
}