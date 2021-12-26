
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
import Computer from '../../assets/lottie/computer_blue_fraud.json'
import HardWallet from '../../assets/lottie/hardWallet.json'
import Encryption from '../../assets/lottie/encryption.json'


// animations css //
import { SingleCircle } from '../../components/AnimatedBackground'
import { animated, useSpring } from '@react-spring/web'

// theme //
import { useTheme } from 'styled-components'


// Button //
import { ButtonPrimary } from '../../components/Buttons'



export default function About(){

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


    return(
        <WrapperParallax>
            <Parallax pages={7} style={{ top: '0', left: '0' }}>
                    <ParallaxLayer
                    offset={0}
                    speed={1.5}
                    style={{ display: 'flex', marginTop: 150, flex: 1, height: '100%' }}>
                    <Page1>
                        <div className='text'>
                            <h1>Sobre o projeto</h1>
                            <label>
                                Projeto surgiu como um meio de poder salvar minhas carteiras no meu computador com segurança, eu acabo entrando em vários projetos, e conectando minha metamask nesses sites muitas vezes não confiáveis,
                                para isso criei carteiras diferentes para que eu não caia em um <label className='important'>SCAM</label>, ou se cair não perder tudo que possuo, porém com isso acabo tendo que guardar muitas carteiras com suas respectivas palavras seeds, e como guardar elas com segurança?
                            </label>
                            <animated.div className='anim' style={move}>
                                <Lottie 
                                    options={defaultOptions}
                                    height={120}
                                    width={120}
                                />
                            </animated.div>
                        </div>
                    </Page1>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={1.5} style={{ display: 'flex' }}>
                        <SingleCircle/>
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
                            <h1>Seeds</h1>
                            <label>
                                Guardar as seeds no computador é muito perigoso, pois se alguém tiver acesso ao seu computador consegue simplesmente roubar elas e acessar sua carteira.
                            </label>
                        </div>
                        <div className='image'>
                            <animated.div className='anim' style={move}>
                                <Lottie 
                                    options={computerOptions}
                                    height={600}
                                    width={600}
                                />
                            </animated.div>
                        </div>
                    </Page2>
                    </ParallaxLayer>

                    <ParallaxLayer
                    offset={2}
                    speed={2.5}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.surface_3 }}>
                    <Page3>
                        <div className='image'>
                            <animated.div className='anim' style={move}>
                                <Lottie 
                                    options={hardWalletOptions}
                                    height={600}
                                    width={600}
                                />
                            </animated.div>
                        </div>
                        <div className='text'>
                            <h1>Cold Wallet</h1>
                            <label>
                                Uma alternativa para segurança são as Cold Wallets, que requerem uma confirmação física para transações, porém são muito caras e lentas na comunicação, oque normalmente faz que elas sejam utilizadas
                                somente para carteiras de Hold.
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
                            <h1>Wallet Saver</h1>
                            <label>
                                Wallet Saver surgiu como uma alternativa gratuita, simples de utilizar, em poucos passos, ele gera um arquivo com suas palavras
                                protegidas por cryptografia, totalmente open source com <a href='https://github.com/AguaPotavel/WalletSaver'>repositório no Github</a>
                            </label>
                        </div>
                        <div className='image'>
                            <animated.div className='anim' style={move}>
                                <Lottie 
                                    options={encryptionOptions}
                                    height={600}
                                    width={600}
                                />
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
                            <h1>Assista como funciona</h1>
                            <div className='player'>
                                <ReactPlayer url={'https://www.youtube.com/watch?v=-RzTiV18vQk'} controls={true}/>
                            </div>
                        </div>
                    </Page5>
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={5}
                        speed={2.5}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.warning  }}>
                        <Page6>
                            <div className='text'>
                                <h1 style={{color: theme.colors.secondary_hover}}>ATENÇÃO</h1>
                                <label>
                                    Para a sua proteção e também a minha, o wallet saver, <label className='bold important'>não grava ou salva qualquer informação sobre os dados preenchidos</label>, 
                                    se você fazer a cryptografia e perder ou esquecer as informações passadas, <label className='bold important'>não existe uma maneira de recupera-los</label> , então esteja ciente da senha e nome que colocar para encryptar suas seeds
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
                                <h1>Apoio</h1>
                                <label>
                                    A aplicação é grátis, porém existe gastos para manter rodando, se você gostaria de ajudar com qualquer quantia (BEP20), essa é a carteira para manutenção do site!
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