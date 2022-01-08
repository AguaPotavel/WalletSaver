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
                {strings.homeStrings.faq.faq_title}
            </h1>
            <FaqItem>
                <label className='question'>
                    {strings.homeStrings.faq.item_1.question}
                </label>
                <label className='answer'>
                    {strings.homeStrings.faq.item_1.answer}
                </label>
            </FaqItem>
            <FaqItem>
                <label className='question'>
                    {strings.homeStrings.faq.item_2.question}
                </label>
                <label className='answer'>
                    {strings.homeStrings.faq.item_2.answer}
                </label>
            </FaqItem>
            <FaqItem>
                <label className='question'>
                    {strings.homeStrings.faq.item_3.question}
                </label>
                <label className='answer'>
                    {strings.homeStrings.faq.item_3.answer}
                </label>
            </FaqItem>
        </Faq>
        
    </Container>
    <Footer/>
    </>)
}