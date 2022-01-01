import {
    Container,
    Contact
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faTelegram, faGoogle } from '@fortawesome/free-brands-svg-icons'


export default function Footer(){
    return(
    <Container>
        <div className='left'>
            <Contact>
                <h2>Contato</h2>
                <div className='icons'>
                    <FontAwesomeIcon icon={faDiscord} className='fa'/>
                    <FontAwesomeIcon icon={faGithub} className='fa'/>
                    <FontAwesomeIcon icon={faTelegram} className='fa'/>
                    <FontAwesomeIcon icon={faGoogle} className='fa'/>
                </div>
            </Contact>
        </div>
        <div className='right'>
        <Contact>
                <h2>Apoio</h2>
                <label>
                    Carteira (BEP20): 0x02252D97a08bCfc67166815149A1a282d1C7c026
                </label>
            </Contact>
        </div>
    </Container>)
}