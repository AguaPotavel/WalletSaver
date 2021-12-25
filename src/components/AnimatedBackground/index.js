import {
    Triangle,
    Circle,
    Octagon
} from './styles'

import { animated, useSpring } from '@react-spring/web'


export function TriangleBackground(){
    
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