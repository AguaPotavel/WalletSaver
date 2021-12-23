import react, {useState, useEffect} from 'react'

import {
    Container,
    ContentForm
} from './styles'


// utils //
import { generateGuid } from '../../utils/guidGenerator'
import { testeEncrypt } from '../../utils/encrypt'

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
    const { setShowModal, showModal } = useModal()


    const addSeed = (phrase) => {
        setSeeds([...seeds, {phrase: phrase, id: generateGuid()}])
    }

    const removeSeed = (id) => {
        const newSeed = seeds.filter((i)=> {
            return i.id !== id
        })
        setSeeds(newSeed)
    }

    useEffect(()=> {
        console.log(seeds)
    }, [seeds])

    const confirm = () =>{
        setShowModal(!showModal)
    }

    const RenderSeed = ({item}) => {
        return(
            <div className='seed-phrase'>
                <label>{item.phrase}</label>
                <FontAwesomeIcon icon={faTimesCircle} color='white' style={{'cursor': 'pointer'}} onClick={()=> removeSeed(item.id)}/>
            </div>
        )}


    return(
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
                    <input placeholder={'unplat'} type={'text'} onChange={text => setWord(text.target.value)}/>
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
        
    </Container>)
}