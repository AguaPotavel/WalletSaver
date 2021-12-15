import { 
    Container
} from './styles'

import logo_svg from '../../assets/svgs/logo/logo_version_white.svg' 



export default function Navbar(){
    return(
    <Container>
        <div className='logo'>
            <img src={logo_svg}/>    
        </div>

        <div className='itens'>
            <a>
                Generate
            </a>
            <a>
                Recover
            </a>
            <a>
                About
            </a>
            <a>
                Donate
            </a>
        </div>
    </Container>)
}