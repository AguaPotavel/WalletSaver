import { useState, useEffect, useRef } from 'react'

import {
    Container,
    ModalArea,
    ModalConfirmEncryption
} from './styles'

import Lottie from 'react-lottie'
import loading from '../../assets/lottie/loading_lock.json'

import { ButtonPrimary, ButtonSecondary } from '../Buttons'

import { useTheme } from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


export function Modal({setShowModal, modalContent}){
    const [stepConfirmation, setStepConfirmation] = useState(0)
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    const nextStep = () => {
        setStepConfirmation(stepConfirmation + 1)
    }

    useEffect(()=> {
        if(stepConfirmation === 1){
            setTimeout(()=> nextStep(), 1800)
        }
        console.log('stepConfirmation:', stepConfirmation)
    }, [stepConfirmation])

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        // e.target.focus();
        setCopySuccess('Copied!');
      };

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    const theme = useTheme()

    const end = () => {
        setShowModal(false)
    }
    
    function EncryptionConfirm(){
        return(<>
        <ModalConfirmEncryption className={stepConfirmation === 0 ? '' : 'hide'}>
            <div className='close-button' onClick={()=> setShowModal(false)}>
                <FontAwesomeIcon icon={faTimes} size='1x' color={theme.colors.primary}/>
            </div>
            <div className='items'>
                <div className='item'>
                    <label className='header'>NOME</label>
                    <label>{modalContent.name}</label>
                </div>
                <div className='item'>
                    <label className='header'>NOME DA CARTEIRA</label>
                    <label>{modalContent.walletName}</label>
                </div>
                <div className='item'>
                    <label className='header'>SENHA</label>
                    <label>{modalContent.password}</label>
                </div>
                <div className='item'>
                    <label className='header'>PALAVRAS</label>
                    <label>{modalContent.seeds.map((w)=> {
                        return w.phrase + ' '
                    })}</label>
                </div>
                <div className='item button'>
                    <ButtonPrimary text={'Confirmar'} action={nextStep}/>
                </div>
            </div>
        </ModalConfirmEncryption>
        <ModalConfirmEncryption className={stepConfirmation === 1 ? '' : 'hide'}>
                <Lottie 
                    options={defaultOptions}
                    height={250}
                    width={250}
                />
        </ModalConfirmEncryption>
        <ModalConfirmEncryption className={stepConfirmation === 2 ? '' : 'hide'}>
                <div className='confirmed'>
                    <label className='title'>
                        Encryptado!
                    </label>
                    <label className='description'>
                        Párabens, você está mais protegido, mas não se engane,
                        permaneça mantendo cuidado e guardando sua carteira em
                        local seguro :)
                    </label>
                    <textarea ref={textAreaRef} value={JSON.stringify(modalContent)}/>
                    <div className='button-confirm'>
                        {copySuccess != '' ? <ButtonSecondary text={'Fechar'} action={end}/>: <ButtonPrimary text={'copiar'} icon={'copy'} action={copyToClipboard}/>}                       
                    </div>
                </div>
        </ModalConfirmEncryption>
        </>)
    }

    return(
    <Container>
        <ModalArea>
            <EncryptionConfirm/>
        </ModalArea>
    </Container>)
}

