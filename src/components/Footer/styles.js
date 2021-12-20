import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    height: 200px;
    background-color: ${props=> props.theme.colors.primary};
`;