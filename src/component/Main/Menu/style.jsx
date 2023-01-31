import styled from "styled-components";

export const Navigation = styled.nav`
width: 20%;
background-color: #181818;
padding: 20px 0 20px 36px;
`
export const Option = styled.div`
height: 50%;
padding-left: 5px;
display: block;
visibility: visible;
`

export const Logo = styled.div`
width: 113.33px;
height: 43px;
padding: 13px 0 13px 0;
background-color: transparent;
margin-bottom: 20px;
`

export const Image = styled.img`
width: 113.33px;
height: 17px;
color: #181818;
`

export const Burger = styled.div`
width: 20px;
height: 36px;
padding: 13px 0;
display: flex;
flex-direction: column;
justify-content: space-between;
:active{
    transform: rotateY(180deg);
    transition: 0.5s;
}
`

export const Line = styled.span`
display: inline-block;
width: 100%;
height: 1px;
background-color: #D3D3D3;
`

export const Menu = styled.div`
height: 90vh;
padding-left: 5px;
display: block;
visibility: visible;
background-color: #1C1C1C;

`

export const List = styled.ul`
padding: 18px 0 10px 0;
`

export const Item = styled.li`
padding: 5px 0;
margin-bottom: 16px;
`


