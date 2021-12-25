import React, { useState, useEffect } from 'react'


import {
    Container,
    PhishingWarning,
    ContentForm
} from './styles'

// buttons //
import { ButtonPrimary } from '../../components/Buttons'

// toast //
import { ToastContainer, toast } from 'react-toastify';


export default function Recover(){
    const [ name, setName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ encrypted, setEncrypted] = useState('')


    const confirm = () => {
        console.log('confirmado')
        try{
            const data = JSON.parse(encrypted)
        }catch(e){
            toast.dark('Envie um Json válido', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        
        
        
    }

    return(<>
    
    <Container>
        <ContentForm>
            <div className='item'>
                <label>
                    Nome:
                </label>
                <input placeholder={'Daniel'} value={name} onChange={text => setName(text.target.value)}/>
            </div>
            <div className='item'>
                <label>
                    Senha:
                </label>
                <input placeholder={'Pjn@k8-l'} type={'password'} value={password} onChange={text => setPassword(text.target.value)}/>
            </div>
            <div className='item'>
                <label>
                    Json:
                </label>
                <textarea placeholder='Json encryptado aqui!' value={encrypted} onChange={text => setEncrypted(text.target.value)}/>
            </div>
            
            <div className='item'>
                <ButtonPrimary text={'confirmar'} action={confirm} />
            </div>
            
        </ContentForm>
    </Container>
    <ToastContainer role='success'/>
    </>)
}