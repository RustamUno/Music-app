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
overflow-y: scroll;
height: 300px;
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
::-webkit-scrollbar {
  width: 7px;
  background-color: #4B4949;
  border-radius: 0 12px 12px 0;
} 
`
export const OpenYears=styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 403px;
height: 92px;
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
padding-left: 10px;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
:hover{
    color: #D9B6FF;
}
`