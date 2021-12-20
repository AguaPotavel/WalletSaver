import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 80vh;
`;

export const ContentForm = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin: 0px 20%;

    .item{
        display: flex;
        flex-direction: column;
        width: 50%;
        min-width: 300px;
        margin: 10px 20%;

        .add-phrase{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            input{
                flex: 7;
            }

            .add-button{
                display: flex;
                flex: 1;
                width: 15%;
                min-width: 52px;
                height: 52px;
                border-radius: 6px;
                margin-left:10px;
                background-color: ${props=> props.theme.colors.primary};
                justify-content: center;
                align-items: center;
            }
        }

        label{
            color: white;
            font-family: 'Poppins';
            font-size: 2rem;
            font-weight: bold;
        }

        input{
            color: white;
            outline: none;
            border: 2px solid transparent;
            background-color: ${props=> props.theme.colors.secondary};
            border-radius: 6px;
            padding: 15px;
            font-size: 1rem;

            &:focus{
                border: 2px solid ${props=> props.theme.colors.primary};
            }

            &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: white;
                opacity: 0.4;
            }
        }
    }

`;