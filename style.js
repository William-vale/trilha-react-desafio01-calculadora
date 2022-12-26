import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 300vh;
    background-color: #FAFAFA;

    display: flex;
    justify-content: center;
    aligns-items: center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 45%;
    height: 100vh;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`