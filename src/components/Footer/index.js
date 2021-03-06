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

    function openUrl(url){
        window.open(url, '_blank');
    } 

    return(
    <Container>
        <div className={'left'}>
            <Contact>
                <h2>{strings.footer.contact}</h2>
                <div className='icons'>
                    <FontAwesomeIcon icon={faDiscord} className='fa'onClick={()=> openUrl('https://discord.gg/fZ3RCwng')} />
                    <FontAwesomeIcon icon={faGithub} className='fa' onClick={()=> openUrl('https://github.com/AguaPotavel/WalletSaver')}/>
                    <FontAwesomeIcon icon={faTelegram} className='fa' onClick={()=> openUrl('https://t.me/+5mVOUnCE4rQ1NjMx')}/>
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