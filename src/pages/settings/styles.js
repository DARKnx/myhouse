import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    height: 100vh;
    display: flex;
    width: 100%;
`

export const Box = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    flex-direction: column;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 5vw 5vh;
    height: auto;
    width: 30%;
`