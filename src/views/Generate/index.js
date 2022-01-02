import react, {useState, useEffect} from 'react'

import {
    Container,
    ContentForm,
    PhishingWarning
} from './styles'

// backgroundAnimation //
import { BackgroundGenerate } from '../../components/AnimatedBackground'


// utils //
import { generateGuid } from '../../utils/guidGenerator'
import { ToastContainer, toast } from 'react-toastify';

// layout //
import  Navbar  from '../../components/Navbar'
import  Footer  from '../../components/Footer'

// fontAwesome //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

// Buttons //
import { ButtonPrimary } from '../../components/Buttons'

// context //
import { useModal } from '../../context/ModalContext'

export default function Generate(){
    const [name, setName] = useState('');
    const [walletName, setWalletName] = useState('')
    const [password, setPassword] = useState('')
    const [word, setWord] = useState('')
    const [seeds, setSeeds] = useState([])
    const { setShowModal, showModal, setModalContent } = useModal()

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


    const addSeed = (phrase) => {
        setSeeds([...seeds, {phrase: phrase, id: generateGuid()}]);
        setWord('');
    }

    const removeSeed = (id) => {
        const newSeed = seeds.filter((i)=> {
            return i.id !== id
        })
        setSeeds(newSeed)
    }

    const confirm = () =>{
        setModalContent({
            name,
            password,
            walletName,
            seeds,
        })
        setShowModal(!showModal)
    }

    const RenderSeed = ({item}) => {
        return(
            <div className='seed-phrase'>
                <label>{item.phrase}</label>
                <FontAwesomeIcon icon={faTimesCircle} color='white' style={{'cursor': 'pointer'}} onClick={()=> removeSeed(item.id)}/>
            </div>
        )}


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
                    Nome da carteira:
                </label>
                <input placeholder={'Metamask Trade'} value={walletName} onChange={text => setWalletName(text.target.value)}/>
            </div>
            <div className='item'>
                <label>
                    Senha:
                </label>
                <input placeholder={'Pjn@k8-l'} type={'password'} value={password} onChange={text => setPassword(text.target.value)}/>
            </div>
            <div className='item'>
                <label>
                    Palavra:
                </label>
                <div className='add-phrase'>
                    <input placeholder={'unplat'} type={'text'} value={word} onChange={text => setWord(text.target.value)}/>
                    <a className='add-button' onClick={()=> addSeed(word)}>
                        <FontAwesomeIcon icon={faPlus} color='white' />
                    </a>
                </div>
            </div>
            <div className='item'>
                <div className='seed-area'>
                    {seeds.map((item)=> {
                        return(<RenderSeed item={item} key={item.id}/>)
                    })}
                </div>
            </div>
            <div className='item'>
                <ButtonPrimary text={'confirmar'} action={confirm} />
            </div>
            
        </ContentForm>
        <BackgroundGenerate/>
    </Container>
    <Footer/>
    <ToastContainer role='success'/>
    </>)
}