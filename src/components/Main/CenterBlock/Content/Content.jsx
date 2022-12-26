import '../../../../App.css'
import * as S from './style'
import watch from '../../../../img/icon/watch.svg'
import note from '../../../../img/icon/note.svg'
import like from '../../../../img/icon/like.svg'

function Content(){
    const content = Array.from({length: 10}, () => ({id: new Date().getTime()}));

    return(
                    <S.Content>
                        <S.Title>
                            <S.DesignationOne>Трек</S.DesignationOne>
                            <S.DesignationTwo>ИСПОЛНИТЕЛЬ</S.DesignationTwo>
                            <S.DesignationThree>АЛЬБОМ</S.DesignationThree>
                            <S.DesignationFour>
                                <S.Svg alt="time">
                                    <use xlinkHref={watch}/>
                                </S.Svg>
                            </S.DesignationFour>
                        </S.Title>
                        {
                            content.map(({id})=>(
                                <S.Playlist key={id}>
                                    <S.Item>
                                        <S.Track>
                                            <S.TrackTitle>
                                                <S.Image>
                                                    <S.SvgTrack alt="music">
                                                        <use xlinkHref={note}/>
                                                    </S.SvgTrack>
                                                </S.Image>
                                                <div>
                                                    <S.Link href="/">Guilt <S.Span/></S.Link >
                                                </div>
                                            </S.TrackTitle>
                                            <S.Author>
                                                <S.AuthorLink href="/">Nero</S.AuthorLink>
                                            </S.Author>
                                            <S.TrackAlbum>
                                                <S.AlbumLink href="/">Welcome Reality</S.AlbumLink>
                                            </S.TrackAlbum>
                                            <div>
                                                <S.TimeSvg alt="time">
                                                    <use xlinkHref={like}/>
                                                </S.TimeSvg >
                                                <S.TimeText>4:44</S.TimeText>
                                            </div>
                                        </S.Track>
                                    </S.Item>
                                </S.Playlist>   
                            ))
                        }
                    </S.Content>
    )
}

export default Content;