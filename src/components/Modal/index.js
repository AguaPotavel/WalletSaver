import { useState, useEffect, useRef } from 'react'

import {
    Container,
    ModalArea,
    ModalConfirmEncryption,
    ModalPhishingAlert
} from './styles'

import Lottie from 'react-lottie'
import loading from '../../assets/lottie/loading_lock.json'


// Buttons //
import { ButtonPrimary, ButtonSecondary } from '../Buttons'

// Theme import //
import { useTheme } from 'styled-components'

// Icons //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// encrypt function //
import { encrypt } from '../../utils/encrypt'

// navigation //
import { useNavigate } from "react-router-dom";

// localization //
import { useLang } from '../../context/langContext'


export function Modal({setShowModal, modalContent}){
    const [stepConfirmation, setStepConfirmation] = useState(0)
    const [copySuccess, setCopySuccess] = useState('');
    const [encrypted, setEncrypted] = useState({})
    const textAreaRef = useRef(null);
    const { strings, lang } = useLang()
    strings.setLanguage(lang)

    const nextStep = () => {
        setStepConfirmation(stepConfirmation + 1)
    }

    useEffect(()=> {
        strings.setLanguage(lang)
    }, [lang])

    useEffect(()=> {
        if(stepConfirmation === 1){
            setEncrypted(encrypt(modalContent.name, modalContent.password, modalContent.seeds))
            setTimeout(()=> nextStep(), 1800)
        }
        //console.log('stepConfirmation:', stepConfirmation)
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
        setShowModal(false);
        navigate('/')
    }

    const navigate = useNavigate()
    
    function EncryptionConfirm(){
        return(<>
        <ModalConfirmEncryption className={stepConfirmation === 0 ? '' : 'hide'}>
            <div className='close-button' onClick={()=> setShowModal(false)}>
                <FontAwesomeIcon icon={faTimes} size='1x' color={theme.colors.primary}/>
            </div>
            <div className='items'>
                <div className='item'>
                    <label className='header'>{strings.generic.modal.step_0.name}</label>
                    <label>{modalContent.name}</label>
                </div>
                <div className='item'>
                    <label className='header'>{strings.generic.modal.step_0.walletName}</label>
                    <label>{modalContent.walletName}</label>
                </div>
                <div className='item'>
                    <label className='header'>{strings.generic.modal.step_0.password}</label>
                    <label>{modalContent.password}</label>
                </div>
                <div className='item'>
                    <label className='header'>{strings.generic.modal.step_0.words}</label>
                    <label>{modalContent.seeds.map((w)=> {
                        return w.phrase + ' '
                    })}</label>
                </div>
                <div className='item button'>
                    <ButtonPrimary text={strings.generic.modal.step_0.confirm} action={nextStep}/>
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
                        {strings.generic.modal.step_1.title} 
                    </label>
                    <label className='description'>
                        {strings.generic.modal.step_1.description} 
                    </label>
                    <textarea ref={textAreaRef} value={JSON.stringify(encrypted)} readOnly/>
                    <div className='button-confirm'>
                        {copySuccess != '' ? <ButtonSecondary text={strings.generic.modal.step_1.close } action={end}/>: <ButtonPrimary text={strings.generic.modal.step_1.copy } icon={'copy'} action={copyToClipboard}/>}                       
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

