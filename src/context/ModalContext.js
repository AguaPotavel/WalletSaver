import React, { useEffect, useState, useContext, createContext } from 'react'
import { Modal } from '../components/Modal'

const ModalContext = createContext()

export default function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({})

//   const nullComponent = () =>{
//       return(
//       <div>
//           component
//       </div>)
//   }

//   if(showModal){
//     function setTopo(){
//         window.scrollTop(0);
//     }
//     setTimeout(()=> {
//         window.bind('scroll', setTopo);
//     }, 200)
    
//   }

  useEffect(() => {
    console.log(modalContent)
  }, [modalContent])

  return (
    <ModalContext.Provider value={{ showModal, setShowModal, setModalContent, modalContent }}>
        {children}
        {showModal && (
        <Modal modalContent={modalContent} setShowModal={setShowModal}>

        </Modal>)}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) throw new Error('useModal must be used within a ModalProvider')
  const { showModal, setShowModal, setModalContent, modalContent } = context
  return { showModal, setShowModal, setModalContent, modalContent }
}