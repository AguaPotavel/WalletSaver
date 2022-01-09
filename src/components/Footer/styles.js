import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 380px;
    /* padding: 0px 5% */
    background-color: ${props=> props.theme.colors.primary};
    flex-wrap: wrap;
    
    .left{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        flex: 1;
        justify-content: flex-start;
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

    @media (max-width: 600px)
    {
        height: 400px;

        .left,
        .right{
            min-width: 300px;
        }

        .left{
            margin-left: 5%;

            .item:nth-child(2){
                align-items: flex-end;
            }

            .item{
                display: flex;
                flex-direction: column;
                flex: 1;
            }
        }

        .right{
            margin-right: 5%;
        }
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

        @media (max-width: 600px)
        {
            margin: 10px 5px 10px 5px;
            font-size: 0.8rem;
        }
    }

    .icons{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        min-width: 150px;
        /* background-color: red; */
        margin: 20px 20px 20px 5px;

        /* svg{
            margin: 10px 15px;
        } */


        .fa{
           opacity: 0.5;
           margin-right: 10px;

           :hover{
               cursor: pointer;
               opacity: 1;
           }
        }

        @media (max-width: 600px)
        {
            min-width: 100px;
        }
    }

    @media (max-width: 600px)
    {
        min-width: 100px;
    }
`;


export const SelectLang = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 20px 0px;
    margin-right: 5%;

    h2{
        font-size: 1.2rem;
        line-height: 1.2rem;
        color: ${props=> props.theme.colors.surface_3};
        font-weight: bold;
        margin: 0px 5px;
        /* text-align: end;  */
    }

    .icons{
        display: flex;
        flex-direction: row;
        /* justify-content: flex-end; */
        min-width: 150px;
        /* background-color: red; */
        margin: 20px 20px 20px 5px;


        a.lang {
        opacity: 0.5;
        font-size: 1rem;
        line-height: 1rem;
        color: ${props=> props.theme.colors.surface_3};
        font-weight: bold;
        margin-right: 5px;

            &:hover{
                cursor: pointer;
                opacity: 1;
            }
        }

        

        @media (max-width: 600px)
        {
            min-width: 100px;
        }
    }


    @media (max-width: 600px)
    {
        min-width: 100px;
    }

`;