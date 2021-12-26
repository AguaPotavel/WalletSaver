import { 
    Container
} from './styles'

import logo_svg from '../../assets/svgs/logo/logo_version_white.svg' 



export default function Navbar(){
    return(
    <Container>
        <a className='logo' href='/'>
            <img src={logo_svg}/>    
        </a>

        <div className='itens'>
            <a href='/generate'>
                Generate
            </a>
            <a href='/recover'>
                Recover
            </a>
            <a href='/about'>
                About
            </a>
            <a href='/contact'>
                Contact
            </a>
        </div>
    </Container>)
}