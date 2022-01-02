import styled from "styled-components";
import { animated } from '@react-spring/web'

export const WrapperParallax = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    width: 100vw;
    position: relative;
`;


export const Page1 = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0px 10%;
    width: 100%;
    position: relative;

    &:before{
        content: '';
        position: absolute;
        height: 800px;
        top: 0;
        left: 0;
        right: 0;
        background: radial-gradient(closest-side, ${props=> props.theme.colors.accent} 0%, ${props=> props.theme.colors.primary} 10%, ${props=> props.theme.colors.surface}); //radial-gradient(${props=> props.theme.colors.accent}, ${props=> props.theme.colors.surface});
        z-index: -1;
        opacity: 0.2;
    }


    .text{
        flex: 1;
        height: 100%;
        align-items: center;
        text-align: center;
        

        h1{
            color: ${props=> props.theme.colors.accent};
            font-size: 6rem;
            font-family: 'Poppins';
        }

        label{
            font-family: 'Poppins';
            color: #fff;
            font-size: 1.4rem;
            margin-bottom: 50px ;

            .important{
                color: ${props=> props.theme.colors.accent};
            }
        }

        .anim{
            margin: 80px;
        }

    }

    .image{
        flex: 1;
        justify-content: center;
    }

    @media (max-width: 600px)
    {
        margin: 0px 5%;

        .text{

            h1{
                font-size: 3rem;
            }

            label{
                font-size: 1rem;
            }
            
        }
    }

`;



export const Page2 = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0px 10%;
    width: 100%;
    position: relative;

    /* &:before{
        content: '';
        position: absolute;
        height: 800px;
        top: 0;
        left: 0;
        right: 0;
        background: radial-gradient(closest-side, ${props=> props.theme.colors.accent} 0%, ${props=> props.theme.colors.primary} 10%, ${props=> props.theme.colors.surface}); //radial-gradient(${props=> props.theme.colors.accent}, ${props=> props.theme.colors.surface});
        z-index: -1;
        opacity: 0.2;
    } */


    .text{
        flex: 1;
        height: 100%;
        align-items: center;
        text-align: flex-start;
        

        h1{
            color: ${props=> props.theme.colors.secondary};
            font-size: 6rem;
            font-family: 'Poppins';
        }

        label{
            font-family: 'Poppins';
            color: #fff;
            font-size: 1.6rem;
            margin-bottom: 50px ;

            .important{
                color: ${props=> props.theme.colors.accent};
            }

            .bold{
                font-weight: bold;
            }
        }

    }

    .image{
        flex: 1;
        justify-content: center;
        align-items: center;
        position: relative;

        &:before{
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: -30px;
            -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
            clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
            background-color: ${props=> props.theme.colors.secondary};
            height: 600px;

        }

        .anim{
            display: flex;
            flex: 1;
            height: 100%;
            align-items: center;
            justify-content: center;
        }
    }


    @media (max-width: 600px)
    {
        margin: 0px 5%;
        width: 90%;

        .text{

            h1{
                font-size: 3rem;
            }

            label{
                font-size: 1rem;
            }
            
            margin-bottom: 60px;
        }

        .image{

            &:before{
                height: 300px;
            }
        }
    }

`;



export const Page3 = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0px 10%;
    width: 100%;
    position: relative;

    /* &:before{
        content: '';
        position: absolute;
        height: 800px;
        top: 0;
        left: 0;
        right: 0;
        background: radial-gradient(closest-side, ${props=> props.theme.colors.accent} 0%, ${props=> props.theme.colors.primary} 10%, ${props=> props.theme.colors.surface}); //radial-gradient(${props=> props.theme.colors.accent}, ${props=> props.theme.colors.surface});
        z-index: -1;
        opacity: 0.2;
    } */


    .text{
        flex: 1;
        height: 100%;
        align-items: center;
        text-align: flex-start;
        

        h1{
            color: ${props=> props.theme.colors.accent};
            font-size: 6rem;
            font-family: 'Poppins';
        }

        label{
            font-family: 'Poppins';
            color: #fff;
            font-size: 1.6rem;
            margin-bottom: 50px ;

            .important{
                color: ${props=> props.theme.colors.accent};
            }

            a{
                cursor: pointer;
                color: ${props=> props.theme.colors.accent};
            }
        }

    }

    .image{
        flex: 1;
        justify-content: center;
        align-items: center;
        position: relative;

        /* &:before{
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: -30px;
            -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
            clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
            background-color: ${props=> props.theme.colors.secondary};
            height: 600px;

        } */

        .anim{
            display: flex;
            flex: 1;
            height: 100%;
            align-items: center;
            justify-content: center;
        }
    }

    @media (max-width: 600px)
    {
        margin: 0px 5%;
        width: 90%;

        .text{

            h1{
                font-size: 3rem;
            }

            label{
                font-size: 1rem;
            }
            
            margin-bottom: 60px;
        }

        /* .image{

            &:before{
                height: 300px;
            }
        } */
    }
`;

