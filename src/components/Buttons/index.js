import { 
    Container
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFileDownload, faCopy } from '@fortawesome/free-solid-svg-icons'
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
            {icon === 'copy' && (<FontAwesomeIcon icon={faCopy} size='1x' color={'#fff'}/>)}
        </div>)}
    </Container>)
}

export function ButtonSecondary({text, action, icon, customStyle}){
    return(
    <Container className='secondary' style={customStyle} onClick={()=> action()}>
        <div className='content'>
            {text}
        </div>
        {icon !== null && (
        <div className='content'>
            {icon === 'plus' && (<FontAwesomeIcon icon={faPlus} size='1x' color={'#fff'}/>)}
            {icon === 'copy' && (<FontAwesomeIcon icon={faCopy} size='1x' color={'#fff'}/>)}
        </div>)}
    </Container>)
}
