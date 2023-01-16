import styled from 'styled-components'

export const Base = styled.div`
display: flex;
max-width: 1920px;
height: 100vh;
margin: 0 auto;
position: relative;
background-color: #181818;
`

export const Navigation = styled.nav`
width: 244px;
background-color: #181818;
padding: 20px 0 20px 36px;
`

export const Logo = styled.div`
width: 113.33px;
height: 43px;
padding: 13px 0 13px 0;
background-color: transparent;
margin-bottom: 20px;
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
height: 50%;
padding-left: 5px;
display: block;
visibility: visible;
background-color: #1C1C1C;
`

export const Image = styled.img`
width: 113.33px;
height: 17px;
color: #181818;
`

export const List = styled.ul`
padding: 18px 0 10px 0;
`

export const Item = styled.li`
padding: 5px 0;
margin-bottom: 16px;
`
export const MenuList = styled.a`
color: #FFFFFF;
font-weight: 400;
font-size: 16px;
line-height: 24px;
:hover{
    color: #AD61FF;
}
`
export const Box = styled.div`
display: flex;
gap: 20%;
flex-grow: 3;
flex-direction: column;
align-items: center;
flex-grow: 3;
padding: 20px 40px 20px 111px;
`

export const Search = styled.div`
width: 100%;
border-bottom: 1px solid #4E4E4E;
margin-bottom: 51px;
display: flex;
flex-direction: row;
align-items: center;
outline: none;
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
  color: #fff;
  &::placeholder {
    background-color: transparent;
    color: #fff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`

export const Warning = styled.div`
display: flex;
width: 431px;
height: 366px;
background-color: #181818;
flex-direction: column;
align-items: center;

`
export const Title = styled.h1`
font-style: normal;
font-weight: 400;
font-size: 160px;
line-height: 168px;
color: #fff;
`

export const Info = styled.p`
padding-top: 8px;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
text-align: center;
color: #4E4E4E;
`

export const Bars = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
background: rgba(28, 28, 28, 0.5);
`

export const Content = styled.div`
display: flex;
flex-direction: column;
`

export const Progress = styled.div`
width: 100%;
height: 5px;
background: #2E2E2E;
`

export const Block = styled.div`
height: 73px;
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const Player = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
    -ms-flex-direction: row;
        flex-direction: row;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: start;
    -ms-flex-pack: start;
        justify-content: flex-start;
`

export const Controls = styled.div`
display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  padding: 0 27px 0 31px;
}
`

export const Prev = styled.div`
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
        margin-right: 23px;
        cursor: pointer;
`
// cursor

export const PrevSvg = styled.svg`
width: 15px;
height: 14px;
`

export const Play = styled.div`
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
margin-right: 23px;
`

export const PlaySvg = styled.svg`
width: 22px;
height: 20px;
fill: #D9D9D9;
`

export const Next = styled.div`
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
margin-right: 28px;
fill: #a53939;
:hover svg {
    fill: transparent;
    stroke: #ACACAC;
    cursor: pointer;
`

export const NextSvg = styled.svg`
width: 15px;
height: 14px;
fill: inherit;
stroke: #D9D9D9;
`

export const Repeat = styled.div`
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
margin-right: 24px;
`

export const RepeatSvg = styled.svg`
width: 18px;
height: 12px;
fill: transparent;
stroke: #696969;
`

export const Shuffle = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
        :hover svg {
            fill: transparent;
            stroke: #ACACAC;
            cursor: pointer;
`

export const ShuffleSvg = styled.svg`
width: 19px;
height: 12px;
fill: transparent;
stroke: #696969;
`

export const TrackPlay = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
    -ms-flex-direction: row;
        flex-direction: row;
`

export const PlayContain = styled.div`
width: auto;
display: -ms-grid;
display: grid;
-ms-grid-columns: auto 1fr;
    grid-template-columns: auto 1fr;
    grid-template-areas: "image author" "image album";
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
`

export const PlayImage = styled.div`
width: 51px;
height: 51px;
background-color: #313131;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
margin-right: 12px;
-ms-grid-row: 1;
-ms-grid-row-span: 2;
-ms-grid-column: 1;
grid-area: image;
`

export const TrackSvg = styled.div`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4E4E4E;
`

export const PlayAuthor = styled.div`
-ms-grid-row: 1;
-ms-grid-column: 2;
grid-area: author;
min-width: 49px;
`

export const AuthorLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
white-space: nowrap;
`

export const PlayAlbum = styled.div`
-ms-grid-row: 2;
-ms-grid-column: 2;
grid-area: album;
min-width: 49px;
`

export const AlbumLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 24px;
color: #FFFFFF;
`

export const LikeDis = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
    -ms-flex-direction: row;
        flex-direction: row;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
margin-left: 26%;
`

export const GradeLike = styled.div`
padding: 5px;
`

export const LikeSvg = styled.svg`
width: 14px;
height: 12px;
fill: transparent;
stroke: #696969;
`

export const GradeDislike = styled.div`
padding: 5px;
margin-left: 28.5px;
`

export const DislikeSvg = styled.svg`
width: 14.34px;
height: 13px;
fill: transparent;
stroke: #696969;
`

export const VolumeBlock = styled.div`
width: auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
padding: 0 92px 0 0;
`

export const VolumeContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
    -ms-flex-direction: row;
        flex-direction: row;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: end;
    -ms-flex-pack: end;
        justify-content: end;
`

export const VolumeImage = styled.div`
width: 13px;
height: 18px;
margin-right: 17px;
`

export const VolumeSvg = styled.svg`
width: 13px;
height: 18px;
fill: transparent;
`

export const VolumeProgress = styled.div`
width: 109px;
`

export const VolumeLine = styled.input`
width: 109px;
`