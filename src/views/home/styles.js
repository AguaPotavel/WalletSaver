import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    /* background-color: red; */
    font-family: 'Poppins';
`;


export const Header = styled.div`
    display: flex;
    flex-direction: row;
    height: 40rem;
    position: relative;
    align-items: center;

    .image{
        display: flex;
        flex: 1;
        margin: 0px 30px;
        justify-content: center;
        align-items: center;
    }

    .descHome{
        display: flex;
        flex: 1;
        flex-direction: column;
        /* margin: 0px 30px; */
        position: relative;
        left: 130px;
        z-index: 999;
        height: 50%;

        h1{
            width: 100%;
            font-family: 'Poppins';
            font-weight: bold;
            font-size: 3.5rem;
            line-height: 3rem;
            color: ${props=> props.theme.colors.secondary_hover};
            /* -webkit-text-stroke: 1px ${props=> props.theme.colors.accent};  */
            /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
            font-smooth: always;
            /* margin: 20px 0px; */
        }

        label{
            font-family: 'Poppins';
            font-weight: normal;
            font-size: 1rem;
            line-height: 20px;
            color: ${props=> props.theme.colors.primary};
        }
    }

    .button{
        display: flex;
        width: 150px;
        height: 40px;
        background-color: ${props=> props.theme.colors.primary};
        justify-content: center;
        align-items: center;
        font-weight: bold;
        color: ${props=> props.theme.colors.secondary_hover};
        margin: 20px 0px;
        border: none;
        outline: none;
        border-radius: 4px;

        &:hover{
            filter: drop-shadow(0 0 0.3rem ${props=> props.theme.colors.primary});  
        }
        
    }
`;


export const CardsContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    position: relative;
    top: -120px;
    height: 400px;
    /* margin: 60px 0px; */
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 20px 0px;
    background-color: ${props=> props.theme.colors.surface_3};
    filter: drop-shadow(0 0 0.75rem ${props=> props.theme.colors.surface_2}); 
    height: 350px;
    max-width: 300px;
    min-width: 300px;
    border: 2px solid ${props=> props.theme.colors.primary};
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: all 0.2s linear;
    font-family: 'Poppins';
    
    &:hover{
        filter: drop-shadow(0 0 0.75rem ${props=> props.theme.colors.primary});
        transform: scale(1.1);
    }

    .description{
        margin: 30px 20px;
        color: ${props=> props.theme.colors.primary};
        font-size: 1rem;
        text-align: center;
        font-family: 'Poppins';
    }
`;



export const Works = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props=> props.theme.colors.primary};
    justify-content: center;
    align-items: center;
    height: 300px;
    margin: 20px 0px;

    .header{
        font-size: 3.5rem;
        font-family: 'Poppins';
        color: white;
        font-weight: bold;
    }

    .description{
        font-size: 1.5rem;
        font-family: 'Poppins';
        color: ${props=> props.theme.colors.secondary_hover};
        font-weight: 500;
        margin: 5px 10px;
        width: 70%;
        text-align: center;
    }

    .button{
        display: flex;
        align-items: center;
        outline: none;
        border: 2px solid ${props=> props.theme.colors.secondary_hover};
        color: ${props=> props.theme.colors.secondary_hover};
        border-radius: 4px;
        background-color: transparent;
        justify-content: center;
        width: 150px;
        height: 40px;
        margin: 15px 0px;

        &:hover{
            background-color: ${props=> props.theme.colors.secondary};
            border: 2px solid ${props=> props.theme.colors.secondary};
            color: ${props=> props.theme.colors.secondary_hover};
            cursor: pointer;
        }
        
    }
`;

export const Faq = styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px 20px;
    align-items: center ;
    
    h1{
        font-size: 3.5rem;
        font-family: 'Poppins';
        color: ${props=> props.theme.colors.secondary_hover};
        font-weight: bold;
    }

`;

export const FaqItem = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin: 15px 0px;

    a{
        color: ${props=> props.theme.colors.accent};
        cursor: pointer;
    }

    .question{
        font-size: 2rem;
        font-family: 'Poppins';
        color: ${props=> props.theme.colors.primary};
        font-weight: bold; 
    }

    .answer{
        font-size: 1.2rem;
        font-family: 'Poppins';
        color: ${props=> props.theme.colors.secondary_hover};
        width: 75%;
    }
`;