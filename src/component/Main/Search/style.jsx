import styled from 'styled-components'

export const Search = styled.div`
margin-left: 40px;
width: 100%;
border-bottom: 1px solid #4E4E4E;
margin-bottom: 51px;
display: flex;
flex-direction: row;
align-items: center;
`

export const Svg = styled.svg`
width: 17px;
height: 17px;
margin-right: 5px;
stroke: #FFFFFF;
fill: transparent;
`

export const SearchPlays = styled.input`
flex-grow: 100;
background-color: transparent;
border: none;
padding: 13px 10px 14px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
outline: none;
color: #fff;
::placeholder {
  background-color: transparent;
  color: #fff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`