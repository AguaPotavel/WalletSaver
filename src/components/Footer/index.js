import {
    Container,
    Contact,
    SelectLang
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faTelegram, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useLang } from '../../context/langContext'


export default function Footer(){
    const { strings, setLang } = useLang()

    return(
    <Container>
        <div className={'left'}>
            <Contact>
                <h2>{strings.footer.contact}</h2>
                <div className='icons'>
                    <FontAwesomeIcon icon={faDiscord} className='fa'/>
                    <FontAwesomeIcon icon={faGithub} className='fa'/>
                    <FontAwesomeIcon icon={faTelegram} className='fa'/>
                    <FontAwesomeIcon icon={faGoogle} className='fa'/>
                </div>
            </Contact>
            <SelectLang>
                <h2>Language</h2>
                <div className='icons'>
                    <a className={'lang'} onClick={()=> setLang('pt')}>BR</a>
                    <a className={'lang'} onClick={()=> setLang('en')}>EN</a>
                </div>
            </SelectLang>
            <Contact>
                <h2>{strings.footer.support}</h2>
                <label>
                    (BEP20, ERC20): 0x02252D97a08bCfc67166815149A1a282d1C7c026
                </label>
            </Contact>
        </div>
    </Container>)
}