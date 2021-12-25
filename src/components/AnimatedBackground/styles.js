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