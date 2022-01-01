import React, { useState, useEffect } from "react"
import { HamburgerContainer, HamburgerBox, HamburgerInner } from "./styles"

function Hamburger({ ...props }) {
  const [isActive, setIsActive] = useState(false)
  const [classActive, setClassActive] = useState("")

  const returnFunction = () => {
      if(isActive){
        props.action('show')
      }else{
        props.action('')
      }
      
  }

  useEffect(() => {
    props.state = isActive
    returnFunction()
  }, [isActive])

  const ToggleClass = () => {
    let state = !isActive
    if (state) {
      setClassActive("is-active")
    } else {
      setClassActive("")
    }
    returnFunction(state)
    setIsActive(!isActive)
  }

  return (
    <HamburgerContainer
      className={`${props.type} ${classActive}`}
      type="button"
      onClick={() => ToggleClass()}
      color={props.color}
    >
      <HamburgerBox className={`${props.type}`}>
        <HamburgerInner
          className={`${props.type} ${classActive}`}
          color={props.color}
        ></HamburgerInner>
      </HamburgerBox>
    </HamburgerContainer>
  )
}

export default Hamburger