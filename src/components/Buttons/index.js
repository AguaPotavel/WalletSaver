import { 
    Container
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'styled-components'

export function ButtonPrimary({text, action, icon, customStyle}){
    return(
    <Container className='primary' style={customStyle} onClick={()=> action()}>
        <div className='content'>
            {text}
        </div>
        {icon !== null && (
        <div className='content'>
            {icon === 'plus' && (<FontAwesomeIcon icon={faPlus} size='1x' color={'#fff'}/>)}
            
        </div>)}
    </Container>)
}
