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

    &:hover{
        cursor: pointer;
        filter: drop-shadow(0 0 0.5rem ${props=> props.theme.colors.primary});
    }

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
    }

    &.secondary{
        background-color: ${props=> props.theme.colors.secondary};
        color: white;
    }

`;