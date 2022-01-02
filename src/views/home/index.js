import React, { useState } from 'react'

import {
    Container,
    Header,
    CardsContainer,
    Card,
    Works,
    Faq,
    FaqItem
} from './styles'

import Lottie from 'react-lottie'
import { useTheme } from 'styled-components'


// Animation //
import wallet from '../../assets/lottie/walletHomeGrey.json'
import { animated, useSpring } from '@react-spring/web'


// Image //
import svg_home from '../../assets/images/svg_home.svg'

// layout //
import  Navbar  from '../../components/Navbar'
import  Footer  from '../../components/Footer'

// fontAwesome //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faBitcoin, faGithub } from '@fortawesome/free-brands-svg-icons'

// Animation BG //
import { BackgroundHome } from '../../components/AnimatedBackground'

// Localization //
import LocalizedStrings from 'react-localization';
import siteStrings from '../../utils/siteStrings.json'
let strings = new LocalizedStrings(
    siteStrings
   );
strings.setLanguage('pt')


export default function Home(){

    const theme = useTheme()

    const breath = useSpring({
        to: { y: 0,},
        from: { y: -8,},
        loop: { reverse: true },
        reverse: true,
        config: {
            mass: 5, tension: 350, friction: 0, duration: 800
        }
      })

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: wallet,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return(<>
    <Navbar/>
    <Container>
        <Header>
            <animated.div className='descHome'>
                <h1>
                    {strings.homeStrings.header.title}
                </h1>
                <label>
                    {strings.homeStrings.header.description}
                </label>
                <button className='button'>
                    {strings.homeStrings.header.button}
                </button>
            </animated.div>
            <animated.div className='image' style={breath}>
                <Lottie 
                    options={defaultOptions}
                    height={300}
                    width={300}
                />
            </animated.div>
            <BackgroundHome/>
        </Header>
        <CardsContainer>
            <Card>
                <FontAwesomeIcon icon={faKey} color={theme.colors.primary} size='4x'/>
                <label className='description'>
                    {strings.homeStrings.cards.card_1}
                </label>
            </Card>
            <Card>
                <FontAwesomeIcon icon={faBitcoin} color={theme.colors.primary} size='4x'/>
                <label className='description'>
                    {strings.homeStrings.cards.card_2}
                </label>
            </Card>
            <Card>
            <FontAwesomeIcon icon={faGithub} color={theme.colors.primary} size='4x'/>
                <label className='description'>
                    {strings.homeStrings.cards.card_3}
                </label>
            </Card>

        </CardsContainer>
        <Works>
            <label className='header'>
                {strings.homeStrings.works.title}
            </label>
            <label className='description'>
                {strings.homeStrings.works.description}
            </label>
            <button className='button'>
                {strings.homeStrings.works.button}
            </button>
        </Works>
        <Faq>
            <h1>
                Perguntas frequentes
            </h1>
            <FaqItem>
                <label className='question'>
                    É seguro?
                </label>
                <label className='answer'>
                    Salvando o arquivo cryptografado mesmo que alguém tenha acesso ao seu computador, e tenha
                    o seu arquivo ele não terá acesso as suas palavras passe, pois não terá sua senha!
                </label>
            </FaqItem>
            <FaqItem>
                <label className='question'>
                    Como posso confiar no site?
                </label>
                <label className='answer'>
                    Wallet Saver não salva qualquer informação, pois ao cryptografar o site não retem suas informações, o algoritmo
                    simplesmente faz a cryptografia e disponibiliza para ti o download do seu arquivo.
                </label>
            </FaqItem>
            <FaqItem>
                <label className='question'>
                    Mesmo assim não confio no site, como posso utilizar então?
                </label>
                <label className='answer'>
                    Se você não confia no site, pode verificar todo o código do site no <a>github</a> e tirar suas conclusões, ou então retire algumas palavras para validar o funcionamento!
                </label>
            </FaqItem>
            <FaqItem>
                <label className='question'>
                    Oque acontece se o site não existir mais?
                </label>
                <label className='answer'>
                    O código está no <a>github</a>, oque torna fácil vc utilizar!
                </label>
            </FaqItem>
        </Faq>
        
    </Container>
    <Footer/>
    </>)
}