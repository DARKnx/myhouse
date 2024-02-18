import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100%;
    width: 100%;
`

export const Box = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    align-items: center;
    padding: 5vw 5vh;
    display: flex;
    height: auto;
    width: 60%;
`
export const ButtonsContainer = styled.div`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin: 15px 0;
    display: flex;
    width: 80%;
`

export const Label = styled.label`
    color: ${({theme}) => theme.colors.secondaryText};
    margin-bottom: 5px;
    margin-top: 10px;
`

export const LabelContainer = styled.div`
    justify-content: left;
    display: flex;
    width: 100%;
`