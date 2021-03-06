import { useEffect, useState } from 'react';

import {
    Triangle,
    Circle,
    Octagon,
    Icons
} from './styles'

import { animated, useSpring } from '@react-spring/web'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin, faEthereum } from '@fortawesome/free-brands-svg-icons'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }


export function BackgroundHome(){
    
    const move = useSpring({
        to: { y: 0, x: 0, rotateZ: 0,  opacity:0.5},
        from: { y: 100, x: -50, rotateZ: 40, opacity:1},
        loop: { reverse: true },
        reverse: true,
        config: {
            mass: 5, tension: 350, friction: 0, duration: 5000
        }
      })

    const move2 = useSpring({
        to: { y: 0, x: 0, rotateZ: 0},
        from: { y: 50, x: -100, rotateZ: 40},
        loop: { reverse: true },
        reverse: true,
        config: {
            mass: 5, tension: 350, friction: 0, duration: 8000
        }
    })


    return(<>
    <Triangle style={move} size={600}/>
    <Circle style={move2} size={400}/>
    </>)
}


export function BackgroundGenerate(){
    const [ windowDimension, setWindowDimension ] = useState({width: 1200, height: 1200})

    useEffect(()=> {
        function handleResize() {
            setWindowDimension(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        
    }, [])
    
    const move = useSpring({
        to: { y: -80, x: -windowDimension.width + 100, rotateZ: 0,  opacity:0.5},
        from: { y: 100, x: -windowDimension.width + 200, rotateZ: 40, opacity:1},
        loop: { reverse: true },
        reverse: true,
        config: {
            mass: 5, tension: 350, friction: 0, duration: 5000
        }
      })

    const move2 = useSpring({
        to: { y: windowDimension.height - 600, x: 0, rotateZ: 0},
        from: { y: windowDimension.height - 700, x: -100, rotateZ: 40},
        loop: { reverse: true },
        reverse: true,
        config: {
            mass: 5, tension: 350, friction: 0, duration: 8000
        }
    })


    return(<>
    <Triangle style={move} size={600}/>
    <Circle style={move2} size={400}/>
    </>)
}

export function BackgroundRecover(){
    const [ windowDimension, setWindowDimension ] = useState({width: 1200, height: 1200})

    useEffect(()=> {
        function handleResize() {
            setWindowDimension(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        
    }, [])
    
    const move = useSpring({
        to: { y: -80, x: -windowDimension.width + 100, rotateZ: 0,  opacity:0.5},
        from: { y: 100, x: -windowDimension.width + 200, rotateZ: 40, opacity:1},
        loop: { reverse: true },
        reverse: true,
        config: {
            mass: 5, tension: 350, friction: 0, duration: 5000
        }
      })

    const move2 = useSpring({
        to: { y: windowDimension.height - 600, x: 0, rotateZ: 0},
        from: { y: windowDimension.height - 700, x: -100, rotateZ: 40},
        loop: { reverse: true },
        reverse: true,
        config: {
            mass: 5, tension: 350, friction: 0, duration: 8000
        }
    })


    return(<>
    <Triangle style={move2} size={600}/>
    <Circle style={move} size={400}/>
    </>)
}


export function SingleCircle({position}){
    const [ windowDimension, setWindowDimension ] = useState({width: 1200, height: 1200})

    useEffect(()=> {
        function handleResize() {
            setWindowDimension(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        
    }, [])

    const move = useSpring({
        to: { y: windowDimension.height - 100, x: -windowDimension.width + 100, rotateZ: 0, scale: 0.8 },
        from: { y: windowDimension.height, x: -windowDimension.width + 200, rotateZ: 40, scale: 1},
        loop: { reverse: true },
        reverse: true,
        config: {
            mass: 5, tension: 350, friction: 0, duration: 5000
        }
      })

    const move2 = useSpring({
        to: { y: windowDimension.height - 100, x: windowDimension.width - 100, rotateZ: 0, scale: 0.8 },
        from: { y: windowDimension.height, x: windowDimension.width - 200, rotateZ: 40, scale: 1},
        loop: { reverse: true },
        reverse: true,
        config: {
            mass: 5, tension: 350, friction: 0, duration: 5000
        }
    })
    
    return(<>
        {position === 'left'? <Circle style={move} size={1000}/>: <Circle style={move2} size={1000}/>}
        </>)
}

export function SingleTriangle({position}){
    const [ windowDimension, setWindowDimension ] = useState({width: 1200, height: 1200})

    useEffect(()=> {
        function handleResize() {
            setWindowDimension(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        
    }, [])

    const move = useSpring({
        to: { y: windowDimension.height - 100, x: -windowDimension.width + 100, rotateZ: 0, scale: 0.8 },
        from: { y: windowDimension.height, x: -windowDimension.width + 200, rotateZ: 40, scale: 1},
        loop: { reverse: true },
        reverse: true,
        config: {
            mass: 5, tension: 350, friction: 0, duration: 5000
        }
      })

    const move2 = useSpring({
        to: { y: windowDimension.height - 100, x: windowDimension.width - 1000, rotateZ: 0, scale: 0.8 },
        from: { y: windowDimension.height, x: windowDimension.width - 1300, rotateZ: 40, scale: 1},
        loop: { reverse: true },
        reverse: true,
        config: {
            mass: 5, tension: 350, friction: 0, duration: 5000
        }
    })
    
    return(<>
        {position === 'left'? <Triangle style={move} size={1000}/>: <Triangle style={move2} size={1000}/>}
        </>)
}



export function IconsScrolling({position}){
    return(
    <Icons>
        <div className='row'>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
        </div>
        <div className='row'>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
        </div>
        <div className='row'>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
        </div>
        <div className='row'>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
        </div>
        <div className='row'>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
        </div>
        <div className='row'>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
        </div>
        <div className='row'>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
                <FontAwesomeIcon icon={faBitcoin} className='i'/>
                <FontAwesomeIcon icon={faEthereum} className='i'/>
            </div>
        </div>
    </Icons>)
}