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
    border: 0.1px solid rgba(254,32,32, 0.4);
    border-radius: 5px;
    padding: 5% 10%;
`

export const FiltersContainer = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    margin-top: 50px;
    margin: 0 auto;
    display: flex;
    padding: 20px;
    height: auto;
    width: 60%;
`