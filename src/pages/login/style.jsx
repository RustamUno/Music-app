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
// justify-content: space-around;
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
height: 252px;
background: white;
border-radius: 12px;
`

export const Image = styled.img`
padding: 43px 113px 0 113px;
`

export const Login = styled.input`
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

export const Password = styled.input`
// padding-bottom: 10px;
font-family: 'StratosSkyeng';
font-style: normal;
font-weight: 400;
font-size: 18px;
border: none;
outline: #E1E1E1;
border-bottom: 1px solid #E1E1E1
`

// export const NavLinks = styled{NavLink}`
// font-style: normal;
// font-weight: 400;
// font-size: 18px;
// line-height: 24px;
// width: 278px;
// height: 52px;
// border-radius: 6px;
// border: none;
// background: #580EA2;
// color: white;
// text-align: center;
// padding-top: 15px;
// `

export const Errors = styled.div`
text-align: center;
border-radius: 2px;
width: 272px;
height: 20p;
background: #c6eec6;
color: #d02e2e;
`
