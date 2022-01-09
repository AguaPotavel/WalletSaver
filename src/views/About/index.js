import React, { useState, useEffect } from 'react'


import { 
    WrapperParallax,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6
} from './styles'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import ReactPlayer from 'react-player'


// import lottie //
import Lottie from 'react-lottie'


// animations lottie// 
import ScrollDown from '../../assets/lottie/scrollDown.json'
import Computer from '../../assets/lottie/computerGreen.json'
import HardWallet from '../../assets/lottie/hardWallet.json'
import Encryption from '../../assets/lottie/encryption.json'


// animations css //
import { SingleCircle, BackgroundRecover, SingleTriangle, IconsScrolling } from '../../components/AnimatedBackground'
import { animated, useSpring } from '@react-spring/web'

// theme //
import { useTheme } from 'styled-components'


// Button //
import { ButtonPrimary } from '../../components/Buttons'


// Localization //
import { useLang } from '../../context/langContext'



export default function About(){
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

    const theme = useTheme()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ScrollDown,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    const computerOptions = {
        loop: true,
        autoplay: true,
        animationData: Computer,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const hardWalletOptions = {
        loop: true,
        autoplay: true,
        animationData: HardWallet,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const encryptionOptions = {
        loop: true,
        autoplay: true,
        animationData: Encryption,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const move = useSpring({
        to: { y: 0, },
        from: { y: 20},
        loop: { reverse: true },
        reverse: true,
        config: {
            mass: 5, tension: 350, friction: 0, duration: 800
        }
    })

    const { strings, lang } = useLang()
    
    strings.setLanguage(lang)


    return(
        <WrapperParallax>
            <Parallax pages={7} style={{ top: '0', left: '0' }}>
                    <ParallaxLayer
                    offset={0}
                    speed={1.5}
                    style={{ display: 'flex', marginTop: 150, flex: 1, height: '100%' }}>
                    <Page1>
                        <div className='text'>
                            <h1>{strings.aboutStrings.page_1.title}</h1>
                            <label>
                                {strings.aboutStrings.page_1.text}                            
                            </label>
                            <animated.div className='anim' style={move}>
                                {width >= 600 && (
                                    <Lottie 
                                        options={defaultOptions}
                                        height={120}
                                        width={120}
                                    />
                                )}
                                {width < 600 && (
                                    <Lottie 
                                        options={defaultOptions}
                                        height={100}
                                        width={100}
                                    />
                                )}
                            </animated.div>
                        </div>
                    </Page1>
                    </ParallaxLayer>
                    
                    <ParallaxLayer offset={0} speed={1.5} style={{ display: 'flex' }}>
                        <SingleTriangle position={'left'}/>
                    </ParallaxLayer>
                
                    <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: theme.colors.accent }} />
                
                    <ParallaxLayer
                    offset={1}
                    speed={1.5}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                    }}>
                    <Page2>
                        <div className='text'>
                            <h1>{strings.aboutStrings.page_2.title}</h1>
                            <label>
                                {strings.aboutStrings.page_2.text}
                            </label>
                        </div>
                        <div className='image'>
                            <animated.div className='anim' style={move}>
                                {width >= 600 && (
                                    <Lottie 
                                        options={computerOptions}
                                        height={600}
                                        width={600}
                                    />
                                )}
                                {width < 600 && (
                                    <Lottie 
                                        options={computerOptions}
                                        height={300}
                                        width={300}
                                    />
                                )}
                            </animated.div>
                        </div>
                    </Page2>
                    </ParallaxLayer>

                    <ParallaxLayer offset={3} speed={1.8} style={{ display: 'flex' }}>
                        <IconsScrolling/>
                    </ParallaxLayer>

                    <ParallaxLayer
                    offset={2}
                    speed={2.5}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.surface_3 }}>
                    <Page3>
                        <div className='image'>
                            <animated.div className='anim' style={move}>
                                {width >= 600 && (
                                    <Lottie 
                                        options={hardWalletOptions}
                                        height={600}
                                        width={600}
                                    />
                                )}
                                {width < 600 && (
                                    <Lottie 
                                        options={hardWalletOptions}
                                        height={300}
                                        width={300}
                                    />
                                )}
                            </animated.div>
                        </div>
                        <div className='text'>
                            <h1>{strings.aboutStrings.page_3.title}</h1>
                            <label>
                                {strings.aboutStrings.page_3.text}
                            </label>
                        </div>
                    </Page3>
                    </ParallaxLayer>

                    {/* <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: theme.colors.accent, width: 100, left: 1000, zIndex: -1, height: 300 }} /> */}
                    <ParallaxLayer offset={2} speed={1.3} style={{ backgroundColor: theme.colors.accent, right: 0, zIndex: -1, height: 800 }} />
                    {/* <ParallaxLayer offset={2} speed={1.8} style={{ backgroundColor: theme.colors.accent, width: 200, left: 400, zIndex: -1, height: 250 }} />
                    <ParallaxLayer offset={2} speed={1.5} style={{ backgroundColor: theme.colors.accent, width: 500, left: 700, zIndex: -1, height: 500 }} /> */}

                    <ParallaxLayer
                    offset={3}
                    speed={2.5}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Page4>
                        <div className='text'>
                            <h1>{strings.aboutStrings.page_4.title}</h1>
                            <label>
                                {strings.aboutStrings.page_4.text}
                            </label>
                        </div>
                        <div className='image'>
                            <animated.div className='anim' style={move}>
                                 {width >= 600 && (
                                    <Lottie 
                                        options={encryptionOptions}
                                        height={600}
                                        width={600}
                                    />
                                )}
                                {width < 600 && (
                                    <Lottie 
                                        options={encryptionOptions}
                                        height={300}
                                        width={300}
                                    />
                                )}
                            </animated.div>
                        </div>
                    </Page4>
                    </ParallaxLayer>
                    <ParallaxLayer
                    offset={4}
                    speed={2.5}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.primary  }}>
                    <Page5>
                        <div className='text'>
                            <h1>{strings.aboutStrings.page_5}</h1>
                            {width >= 600 && (
                                    <div className='player'>
                                        {/* <ReactPlayer url={'https://www.youtube.com/watch?v=-RzTiV18vQk'} controls={true} /> */}
                                    </div>
                                )}
                                {width < 600 && (
                                    <div className='player'>
                                        {/* <ReactPlayer url={'https://www.youtube.com/watch?v=-RzTiV18vQk'} controls={true} width={300} height={200}/> */}
                                    </div>
                                )}
                            
                        </div>
                    </Page5>
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={5}
                        speed={2.5}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.warning  }}>
                        <Page6>
                            <div className='text'>
                                <h1 style={{color: theme.colors.secondary_hover}}>{strings.aboutStrings.page_6.title}</h1>
                                <label>
                                    {strings.aboutStrings.page_6.text}                                
                                </label>
                            </div>
                        </Page6>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={6}
                        speed={2.5}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.secondary  }}>
                        <Page6>
                            <div className='text'>
                                <h1>{strings.aboutStrings.page_7.title}</h1>
                                <label>
                                    {strings.aboutStrings.page_7.text}
                                </label>
                                <label className='important'>
                                    0x02252D97a08bCfc67166815149A1a282d1C7c026
                                </label>
                                <a href='/' className='button'>
                                    Voltar
                                </a>
                            </div>
                        </Page6>
                    </ParallaxLayer>
            </Parallax>
        </WrapperParallax>
    )
}