import {
    Container,
    ContentForm
} from './styles'


// fontAwesome //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'

export default function Generate(){
    return(
    <Container>
        <ContentForm>
            <div className='item'>
                <label>
                    Nome:
                </label>
                <input placeholder={'Daniel'}/>
            </div>
            <div className='item'>
                <label>
                    Senha:
                </label>
                <input placeholder={'Pjn@k8-l'} type={'password'}/>
            </div>
            <div className='item'>
                <label>
                    Palavra:
                </label>
                <div className='add-phrase'>
                    <input placeholder={'unplat'} type={'password'}/>
                    <a className='add-button'>
                        <FontAwesomeIcon icon={faKey}/>
                    </a>
                    
                </div>
                
            </div>
        </ContentForm>
    </Container>)
}