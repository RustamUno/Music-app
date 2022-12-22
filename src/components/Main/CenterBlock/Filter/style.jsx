import styled from 'styled-components'

export const Filter = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 51px;
gap: 10px;
`
export const Title = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;
`

export const Btn = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #FFFFFF;
border-radius: 60px;
padding: 6px 20px;

:hover {
    cursor: pointer;
  }
:active {
    border-color: #AD61FF;
    color: #AD61FF;
    cursor: pointer;
  }
`

export const Open= styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #AD61FF;
position: absolute; 
padding: 34px;
gap: 10px;
background: #313131;
border-radius: 12px; 
`
export const List=styled.a`
display:flex;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
:hover{
    color: #D9B6FF;
}
`

export const Annum = styled.div`
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
:hover{
    color: #D9B6FF;
`

export const Label = styled.label`
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
:hover{
    color: #D9B6FF;
}
`