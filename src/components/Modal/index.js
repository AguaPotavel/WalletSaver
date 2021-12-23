import {
    Container,
    ModalArea,
    ModalConfirmEncryption
} from './styles'

import { ButtonPrimary } from '../Buttons'


export function Modal({setShowModal}){
    return(
    <Container onClick={()=> setShowModal(false)}>
        <ModalArea>
            <EncryptionConfirm/>
        </ModalArea>
    </Container>)
}

function EncryptionConfirm(){
    return(<>
    <ModalConfirmEncryption>
        <div className='items'>
            <div className='item'>
                <label className='header'>NOME</label>
                <label>Pedro</label>
            </div>
            <div className='item'>
                <label className='header'>NOME DA CARTEIRA</label>
                <label>Metamask de trade</label>
            </div>
            <div className='item'>
                <label className='header'>SENHA</label>
                <label>Pedro</label>
            </div>
            <div className='item'>
                <label className='header'>PALAVRAS</label>
                <label>Pedro martelo arvore cachorro batata teste onibus marcelo nove dez onze doze batata</label>
            </div>
            <div className='item button'>
                <ButtonPrimary text={'Confirmar'}/>
            </div>
        </div>
    </ModalConfirmEncryption>
    </>)
}