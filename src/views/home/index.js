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
import wallet from '../../assets/lottie/walletHome.json'


// Image //
import svg_home from '../../assets/images/svg_home.svg'

// fontAwesome //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faBitcoin, faGithub, faGithubAlt } from '@fortawesome/free-brands-svg-icons'


export default function Home (){

    const theme = useTheme()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: wallet,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return(
    <Container>
        <Header>
            <div className='descHome'>
                <h1>
                    Proteja suas carteiras
                </h1>
                <label>
                    De maneira simples e fácil, salve suas palavras passes através de um arquivo encryptado
                </label>
                <button className='button'>
                    Vamos lá
                </button>
            </div>
            <div className='image'>
                <Lottie 
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
        </Header>
        <CardsContainer>
            <Card>
                <FontAwesomeIcon icon={faKey} color={theme.colors.primary} size='4x'/>
                <label className='description'>
                    Salve todas as suas carteiras, sem tem que salvar as palavras "seed".
                </label>
            </Card>
            <Card>
                <FontAwesomeIcon icon={faBitcoin} color={theme.colors.primary} size='4x'/>
                <label className='description'>
                    Totalmente sem custo, pensado para facilitar a vida do usuário comum
                </label>
            </Card>
            <Card>
            <FontAwesomeIcon icon={faGithub} color={theme.colors.primary} size='4x'/>
                <label className='description'>
                    Seguro com código aberto no github, livre para acesso
                </label>
            </Card>

        </CardsContainer>
        <Works>
            <label className='header'>
                Como funciona?
            </label>
            <label className='description'>
                Através de uma ferramenta simples, você poderá salvar um arquivo em formato "txt", com as suas palavras
                de recuperação da carteira, só que encryptada por uma senha sua!
            </label>
            <button className='button'>
                Assista um vídeo!
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
        
    </Container>)
}