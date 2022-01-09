import React, { useEffect, useState } from 'react';

import { 
    Container,
    ContainerMobile
} from './styles'

import logo_svg from '../../assets/svgs/logo/logo_version_white.svg' 

import Hamburger from './Hamburger'

import { useTheme } from 'styled-components';

import { useLang } from '../../context/langContext';



export default function Navbar(){
    const [height, setHeight] = useState();
    const [width, setWidth] = useState();
    const [showNav, setShowNav] = useState('');
    const theme = useTheme()
    const { strings } = useLang();

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        setHeight(height);
        setWidth(width);
      }
    
      useEffect(() => {
        getWindowDimensions();
        window.addEventListener("resize", getWindowDimensions);
      }, []);

    // const handleNavToggle = () => {
    //     if(showNav === ''){
    //         setShowNav('show')
    //     }else{
    //         setShowNav('')
    //     }
    // }


    return(<>
        {width > 600 ? <Container>
        <a className='logo' href='/'>
            <img src={logo_svg}/>    
        </a>

        <div className='itens'>
            <a href='/generate'>
                {strings.navbar.generate}
            </a>
            <a href='/recover'>
                {strings.navbar.recover}
            </a>
            <a href='/about'>
                {strings.navbar.about}
            </a>
            <a href='/contact'>
                {strings.navbar.contact}
            </a>
        </div>
    </Container>:
    <ContainerMobile width={width}>
        <a className='logo' href='/'>
            <img src={logo_svg}/>    
        </a>
        
        <Hamburger color={theme.colors.accent} type={'Collapse'} action={setShowNav}/>

        <div className={`itens ${showNav}`}>
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
    </ContainerMobile>
    }
    
    </>)
}