export const Page4 = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0px 10%;
    width: 100%;
    position: relative;

    /* &:before{
        content: '';
        position: absolute;
        height: 800px;
        top: 0;
        left: 0;
        right: 0;
        background: radial-gradient(closest-side, ${props=> props.theme.colors.accent} 0%, ${props=> props.theme.colors.primary} 10%, ${props=> props.theme.colors.surface}); //radial-gradient(${props=> props.theme.colors.accent}, ${props=> props.theme.colors.surface});
        z-index: -1;
        opacity: 0.2;
    } */


    .text{
        flex: 1;
        height: 100%;
        align-items: center;
        text-align: flex-start;
        

        h1{
            color: ${props=> props.theme.colors.accent};
            font-size: 6rem;
            font-family: 'Poppins';
        }

        label{
            font-family: 'Poppins';
            color: #fff;
            font-size: 1.6rem;
            margin-bottom: 50px ;

            .important{
                color: ${props=> props.theme.colors.accent};
            }

            a{
                cursor: pointer;
                color: ${props=> props.theme.colors.accent};
            }
        }

        .player{

        }

    }

    .image{
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        position: relative;
        /* left: 40px; */

        /* &:before{
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: -30px;
            -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
            clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
            background-color: ${props=> props.theme.colors.secondary};
            height: 600px;

        } */

        &:before{
            content: '';
            position: absolute;
            height: 700px;
            top: 0;
            left: -40px;
            right: 0;
            background: radial-gradient(closest-side, ${props=> props.theme.colors.accent} 0%, ${props=> props.theme.colors.primary} 10%, ${props=> props.theme.colors.surface}); //radial-gradient(${props=> props.theme.colors.accent}, ${props=> props.theme.colors.surface});
            z-index: -1;
            opacity: 0.2;
        }

        .anim{
            display: flex;
            flex: 1;
            height: 100%;
            align-items: center;
            justify-content: center;
        }
    }

    @media (max-width: 600px)
    {
        margin: 0px 5%;
        width: 90%;

        .text{

            h1{
                font-size: 3rem;
            }

            label{
                font-size: 1rem;
            }
            
            margin-bottom: 60px;
        }

        /* .image{

            &:before{
                height: 300px;
            }
        } */
    }

`;



export const Page5 = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0px 10%;
    width: 100%;
    position: relative;

    /* &:before{
        content: '';
        position: absolute;
        height: 800px;
        top: 0;
        left: 0;
        right: 0;
        background: radial-gradient(closest-side, ${props=> props.theme.colors.accent} 0%, ${props=> props.theme.colors.primary} 10%, ${props=> props.theme.colors.surface}); //radial-gradient(${props=> props.theme.colors.accent}, ${props=> props.theme.colors.surface});
        z-index: -1;
        opacity: 0.2;
    } */


    .text{
        flex: 1;
        height: 100%;
        align-items: center;
        text-align: center;
        

        h1{
            color: ${props=> props.theme.colors.secondary};
            font-size: 6rem;
            font-family: 'Poppins';
        }

        label{
            font-family: 'Poppins';
            color: #fff;
            font-size: 1.6rem;
            margin-bottom: 50px ;

            .important{
                color: ${props=> props.theme.colors.accent};
            }

            a{
                cursor: pointer;
                color: ${props=> props.theme.colors.accent};
            }
        }

        .player{
            display: flex;
            justify-content: center;
            align-items: center;
        }

    }

    .image{
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        position: relative;
        /* left: 40px; */

        /* &:before{
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: -30px;
            -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
            clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
            background-color: ${props=> props.theme.colors.secondary};
            height: 600px;

        } */

        &:before{
            content: '';
            position: absolute;
            height: 700px;
            top: 0;
            left: -40px;
            right: 0;
            background: radial-gradient(closest-side, ${props=> props.theme.colors.accent} 0%, ${props=> props.theme.colors.primary} 10%, ${props=> props.theme.colors.surface}); //radial-gradient(${props=> props.theme.colors.accent}, ${props=> props.theme.colors.surface});
            z-index: -1;
            opacity: 0.2;
        }

        .anim{
            display: flex;
            flex: 1;
            height: 100%;
            align-items: center;
            justify-content: center;
        }
    }

    @media (max-width: 600px)
    {
        margin: 0px 5%;
        width: 90%;
        height: auto;

        .text{

            h1{
                font-size: 3rem;
            }

            label{
                font-size: 1rem;
            }
            
            margin-bottom: 60px;
        }

        /* .image{

            &:before{
                height: 300px;
            }
        } */
    }

`;



export const Page6 = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0px 10%;
    width: 100%;
    position: relative;

    /* &:before{
        content: '';
        position: absolute;
        height: 800px;
        top: 0;
        left: 0;
        right: 0;
        background: radial-gradient(closest-side, ${props=> props.theme.colors.accent} 0%, ${props=> props.theme.colors.primary} 10%, ${props=> props.theme.colors.surface}); //radial-gradient(${props=> props.theme.colors.accent}, ${props=> props.theme.colors.surface});
        z-index: -1;
        opacity: 0.2;
    } */


    .text{
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
        align-items: center;
        text-align: center;

        h1{
            color: ${props=> props.theme.colors.accent};
            font-size: 6rem;
            font-family: 'Poppins';
        }

        label{
            font-family: 'Poppins';
            color: #fff;
            font-size: 1.6rem;
            margin-bottom: 50px;

            .important{
                color: ${props=> props.theme.colors.accent};
            }

            a{
                cursor: pointer;
                color: ${props=> props.theme.colors.accent};
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
            font-weight: bold;
            text-decoration: none;

            &:hover{
                filter: drop-shadow(0 0 0.3rem ${props=> props.theme.colors.primary});  
            }
            
        }
    }


    @media (max-width: 600px)
    {
        margin: 0px 2%;
        width: 90%;
        height: auto;

        .text{

            h1{
                font-size: 2.5rem;
            }

            label{
                font-size: 0.8rem;
            }
            
            margin-bottom: 60px;
        }

        /* .image{

            &:before{
                height: 300px;
            }
        } */
    }
    

`;