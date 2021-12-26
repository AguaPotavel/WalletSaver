import {
    Container,
    ListIcons
} from './styles'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAudioDescription } from '@fortawesome/free-solid-svg-icons'

export default function Contact(){
    return(<>
    <Navbar/>
        <Container>
            <ListIcons>
                <li>
                    <a>

                    </a>
                </li>
                <li>
                    <a>
                        
                    </a>
                </li>
                <li>
                    <a>
                        
                    </a>
                </li>
            </ListIcons>
        </Container>
    <Footer/>
    </>)
}