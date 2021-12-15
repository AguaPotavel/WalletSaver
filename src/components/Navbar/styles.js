import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${props=> props.theme.colors.surface_3};
    height: 64px;
    padding: 0px 5%;

    .logo{
        display: flex;
        flex: 1;
        padding: 5px;
        align-items: center;
        
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

        a{
            font-size: 14px;
            color: ${props=> props.theme.colors.secondary};
            font-family: 'Poppins';
            margin: 0px 20  px;
            transition: .2s all ease;

            &:hover{
                color: ${props=> props.theme.colors.accent};
                cursor: pointer;
                transform: scale(1.1);
            }
        }
    }

`;