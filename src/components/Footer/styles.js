import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    height: 150px;
    background-color: ${props=> props.theme.colors.primary};
    flex-wrap: wrap;
    
    .left{
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: flex-end;
        align-items: flex-start;
        //background-color: red;
        margin-left: 10%;
        min-width: 400px;
    }

    .right{
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: flex-end;
        align-items: flex-end;
        //background-color: cyan;
        margin-right: 10%;
        min-width: 400px;
        text-align: end;
    }
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
    

    h2{
        font-size: 1.2rem;
        line-height: 1.2rem;
        color: ${props=> props.theme.colors.surface_3};
        font-weight: bold;
        margin: 0px 5px;
    }

    label{
        font-size: 1rem;
        color: ${props=> props.theme.colors.secondary};
        font-weight: normal;
        margin: 20px 5px 20px 5px;
    }

    .icons{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        min-width: 150px;
        /* background-color: red; */
        margin: 20px 20px 20px 5px;

        /* svg{
            margin: 10px 15px;
        } */


        .fa{
           opacity: 0.5;

           :hover{
               cursor: pointer;
               opacity: 1;
           }
        }
    }
`;