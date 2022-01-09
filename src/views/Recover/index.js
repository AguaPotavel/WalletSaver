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

// localization //
import { useLang } from '../../context/langContext';


export default function Recover(){
    const [ name, setName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ encrypted, setEncrypted] = useState('')
    const [ seeds, setSeeds ] = useState('')
    const [ stringSeeds, setStringSeeds] = useState('')
    const { strings, lang } = useLang()
    strings.setLanguage(lang)

    const [ toastPassword, setToastPassword] = useState(strings.generic.wrongPassword)
    const [ toastAlert, setToastAlert] = useState(strings.generic.phishingAlert)
    const [ toastJson, setToastJson] = useState(strings.generic.wrongJson)

    useEffect(()=> {
        strings.setLanguage(lang)
        setToastPassword(strings.generic.wrongPassword)
        setToastAlert(strings.generic.phishingAlert)
        setToastJson(strings.generic.wrongJson)
    }, [lang])


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
                toast.dark(toastPassword, {
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
            toast.dark(toastJson, {
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
        toast.dark(toastAlert, {
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
                    {strings.recoverStrings.name}:
                </label>
                <input placeholder={'Clóvis'} value={name} name="name" onChange={text => setName(text.target.value)}/>
            </div>
            <div className='item'>
                <label>
                    {strings.recoverStrings.password}:
                </label>
                <input placeholder={'Pjn@k8-l'} type={'password'} name="password" value={password} onChange={text => setPassword(text.target.value)}/>
            </div>
            <div className='item'>
                <label>
                    Json:
                </label>
                <textarea placeholder={strings.recoverStrings.jsonPlaceholder} value={encrypted} onChange={text => setEncrypted(text.target.value)}/>
            </div>
            
            <div className='item'>
                <ButtonPrimary text={strings.generic.confirm} action={confirm} />
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