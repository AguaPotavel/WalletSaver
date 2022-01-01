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

// layout //
import  Navbar  from '../../components/Navbar'
import  Footer  from '../../components/Footer'

// backgroundAnimation // 
import { BackgroundRecover } from '../../components/AnimatedBackground';

// Decrypt function // 
import { decrypt } from '../../utils/encrypt';


export default function Recover(){
    const [ name, setName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ encrypted, setEncrypted] = useState('')
    const [ seeds, setSeeds ] = useState('')
    const [ stringSeeds, setStringSeeds] = useState('')


    const confirm = () => {
        // console.log('confirmado')
        try{
            const data = JSON.parse(encrypted)
            const response = decrypt(name, password, data.seeds, data.validator)
            if(response){
                console.log(response)
                setSeeds(response.seeds)
                setStringSeeds(response.seeds.join(' '))

            }else{
                toast.dark('Senha ou nome inválido!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
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

    useEffect(()=> {
        console.log(seeds)
    }, [seeds])

    useEffect(()=> {
        toast.dark('Sempre verifique se está no dominio correto: https://walletsaver.io', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            type: 'warning'
            });
    }, [])

    return(<>
    <Navbar/>
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

            {stringSeeds !== '' && (
            <div className='item'>
                <label>
                    Seeds:
                </label>
                <textarea placeholder='seeds' defaultValue={'words'} value={stringSeeds} readOnly/>
            </div>)}
            
            
        </ContentForm>
        <BackgroundRecover/>
    </Container>
    <ToastContainer role='success'/>
    <Footer/>
    </>)
}