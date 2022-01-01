import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${props=> props.theme.colors.surface};
    height: 64px;
    padding: 0px 10%;
    /* position: fixed; */
    /* width: 100vw; */
    justify-content: space-around;
    /* padding: 10px 0px; */
    pointer-events: all;
    /* z-index: 99999; */

    .logo{
        display: flex;
        flex: 1;
        padding: 5px;
        align-items: center;
        /* margin-left: 5%; */
        
        img{
            width: 70%;
        }
    }

    .itens{
        display: flex;
        flex-direction: row;
        flex: 6;
        justify-content: flex-end;
        align-items: center;
        /* margin-right: 5%; */

        a{
            font-size: 1.2rem;
            color: ${props=> props.theme.colors.secondary_light};
            font-family: 'Poppins';
            margin: 0px 20px;
            transition: .2s all ease;
            text-decoration: none;

            &:hover{
                color: ${props=> props.theme.colors.accent};
                cursor: pointer;
                transform: scale(1.1);
                border-bottom: 2px solid ${props=> props.theme.colors.accent};
            }
        }
    }

`;

export const ContainerMobile = styled.div`
    display: flex;
    width: 90%;
    height: auto;
    flex-direction: row;
    background-color: ${props=> props.theme.colors.surface};
    /* background-color: red; */
    height: 64px;
    position: relative;
    /* top: 0px;
    left: 0px; */
    padding: 0px 5%;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;

    img{
        width: 100%;
    }

    @keyframes slideIn {
        from {right: 200px;}
        to {right: 0px;}
    }


    .itens{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        background-color: ${props=> props.theme.colors.surface};
        width: 110%;
        height: 300px;
        margin-left: -5%;
        z-index: 1;
        transition: all 0.3s linear;
        opacity: 0;
        left: -400px;
        top: 64px;

        &.show{
            opacity: 1;
            left: 0px;

            a{
                &:nth-child(1){
                    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
                    right: 0px;
                }
                
                &:nth-child(2){
                    transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1);
                    right: 0px;
                }
                
                &:nth-child(3){
                    transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1);
                    right: 0px;
                }
                
                &:nth-child(4){
                    transition: all 1.3s cubic-bezier(0.19, 1, 0.22, 1);
                    right: 0px;
                }
            }
        }

        a{
            font-size: 1.2rem;
            color: ${props=> props.theme.colors.accent};
            font-family: 'Poppins';
            margin: 0px 20px;
            transition: .2s all ease;
            text-decoration: none;
            width: 100%;
            padding: 10px 0px;
            display: flex;
            justify-content: center;
            background-color: ${props=> props.theme.colors.surface_2};
            position: relative;

            &:nth-child(1){
                transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
                right: ${props=> props.width}px;
            }
            
            &:nth-child(2){
                transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
                right: ${props=> props.width}px;
            }
            
            &:nth-child(3){
                transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);
                right: ${props=> props.width}px;
            }
            
            &:nth-child(4){
                transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
                right: ${props=> props.width}px;
            }

            &:hover{
                color: ${props=> props.theme.colors.accent};
                cursor: pointer;
                transform: scale(1.1);
                border-bottom: 2px solid ${props=> props.theme.colors.accent};
            }
        }
    }

    
`