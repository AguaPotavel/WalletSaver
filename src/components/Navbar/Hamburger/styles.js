import styled from "styled-components"

export const HamburgerContainer = styled.button`
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  &:hover {
    opacity: 0.7;
  }
  &.is-active:hover {
    opacity: 0.7;
  }
  &.is-active {
    .hamburguer-inner,
    .hamburguer-inner::after,
    .hamburguer-inner::before {
      background-color: ${props=> props.color? props.color: '#000'};
    }
  }
`

export const HamburgerBox = styled.span`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
  &.N3dx {
    perspective: 80px;
  }
  &.R3dx {
    perspective: 80px;
  }
  &.N3dy{
    perspective: 80px;
  }
  &.R3dy{
    perspective: 80px;
  }
  &.N3dxy{
    perspective: 80px;
  }
  &.R3dxy{
    perspective: 80px;
  }
`

export const HamburgerInner = styled.span`
  display: block;
  top: 50%;
  margin-top: -2px;
  width: 40px;
  height: 4px;
  background-color: ${props=> props.color? props.color: '#000'};
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
  &::before {
    content: "";
    display: block;
    width: 40px;
    height: 4px;
    background-color: ${props=> props.color? props.color: '#000'};
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
    top: -10px;
  }
  &::after {
    content: "";
    display: block;
    width: 40px;
    height: 4px;
    background-color: ${props=> props.color? props.color: '#000'};
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
    bottom: -10px;
  }
  &.N3dx {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    &::after {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &::before {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &.is-active {
      background-color: transparent !important;
      transform: rotateY(180deg);
      &::after {
        transform: translate3d(0, -10px, 0) rotate(-45deg);
      }
      &::before {
        transform: translate3d(0, 10px, 0) rotate(45deg);
      }
    }
  }
  &.R3dx{
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    &::after {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &::before{
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &.is-active{
      background-color: transparent !important;
      transform: rotateY(-180deg);
    
      &::after {
        transform: translate3d(0, -10px, 0) rotate(-45deg);
      }
      &::before{
        transform: translate3d(0, 10px, 0) rotate(45deg);
      }
    }
  }
  &.N3dy {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    &::after {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &::before {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &.is-active {
      background-color: transparent !important;
      transform: rotateX(-180deg);
      &::after {
        transform: translate3d(0, -10px, 0) rotate(-45deg);
      }
      &::before {
        transform: translate3d(0, 10px, 0) rotate(45deg);
      }
    }
  }
  &.R3dy {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    &::after {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &::before {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &.is-active {
      background-color: transparent !important;
    transform: rotateX(180deg);
      &::after {
        transform: translate3d(0, -10px, 0) rotate(-45deg);
      }
      &::before {
        transform: translate3d(0, 10px, 0) rotate(45deg);
      }
    }
  }
  &.N3dxy {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    &::after {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &::before {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &.is-active {
      background-color: transparent !important;
      transform: rotateX(180deg) rotateY(180deg);
      &::after {
        transform: translate3d(0, -10px, 0) rotate(-45deg);
      }
      &::before {
        transform: translate3d(0, 10px, 0) rotate(45deg);
      }
    }
  }
  &.R3dxy {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    &::after {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &::before {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &.is-active {
      background-color: transparent !important;
      transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg);
      &::after {
        transform: translate3d(0, -10px, 0) rotate(-45deg);
      }
      &::before {
        transform: translate3d(0, 10px, 0) rotate(45deg);
      }
    }
  }
  &.Arrow {
    &.is-active {
    
      &::after {
        transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);
      }
      &::before {
        transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);
      }
    }
  }
  &.ArrowR {
    &.is-active {
    
      &::after {
        transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);
      }
      &::before {
        transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);
      }
    }
  }
  &.ArrowAlt {
      
      &::after {
        transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
      &::before {
        transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
    &.is-active {
    
      &::after {
        bottom: 0;
        transform: translate3d(-8px, 10px, 0) rotate(45deg) scale(0.7, 1);
        transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
      }
      &::before {
        top: 0;
        transform: translate3d(-8px, -10px, 0) rotate(-45deg) scale(0.7, 1);
        transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
      }
    }
  }
  &.ArrowRAlt {
      
      &::after {
        transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
      &::before {
        transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
    &.is-active {
    
      &::after {
        bottom: 0;
        transform: translate3d(8px, 10px, 0) rotate(-45deg) scale(0.7, 1);
        transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
      }
      &::before {
        top: 0;
        transform: translate3d(8px, -10px, 0) rotate(45deg) scale(0.7, 1);
        transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
      }
    }
  }
  &.Collapse {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      
      &::after {
        top: -20px;
        transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
      }
      &::before {
        transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
    &.is-active {
      transform: translate3d(0, -10px, 0) rotate(-45deg);
      transition-delay: 0.22s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    
      &::after {
        top: 0;
        opacity: 0;
        transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
      }
      &::before {
        top: 0;
        transform: rotate(-90deg);
        transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  }
  &.RCollapse {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      
      &::after {
        top: -20px;
        transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
      }
      &::before {
        transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
    &.is-active {
      transform: translate3d(0, -10px, 0) rotate(45deg);
      transition-delay: 0.22s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    
      &::after {
        top: 0;
        opacity: 0;
        transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
      }
      &::before {
        top: 0;
        transform: rotate(90deg);
        transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  }
`