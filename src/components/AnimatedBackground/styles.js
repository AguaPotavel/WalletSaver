import styled from "styled-components";
import { animated } from '@react-spring/web'


export const Triangle = styled(animated.div)`
    display: flex;
    -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    background-color: ${props=> props.theme.colors.surface_3};
    position: absolute;
    width: ${props=> props.size}px;
    height: ${props=> props.size}px;
    right: 0px;
    z-index: -1;

    &.glow{
        filter: drop-shadow(0 0 0.3rem ${props=> props.theme.colors.primary});
    }
`;

export const Circle = styled(animated.div)`
    display: flex;
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    background-color: ${props=> props.theme.colors.accent};
    position: absolute;
    width: ${props=> props.size}px;
    height: ${props=> props.size}px;
    right: 0px;
    z-index: -1;

    &.glow{
        filter: drop-shadow(0 0 0.3rem ${props=> props.theme.colors.primary});
    }
`;

export const Octagon = styled(animated.div)`
    display: flex;
    -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
    background-color: ${props=> props.theme.colors.secondary_light};
    position: absolute;
    width: ${props=> props.size}px;
    height: ${props=> props.size}px;
    right: 0px;
    z-index: -1;

    &.glow{
        filter: drop-shadow(0 0 0.7rem ${props=> props.theme.colors.primary});
    }
`;


export const Icons = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: show;

    @keyframes animate1{
        0%{
            transform: translateX(100%);
        }
        100%{
            transform: translateX(-100%);
        }
    }

    @keyframes animate2{
        0%{
            transform: translateX(0%);
        }
        100%{
            transform: translateX(-200%);
        }
    }

    @keyframes animate3{
        0%{
            transform: translateX(-100%);
        }
        100%{
            transform: translateX(100%);
        }
    }

    @keyframes animate4{
        0%{
            transform: translateX(-200%);
        }
        100%{
            transform: translateX(0%);
        }
    }

    .i{
        color: rgba(0,0,0,0.5);
        transition: 1s;
        user-select: none;
        cursor: default;
        margin: 0px 5px;

        &:hover{
            transition: 0s;
            color: ${props=> props.theme.colors.primary};
            text-shadow: 0 0 200px ${props=> props.theme.colors.accent};
        }
    }

    .row{
        position: relative;
        width: 100%;
        /* top: 50%; */
        display: flex;
        padding: 10px 0px;
        white-space: nowrap;
        font-size: 64px;
        transform: rotate(-10deg);

        &:nth-child(even){

            div{
                animation: animate3 80s linear infinite;
                animation-delay: -80s;

                &:nth-child(2){
                    animation: animate4 80s linear infinite;
                    animation-delay: -40s;
                }
            }
        }

        div{
            animation: animate1 80s linear infinite;
            animation-delay: -80s;

            &:nth-child(2){
                animation: animate2 80s linear infinite;
                animation-delay: -40s;
            }
        }

        
    }


`;