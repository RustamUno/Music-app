import styled from 'styled-components'

export const SideBar = styled.div`
max-width: 418px;
padding: 20px 90px 20px 78px;
`

export const Personal = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
padding: 12px 0 15px 0;
`
export const Bild = styled.li`
display: flex;
`

export const Name = styled.p`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
margin-right: 16px;
`

export const Avatar = styled.img`
width: 43px;
height: 43px;
background-color: #313131;
border-radius: 50%;
`

export const Block = styled.div`
height: 100%;
padding: 240px 0 0 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
-webkit-box-pack: start;
    -ms-flex-pack: start;
        justify-content: flex-start;
`

export const List = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
`

export const Item = styled.div`
width: 250px;
height: 150px;
:not(:last-child) {
    margin-bottom: 30px;
  }
`

export const Link = styled.a`
width: 100%;
height: 100%;
`