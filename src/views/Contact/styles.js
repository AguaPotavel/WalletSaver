import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 80vh;
    overflow: hidden;
    position: relative;
    align-items: center;
    justify-content: center;
`;

export const ListIcons = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    
    @media (max-width: 600px)
    {
        flex-direction: column;
    }

    li {
        position: relative;
        list-style: none;
        width: 100px;
        height: 100px;
        margin: 0 10px;
        border-radius: 50%;
        box-sizing: border-box;
        

        &:hover{
            background: linear-gradient(45deg, ${props=> props.theme.colors.accent}, ${props=> props.theme.colors.primary});
        }

        &:before,
        &:after{
            content: '';
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${props=> props.theme.colors.accent};
            border-radius: 50%;
            filter: blur(20px);
            opacity: 0;
            transition: 1s;
            z-index: -1;

            
        }

        &:after{
            filter: blur(40px);
        }

        &:hover{

            :after,
            :before{
                opacity: 1;
            }
            
        }

        a{
            position: absolute;
            top: 10px;
            left: 10px;
            right: 10px;
            bottom: 10px;
            text-align: center;
            line-height: 80px;
            color: ${props=> props.theme.colors.accent};
            background-color: ${props=> props.theme.colors.surface_2};
            font-size: 36px;
            border-radius: 50%;

            .fa{
                text-shadow: 0 2px 5px rgba(0, 0, 0, .2);
                transition: 0.5s;
                transform: rotateY(0deg) scale(0.8);
                opacity: 0.2;
            }

            &:hover{

                .fa{
                    opacity: 1;
                    transform: scale(1.2);
                }
            }
        }
    }

`;