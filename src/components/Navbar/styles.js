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