import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 99999;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
`;

export const ModalArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 75%;
    border-radius: 10px;
    background-color: ${props=> props.theme.colors.surface_3};
    border: 2px solid ${props=> props.theme.colors.primary};
    filter: drop-shadow(0 0 0.5rem ${props=> props.theme.colors.primary});
    padding: 10px;

    @media only screen and (max-width: 900px) {
        width: 80%;
    }
`;


export const ModalConfirmEncryption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.6s linear;

    &.hide{
        display: none;
    }

    .confirmed{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation-name: slideIn;
        animation-duration: 0.5s;

        .title{
            font-size: 2rem;
            font-weight: bold;
            color: ${props=> props.theme.colors.primary};
            margin: 10px 0px;
        }

        .description{
            font-size: 1rem;
            font-weight: normal;
            color: ${props=> props.theme.colors.secondary_hover};
            text-align: justify;
        }

        textarea{
            width: 96%;
            height: 200px;
            margin: 10px 0px;
            background-color: ${props=> props.theme.colors.surface_3};
            border: 2px solid ${props=> props.theme.colors.primary};
            border-radius: 8px;
            padding: 2%;
            color: white;
        }

        .button-confirm{
            margin: 10px 0px;
            width: 50%;
        }
    }

    @keyframes slideIn {
        from {right: 200px;}
        to {right: 0px;}
    }

    .close-button{
        position: absolute;
        top: 15px;
        right: 15px;
    }

    .items{
        display: flex;
        flex-direction: column;
        width: auto;
        margin: 10px 10px;
        justify-content: center;
        align-items: center;

        .item{
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 450px;
            min-width: 300px;
            align-items: center;
            background-color: rgba(0,0,0,0.1);
            border-radius: 6px;
            padding: 5px 0px;
            border-bottom: 2px solid ${props=> props.theme.colors.primary};
            margin: 5px 0px;
            position: relative;

            &:nth-child(1){
                animation-name: slideIn;
                animation-duration: 0.4s;
            }
            
            &:nth-child(2){
                animation-name: slideIn;
                animation-duration: 0.5s;
            }
            
            &:nth-child(3){
                animation-name: slideIn;
                animation-duration: 0.6s;
            }
            
            &:nth-child(4){
                animation-name: slideIn;
                animation-duration: 0.7s;
            }

            &.button{
                border-bottom: none;
                background-color: transparent;
            }
            
            .header{
                font-size: 0.9rem;
                color: ${props=> props.theme.colors.accent};
            }

            label{
                font-size: 0.9rem;
                color: ${props=> props.theme.colors.secondary};
                font-weight: bold;
                margin: 0px 5px;
            }
        }

    }

`;