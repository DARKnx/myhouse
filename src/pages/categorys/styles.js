import styled from "styled-components";

export const Container = styled.div`
    flex-direction: column;
    align-items: center;
    display: flex;
    height: auto;
    width: 100%;
`

export const Box = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    margin: 5px 0;
    padding: 20px;
    display: flex;
    height: auto;
    width: 30%;
`