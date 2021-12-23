import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    min-height: 40px;
    border-radius: 8px;
    /* margin: 10px 0px; */
    justify-content: center;
    align-items: center;

    font-size: 1.2rem;
    font-family: 'Poppins';
    font-weight: bold;
    letter-spacing: 0.10rem;
    text-transform: capitalize;

    transition: all 0.1s linear;

    

    .content{
        margin: 0px 5px;
    }

    &.sm{
        width: 10em;
    }

    &.md{
        width: 20em;
    }

    &.primary{
        background-color: ${props=> props.theme.colors.primary};
        color: white;

        &:hover{
            cursor: pointer;
            filter: drop-shadow(0 0 0.5rem ${props=> props.theme.colors.primary});
        }
    }

    &.secondary{
        background-color: ${props=> props.theme.colors.secondary};
        color: white;

        &:hover{
            cursor: pointer;
            border-radius: 15px;
        }
    }

`;