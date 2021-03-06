import {
    Container,
    ListIcons
} from './styles'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithubAlt, faTelegram, faGoogle } from '@fortawesome/free-brands-svg-icons'

export default function Contact(){
    return(<>
    <Navbar/>
        <Container>
            <ListIcons>
                <li>
                    <a href='https://discord.gg/fZ3RCwng'>
                        <FontAwesomeIcon icon={faDiscord} size='1x' className='fa'/>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/AguaPotavel/WalletSaver'>
                        <FontAwesomeIcon icon={faGithubAlt} size='1x' className='fa'/>
                    </a>
                </li>
                <li>
                    <a href='https://t.me/+5mVOUnCE4rQ1NjMx'>
                        <FontAwesomeIcon icon={faTelegram} size='1x' className='fa'/>
                    </a>
                </li>
                {/* <li>
                    <a>
                        <FontAwesomeIcon icon={faGoogle} size='1x' className='fa'/>
                    </a>
                </li> */}
            </ListIcons>
        </Container>
    <Footer/>
    </>)
}