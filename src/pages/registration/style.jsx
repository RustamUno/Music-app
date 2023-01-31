import styled from 'styled-components'

export const Base = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
min-height: 100%;
overflow: hidden;
max-width: 1920px;
height: 100vh;
margin: 0 auto;
position: relative;
background-color: #181818;
`
export const Box = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 366px;
height: 439px;
background: white;
border-radius: 12px;
`

export const BoxEnter = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 366px;
height: 349px;
background: white;
border-radius: 12px;
`

export const Image = styled.img`
padding: 43px 113px 0 113px;
`

export const Log = styled.input`
padding-bottom: 10px;
font-family: 'StratosSkyeng';
color: #E1E1E1;
font-style: normal;
font-weight: 400;
font-size: 18px;
border: none;
outline: none;
border-bottom: 1px solid #E1E1E1
`

export const Pas = styled.input`
padding-bottom: 10px;
font-family: 'StratosSkyeng';
font-style: normal;
font-weight: 400;
font-size: 18px;
border: none;
outline: #E1E1E1;
border-bottom: 1px solid #E1E1E1
`

export const Repeat = styled.input`
padding-bottom: 10px;
font-family: 'StratosSkyeng';
font-style: normal;
font-weight: 400;
font-size: 18px;
border: none;
outline: #E1E1E1;
border-bottom: 1px solid #E1E1E1
`

export const Warning = styled.div`
height: 104px;
display: flex;
flex-direction: column`