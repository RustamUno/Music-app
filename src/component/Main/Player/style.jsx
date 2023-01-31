import styled from 'styled-components'

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
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
`

export const Controls = styled.div`
display: flex;
flex-direction: row;
padding: 0 27px 0 31px;
}
`

export const Prev = styled.div`
padding: 5px;
display: flex;
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
display: flex;
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
display: flex;
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
display: flex;
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
display: flex;
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
display: flex;
flex-direction: row;
`

export const PlayContain = styled.div`
width: auto;
display: grid;
grid-template-columns: auto 1fr;
grid-template-areas: "image author" "image album";
align-items: center;
`

export const PlayImage = styled.div`
width: 51px;
height: 51px;
background-color: #313131;
display: flex;
align-items: center;
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
display: flex;
flex-direction: row;
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
display: flex;
align-items: center;
padding: 0 92px 0 0;
`

export const VolumeContent = styled.div`
display: flex;
flex-direction: row;
align-items: center;
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